// SORD Database file - simple storage.
var fs = require('fs');

var SordData = function(opts) {
  var self = this;
  var defaults = {
    'file': '',
    'savetime': 10, // in min
    'maxrec': 0, // 0 = unlimted (only applies to datatype 0)
    'datatype': 0 // 0 = array, 1 = keyhash
  };
  this.options = defaults;
  if ( typeof opts === 'object' ) {
    for ( var x in opts ) { this.options[x] = opts[x]; }
  }
  
  if ( this.options.datatype === 0 ) {
    this.data = [];
  } else {
    this.data = {};
  }
  
  this.findByKey = function(key, value) {
    for ( var x in self.data ) {
      if ( key in self.data[x] && self.data[x][key] === value ) {
        return x;
      }
    }
    return false;
  }
  
  this.sortByKey = function(key, direction) {
    if ( typeof direction !== 'string' ) { direction = 'asc'; }
    if ( self.options.datatype == 0 ) { return false; }
    var sorter = [];
    for ( var x in self.data ) {
      if ( key in self.data[x] ) {
        sorter.push([x, self.data[x][key]]);
      }
    }
    if ( sorter.length > 0 ) {
      if ( direction === 'asc' ) {
        return sorter.sort(function(a,b) { return a[1] - b[1]; });
      }
      return sorter.sort(function(a,b) { return b[1] - a[1]; });
    } else { 
      return false;
    }
  }
  
  this.startTime = function() {
    if ( this.options.savetime > 0 ) {
      this.time = setInterval( function() { self.save(); }, this.options.savetime * 1000*60 );
    }
  }
  
  this.addRecord = function(text, num) {
    if ( typeof num !== 'number' && this.options.datatype == 1 ) {
      num = new Date().getTime(); 
    }
    if ( this.options.datatype === 0 ) {
      this.data.push(text);
      if ( this.options.maxrec > 0 ) {
        while ( this.data.length > this.options.maxrec ) {
          this.data.shift();
        }
      }
    } else {
      this.data[num] = text;
    }
    return this.data.length;
  }
  
  this.remRecord = function(num) {
    if ( this.options.datatype == 0 ) {
      this.data.splice(num,1);
    } else {
      delete this.data[num];
    }
    return this.data.length;
  }
  
  this.save = function() {
    if ( fs.writeFileSync(this.options.file, JSON.stringify(this.data)) ) {
      return true;
    }
  }
  
  this.load = function() {
    this.data = JSON.parse(fs.readFileSync(this.options.file).toString());
    console.log(this.options.file + ' Loaded');
  }
}

module.exports = SordData;

