export interface LoadAccountByEmailRepository {
    loadByEmail: (
        email: string,
    ) => Promise<LoadAccountByEmailRepository.Result>;
}

export namespace LoadAccountByEmailRepository {
    export type Result = {
        id: string;
        firstName: string;
        lastName: string;
        password: string;
        subscriptionPlan: string;
    };
}
