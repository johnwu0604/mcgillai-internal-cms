var MemberController = require('../controllers/memberController')

module.exports = function(app) {
    
    /**
     * Endpoint to add a new member
     */
    app.get('/members', (req, res) => {
        MemberController.getAllMembers(function (members) {
            res.status(200).send(members)
        })
    })

    /**
     * Endpoint to add a new member
     */
    app.post('/member', (req, res) => {
        MemberController.createMember(req, function (members) {
            res.status(200).send(members)
        })
    })

}