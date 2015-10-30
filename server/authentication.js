var bcrypt = require('bcrypt');
var userStorage = {

};

module.exports ={
  signIn: function(req, res){
    console.log(req.query)
    //The resquest quest has the username and password
    //user bcrypt to compare the passwword to the hashed version
    var hashedPassword = userStorage[req.query.username];

    //check to see an account has been created for this username
    if(hashedPassword === undefined){
      //alert that no account has been created and prompt for sign up
      res.send('No account seems to exist for this user.');
      return;
    }
    bcrypt.compare(req.query.password, hashedPassword, function(err, response){
      if(response === true){
        //redirect them to their userpage
        console.log('login information is correct')
        res.send('You are signed in');
        return;
      }
      res.send('Either the Username or Password is inaccurate')

    })

    //if they do take them directly to their user page
    //if not alert that the username and password is not correct
      //alert that they can sign up, if they do not have an account

  },
  signUp: function(req, res){
    console.log('in signup', req.query)
    //The resquest has the username and password
    //user bcrypt to hash the password
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(req.query.password, salt, function(err, hash){
      //store the username and cryptified password in the userstorage
      //we want to check to see if they do not already have an account
        if(!userStorage[req.query.username]){
          userStorage[req.query.username] = hash;
          res.send('Account Created');
          return;
        }

      //alert that an account has already been created for this username
      res.send('An account has already been created for this username');
      })
    });
  }
}
