var Member = require('../models/memberModel')
var MemberService = require('../services/memberService')

module.exports = {

    /**
     * Retrieve all the members in the database
     *
     * @param req
     * @param done
     */
    getAllMembers: (callback) => {
        MemberService.findAll(function (members) {
            return callback(members)
        })
    },

    /**
     * Creates a new member in the database
     */
    createMember: (req, callback) => {
        var member = new Member()
        member.id = req.body.id
        member.qr_code_url = req.body.qr_code_url
        member.first_name = req.body.first_name,
        member.last_name = req.body.last_name,
        member.email = req.body.email,
        member.phone = req.body.phone,
        member.resume_url = req.body.resume_url,
        member.subscribed = req.body.subscribed,
        member.school = req.body.school,
        member.year = req.body.year,
        member.degree = req.body.degree, 
        member.member_type = req.body.member_type
        MemberService.create(member, function() {
            MemberService.findAll(function (members) {
                return callback(members)
            })
        })
    },

    /**
     * Deletes a member from the database
     */
    deleteMember: (req, callback) => {
        MemberService.delete(req.params.id, function() {
            MemberService.findAll(function (members) {
                return callback(members)
            })
        })
    }

}

