var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var response = req.body;
        var smallestDiff = 100000000;
        friends.forEach(friend => {
            var totalDiff = 0
            var i; for (i = 0; i < friend.scores.length; i++) {
    //subtraction for user input versus friend array 
    //add diff value to totalDiff
    
            }
//if statement to check if friends totalDiff is smaller than SmallestDiff (another valuable)
//holy shit
        });

    })
}
