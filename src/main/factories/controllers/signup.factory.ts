import { SignUpController } from '@/presentation/controllers';
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
