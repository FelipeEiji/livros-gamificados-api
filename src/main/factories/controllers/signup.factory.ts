import { SignUpController } from '@/presentation/controllers';
import { EmailValidation } from '@/validation/validators';
import { EmailValidatorAdapter } from '@/infra/validators/email-validator.adapter';
import { makeDbAddAccount } from '@/main/factories/usecases/add-account.factory';

export const makeSignUpController = (): SignUpController => {
    const emailValidation = new EmailValidation(
        'email',
        new EmailValidatorAdapter(),
    );
    const dbAddAccount = makeDbAddAccount();
    const signUpController = new SignUpController(
        dbAddAccount,
        emailValidation,
    );
    return signUpController;
};
