import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import 'lodash';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './route';
// import layout 
import AppLayout from '/imports/ui/AppLayout.vue';
let router = new VueRouter({
  routes
})
Meteor.startup(()=>{
  new Vue({
    router,
    render: h => h(AppLayout)
  }).$mount('app');
});