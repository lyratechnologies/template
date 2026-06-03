type StatusPanelProps = {
  label: string;
  tone?: "neutral" | "error";
};

export function StatusPanel({ label, tone = "neutral" }: StatusPanelProps) {
  return (
    <div
      className={
        tone === "error"
          ? "rounded-md border border-[oklch(0.7_0.12_25)] bg-[oklch(0.96_0.035_25)] p-6 text-sm text-[oklch(0.34_0.12_25)]"
          : "rounded-md border border-dashed border-[oklch(0.72_0.018_95)] bg-[oklch(0.998_0.004_95)] p-6 text-sm text-[oklch(0.38_0.018_95)]"
      }
    >
      {label}
    </div>
  );
}
