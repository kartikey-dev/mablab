import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccordionItem from '../src/components/ui/AccordionItem';

describe('AccordionItem Component', () => {
  it('renders question text', () => {
    render(
      <AccordionItem
        id="test-faq"
        question="WHY 'MARKETING SCIENTISTS'?"
        answer="Because we test everything."
        isOpen={false}
      />
    );
    expect(screen.getByText("WHY 'MARKETING SCIENTISTS'?")).toBeInTheDocument();
  });

  it('displays answer when isOpen is true', () => {
    render(
      <AccordionItem
        id="test-faq"
        question="WHY 'MARKETING SCIENTISTS'?"
        answer="Because we test everything."
        isOpen={true}
      />
    );
    expect(screen.getByText('Because we test everything.')).toBeInTheDocument();
  });

  it('triggers onToggle callback on click', () => {
    const handleToggle = jest.fn();
    render(
      <AccordionItem
        id="test-faq"
        question="WHY 'MARKETING SCIENTISTS'?"
        answer="Because we test everything."
        isOpen={false}
        onToggle={handleToggle}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
