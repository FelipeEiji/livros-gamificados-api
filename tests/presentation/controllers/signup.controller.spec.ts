import { SignUpController } from '@/presentation/controllers';
import {
    MissingParamError,
    ServerError,
    EmailInUseError,
} from '@/presentation/errors';
import {
    ValidationSpy,
    AddAccountSpy,
    AuthenticationSpy,
} from '@/tests/presentation/mocks';
import { badRequest, serverError, forbidden } from '@/presentation/helpers';

import * as faker from 'faker';

const mockRequest = (): SignUpController.Request => {
    const password = faker.internet.password();
    return {
        firstName: faker.name.findName(),
        lastName: faker.name.findName(),
        email: faker.internet.email(),
        password,
        passwordConfirmation: password,
        subscriptionPlan: faker.random.word(),
    };
};

type SutTypes = {
    sut: SignUpController;
    addAccountSpy: AddAccountSpy;
    validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
    const addAccountSpy = new AddAccountSpy();
    const validationSpy = new ValidationSpy();
    const authenticationSpy = new AuthenticationSpy();
    const sut = new SignUpController(
        addAccountSpy,
        validationSpy,
        authenticationSpy,
    );
    return {
        sut,
        addAccountSpy,
        validationSpy,
    };
};

describe('SignUp Controller', () => {
    test('Should call Validation with correct value', async () => {
        const { sut, validationSpy } = makeSut();
        const request = mockRequest();
        await sut.handle(request);
        expect(validationSpy.input).toEqual(request);
    });

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationSpy } = makeSut();
        validationSpy.error = new MissingParamError(faker.random.word());
        const httpResponse = await sut.handle(mockRequest());
        expect(httpResponse).toEqual(badRequest(validationSpy.error));
    });

    test('Should return 500 if AddAccount throws an error', async () => {
        const { sut, addAccountSpy } = makeSut();
        jest.spyOn(addAccountSpy, 'add').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle(mockRequest());
        expect(httpResponse).toEqual(serverError(new ServerError(null)));
    });

    test('Should call AddAccount with correct values', async () => {
        const { sut, addAccountSpy } = makeSut();
        const request = mockRequest();
        await sut.handle(request);
        expect(addAccountSpy.params).toEqual({
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            password: request.password,
            subscriptionPlan: request.subscriptionPlan,
        });
    });
    test('Should return 403 if AddAccount returns false', async () => {
        const { sut, addAccountSpy } = makeSut();
        addAccountSpy.result = false;
        const httpResponse = await sut.handle(mockRequest());
        expect(httpResponse).toEqual(forbidden(new EmailInUseError()));
    });
});
