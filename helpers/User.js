'use strict';

module.exports = function() {
    return {
        SignUpValidation: (req, res, next) => {
            req.checkBody('username', 'Username is required').notEmpty();
            req.checkBody('username', 'Username must not be less than 5').isLength({ min: 5 });
            req.checkBody('email', 'Email is required').notEmpty();
            req.checkBody('email', 'Email is invalid').isEmail();
            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('password', 'Password must not be less than 5').isLength({min: 5});
        }
    }
}