export interface Options {
    description?: string;
    disabled?: boolean;
}

export type ReturnType = { message: string, code: number }

export function emailMe(subject: string, options?: Options): Promise<ReturnType>;
