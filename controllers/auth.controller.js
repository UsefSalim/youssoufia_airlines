const bcrypt = require('bcrypt');
const passport = require('passport');

const Client = require('../models/client');
const { RegisterValidations } = require('../validations/auth.validations');

/* ! @Route  : GET => /register
     Desc    : render the register page 
     @Access : Pubic
*/
exports.getRegister = (req, res) => {
  res.render('register', { data: req.doby, err: '' });
};

/* ! @Route  : POST => /register
     Desc    : render the register page 
     @Access : Pubic
*/

exports.postRegister = async (req, res) => {
  const ifMail = await Client.findOne({ where: { email: req.body.email } });
  if (ifMail) {
    res.render('register', {
      err: 'adress mail deja existante veiller vous connecter',
      data: req.body,
    });
  }
  const { error } = RegisterValidations(req.body);
  error && res.render('register', { err: error, data: req.body });
  const registerClient = new Client({
    ...req.body,
  });
  const salt = await bcrypt.genSalt(10);
  const hashdPassword = await bcrypt.hash(req.body.password, salt);
  registerClient.password = hashdPassword;
  try {
    if (!ifMail && !error) {
      const addClient = await registerClient.save();
      req.flash('success_msg', 'You are now registered and can log in');
      addClient && res.redirect('login');
    }
  } catch (err) {
    res.render('404');
  }
};

/* ! @Route  : GET => /register
     Desc    : render the register page 
     @Access : Pubic
*/
exports.getLogin = (req, res) => {
  res.render('login');
};

/* ! @Route  : POST => /register
     Desc    : render the register page 
     @Access : Pubic
*/

exports.postLogin = async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/offers',
    failureRedirect: '/login',
    failureFlash: true,
  })(req, res, next);
};

// Logout
exports.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
};
