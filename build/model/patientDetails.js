"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var patientDetailsModel = new Schema({
    getDrugs: { type: String },
    postDrugs: { type: String },
    postLab: { type: String },
    getLab: { type: String },
    symptoms: { type: String },
    illness: { type: String },
    temperature: { type: String },
    weight: { type: String },
    height: { type: String },
    bloodLevel: { type: String },
    key: { type: String, required: true },
    nhis: { type: Boolean },
    done: { type: Boolean },
    pharmAmount: { type: Number },
    labAmount: { type: Number },
    amounPaid: { type: Number },
    paid: { type: Boolean }
});
module.exports = mongoose_1.default.model('PatientDetails', patientDetailsModel);
//# sourceMappingURL=patientDetails.js.map