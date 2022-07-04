const usersService = require('../services/users.service');

const login = function(req, res){
    res.json({requestBody: req.body})
    //res.send(usersService.login(req.params))
}

const getAll = function(req, res){
    res.send(carsService.getAll())
}

module.exports = {
    login,
    getAll
};