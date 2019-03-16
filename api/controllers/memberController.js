var Member = require('../models/memberModel')
var MemberService = require('../services/memberService')
var UploadService = require('../services/uploadService')
var UUID = require('uuid/v1')

module.exports = {

    /**
     * Finds a member by id
     */
    findMember: (req, callback) => {
        MemberService.find(req.params.id, function (result) {
            return callback(result)
        })
    },

    findMemberByEmail: (req, callback) => {
        MemberService.findByEmail(req.query.email, function (result) {
            return callback(result)
        })
    },

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
        var uuid = UUID()
        var filename =  req.body.first_name + '_' + req.body.last_name + '_' + uuid + '.pdf'

        UploadService.upload('uploads/resume.pdf', filename, function(url) {
            var member = new Member()
            member.id = uuid,
            member.first_name = req.body.first_name,
            member.last_name = req.body.last_name,
            member.email = req.body.email,
            member.phone = req.body.phone,
            member.resume_url = url,
            member.subscribed = req.body.subscribed,
            member.pronoun = req.body.pronoun,
            member.school = req.body.school,
            member.year = req.body.year,
            member.degree = req.body.degree, 
            member.member_type = req.body.member_type
            MemberService.create(member, function() {
                MemberService.findAll(function (members) {
                    return callback(members)
                })
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
    },

    /**
     * Updates a member's information
     */
    updateMember: (req, callback) => {
        MemberService.find(req.params.id, function (result) {
            var member = new Member()
            member.id = req.body.id || result.id,
            member.first_name = req.body.first_name || result.first_name,
            member.last_name = req.body.last_name || result.last_name,
            member.email = req.body.email || result.email,
            member.phone = req.body.phone || result.phone,
            member.resume_url = req.body.resume_url || result.resume_url,
            member.subscribed = req.body.subscribed || result.subscribed,
            member.pronoun = req.body.pronoun || result.pronoun,
            member.school = req.body.school || result.school,
            member.year = req.body.year || result.year,
            member.degree = req.body.degree || result.degree, 
            member.member_type = req.body.member_type || result.member_type
            MemberService.update(member, function () {
                MemberService.findAll(function (members) {
                    return callback(members)
                })
            })
        })
    }

}

