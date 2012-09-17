"use strict";

exports.listUsers = function(pass) {
  var output = "\r\n\r\n`2    Name                    Experience    Level    Mastered    Status\r\n";
  
  output += pass.sord.art.line(2);
  
  var userOrder = pass.sord.users.sortByKeys([['level','desc'],['exp','desc']]);
  
  for ( var idx = 0; idx < userOrder.length; idx++ ) {
    var curUser = pass.sord.users.data[userOrder[idx][0]];
    var nextCol = 39 - curUser['exp'].toString().length;
    
    output += ( curUser.sex === 2 ) ? '`#F ': '  ';
    output += '`9' + ['', 'D','M','T'][curUser["class"]] + '  ';
    output += '`2' + curUser.fullname + "\x1b["+nextCol+"G" + '`2' + curUser['exp'] + '       ';
    output += ( curUser.level.toString().length > 1 ) ? curUser.level : ' ' + curUser.level + '       ';
    output += ( curUser.spcl1 > 19 ) ? (( curUser.spcl1 > 39 ) ? '`%D ' : '`7D ' ) : '  ';
    output += ( curUser.spcl2 > 19 ) ? (( curUser.spcl2 > 39 ) ? '`%M ' : '`7M ' ) : '  ';
    output += ( curUser.spcl3 > 19 ) ? (( curUser.spcl3 > 39 ) ? '`%T ' : '`7T ' ) : '  ';
    output += '    ' + (( curUser.alive == 1 ) ? '`0Alive' : '`1 Dead');
    output += "\r\n";
  }
  return output + "\r\n";
}

exports.casebold = function(text, bold, normal) {
  if ( typeof normal === 'undefined' ) { normal = bold; }
  var boldCode = "\x1b[1;3" + bold + "m";
  var normCode = "\x1b[0m\x1b[3" + normal + "m";
  text = text.replace(/([A-Z:*<>!])/g, function(letter) {
    return boldCode + letter + normCode;
  });
  return ( text + "\x1b[0m" );
}
  
exports.login = function(pass, line, extra) {
  var self = this;
  console.log(extra);
  switch ( extra.stage ) {
    case 0:
      extra.att++;
      extra.stage = 1;
      extra.passopt = true;
      if ( extra.att > 3 ) {
        pass.conn.end(pass.sord.util.casebold("\r\nToo Many Failed Login Attempts\r\n",1)); return;
      }
      pass.outBuff.queue(pass.sord.util.casebold("\r\nWelcome Warrior!  Enter Your Login Name (OR '`9new`2') :-: ", 2));
      pass.sord.readline(pass, pass.sord.util.login, extra); 
      break;
    case 1:
      if ( line === 'new' ) { 
        extra.stage = 'a';
        setTimeout(pass.sord.util.login, 0, pass, '', extra);
      } else { 
        extra.uname = line.toString();
        extra.stage = 2;
        extra.noprint = 2;
        pass.outBuff.queue(pass.sord.util.casebold("Password :-: ",2));
        pass.sord.readline(pass, pass.sord.util.login, extra);
      }
      break;
    case 2:
      extra.pass = line;
      var possibleUser = pass.sord.users.find('username', extra.uname);
      if ( possibleUser !== false && pass.sord.users.data[possibleUser].password === extra.pass ) {
        console.log('good');
      } else {
        pass.outBuff.queue(pass.sord.util.casebold("Bad Username / Password Combo\r\n", 1));
        extra.uname = false;
        extra.pass = false;
        extra.stage = 0;
        setTimeout(pass.sord.util.login, 0, pass, '', extra);
      }
      break;
    case 'a':
      pass.outBuff.queue(pass.sord.util.casebold("\r\nSorry, Registration Closed Right Now!!\r\n", 4));
      extra.uname = false;
      extra.stage = 0;
      setTimeout(pass.sord.util.login, 0, pass, '', extra);
      break;
  }
}
