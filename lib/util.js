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
      if ( global.sordDebug === true ) { // Skip login.
        extra.stage = 2; extra.uname = 'jtsage'; setTimeout(pass.sord.util.login, 0, pass, 'darcyeh', extra); break;
      }
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
        pass.curUser = possibleUser;
        pass.sord.users.data[pass.curUser].online = 1;
        setTimeout(function() {
            pass.sord.util.daily(pass, function() {
              pass.sord.util.userinfo(pass, function() {
                setTimeout(pass.sord.menuwait,0,pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass,false],['F','S','K','A','H','V','I','T','Y','L','W','D','P','O','X','M','Q','?']);
              });
            });
          },0);
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

exports.daily = function(pass, callback) {
  var theLine = pass.sord.acenter("`8-`7=`8-`7=`8-`7=`8-`7=`8-`7=`8-\r\n");
  pass.outBuff.queue("\r\n\r\n`% Today's Happenings`2....\r\n"+theLine);

  if ( global.sordDebug !== true ) {
    for ( var thisHap in pass.sord.daily.data ) {
      pass.outBuff.center("`2" + pass.sord.daily.data[thisHap] + "\r\n");
      pass.outBuff.queue(theLine);
    }
  }
  pass.sord.pause(pass,callback);
}

exports.userinfo = function(pass, callback) {
  // View player stats
  var thisUser = pass.sord.users.data[pass.curUser];
  var thisD = pass.sord.gamedata.data;
  if ( global.sordDebug !== true ) {
    pass.outBuff.queue("\r\n\r\n  `%" + thisUser.fullname + "`2's Stats...\r\n");
    pass.outBuff.queue(pass.sord.art.line(2));
    pass.outBuff.queue(" `2 Experience    : `0" + thisUser.exp    + "\x1b[40G`2Player Kills       : `0" + thisUser.pkill + "\r\n");
    pass.outBuff.queue(" `2 Level         : `0" + thisUser.level  + "\x1b[40G`2HitPoints          : `0" + thisUser.hp + " `2of`0 "+thisUser.hpmax+"\r\n");
    pass.outBuff.queue(" `2 Forest Fights : `0" + thisUser.ffight + "\x1b[40G`2Player Fights Left : `0" + thisUser.pfight + "\r\n");
    pass.outBuff.queue(" `2 Gold In Hand  : `0" + thisUser.gold   + "\x1b[40G`2Gold In Bank       : `0" + thisUser.bank + "\r\n");
    pass.outBuff.queue(" `2 Weapon        : `0" + thisD.weapon[thisUser.weapon].name + "\x1b[40G`2Attack Strength    : `0" + thisUser.strong + "\r\n");
    pass.outBuff.queue(" `2 Armor         : `0" + thisD.armor[thisUser.armor].name   + "\x1b[40G`2Defensive Strength : `0" + thisUser.defence + "\r\n");
    pass.outBuff.queue(" `2 Charm         : `0" + thisUser.charm  + "\x1b[40G`2Gems               : `0" + thisUser.gems + "\r\n\r\n");
    for ( var skillnum in [1,2,3] ) {
      if ( thisUser.class === skillnum || thisUser['spcl'+skillnum] > 0 ) {
        pass.outBuff.queue(" `2 The " + thisD.classes[skillnum] + " Skills: `0" + thisUser['spcl'+skillnum] + "\x1b[40G`2Uses Today: (`0" + thisUser['use'+skillnum] + "`2)\r\n");
      }
    }
    pass.outBuff.queue("\r\n  `0You are currently interested in `%The " + thisD.classes[thisUser.class]+" `0skills.\r\n\r\n");
  }
  pass.sord.pause(pass,callback);
}

exports.twocol = function(text1, text2, color1, color2) {
  var endStr = "`2)";
  var color1Str = "`2(\x1b[1;3" + color1 + "m";
  var color2Str = "`2(\x1b[1;3" + color2 + "m";
  var text1 = text1.replace(/\(([A-Z:<>])\)/, function(all, lett) {
    return color1Str + lett + endStr;
  });
  var text2 = text2.replace(/\(([A-Z:<>])\)/, function(all, lett) {
    return color2Str + lett + endStr;
  });
  return ( "  " + text1 + "\x1b[36G" + text2 + "\x1b[0m\r\n" );
}
