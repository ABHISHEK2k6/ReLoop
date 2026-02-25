export default function Footer() {
  return (
    <footer className="px-12 py-8 border-t border-dark-border flex justify-between items-center max-md:flex-col max-md:gap-5 max-md:text-center">
      <div>
        <div className="font-display font-bold text-base text-text-primary">♻ ReLoop</div>
        <div className="text-xs text-text-muted mt-1">Closing the loop on waste.</div>
      </div>
      <div className="flex gap-6 max-md:justify-center">
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Privacy</span>
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Terms</span>
        <span className="text-[13px] text-text-secondary no-underline cursor-pointer hover:text-text-primary">Contact</span>
      </div>
    </footer>
  );
}
