import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeading from '../src/components/ui/SectionHeading';

describe('SectionHeading Component', () => {
  it('renders base text and accent text correctly', () => {
    render(<SectionHeading text="OUR EXPERIMENTAL" accentText="FORMULAS." />);
    expect(screen.getByText('OUR EXPERIMENTAL')).toBeInTheDocument();
    expect(screen.getByText('FORMULAS.')).toBeInTheDocument();
  });

  it('renders heading as h2 by default', () => {
    render(<SectionHeading text="TEST" accentText="HEADING" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
