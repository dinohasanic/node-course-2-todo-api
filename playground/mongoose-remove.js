const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }, (e) => {
//   console.log(e);
// });

Todo.findByIdAndRemove('581a621c0d47ec343abf0a51').then((todo) => {
  console.log(todo);
});
