const express = require('express');
const router = express.Router();

// Backend Modules
const accountCreate = require('../backend_modules/account_create');
const twoFactorAuth = require('../backend_modules/2fauth');
const authenticate = require('../backend_modules/authenticate');
const forgotPass = require('../backend_modules/forgot_pass');
const accountDelete = require('../backend_modules/account_delete');

// Login
app.post("/login", async function(request, response) 
{
  const { username, password } = request.body;
  try 
  {
    const loginResult = await authenticate.login(username, password);

    if (loginResult.returncode === 0) 
    {
      response.status(200).send({'returncode': 0, 'message': 'Authentication Verified', 'output': []});
    }
    else 
    {
      response.status(401).send({'returncode': 1, 'message': 'Account not Found', 'output': []});
    }
  }

  catch (error)
  {
    response.status(500).send({'returncode': 1, 'message': 'Temporary Server Down, Please try again after some time', 'output': []});
  }
});

module.exports = router;
