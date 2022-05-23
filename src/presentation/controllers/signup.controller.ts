import { Controller, HttpResponse, Validation } from '@/presentation/protocols';
import { AddAccount } from '@/domain/usecases';
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers';
import { EmailInUseError } from '../errors';

export class SignUpController implements Controller {
    constructor(
        private readonly addAccount: AddAccount,
        private readonly validation: Validation,
    ) {}

    async handle(request: SignUpController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            const { name, email, password } = request;
            const isValid = await this.addAccount.add({
                name,
                email,
                password,
            });
            if (!isValid) {
                return forbidden(new EmailInUseError());
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