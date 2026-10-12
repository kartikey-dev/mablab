import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/layout/Footer';
import { CtaProvider, PageCta } from '../src/context/CtaContext';

describe('Footer Component', () => {
  it('renders footer with default CTA banner', () => {
    render(
      <CtaProvider>
        <Footer />
      </CtaProvider>
    );

    // Default heading should be rendered
    expect(screen.getByText("You've Tried Enough Things.")).toBeInTheDocument();
    expect(screen.getByText("Let's Talk")).toBeInTheDocument();
    expect(screen.getByText("Jungle Mein Mor Nacha Kisne Dekha?")).toBeInTheDocument();
    expect(screen.getByText("© 2026 MAB Lab. All Rights Reserved.")).toBeInTheDocument();
  });

  it('renders custom CTA data when props are passed directly to Footer', () => {
    render(
      <CtaProvider>
        <Footer
          ctaHeading="Custom Scaled Title"
          ctaDescription="Custom growth description"
          ctaButtonText="Explore More →"
          ctaButtonHref="/custom-link"
        />
      </CtaProvider>
    );

    expect(screen.getByText("Custom Scaled Title")).toBeInTheDocument();
    expect(screen.getByText("Custom growth description")).toBeInTheDocument();
    expect(screen.getByText("Explore More →")).toBeInTheDocument();
  });

  it('hides CTA banner when showCta is false', () => {
    render(
      <CtaProvider>
        <Footer showCta={false} />
      </CtaProvider>
    );

    expect(screen.queryByText("You've Tried Enough Things.")).not.toBeInTheDocument();
    expect(screen.getByText("© 2026 MAB Lab. All Rights Reserved.")).toBeInTheDocument();
  });

  it('updates CTA banner via PageCta context override', () => {
    render(
      <CtaProvider>
        <PageCta
          heading="Context Overridden Heading"
          description="Context overridden description"
          buttonText="Context Button →"
        />
        <Footer />
      </CtaProvider>
    );

    expect(screen.getByText("Context Overridden Heading")).toBeInTheDocument();
    expect(screen.getByText("Context overridden description")).toBeInTheDocument();
    expect(screen.getByText("Context Button →")).toBeInTheDocument();
  });
});
