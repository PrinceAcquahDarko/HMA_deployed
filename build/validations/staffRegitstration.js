"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRegistration = void 0;
var StaffRegistration = /** @class */ (function () {
    function StaffRegistration(data) {
        this.data = data;
    }
    StaffRegistration.prototype.validFirstname = function () {
        return !!this.data.firstname;
    };
    StaffRegistration.prototype.validLastname = function () {
        return !!this.data.lastname;
    };
    StaffRegistration.prototype.validEmail = function () {
        //also check if email contains index of @
        return !!this.data.email;
    };
    StaffRegistration.prototype.validPassword = function () {
        return !!this.data.password;
    };
    StaffRegistration.prototype.validPostion = function () {
        console.log(this.validPassword(), 'from valid password');
        return !!this.data.position;
    };
    StaffRegistration.prototype.allValid = function () {
        return !!this.validEmail() && !!this.validPassword() &&
            !!this.validFirstname() && !!this.validLastname() && !!this.validPostion();
    };
    return StaffRegistration;
}());
exports.StaffRegistration = StaffRegistration;
//# sourceMappingURL=staffRegitstration.js.map