export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="card p-5">
      <h2 className="font-black text-brand-red">Table of contents</h2>
      {items.map((item) => <a key={item.id} href={`#${item.id}`} className="mt-3 block text-sm text-zinc-700 hover:text-brand-red">{item.label}</a>)}
    </nav>
  );
}
