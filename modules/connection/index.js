import Mongoclient from 'mongodb';


let connection = Mongoclient;
let _client = '';
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';





connection.connect(url,  (err, client) => {
  if (err) console.log('Erro! ', err);
  else {
    console.log("Connected successfully to server");
    app.listen(8000, function () {
      console.log('Listening on port 8000');
    });
    _client = client;
  }
});

export connection;