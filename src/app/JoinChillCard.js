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
      return (<ChillOverview key={chillInfo.tags[0]}info={chillInfo}/>);
    };


    renderAllChills() {
      var tempChill = [{"tags": ["code"], "location": "SimpleWeb", "user": "Ben"},{"tags": ["cod"], "location": "SimpleWeb", "user": "Ben"}];
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
      <div>
      <div className={this.props.className}>
        <div className="join-header" >
            <h1>Join a Chill</h1>
        </div>
      </div>
        {this.renderAllChills()}
      </div>
    );

  }

}

export default JoinChillCard;