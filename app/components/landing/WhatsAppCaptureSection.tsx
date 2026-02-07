import React, { useState } from "react";
import { Form, useNavigation, useActionData } from "react-router";
import { SectionContainer, Badge } from "../ui/SectionLayout";
import { PrimaryButton } from "../ui/Button";

export function WhatsAppCaptureSection() {
    const navigation = useNavigation();
    const actionData = useActionData() as { success?: boolean; error?: string };
    const isSubmitting = navigation.state === "submitting";
    const [phone, setPhone] = useState("");

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

                {actionData?.success ? (
                    <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl animate-fade-in space-y-4">
                        <div className="size-16 bg-primary rounded-full flex items-center justify-center mx-auto text-background-dark">
                            <span className="material-symbols-outlined text-4xl font-black">check</span>
                        </div>
                        <h3 className="text-white text-xl font-bold">You're on the list!</h3>
                        <p className="text-neutral-400 text-sm">We'll ping you on WhatsApp as soon as we're live.</p>
                    </div>
                ) : (
                    <Form method="post" className="space-y-6 text-left">
                        {/* Hidden Source for Marketing Attribution */}
                        <input type="hidden" name="source" value="landing_v1" />

                        <div className="space-y-4">
                            {/* Name Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-neutral-600 group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="w-full h-16 bg-surface-mid border border-surface-high rounded-xl pl-12 pr-4 text-white text-lg font-bold placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-ambient"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-neutral-600 group-focus-within:text-primary transition-colors">
                                    <span className="text-lg font-black">+91</span>
                                </div>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    placeholder="WhatsApp Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    className="w-full h-16 bg-surface-mid border border-surface-high rounded-xl pl-16 pr-4 text-white text-lg font-bold placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-ambient"
                                />
                            </div>

                            {/* Privacy Consent Checkbox */}
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    required
                                    name="consent"
                                    className="mt-1 size-4 rounded border-surface-high bg-surface-mid text-primary focus:ring-primary/20 transition-all"
                                />
                                <span className="text-xs text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                                    I agree to receive launch updates and exclusive offers via WhatsApp. I understand I can opt-out at any time.
                                </span>
                            </label>
                        </div>

                        <PrimaryButton
                            type="submit"
                            disabled={isSubmitting || phone.length < 10}
                            className="w-full h-16 text-lg tracking-widest uppercase disabled:opacity-50 disabled:grayscale transition-all"
                        >
                            {isSubmitting ? "Joining..." : "Notify Me on WhatsApp"}
                        </PrimaryButton>

                        {actionData?.error && (
                            <p className="text-red-500 text-xs font-bold text-center animate-fade-in">
                                {actionData.error}
                            </p>
                        )}

                        <p className="text-[10px] text-neutral-600 font-medium text-center">
                            Maximum satisfaction. Zero spam.
                        </p>
                    </Form>
                )}
            </div>
        </SectionContainer>
    );
}
