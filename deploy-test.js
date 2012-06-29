if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to deploy-test.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    console.log('deploy-test has started! yay!');
  });
}