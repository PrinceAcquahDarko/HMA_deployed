"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var patientModel = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    contact: { type: Number, required: true },
    address: { type: String, required: true },
    key: { type: String, required: true }
});
module.exports = mongoose_1.default.model('Patient', patientModel);
//# sourceMappingURL=patientmodel.js.map