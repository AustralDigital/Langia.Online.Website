import type { ReactNode } from "react";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ArrowIcon } from "@/components/site/MarketingPrimitives";

export function Label({ children }: { children: ReactNode }) {
  return <p className="premium-label">{children}</p>;
}
export function HomeAction({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <LocalizedLink
      href={href}
      className={`premium-action${secondary ? " premium-action-secondary" : ""}`}
    >
      {children}
      <ArrowIcon />
    </LocalizedLink>
  );
}
export function SectionIntro({
  label,
  title,
  body,
  action,
}: {
  label: string;
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="premium-intro">
      <div>
        <Label>{label}</Label>
        <h2>{title}</h2>
      </div>
      {body || action ? (
        <div className="premium-intro-aside">
          {body ? <p>{body}</p> : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
