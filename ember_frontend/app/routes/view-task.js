import Route from '@ember/routing/route';

const API_HOST = 'http://localhost:3000'

export default class ViewTaskRoute extends Route {
  queryParams = {
    title: {},
    desc: {},
    status: {},
    dueDate: {}
  };
  async model(params) {
    var message="";
    if(params.title || params.desc || params.status || params.dueDate){
      let req_body = {id:params.task_id};
      if(params.title)req_body.title=params.title;
      if(params.desc)req_body.desc=params.desc;
      if(params.status)req_body.status=params.status;
      if(params.dueDate)req_body.dueDate=params.dueDate;
      let response = await fetch(API_HOST+`/api/Tasks/update-by-id`,{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
      });
      let {status, statusText} = response;
      if(status === 200)message="Update success";
      else message="Update failed";
    }
    let response = await fetch(API_HOST+`/api/Tasks/get-by-id?id=${params.task_id}`);
    let {status, statusText} = response;
    let data = await response.json();
    if(data.instance && data.instance.dueDate)data.instance.dueDate = new Date(data.instance.dueDate).toISOString().split('T')[0];
    return {status, statusText, ...data, message};
  }
}
