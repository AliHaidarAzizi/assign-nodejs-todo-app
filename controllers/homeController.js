
function homeController(req, res) {
    res.setHeader('Content-Type', "text/html");

    res.sendFile(__dirname + ("/index.html"));
}

module.exports = homeController;