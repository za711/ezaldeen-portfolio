export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-7 rounded-card border border-accent/30 bg-accent/10 p-5 text-lg font-bold leading-8 text-primary">
      {children}
    </div>
  );
}
