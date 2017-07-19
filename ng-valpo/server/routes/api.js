const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://admin:ccharlton@ds147882.mlab.com:47882/codepostnet";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
	if(err) {
		console.log('Conexion Error');

	}
});

router.get('/posts', function(req, res){
	console.log('Requesting posts');
	post.find({})
	.exec(function(err, posts){
		if (err) {
			console.log('Error getting posts man');
		} else	{
			res.json (posts);
			
		
		}
	})
});


router.get('/details/:id', function(req, res){
	console.log('Requesting post');
	post.findById(req.params.id)
	.exec(function(err, post){
		if (err) {
			console.log('Error getting post man');
		} else	{
			res.json (post);
		
		
		}
	});
});


module.exports = router;

