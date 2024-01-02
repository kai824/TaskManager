import Route from '@ember/routing/route';
import { service } from '@ember/service';

const API_HOST = 'http://localhost:3000'

export default class DeleteTaskRoute extends Route {
  @service router;
  queryParams = {
    title: {},
    status: {},
    dueDateLower: {},
    dueDateUpper: {},
  };
  async model(params) {
    let req_body = {};
    if(params.title)req_body.title=params.title;
    if(params.status)req_body.status=params.status;
    if(params.dueDateLower)req_body.dueDateLower=params.dueDateLower;
    if(params.dueDateUpper)req_body.dueDateUpper=params.dueDateUpper;
    let response = await fetch(API_HOST+'/api/Tasks/delete-many', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req_body)
    });
    let {status, statusText} = response;
    let data = await response.json();
    return data;
  }
  afterModel(model, transition){
    if(model.response && model.response.count && model.response.count>0){
      //delete successful
      this.router.transitionTo('search');
    }else this.router.transitionTo('search');//nothing happened
  }
}
