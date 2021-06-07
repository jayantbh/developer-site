import { useEffect, useRef, DependencyList } from 'react';

export const useEvents = (
  events: (keyof DocumentEventMap)[],
  handler: (e: Event) => any,
  { disabled = false, deps = [] }: { disabled?: boolean; deps?: DependencyList } = {}
) => {
  const frameRef = useRef(-1);

  useEffect(() => {
    if (disabled) return;

    const listener = (e: Event) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        handler(e);
      });
    };

    events.forEach((ev) => {
      document.addEventListener(ev, listener);
    });

    return () => {
      events.forEach((ev) => {
        document.removeEventListener(ev, listener);
      });
    };
  }, [...deps, disabled, handler]);
};
