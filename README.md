# Task Manager app

This task managing project is made with Loopback 3 backend, MongoDB, and EmberJS frontend.

Each task was created with a Loopback model, with data hosted on locally run MongoDB. Each model has:
* `id`: alphanumeric-string auto-generated by mongoDB
* `title`: the name of each task
* `description`
* `status`: strictly one of todo, in-progress, or completed
* `dueDate`: a date object

CRUD functionalities implemented:
* Create new task
* Read info for a specific task
* Read info for many tasks based on filtering criterion
* Update a task by ID
* Mass update many tasks by filtering criterion
* Delete a specific task
* Mass delete many tasks by filtering criterion

# Set-up instructions
## MongoDB
All relevant database files have been added in the mongoDB folder. Simply run the command `mongod --dbpath [path to mongoDB folder] --auth`. This must be run first, for the loopback backend server to run.

## Loopback 3 backend
From the folder `backend`, run `npm start`.

## EmberJS
From the folder `ember_frontend`, run the command `ember serve`.

The site can then be visited at `http://localhost:4200`, the default port ember will host on.

# Possible improvements and future work

Due to the time limit as well as other commitments, there are a number of possible improvements I did not have the opportunity to work on.

## Automated testing

While I have tested all features manually to ensure functionality, it would have been more thorough and fail-safe if I have used automated testing, such as through emberJS tests to automatically repeatedly create, update, and delete tasks to cover all grounds.

## EmberJS code modularity

Firstly, I could have further explored the use of Ember Data and Ember models, in order to smoothen and further modularise the process of querying the loopback API.

## Improved front-end aesthetics

Moreover, due to my lack of experience with developing front-end pages, I did not have the time to better design and improve the CSS aesthetics and the UI of the web-pages. I instead focused on developing a proof-of-concept page to demonstrate how it would work.

Other features I could have spent more time on also include functionalities like colour differentiation to highlight tasks in different colours based on their status as well as how close their due date was (or if they are already overdue).

## Potential security concerns

Lastly, the loopback API can currently be queried by anyone aware of the link to it. Currently, this is a minor issue as the web-app can be accessed without authentication anyway. However, depending on the use case of the web-app, this could be a major vulnerability as any user could directly query it. As such, I could certainly have explored the use of access tokens stored in the Ember framework, so that users can only query the API through the web-app and not directly to the API.
