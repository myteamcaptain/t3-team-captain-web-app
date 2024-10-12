"use client";
import Wrapper from "@/components/Generals/Wrapper";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <Wrapper>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </Wrapper>
      </body>
    </html>
  );
}
