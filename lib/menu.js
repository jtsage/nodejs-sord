"use strict";
var c = require('nodejs-ansibuffer').ANSIChars;

var SordMenuArt = {
  'banner': function() {
    return (
      "\r\n\r\n" +
      c.ESC+"32m                         ("+c.ESC+"1mE"+c.ESC+"22m)nter the realm of the Dragon"+c.ESC+"0m\r\n" +
      c.ESC+"32m                         ("+c.ESC+"1mL"+c.ESC+"22m)ist Warriors"+c.ESC+"0m\r\n" +
      c.ESC+"32m                         ("+c.ESC+"1mI"+c.ESC+"22m)nstructions"+c.ESC+"0m\r\n" +
      c.ESC+"32m                         ("+c.ESC+"1mQ"+c.ESC+"22m)uit the game server\r\n"+c.ESC+"0m\r\n" +
      c.ESC+"32m                         Your choice, warrior? ["+c.ESC+"1mE"+c.ESC+"22m]: "+c.ESC+"0m"+c.ESC+"0m "
    );
  },
  'town': function(opts) {
    var retty = '';
    var pass = opts[0];
    var xpert = opts[1];
    if ( typeof xpert === 'undefined' ) { xpert = pass.xpert; }
    if ( xpert === false ) {
      retty +=
        "\r\n\r\n`%  Saga of the Red Dragon - `2Town Square\r\n" +
        pass.sord.art.line(2) +
        "`2  The streets are crowded, it is difficult to\r\n  push your way through the mob....\r\n\r\n" +
        pass.sord.util.twocol("(F)orest", "(S)laughter other players", 5, 5) +
        pass.sord.util.twocol("(K)ing Arthurs Weapons", "(A)bduls Armour", 5, 5) +
        pass.sord.util.twocol("(H)ealers Hut", "(V)iew your stats", 5, 5) +
        pass.sord.util.twocol("(I)nn", "(T)urgons Warrior Training", 5, 5) +
        pass.sord.util.twocol("(Y)e Old Bank", "(L)ist Warriors", 5, 5) +
        pass.sord.util.twocol("(W)rite Mail", "(D)aily News", 5, 5) +
        pass.sord.util.twocol("(P)eople Online", "(O)ther Places", 5, 5) +
        pass.sord.util.twocol("(X)pert Mode", "(M)ake Announcement", 7, 5) +
        pass.sord.util.twocol("", "(Q)uit to Fields", 5, 2);
    }
    retty +=
      "\r\n  `#The Town Square `8(? for menu)`.\r\n" +
      "  `8(F,S,K,A,H,V,I,T,Y,L,W,D,P,O,X,M,Q)`.\r\n\r\n" +
      "  `2Your command, `0" + pass.sord.users.data[pass.curUser].fullname + "`2? `%[" + pass.sord.gettime(pass.startTime) + "`%] `0:`2-`0: `7";
    return retty;
  }
}

exports.SordMenuArt = SordMenuArt;

var SordMenu = {
  'prolouge': function(pass, choice) {
    switch ( choice ) {
      case 'E':
        setTimeout(pass.sord.util.login, 0, pass, '', {'stage':0, 'att':0});
        break;
      case 'Q':
        pass.sord.killconn(pass);
        break;
      case 'I':
        pass.outBuff.queue(pass.sord.art.instruct());
        pass.sord.pause(pass, function() {
          pass.sord.menuwait(pass,pass.sord.menuctrl.prolouge,pass.sord.menus.banner);
        });
        break;
      case 'L':
        pass.outBuff.queue(pass.sord.util.listUsers(pass));
        pass.sord.pause(pass, function() {
          pass.sord.menuwait(pass,pass.sord.menuctrl.prolouge,pass.sord.menus.banner);
        });
        break;
    }
  },
  'town': function(pass, choice) {
    var choices = ['Q','V','L','X','?'];
    switch ( choice ) {
      case 'Q':
        pass.sord.killconn(pass);
        break;
      case 'V':
        pass.sord.util.userinfo(pass, function() {
          setTimeout(pass.sord.menuwait,0,pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass],choices);
        }); break;
      case 'L':
        pass.outBuff.queue(pass.sord.util.listUsers(pass));
        pass.sord.pause(pass, function() {
          pass.sord.menuwait(pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass]);
        });
        break;
      case 'X':
        pass.xpert = (pass.xpert === true)?false:true;
        setTimeout(pass.sord.menuwait,0,pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass],choices);
        break;
      case '?':
        setTimeout(pass.sord.menuwait,0,pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass,false],choices);
        break;
      default:
        setTimeout(pass.sord.menuwait,0,pass,pass.sord.menuctrl.town,pass.sord.menus.town,[pass,true],choices);
        break;
    }
  },
}

exports.SordMenu = SordMenu;

