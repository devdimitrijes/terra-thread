import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`section-reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
