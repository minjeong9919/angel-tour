import { useEffect, useRef } from "react";

interface PropsType {
  observeCallback: () => void;
  unobserveCallback?: () => void;
}

export function useIntersectionObserver({
  observeCallback,
  unobserveCallback,
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
      { threshold: 0.01 }
    );
    const currentTarget = target.current;

    if (!currentTarget) {
      return;
    }

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [target, observeCallback, unobserveCallback]);
  return { target };
}
