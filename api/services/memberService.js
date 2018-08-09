var db = require('../../lib/db')

module.exports = {

    /**
     * Finds a member given an their member_id
     *
     * @param id
     * @param done
     */
    findById: function (id, done) {
        db.query('SELECT * FROM members WHERE members.member_id = $1', [id], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return done(data.rows[0])
        })
    },

    /**
     * Finds all members
     *
     * @param done
     */
    findAll: function (done) {
        db.query('SELECT * FROM members', [], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return done(data.rows)
        })
    },

    /**
     * Deletes a member from the database
     *
     * @param memberId
     * @param done
     */
    deleteMember: function (memberId, done) {
        db.query('DELETE FROM members WHERE member_id = $1',
            [memberId], function (err, data) {
            if (err) {
                return console.error('error running query', err)
            }
            return done()
        })
    }

}