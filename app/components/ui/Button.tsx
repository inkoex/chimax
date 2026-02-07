import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-background-dark font-black transition-all hover:brightness-110 active:scale-[0.98] shadow-glow ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-neutral-600 bg-transparent text-white font-bold transition-all hover:bg-white/5 active:scale-[0.98] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
