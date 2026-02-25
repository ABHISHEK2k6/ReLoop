export default function Footer() {
  return (
    <footer className="px-4 md:px-12 py-6 md:py-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
      <div>
        <div className="font-display font-bold text-base text-text-primary">♻ ReWaste</div>
        <div className="text-xs text-text-muted mt-1">Closing the loop on waste.</div>
      </div>
      <div className="flex gap-6 justify-center">
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Privacy</span>
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Terms</span>
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Contact</span>
      </div>
    </footer>
  );
}
