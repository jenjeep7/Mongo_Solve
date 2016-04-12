var express = require('express');
var Assignment = require('../../models/assignment.js');
var router = express.Router();

router.get('/all', function(request, response){
  Assignment.find({}, function(err, assignments){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(assignments);
    }
  })
})

router.post('/add', function(request, response){
  console.log('Requested with a body of', request.body);

  var data = request.body;

  // new newAssignment = new Assignment(request.body);

  var newAssignment = new Assignment({
    assignment_number : data.assignment_number,
    student_name : data.student_name,
    score : data.score,
    date_completed : data.date_completed
  })

  newAssignment.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Assignment saved!');
      response.sendStatus(200);
    }
  })

})

router.put('/edit', function(request, response){

})

router.delete('/remove', function(request, response){

})

module.exports = router;
