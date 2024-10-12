"use client";
import parse from "html-react-parser";
import useExpandableText from "@/hooks/useExpandableText";
import { cn } from "@/lib/utils";

function ExpandableText({
  text,
  maxLines = 2,
  className,
  buttonClassName,
}: {
  text: string;
  maxLines?: number;
  className?: string;
  buttonClassName?: string;
}) {
  const { isExpanded, toggleText, paragraphRef, shouldShowButtons } =
    useExpandableText({ text, maxLines });

  return (
    <>
      <p
        className={cn(
          ` ${shouldShowButtons && isExpanded ? "expanded" : "not-expanded"} `,
          className,
        )}
        ref={paragraphRef}
      >
        {parse(text)}
      </p>

      {shouldShowButtons && (
        <button
          onClick={toggleText}
          className={cn(`underline`, buttonClassName)}
        >
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </>
  );
}

export default ExpandableText;
