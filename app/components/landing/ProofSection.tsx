import React from "react";
import { PROOF_POINTS } from "../../constants/landing";
import { SectionContainer } from "../ui/Layout parts";

export function ProofSection() {
    return (
        <SectionContainer className="bg-background-dark py-12 border-y border-surface-low">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {PROOF_POINTS.map((point, index) => (
                    <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 group">
                        <div className="flex items-center justify-center size-12 rounded-xl bg-surface-low border border-surface-mid text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-ambient">
                            <span className="material-symbols-outlined text-2xl">{point.icon}</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-white text-sm font-black uppercase tracking-wider">{point.title}</h3>
                            <p className="text-neutral-600 text-xs leading-relaxed font-medium">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
