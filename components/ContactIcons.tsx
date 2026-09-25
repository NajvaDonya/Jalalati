const ICON_CLASS = "size-[5.5cqw]";

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={ICON_CLASS} aria-hidden>
      <path
        d="M6.5 3.5L9.5 3L11 7L8.5 8.5C9.7 11.2 11.8 13.3 14.5 14.5L16 12L20 13.5L19.5 16.5C19.3 18 18 19 16.5 19C9.6 19 5 14.4 5 7.5C5 6 6 4.7 6.5 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={ICON_CLASS} aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 17.8H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={ICON_CLASS} aria-hidden>
      <path
        d="M20 10C20 15.5 12 21 12 21S4 15.5 4 10C4 5.6 7.6 2 12 2C16.4 2 20 5.6 20 10Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.8" r="2.6" fill="#132335" />
    </svg>
  );
}
