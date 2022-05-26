import { LoadAccountByIdRepository } from '@/data/protocols';
import { UserInfo } from '@/domain/usecases';

export class DbUserInfo implements UserInfo {
    constructor(
        private readonly LoadAccountByIdRepository: LoadAccountByIdRepository,
    ) {}

    async getUserInfo(
        userInfoParams: UserInfo.Params,
    ): Promise<UserInfo.Result> {
        const account = await this.LoadAccountByIdRepository.loadById(
            userInfoParams.id
        );
        if (account) {
            return account;
        }
        return null;
    }
}
