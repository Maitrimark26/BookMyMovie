

import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({api}) => {
 const [searchParams]=useSearchParams();
const queryTerm=searchParams.get("q");

const {data : movies}=useFetch(api,queryTerm)
  return (
    <main>
    <section>
<p className="text-xl">{movies.length === 0 ? `No result found '${queryTerm}'`:`result found '${queryTerm}'`}</p>
    </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}


