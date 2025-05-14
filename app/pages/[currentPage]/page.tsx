import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Page(props: {
  params: Promise<{ currentPage: string }>;
}) {
  const { currentPage } = await props.params;
  const currentPageInt = parseInt(currentPage, 10);
  const { contents: articles, totalCount } = await getArticles({
    limit: LIMIT,
    offset: (currentPageInt - 1) * LIMIT,
  });

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
      <Pagination
        totalCount={totalCount}
        currentPage={currentPageInt}
      />
    </div>
  );
}