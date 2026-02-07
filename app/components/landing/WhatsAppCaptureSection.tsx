import React, { useState } from "react";
import { SectionContainer } from "../ui/Layout parts";
import { PrimaryButton } from "../ui/Button";
import { Badge } from "../ui/Layout parts";

export function WhatsAppCaptureSection() {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <SectionContainer id="rsvp" className="bg-surface-low border-y border-surface-mid">
            <div className="max-w-[600px] mx-auto text-center space-y-10">
                <div className="space-y-4">
                    <Badge variant="primary" className="mx-auto">Exclusive Access</Badge>
                    <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
                        Register for Launch <br />
                        <span className="text-primary italic">Priority</span>
                    </h2>
                    <p className="text-neutral-400 font-medium">
                        Be the first to know when our kitchen opens. <br className="hidden md:block" />
                        Priority signups get a complimentary NA brew with their first order.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl animate-fade-in space-y-4">
                        <div className="size-16 bg-primary rounded-full flex items-center justify-center mx-auto text-background-dark">
                            <span className="material-symbols-outlined text-4xl font-black">check</span>
                        </div>
                        <h3 className="text-white text-xl font-bold">You're on the list!</h3>
                        <p className="text-neutral-400 text-sm">We'll ping you on WhatsApp as soon as we're live.</p>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center text-neutral-600 group-focus-within:text-primary transition-colors">
                                <span className="text-lg font-black">+91</span>
                            </div>
                            <input
                                type="tel"
                                required
                                placeholder="Enter 10-digit WhatsApp number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                className="w-full h-16 bg-surface-mid border border-surface-high rounded-xl pl-16 pr-4 text-white text-lg font-bold placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-ambient"
                            />
                        </div>
                        <PrimaryButton
                            type="submit"
                            disabled={status === "loading" || phone.length < 10}
                            className="w-full h-16 text-lg tracking-widest uppercase disabled:opacity-50 disabled:grayscale transition-all"
                        >
                            {status === "loading" ? "Joining..." : "Notify Me on WhatsApp"}
                        </PrimaryButton>
                        <p className="text-[10px] text-neutral-600 font-medium">
                            By joining, you agree to receive launch updates via WhatsApp. We hate spam too.
                        </p>
                    </form>
                )}
            </div>
        </SectionContainer>
    );
}
