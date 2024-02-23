// Create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Server started'));

// Create a route
app.get('/api/comments', (req, res) => {
    res.send('Hello World');
});

// Create a route with parameters
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

// Create a route with query string
app.get('/api/comments/:id', (req, res) => {
    res.send(req.query);
});

// Create a route with POST method
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        content: req.body.content
    };
    comments.push(comment);
    res.send(comment);
});

// Create a route with PUT method
app.put('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    comment.content = req.body.content;
    res.send(comment);
});

// Create a route with DELETE method
app.delete('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

// Create a route with Joi
const Joi = require('joi');
app.post('/api/comments', (req, res) => {
    const schema = {
        content: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send(result.error.details[0].message);
    const comment = {
        id: comments.length + 1,
        content: req.body.content
    };
    comments.push(comment);
    res.send(comment);
});

// Create a route with helmet
const helmet = require('helmet');
app.use(helmet());

// Create a route with m