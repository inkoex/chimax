import React from "react";
import { PrimaryButton, SecondaryButton } from "../ui/Button";

export function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background with Neo-Minimal Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 13, 11, 0.7) 0%, rgba(15, 13, 11, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMG3q8-ewV7U-IjY8CqyknCuyRbPH13MsAQH7PTwEUMiQiAj5pUIy_nDUxImBXd2IQT8NmV43IH8CBVHr7A4cwHRcU9Ul-h6WRxuWagzK1lC63kMKLRTRRTbUeEAXhmbUPP7NbQox-2zI_pUNmq4JtIxk6DIBVW-HACVfkcGmzFuZSQ3nqdiD_WSPhHfhbv-n9tQ3mDwmHnOMaqf0_K_3quIv8Xsp1mIEXQCa_j2oijStYrjs1u5ye8QA1sCnqfvnntMT2-H92t_rJ")`
                }}
            />

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] z-1" />

            <div className="relative z-10 px-6 max-w-[800px] text-center space-y-8">
                <div className="space-y-4">
                    <p className="text-primary text-sm font-black uppercase tracking-[0.3em] animate-fade-in">
                        Coming Soon to Bengaluru
                    </p>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] tracking-tight uppercase">
                        Maximum Crunch. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                            Seoul Spirit.
                        </span>
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-[600px] mx-auto leading-relaxed">
                        Bengaluru’s first true Korean chicken delivery. <br className="hidden md:block" />
                        Engineered for crunch, delivered with precision.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#rsvp" className="w-full sm:w-auto">
                        <PrimaryButton className="w-full px-10 h-16 text-lg">
                            Get WhatsApp Access
                        </PrimaryButton>
                    </a>
                    <a href="#menu" className="w-full sm:w-auto">
                        <SecondaryButton className="w-full px-10 h-16 text-lg">
                            View Signature Menu
                        </SecondaryButton>
                    </a>
                </div>
            </div>
        </section>
    );
}
