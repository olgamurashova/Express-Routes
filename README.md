## Express Routes

### General information

To tell our server how to deal with any given request, we registered two routes. Routes define the control flow for requests based on the request’s path and HTTP verb.
For example, if your server receives a GET request, we use a route to define the appropriate functionality for that HTTP verb (GET) and path (/).
Express uses app.get() to register routes to match GET requests. Express routes (including app.get()) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.
Express servers send responses using the .send() method on the response object. .send() will take any input and include it in the response body.

### Tools used

+ JavaScript
+ VS
+ Express
+ Node.js
+ Express.js
+ Command line
