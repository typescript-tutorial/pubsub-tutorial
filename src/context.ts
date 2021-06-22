import {UserController} from './controllers/UserController';
import { PubSubController } from './controllers/PubSubController';

export interface ApplicationContext {
  userController: UserController;
  pubSubController: PubSubController;
}
