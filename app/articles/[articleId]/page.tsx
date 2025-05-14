import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticle } from "@/lib/client";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await props.params;
  const article = await getArticle(articleId);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Button asChild className="mb-4">
        <Link href="/">← Back to all posts</Link>
      </Button>
      <div className="relative mb-8 h-[400px]">
        <Image
          src={article.eyecatch?.url ?? "https://images.microcms-assets.io/assets/c1f55d9ab923462f9d521643013e7d61/eb7f77cbfaae491e82e1ca4e00e7053f/no-image.png"}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      <div className="mb-6 flex items-center">
        <span className="mr-4 text-slate-600">
          {formatDate(article.publishedAt!)}
        </span>
        <Badge variant="secondary">{article.category.name}</Badge>
      </div>
      <div className="prose max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: article.body,
          }}
        ></div>
      </div>
    </article>
  )

}