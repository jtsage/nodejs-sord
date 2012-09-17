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
