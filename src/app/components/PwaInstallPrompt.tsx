"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const checkStandalone = () => {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as Navigator & { standalone?: boolean })
          .standalone === true;
      setIsStandalone(standalone);
    };

    checkStandalone();

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsVisible(false);
      setIsStandalone(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  if (isStandalone || !isVisible || !deferredPrompt) {
    return null;
  }

  const handleInstall = async () => {
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setIsVisible(false);
    }

    setDeferredPrompt(null);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:w-[360px]">
      <div className="rounded-2xl border border-emerald-400/30 bg-[#0d1727]/95 p-4 shadow-[0_20px_50px_rgba(16,185,129,0.15)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Install app
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Add Ali Ghiasi to your home screen
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Close install prompt"
            className="rounded-full border border-white/10 px-2 py-1 text-xs text-gray-300 transition hover:border-white/20 hover:text-white"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-300">
          Get quick access, better offline support, and a full-screen app
          experience.
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={handleInstall}
            className="flex-1 rounded-xl border border-emerald-400/40 bg-emerald-400/15 px-4 py-2.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            Install
          </button>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:text-white"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
