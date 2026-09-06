import { CardSkeleton } from '@/components/shared/Skeletons';

export default function Loading() {
  return <section className="section-pad bg-white"><div className="container-padded grid gap-5 md:grid-cols-3"><CardSkeleton /><CardSkeleton /><CardSkeleton /></div></section>;
}
