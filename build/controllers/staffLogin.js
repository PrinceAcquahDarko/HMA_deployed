"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffLogin = void 0;
var register = require('../model/model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
var StaffLogin = /** @class */ (function () {
    function StaffLogin() {
        this.data = {
            email: '',
            password: '',
        };
        this.secret = process.env.SECRETE_KEY;
        this.loginUser = this.loginUser.bind(this);
    }
    StaffLogin.prototype.loginUser = function (req, res) {
        var _this = this;
        this.data = req.body;
        register.findOne({ email: this.data.email }, function (err, user) {
            if (err)
                return res.status(400).send({ message: "Ops sorry please try again" });
            if (!user)
                return res.status(200).send({ message: "no such user in our database" });
            bcrypt.compare(_this.data.password, user.password, function (err, isMatch) {
                if (!isMatch)
                    return res.status(200).send({ message: "passwords don't much" });
                var token = jwt.sign({ id: user._id }, _this.secret);
                var fullname = user.firstname + ' ' + user.lastname;
                res.status(200).send({ auth: true, message: "successful", token: token, position: user.position, fullname: fullname });
            });
        });
    };
    return StaffLogin;
}());
exports.StaffLogin = StaffLogin;
//# sourceMappingURL=staffLogin.js.map