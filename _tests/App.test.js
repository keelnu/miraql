import React from 'react';
import { render } from '@testing-library/react';

import App from '../client/components/App';

test('renders a <div> tag and the Container element', () => {
  const { getByText, getByLabelText } = render(<App />);


});