"use client";

import { config } from "@/lib/config";

export function FAQ() {
  const faqs = [
    {
      question: "Is it really free?",
      answer: "Yes. No tricks. No freemium. No \"upgrade to unlock\" nonsense. It's free because I built it for myself and figured others might find it useful too.",
    },
    {
      question: "Will this come out for Windows?",
      answer: "No.",
    },
    {
      question: "Why is it free?",
      answer: "Because screenshot tools shouldn't cost money. It's a screenshot tool, not enterprise software.",
    },
    {
      question: "Is my data safe?",
      answer: "Your screenshots never leave your Mac. There's no cloud, no account, no analytics. Everything stays local.",
    },
    {
      question: "How do I support the project?",
      answer: "Star it on GitHub, tell your friends, or contribute code. That's it.",
    },
    {
      question: "What macOS versions are supported?",
      answer: "macOS 13 (Ventura) and later.",
    },
  ];

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-4">
          Questions?
        </h2>
        <p className="text-xl text-gray-500 text-center mb-12">
          Here are some answers.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            More questions? Check the{" "}
            <a href={config.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline">
              GitHub repo
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
