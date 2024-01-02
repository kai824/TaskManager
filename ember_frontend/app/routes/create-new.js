import Route from '@ember/routing/route';
import { service } from '@ember/service';

const API_HOST = 'http://localhost:3000'

export default class SearchRoute extends Route {
  queryParams = {
    title: {},
    description: {},
    status: {},
    dueDate: {}
  }
  @service router;
  async model(params){
    if(!params.dueDate)delete params.dueDate;
    let response = await fetch(API_HOST+`/api/Tasks/create`,{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    if(response.status === 200){
      this.router.transitionTo('search');//redirect away
      return {success: 1};
    }
    let error=response.error;
    return {params,error, success: 0};
  }
}
