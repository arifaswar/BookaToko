class userController {
    static async showFormLogin(req, res) {
        try {
            // res.send('user')
            res.render('login')
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = userController