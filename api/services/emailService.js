var nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = {
    
    /**
     * Uses nodemailer service to send out a newsletter
     */
    sendNewsletter: (req, callback) => {
        var transporter = nodemailer.createTransport('smtps://'+process.env.GMAIL_USER+'%40gmail.com:'+process.env.GMAIL_PASS+'@smtp.gmail.com')
        var mailOptions = {
            from: '"'+req.body.sender_name+'" <'+req.body.sender_email+'>', 
            replyTo: '"'+req.body.sender_name+'" <'+req.body.sender_email+'>', 
            to: req.body.emails,
            subject: req.body.subject, 
            html: {
                path: 'uploads/template.html'
            }
        }
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error)
            }
            return callback()
        })
    }

}