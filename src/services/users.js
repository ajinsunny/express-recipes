require("dotenv").config();
const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const jwt = require("jsonwebtoken");
const path = require("path");

const { JWT_SECRET } = process.env;
const usersFilePath = path.join(__dirname, "../../db/users.json");

// Authenticate the user and return an authorization token for the user.
// Use this function to authenticate a user who's logging in.
const authenticate = async ({ id, email, password }) => {
  const user = await find({ email });
  // Hash the user's password and compare the result with the hash
  // saved in the database to see if the password is correct.
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // Call jwt.sign(), which returns an authentication token.
  // The first argument is an object that contains the data to
  // be embedded in the token. You can pass in a unique identifier for
  // the user, such as the user's id stored in the database.
  // The second argument is a string, which could be any random series
  // of characters used to sign the token to ensure the token has not been tampered with
  // when it is sent back to the server later on.
  // The third argument is a configuration object for the token.
  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, // Expire tokens after a certain amount of time so users can't stay logged in forever
  });

  return { token };
};

// Save the new user to the database and return an authorization token for the user
const create = async ({ email, name, password }) => {
  const users = JSON.parse(await fs.readFile(usersFilePath));

  const newUser = {
    id: users.length + 1, // Not a robust database incrementor; don't use in production
    email,
    name,
    // Here, pass the user's password to bcrypt's hash function to create a hash,
    // which is stored in the database instead of the user's original password.
    // Hashing is a one-way operation, so the hash cannot be reversed to its original form.
    // The first argument is the password to be encrypted, and the second argument
    // is the number of salt rounds. The higher the number of salt rounds used,
    // the stronger the resulting hashed password becomes
    password: await bcrypt.hash(password, 10),
  };

  // Generate the JWT with jwt.sign. The return value is an
  // authentication token
  const token = jwt.sign({ id: newUser.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, // Expire tokens after a certain amount of time so users can't stay logged in forever
  });

  users.push(newUser);

  // save the new user to our database
  await fs.writeFile(usersFilePath, JSON.stringify(users));

  return { token };
};

const find = async ({ id, email }) => {
  const users = JSON.parse(await fs.readFile(usersFilePath));
  return users.find((user) => user.id === parseInt(id) || user.email === email);
};

module.exports = {
  authenticate,
  create,
  find,
};
