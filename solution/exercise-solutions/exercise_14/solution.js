const user = {
  username: "john_doe",
  password: "secret",
  email: "john@example.com",
};

Object.defineProperty(user, "password", {
  enumerable: false,
});

// Enumerating properties
for (let key in user) {
  console.log(key); // Outputs: username, email
}

// Converting to JSON
console.log(JSON.stringify(user));
// Outputs: {"username":"john_doe","email":"john@example.com"}
