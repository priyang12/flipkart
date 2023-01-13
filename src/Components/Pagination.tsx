import { clsx } from "clsx";
import { useLocation, useSearchParams } from "react-router-dom";

function Pagination({ TotalPages }: { TotalPages: number }) {
  const { search } = useLocation();
  const [Search, setSearch] = useSearchParams(search);
  const CurrentPage = Search.get("Page") ? Number(Search.get("Page")) : 1;

  const scrollToTop = () => {
    const Id = document.getElementById("Products");
    window.scrollTo({
      top: Id?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="divider"></div>
      <div className="flex gap-sm">
        {[...Array(TotalPages).keys()].map((item) => (
          <button
            className={clsx(
              "btn text-primary-content rounded-[50%]",
              CurrentPage === item + 1 ? "bg-primary" : null
            )}
            key={item}
            onClick={() => {
              if (Search.has("Page")) Search.delete("Page");
              Search.append("Page", String(item + 1));
              setSearch(Search.toString());
              scrollToTop();
            }}
          >
            {item + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
