import Route from '@ember/routing/route';

const API_HOST = 'http://localhost:3000'

export default class SearchRoute extends Route {
  queryParams = {
    title: {},
    status: {},
    dueDateLower: {},
    dueDateUpper: {},
    new_title: {},
    new_desc: {},
    new_status: {},
    new_dueDate: {},
    message: {}
  };
  async model(params) {
    let queryString = '';
    if(params.title)queryString+=`&title=${params.title}`;
    if(params.status)queryString+=`&status=${params.status}`;
    if(params.dueDateLower)queryString+=`&dueDateLower=${params.dueDateLower}`;
    if(params.dueDateUpper)queryString+=`&dueDateUpper=${params.dueDateUpper}`;
    if(queryString.length>0)queryString=queryString.slice(1,);

    if(params.new_title||params.new_desc||params.new_status||params.new_dueDate){
      let {title, status, dueDateLower, dueDateUpper} = params;
      let req_body = {title, status, dueDateLower, dueDateUpper};
      Object.keys(req_body).forEach(key => {
        if(req_body[key])return 1;
        delete req_body[key];
        return 1;
      });
      if(params.new_title)req_body.newTitle=params.new_title;
      if(params.new_desc)req_body.newDesc=params.new_desc;
      if(params.new_status)req_body.newStatus=params.new_status;
      if(params.new_dueDate)req_body.newDueDate=params.new_dueDate;
      let response = await fetch(API_HOST+`/api/Tasks/update-many`,{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
      });
      if(response.status === 200)params.message="Update success";
      else{
        params.message="Update failed";
      }
    }

    let response = await fetch(API_HOST + `/api/Tasks/search?${queryString}`);
    let {status, statusText} = response;
    let data = await response.json();
    return {status, statusText, ...data, params,sks:1};
  }
}
