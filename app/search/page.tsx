import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import { getArticles } from "@/lib/client";

export default async function Page(props: {
  searchParams: Promise<{ q: string }>;
}) {
  const searchParams = await props.searchParams;

  const { contents: articles } = await getArticles({
    q: searchParams.q,
  });

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
    </div>
  );
}