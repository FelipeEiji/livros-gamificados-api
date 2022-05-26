export default {
    mongoUrl:
        process.env.MONGO_URL ||
        'mongodb+srv://livros-gamificados-api:L6xEBP7wws3QgQWE@cluster0.eeq5z.mongodb.net/livros-gamificados?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'secret',
};
