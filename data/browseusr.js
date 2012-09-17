ABC = require('nodejs-microdb');

user = new ABC({'file':'users.db', 'savetime':0});

var repl = require("repl");

repl.start('user:: > ').context.user = user;
