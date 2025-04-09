import { Res } from "../interfaces";

export abstract class RESPONSE<T = any> {
    message: string;
    metadata?: T | undefined;

    constructor({ message, metadata }: Res.IBaseResponse<T>) {
        this.message = message;
        this.metadata = metadata;
    }
}


