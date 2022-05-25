import { AddAccount, Authentication } from '@/domain/usecases';

import faker from 'faker';

export const mockAddAccountParams = (): AddAccount.Params => ({
    firstName: faker.name.findName(),
    lastName: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    subscriptionPlan: faker.random.word(),
});

export const mockAuthenticationParams = (): Authentication.Params => ({
    email: faker.internet.email(),
    password: faker.internet.password(),
});
