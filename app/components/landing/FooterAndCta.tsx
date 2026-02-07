import React from "react";
import { PrimaryButton } from "../ui/Button";

export function FinalCtaSection() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Radiant Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-low to-background-dark z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="relative z-10 max-w-[800px] mx-auto text-center space-y-10">
                <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                    Ready for the <br />
                    <span className="text-primary italic">Crunch?</span>
                </h2>
                <div className="flex flex-col items-center gap-6">
                    <PrimaryButton className="w-full sm:w-auto px-12 h-16 text-xl tracking-widest uppercase">
                        Join the Launch List
                    </PrimaryButton>
                    <div className="flex items-center gap-2 text-neutral-600 font-bold text-xs uppercase tracking-widest">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                        Active slots remaining for Bengaluru
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-background-dark py-12 px-6 border-t border-surface-low text-center space-y-6">
            <div className="space-y-2">
                <h3 className="text-primary text-2xl font-black italic tracking-tighter">CHIMAX</h3>
                <p className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.4em]">Maximum Crunch. Seoul Spirit.</p>
            </div>

            <div className="flex justify-center gap-8">
                {["Instagram", "Twitter", "Email"].map((social) => (
                    <a key={social} href="#" className="text-neutral-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                        {social}
                    </a>
                ))}
            </div>

            <div className="pt-8 border-t border-surface-low/30 inline-block w-full max-w-[400px]">
                <p className="text-neutral-700 text-[9px] uppercase tracking-widest leading-loose">
                    © 2024 CHIMAX Food Labs India. All rights reserved. <br />
                    Optimized for maximum satisfaction.
                </p>
            </div>
        </footer>
    );
}
