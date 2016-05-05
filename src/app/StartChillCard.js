import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';

class StartChillCard extends React.Component {



  render (){
    return (
      <Card className={this.props.className}>
        <CardHeader
          title="Start a Chill"
          avatar="http://lorempixel.com/100/100/nature/"
        />
      </Card>
    );

  }

}

export default StartChillCard;