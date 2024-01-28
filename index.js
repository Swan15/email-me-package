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
exports.emailMe = void 0;
/**
 * Sends a request to the Email Me API to send an email.
 * @param subject - The subject of the email.
 * @param options - Optional parameters for the email request.
 * @returns A Promise that resolves to an array containing the response text and status code.
 * @throws An error if the EMAIL_ME_API_KEY environment variable is not set.
 */
function emailMe(subject, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = process.env.EMAIL_ME_API_KEY || '';
        if (!key)
            throw new Error('EMAIL_ME_API_KEY not set');
        const response = yield fetch('https://emailme.lol/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({ subject, key }, options)),
        });
        return [yield response.text(), response.status];
    });
}
exports.emailMe = emailMe;
