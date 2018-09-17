//// db connection
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const URL = 'mongodb://localhost:27017';
// Database Name
const DbName = 'hipbirdtest';


// Create the database connection
var mongoClient;
MongoClient.connect(URL, {
  poolSize: 10,
  useNewUrlParser: true
}, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mongoClient = client;
}
);


// どこかでクローズしたほうが良さそうだけど、どこでやるべき？
//  client.close();

// この関数を呼ぶ
exports.collection = function (collectionName) {
  return mongoClient.db(DbName).collection(collectionName);
}