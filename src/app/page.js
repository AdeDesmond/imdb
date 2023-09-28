import Image from "next/image";
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await response.json();
  const results = data.results;

  return (
    <main className="">
      <Results results={results} />
    </main>
  );
}
