"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientDetails = void 0;
var Patientdetials = require('../model/patientDetails');
var PatientDetails = /** @class */ (function () {
    function PatientDetails() {
    }
    PatientDetails.prototype.intializePatient = function (req, res) {
        req.body.done = false;
        var details = new Patientdetials(req.body);
        details.save(function (err, data) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).send({ message: 'done' });
        });
    };
    PatientDetails.prototype.populateData = function (req, res) {
        var filter = { key: req.query.key, done: false };
        var update = req.body;
        console.log(update);
        Patientdetials.findOneAndUpdate(filter, update, {
            new: true
        }, function (err, data) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            console.log(data);
            return res.status(200).send({ message: 'data saved successfully' });
        });
    };
    PatientDetails.prototype.getData = function (req, res) {
        Patientdetials.findOne({ key: req.query.key, done: false }, function (err, user) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            if (!user)
                return res.status(200).send({ message: 'no such user with that key' });
            return res.status(200).send({ user: user, message: 'user found' });
        });
    };
    PatientDetails.prototype.getAllPatients = function (req, res) {
        Patientdetials.find(function (err, users) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).send({ users: users, message: 'succesfull' });
        });
    };
    return PatientDetails;
}());
exports.PatientDetails = PatientDetails;
//# sourceMappingURL=patientDetails.js.map