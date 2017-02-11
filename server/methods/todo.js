import {Meteor} from 'meteor/meteor';
import {Todo} from '../../imports/collection/todo';

Meteor.methods({
    insertTodo(todo){
        return Todo.insert(todo);
    }
});