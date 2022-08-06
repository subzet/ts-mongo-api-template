import { RequestHandler } from 'express';
import * as s from 'superstruct';

export const validate =
  (shape: any): RequestHandler =>
  (request, response, next) => {
    try {
      const schema = s.type(shape);
      s.assert(request, schema);
      return next();
    } catch (error) {
      if (error instanceof Error) {
        console.error('request schema validation failed', error);

        return response.status(400).send({ message: error.message });
      }
    }
  };
