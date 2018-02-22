//get route -> /api/friends displays JSON of all possible friends

//post route /api/friends "incoming server results" amd logic
const friendsArray = require('../data/friends.js');

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        console.log(req.body);
        res.json(friendsArray);
    });
}