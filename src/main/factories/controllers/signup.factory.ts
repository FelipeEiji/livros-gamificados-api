import { SignUpController } from '@/presentation/controllers';
import { EmailValidation } from '@/validation/validators';
import { EmailValidatorAdapter } from '@/infra/validators/email-validator.adapter';
import { makeDbAddAccount } from '@/main/factories/usecases/add-account.factory';
import { makeSignUpValidation } from '@/main/factories/controllers/signup-validation.factory';

export const makeSignUpController = (): SignUpController => {
    const signUpValidation = makeSignUpValidation();
    const dbAddAccount = makeDbAddAccount();
    const signUpController = new SignUpController(
        dbAddAccount,
        signUpValidation,
    );
    return signUpController;
};
