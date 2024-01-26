import { initTRPC } from '@trpc/server/unstable-core-do-not-import';
import { ExpressContext } from '../server';

const t = initTRPC.context<ExpressContext>().create();

export const router = t.router;

//For public api endpoints
export const publicProcedure = t.procedure;
