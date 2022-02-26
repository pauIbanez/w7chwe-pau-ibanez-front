import { rest } from "msw";

export const handlers = [
  rest.get(
    // `${process.env.REACT_APP_API_HEROKU_URL}profiles/list`,
    "https://red-social-pau.herokuapp.com/profiles/list",
    (req, res, ctx) => {
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
    }
  ),
];
