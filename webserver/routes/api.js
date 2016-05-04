var express = require('express');
var router = express.Router();
var Event = require('../models/Event.js');

/* GET home page. */
router.get('/nearby', function(req, res, next) {
  Event.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
});

router.post('/create', function(req, res, next) {

  if(!req.query.tag) {
    res.status(400).json({ error: 'missing tag param' });
    return;
  }

  if(!req.query.user) {
    res.status(400).json({ error: 'missing user param' });
    return;
  }

  if(!req.query.location) {
    res.status(400).json({ error: 'missing location param' });
    return;
  }

  var event = new Event({tags: [req.query.tag], attendees: [req.query.user], user: req.query.user, location: req.query.location});
  event.save(event, function(err, event) {
    if(err) {
      res.status(500).json({ error: 'oops' });
    } else {
      res.json(event);
    }
  });

  
});

router.post('/join', function(req, res, next) {

  if(!req.query.id) {
    res.status(400).json({ error: 'missing id param' });
    return;
  }

  if(!req.query.user) {
    res.status(400).json({ error: 'missing user param' });
    return;
  }

  Event.findById(req.query.id, function (err, event) {
    if (err) {

    } else {
      event.attendees.push(req.query.user);
      if (req.query.tag) {
        event.tags.push(req.query.tag);
      }
      event.save();
      res.json(event);
    }
  });
  
});

module.exports = router;
