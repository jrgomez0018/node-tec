'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'desencriptacion-de-token';

exports.createToken = function(user) {
    var payload = {
        sub: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(5, 'days').unix()
    };

    return jwt.encode(payload, secret);
};