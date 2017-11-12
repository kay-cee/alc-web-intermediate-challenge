var mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
    fullname: {type: String},
    matric: {type: String},
    faculty: {type: String},
    department: {type: String},
    level: {type: String},
    age: {type: String},
    cgpa: {type: String}
});

var Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.getStudentByFullname = function(fullname, callback){
    var query = {fullname: fullname};
    Student.findOne(query, callback);
};

module.exports.getAllStudents = function(callback){
    Student.find(callback);
};