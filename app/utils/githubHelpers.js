var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";

var param = "?client_id=" + id + '&client_secret=' + sec;

function getUserInfo (username){

  return axios.get('https://api.github.com/users/' + username + param)


};

function getRepos(username){
  console.log('username ', username)
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars(repos){
  return repos.data.reduce(function(prev, curr){
    return prev + curr.stargazers_count;
  },0)
}

function getPlayersData(player){
  console.log('getPlayersData ', player.login)
  return getRepos(player.login)
          .then(getTotalStars)
          .then(function (totalStars){
            console.log("followers and stars ",player.followers,' ',totalStars);
            return {
              followers: player.followers,
              totalStars: totalStars
            }
          })
}

function calculateScores(players){
  console.log('calculateScores ', players)
  return [
    players[0].followers*3 + players[0].totalStars,
    players[1].followers*3 + players[1].totalStars
  ]
}

var helpers = {
  //players is an array
  getPlayersInfo: function(players){
    //promise all
    return axios.all(players.map(function(username){
      return getUserInfo(username);

    })).then(function(info){
        return info.map(function(user){
          return user.data;
        })

      }).catch(function(err){
        console.log("ERR",err);

      })
  },

  battle: function(players){
    console.log("players ", players)
      var playerOneData = getPlayersData(players[0]);
      var playerTwoData = getPlayersData(players[1]);

      return axios.all([playerOneData, playerTwoData])
              .then(calculateScores)
              .catch(function(err){console.warn('Error in getPlayersInfo: ',err)})

  }
};

module.exports = helpers;
