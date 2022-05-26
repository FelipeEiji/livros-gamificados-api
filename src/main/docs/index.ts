import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
    openapi: '3.0.0',
    info: {
        title: 'Livros Gamificados API',
        description: 'API para a aplicação Livros Gamificados',
        version: '1.0.0',
    },
    servers: [
        {
            url: '/api',
        },
    ],
    tags: [
        {
            name: 'Auth',
        },
    ],
    paths,
    schemas,
    components,
};
