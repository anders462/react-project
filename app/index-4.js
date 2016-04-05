var React = require('react');
var ReactDOM = require('react-dom');

var  USER_DATA = {
  name: "Anders Bengtsson",
  username: "anders462",
  image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/026/0a0/2de8a00.jpg"
}

var ProfilePic =  React.createClass({
   render: function(){
     return (
       <img src={this.props.imageUrl} style={{height:200, width: 200}}/>
     )
   }
});

var ProfileLink = React.createClass({
  render: function(){

    return (
      <div>
        <a href={"https://github.com/" + this.props.username}>
        {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
   render: function(){
     return (
     <div>
       {this.props.name}
     </div>
     )
   }
});

var Avatar = React.createClass({
   render: function(){
     return (
       <div>
       <ProfileLink username={this.props.user.username}/>
       <ProfileName name={this.props.user.name}/>
       <ProfilePic imageUrl={this.props.user.image}/>
       </div>
     )
   }
});


ReactDOM.render(<Avatar user = {USER_DATA}/>, document.getElementById('app'));
