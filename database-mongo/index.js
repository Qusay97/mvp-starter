var mongoose = require('mongoose');
mongoose.connect('mongodb://qusay97:123nin@ds213513.mlab.com:13513/websiterbk');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var siteSchema = mongoose.Schema({
  image: String,
  name: String,
  description: String,
  birthday: String
});

var Site = mongoose.model('Site', siteSchema);

var selectAll = function(callback) {
  Site.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

let save = (image,name,description,birthday) => {
  var site = new Site({image: image, name: name, description: description, birthday: birthday})
  site.save(function (err, site) {
    if (err) return console.error(err);
    console.log(site)
  });
}


module.exports.save = save;
module.exports.selectAll = selectAll;