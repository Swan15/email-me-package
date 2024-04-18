import { ReturnType } from "./types";

/**
 * Sends a request to the Email Me API to send an email.
 * @param subject - The subject of the email.
 * @param description - The body text of the email.
 * @returns A Promise that resolves to an array containing the response text and status code.
 * @throws An error if the EMAIL_ME_API_KEY environment variable is not set.
 */
export async function emailMe(subject: string, description: string): Promise<ReturnType> {
    const key = process.env.EMAIL_ME_API_KEY || '';
    if (!key) throw new Error('EMAIL_ME_API_KEY not set');

    const body = {
        subject,
        key,
        description
    };
    const response = await fetch('https://www.emailme.lol/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    return {message: await response.text(), code: response.status}
}
