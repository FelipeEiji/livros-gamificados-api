export const signUpParamsSchema = {
    type: 'object',
    properties: {
        firsName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        passwordConfirmation: {
            type: 'string',
        },
        subscriptionPlan: {
            type: 'string',
        },
    },
    required: [
        'firstName',
        'lastName',
        'email',
        'password',
        'passwordConfirmation',
        'subscriptionPlan',
    ],
};
