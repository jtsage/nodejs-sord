/*
          ASCII       UNICODE
Variable	OCT		DEC		DEC		  HEX
	A176		260		176		9617		2591
	A177		261		177		9618		2592
	A178		262		178		9619		2593
	A219		333		219		9608		2588
	A220		334		220		9604		2584
	A221		335		221		9612		258C
	A222		336		222		9616		2590
	A223		337		223		9600		2580
	A254		376		254		9642		25AA
*/

var c = {
  ESC: "\033[",
  A176: "\u2591",
  A177: "\u2592",
  A178: "\u2593",
  A219: "\u2588",
  A220: "\u2584",
  A221: "\u258c",
  A222: "\u2590",
  A223: "\u2580",
  A254: "\u25aa"
};

exports.instruct = function() {
		// Game Instructions / Intro
  var retval  = "                     `%           Instructions\r\n"
  retval += "`0-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\r\n"
  retval += "  `9WELCOME TO THE ADVENTURE OF A LIFETIME!\r\n\r\n"
  retval += "  `0** `9Full Multi-Node Support.\r\n"
  retval += "  `0** `9This game is FINISHABLE! (If the sysop chooses)\r\n"
  retval += "  `0** `9Real Time Online Messages And Battles.\r\n"
  retval += "  `0** `9Marrage And other 'Real Life' Options.\r\n"
  retval += "  `0** `9RIP & In-Game Downloading Of Icons File Support. (Both are Auto Detect)\r\n"
  retval += "  `0** `9Auto Reincarnation If A Player Is Dead For Two Days.\r\n\r\n\r\n"
  retval += "  `2This is multi player battle game, created for BBS's, it is the\r\n"
  retval += "  `2type of game where you kill other players, get stronger and stronger\r\n"
  retval += "  `2and your number one goal is to stay #1 in the player rankings!  Of\r\n"
  retval += "  `2course, killing the Dreaded Red Dragon will make you a hero, and your\r\n"
  retval += "  `2name will be immortalized in the Hall Of Honor.\r\n\r\n"
  retval += "  `2Each day, you are given a certain amount of fights per day, once you\r\n"
  retval += "  `2use them, you can no longer do battle that day, you must call back\r\n"
  retval += "  `2the NEXT day to be 'refilled'.\r\n\r\n"
  retval += "  `2Stay at the Inn, and you will be safe from `0MOST`2 attackers...If they\r\n"
  retval += "  `2want to kill you bad enough, they may find a way...However costly.\r\n\r\n"
  retval += "  `2Be sure to buy better armour and weapons when possible, it really makes\r\n"
  retval += "  `2a LARGE difference.   \r\n\r\n"
  retval += "  `2Be sure to take advantage of the advanced mail writing functions\r\n"
  retval += "  `2avaible, they are very fast and easy to use, and you will have LOADS\r\n"
  retval += "  `2more fun when you get to `0KNOW`2 who you are killing!\r\n\r\n"
  retval += "  `2Particapate in conversation at The Bar,  interacting with real people\r\n"
  retval += "  `2is what makes BBS games so enjoyable, and this game is loaded with ways\r\n"
  retval += "  `2to do that... From insulting people in the Daily Happenings, to \r\n"
  retval += "  `2slaughtering them in cold blood, then sending them mail gloating over\r\n"
  retval += "  `2the victory, this game will let you have some fun!\r\n"
  retval += "  `2The game is pretty self explanatory, so I will let you, the player, \r\n"
  retval += "  `2explore on your own.  Just hit '`0?`2' when you're not sure, and you will\r\n"
  retval += "  `2get a menu.  For starters, try visiting the Inn.\r\n"
  retval += "  `2If you are male, try your hand at Flirting with Violet...If you\r\n"
  retval += "  `2are female, you can try your luck with The Bard.\r\n\r\n"
  retval += "  `2If someone else attacks you and loses, you will get the experience\r\n"
  retval += "  `2just as if you killed them yourself.  (You will be mailed on the\r\n"
  retval += "  `2details of the battle)\r\n\r\n"
  retval += "  `9NOTE:  This game contains some mature subject matter.\r\n\r\n"
  retval += "                  `0GOOD LUCK AND HAPPY GAMING!`9\r\n"
  return retval
}

