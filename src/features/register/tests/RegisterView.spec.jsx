import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RegisterView from '../views/RegisterView.jsx';

describe('RegisterView', () => {
  it('should render component', () => {
    render(<RegisterView />);
    expect(screen.getByText('NETFLIX')).toBeInTheDocument();
    expect(screen.getByText('Registrarme')).toBeInTheDocument();
  });

  it('should handle form', () => {
    render(<RegisterView />);
    const nameInput = screen.getByLabelText('Nombre de usuario');
    const emailInput = screen.getByLabelText('Correo electrónico');
    const submitButton = screen.getByText('Registrarme');

    fireEvent.input(nameInput, { target: { value: 'TestUser' } });
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
  });
});
