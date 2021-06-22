import {Db} from 'mongodb';
import {ApplicationContext} from './context';
import {UserController} from './controllers/UserController';
import {PubSubController} from './controllers/PubSubController';
import {MongoUserService} from './services/mongo/MongoUserService';

export function createContext(db: Db): ApplicationContext {
    const userService = new MongoUserService(db);
    const userController = new UserController(userService);
    const pubSubController = new PubSubController(userService);
    const ctx: ApplicationContext = {userController, pubSubController};
    return ctx;
}
