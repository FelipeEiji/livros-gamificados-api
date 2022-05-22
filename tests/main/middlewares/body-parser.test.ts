import request from 'supertest';
import app from '@/main/config/app';

describe('Middleware Body Parser', () => {
    test('Should parse body as JSON', async () => {
        app.post('/test_body_parser', (req, res) => {
            res.send(req.body);
        });
        await request(app)
            .post('/test_body_parser')
            .send({ name: 'Felipe' })
            .expect({ name: 'Felipe' });
    });
});
