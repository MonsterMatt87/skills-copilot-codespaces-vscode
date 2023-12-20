//Create web server
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

//Read the JSON file
var commentsPath = path.join(__dirname, 'comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

//Get all comments
router.get('/', function(req, res) {
  res.json(comments);
});

//Get one comment
router.get('/:id', function(req, res) {
  var commentId = parseInt(req.params.id, 10);
  var targetComment = comments.filter(function(comment) {
    return comment.id === commentId;
  });
  res.json(targetComment);
});

//Add a comment
router.post('/', function(req, res) {
  var newComment = {
    id: Date.now(),