const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// Package imports
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const statusMonitor = require('express-status-monitor')();

// Import Routers

// Logger 
const logger = require('./Server/Logger')('server');

// Config

const CLIMESSAGE = () => {
  logger.normal("######################");
  logger.normal("Next.JS & Express Server      ");
  logger.normal("######################");
};

// Main code
app.prepare()
.then(() => {
  const server = express();
  
  CLIMESSAGE()

 // Morgan Logger
  process.env.DEBUG ? server.use(morgan('dev')) : null;
  
  server.use(statusMonitor)

  // Set up imported middleware
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use('/static', express.static('./static'))

  server.get('/', async (req, res) => {
    const actualRoute = '/'
    return app.render(req, res, actualRoute);
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(process.env.PORT || 3000 , (err) => {
    if (err) throw err
    logger.green(`Server started on http://localhost:${process.env.PORT || 3000 }`);
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});


/*
socket = io.connect( 'http://127.0.0.1:3000', {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax : 5000,
    reconnectionAttempts: 99999
} );
*/