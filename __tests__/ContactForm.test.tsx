import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../src/components/ui/ContactForm';

describe('ContactForm Component', () => {
  it('renders all required form input fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email@company.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('phone number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Company Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Calendly link')).toBeInTheDocument();
  });

  it('allows user to type into input fields', () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('name') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Kumar Kartikey' } });
    expect(nameInput.value).toBe('Kumar Kartikey');
  });
});
