"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var staffRegistration_1 = require("../controllers/staffRegistration");
var auth_1 = require("../controllers/auth");
var registerRouter = express_1.default.Router();
var registerStaff = new staffRegistration_1.RegisterStaff();
var auth = new auth_1.Authorization();
function Router() {
    registerRouter.route('/')
        .post(registerStaff.saveUser)
        .get(auth.ifToken, registerStaff.getUser)
        .put(auth.ifToken, registerStaff.updateUser);
    registerRouter.route('/all')
        .get(registerStaff.getAllUsers);
    registerRouter.route('/delete')
        .delete(registerStaff.deleteUser);
    return registerRouter;
}
exports.default = Router();
//# sourceMappingURL=registerStaff.js.map