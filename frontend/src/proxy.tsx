import corsAnywhere from 'cors-anywhere';

// Create an instance of the CORS proxy server
const corsProxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'], // Require the 'origin' and 'x-requested-with' headers
  removeHeaders: ['cookie', 'cookie2'], // Remove the 'cookie' and 'cookie2' headers
});

// const corsAnywhere = require('cors-anywhere');

// // Create a new CORS proxy server
// const corsProxy = corsAnywhere.createServer({
//   originWhitelist: [], // Allow all origins
// });

// Start the proxy server on port 8080
corsProxy.listen(8080, () => {
  console.log('CORS proxy server started on port 8080');
});