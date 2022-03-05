import { render } from '@testing-library/react';

import MusigrowUi from './musigrow-ui';

describe('MusigrowUi', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MusigrowUi />);
		expect(baseElement).toBeTruthy();
	});
});
