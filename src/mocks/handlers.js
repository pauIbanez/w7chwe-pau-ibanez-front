import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}profiles/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "person1",
        },
        {
          name: "person2",
        },
      ])
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}profiles/3`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "paquito",
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}profiles/4`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: "paquito",
      })
    );
  }),

  rest.patch(
    `${process.env.REACT_APP_API_URL}profiles/update/3`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "paquito",
        })
      );
    }
  ),

  rest.patch(
    `${process.env.REACT_APP_API_URL}profiles/update/4`,
    (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({
          error: "paquito",
        })
      );
    }
  ),
];
