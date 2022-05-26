import request from 'supertest';
import app from '@/main/config/app';

describe('Middleware NoCache', () => {
    test('Should disable cache', async () => {
        app.get('/test_cache', (req, res) => {
            res.send();
        });
        await request(app)
            .get('/test_cache')
            .expect(
                'cache-control',
                'no-store, no-cache, must-revalidate, proxy-revalidate',
            )
            .expect('pragma', 'co-cache')
            .expect('expires', '0')
            .expect('surrogate-control', '*');
    });
});
