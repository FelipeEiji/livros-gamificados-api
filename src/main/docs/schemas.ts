import {
    accountSchema,
    loginParamsSchema,
    errorSchema,
    signUpParamsSchema,
} from './schemas/';

export default {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    signUpParams: signUpParamsSchema,
};
