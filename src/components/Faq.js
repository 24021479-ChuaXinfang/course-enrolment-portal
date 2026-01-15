import { useState } from "react";

const faqsData = [
  { question: "How do I browse courses?", answer: "Visit the Full-time Courses page to see all available diplomas. Click on a diploma to view its modules and details." },
  { question: "Can I save courses I'm interested in?", answer: "Yes! Click the ☆ Add Favourite button next to a course to save it. View your favourites anytime on the Favourites page." },
  { question: "How do I register my interest?", answer: "Go to the Register page, fill in your details, and select the course you want to register for. You’ll get a confirmation once done." },
  { question: "Can I remove a course from my favourites?", answer: "Click the ★ Unfavourite button either on the course page or in your Favourites list." },
  { question: "Where can I find course details?", answer: "Click on any diploma to see its modules, descriptions, and module chair information." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions (FAQs)</h3>
      <ul>
        {faqsData.map((faq, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              {faq.question} <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}