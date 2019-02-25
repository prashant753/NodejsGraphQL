const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        message : String
    }
`)
const root ={
    message : ()=>'Hello World'
}
// Create a express server and graphQL end point
const app = express();
app.use('/graphql',express_graphql({
    schema : schema,
    rootValue : root,
    graphiql : true
}));
app.listen('3000',()=>console.log('Express-graphql server now running on port 3000'));