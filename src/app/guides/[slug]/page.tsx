import { notFound } from "next/navigation";
import { GAME_GUIDES, getGuideBySlug } from "@/lib/pokemon/game-data";
import { GuideDetail } from "@/components/guides/GuideDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GAME_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };

  return {
    title: `${guide.title} Guide — Pokédex`,
    description: guide.description,
  };
}

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return <GuideDetail guide={guide} />;
}
