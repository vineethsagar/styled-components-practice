import * as React from 'react';
import styled from 'styled-components/native/dist/index-standalone';
import './style.css';

const FaqDetails = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
`;

const FaqDiv = styled.div`
background: hsl(0deg 0% 92.5%);
border-radius: 0 0 4px 4px;
padding: 12px 17px;
font-style: italic;
`;

const FaqSummary = styled.summary`
cursor: pointer;
padding: 12px 16px;
outline-offset: 5px;
`;

function FrequentlyAskedQuestion({ question, answer }) {
  return (
    <FaqDetails>
      <FaqSummary>{question}</FaqSummary>
      <FaqDiv>{answer}</FaqDiv>
    </FaqDetails>
  );
}

/**
 * details.faq {
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
}

details.faq summary {
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
}

details.faq .answer {
  background: hsl(0deg 0% 92.5%);
  border-radius: 0 0 4px 4px;
  padding: 12px 17px;
  font-style: italic;
}

 */
export default function App() {
  return (
    <FrequentlyAskedQuestion
      question="What does “CSS” stand for?"
      answer="Cool Styling Strategy"
    />
  );
}
