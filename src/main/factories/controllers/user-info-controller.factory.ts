import { makeDbUserInfo, makeUserInfoValidation } from '@/main/factories';
import { UserInfoController } from '@/presentation/controllers';

export const makeUserInfoController = (): UserInfoController => {
    const userInfoController = new UserInfoController(
        makeDbUserInfo(),
        makeUserInfoValidation(),
    );
    return userInfoController;
};
