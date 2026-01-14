export const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} Justine Valenzuela
        </p>
      </div>
    </footer>
  );
};