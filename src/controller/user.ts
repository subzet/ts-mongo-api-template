import Router from 'express-promise-router';
import * as s from 'superstruct';

import { validate } from '../middleware';
import { userService } from '../service/user';

const router = Router();

const getUserSchema = {
  params: s.object({
    id: s.string(),
  }),
};

router.get('/:id', validate(getUserSchema), (request, response) => {
  return response.status(200).send({ ok: true });
});

const createUserSchema = {
  body: s.object({
    name: s.string(),
    email: s.string(),
  }),
};

router.post('/', validate(createUserSchema), async (request, response) => {
  const { name, email } = request.body;

  const user = await userService.create({ name, email, active: false });

  return response.status(200).send(user);
});

export default router;
