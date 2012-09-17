ABC = require('nodejs-microdb');

gd = new ABC({'file':'gamedata.db', 'savetime':0});

var repl = require("repl");

repl.start('gd:: > ').context.gd = gd;
