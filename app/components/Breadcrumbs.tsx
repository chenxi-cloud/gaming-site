import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-neutral-600">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-400 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
