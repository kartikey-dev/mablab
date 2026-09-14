export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'different-from-agencies',
    question: "How are you different from the other agencies we've worked with?",
    answer:
      "We do the thinking before getting to work; real research and customised strategy, not recycled tactics. No hollow promises, no rushed execution. If something doesn't make sense to us, it won't make it into your strategy. That's the whole difference.",
  },
  {
    id: 'starting-out-everything-at-once',
    question: "We're just starting out, do we need everything (branding, web, marketing) at once?",
    answer:
      "No. We build what you actually need, in the order that makes sense for where you are. Foundations first, complexity later. We'd rather get the basics right than sell you a bundle you're not ready for.",
  },
  {
    id: 'guarantee-results',
    question: 'Do you guarantee results?',
    answer:
      "No! And we won't pretend to. What we guarantee is deep research, sound strategy, and honest thinking behind every decision. We tell you what's working, what's not, and why. That's how real results actually happen.",
  },
  {
    id: 'project-duration',
    question: 'How long does a project typically take?',
    answer:
      "It depends on the project size and how ready your foundation is. We don't rush to hit arbitrary timelines. We move when the groundwork is solid. We'll always give you a clear, honest estimate upfront.",
  },
  {
    id: 'strategy-unexpected',
    question: "What if the strategy doesn't work the way we expected?",
    answer:
      "Then we say so. We track what's working, flag what isn't, and adjust. No burying it, no spin. Honest course-correction is part of the process, not a failure of it.",
  },
];
