var MemberController = require('../controllers/memberController')
var multer = require('multer')
var storageResume = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            cb(null, 'resume.pdf')
        }
    }
)
var uploadResume = multer({storage: storageResume})

module.exports = function(app) {
    
    /**
     * Endpoint to find a member by id
     */
    app.get('/api/member/:id', (req, res) => {
        MemberController.findMember(req, function (member) {
            res.status(200).send(member)
        })
    })

    /**
     * Endpoint to find a member by email
     */
    app.get('/api/member', (req, res) => {
        MemberController.findMemberByEmail(req, function (member) {
            res.status(200).send(member)
        })
    })

    /**
     * Endpoint to retrieve all members
     */
    app.get('/api/members', (req, res) => {
        MemberController.getAllMembers(function (members) {
            res.status(200).send(members)
        })
    })

    /**
     * Endpoint to add a new member
     */
    app.post('/api/member', uploadResume.single('resume'), (req, res) => {
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