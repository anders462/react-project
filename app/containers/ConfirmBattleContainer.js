var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    console.log("getInitialState");
     return {
       isLoading: true,
       playersInfo: []
     }

  },

  componentDidMount: function(){
    console.log('componentDidMount');
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        this.setState({
          isLoading: false,
          playersInfo: [players[0],players[1]]
        })
      }.bind(this))
    // Fetch info from github then update state
  },

  handleInitiateBattle: function(){
    console.log("push");
      this.context.router.push({
        pathname: '/results',
        state: {
          playersInfo: this.state.playersInfo
        }
      })

  },

  render: function(){

    console.log("render");

    return (

      <ConfirmBattle
        isLoading = {this.state.isLoading}
        onInitiateBattle = {this.handleInitiateBattle}
        playersInfo = {this.state.playersInfo}
        />
    );


  }




});

module.exports = ConfirmBattleContainer;
