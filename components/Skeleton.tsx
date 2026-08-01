export default function Skeleton() {
  return (
    <div className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="h-6 w-40 animate-pulse rounded bg-border/70" />
        <div className="mt-4 h-9 w-72 animate-pulse rounded bg-border/70" />
        <div className="mt-10 space-y-5">
          <div className="h-48 animate-pulse rounded-3xl bg-border/50" />
          <div className="h-48 animate-pulse rounded-3xl bg-border/50" />
        </div>
      </div>
    </div>
  );
}
