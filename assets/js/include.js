async function loadPartials() {
     // SEO in <head> einfügen
    const head = document.querySelector("head");
    const seoRes = await fetch("/partials/seo.html");
    head.insertAdjacentHTML("beforeend", await seoRes.text());
    
    // Header einfügen
    const header = document.getElementById("header");
    if (header) {
        const res = await fetch("/partials/header.html");
        header.innerHTML = await res.text();
    }

    // Footer einfügen
    const footer = document.getElementById("footer");
    if (footer) {
        const res = await fetch("/partials/footer.html");
        footer.innerHTML = await res.text();
    }
}

document.addEventListener("DOMContentLoaded", loadPartials);
