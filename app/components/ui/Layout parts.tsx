import React from "react";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function SectionContainer({ children, className = "", id }: SectionContainerProps) {
    return (
        <section id={id} className={`w-full px-6 py-16 md:py-24 ${className}`}>
            <div className="mx-auto max-w-[1200px]">
                {children}
            </div>
        </section>
    );
}

export function Badge({ children, variant = "primary", className = "" }: { children: React.ReactNode, variant?: "primary" | "hot" | "neutral", className?: string }) {
    const variants = {
        primary: "bg-primary text-background-dark",
        hot: "bg-red-600 text-white",
        neutral: "bg-surface-high text-neutral-400"
    };

    return (
        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
