import { Controller, HttpResponse, Validation } from '@/presentation/protocols';
import { badRequest, serverError, ok } from '@/presentation/helpers';

export class SignUpController implements Controller {
    constructor(private readonly validation: Validation) {}

    async handle(request: SignUpController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            return ok({});
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace SignUpController {
    export type Request = {
        name: string;
        email: string;
        password: string;
        passwordConfirmation: string;
    };
}
