import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';
import $ from 'jquery';

class ChillOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imgUrl:""};
  };


  componentDidMount() {
    var self = this;
    var req = this.getImageWithName(this.props.info.tags[0]);

    req.done(function(data){
      var theUrl = data.items[0].media.m;
      self.setState({imgUrl:theUrl});
    })
  };


  getImageWithName(name){
      return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      {
          tags: name,
          format: "json"
      });
    };


  renderChillTags(){

    return this.props.info.user;
  }

  renderChillImages(){
    return (<img src={this.state.imgUrl} />);
  }



  render (){

    return (
      <Card>
        <CardTitle title={this.props.info.tags[0]} subtitle={'Location: ' +this.props.info.location} />

        <div>
          {this.renderChillImages()}
          <p><h2>{this.renderChillTags()}</h2></p>
        </div>

      </Card>
    );

  }

}

export default ChillOverview;
