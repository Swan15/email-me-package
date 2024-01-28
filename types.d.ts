export interface Options {
    description?: string;
    disabled?: boolean;
    noEmail?: boolean;
}

export type Return = Promise<[string, number]>

export function emailMe(subject: string, options?: Options): ReturnType;
