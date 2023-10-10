import { UPDATE_PROFILE_TRPC_SCHEMA } from '@/lib/validation-schemas/profile';
import { procedure, router } from '@/server/trpc';

const profileRouter = router({
	updateProfile: procedure
		.input(UPDATE_PROFILE_TRPC_SCHEMA)
		.mutation(({ input }) => {
			// TODO: save profile data to a mock db of your choosing
		}),
	getProfile: procedure.query(async () => {
		// TODO: get profile data from mock db
	}),
});

export const appRouter = router({
	profile: profileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
