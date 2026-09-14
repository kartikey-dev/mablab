import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../src/components/ui/Button';

describe('Button Component', () => {
  it('renders button text correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="#contact">Go to Contact</Button>);
    const link = screen.getByRole('link', { name: /go to contact/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Primary Action</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-primary');
  });
});
