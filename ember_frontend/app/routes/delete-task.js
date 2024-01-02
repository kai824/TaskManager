import Route from '@ember/routing/route';
import { service } from '@ember/service';

const API_HOST = 'http://localhost:3000'

export default class DeleteTaskRoute extends Route {
  @service router;
  async model(params) {
    let response = await fetch(API_HOST+'/api/Tasks/delete-by-id', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:params.task_id})
    });
    let {status, statusText} = response;
    let data = await response.json();
    return data;
  }
  afterModel(model, transition){
    if(model.response && model.response.count && model.response.count>0){
      //delete successful
      this.router.transitionTo('search');
    }//nothing happened
  }
}
