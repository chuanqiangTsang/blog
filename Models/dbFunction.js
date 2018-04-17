const db = require('./db.js')
const mongoose = require('mongoose')

module.exports = {
	insert: function(collection, doc, cb){
		db.model(collection).insertMany(doc, function(err, doc){
			if(err){
				cb(err, null);
				return false;
			}else{
				cb(null, doc);
			}
		})
	},

	getCollectionLength: function(collection, filters, cb){
		db.model(collection).count(filters, function(err, num){
			if(err){
				cb(null);
			}else{
				cb(num);
			}
		})
	},

	find: function(collection, filters,cb){
		db.model(collection).find(filters, function(err, doc){
			if(err){
				cb(err, null)
			}else{
				cb(null, doc)
			}
		})
	},

	getTheme: function(collection, id, cb){
		db.model(collection).find({_id: id}, function(err, doc){
			let theme = doc[0].theme;
			if(err){
				cb(err, null);
			}else{
				cb(null, theme);
			}
		})
	}
}