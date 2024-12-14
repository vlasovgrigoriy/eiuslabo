const obj = {
  name: 'John',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const secondary = {
  name: 'Jane'
};

obj.greet.apply(secondary, ['Hello']);
