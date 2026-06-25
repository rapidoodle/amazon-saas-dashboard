"use client";

export function ConnectAmazonButton({ isConnected }: { isConnected: boolean }) {
  return (
    <a
      href="/api/amazon/oauth/authorize"
      className="inline-flex items-center justify-center gap-3 w-full rounded-xl bg-amazon-orange hover:bg-amazon-orange-dark text-amazon-navy font-bold text-base py-3.5 px-6 transition-colors duration-150 cursor-pointer"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.23 10.56v-.15c-1.19.09-2.44.24-2.44 1.64 0 .7.37 1.17 1.01 1.17.47 0 .87-.29 1.13-.75.32-.56.3-1.08.3-1.91zM22.43 18.01c-.15.14-.38.15-.56.06-1.16-.96-1.37-1.41-2-2.33-1.92 1.96-3.28 2.55-5.77 2.55-2.95 0-5.24-1.82-5.24-5.46 0-2.84 1.54-4.78 3.73-5.73 1.9-.83 4.55-1.01 6.58-1.23v-.46c0-.84.06-1.84-.43-2.57-.42-.66-1.24-.93-1.95-.93-1.33 0-2.51.68-2.8 2.1-.06.31-.3.61-.61.63l-3.41-.37c-.29-.07-.61-.3-.53-.74C10.44 1.47 13.39 0 16.66 0c1.67 0 3.86.44 5.18 1.71 1.67 1.56 1.51 3.64 1.51 5.91v5.36c0 1.61.67 2.32 1.3 3.19.22.31.27.68-.01.91l-2.21 1.93zM3.56 20.26c4.78 3.36 11.12 3.53 16.42.2.33-.2.66.12.45.43-2.18 3.06-5.72 4.85-9.56 4.85-4.75 0-9-2.55-11.42-6.38-.18-.28.11-.63.43-.46.63.35 2.33 1.13 3.68 1.36z" />
      </svg>
      {isConnected ? "Reconnect Amazon Account" : "Connect Amazon Account"}
    </a>
  );
}
