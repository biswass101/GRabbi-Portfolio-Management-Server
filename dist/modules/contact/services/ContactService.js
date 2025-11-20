"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
class ContactService {
    constructor(contactRepo) {
        this.contactRepo = contactRepo;
    }
    createContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactRepo.create(contact);
        });
    }
    getAllContacts(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.userId)
                return yield this.contactRepo.findAllByUserId(query.userId);
            return yield this.contactRepo.findAll();
        });
    }
    getContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactRepo.findById(id);
        });
    }
    updateContact(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactRepo.update(id, data);
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contactRepo.delete(id);
        });
    }
}
exports.ContactService = ContactService;
