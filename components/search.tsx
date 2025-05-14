"use client";

import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (q: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", q);
    return params.toString();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search?" + createQueryString(e.currentTarget.q.value));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-4 max-w-sm flex-1">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          id="q"
          name="q"
          placeholder="Search articles..."
          defaultValue={searchParams.get("q")?.toString()}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}