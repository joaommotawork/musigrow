import { prisma } from '.';

(async () => {
	try {
		await prisma.user.create({
			data: {
				name: 'Alice',
				email: 'alice@prisma.io',
				posts: {
					create: { title: 'Hello World' },
				},
				profile: {
					create: { bio: 'I like turtles' },
				},
			},
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
})();
