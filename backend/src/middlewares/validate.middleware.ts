import { Response, Request, NextFunction } from "express";

const validateRequest =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({
          statusCode: 500,
          message: error.message,
          payload: null,
        });

        return;
      }
    }
  };

export default validateRequest;