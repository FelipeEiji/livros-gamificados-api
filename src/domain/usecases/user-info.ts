export interface UserInfo {
    getUserInfo: (
        userInfoParams: UserInfo.Params,
    ) => Promise<UserInfo.Result>;
}

export namespace UserInfo {
    export type Params = {
        accessToken: string;
    };

    export type Result = {
        id: string;
        firstName: string;
        lastName: string;
        subscriptionPlan: string;
    };
}
