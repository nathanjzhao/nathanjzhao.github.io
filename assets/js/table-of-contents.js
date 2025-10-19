(function() {
  let container = document.querySelector("#blog-contents");
  let hs = container.querySelectorAll("h2, h3, h4, h5");

  if (hs.length <= 1) {
    return;
  }

  // Find floating TOC container
  let floatingToc = document.querySelector("#floating-toc");
  let floatingTocContent = document.querySelector("#floating-toc-content");
  
  if (!floatingToc || !floatingTocContent) {
    // Fallback: create inline TOC if floating container not found
    let toc = document.createElement("details");
    toc.classList.add("table-of-contents");

    let summary = document.createElement("summary");
    summary.innerHTML = "Table of Contents";
    toc.appendChild(summary);

    let tocInner = document.createElement("div");

    hs.forEach((element) => {
      let newElem = document.createElement("div")
      let newLink = document.createElement("a");

      newLink.innerHTML = element.innerHTML;
      newLink.href = `#${element.id}`;

      let dep = 0;
      if (element.localName === "h3") dep = 1;
      if (element.localName === "h4") dep = 2;
      if (element.localName === "h5") dep = 3;
      newElem.style.marginLeft = `${dep}em`;

      newElem.appendChild(newLink);
      tocInner.appendChild(newElem);
    });

    toc.appendChild(tocInner);
    container.insertBefore(toc, container.firstChild);
    return;
  }

  // Populate floating TOC
  hs.forEach((element) => {
    let newElem = document.createElement("div");
    let newLink = document.createElement("a");

    newLink.innerHTML = element.innerHTML;
    newLink.href = `#${element.id}`;

    let dep = 0;
    if (element.localName === "h3") dep = 1;
    if (element.localName === "h4") dep = 2;
    if (element.localName === "h5") dep = 3;
    newElem.style.marginLeft = `${dep}em`;

    // Add smooth scrolling click handler
    newLink.addEventListener('click', function(e) {
      e.preventDefault();
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      // Update URL hash after scrolling
      setTimeout(() => {
        history.pushState(null, null, `#${element.id}`);
      }, 500);
    });

    newElem.appendChild(newLink);
    floatingTocContent.appendChild(newElem);
  });

  // Show the floating TOC
  floatingToc.style.display = "block";
})();
