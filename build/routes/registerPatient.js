"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var registerRouter = express_1.default.Router();
var patientRegistration_1 = require("../controllers/patientRegistration");
var auth_1 = require("../controllers/auth");
var patient = new patientRegistration_1.PatientRegistration();
var auth = new auth_1.Authorization();
function Router() {
    registerRouter.route('/')
        .post(auth.ifToken, patient.savePatient)
        .get(patient.getAllPatients);
    registerRouter.route('/single')
        .get(patient.getPatientById)
        .delete(patient.deleteUser);
    return registerRouter;
}
exports.default = Router();
//# sourceMappingURL=registerPatient.js.map