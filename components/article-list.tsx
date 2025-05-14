import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Article } from "@/lib/client"; // 追加
import Image from "next/image"; // 追加
import { formatDate } from "@/lib/utils"; // 追加


type Props = {
  articles: Article[];
};

export default async function ArticleList(props: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {props.articles.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}> {/* 詳細ページへのリンクに修正 */}
          <Card className="overflow-hidden">
            {/* ↓修正↓ */}
            <div className="relative border">
              <Image
                className="w-full"
                src={article.eyecatch?.url ?? "https://images.microcms-assets.io/assets/c1f55d9ab923462f9d521643013e7d61/eb7f77cbfaae491e82e1ca4e00e7053f/no-image.png"}
                width={345}
                height={240}
                alt="アイキャッチ"
              />
            </div>
            {/* ↑修正↑ */}
            <CardContent className="p-4">
              <Badge>{article.category.name}</Badge>
              <h2 className="text-xl font-semibold">{article.title}</h2>
            </CardContent>
            <CardFooter className="text-sm text-slate-600">
              {formatDate(article.publishedAt!)} {/* 修正  */}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}