import { SignUpController } from '@/presentation/controllers';
import { makeDbAddAccount } from '@/main/factories/usecases/add-account.factory';
import { makeSignUpValidation, makeDbAuthentication } from '@/main/factories';

export const makeSignUpController = (): SignUpController => {
    const signUpValidation = makeSignUpValidation();
    const dbAddAccount = makeDbAddAccount();
    const dbAuthentication = makeDbAuthentication();
    const signUpController = new SignUpController(
        dbAddAccount,
        signUpValidation,
        dbAuthentication,
    );
    return signUpController;
};
