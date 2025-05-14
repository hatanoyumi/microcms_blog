import {
  createClient,
  MicroCMSDate, // 追加
  MicroCMSImage, // 追加
  MicroCMSQueries, // 追加
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICED_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export type Category = {
  id: string;
  name: string;
};

// ↓追加↓
export type Article = {
  id: string;
  title: string;
  body: string;
  eyecatch?: MicroCMSImage;
  category: Category;
} & MicroCMSDate;
// ↑追加↑

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getCategories() {
  const categories = await client.getList<Category>({
    endpoint: "categories",
  });

  return categories;
}

// ↓追加↓
export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await client.getList<Article>({
    endpoint: "articles",
    queries,
  });

  return articles;
}
// ↑追加↑

export async function getArticle(contentId: string) {
  const article = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
  });

  return article;
}
