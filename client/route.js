import Customer from '/imports/ui/Customer.vue';
import NotFound from '/imports/ui/NotFound.vue';
import ViewCustomer from '/imports/components/ViewCustomer.vue';
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Customer
  },
  {
    path: '/customer/:customerId/show',
    name: 'viewCustomer',
    component: ViewCustomer
  },
  {
    path: '*',
    component: NotFound
  }
]
