import {Application} from 'express';
import {ApplicationContext} from './context';

export function route(app: Application, ctx: ApplicationContext): void {
  const user = ctx.userController;
  ctx.pubSubController.listenForMessages();
  app.get('/users', user.all);
  app.get('/users/:id', user.load);
  app.post('/users', user.insert);
  app.put('/users/:id', user.update);
  app.patch('/users/:id', user.patch);
  app.delete('/users/:id', user.delete);
}
