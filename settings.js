//Settings.js is not part of the repository.  However, it should be deployed with the application and contain deployment-specific settings.
//there is a settings.js.example file that should match the structure and properties of this file that IS checked in to the repo.
var settings = {}

settings.pg = {};
settings.application = {};
settings.tilestream = {};

//application port settings
settings.application.port = 80;
//settings.application.ip = "localhost"; //Typically localhost.  If deploying on Amazon EC2 Ubuntu, comment out this line.

//SSL Settings
//settings.ssl = {};
//settings.ssl.pfx = 'mypfx.pfx';
//settings.ssl.password = 'foo';


//Settings for postgres DB
settings.pg.username = 'gis';
settings.pg.password = 'gis';
settings.pg.server = 'db';
settings.pg.port = '5432';
settings.pg.database = 'gis';
settings.pg.featureLimit = 1000; //how many features to return by default

//settings.otherSchemas = ['myschema']; //Optionally list postgres schemas other than 'public' to read

//Should the API display postgres views?
settings.displayViews = true;

//Should the API display postgres tables?
settings.displayTables = true;

//Should the API hide any postgres tables or views?
settings.pg.noFlyList = ["att_0"];

//The list of formats to be returned by the Table Query REST endpoint.  If ogr2ogr is installed, .shp will be added automatically.
settings.application.formatList =[ 'html', 'GeoJSON', 'esriJSON'];

//Where to write out GeoJSON files?
settings.application.geoJsonOutputFolder = "/public/geojson/output/";

//Optional.  If you're using port forwarding or URL rewriting, but need to display full URLs to your assets, this will stand in for the host.
settings.application.publichost = ""; //like myhost.com. Keep this empty if you want to use the default host
settings.application.publicport = "80";

//Epxress Session Secret
settings.epxressSessionSecret = "secret";

//MongoDB Authentication
settings.mongodb = {};
settings.mongodb.db = "mongodb://localhost/authentication";

//Facebook App ID
settings.facebook = {};
settings.facebook.appid = "12345";
settings.facebook.secret = "secret";


//Leaflet version reference
settings.leaflet = {};
settings.leaflet.js = 'http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js?2';
settings.leaflet.css = 'http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css';

settings.jquery = {};
settings.jquery.js = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';

// For middleware that checks the referrer header of incoming requests
settings.acceptableReferrers = [];
settings.referrerCheckHints = [];

module.exports = settings;
