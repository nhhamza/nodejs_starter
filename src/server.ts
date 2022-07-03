import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import { UsersController } from '@controllers/users.controller';
import validateEnv from '@utils/validateEnv';
import { StudentsController } from './controllers/students.controller';

validateEnv();

const app = new App([AuthController, IndexController, UsersController, StudentsController]);
app.listen();
