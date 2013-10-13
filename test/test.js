
var transformimage = require('../index.js');


transformimage.transform({
  name : "cucumbers",
  basefile : "./test/img/wh-cucumbers.jpg",
  resultArr : ["100x100px-1r", "200x200px-3r"]
}, function (err, res) {
  if (err) throw new Error(err);


});
