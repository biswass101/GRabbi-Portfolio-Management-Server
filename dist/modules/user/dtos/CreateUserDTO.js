"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = exports.UserRole = void 0;
const class_validator_1 = require("class-validator");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email must be valid" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Password must be at least 6 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Password is required" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(UserRole, {
        message: "Role must be admin",
    }),
    (0, class_validator_1.IsOptional)({ message: "Image must be in string" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "img", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: "Summary must be in string" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "summary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Role is required" }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "role", void 0);
