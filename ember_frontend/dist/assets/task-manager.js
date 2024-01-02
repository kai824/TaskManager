'use strict';



;define("task-manager/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "task-manager/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"task-manager/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("task-manager/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("task-manager/components/status-dropdown", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <select name="{{if @name @name "status"}}" required={{@required}}>
    <option value="" disabled={{not @optional}} selected={{if @default "false" "true"}}></option>
    <option value="todo" selected={{eq "todo" @default}}>todo</option>
    <option value="in-progress" selected={{eq "in-progress" @default}}>in-progress</option>
    <option value="completed" selected={{eq "completed" @default}}>completed</option>
  </select>
  {{yield}}
  
  */
  {
    "id": "Greqbr9A",
    "block": "[[[10,\"select\"],[15,3,[29,[[52,[30,1],[30,1],\"status\"]]]],[15,\"required\",[30,2]],[12],[1,\"\\n  \"],[10,\"option\"],[14,2,\"\"],[15,\"disabled\",[28,[37,1],[[30,3]],null]],[15,\"selected\",[52,[30,4],\"false\",\"true\"]],[12],[13],[1,\"\\n  \"],[10,\"option\"],[14,2,\"todo\"],[15,\"selected\",[28,[37,2],[\"todo\",[30,4]],null]],[12],[1,\"todo\"],[13],[1,\"\\n  \"],[10,\"option\"],[14,2,\"in-progress\"],[15,\"selected\",[28,[37,2],[\"in-progress\",[30,4]],null]],[12],[1,\"in-progress\"],[13],[1,\"\\n  \"],[10,\"option\"],[14,2,\"completed\"],[15,\"selected\",[28,[37,2],[\"completed\",[30,4]],null]],[12],[1,\"completed\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[18,5,null],[1,\"\\n\"]],[\"@name\",\"@required\",\"@optional\",\"@default\",\"&default\"],false,[\"if\",\"not\",\"eq\",\"yield\"]]",
    "moduleName": "task-manager/components/status-dropdown.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("task-manager/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("task-manager/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("task-manager/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/app-version", ["exports", "@ember/component/helper", "task-manager/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"task-manager/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("task-manager/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("task-manager/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("task-manager/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("task-manager/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("task-manager/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "task-manager/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"task-manager/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("task-manager/initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("task-manager/router", ["exports", "@ember/routing/router", "task-manager/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"task-manager/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('search', {
      path: '/'
    });
    this.route('viewTask', {
      path: '/task/:task_id'
    });
    this.route('deleteTask', {
      path: '/delete/:task_id'
    });
    this.route('deleteMany');
    this.route('createNew');
  });
});
;define("task-manager/routes/create-new", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const API_HOST = 'http://localhost:3000';
  let SearchRoute = _exports.default = (_class = class SearchRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "queryParams", {
        title: {},
        description: {},
        status: {},
        dueDate: {}
      });
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    async model(params) {
      if (!params.dueDate) delete params.dueDate;
      let response = await fetch(API_HOST + `/api/Tasks/create`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      if (response.status === 200) {
        this.router.transitionTo('search'); //redirect away
        return {
          success: 1
        };
      }
      let error = response.error;
      return {
        params,
        error,
        success: 0
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("task-manager/routes/delete-many", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const API_HOST = 'http://localhost:3000';
  let DeleteTaskRoute = _exports.default = (_class = class DeleteTaskRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _defineProperty(this, "queryParams", {
        title: {},
        status: {},
        dueDateLower: {},
        dueDateUpper: {}
      });
    }
    async model(params) {
      let req_body = {};
      if (params.title) req_body.title = params.title;
      if (params.status) req_body.status = params.status;
      if (params.dueDateLower) req_body.dueDateLower = params.dueDateLower;
      if (params.dueDateUpper) req_body.dueDateUpper = params.dueDateUpper;
      let response = await fetch(API_HOST + '/api/Tasks/delete-many', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
      });
      let {
        status,
        statusText
      } = response;
      let data = await response.json();
      return data;
    }
    afterModel(model, transition) {
      if (model.response && model.response.count && model.response.count > 0) {
        //delete successful
        this.router.transitionTo('search');
      } else this.router.transitionTo('search'); //nothing happened
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("task-manager/routes/delete-task", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const API_HOST = 'http://localhost:3000';
  let DeleteTaskRoute = _exports.default = (_class = class DeleteTaskRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    async model(params) {
      let response = await fetch(API_HOST + '/api/Tasks/delete-by-id', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: params.task_id
        })
      });
      let {
        status,
        statusText
      } = response;
      let data = await response.json();
      return data;
    }
    afterModel(model, transition) {
      if (model.response && model.response.count && model.response.count > 0) {
        //delete successful
        this.router.transitionTo('search');
      } //nothing happened
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("task-manager/routes/search", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const API_HOST = 'http://localhost:3000';
  class SearchRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "queryParams", {
        title: {},
        status: {},
        dueDateLower: {},
        dueDateUpper: {},
        new_title: {},
        new_desc: {},
        new_status: {},
        new_dueDate: {},
        message: {}
      });
    }
    async model(params) {
      let queryString = '';
      if (params.title) queryString += `&title=${params.title}`;
      if (params.status) queryString += `&status=${params.status}`;
      if (params.dueDateLower) queryString += `&dueDateLower=${params.dueDateLower}`;
      if (params.dueDateUpper) queryString += `&dueDateUpper=${params.dueDateUpper}`;
      if (queryString.length > 0) queryString = queryString.slice(1);
      if (params.new_title || params.new_desc || params.new_status || params.new_dueDate) {
        let {
          title,
          status,
          dueDateLower,
          dueDateUpper
        } = params;
        let req_body = {
          title,
          status,
          dueDateLower,
          dueDateUpper
        };
        Object.keys(req_body).forEach(key => {
          if (req_body[key]) return 1;
          delete req_body[key];
          return 1;
        });
        if (params.new_title) req_body.newTitle = params.new_title;
        if (params.new_desc) req_body.newDesc = params.new_desc;
        if (params.new_status) req_body.newStatus = params.new_status;
        if (params.new_dueDate) req_body.newDueDate = params.new_dueDate;
        let response = await fetch(API_HOST + `/api/Tasks/update-many`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req_body)
        });
        if (response.status === 200) params.message = "Update success";else {
          params.message = "Update failed";
        }
      }
      let response = await fetch(API_HOST + `/api/Tasks/search?${queryString}`);
      let {
        status,
        statusText
      } = response;
      let data = await response.json();
      return {
        status,
        statusText,
        ...data,
        params,
        sks: 1
      };
    }
  }
  _exports.default = SearchRoute;
});
;define("task-manager/routes/view-task", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const API_HOST = 'http://localhost:3000';
  class ViewTaskRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "queryParams", {
        title: {},
        desc: {},
        status: {},
        dueDate: {}
      });
    }
    async model(params) {
      var message = "";
      if (params.title || params.desc || params.status || params.dueDate) {
        let req_body = {
          id: params.task_id
        };
        if (params.title) req_body.title = params.title;
        if (params.desc) req_body.desc = params.desc;
        if (params.status) req_body.status = params.status;
        if (params.dueDate) req_body.dueDate = params.dueDate;
        let response = await fetch(API_HOST + `/api/Tasks/update-by-id`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req_body)
        });
        let {
          status,
          statusText
        } = response;
        if (status === 200) message = "Update success";else message = "Update failed";
      }
      let response = await fetch(API_HOST + `/api/Tasks/get-by-id?id=${params.task_id}`);
      let {
        status,
        statusText
      } = response;
      let data = await response.json();
      if (data.instance && data.instance.dueDate) data.instance.dueDate = new Date(data.instance.dueDate).toISOString().split('T')[0];
      return {
        status,
        statusText,
        ...data,
        message
      };
    }
  }
  _exports.default = ViewTaskRoute;
});
;define("task-manager/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("task-manager/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("task-manager/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{outlet}}
  
  */
  {
    "id": "s8KCtyuz",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "task-manager/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("task-manager/templates/create-new", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @model.error}}
  <p>Error: {{@model.error.message}}</p>
  {{else}}
  <h1>New task</h1>
  
  {{#if @model.message}}
  <p>{{@model.message}}</p>
  {{/if}}
  
  <form action="">
    <p>
      <label for="id_title">Title: </label>
      <input type="text" value="{{@model.params.title}}" name="title" id="id_title" required>
    </p>
    <p>
      <label for="id_desc">Description: </label>
      <input type="text" value="{{@model.params.description}}" name="description" id="id_desc">
    </p>
    <p>
      <label for="id_status">Status: </label>
      <StatusDropdown @default={{@model.params.status}} @required=true/>
    </p>
    <p>
      <label for="id_dueDate">Due date: </label>
      <input type="date" value="{{@model.params.dueDate}}" name="dueDate" id="id_dueDate">
    </p>
  
    <input type="submit" value="Save changes">
  </form>
  {{/if}}
  
  <LinkTo @route="search">Back to home</LinkTo>
  
  */
  {
    "id": "gvRccJ3U",
    "block": "[[[41,[30,1,[\"error\"]],[[[10,2],[12],[1,\"Error: \"],[1,[30,1,[\"error\",\"message\"]]],[13],[1,\"\\n\"]],[]],[[[10,\"h1\"],[12],[1,\"New task\"],[13],[1,\"\\n\\n\"],[41,[30,1,[\"message\"]],[[[10,2],[12],[1,[30,1,[\"message\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,\"form\"],[14,\"action\",\"\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_title\"],[12],[1,\"Title: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"params\",\"title\"]]]]],[14,3,\"title\"],[14,1,\"id_title\"],[14,\"required\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_desc\"],[12],[1,\"Description: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"params\",\"description\"]]]]],[14,3,\"description\"],[14,1,\"id_desc\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_status\"],[12],[1,\"Status: \"],[13],[1,\"\\n    \"],[8,[39,1],null,[[\"@default\",\"@required\"],[[30,1,[\"params\",\"status\"]],\"true\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_dueDate\"],[12],[1,\"Due date: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"params\",\"dueDate\"]]]]],[14,3,\"dueDate\"],[14,1,\"id_dueDate\"],[14,4,\"date\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"input\"],[14,2,\"Save changes\"],[14,4,\"submit\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[8,[39,2],null,[[\"@route\"],[\"search\"]],[[\"default\"],[[[[1,\"Back to home\"]],[]]]]],[1,\"\\n\"]],[\"@model\"],false,[\"if\",\"status-dropdown\",\"link-to\"]]",
    "moduleName": "task-manager/templates/create-new.hbs",
    "isStrictMode": false
  });
});
;define("task-manager/templates/delete-task", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <p>
    Working
    {{@model}}
    {{@model.error}}
    {{@model.response}}
  </p>
  
  */
  {
    "id": "dXlKzA6F",
    "block": "[[[10,2],[12],[1,\"\\n  Working\\n  \"],[1,[30,1]],[1,\"\\n  \"],[1,[30,1,[\"error\"]]],[1,\"\\n  \"],[1,[30,1,[\"response\"]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\"],false,[]]",
    "moduleName": "task-manager/templates/delete-task.hbs",
    "isStrictMode": false
  });
});
;define("task-manager/templates/search", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @model.error}}
  <p>Error: {{@model.error.message}}</p>
  {{else}}
  
  <h1>Search results</h1>
  
  {{#if @model.params.message}}
    <p>{{@model.params.message}}</p>
  {{/if}}
  
  <LinkTo @route="createNew">New Task</LinkTo>
  
  <form>
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>Due Date</th>
      </tr>
      <tr>
        <td><input type="text" name="title" value="{{@model.params.title}}"/></td>
        <td></td>
        <td>
          <StatusDropdown @default={{@model.params.status}} @optional=true/>
        </td>
        <td>
          <input type="date" name="dueDateLower" value="{{@model.params.dueDateLower}}"/> to
          <input type="date" name="dueDateUpper" value="{{@model.params.dueDateUpper}}"/>
        </td>
        <td><input type="submit" value="Search"></td>
      </tr>
      {{#each @model.matches as |instance|}}
        <tr>
          <td>
            <a href="/task/{{instance.id}}">{{instance.title}}</a>
          </td>
          <td>{{instance.description}}</td>
          <td>{{instance.status}}</td>
          <td>{{instance.dueDate}}</td>
        </tr>
      {{/each}}
  
      <tr>
        <td><input type="text" name="new_title"/></td>
        <td><input type="text" name="new_desc"/></td>
        <td>
          <StatusDropdown @name="new_status"/>
        </td>
        <td>
          <input type="date" name="new_dueDate"/>
        </td>
        <td><input type="submit" value="Update"></td>
      </tr>
    </table>
    <button type="submit" formaction="/deleteMany">Delete all</button>
  </form>
  
  {{/if}}
  
  */
  {
    "id": "QDp3JULe",
    "block": "[[[41,[30,1,[\"error\"]],[[[10,2],[12],[1,\"Error: \"],[1,[30,1,[\"error\",\"message\"]]],[13],[1,\"\\n\"]],[]],[[[1,\"\\n\"],[10,\"h1\"],[12],[1,\"Search results\"],[13],[1,\"\\n\\n\"],[41,[30,1,[\"params\",\"message\"]],[[[1,\"  \"],[10,2],[12],[1,[30,1,[\"params\",\"message\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[8,[39,1],null,[[\"@route\"],[\"createNew\"]],[[\"default\"],[[[[1,\"New Task\"]],[]]]]],[1,\"\\n\\n\"],[10,\"form\"],[12],[1,\"\\n  \"],[10,\"table\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Title\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Description\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Status\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Due Date\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[10,\"input\"],[14,3,\"title\"],[15,2,[29,[[30,1,[\"params\",\"title\"]]]]],[14,4,\"text\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,2],null,[[\"@default\",\"@optional\"],[[30,1,[\"params\",\"status\"]],\"true\"]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[10,\"input\"],[14,3,\"dueDateLower\"],[15,2,[29,[[30,1,[\"params\",\"dueDateLower\"]]]]],[14,4,\"date\"],[12],[13],[1,\" to\\n        \"],[10,\"input\"],[14,3,\"dueDateUpper\"],[15,2,[29,[[30,1,[\"params\",\"dueDateUpper\"]]]]],[14,4,\"date\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,\"input\"],[14,2,\"Search\"],[14,4,\"submit\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"matches\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[1,\"\\n          \"],[10,3],[15,6,[29,[\"/task/\",[30,2,[\"id\"]]]]],[12],[1,[30,2,[\"title\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,2,[\"description\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,2,[\"status\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,2,[\"dueDate\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[10,\"input\"],[14,3,\"new_title\"],[14,4,\"text\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,\"input\"],[14,3,\"new_desc\"],[14,4,\"text\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,2],null,[[\"@name\"],[\"new_status\"]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[10,\"input\"],[14,3,\"new_dueDate\"],[14,4,\"date\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,\"input\"],[14,2,\"Update\"],[14,4,\"submit\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"button\"],[14,\"formaction\",\"/deleteMany\"],[14,4,\"submit\"],[12],[1,\"Delete all\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[]]]],[\"@model\",\"instance\"],false,[\"if\",\"link-to\",\"status-dropdown\",\"each\",\"-track-array\"]]",
    "moduleName": "task-manager/templates/search.hbs",
    "isStrictMode": false
  });
});
;define("task-manager/templates/view-task", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @model.error}}
  <p>Error: {{@model.error.message}}</p>
  {{else}}
  <h1>Viewing task {{@model.instance.title}}</h1>
  
  {{#if @model.message}}
  <p>{{@model.message}}</p>
  {{/if}}
  
  <form action="">
    <p>
      <label for="id_title">Title: </label>
      <input type="text" value="{{@model.instance.title}}" name="title" id="id_title" required>
    </p>
    <p>
      <label for="id_desc">Description: </label>
      <input type="text" value="{{@model.instance.description}}" name="desc" id="id_desc">
    </p>
    <p>
      <label for="id_status">Status: </label>
      <StatusDropdown @default={{@model.instance.status}}/>
    </p>
    <p>
      <label for="id_dueDate">Due date: </label>
      <input type="date" value="{{@model.instance.dueDate}}" name="dueDate" id="id_dueDate">
    </p>
  
    <input type="submit" value="Save changes">
  </form>
  <button type="button">
    <LinkTo @route="deleteTask" @model={{@model.instance}}>Delete Task</LinkTo>
  </button><br/>
  {{/if}}
  
  <LinkTo @route="search">Back to home</LinkTo>
  
  */
  {
    "id": "6UpuWrvZ",
    "block": "[[[41,[30,1,[\"error\"]],[[[10,2],[12],[1,\"Error: \"],[1,[30,1,[\"error\",\"message\"]]],[13],[1,\"\\n\"]],[]],[[[10,\"h1\"],[12],[1,\"Viewing task \"],[1,[30,1,[\"instance\",\"title\"]]],[13],[1,\"\\n\\n\"],[41,[30,1,[\"message\"]],[[[10,2],[12],[1,[30,1,[\"message\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,\"form\"],[14,\"action\",\"\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_title\"],[12],[1,\"Title: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"instance\",\"title\"]]]]],[14,3,\"title\"],[14,1,\"id_title\"],[14,\"required\",\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_desc\"],[12],[1,\"Description: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"instance\",\"description\"]]]]],[14,3,\"desc\"],[14,1,\"id_desc\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_status\"],[12],[1,\"Status: \"],[13],[1,\"\\n    \"],[8,[39,1],null,[[\"@default\"],[[30,1,[\"instance\",\"status\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"id_dueDate\"],[12],[1,\"Due date: \"],[13],[1,\"\\n    \"],[10,\"input\"],[15,2,[29,[[30,1,[\"instance\",\"dueDate\"]]]]],[14,3,\"dueDate\"],[14,1,\"id_dueDate\"],[14,4,\"date\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"input\"],[14,2,\"Save changes\"],[14,4,\"submit\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"button\"],[14,4,\"button\"],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"deleteTask\",[30,1,[\"instance\"]]]],[[\"default\"],[[[[1,\"Delete Task\"]],[]]]]],[1,\"\\n\"],[13],[10,\"br\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[8,[39,2],null,[[\"@route\"],[\"search\"]],[[\"default\"],[[[[1,\"Back to home\"]],[]]]]],[1,\"\\n\"]],[\"@model\"],false,[\"if\",\"status-dropdown\",\"link-to\"]]",
    "moduleName": "task-manager/templates/view-task.hbs",
    "isStrictMode": false
  });
});
;define("task-manager/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from 'ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("task-manager/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from 'ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("task-manager/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from 'ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("task-manager/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from 'ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('task-manager/config/environment', [], function() {
  var prefix = 'task-manager';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("task-manager/app")["default"].create({"name":"task-manager","version":"0.0.0+4cc7ae60"});
          }
        
//# sourceMappingURL=task-manager.map
