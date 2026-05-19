export function GradientOrb({ tone = "blue" }: { tone?: "blue" | "gold" }) {
  const color = tone === "gold" ? "from-accent/20" : "from-secondary/20";
  return (
    <div
      className={"pointer-events-none absolute h-72 w-72 rounded-[40%] bg-gradient-to-br " + color + " to-transparent blur-3xl"}
      aria-hidden="true"
    />
  );
}
