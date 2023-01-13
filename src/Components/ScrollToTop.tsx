import * as React from "react";

function ScrollToTop({ ButtonShow }: { ButtonShow: number }) {
  const [showButton, setShowButton] = React.useState(false);

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
          className="cursor-pointer fixed top-[20px] z-10 right-[30%] text-2xl bg-primary text-primary-content px-sm rounded-xl"
        >
          Scroll To Top &#8679;
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
