import { rest } from "msw";
import { cardsResponse } from "./constants";

const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";
export const handlers = [
  rest.get(`${BaseURL}/api/v1/cards/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cardsResponse));
  }),
];
