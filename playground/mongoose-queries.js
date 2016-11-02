const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '581a58a81394148d33d1801011';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '581a4b34946ad5a732493357';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(user);
}).catch((e) => {
  if (!ObjectID.isValid) {
    return console.log('Invalid ID');
  }
  console.log(e);
});
