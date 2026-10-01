export default function OfflinePage() {
  return (
    <div className="site-container flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
          Offline
        </p>
        <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          You are offline
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-300 md:text-base">
          This page is available in the app cache, but the network is currently
          unavailable. Please reconnect to continue browsing.
        </p>
      </div>
    </div>
  );
}
