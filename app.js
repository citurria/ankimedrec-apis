// Create and start server on configured port
var config = require('./config');
var server = require('./server');

if(config.API_GW === undefined || config.MONGODB_SERVER_LOCATION === undefined || config.MONGODB_PORT === undefined){
    console.log('Invalid properties. Please verify config properties file and try again.');
    process.exit();
}

var port = (process.env.PORT || config.PORT);

server.listen(port, function() {
    console.log('Anki-MedRec API server running on port ' + port);

    // Temp:
    console.log("MongoDB Server is [" + config.MONGODB_SERVER_LOCATION + "], MongoDB Port is [" + config.MONGODB_PORT + "]");
});