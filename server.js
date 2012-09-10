var net = require('net');
var sordBuffer = require('./inc/sordBuffer.js');

var sord = {
  art: require('./inc/art.js'),
  conf: require('./inc/config.js').sordConfig,
  readline : function(pass, callback, line, once, noprint) {
    if ( typeof once === 'undefined' || once === true ) { pass.inBuff.clear(); }
    if ( typeof line === 'undefined' ) { line = ''; }
    if ( typeof noprint === 'undefined' ) { noprint === false; }
    while ( pass.inBuff.length > 0 ) { 
      var x = pass.inBuff.shift();
      var code = x.charCodeAt(0);
      if ( (code === 8 || code === 127) && line.length > 0 ) { 
        line = line.substr(0,line.length-1); 
        pass.conn.write("\033[1D \033[1D");
      }
      if ( code === 13 ) { 
        pass.conn.write("\r\n");
        callback(pass, line); return;
      } 
      if ( code > 31 && code < 127 ) {
        line = line + x;
        if ( noprint === false ) { pass.conn.write(x); }
        if ( noprint === 2 ) { pass.conn.write('*'); }
      }
    }
    setTimeout(function () { sord.readline(pass, callback, line, false) }, 100);
  },
  pause: function (pass, callback) {
    pass.outBuff.queue(" `%[`2-`0=`2- `0P`2ress `0E`2nter -`0=`2-`%]`7 ");
    sord.readline(pass, callback, '', true, false);
  }
};

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  
  var passer = { 
    outBuff: new sordBuffer(), 
    inBuff: new sordBuffer(), 
    conn: c, 
    int: '' 
  };
  var writer = setInterval(
    function() { 
      var tmp = passer.outBuff.read(); 
      if ( tmp !== false ) { c.write(tmp); } 
    }, 5);
  
    // Clear the input buffer of any captured set-up control chars
  setTimeout(function() { passer.inBuff.clear(); },500);
   // Set character mode (client side - do not wait for CR-LF)
  c.write(String.fromCharCode(255) + String.fromCharCode(253) + String.fromCharCode(34),'ascii');
   // No local (client-side) echo
  c.write(String.fromCharCode(255) + String.fromCharCode(251) + String.fromCharCode(1),'ascii');
  
  c.on('end', function() {
    clearInterval(writer);
    console.log('server disconnected');
  });
  c.on('data', function(data) {
    data.toString().split('').forEach(function(x) {
      var code = x.charCodeAt(0);
        // Dump High ASCII, all control besides BKSPC & DEL
        if ( code === 8 || code === 13 || ( code > 31 && code < 128 ) ) { 
          passer.inBuff.queue(x);
        }
    });
  });
  c.write("Establishing Connection Details...  Setting Terminal...  Running... (Please Wait)\r\n");
  setTimeout(function() {
    passer.outBuff.queue("  `9W`1elcome to `9S`%.`9O`%.`9R`%.`9D`%.    `7\r\n");
    sord.pause(passer, show.Banner);
  }, 1000);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});

// Here be dragons.
show = {};

show.Banner = function(pass) {
  pass.outBuff.queue(sord.art.banner());
  sord.pause(pass, somefunc);
}

somefunc = function(pass, line) {
  console.log('ran');
  pass.outBuff.queue('`4You Said: `2' + line);
}

