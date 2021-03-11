const mobileNav = document.createElement("div");
mobileNav.id = "mobileNav"
mobileNav.setAttribute("style", "visibility: hidden");
mobileNav.innerHTML = '<div class="menu"><img src="logo.svg"alt="Logo"></img><svg width="20" height="20"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg></div><nav><a href="">About</a><a href="">Careers</a><a href="">Events</a><a href="">Products</a><a href="">Support</a></nav>';
document.body.append(mobileNav);

const buttonOpen = document.querySelector("#hamburger");
const buttonClose = document.querySelector("#mobileNav svg");

buttonOpen.addEventListener("click", () => {
    mobileNav.setAttribute("style", "visibility: visible");
    mobileNav.classList.add("activeMenu");
});

buttonClose.addEventListener("click", () => {
    mobileNav.classList.remove("activeMenu");
    setTimeout(() => {
        mobileNav.setAttribute("style", "visibility: hidden");
    }, 500);
})