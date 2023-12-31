'use strict';

var resp_x = "Temp debugging response";

var STATUSES=['todo','in-progress','completed'];
function validateStatus(status){
  return STATUSES.includes(status);
}

function getJsonQuery(searchParams){//title, status, dueDateLower, dueDateUpper
  var params=[];
  if(searchParams.title){
    var title={like: new RegExp('.*'+searchParams.title+'.*', "i")};//case-insensitive search
    params.push({title});
  }
  if(searchParams.status)params.push({status: searchParams.status});
  if(searchParams.dueDateLower)params.push({dueDate:{gt:searchParams.dueDateLower}});
  if(searchParams.dueDateUpper)params.push({dueDate:{lt:searchParams.dueDateUpper}});
  if(params.length == 0)return {};//query all
  return {where: {and:params} };
}

function stripUndefined(object){
  Object.keys(object).forEach(key => {
    if(object[key] !== undefined)return 1;
    delete object[key];
    return 1;
  });
}

function createNewTask(Task, title, description, status, dueDate, callback){
  if(!validateStatus(status))return callback("Status invalid");
  Task.create( {title, description, status, dueDate}, (error, newTask)=>{
    if(error){
      return callback(error);
    }
    callback(null, newTask.id);
  });
}


function getById(Task, taskID, callback){
  Task.findById( taskID, function (err, instance) {
      if(!instance){
        callback("No matching Task found","");
        return;
      }
      var response = instance;
      callback(null, response);
  });
}

function searchTasks(Task, searchParams, callback){
  var query = getJsonQuery(searchParams);
  Task.find(query,(err,res)=>{
    callback(null,res);
  });
}


function updateById(Task, taskID, updateParams, callback){
  stripUndefined(updateParams);
  Task.updateAll({id:taskID}, updateParams, (err,res)=>{
    if(err)callback(err);
    else callback(null,1);
  });
}

function updateMany(Task, searchParams, updateParams, callback){
  var query = getJsonQuery(searchParams);
  stripUndefined(updateParams);
  Task.updateAll(query.where, updateParams, (err,res)=>{
    if(err)callback(err);
    else callback(null,res.count);
  });
}

module.exports = function(Task) {
  //Create
  Task.create_new = (title,description,status,dueDate,cb) => {createNewTask(Task,title,description,status,dueDate,cb)}
  Task.remoteMethod(
    'create_new', {
      http: {path: '/create',verb: 'post'},
      accepts:[
        {arg: 'title', type: 'string', required: true, http: { source: 'form' } },
        {arg: 'description', type: 'string', http: { source: 'form' } },
        {arg: 'status', type: 'string', required: true, http: { source: 'form' } },
        {arg: 'dueDate', type: 'date', http: { source: 'form' } }
      ],
      returns: {arg: 'id', type: 'string'}
    }
  );

  //Read
  Task.getById = (id,cb) => {getById(Task,id,cb)}
  Task.remoteMethod(
    'getById', {
      http: {path: '/get-by-id', verb: 'get'},
      accepts: {arg: 'id', type: 'string', required: true, http: { source: 'query' } },
      returns: {arg: 'instance', type: 'json'}
    }
  );

  Task.search = (title,status,dueDateLower,dueDateUpper,cb) => {searchTasks(Task,{title,status,dueDateLower,dueDateUpper},cb)}
  Task.remoteMethod(
    'search', {
      http: {path: '/search', verb: 'get'},
      accepts: [
        {arg: 'title', type: 'string', http: { source: 'query' } },
        {arg: 'status', type: 'string', http: { source: 'query' } },
        {arg: 'dueDateLower', type: 'date', http: { source: 'query' } },
        {arg: 'dueDateUpper', type: 'date', http: { source: 'query' } },
      ],
      returns: {arg: 'matches', type: 'array'}
    }
  );

  //Update
  Task.updateById = (id, title,description,status,dueDate,cb) => {updateById(Task,id,{title,description,status,dueDate},cb)}
  Task.remoteMethod(
    'updateById', {
      http: {path: '/update-by-id', verb: 'get'},//TODO: change to post
      accepts: [
        {arg: 'id', type: 'string', required: true},
        {arg: 'title', type: 'string'},
        {arg: 'desc', type:'string'},
        {arg: 'status', type: 'string'},
        {arg: 'dueDate', type: 'date'},
      ],
      returns: {arg: 'success', type: 'number'}
    }
  );
  Task.updateMany = (title,status,dueDateLower,dueDateUpper, newTitle,newDesc,newStatus,newDueDate, cb)=>{
    updateMany(Task,{title,status,dueDateLower,dueDateUpper},
      {title:newTitle,description:newDesc,status:newStatus,dueDate:newDueDate},cb);
  }
  Task.remoteMethod(
    'updateMany', {
      http: {path: '/update-many', verb: 'get'},
      accepts: [
        {arg: 'title', type: 'string'},
        {arg: 'status', type: 'string'},
        {arg: 'dueDateLower', type: 'date'},
        {arg: 'dueDateUpper', type: 'date'},
        {arg: 'newTitle', type: 'string'},
        {arg: 'newDesc', type: 'string'},
        {arg: 'newStatus', type: 'string'},
        {arg: 'newDueDate', type: 'date'},
      ],
      returns: {arg: 'success', type: 'number'}
    }
  );

  //Delete
};
/*
658da13259a20f3478ba4ba8
659042db9ce22b91c98bb270
*/
