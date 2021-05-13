import { rest } from "msw";
import IdamApiUrl from "../utils";

const handlers = [
  rest.post(`${IdamApiUrl()}/register`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${IdamApiUrl()}/verify`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
