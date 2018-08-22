var db = require('../../lib/db')
const QUERY_MEMBER = 'SELECT member.id, member.first_name, member.last_name, member.email, member.phone, member.resume_url, member.subscribed, pronoun.name AS pronoun, school.name AS school, year.name AS year, degree.name AS degree, member_type.name AS member_type \
FROM member INNER JOIN pronoun ON member.pronoun_id=pronoun.id INNER JOIN school ON member.school_id=school.id INNER JOIN year ON member.year_id=year.id INNER JOIN degree ON member.degree_id=degree.id INNER JOIN member_type ON member.member_type_id=member_type.id WHERE member.id = $1'
const QUERY_ALL_MEMBERS = 'SELECT member.id, member.first_name, member.last_name, member.email, member.phone, member.resume_url, member.subscribed, pronoun.name AS pronoun, school.name AS school, year.name AS year, degree.name AS degree, member_type.name AS member_type \
FROM member INNER JOIN pronoun ON member.pronoun_id=pronoun.id INNER JOIN school ON member.school_id=school.id INNER JOIN year ON member.year_id=year.id INNER JOIN degree ON member.degree_id=degree.id INNER JOIN member_type ON member.member_type_id=member_type.id'
const QUERY_DELETE_MEMBER = 'DELETE FROM member WHERE id = $1'
const QUERY_ADD_MEMBER = 'INSERT INTO member (id, first_name, last_name, email, phone, resume_url, subscribed, pronoun_id, school_id, year_id, degree_id, member_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
const QUERY_UPDATE_MEMBER = 'UPDATE member SET id = $1, first_name = $2, last_name = $3, email = $4, phone = $5, resume_url = $6, subscribed = $7, pronoun_id = $8, school_id = $9, year_id = $10, degree_id = $11, member_type_id = $12 WHERE id = $1'

getSchoolId = function(school) {
    // map school id
    var school_id = '1'
    switch(school) {
        case 'McGill':
            school_id = '1'
            break
        case 'Concordia':
            school_id = '2'
            break
        case 'Polytechnique':
            school_id = '3'
            break
        case 'Other':
            school_id = '4'
            break
        default:
            school_id = '1'   
    }
    return school_id
}

getYearId =  function(year) {
    // map year id
    var year_id = '1'
    switch(year) {
        case 'U0':
            year_id = '1'
            break
        case 'U1':
            year_id = '2'
            break
        case 'U2':
            year_id = '3'
            break
        case 'U3+':
            year_id = '4'
            break
        default:
            year_id = '1'    
    }
    return year_id
}

getDegreeId = function(degree) {
    // map degree id
    var degree_id = '1'
    switch(degree) {
        case 'Undergraduate':
            degree_id = '1'
            break
        case 'Masters':
            degree_id = '2'
            break
        case 'PhD':
            degree_id = '3'
            break
        default:
            degree_id = '1'    
    }
    return degree_id
}

getMemberTypeId = function(member_type) {
    // map member type id
    var member_type_id = '1'
    switch(member_type) {
        case 'Subscriber':
            member_type_id = '1'
            break
        case 'Active Member':
            member_type_id = '2'
            break
        case 'Contributer':
            member_type_id = '3'
            break
        case 'Executive':
            member_type_id = '4'
            break
        default:
            member_type_id = '1'    
    }
    return member_type_id
}

getPronounId = function(pronoun) {
    // map pronoun pronoun id
    var pronoun_id = '1'
    switch(pronoun) {
        case 'He/Him':
            pronoun_id = '1'
            break
        case 'She/Her':
            pronoun_id = '2'
            break
        case 'They/Their':
            pronoun_id  = '3'
            break
        case 'Other':
            pronoun_id = '4'
            break
        default:
            pronoun_id = '1'    
    }
    return pronoun_id
}



module.exports = {

    /**
     * Processes query to find a member by id
     */
    find: (id, callback) => {
        db.query(QUERY_MEMBER, [id], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return callback(data.rows[0])
        })
    },

    /**
     * Processes query to retrieve all members from the database
     */
    findAll: (callback) => {
        db.query(QUERY_ALL_MEMBERS, [], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return callback(data.rows)
        })
    },

    /**
     * Processes query to add a new member to the database
     */
    create: (member, callback) => {
        db.query(QUERY_ADD_MEMBER, [
            member.id, 
            member.first_name, 
            member.last_name, 
            member.email, 
            member.phone, 
            member.resume_url, 
            member.subscribed, 
            getPronounId(member.pronoun),
            getSchoolId(member.school), 
            getYearId(member.year),
            getDegreeId(member.degree),
            getMemberTypeId(member.member_type)
        ], function (err, data) {
            if (err) {
            return console.error('error running query', err)
            }
            return callback()
        })
    },

    /**
     * Processes query to delete member from the database
     */
    delete: (id, callback) => {
        db.query(QUERY_DELETE_MEMBER, [id], function (err, data) {
            if (err) {
            return console.error('error running query', err)
            }
            return callback()
        })
    },

    /**
     * Processes query to update a member in the database
     */
    update: (member, callback) => {
        db.query(QUERY_UPDATE_MEMBER, [
            member.id, 
            member.first_name, 
            member.last_name, 
            member.email, 
            member.phone, 
            member.resume_url, 
            member.subscribed, 
            getPronounId(member.pronoun),
            getSchoolId(member.school), 
            getYearId(member.year),
            getDegreeId(member.degree),
            getMemberTypeId(member.member_type)
        ], function (err, data) {
            if (err) {
            return console.error('error running query', err)
            }
            return callback()
        })
    }

}
