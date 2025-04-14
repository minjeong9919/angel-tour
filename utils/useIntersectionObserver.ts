import { useEffect, useRef } from "react";

interface PropsType {
  observeCallback: () => void;
  unobserveCallback?: () => void;
  threshold?: number;
}

export function useIntersectionObserver({
  observeCallback,
  unobserveCallback,
  threshold = 1,
}: PropsType) {
  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observeCallback();
          } else {
            unobserveCallback?.();
          }
        });
      },
      { threshold: threshold }
    );
    const currentTarget = target.current;

    if (!currentTarget) {
      return;
    }

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [target, observeCallback, unobserveCallback, threshold]);
  return { target };
}
