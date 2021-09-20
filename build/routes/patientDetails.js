"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var patientRouter = express_1.default.Router();
var patientDetails_1 = require("../controllers/patientDetails");
var patient = new patientDetails_1.PatientDetails();
function Router() {
    patientRouter.route('/')
        .post(patient.intializePatient)
        .get(patient.getAllPatients);
    patientRouter.route('/patient')
        .put(patient.populateData)
        .get(patient.getData);
    return patientRouter;
}
exports.default = Router();
//# sourceMappingURL=patientDetails.js.map