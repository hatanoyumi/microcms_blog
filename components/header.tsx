import Link from "next/link";
import Search from "./search";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="text-2xl font-bold">
          Tech Blog
        </Link>
        {/* <form className="mx-4 max-w-sm flex-1">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search articles..." />
            <Button type="submit">Search</Button>
          </div>
        </form> */}
        <Search />
      </div>
    </header>
  );
}