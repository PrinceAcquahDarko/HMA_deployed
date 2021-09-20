"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterStaff = void 0;
var staffRegitstration_1 = require("../validations/staffRegitstration");
var Register = require('../model/model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
var RegisterStaff = /** @class */ (function () {
    function RegisterStaff() {
        this._data = {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            position: ''
        };
        this.secret = process.env.SECRETE_KEY;
        this.saveUser = this.saveUser.bind(this);
    }
    Object.defineProperty(RegisterStaff.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data.email = data.email;
            this._data.firstname = data.firstname,
                this._data.lastname = data.lastname,
                this._data.position = data.position,
                this._data.password = data.passwordGroup.password;
        },
        enumerable: false,
        configurable: true
    });
    RegisterStaff.prototype.saveUser = function (req, res) {
        this.data = req.body;
        var user = new staffRegitstration_1.StaffRegistration(this.data);
        if (user.allValid()) {
            this.implementSave(req.body, res);
        }
        else {
            return res.status(400).send({ message: "Ops sorry please try again" });
        }
    };
    RegisterStaff.prototype.implementSave = function (data, res) {
        var _this = this;
        data.password = bcrypt.hashSync(this.data.password, 8);
        var user = new Register(data);
        user.save(function (err, User) {
            if (err)
                return res.status(400).send({ message: "Ops sorry please try again" });
            var token = jwt.sign({ id: User._id }, _this.secret);
            var fullname = user.firstname + ' ' + user.lastname;
            return res.status(200).send({ message: 'registered successfully', token: token, auth: true, position: user.position, fullname: fullname });
        });
    };
    RegisterStaff.prototype.getUser = function (req, res) {
        Register.find({ _id: req.query.id }, function (err, user) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            if (!user)
                return res.status(200).json({ "message": "not authorized" });
            return res.status(200).send({ message: "user found", user: user });
        });
    };
    RegisterStaff.prototype.getAllUsers = function (req, res) {
        Register.find(function (err, users) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).send({ message: "user found", users: users });
        });
    };
    RegisterStaff.prototype.updateUser = function (req, res) {
        Register.findOne({ _id: req.query.id }, function (err, user) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            if (!user)
                return res.status(200).json({ "message": "not authorized" });
            user.firstname = req.body.firstname,
                user.lastname = req.body.lastname,
                user.email = req.body.email,
                user.position = req.body.position,
                user.password = bcrypt.hashSync(req.body.passwordGroup.password, 8);
            user.save(function (err, updated) {
                if (err)
                    return res.status(400).json({ "message": "Ops sorry please try again" });
                //
                return res.status(200).send({ message: 'updated successfully' });
            });
        });
    };
    RegisterStaff.prototype.deleteUser = function (req, res) {
        Register.findByIdAndDelete({ _id: req.query.id }, function (err) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).json({ "done": "successfully deleted" });
        });
    };
    return RegisterStaff;
}());
exports.RegisterStaff = RegisterStaff;
//# sourceMappingURL=staffRegistration.js.map