var SchemaObject = require('schema-object')

/**
 * Schema for a member object
 */
var Member = new SchemaObject({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    resume_url: String,
    subscribed: Boolean,
    pronoun: String,
    school: String,
    year: String,
    degree: String, 
    member_type: String
})

module.exports = Member