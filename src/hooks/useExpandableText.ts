import { useEffect, useRef, useState } from 'react';

function useExpandableText({
  text,
  maxLines,
}: {
  text: string;
  maxLines: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (paragraphRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(paragraphRef.current).lineHeight
      );
      const maxHeight = maxLines * lineHeight;
      paragraphRef.current.style.maxHeight = isExpanded
        ? 'none'
        : `${maxHeight}px`;

      setTimeout(() => {
        const calculatedLineCount = Math.round(
          paragraphRef.current!.scrollHeight / lineHeight
        );
        setLineCount(calculatedLineCount);
      }, 0);
    }
  }, [text, isExpanded, maxLines]);
  const shouldShowButtons = lineCount > maxLines;

  return {
    isExpanded,
    toggleText,
    paragraphRef,
    shouldShowButtons,
  };
}

export default useExpandableText;
