import React, { useState } from "react";
import { SectionContainer } from "../ui/SectionLayout";

const FAQS = [
    {
        question: "When are you launching?",
        answer: "We are currently in the final stages of setting up our cloud kitchens. Expect the first crunches by the end of this month!"
    },
    {
        question: "Which areas in Bengaluru do you cover?",
        answer: "Initially, we'll be serving Indiranagar, Koramangala, and HSR Layout. We'll be expanding rapidly across the city."
    },
    {
        question: "Is it really as crunchy as in Seoul?",
        answer: "Our head chef spent 6 months in Seoul perfecting the double-fry technique with Bengaluru's humidity in mind. It's the real deal."
    },
    {
        question: "Do you have vegetarian options?",
        answer: "While chicken is our hero, we have a 'Crispy Cauliflower' range coming soon that uses the same signature Seoul batter."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionContainer className="bg-background-dark">
            <div className="max-w-[700px] mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-white text-3xl font-black uppercase tracking-tight">Got Questions?</h2>
                    <p className="text-neutral-500 font-medium text-sm italic">Maximum answers for maximum crunch.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-surface-low rounded-2xl overflow-hidden hover:border-surface-mid transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-low/50 transition-colors"
                            >
                                <span className="text-white font-bold group-hover:text-primary transition-colors">{faq.question}</span>
                                <span className={`material-symbols-outlined text-neutral-600 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""}`}>
                                    expand_more
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 animate-slide-down">
                                    <p className="text-neutral-400 text-sm leading-relaxed font-normal border-t border-surface-low pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
