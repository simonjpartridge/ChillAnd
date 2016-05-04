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

        // <CardMedia
        //   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        // >
        //<CardActions>
        //   <FlatButton label="Action1" />
        //   <FlatButton label="Action2" />
        // </CardActions>

    return (
      <Card>
        <CardHeader
          title="Start a Chill"
          subtitle="Chill &..."
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardMedia>
          <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Start a chill somewhere
        </CardText>

      </Card>
    );

  }

}

export default StartChillCard;