// Title
// Type of Heading

// headingGenerator('Hi there', 1) example - <h1>Hi there</h1>

let title = document.querySelector("#title");
let url = document.querySelector("#url");
let tag = document.querySelector("#tag");
let result = document.querySelector(".result_text");

function generate (title, url, tag) {
    let final_string = `<a href="${url}"><div class="link"><div class="banner">${tag}</div>${title}</div></a>`;
    result.value = final_string;
}

let submit_btn = document.querySelector("#submit");
submit_btn.addEventListener("click", () => {
    generate(title.value, url.value, tag.value);
    title.value = "";
    url.value = "";
    tag.value = "";
});

let copy_btn = document.querySelector(".copy_btn");
copy_btn.addEventListener("click", () => {
    copy();
})
function copy() {
    result.select();
    document.execCommand("copy");
}