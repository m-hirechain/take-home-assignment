import { UPDATE_PROFILE_TRPC_SCHEMA } from '@/lib/validation-schemas/profile';
import { FC } from 'react';
import { z } from 'zod';

export type ProfileProps = {
	profile: z.infer<typeof UPDATE_PROFILE_TRPC_SCHEMA>;
};

export const Profile: FC<ProfileProps> = (props) => {
	return (
		<div className='space-y-8 max-w-md w-full border rounded-md px-8 py-10'>
			<h2 className='text-xl'>Profile Info</h2>
			{/* TODO: display the server data here */}
			<p>display the avatar here</p>
			<p>display the bio here</p>
			<p>display the username here</p>
		</div>
	);
};
