export interface LoadAccountByTokenRepository {
    loadByToken: (
        accessToken: string,
    ) => Promise<LoadAccountByTokenRepository.Result>;
}

export namespace LoadAccountByTokenRepository {
    export type Result = {
        id: string;
        firstName: string;
        lastName: string;
        subscriptionPlan: string;
    };
}
