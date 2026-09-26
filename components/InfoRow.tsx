import type { ReactNode } from "react";

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  divider?: boolean;
  valueLtr?: boolean;
};

export function InfoRow({ icon, label, value, href, external, divider, valueLtr }: InfoRowProps) {
  const content = (
    <div
      className={`flex items-center gap-[4.7cqw] py-[3.2cqw] ${
        divider ? "border-t border-white/[0.09]" : ""
      }`}
    >
      <div className="flex size-[11.7cqw] shrink-0 items-center justify-center rounded-full bg-[#F5C400]/[0.09] text-[#F5C400]">
        {icon}
      </div>

      <div className="min-w-0 text-start">
        <div className="text-[3.2cqw] leading-[1.5] text-white/45">{label}</div>
        <div className="text-[4.4cqw] leading-[1.5] font-medium break-words text-white/95">
          {valueLtr ? <bdi dir="ltr">{value}</bdi> : value}
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      className="card-action block focus-visible:outline-none"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
