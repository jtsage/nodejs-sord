var net = require('net');
var art = require('./inc/art.js');

var sord = {
  queue : function(text,buffer) {
    if ( typeof buffer !== 'object' || text === '' ) { return buffer; }
    
    text = text.replace(/`([0-9!@#$%])/g, function(match, oper) {
      switch (oper) {
        case '1': return "\033[31m";
        case '2': return "\033[32m";
        case '3': return "\033[33m";
        case '4': return "\033[34m";
        case '5': return "\033[35m";
        case '6': return "\033[36m";
        case '7': return "\033[37m";
        case '8': return "\033[1;30m";
        case '9': return "\033[1;31m";
        case '0': return "\033[1;32m";
        case '!': return "\033[1;33m";
        case '@': return "\033[1;34m";
        case '#': return "\033[1;35m";
        case '$': return "\033[1;36m";
        case '%': return "\033[1;37m";
        default: return '`' + oper;
      }
    });
    return buffer.concat(text.split(''));
  },
  buffWrite : function(conn, buffer) {
    if ( typeof buffer !== 'object' ) { return false; }
    if ( buffer.length > 4 ) { 
      conn.write(buffer.shift()+buffer.shift()+buffer.shift()+buffer.shift()+buffer.shift(),'utf8');
      return true;
    }
    if ( buffer.length > 0 ) { conn.write(buffer.shift(),'utf8'); return true; }
    return false;
  }
};

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  var outBuff = [];
  var inBuff = [];
  var writer = setInterval(function() { sord.buffWrite(c, outBuff); }, 5);

  setTimeout(function() {
    // Clear the input buffer of any captured set-up control chars
    inBuff = [];
    // For now, just echo input (later)
    var twrite = setInterval(function() { outBuff = sord.queue(inBuff.join(''), outBuff); inBuff = []; }, 200);
  },500);
  
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
        if ( code === 8 || ( code > 31 && code < 128 ) ) { 
          inBuff = sord.queue(x, inBuff); 
        }
        if ( code === 13 ) { inBuff = sord.queue("\r\n", inBuff); } //CR+LF
    });
  });
  
  c.write('hello\r\n');
  outBuff = sord.queue('Howdy ho!',outBuff);
  outBuff = sord.queue(art.instruct(),outBuff);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});

