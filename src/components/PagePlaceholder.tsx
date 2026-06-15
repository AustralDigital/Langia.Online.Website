type PagePlaceholderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PagePlaceholder({
  eyebrow = "Langia",
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-10 text-[var(--foreground)] sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col justify-center">
        <p className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[var(--langia-blue)]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
        <div className="mt-12 h-px w-24 bg-[var(--langia-blue)]" />
      </section>
    </main>
  );
}
