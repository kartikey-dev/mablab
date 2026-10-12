import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IconCard from '../src/components/ui/IconCard';

describe('IconCard Component', () => {
  it('renders title and content correctly with capitalize styling', () => {
    render(
      <IconCard
        title="brand strategy"
        content="Strategic positioning for growth."
      />
    );
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('brand strategy');
    expect(heading.className).toContain('capitalize');
    expect(heading.className).toContain('para-24');
    expect(screen.getByText('Strategic positioning for growth.')).toBeInTheDocument();
  });

  it('renders with link when provided', () => {
    render(
      <IconCard
        title="Audience Insights"
        content="Deep research into customer segments."
        link="/services/market-research"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/services/market-research');
  });

  it('manages visibility using state when collapsible is true', () => {
    render(
      <IconCard
        title="Interactive Card"
        content="Hidden and revealed content"
        collapsible={true}
        defaultVisible={true}
      />
    );

    expect(screen.getByText('Hidden and revealed content')).toBeInTheDocument();
    const toggleBtn = screen.getByRole('button', { name: /hide details/i });
    expect(toggleBtn).toBeInTheDocument();

    // Toggle off
    fireEvent.click(toggleBtn);
    expect(screen.getByRole('button', { name: /show details/i })).toBeInTheDocument();
  });

  it('renders optional tag and category', () => {
    render(
      <IconCard
        title="Tagged Card"
        tag="01"
        tagColor="bg-cyan-500"
        category="Research"
      />
    );
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
  });
});
