class User {
  #id;
  #name;
  address;
  phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isBusiness;

  constructor(user, users = []) {
    const { name, address, phone } = user;
    const { first, last } = name;
    const { state, country, city, street, houseNumber, zip } = address;

    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zip = zip;

    this.#name = first + " " + last;
    this.#isAdmin = false;
    this.#isBusiness = false;
    this.#createdAt = new Date();
  }

  get _id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  set name({ first, last }) {
    this.#name = first + " " + last;
  }
  get email() {
    return this.email;
  }
  get password() {
    return this.password;
  }
  set password(password) {
    this.password = password;
  }
  get createdAt() {
    return this.createdAt;
  }
  get isAdmin() {
    return this.isAdmin;
  }
  get isBusiness() {
    return this.isBusiness;
  }
}

const zeShem = {
  name: {
    first: "sagi",
    last: "morali",
  },
  address: {
    state: "ma",
    country: "ze",
    city: "meshane",
    street: "bihlal",
    houseNumber: 523467,
    zip: "15632",
  },
  phone: "0505437121",
};

const user = new User(zeShem);
