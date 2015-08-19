var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NoteSchema = new Schema({
	name : {
		type : 'String',
		required : true,
		unique : true
	},
	note : 'String',
});

module.exports = mongoose.model('Note', NoteSchema);
