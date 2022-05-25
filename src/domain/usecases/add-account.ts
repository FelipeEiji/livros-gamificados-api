export interface AddAccount {
    add: (account: AddAccount.Params) => Promise<AddAccount.Result>;
}

export namespace AddAccount {
    export type Params = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        subscriptionPlan: string;
    };

    export type Result = boolean;
}
