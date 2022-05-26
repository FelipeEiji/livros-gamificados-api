import { LoadAccountByTokenRepository } from '@/data/protocols';
import { UserInfo } from '@/domain/usecases';

export class DbUserInfo implements UserInfo {
    constructor(
        private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository,
    ) {}

    async getUserInfo(
        userInfoParams: UserInfo.Params,
    ): Promise<UserInfo.Result> {
        const account = await this.loadAccountByTokenRepository.loadByToken(
            userInfoParams.accessToken,
        );
        if (account) {
            return account;
        }
        return null;
    }
}
