// import User model
const { User } = require('../models');
// import signtoken software
const { signToken } = require('../utils/auth');
// import Authentication from Apollo
const { AuthenticationError } = require('apollo-server-express');

// define resolvers
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id } || {username: context.user.username}).populate('savedBooks');
      }
      throw new AuthenticationError('Please log in.')
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email, password });
      if (!user) {
        throw new AuthenticationError('No user found with these credentials');
      }
      const pwValid = await 
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { email, password }) => {

    },
    removeBook: async (parent, { bookId }) => {

    },
  },
};

// export resolvers
module.exports = resolvers;