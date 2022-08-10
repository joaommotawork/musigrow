const examples = new Map();

let latestFlightNumber = 100;

const example = {
	flightNumber: 100,
	mission: 'Kepler Launch',
	rocket: 'Falcon 1',
	launchDate: new Date('January 1, 2020'),
	target: 'Kepler-442 b',
	customers: ['NASA', 'Mota'],
	upcoming: true,
	success: true,
};

examples.set(example.flightNumber, example);

function existsExampleWithId(exampleId: any) {
	return examples.has(exampleId);
}

function getAllExamples() {
	return Array.from(examples.values());
}

function addNewExample(newLaunch: any) {
	latestFlightNumber++;
	examples.set(
		latestFlightNumber,
		Object.assign(newLaunch, {
			flightNumber: latestFlightNumber,
			customers: ['NASA', 'Mota'],
			upcoming: true,
			success: true,
		}),
	);
}

function deleteExampleById(exampleId: any) {
	const aborted = examples.get(exampleId);
	aborted.upcoming = false;
	aborted.success = false;
	return aborted;
}

export {
	existsExampleWithId,
	getAllExamples,
	addNewExample,
	deleteExampleById,
};
