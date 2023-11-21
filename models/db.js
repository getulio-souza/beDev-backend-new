const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://getuliosouza8:7JmmF8zhWL3SN878@bedevdb.latpdnf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  userUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', function () {
  console.log('Conection has been made!');
}).on('error', function (error) {
  console.log('Error is: ', error);
});
