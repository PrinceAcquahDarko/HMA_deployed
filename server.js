"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var staffLogin_1 = __importDefault(require("./build/routes/staffLogin"));
var registerStaff_1 = __importDefault(require("./build/routes/registerStaff"));
var registerPatient_1 = __importDefault(require("./build/routes/registerPatient"));
var patientDetails_1 = __importDefault(require("./build/routes/patientDetails"));
require('dotenv').config();
var app = express_1.default();
var url = process.env.URL;
var port = process.env.PORT || 3000;
var db = mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
db.then(function (data) { return console.log('we connected'); })
    .catch(function (err) { return console.log('could not connect to database'); });
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/register', registerStaff_1.default);
app.use('/login', staffLogin_1.default);
app.use('/patient', registerPatient_1.default);
app.use('/details', patientDetails_1.default);
app.listen(port, function () { return console.log('we working'); });
//# sourceMappingURL=server.js.map