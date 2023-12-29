'use strict';

function status(callback) {
  var currentDate = new Date();
  var currentHour = currentDate.getHours(), currentDay = currentDate.getDay();
  var OPEN_HOUR = 9;
  var CLOSE_HOUR = 17;
  // console.log('Current hour is %d', currentHour);
  // console.log('Current day is %d', currentDay);
  var response;
  if (currentHour>=OPEN_HOUR && currentHour<CLOSE_HOUR && currentDay<=5 && currentDay>=1 ) {
    response = 'We are open for business.';
  } else {
    response = 'Office is closed, please leave a message. Office opens 9am-5pm Mon-Fri';
  }
  callback(null, response);
};

function getTitle(Task, taskID, callback){
  Task.findById( taskID, function (err, instance) {
      if(!instance){
        callback("No matching Task found","");
        return;
      }
      var response = instance.title;
      callback(null, response);
  });
}

module.exports = function(Task) {
  Task.status = status
  Task.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

  Task.getTitle= (id,cb) => {getTitle(Task,id,cb)}
  Task.remoteMethod(
    'getTitle', {
          http: {path: '/get-title', verb: 'get'},
          accepts: {arg: 'id', type: 'string', required: true, http: { source: 'query' } },
          returns: {arg: 'title', type: 'string'}
        }
  );
};
