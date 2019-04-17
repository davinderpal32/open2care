'use strict';
import mongoose from "mongoose";

var db = mongoose.connection;

/**
 * Make any changes you need to make to the database here
 */
exports.up = function up (done) {
	 const User = db.collection('carecenters')
	 return db.collection('carecenters').save(result).then(function() {
	    done();
	  })
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
