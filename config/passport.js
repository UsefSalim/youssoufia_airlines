const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

// Load User model
const Client = require('../models/client');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (aemail, password, done) => {
        // if user exist
        try {
          const ifExist = await Client.findOne({ where: { email: aemail } });
          // Match password
          const validPassword = await bcrypt.compare(
            password,
            ifExist.password
          );
          if (!validPassword || !ifExist) {
            return done(null, false, {
              message: 'Mail Or password incorrect',
            });
          }
          if (ifExist) {
            return done(null, ifExist);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser((client, done) => {
    done(null, client.id);
  });

  passport.deserializeUser((id, done) => {
    // console.log('DeSerialize');
    Client.findOne({ where: { id } }).then((users) => {
      console.log(users);
      return done(null, users);
    });
  });
};
