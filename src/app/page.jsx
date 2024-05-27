const API_KEY = process.env.API_KEY;

import Result from "@/components/Result";

export default async function Home({ searchParams }) {
  const params = searchParams.genre || "fetchTrending";
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${
          params === "fetchTrending" ? "/trending/all/day" : "/movie/top_rated"
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10 } }
      );
      resolve(response);
    }, 2000);
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }

  const resData = data.results;

  return (
    <div>
      <h1 className="text-2xl font-medium text-amber-600">
        <Result result={resData} />
      </h1>
    </div>
  );
}
