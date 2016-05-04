import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';
import imageGetter from './imageGetter.js';

class ChillOverview extends React.Component {


  renderChillTags(){

    return this.props.info.tags[0];
  }
  renderChillImages(){
    var imgSRC =
    return (<Img src={imgsrc}>);
  }



  render (){

    return (
      <Card>
        <CardTitle title={this.props.info.tags[0]} subtitle={this.props.info.location} />

        <div>
          {this.renderChillImages()}
          {this.renderChillTags()}
        </div>

      </Card>
    );

  }

}

export default ChillOverview;
