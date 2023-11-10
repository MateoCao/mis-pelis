import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginView from '../views/LoginView.jsx';
import { describe, expect, it, test } from 'vitest';

describe('Login', () => {
  test('should navigate to a different route', () => {
    render(
      <BrowserRouter>
        <LoginView />
      </BrowserRouter>
    );

    it('should render component', () => {
      const component = render(<LoginView />);

      expect(component).toBeDefined();
    });
  });
});
