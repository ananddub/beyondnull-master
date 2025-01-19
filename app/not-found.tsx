'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold  mb-4 text-blue-500">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <div className="space-x-4">
        <Button className="text-blue-500 lg:mt-0" variant="default" onClick={() => router.push("/")}>
          Go to Home
        </Button>
        <Button variant="destructive" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
