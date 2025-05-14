import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Page(props: {
  params: Promise<{ currentCategoryId: string }>;
}) {
  const { currentCategoryId } = await props.params;
  const { contents: articles, totalCount } = await getArticles({
    limit: LIMIT,
    offset: 0,
    filters: `category[equals]${currentCategoryId}`,
  });

  return (
    <div>
      <CategoryFilter currentCategoryId={currentCategoryId} />
      <ArticleList articles={articles} />
      <Pagination
        totalCount={totalCount}
        basePath={`/categories/${currentCategoryId}`}
      />
    </div>
  );
}