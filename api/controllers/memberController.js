var UUID = require('uuid/v1')
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
    }

}