import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/express-route.adapter';
import { makeUserInfoController } from '@/main/factories/controllers/user-info-controller.factory';

export default (router: Router): void => {
    router.get('/user-info/:id', adaptRoute(makeUserInfoController()));
};