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
exports.CreateSkillCategoryDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateSkillCategoryDTO {
}
exports.CreateSkillCategoryDTO = CreateSkillCategoryDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "userId is required" }),
    __metadata("design:type", String)
], CreateSkillCategoryDTO.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Icon is required" }),
    __metadata("design:type", String)
], CreateSkillCategoryDTO.prototype, "icon", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Title is required" }),
    __metadata("design:type", String)
], CreateSkillCategoryDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Skills must be an array" }),
    (0, class_validator_1.ArrayMinSize)(1, { message: "At least one skill is required" }),
    __metadata("design:type", Array)
], CreateSkillCategoryDTO.prototype, "skills", void 0);
