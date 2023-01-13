import { Helmet } from "react-helmet-async";

function MetaApp({
  title,
  name,
  Filters,
  sortBy,
}: {
  title: string;
  name: string;
  Filters: string;
  sortBy: string;
}) {
  const searchParams = new URLSearchParams(Filters);
  const sizes = searchParams.get("size")?.split(",");
  const brands = searchParams.get("brand")?.split(",");
  const gender = searchParams.get("gender");
  const description = `Sizes: ${sizes?.join(", ")}. Brands: ${brands?.join(
    ", "
  )}. Gender: ${gender}.`;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            name + "Filters Products" + description + "sorted by " + sortBy
          }
        />
        <meta
          name="keywords"
          content={sizes?.concat(brands || [], gender || "").join(",")}
        />
      </Helmet>
    </div>
  );
}

export default MetaApp;
