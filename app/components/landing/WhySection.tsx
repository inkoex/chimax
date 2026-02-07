import React from "react";
import { SectionContainer } from "../ui/Layout parts";

export function WhySection() {
    return (
        <SectionContainer className="bg-background-dark border-t border-surface-low">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Visual Content */}
                <div className="relative order-2 md:order-1">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-glow/10 border border-primary/10">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkP18Nsy_ILb_4G18GgePWD6INIQKctrSyRpOkO72vT9w__87N-dRaEESd31Py8gPi9fYl0KF7YbTqPRAheJb3XlGRW7u48ztQsXC_t4DrgTM_nVMvec2Fzx88dMXuXietkT5DBSvi-ypdh9P3Z7CGWn3VW5pREesX9y1BDCVM6Bt77PJk7zFzrnuSyOSoeaKsibQriefOMj5MDi3KNG2BS7X1ywP8BNtxzR_x__x8-OemYQLrAVmLmEUqZCnxHBtyLH5yMXeIRy3M")` }}
                        />
                    </div>
                    {/* Packaging Tech Overlay Card */}
                    <div className="absolute -bottom-6 -right-6 md:right-8 p-6 bg-surface-mid/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-ambient max-w-[240px] space-y-3">
                        <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">inventory_2</span>
                        </div>
                        <h4 className="text-white text-sm font-black uppercase tracking-wider">Steamed-Out™ Tech</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed font-medium">Custom ventilation prevents condensation, keeping skin extra-crispy for up to 30 mins.</p>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8 order-1 md:order-2">
                    <div className="space-y-4">
                        <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">Our Philosophy</span>
                        <h2 className="text-white text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                            The Art of <br />
                            <span className="italic underline decoration-primary/40 underline-offset-4 font-black">Modern Chimaek</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-medium">
                            We’ve engineered the ultimate Korean Fried Chicken experience for the modern soul—minus the buzz, plus the maximum flavor.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-primary text-3xl shrink-0">bubble_chart</span>
                            <div className="space-y-1">
                                <h4 className="text-white text-lg font-bold uppercase tracking-tight">Zero-Proof Pairing</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">Curated selection of premium chilled sparkling drinks that cut through the richness without the alcohol.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-primary text-3xl shrink-0">speed</span>
                            <div className="space-y-1">
                                <h4 className="text-white text-lg font-bold uppercase tracking-tight"> Bengaluru-First Speed</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">Hyper-local delivery units ensuring the heat and crunch reach you exactly when they should.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
