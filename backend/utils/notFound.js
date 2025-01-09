function pageNotFound(req, res, next){
    res.status(404).send("404 Page Not Found");
}

module.exports = {
    pageNotFound
}