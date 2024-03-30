const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
          // Regular expression for email validation
          return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  githubusername: {
    type: String,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Example: Minimum password length
        validate: {
            validator: function(v) {
                // Example: You can add custom password validation logic here
                return /[A-Za-z\d@$!%*?&]/.test(v); // Example: Password contains at least one letter, one number, and one special character
            }
        }
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
