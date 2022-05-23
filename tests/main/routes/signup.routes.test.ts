import { MongoHelper } from '@/infra/db';

import { Collection } from 'mongodb';
import request from 'supertest';
import app from '@/main/config/app';

let accountCollection: Collection;

describe('SignUp Routes', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    beforeEach(async () => {
        accountCollection = MongoHelper.getCollection('accounts');
        await accountCollection.deleteMany({});
    });

    test('Should return an account on success', async () => {
        await request(app).post('/api/signup').send({
            name: 'Rodrigo',
            email: 'rodrigo.manguinho@gmail.com',
            password: '123',
            passwordConfirmation: '123',
        });
    });
});
