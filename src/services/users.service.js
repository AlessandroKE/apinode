const data = require('../data');

const login = function(username, password){
    return getAll().find(user => user.username == username && user.password == password);
}

const getAll = function(){
    return data.Accounts;
}

module.exports = {
    login,
    getAll
};