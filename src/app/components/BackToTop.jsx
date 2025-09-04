"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-6 right-6 z-50 h-13 w-13 rounded-full bg-blue-500 p-3 shadow-lg transition-opacity hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50  duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
        >
            <Image
                src="/up.svg"
                alt="Back to top"
                width={30}
                height={30}
                className="h-full w-full text-white"
            />
        </button>
    );
}
