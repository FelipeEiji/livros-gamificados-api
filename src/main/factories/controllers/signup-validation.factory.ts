import {
    ValidationComposite,
    RequiredFieldValidation,
    CompareFieldsValidation,
    EmailValidation,
} from '@/validation/validators';
import { Validation } from '@/presentation/protocols';
import { EmailValidatorAdapter } from '@/infra/validators';

export const makeSignUpValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of [
        'firstName',
        'lastName',
        'email',
        'password',
        'passwordConfirmation',
        'subscriptionPlan',
    ]) {
        validations.push(new RequiredFieldValidation(field));
    }
    validations.push(
        new CompareFieldsValidation('password', 'passwordConfirmation'),
    );
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
    return new ValidationComposite(validations);
};
