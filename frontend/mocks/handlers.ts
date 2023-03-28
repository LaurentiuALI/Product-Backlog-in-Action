import { rest } from 'msw';
import { cardsResponse } from './constants';

export const handlers = [
    rest.get("http://localhost:4000/api/v1/cards/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(cardsResponse));}),
    


    ];