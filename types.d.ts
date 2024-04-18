export type ReturnType = { message: string, code: number }

export function emailMe(subject: string, description: string): Promise<ReturnType>;
