var net = require('net');

var sord = {
  art: require('./inc/art.js'),
  conf: require('./inc/config.js').sordConfig,
  queue : function(text,buffer) {
    if ( typeof buffer !== 'object' || text === '' ) { return buffer; }
    
    text = text.replace(/`([0-9!@#$%])/g, function(match, oper) {
      switch (oper) {
        case '1': return "\033[0m\033[31m";
        case '2': return "\033[0m\033[32m";
        case '3': return "\033[0m\033[33m";
        case '4': return "\033[0m\033[34m";
        case '5': return "\033[0m\033[35m";
        case '6': return "\033[0m\033[36m";
        case '7': return "\033[0m\033[37m";
        case '8': return "\033[0m\033[1;30m";
        case '9': return "\033[0m\033[1;31m";
        case '0': return "\033[0m\033[1;32m";
        case '!': return "\033[0m\033[1;33m";
        case '@': return "\033[0m\033[1;34m";
        case '#': return "\033[0m\033[1;35m";
        case '$': return "\033[0m\033[1;36m";
        case '%': return "\033[0m\033[1;37m";
        default: return '`' + oper;
      }
    });
    return buffer.concat(text.split(''));
  },
  buffWrite : function(conn, buffer) {
    escseq = false;
    if ( typeof buffer !== 'object' ) { return false; }
    if ( buffer.length > 4 ) { 
      i = 0;
      outString = '';
      while ( i<5 ) {
        outChar = buffer.shift(); i++;
        if ( outChar === "\033" ) {
          string = "\x1b"; escseq = true;
          while (escseq === true ) {
            outChar = buffer.shift(); i++;
            code = outChar.charCodeAt(0);
            string = string + outChar;
            if ( ! ( code === 59 || ( code > 47 && code < 58 ) ) ) { 
              escseq = false; outString = outString + string;
            }
          }
        } else {
          outString = outString + outChar;
        }
      }
      conn.write(outString, 'utf8');
      return true;
    }
    if ( buffer.length > 0 ) { conn.write(buffer.shift(),'utf8'); return true; }
    return false;
  },
  readline : function(pass, callback, line, once, noprint) {
    if ( typeof once === 'undefined' || once === true ) { pass.inBuff = []; }
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
      }
    }
    setTimeout(function () { sord.readline(pass, callback, line, false) }, 100);
  },
  pause: function (pass, callback) {
    pass.outBuff = sord.queue(" `%[`2-`0=`2- `0P`2ress `0E`2nter -`0=`2-`%]`7 ", pass.outBuff);
    sord.readline(pass, callback, '', true, false);
  }
};

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  
  var passer = { outBuff: [], inBuff: [], conn: c, int: '' };
  var writer = setInterval(function() { sord.buffWrite(c, passer.outBuff); }, 5);
  
    // Clear the input buffer of any captured set-up control chars
  setTimeout(function() { passer.inBuff = []; },500);
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
          passer.inBuff = sord.queue(x, passer.inBuff); 
        }
    });
  });
  c.write("Establishing Connection Details...  Setting Terminal...  Running... (Please Wait)\r\n");
  setTimeout(function() {
    passer.outBuff = sord.queue("  `9W`1elcome to `9S`%.`9O`%.`9R`%.`9D`%.    `7\r\n", passer.outBuff);
    sord.pause(passer, show.Banner);
  }, 1000);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});

// Here be dragons.
show = {};

show.Banner = function(pass) {
  pass.outBuff = sord.queue(sord.art.banner(),pass.outBuff);
  sord.pause(pass, somefunc);
}

somefunc = function(pass, line) {
  console.log('ran');
  pass.outBuff = sord.queue('`4You Said: `2' + line, pass.outBuff);
}

