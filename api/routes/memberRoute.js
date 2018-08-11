var MemberController = require('../controllers/memberController')

module.exports = function(app) {
    
    /**
     * Endpoint to add a new member
     */
    app.get('/api/members', (req, res) => {
        MemberController.getAllMembers(function (members) {
            res.status(200).send(members)
        })
    })

    /**
     * Endpoint to add a new member
     */
    app.post('/api/member', (req, res) => {
        MemberController.createMember(req, function (members) {
            res.status(200).send(members)
        })
    })

    /**
     * Endpoint to delete a member
     */
    app.delete('/api/member/:id', (req, res) => {
        MemberController.deleteMember(req, function(members) {
            res.status(200).send(members)
        })
    })

    /**
     * Endpoint to update a member
     */
    app.put('/api/member/:id', (req, res) => {
        MemberController.updateMember(req, function (members) {
            res.status(200).send(members)
        })
    })

}