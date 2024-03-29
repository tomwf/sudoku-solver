require('dotenv').config()
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');

const apiRoutes   = require('./routes/api.js');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User routes
apiRoutes(app);
    
//Start our server and tests!
const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
  if (process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch (error) {
        console.log('Tests are not valid:');
        console.error(error);
      }
    }, 1500);
  }

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'))

    //Index page (static HTML)
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
    });
  }

  //404 Not Found Middleware
  app.use(function(req, res, next) {
    res.status(404)
      .type('text')
      .send('Not Found');
  });
});

module.exports = app; // for testing
