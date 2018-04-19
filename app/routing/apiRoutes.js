//get route -> /api/friends displays JSON of all possible friends

//post route /api/friends "incoming server results" amd logic
const friends = require('../data/friends.js'); 

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        console.log(req.body);
        res.json(friends);
    });
    app.post("api/friends", function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000,
        };
        console.log(req.body);
    
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores);

        var totalDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDiff= 0;

            for (var p = 0; p < friends[i].scores[p]; p++) {
                totalDiff += math.abs(parseInt(userScores[p]) - parseInt(friends[i].scores[p]));

                if (totalDiff <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDiff;
                }
            } 
        }
        friends.push(userData);
    });
}