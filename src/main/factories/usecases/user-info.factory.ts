import { DbUserInfo } from '@/data/usecases';
import { UserInfo } from '@/domain/usecases';
import { AccountMongoRepository } from '@/infra/db';

export const makeDbUserInfo = (): UserInfo => {
    const accountMongoRepository = new AccountMongoRepository();
    return new DbUserInfo(accountMongoRepository);
};
