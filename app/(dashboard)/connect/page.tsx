import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { ConnectAmazonButton } from "@/components/connect/connect-amazon-button";
import { Header } from "@/components/layout/header";

export default async function ConnectPage({
  searchParams,
}: {
  searchParams: { error?: string; connected?: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  // If already connected, redirect to dashboard
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      store: { include: { credentials: true } },
    },
  });

  const isConnected = user?.store?.credentials?.status === "CONNECTED";

  const errorMessages: Record<string, string> = {
    invalid_state: "Security check failed. Please try again.",
    missing_params: "Amazon did not return the expected information. Please try again.",
    token_exchange_failed: "Could not exchange your authorization code. Check your app credentials.",
    unexpected: "An unexpected error occurred. Please try again.",
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Header title="Connect Amazon Account" subtitle="Link your Seller Central account to get started" />

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Error banner */}
          {searchParams.error && (
            <div className="rounded-lg border border-red-700 bg-red-900/20 px-4 py-3 text-sm text-red-300">
              {errorMessages[searchParams.error] ?? "Something went wrong. Please try again."}
            </div>
          )}

          {/* Already connected */}
          {isConnected && (
            <div className="rounded-lg border border-green-700 bg-green-900/20 px-4 py-3 text-sm text-green-300 flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Your Amazon account is connected. You can reconnect below to refresh your credentials.
            </div>
          )}

          {/* Main card */}
          <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-8 space-y-6">

            {/* Amazon logo mark */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-amazon-orange flex items-center justify-center">
                <svg className="h-7 w-7 text-amazon-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.23 10.56v-.15c-1.19.09-2.44.24-2.44 1.64 0 .7.37 1.17 1.01 1.17.47 0 .87-.29 1.13-.75.32-.56.3-1.08.3-1.91zM22.43 18.01c-.15.14-.38.15-.56.06-1.16-.96-1.37-1.41-2-2.33-1.92 1.96-3.28 2.55-5.77 2.55-2.95 0-5.24-1.82-5.24-5.46 0-2.84 1.54-4.78 3.73-5.73 1.9-.83 4.55-1.01 6.58-1.23v-.46c0-.84.06-1.84-.43-2.57-.42-.66-1.24-.93-1.95-.93-1.33 0-2.51.68-2.8 2.1-.06.31-.3.61-.61.63l-3.41-.37c-.29-.07-.61-.3-.53-.74C10.44 1.47 13.39 0 16.66 0c1.67 0 3.86.44 5.18 1.71 1.67 1.56 1.51 3.64 1.51 5.91v5.36c0 1.61.67 2.32 1.3 3.19.22.31.27.68-.01.91l-2.21 1.93zM18.7 15.5c.83-1.44.83-2.78.83-4.16v-.87c-2.33 0-4.79.5-4.79 3.27 0 1.4.73 2.35 1.98 2.35.92 0 1.75-.57 2.21-1.38l-.23-.21zM3.56 20.26c4.78 3.36 11.12 3.53 16.42.2.33-.2.66.12.45.43-2.18 3.06-5.72 4.85-9.56 4.85-4.75 0-9-2.55-11.42-6.38-.18-.28.11-.63.43-.46.63.35 2.33 1.13 3.68 1.36z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Connect Seller Central</h2>
                <p className="text-sm text-gray-400">Authorize the DR Dashboard to read your seller data</p>
              </div>
            </div>

            {/* What we access */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">What we read from your account</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Sales & traffic metrics",
                  "FBA inventory levels",
                  "Listing health & status",
                  "Order data",
                  "Buyer messages",
                  "Account health score",
                  "Inbound shipments",
                  "Performance notifications",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="h-4 w-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* What we never do */}
            <div className="rounded-lg bg-amazon-navy border border-amazon-navy-light px-4 py-3 flex items-start gap-3">
              <svg className="h-4 w-4 text-amazon-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-xs text-gray-400">
                We request <strong className="text-white">read-only access</strong> only. We never place orders, modify listings, or make changes to your account. Your credentials are encrypted and stored securely.
              </p>
            </div>

            <ConnectAmazonButton isConnected={isConnected} />
          </div>

          {/* Steps */}
          <div className="bg-amazon-navy-mid rounded-xl border border-amazon-navy-light p-6 space-y-4">
            <p className="text-sm font-semibold text-white">How it works</p>
            <div className="space-y-3">
              {[
                { step: "1", text: "Click the button above — you'll be redirected to Amazon Seller Central" },
                { step: "2", text: "Log in and approve the connection request" },
                { step: "3", text: "Amazon redirects you back here automatically" },
                { step: "4", text: "Your Daily Review dashboard is ready" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-amazon-orange text-amazon-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {s.step}
                  </span>
                  <p className="text-sm text-gray-300">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
