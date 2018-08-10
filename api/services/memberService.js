var db = require('../../lib/db')
const QUERY_MEMBER = 'SELECT * FROM member WHERE member.id = $1'
const QUERY_ALL_MEMBERS = 'SELECT * FROM member'
const QUERY_DELETE_MEMBER = 'DELETE FROM member WHERE id = $1'
const QUERY_ADD_MEMBER = 'INSERT INTO member (id, first_name, last_name, email, phone, resume_url, subscribed, school_id, year_id, degree_id, member_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'

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
        case 'U1':
            year_id = '1'
            break
        case 'U2':
            year_id = '2'
            break
        case 'U3':
            year_id = '3'
            break
        case 'U4+':
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



module.exports = {

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
    }

}
