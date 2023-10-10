import { trpc } from '@/lib/trpc';

const HomePage = () => {
	const query = trpc.hello.useQuery({ text: 'world' });

	if (query.isLoading) return <div>loading...</div>;

	if (query.isError) return <div>{query.error.message}</div>;

	return <div>{query.data.greeting}</div>;
};

export default HomePage;
