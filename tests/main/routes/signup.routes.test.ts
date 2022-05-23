import request from 'supertest';
import app from '@/main/config/app';

describe('SignUp Routes', () => {
    test('Should return an account on success', async () => {
        await request(app).post('/api/signup').send({
            name: 'Rodrigo',
            email: 'rodrigo.manguinho@gmail.com',
            password: '123',
            passwordConfirmation: '123',
        });
    });
});
