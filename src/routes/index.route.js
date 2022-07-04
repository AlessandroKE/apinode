/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright IBM Corporation 2020
*/

const express = require('express');
const cars = require('./cars.route');
const accounts = require('./accounts.route');
const swagger = require('./swagger.route');

const router = express.Router();
router.use('/cars', cars);

const usersController = require('../controllers/usersController');
router.route('/login')
    .post(function(req, res) {
      usersController.login(req, res)
    });

router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;