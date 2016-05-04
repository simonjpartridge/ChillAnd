import React from 'react';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/Card/CardText';
import ChillOverview from './ChillOverview';
import $ from 'jquery';

class JoinChillCard extends React.Component {

    renderChill(chillInfo){
      return (<ChillOverview info={chillInfo}/>);
    };


    renderAllChills() {
      var tempChill = [{"tags": ["code"], "location": "SimpleWeb", "user": "Ben"}];
      return $.map(tempChill,this.renderChill);
    };



  render (){

        // <CardMedia
        //   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        // >
        //<CardActions>
        //   <FlatButton label="Action1" />
        //   <FlatButton label="Action2" />
        // </CardActions>

    return (
      <Card className={this.props.className}>
        <CardHeader
          title="Join a Chill"
          subtitle="Chill &..."
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          {this.renderAllChills()}
        </CardText>

      </Card>
    );

  }

}

export default JoinChillCard;