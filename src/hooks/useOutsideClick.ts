import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (triggerRef.current) {
        if (
          elementRef.current &&
          triggerRef.current &&
          !elementRef.current.contains(event.target) &&
          !triggerRef.current.contains(event.target)
        ) {
          callback();
        }
        return;
      }

      if (elementRef.current && !elementRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { elementRef, triggerRef };
};