exports.banner = function() {
  var thismsg = "\r\n"+c.ESC + "0m                          " +c.A220 + c.A220 + c.A220 + c.A220 + c.A220 +"                                                " + c.ESC + "0m\r\n";
		thismsg += "                      "+c.A220+c.A220+c.A219+c.A219+c.A219+c.A219+c.ESC+"1;47m"+c.A176+c.A177+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A220+c.A220+c.ESC+"0m                                            "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"1m  "+c.ESC+"31mS"+c.ESC+"0;31mAGA"+c.ESC+"37m               "+c.A219+c.A219+c.ESC+"30;47mo"+c.ESC+"37;40m"+c.A219+c.ESC+"1;47m"+c.A176+c.A176+c.A177+c.A177+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.ESC+"0m                                           "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"1m  "+c.ESC+"31mO"+c.ESC+"0;31mF THE"+c.ESC+"37m            "+c.A219+c.A219+c.ESC+"30;47mO"+c.ESC+"37;40m"+c.A219+c.A219+c.ESC+"1;47m"+c.A176+c.A177+c.A177+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.ESC+"0m                 "+c.A220+c.A220+c.A220+c.ESC+"1m"+c.A220+c.A220+c.ESC+"0m                    "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"1m  "+c.ESC+"31mR"+c.ESC+"0;31mED"+c.ESC+"37m               "+c.A219+c.ESC+"30;47mo"+c.ESC+"37;40m"+c.A219+c.A219+c.ESC+"1;47m"+c.A176+c.A176+c.A177+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.ESC+"0m                   "+c.A223+c.A219+c.ESC+"1;47m"+c.A176+c.A219+c.A219+c.A219+c.ESC+"40m"+c.A220+c.A220+" "+c.ESC+"0;31m"+c.A220+c.ESC+"37m             "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"31m  "+c.ESC+"1mD"+c.ESC+"0;31mRAGON 0.9.9"+c.ESC+"37m      "+c.A223+c.A219+c.A219+c.ESC+"1;47m"+c.A176+c.A177+c.A177+c.A178+c.A219+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A223+c.ESC+"0m                     "+c.A219+c.ESC+"1;47m"+c.A219+c.A219+c.ESC+"40m"+c.A223+c.A223+c.ESC+"0;31m"+c.A220+c.ESC+"1;41m"+c.A176+" "+c.ESC+"0;31m"+c.A220+c.ESC+"37m           "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"31m  concept"+c.ESC+"37m            "+c.A223+c.ESC+"1;47m"+c.A176+c.A177+c.A177+c.A178+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A219+c.A223+c.ESC+"0m        "+c.ESC+"1m"+c.A220+c.ESC+"0m        "+c.ESC+"1m"+c.A220+c.ESC+"0m       "+c.ESC+"31m"+c.A220+c.A220+c.ESC+"1;41m"+c.A176+c.A178+"  "+c.A176+" "+c.ESC+"0;31m"+c.A220+c.A220+c.ESC+"37m        "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"31m  Seth Robinson "+c.ESC+"37m"+c.A222+"       "+c.A223+c.A223+c.ESC+"1;47m"+c.A178+c.ESC+"40m"+c.A219+c.A219+c.A219+c.A219+c.A223+c.A223+c.ESC+"0m        "+c.A220+c.ESC+"1;47m"+c.A220+c.ESC+"40m"+c.A223+"    "+c.ESC+"0m"+c.A220+c.A220+c.ESC+"1;47m"+c.A220+c.ESC+"40m"+c.A223+c.A223+"   "+c.ESC+"0m"+c.A223+c.A219+c.A220+c.ESC+"1m"+c.A220+"  "+c.ESC+"0;31m"+c.A223+c.ESC+"1;41m"+c.A176+c.A177+c.A178+"  "+c.ESC+"0;31m"+c.A223+c.ESC+"41m  "+c.ESC+"1m"+c.A176+" "+c.ESC+"0;31m"+c.A220+c.ESC+"37m     "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"31m  by"+c.ESC+"0m            "+c.A219+"                      "+c.A220+c.ESC+"1;47m"+c.A220+c.ESC+"40m"+c.A223+"   "+c.ESC+"0m"+c.A220+c.ESC+"1;47m"+c.A220+c.A220+c.A219+c.ESC+"40m"+c.A223+c.ESC+"0m        "+c.A223+c.ESC+"1;47m"+c.A176+c.A219+c.ESC+"40m"+c.A220+"  "+c.ESC+"0;31m"+c.A223+c.ESC+"1;41m"+c.A177+c.A178+"  "+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+" "+c.A176+" "+c.A176+c.ESC+"0;31m"+c.A220+c.ESC+"37m   "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"1;34m  J"+c.ESC+"0;34m."+c.ESC+"1mT"+c.ESC+"0;34m."+c.ESC+"1mS"+c.ESC+"0;34mage"+c.ESC+"0m     "+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m"+c.A221+"                   "+c.A220+c.ESC+"1;47m"+c.A177+c.A176+c.ESC+"40m"+c.A223+" "+c.ESC+"0m"+c.A220+c.ESC+"1;47m"+c.A220+c.A220+c.A219+c.ESC+"40m"+c.A223+c.ESC+"0m            "+c.A223+c.ESC+"1;47m"+c.A177+c.A219+c.A219+c.ESC+"40m"+c.A220+" "+c.ESC+"0;31m"+c.A223+c.ESC+"1;41m"+c.A177+c.A176+c.A178+" "+c.ESC+"0;31m"+c.A220+c.A223+c.ESC+"1;41m"+c.A176+c.A178+c.A176+c.A176+c.A177+c.A177+c.ESC+"0;37;40m "+c.ESC+"0m\r\n";
		thismsg += "               "+c.A219+c.A219+"                   "+c.ESC+"1;47m"+c.A176+c.A177+c.A219+c.ESC+"40m"+c.A223+" "+c.ESC+"0m"+c.A223+c.ESC+"1m"+c.A223+c.ESC+"41m"+c.A223+c.ESC+"0;31m"+c.A220+c.A220+c.A220+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A178+c.A177+c.A176+"   "+c.A220+c.A220+c.A220+c.A220+c.A223+c.A220+c.ESC+"1;41m"+c.A176+c.ESC+"0;31m"+c.A220+c.ESC+"1;41m"+c.A177+c.ESC+"0;31m"+c.A220+c.ESC+"41m "+c.ESC+"37;40m "+c.ESC+"31m"+c.A223+c.ESC+"1;41m"+c.A177+c.A178+" "+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A178+c.A178+c.A176+c.A177+c.A177+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m              "+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m                   "+c.A219+c.A223+c.ESC+"1m"+c.A223+c.ESC+"0;31m"+c.A220+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A223+c.A223+"   "+c.A220+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A223+c.A223+"  "+c.A176+c.A176+" "+c.ESC+"1;41m"+c.A176+" "+c.A178+c.A178+c.A219+c.ESC+"0;31m"+c.A220+" "+c.A223+c.ESC+"1;41m"+c.A177+c.A176+" "+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A178+c.A176+c.A177+c.A177+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m              "+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m                  "+c.A219+" "+c.ESC+"31m"+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+"   "+c.A220+c.A220+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A178+c.A177+c.A176+c.ESC+"37m      "+c.ESC+"31m"+c.A178+c.A177+c.A177+c.A223+"   "+c.ESC+"1;41m"+c.A176+" "+c.A177+c.A178+c.A219+" "+c.ESC+"0;31m"+c.A220+" "+c.A223+c.ESC+"1;41m"+c.A177+c.A219+c.ESC+"0;31m"+c.A220+c.A223+c.ESC+"1;41m"+c.A178+" "+c.A177+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m               "+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m"+c.A219+"                "+c.A219+" "+c.ESC+"31m"+c.A220+c.ESC+"41m "+c.ESC+"37;40m "+c.ESC+"31m"+c.A220+c.ESC+"41m      "+c.ESC+"40m"+c.A178+c.A177+c.A176+"    "+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A223+c.ESC+"37m        "+c.ESC+"1;31;41m"+c.A176+" "+c.A178+c.A177+c.A219+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A177+c.A178+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A220+c.A220+c.A223+c.ESC+"1;41m"+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m               "+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m"+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m              "+c.ESC+"31m"+c.A220+c.A220+c.ESC+"41m   "+c.ESC+"40m"+c.A220+c.ESC+"41m   "+c.ESC+"40m"+c.A219+c.A178+c.A178+c.A177+c.A176+c.A223+" "+c.A220+c.A220+"  "+c.A223+c.ESC+"37m            "+c.ESC+"1;31;41m"+c.A176+" "+c.A177+c.A178+c.A219+c.ESC+"0;37;40m  "+c.ESC+"1;31;41m"+c.A177+c.A178+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A178+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                "+c.A219+c.A219+c.A219+"         "+c.ESC+"31m"+c.A220+c.ESC+"41m     "+c.ESC+"40m"+c.A221+c.ESC+"41m     "+c.ESC+"40m"+c.A178+c.A223+c.A223+c.A223+" "+c.A220+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A223+c.ESC+"41m   "+c.ESC+"40m"+c.A220+" "+c.A220+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A178+c.A178+c.A177+c.A223+"   "+c.ESC+"1;41m"+c.A176+" "+c.A177+c.A219+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A177+" "+c.ESC+"0;31m"+c.A220+c.ESC+"1;41m"+c.A176+c.A178+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                "+c.A222+c.ESC+"1;30;47m"+c.A176+c.A177+c.ESC+"0;37;40m"+c.A221+"       "+c.ESC+"31m"+c.A220+c.ESC+"41m "+c.ESC+"1m"+c.A176+"  "+c.ESC+"0;31m"+c.A223+"  "+c.ESC+"41m    "+c.ESC+"40m"+c.A220+c.A220+c.A220+c.ESC+"41m       "+c.ESC+"40m"+c.A220+c.A220+" "+c.A223+c.A223+c.A220+" "+c.A223+c.ESC+"41m "+c.ESC+"40m"+c.A178+c.A178+c.A178+c.ESC+"37m      "+c.ESC+"1;31;41m"+c.A176+" "+c.A178+c.A219+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A223+c.ESC+"1;41m"+c.A176+c.A177+c.A178+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m               "+c.A222+c.ESC+"1;30;47m"+c.A176+c.A177+c.ESC+"0;37;40m"+c.A219+"       "+c.ESC+"31m"+c.A220+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.ESC+"0;31m"+c.A223+c.A223+"    "+c.ESC+"41m                  "+c.ESC+"40m"+c.A220+c.A222+c.ESC+"41m "+c.ESC+"40m"+c.A220+c.A220+" "+c.A223+c.A178+c.ESC+"37m       "+c.ESC+"1;31;41m"+c.A176+c.A177+c.A178+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A177+" "+c.A178+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.ESC+"0m\r\n";
		thismsg += "               "+c.A219+c.ESC+"1;30;47m"+c.A177+c.ESC+"0;37;40m"+c.A219+"      "+c.ESC+"31m"+c.A222+c.A219+c.ESC+"1;41m"+c.A176+c.A176+c.ESC+"0;31m"+c.A221+" "+c.ESC+"1;5;32m"+c.A220+c.A220+c.A223+"  "+c.ESC+"0;31;41m     "+c.ESC+"40m"+c.A178+c.ESC+"41m        "+c.ESC+"40m"+c.A223+c.A223+c.ESC+"41m   "+c.ESC+"40m"+c.A220+c.A222+c.ESC+"41m   "+c.ESC+"40m"+c.A220+"    "+c.A220+c.A220+c.A220+c.A220+c.A223+c.ESC+"1;41m"+c.A176+c.A177+c.A178+c.ESC+"0;31m"+c.A220+" "+c.ESC+"1;41m"+c.A176+c.A177+" "+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m              "+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m"+c.A219+"      "+c.ESC+"31m"+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A176+" "+c.ESC+"0;37;40m  "+c.ESC+"1;5;32m"+c.A219+c.A219+c.A223+"  "+c.ESC+"0;31m"+c.A222+c.ESC+"41m               "+c.ESC+"40m"+c.A178+c.A220+c.A222+c.ESC+"41m  "+c.ESC+"40m"+c.A220+c.A222+c.A219+c.ESC+"41m  "+c.ESC+"37;40m "+c.ESC+"31;41m    "+c.ESC+"40m"+c.A178+c.A223+"  "+c.A223+c.ESC+"1;41m"+c.A176+c.A177+c.A219+c.ESC+"0;37;40m "+c.ESC+"1;31;41m"+c.A176+c.A177+c.A219+c.A178+c.ESC+"0;37;40m "+c.ESC+"0m\r\n";
		thismsg += "             "+c.A222+c.ESC+"1;30;47m"+c.A176+c.A177+c.ESC+"0;37;40m"+c.A219+"     "+c.ESC+"31m"+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A178+c.A176+c.ESC+"0;37;40m  "+c.ESC+"1;5;32m"+c.A223+"  "+c.ESC+"0;31m"+c.A220+c.A220+c.A220+c.ESC+"41m     "+c.ESC+"40m"+c.A178+c.ESC+"41m          "+c.ESC+"40m"+c.A223+"  "+c.ESC+"41m   "+c.ESC+"40m"+c.A220+c.A222+c.A219+c.ESC+"41m "+c.ESC+"40m"+c.A220+" "+c.A223+c.ESC+"41m "+c.ESC+"40m"+c.A178+c.A223+"    "+c.A223+c.ESC+"1;41m"+c.A176+c.A219+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.A177+c.A219+c.A178+c.ESC+"37;40m "+c.ESC+"0m\r\n";
		thismsg += "              "+c.A219+c.ESC+"1;30;47m"+c.A176+c.ESC+"0;37;40m"+c.A221+"    "+c.ESC+"31m"+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A177+c.A176+c.ESC+"0;31m"+c.A221+c.A220+c.ESC+"41m                   "+c.ESC+"1m"+c.A176+c.ESC+"0;31m"+c.A223+c.A223+"   "+c.A222+c.ESC+"41m    "+c.ESC+"40m"+c.A220+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.A176+c.ESC+"0;31m"+c.A220+c.A220+c.ESC+"37m       "+c.ESC+"1;31;41m"+c.A176+c.A177+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.A176+c.A177+c.A219+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m               "+c.A219+c.ESC+"1;30;47m"+c.A177+c.ESC+"0;37;40m   "+c.ESC+"31m"+c.A220+c.A220+c.A223+c.ESC+"41m         "+c.ESC+"40m"+c.A176+c.A222+c.ESC+"41m          "+c.ESC+"40m"+c.A223+c.ESC+"37m      "+c.ESC+"31m"+c.A220+c.ESC+"1;41m"+c.A176+"     "+c.ESC+"0;31m"+c.A220+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A177+c.A177+c.A176+" "+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A220+"    "+c.ESC+"1;41m"+c.A176+c.A219+c.ESC+"0;37;40m "+c.ESC+"31;41m  "+c.A177+" "+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                "+c.A219+c.A221+" "+c.ESC+"31;41m    "+c.ESC+"37;40m "+c.ESC+"31;41m      "+c.ESC+"40m"+c.A177+c.A177+c.A176+c.A178+c.ESC+"41m         "+c.ESC+"1m"+c.A176+c.ESC+"0;37;40m   "+c.ESC+"31m"+c.A220+c.ESC+"41m   "+c.ESC+"1m"+c.A177+c.A176+c.A176+"     "+c.ESC+"0;31m"+c.A222+c.ESC+"41m  "+c.ESC+"1m"+c.A178+c.A177+c.A176+c.ESC+"0;31m"+c.A220+" "+c.ESC+"41m "+c.ESC+"40m"+c.A178+c.A220+c.A220+" "+c.ESC+"1;41m"+c.A178+c.ESC+"0;31m"+c.A220+" "+c.ESC+"41m  "+c.ESC+"1m"+c.A177+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m           "+c.ESC+"1m"+c.A220+"    "+c.ESC+"0m"+c.A223+" "+c.ESC+"31;41m "+c.ESC+"40m"+c.A223+" "+c.ESC+"41m      "+c.ESC+"40m"+c.A219+c.A178+c.A178+c.A177+c.A176+c.A176+c.A177+c.ESC+"41m        "+c.ESC+"1m"+c.A176+c.ESC+"0;37;40m   "+c.ESC+"31;41m    "+c.A178+c.A177+c.A177+c.A176+"     "+c.ESC+"40m"+c.A220+c.A222+c.ESC+"41m  "+c.ESC+"1m"+c.A178+c.A177+c.A176+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A223+c.A178+"   "+c.ESC+"1;41m"+c.A177+c.A219+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.A176+c.A176+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m           "+c.A223+c.ESC+"1m"+c.A219+c.A220+"   "+c.ESC+"0;31;41m "+c.A177+c.A178+c.A176+c.A176+"  "+c.ESC+"40m"+c.A223+c.A223+c.A223+c.A223+c.A223+c.A223+c.ESC+"41m "+c.ESC+"40m"+c.A219+c.A176+c.A178+c.ESC+"41m        "+c.ESC+"1m"+c.A176+c.ESC+"0;37;40m  "+c.ESC+"31m"+c.A222+c.ESC+"41m   "+c.ESC+"1m"+c.A219+c.A178+c.A178+c.A177+c.A176+"      "+c.ESC+"0;37;40m "+c.ESC+"31;41m  "+c.A219+c.A178+c.A177+c.A176+c.ESC+"37;40m "+c.ESC+"31m"+c.A223+"   "+c.ESC+"1;41m"+c.A176+c.ESC+"0;31m"+c.A223+" "+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.A177+c.A219+c.ESC+"0m\r\n";
		thismsg += "            "+c.A223+c.ESC+"1;47m"+c.A223+c.ESC+"40m"+c.A219+c.A223+c.ESC+"0;31m"+c.A220+c.ESC+"1;41m"+c.A178+c.A176+c.A176+" "+c.ESC+"0;31m"+c.A223+"  "+c.ESC+"1;37;47m"+c.A222+c.ESC+"40m"+c.A221+c.A223+c.A220+" "+c.ESC+"0;31m"+c.A177+" "+c.A223+c.ESC+"41m "+c.ESC+"40m"+c.A221+c.ESC+"41m       "+c.ESC+"1m"+c.A176+c.ESC+"0;31m"+c.A223+" "+c.A220+c.ESC+"41m    "+c.ESC+"1m"+c.A219+c.A178+c.A178+c.A177+c.A176+"       "+c.ESC+"0;31m"+c.A220+c.A223+c.ESC+"41m "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+" "+c.ESC+"0;31m"+c.A223+"  "+c.ESC+"1;41m"+c.A176+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.A176+" "+c.A177+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m              "+c.A223+c.ESC+"31m"+c.A222+c.ESC+"1;41m"+c.A177+c.A176+"  "+c.ESC+"0;31m"+c.A223+" "+c.ESC+"1;37;47m"+c.A222+c.ESC+"40m"+c.A221+" "+c.ESC+"47m"+c.A222+c.ESC+"40m"+c.A221+"  "+c.ESC+"0;31m"+c.A178+c.A177+" "+c.A223+c.ESC+"41m        "+c.ESC+"1m"+c.A176+c.ESC+"0;37;40m "+c.ESC+"33m"+c.A220+" "+c.ESC+"31m"+c.A223+c.ESC+"41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+c.A176+"       "+c.ESC+"0;31m"+c.A220+c.A223+c.ESC+"41m "+c.ESC+"1m"+c.A178+c.A177+c.A176+" "+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.ESC+"40m"+c.A220+c.A223+" "+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.A176+" "+c.A178+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                "+c.ESC+"31;41m "+c.A176+c.A176+c.ESC+"37;40m "+c.A220+c.ESC+"1m"+c.A219+c.ESC+"0m"+c.A223+c.ESC+"1m"+c.A219+c.A221+" "+c.A223+"    "+c.A223+c.A220+" "+c.ESC+"0;31;41m   "+c.ESC+"40m"+c.A223+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A223+" "+c.ESC+"33m"+c.A219+c.A219+" "+c.ESC+"31m"+c.A223+c.ESC+"41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"         "+c.ESC+"0;37;40m "+c.ESC+"31;41m "+c.A178+c.A177+c.A176+c.ESC+"40m"+c.A220+" "+c.ESC+"1;41m"+c.A176+c.ESC+"0;37;40m  "+c.ESC+"31;41m "+c.A176+c.A177+" "+c.A219+c.ESC+"0m\r\n";
		thismsg += "                  "+c.A220+c.ESC+"1m"+c.A219+" "+c.A219+c.A221+" "+c.A223+"   "+c.A220+" "+c.A223+c.A220+" "+c.ESC+"0;31m"+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A223+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A223+" "+c.ESC+"1;33;43m"+c.A177+c.A176+c.ESC+"0;33m"+c.A219+c.A219+" "+c.ESC+"31m"+c.A223+c.ESC+"41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"        "+c.ESC+"0;31m"+c.A219+c.A220+c.A222+c.ESC+"1;41m"+c.A219+c.A177+c.A176+c.ESC+"0;31m"+c.A220+c.ESC+"1;41m"+c.A176+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A220+c.ESC+"41m "+c.ESC+"1m"+c.A176+" "+c.A178+c.A219+c.ESC+"0m\r\n";
		thismsg += "                   "+c.A223+c.ESC+"1m"+c.A220+" "+c.A223+"  "+c.A220+c.A223+c.A220+" "+c.A223+" "+c.A223+c.ESC+"0;31m"+c.A220+c.ESC+"41m "+c.ESC+"40m"+c.A223+c.A223+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A223+" "+c.ESC+"1;33m"+c.A223+c.ESC+"43m"+c.A219+c.A219+c.ESC+"40m"+c.A223+c.ESC+"0;33m"+c.A220+c.A219+" "+c.ESC+"31;41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"          "+c.ESC+"0;31m"+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A177+c.A177+c.A176+c.ESC+"0;31m"+c.A223+" "+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.A177+c.A178+"  "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                       "+c.ESC+"1m"+c.A220+" "+c.ESC+"0;31m"+c.A220+c.A220+c.A220+c.A220+c.A220+c.ESC+"41m   "+c.ESC+"40m"+c.A220+c.A220+c.ESC+"41m  "+c.ESC+"40m"+c.A223+c.ESC+"37m     "+c.ESC+"1;33;43m"+c.A177+c.A176+c.ESC+"0;33m"+c.A219+c.A219+c.A220+" "+c.ESC+"31;41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"         "+c.ESC+"0;31m"+c.A220+c.A222+c.ESC+"41m "+c.ESC+"1m"+c.A176+c.A176+c.ESC+"0;37;40m "+c.ESC+"31;41m  "+c.A176+c.A177+c.A178+" "+c.A219+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                       "+c.ESC+"30mÃ™"+c.ESC+"31m"+c.A222+c.ESC+"41m  "+c.ESC+"1m"+c.A177+c.A177+c.A176+c.A176+"  "+c.ESC+"0;31m"+c.A223+c.A223+c.ESC+"37m        "+c.ESC+"1;33m"+c.A223+c.ESC+"43m"+c.A219+c.ESC+"0;33m"+c.A223+c.A223+c.A223+c.A220+" "+c.ESC+"31;41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"         "+c.ESC+"0;31m"+c.A220+c.A222+c.A223+" "+c.A220+c.ESC+"41m "+c.ESC+"1m"+c.A177+c.A176+"  "+c.A219+" "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                         "+c.ESC+"31m"+c.A223+c.A223+c.A223+c.A223+c.A223+c.A223+c.A223+c.ESC+"37m            "+c.ESC+"1;33m"+c.A220+c.A220+c.ESC+"43m"+c.A176+c.ESC+"0;33m"+c.A219+c.A219+" "+c.ESC+"31;41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"         "+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A220+c.ESC+"1;41m"+c.A176+c.A177+c.A178+c.A176+c.A176+"  "+c.A219+c.ESC+"0;37;40m  "+c.ESC+"0m\r\n";
		thismsg += "                                            "+c.ESC+"1;33;43m"+c.A219+c.A178+c.A177+c.A176+c.ESC+"0;33m"+c.A219+" "+c.ESC+"31m"+c.A223+c.ESC+"41m    "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A176+"        "+c.ESC+"0;31m"+c.A220+" "+c.A223+c.ESC+"1;41m"+c.A176+c.A177+c.A177+"  "+c.ESC+"0;31m"+c.A223+c.ESC+"37m   "+c.ESC+"0m\r\n";
		thismsg += "                                            "+c.ESC+"1;33;43m"+c.A219+c.A178+c.ESC+"40m"+c.A223+c.ESC+"0;33m"+c.A223+c.A223+c.A220+c.A220+" "+c.ESC+"31;41m   "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A177+c.A176+"         "+c.ESC+"0;31m"+c.A220+" "+c.A223+c.ESC+"1;41m"+c.A177+c.A177+c.ESC+"0;37;40m  "+c.ESC+"31;41m   "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                            "+c.ESC+"1;33m"+c.A220+c.A220+c.ESC+"43m"+c.A219+c.A178+c.A177+c.A176+c.ESC+"0;33m"+c.A219+c.A220+" "+c.ESC+"31;41m   "+c.ESC+"1m"+c.A219+c.A178+c.A177+c.A177+c.A176+"          "+c.ESC+"0;37;40m "+c.ESC+"31m"+c.A223+c.ESC+"41m  "+c.ESC+"37;40m "+c.ESC+"31;41m   "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                           "+c.ESC+"1;33m"+c.A220+c.ESC+"43m"+c.A219+c.ESC+"40m"+c.A223+c.A223+c.A223+c.ESC+"0;33m"+c.A223+c.A220+c.A220+c.A220+" "+c.ESC+"31;41m     "+c.ESC+"1m"+c.A178+c.A177+c.A176+c.ESC+"0;31m"+c.A223+c.A223+c.A223+c.A223+c.ESC+"41m       "+c.ESC+"40m"+c.A220+" "+c.ESC+"41m "+c.ESC+"40m"+c.A220+" "+c.A223+c.ESC+"41m "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                           "+c.ESC+"1;33m"+c.A220+c.A220+c.ESC+"43m"+c.A219+c.A219+c.A178+c.A177+c.A176+c.ESC+"0;33m"+c.A219+c.A219+" "+c.ESC+"31m"+c.A223+c.A223+" "+c.A220+c.A220+c.A220+c.A220+c.A220+c.ESC+"41m   "+c.ESC+"40m"+c.A220+" "+c.ESC+"41m       "+c.ESC+"40m"+c.A220+" "+c.ESC+"41m  "+c.ESC+"40m"+c.A220+c.A220+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                           "+c.ESC+"1;33;43m"+c.A219+c.A219+c.ESC+"40m"+c.A223+c.A223+c.A223+c.ESC+"0;33m"+c.A223+c.A223+c.ESC+"31m"+c.A220+c.A220+c.ESC+"41m   "+c.ESC+"1m"+c.A176+c.A178+c.A177+" "+c.A176+"     "+c.ESC+"0;31m"+c.A220+" "+c.ESC+"41m       "+c.ESC+"37;40m "+c.ESC+"31m"+c.A223+c.ESC+"41m   "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                           "+c.ESC+"1;33m"+c.A220+c.ESC+"43m"+c.A178+c.ESC+"0;33m"+c.A220+c.A219+c.A223+" "+c.ESC+"31;41m     "+c.ESC+"1m"+c.A176+c.A178+c.A177+c.A177+c.A176+c.A176+c.A176+"     "+c.ESC+"0;31m"+c.A220+" "+c.A223+c.ESC+"41m      "+c.ESC+"37;40m "+c.ESC+"31;41m   "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                          "+c.ESC+"1;33;43m"+c.A178+c.A177+c.A176+c.ESC+"0;33m"+c.A223+c.A223+" "+c.ESC+"31;41m     "+c.ESC+"1m"+c.A176+c.A178+c.A178+" "+c.A177+" "+c.A176+c.A176+"       "+c.ESC+"0;37;40m "+c.ESC+"31;41m      "+c.ESC+"37;40m "+c.ESC+"31m"+c.A223+c.ESC+"41m  "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                         "+c.ESC+"1;33m"+c.A220+c.A220+c.ESC+"0;33m"+c.A220+c.A220+c.A223+" "+c.ESC+"31;41m    "+c.ESC+"1m"+c.A176+c.A219+c.A178+c.A178+c.A177+c.A177+c.A176+" "+c.A176+" "+c.A176+c.A176+"     "+c.ESC+"0;31m"+c.A220+" "+c.ESC+"41m      "+c.ESC+"37;40m "+c.ESC+"31;41m  "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                         "+c.ESC+"0;37m               "+c.ESC+"1;33m"+c.A223+c.A223+c.A223+c.ESC+"0;33m"+c.A223+"  "+c.ESC+"30;41m  "+c.ESC+"1;31mShatterstar [W/X]     "+c.ESC+"0;37;40m "+c.ESC+"30;41m      "+c.ESC+"37;40m "+c.ESC+"30;41m "+c.ESC+"0m\r\n";
		thismsg += c.ESC+"37m                                                                               "+c.ESC+"0m\r\n";
		return thismsg;
}

	exports.welcome = function(sord) {
		// Game System Information Banner
		thismsg  = "\r\n"+sord.acenter(c.ESC+"32mSaga Of The Red Dragon"+c.ESC+"0m")+"\r\n";
		thismsg += sord.acenter(c.ESC+"32m"+c.ESC+"1m"+sord.conf.data.host+':'+sord.conf.data.port)+"\r\n"+c.ESC+"0m\r\n";
		thismsg += sord.acenter(c.ESC+"32mCompiled June 25, 2009: Version "+c.ESC+"1m"+c.ESC+"37m"+sord.conf.data.version+c.ESC+"0m")+"\r\n";
		thismsg += sord.acenter(c.ESC+"22m"+c.ESC+"32m(c) pre-2009 by Someone Else\r\n\r\n"+c.ESC+"0m")+"\r\n";
		thismsg += sord.acenter(c.ESC+"32m"+c.ESC+"1m"+c.ESC+"37mREGISTERED TO "+c.ESC+"0m"+c.ESC+"1m"+c.ESC+"34m"+sord.conf.data.admin+c.ESC+"0m")+"\r\n\r\n";
		thismsg += sord.acenter(c.ESC+"32mThe current game has been running for "+c.ESC+"1m"+sord.conf.data.rundays+c.ESC+"22m game days.\r\n"+c.ESC+"0m")+"\r\n";
		thismsg += sord.acenter(c.ESC+"32mPlayers are deleted after "+c.ESC+"1m"+sord.conf.data.delinactive+c.ESC+"22m real days of inactivity."+c.ESC+"0m")+"\r\n"
		thismsg += sord.acenter(c.ESC+"32mPlayers are enjoying "+c.ESC+"1m"+sord.conf.data.ffight+c.ESC+"22m forest fights per day."+c.ESC+"0m")+"\r\n"
		thismsg += sord.acenter(c.ESC+"32mPlayers are enjoying "+c.ESC+"1m"+sord.conf.data.pfight+c.ESC+"22m player fights per day."+c.ESC+"0m")+"\r\n"
		thismsg += sord.acenter(c.ESC+"32mPlayers are enjoying "+c.ESC+"1m"+sord.conf.data.bankinterest+"%"+c.ESC+"22m interest at the bank per day."+c.ESC+"0m")+"\r\n"
		thismsg += sord.acenter(c.ESC+"32mThe current game day is "+c.ESC+"1m"+sord.conf.data.daylength+c.ESC+"22m real hours long.\r\n"+c.ESC+"0m")+"\r\n"
		thismsg += c.ESC+"32m                         ("+c.ESC+"1mE"+c.ESC+"22m)nter the realm of the Dragon"+c.ESC+"0m\r\n"
		thismsg += c.ESC+"32m                         ("+c.ESC+"1mL"+c.ESC+"22m)ist Warriors"+c.ESC+"0m\r\n"
		thismsg += c.ESC+"32m                         ("+c.ESC+"1mI"+c.ESC+"22m)nstructions"+c.ESC+"0m\r\n"
		thismsg += c.ESC+"32m                         ("+c.ESC+"1mQ"+c.ESC+"22m)uit the game server\r\n"+c.ESC+"0m\r\n"
		thismsg += c.ESC+"32m                         Your choice, warrior? ["+c.ESC+"1mE"+c.ESC+"22m]: "+c.ESC+"0m"+c.ESC+"0m "
		return thismsg;
}
