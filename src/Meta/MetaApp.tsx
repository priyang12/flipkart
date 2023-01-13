import { Helmet } from "react-helmet-async";

function MetaApp({ title }: { title: string }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </div>
  );
}

export default MetaApp;
