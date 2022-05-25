import { MongoHelper } from '@/infra/db';
import {
    AddAccountRepository,
    CheckAccountByEmailRepository,
    LoadAccountByEmailRepository,
    UpdateAccessTokenRepository,
} from '@/data/protocols/db';

export class AccountMongoRepository
    implements
        AddAccountRepository,
        CheckAccountByEmailRepository,
        LoadAccountByEmailRepository,
        UpdateAccessTokenRepository
{
    async add(
        data: AddAccountRepository.Params,
    ): Promise<AddAccountRepository.Result> {
        const accountCollection = MongoHelper.getCollection('accounts');
        const result = await accountCollection.insertOne(data);
        return result.insertedId !== null;
    }

    async checkByEmail(
        email: string,
    ): Promise<CheckAccountByEmailRepository.Result> {
        const accountCollection = MongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne(
            {
                email,
            },
            {
                projection: {
                    _id: 1,
                },
            },
        );
        return account !== null;
    }

    async loadByEmail(
        email: string,
    ): Promise<LoadAccountByEmailRepository.Result> {
        const accountCollection = MongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne(
            {
                email,
            },
            {
                projection: {
                    _id: 1,
                    name: 1,
                    password: 1,
                },
            },
        );
        return account && MongoHelper.map(account);
    }

    async updateAccessToken(id: string, token: string): Promise<void> {
        const accountCollection = MongoHelper.getCollection('accounts');
        await accountCollection.updateOne(
            {
                _id: MongoHelper.convertStringIdToObjectId(id),
            },
            {
                $set: {
                    accessToken: token,
                },
            },
        );
    }
}
