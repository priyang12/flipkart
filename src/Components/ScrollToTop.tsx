import * as React from "react";
import { useDebounce } from "use-debounce";
import { clsx } from "clsx";

function ScrollToTop({ ButtonShow }: { ButtonShow: number }) {
  const [showButton, setShowButton] = React.useState(false);
  const [value] = useDebounce(showButton, 500);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > ButtonShow) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [ButtonShow]);

  const scrollToTop = () => {
    const Id = document.getElementById("Products");
    window.scrollTo({
      top: Id?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={clsx(
            "cursor-pointer transition-transform ease-out duration-300 fixed top-[20px] z-10 right-[30%] text-xl bg-primary text-primary-content px-sm rounded-xl",
            showButton ? "-translate-y-12" : null,
            value ? "translate-y-2" : null
          )}
        >
          Scroll To Top &#8679;
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
