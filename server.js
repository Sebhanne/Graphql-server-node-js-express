var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");
/*Schema describes the API type system, defines what operation you will able to query*/
// Graphql Schema
var schema = buildSchema(`
type Query { 
     message: String
  }
`);
// Root resolver we can attached a function wc is called each time we called the schema

var root = {
  message: () => "Hello World!"
};

// Create an express server and Graphql endpoint
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true // users interface
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
