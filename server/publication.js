import {Todo} from '../imports/collection/todo';
Meteor.publish('todos', function pubTodos(){
    Meteor._sleepForMs(1000);
    return Todo.find({});
});