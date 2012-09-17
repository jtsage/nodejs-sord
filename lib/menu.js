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
  }
}
  
exports.SordMenu = SordMenu;
      
