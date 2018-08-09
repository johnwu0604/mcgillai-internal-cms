var MemberController = require('../controllers/memberController')

module.exports = function(app) {
    
    /**
     * Retrieve all members in the database
     */
    app.get('/members', (req, res) => {
        MemberController.getAllMembers(function (members) {
            res.status(200).send(members)
        })
    })

}