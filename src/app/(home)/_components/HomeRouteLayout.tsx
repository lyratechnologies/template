// The _components folder is used to store layout-related components that are used in multiple pages within a route.
// This is a good practice because it allows you to reuse components across different pages without having to copy and paste the same code multiple times.
// You can also define page specific layout components in the _components folder.

export default function HomeRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {children}
      </div>
    </main>
  );
}
