import {
	getAllExamples,
	addNewExample,
	existsExampleWithId,
	deleteExampleById,
} from '@models/examples.model';

function httpGetAllExamples(req: any, res: any) {
	return res.status(200).json(getAllExamples());
}

function httpAddNewExample(req: any, res: any) {
	const example = req.body;

	if (
		!example.mission ||
		!example.rocket ||
		!example.launchDate ||
		!example.target
	) {
		return res.status(400).json({
			error: 'Missing Required Launch Fields',
		});
	}

	example.launchDate = new Date(example.launchDate);
	if (isNaN(example.launchDate)) {
		return res.status(400).json({
			error: 'Invalid Launch Date',
		});
	}
	addNewExample(example);
	return res.status(201).json(example);
}

function httpDeleteExample(req: any, res: any) {
	const exampleId = Number(req.params.id);
	if (!existsExampleWithId(exampleId)) {
		return res.status(404).json({
			error: 'Launch Not Found',
		});
	}
	const aborted = deleteExampleById(exampleId);
	return res.status(200).json(aborted);
}

export { httpGetAllExamples, httpAddNewExample, httpDeleteExample };
