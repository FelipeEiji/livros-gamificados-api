import { Controller, HttpResponse, Validation } from '@/presentation/protocols';
import { AddAccount, Authentication } from '@/domain/usecases';
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers';
import { EmailInUseError } from '@/presentation/errors';

export class SignUpController implements Controller {
    constructor(
        private readonly addAccount: AddAccount,
        private readonly validation: Validation,
        private readonly authentication: Authentication,
    ) {}

    async handle(request: SignUpController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            const { firstName, lastName, email, password, subscriptionPlan } =
                request;
            const isValid = await this.addAccount.add({
                firstName,
                lastName,
                email,
                password,
                subscriptionPlan,
            });
            if (!isValid) {
                return forbidden(new EmailInUseError());
            }
            const authenticationModel = await this.authentication.auth({
                email,
                password,
            });
            return ok(authenticationModel);
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace SignUpController {
    export type Request = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        passwordConfirmation: string;
        subscriptionPlan: string;
    };
}
