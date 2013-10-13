var fs = require('fs'),
    path = require('path'),
    gm = require('gm');

var transformimage = ((typeof module === 'object') ? module : {}).exports = (function (xhrgo) {
  
  return {

    read : function (filepath, fn) {
      fs.readFile(filepath, 'utf8', fn);
    },

    write : function (file, filepath, fn) {
      console.log('[...] write: ' + filepath);
      fs.writeFile(filepath, file, fn);
    },

    // old filename
    getNewFilename : function (opts, filename) {

    },

    transformOne : function () {

    },

    transformEach : function (opts, filepath, fn) {
      fn(null);
    },
    

    // {
    //  "name" : "ash-hand",
    //  "base" : "support/wh-ash-hand.jpg",
    //  "resultArr" : ["100x100px-1r", "200x200px-3r"]
    // }
    //
    // "support/whr-ash-hand.jpg",        
    // "support/100x100px-1r-ash-hand.jpg",            
    // "support/200x200px-2r-ash-hand.jpg",                
    transform : function (opts, fn) {
      console.log('transform!', opts);

      // read the file
      // for each 'resultArr' element, 
      //   - transform the file
      //   - generate the name for the file
      //   - save the file (to the new filename)
      //   - process the next file if one exists
      // complete

      var that = this,
          filepath = opts.basefile;

      that.read(filepath, function (err, res) {
        if (err) throw new Error(err);

//        console.log('file? ', res);
        gm(filepath)
          .resize(900, 900)
          .autoOrient()
          .write('./test/img/cucumbersnew.jpg', function (err) {
            if (!err) console.log(' hooray! ');
          });
//        that.write(res, './test/img/help.jpg', function (err, res) {
//          console.log(err, res);
//        });


        that.transformEach(opts, filepath, function (err, res) {
          if (err) throw new Error(err);

          console.log('done');
          
        });

      });
      
      fn(null, 'done!');
    }
  };

}());