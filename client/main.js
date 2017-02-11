import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import 'lodash';
import AppUI from '/imports/ui/App.vue';
Meteor.startup(()=>{
  new Vue({
    render: h => h(AppUI)
  }).$mount('app');
});