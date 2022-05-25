import { UserInfo } from '@/domain/usecases';
import { ok, serverError, unauthorized } from '@/presentation/helpers';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class UserInfoController implements Controller {
    constructor(private readonly userInfo: UserInfo) {}

    async handle(request: UserInfoController.Request): Promise<HttpResponse> {
        try {
            const userInfoModel = await this.userInfo.getUserInfo(request);
            if (!userInfoModel) {
                return unauthorized();
            }
            return ok(userInfoModel);
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace UserInfoController {
    export type Request = {
        accessToken: string;
    };
}
