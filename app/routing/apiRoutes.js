var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        //storing the smallestdiff in an object along with name and photo
        //using nested for loop approach versus foreach, makes more sense to me
        var bestMatch = {
            name: "",
            photo:"",
            smallestDiff: 10000000
        };
        var UserResponse = req.body;
        var userScore = UserResponse.scores
        var totalDiff;
        //loop over all existing friends using nested loops
        for (var i =  0; i < friends.length; i++){
           var currentFriend = friends[i];
           totalDiff = 0
           
           
           for (var j = 0; j < currentFriend.scores.length; j++){
             var currentFriendScore = currentFriend.scores[j]
             var currentUserScore = userScore[j];
             
             totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
           }
        //if statement to check if friends totaldiff is smaller than smallestDiff/bestmatch
        if (totalDiff <=bestMatch.smallestDiff){
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.smallestDiff = totalDiff;
        }
        }
        friends.push(UserResponse)
        res.json(bestMatch)
    });
};
