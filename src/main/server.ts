import 'module-alias/register';
import express from 'express';

const app = express();
app.listen(3000, () => console.log('Server running at http://localhost:5050'));
