import { z } from 'zod';

export const PROFILE_SCHEMA = z.object({
	username: z.string().min(8).max(24),
	bio: z.string().min(5).max(256),
	pfp: z.string(),
});

export const UPDATE_PROFILE_FORM_SCHEMA = PROFILE_SCHEMA.omit({
	pfp: true,
})
	.extend({
		imageFile: z.any(), // validate for File type on the frontend
	})
	.partial();

export const UPDATE_PROFILE_TRPC_SCHEMA = PROFILE_SCHEMA.partial();

export const GET_PROFILE_TRPC_SCHEMA = PROFILE_SCHEMA.pick({ username: true });
