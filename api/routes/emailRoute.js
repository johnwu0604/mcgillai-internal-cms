var EmailService = require('../services/emailService')
var multer  = require('multer')
var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            cb(null, 'template.html')
        }
    }
)
var upload = multer( { storage: storage } );

module.exports = function(app) {

    /**
     * Endpoint for sending out a newsletter
     */
    app.post('/api/newsletter', upload.single('template') , (req, res) => {
        EmailService.sendNewsletter(req, function() {
            res.status(200).send('Newsletter Sent')
        })
    })

}