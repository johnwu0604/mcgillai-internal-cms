module.exports = function(app) {
    
    app.get('/members', (req, res) => {
        res.status(200).send('Members')
    })

}