import { Customer } from '../../imports/collection/customer'

Meteor.methods({
  lookupCustomer(q) {
    if (q == '') {
      return []
    }
    let query = new RegExp(q, 'i')
    return Customer.find({$or: [
        {email: {$regex: q}},
        {name: {$regex: q}}
    ]}, {limit: 10}).fetch()
  }
})
