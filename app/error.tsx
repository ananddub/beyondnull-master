"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <p className="text-xl text-muted-foreground text-red-600">
        Something went wrong. Please try again later.
      </p>

      {/* Display the error message */}
      <div className="bg-muted rounded-md p-4 text-left max-w-xl w-full">
        <h2 className="text-lg font-semibold mb-2">Error Details:</h2>
        <p className="text-sm text-red-600">{error.message}</p>

        {/* Display stack trace (optional, for debugging) */}
        <pre className="mt-2 p-2 bg-gray-800 text-white rounded-md overflow-auto max-h-48">
          {error.stack}
        </pre>
      </div>

      <div className="space-x-4">
        <Button variant="secondary" onClick={() => router.push("/")}>
          Go to Home
        </Button>
        <Button variant="destructive" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
