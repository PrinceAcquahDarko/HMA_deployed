"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
var Authorization = /** @class */ (function () {
    function Authorization() {
        this.secret = process.env.SECRETE_KEY;
        this.ifToken = this.ifToken.bind(this);
    }
    Authorization.prototype.ifToken = function (req, res, next) {
        if (!req.header('Authorization'))
            return res.status(200).json({ "message": 'done' });
        var token = req.header('Authorization').split(' ')[1];
        jsonwebtoken_1.default.verify(token, this.secret, (function (err, decoded) {
            if (decoded) {
                req.query.id = decoded.id;
            }
        }));
        next();
    };
    return Authorization;
}());
exports.Authorization = Authorization;
//# sourceMappingURL=auth.js.map