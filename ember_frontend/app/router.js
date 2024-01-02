import EmberRouter from '@ember/routing/router';
import config from 'task-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('search', {path: '/'});
  this.route('viewTask', {path: '/task/:task_id'});
  this.route('deleteTask', {path: '/delete/:task_id'});
  this.route('deleteMany');
  this.route('createNew');
});
