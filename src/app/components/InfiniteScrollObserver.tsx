"use client";

import { useEffect, useRef } from "react";

type Props = {
  cb: () => void;
};

export default function InfiniteScrollObserver({ cb }: Props) {
  const obs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!obs.current) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => entry.isIntersecting && cb());
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // null means it will use the viewport as the root
      rootMargin: "0px", // Margin around the root
      threshold: 0.1, // 0.1 means trigger when 10% of the element is in view
    });
    observer.observe(obs.current);
  }, [cb]);

  return <div ref={obs}></div>;
}
