let list = document.querySelectorAll("ul li");
let imgs = document.images;

list.forEach((e) => {
    e.addEventListener("click", () => {
        list.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.classList.add("active");

        let cat = e.getAttribute("data-cat");

        Array.from(imgs).forEach((im) => {
            im.style.display = "none";
            if (im.classList.contains(cat)) {
                im.style.display = "block";
            }
        })
    })
})




