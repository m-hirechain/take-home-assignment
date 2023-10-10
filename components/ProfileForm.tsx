import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

export function ProfileForm() {
	// ensure the form is typesafe
	const form = useForm();

	const updateProfile = form.handleSubmit(async (formValues) => {
		// submit the values here
		console.log(formValues);
	});

	return (
		<Form {...form}>
			<form
				onSubmit={updateProfile}
				className='space-y-8 max-w-md w-full border rounded-md px-8 py-10'
			>
				<h2 className='text-xl'>Profile form</h2>

				<p>replace me with shadcn input</p>

				<p>replace me with shadcn file input</p>

				<p>replace me with shadcn textarea</p>

				<Button type='submit'>Update Profile</Button>
			</form>
		</Form>
	);
}
