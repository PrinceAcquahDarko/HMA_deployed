"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var staffLogin_1 = require("../controllers/staffLogin");
var express_1 = __importDefault(require("express"));
var loginRouter = express_1.default.Router();
var staffLogin = new staffLogin_1.StaffLogin();
function Router() {
    loginRouter.route('/')
        .post(staffLogin.loginUser);
    return loginRouter;
}
exports.default = Router();
//# sourceMappingURL=staffLogin.js.map