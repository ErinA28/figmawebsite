const searchForm = document.querySelector("#site-search");
const searchInput = document.querySelector("#search-query");
const searchStatus = document.querySelector("#search-status");
const searchableSections = [...document.querySelectorAll(".searchable")];

function filterSections(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    searchableSections.forEach((section) => {
      section.hidden = false;
    });
    searchStatus.textContent = "";
    return;
  }

  let matchCount = 0;

  searchableSections.forEach((section) => {
    const matches = section.textContent.toLocaleLowerCase().includes(normalizedQuery);
    section.hidden = !matches;
    if (matches) matchCount += 1;
  });

  searchStatus.textContent = matchCount
    ? `${matchCount} matching section${matchCount === 1 ? "" : "s"}`
    : "No matching sections. Clear the search to restore the page.";
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterSections(searchInput.value);
});

searchInput.addEventListener("input", () => {
  if (!searchInput.value.trim()) filterSections("");
});