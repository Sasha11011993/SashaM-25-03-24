function User(name, surname, location) {
  // youre awesome code here
  this.name = name;
  this.surname = surname;
  this.location = location;
}

User.prototype.getInfo = function () {
  return {
    name: this.name,
    surname: this.surname,
    location: this.location,
  };
};

const user = new User("Sasha", "Mikhalsky", "Vinnitsya");
console.log(user.getInfo());
