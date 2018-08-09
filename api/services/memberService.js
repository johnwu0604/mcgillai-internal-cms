var db = require('../../lib/db')
const QUERY_MEMBER = 'SELECT * FROM member WHERE member.id = $1'
const QUERY_ALL_MEMBERS = 'SELECT * FROM member'
const QUERY_DELETE_MEMBER = 'DELETE FROM member WHERE id = $1'

module.exports = {

    /**
     * Queries all members from the database
     */
    findAll: (callback) => {
        db.query(QUERY_ALL_MEMBERS, [], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return callback(data.rows)
        })
    }

}