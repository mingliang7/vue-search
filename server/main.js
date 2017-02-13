import { Meteor } from 'meteor/meteor'
import { Customer } from '../imports/collection/customer'
Meteor.startup(() => {
  // code to run on server at startup
  if (Customer.find().count() <= 0) {
    for (let i = 0;i < 5000;i++) {
      Customer.insert({
        paragraph: Fake.paragraph([100]),
        email: faker.internet.email(),
        name: faker.name.findName()
      })
    }
  }
})
