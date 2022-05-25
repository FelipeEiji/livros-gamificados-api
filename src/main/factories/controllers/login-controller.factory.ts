import { LoginController } from '@/presentation/controllers';
import { makeDbAuthentication, makeLoginValidation } from '@/main/factories';

export const makeLoginController = (): LoginController => {
    const loginController = new LoginController(
        makeDbAuthentication(),
        makeLoginValidation(),
    );
    return loginController;
};
