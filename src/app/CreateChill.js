import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';

class CreateChill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value1:"",
                  value2:""};
  };



  handleChange(event) {
    console.log(event);
    this.setState({value1: event.target.value});
  };

  handleChange2(event) {
    console.log(event);
    this.setState({value2: event.target.value});
  };


  addChill(){
    var data = {"tag":this.state.value1, user:this.state.value2, location:"Bristol", nsfw:false};
    var req = $.post("./api/create", data);

    req.done(function(data){
      console.log(data);
      var theUrl = data.items[0].media.m;
      console.log(theUrl);
      self.setState({imgUrl:theUrl});
      //self.setState({imgUrl:data[0]})
    });

  };

  chillClickHandler() {
    this.addChill();
  };



  render (){

        // <CardMedia
        //   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        // >
        //<CardActions>
        //   <FlatButton label="Action1" />
        //   <FlatButton label="Action2" />
        // </CardActions>
        //        <CardTitle title="Card title" subtitle="Card subtitle" />

    //   <Card className={this.props.className}>
    //     <CardHeader
    //       title="Start a Chill"
    //       subtitle="Chill &..."
    //       avatar="http://images.clipartpanda.com/smiley-face-clip-art-animated-9iRgM76ie.jpeg"
    //     />
    //     <div>
    //      Make your chill a reality and find some to do it with.
    //     </div>
    //     <TextField value={this.state.value1}
    //     onChange={this.handleChange.bind(self)}
    //     hintText="Your Chill Name"
    //   />
    //     <TextField
    //     value={this.state.value2}
    //     onChange={this.handleChange2.bind(self)}
    //     hintText="Name"
    //   />
    //   <RaisedButton label="Chill" onMouseUp={this.chillClickHandler.bind(self}
    //   primary={true}  />
    //   <RaisedButton label="'Chill'" secondary={true} />
    //   </Card>
    // );

    var self = this;
    return (<Card className={this.props.className}>
        <CardHeader
          title="Start a Chill"
          subtitle="Chill &..."
          avatar="http://images.clipartpanda.com/smiley-face-clip-art-animated-9iRgM76ie.jpeg"
        />
        <div>
         Make your chill a reality and find some to do it with.
        </div>
        <TextField value={this.state.value1}
        onChange={this.handleChange.bind(self)}
        hintText="Your Chill Name"
      />
        <TextField
        value={this.state.value2}
        onChange={this.handleChange2.bind(self)}
        hintText="Name"
      />
      <RaisedButton label="Chill" onMouseUp={this.chillClickHandler.bind(self)}
      primary={true}  />
      <RaisedButton label="'Chill'" secondary={true} />
      </Card>);
  }

}

export default CreateChill;
