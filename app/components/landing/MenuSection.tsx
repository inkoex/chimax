import React from "react";
import { MENU_ITEMS } from "../../constants/landing";
import { Badge } from "../ui/Layout parts";
import { SectionContainer } from "../ui/Layout parts";

export function MenuSection() {
    return (
        <SectionContainer id="menu" className="bg-surface-low/30 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 text-center md:text-left">
                <div className="space-y-2">
                    <Badge variant="neutral">The Lineup</Badge>
                    <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">Signature Menu</h2>
                    <p className="text-neutral-400 font-medium"> Seoul bestsellers, optimized for Bengaluru delivery.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-primary font-bold cursor-pointer hover:underline">
                    <span>View All Items</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-2">
                {MENU_ITEMS.map((item) => (
                    <div key={item.id} className="flex-none w-[300px] md:w-[360px] snap-start group pointer-events-auto">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-low border border-surface-mid shadow-ambient mb-6">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            />
                            <div className="absolute top-4 left-4 z-10">
                                <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-medium line-clamp-2">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                    <span className="text-[10px] font-black uppercase tracking-tighter">Iconic Sauce</span>
                                </div>
                                <div className="flex items-center gap-1 text-neutral-600">
                                    <span className="material-symbols-outlined text-sm">timer</span>
                                    <span className="text-[10px] font-black uppercase tracking-tighter">StayCrisp 24m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
