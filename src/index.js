const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { v4: uuidV4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(`dev`))
const users = [];

function checksExistsUserAccount(request, response, next) {
  let { username } = request.headers
  
  user = users.find(
    user => user.username === username)

  if( user ){
    username = user.username
  }else{
      return response.status(404).json({
        error: 'User not found'
      })
  }

  return next()
}

app.post('/users', (request, response) => {
  const { name, username } = request.body

  const user = users.find(user => user.username === username)
  
  if(user) {
    response.status(400).json({error: `Username already exists`})
  }

  const newUser = {
    name,
    username,
    todos: [],
    id: uuidV4(),
  }
  users.push(newUser)
  const userIndex = users.findIndex(function (user) {
    return user.id === newUser.id;
});

  return response.status(201).json(users[userIndex])
});

app.get('/todos', checksExistsUserAccount, (request, response) => {

  return response.json(user.todos)

});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body

  const newTodo = { 
    id: uuidV4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  }
  user.todos.push(newTodo)
  return response.status(201).json(newTodo)
});

app.put(
  `/todos/:id`
  , checksExistsUserAccount, (request, response) => {

  const { id } = request.params 
  const { username } = request.headers
  const { title, deadline } = request.body

  const userTodo = users.find(user => user.username === username)
  const task = userTodo.todos.find(task => task.id === id)

  if(!task) {
    return response.status(404).json({error: 'Not found'})
  }
  task.title = title
  task.deadline = deadline

  return response.json(task)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id } = request.params 
  const { username } = request.headers

  const userTodo = users.find(user => user.username === username)
  const task = userTodo.todos.find(task => task.id === id)
  if(!task) {
    return response.status(404).json({error: 'Not found'})
  }
  task.done = true
  return response.json(task)
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params 
  const { username } = request.headers

  const task = user.todos.find(task => task.id === id)

  if(!task) {
    return response.status(404).json({error: 'Not found'})
  }
const indexDelete = user.todos.indexOf(function (todo) {
  return todo.id === id;
});
console.log(user.todos)
user.todos.splice(indexDelete, 1)
console.log(user.todos)

return response.status(204).json({message: 'Successfully deleted'})
});

module.exports = app;