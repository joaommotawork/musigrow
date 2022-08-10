import request from 'supertest';
import app from '@src/app';

describe('Test GET /examples', () => {
	test('It Should Respond With 200 Success', async () => {
		await request(app)
			.get('/examples')
			.expect('Content-Type', /json/)
			.expect(200);
	});
});

describe('Test POST /launch', () => {
	const completeLaunchData = {
		mission: 'MOTA123',
		rocket: 'Falcon 123',
		target: 'Kepler-186 f',
		launchDate: 'January 17, 2030',
	};

	const completeLaunchWithoutDate = {
		mission: 'MOTA123',
		rocket: 'Falcon 123',
		target: 'Kepler-186 f',
	};

	const launchDataWithInvalidDate = {
		mission: 'MOTA123',
		rocket: 'Falcon 123',
		target: 'Kepler-186 f',
		launchDate: 'zoot',
	};

	test('It Should Respond With 201 Created', async () => {
		const response = await request(app)
			.post('/examples')
			.send(completeLaunchData)
			.expect('Content-Type', /json/)
			.expect(201);

		const requestDate = new Date(completeLaunchData.launchDate).valueOf();
		const responseDate = new Date(response.body.launchDate).valueOf();

		expect(responseDate).toBe(requestDate);
		expect(response.body).toMatchObject(completeLaunchWithoutDate);
	});

	test('It Should Catch Missing Required Properties', async () => {
		const response = await request(app)
			.post('/examples')
			.send(completeLaunchWithoutDate)
			.expect('Content-Type', /json/)
			.expect(400);

		expect(response.body).toStrictEqual({
			error: 'Missing Required Launch Fields',
		});
	});

	test('It Should Catch Invalid Dates', async () => {
		const response = await request(app)
			.post('/examples')
			.send(launchDataWithInvalidDate)
			.expect('Content-Type', /json/)
			.expect(400);

		expect(response.body).toStrictEqual({
			error: 'Invalid Launch Date',
		});
	});
});
