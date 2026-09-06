export function VideoEmbed({ title = 'Video', url = 'https://www.youtube.com/embed/dQw4w9WgXcQ' }: { title?: string; url?: string }) {
  if (!url || url === 'https://www.youtube.com/embed/dQw4w9WgXcQ') {
    return null;
  }
  return (
    <div className="aspect-video overflow-hidden rounded-lg border border-brand-red/10 bg-zinc-100 shadow-brand">
      <iframe className="h-full w-full" src={url} title={title} allowFullScreen loading="lazy" />
    </div>
  );
}
