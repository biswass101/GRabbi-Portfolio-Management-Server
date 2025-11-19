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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = exports.contactService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const ContactRepository_1 = require("../repositories/ContactRepository");
const ContactService_1 = require("../services/ContactService");
const contactRepo = new ContactRepository_1.ContactRepository();
exports.contactService = new ContactService_1.ContactService(contactRepo);
class ContactController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield exports.contactService.createContact(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Contact created",
                data: contact
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield exports.contactService.getAllContacts();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Contacts retrieved",
                data: contacts
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const contact = yield exports.contactService.getContactById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Contact retrieved",
                data: contact
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield exports.contactService.updateContact(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Contact updated",
                data: contact
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield exports.contactService.deleteContact(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Contact deleted",
                data: contact
            });
        });
    }
}
exports.ContactController = ContactController;
