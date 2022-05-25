import { makeDbUserInfo } from '@/main/factories';
import { UserInfoController } from '@/presentation/controllers';

export const makeUserInfoController = (): UserInfoController => {
    const userInfoController = new UserInfoController(makeDbUserInfo());
    return userInfoController;
};
