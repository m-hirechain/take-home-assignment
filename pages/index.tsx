import { Profile, ProfileProps } from '@/components/Profile';
import { ProfileForm } from '@/components/ProfileForm';
import { NextPage } from 'next';

type ProfilePageProps = ProfileProps;

const ProfilePage: NextPage<ProfilePageProps> = (props) => {
	return (
		<div className='mt-32 container space-x-8 flex justify-center mx-auto'>
			<Profile profile={props.profile} />
			<ProfileForm />
		</div>
	);
};

export default ProfilePage;
