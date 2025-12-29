const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const nav = $('#nav')
const header = $("#header");

// load nội dung dùng chung
fetch("src/layout/header.html")
  .then((res) => res.text())
  .then((html) => {
    header.innerHTML = html;

    const btnMenu = $(".btn_menu");
    if (btnMenu) {
      btnMenu.onclick = function () {
        header.classList.toggle("is_open");
      };
    }
  });

function handleResize(element, className, breakpoint = 768) {
  if (!element) return;

  const isDesktop = window.innerWidth > breakpoint;
  if (isDesktop && element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

window.addEventListener("resize", () => {
  handleResize(header, "is_open");
});
