document.addEventListener("DOMContentLoaded", () => {
  // Highlight table rows on hover
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => {
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "#e0f7fa";
    });
    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = "";
    });
  });
  // Log clicks on grid items
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      console.log(`Grid item clicked: "${item.textContent}"`);
      item.style.backgroundColor = "#ffd54f";
      setTimeout(() => item.style.backgroundColor = "", 500);
    });
  });
  // Log clicks on flex items
  const flexItems = document.querySelectorAll(".flex-item");
  flexItems.forEach(item => {
    item.addEventListener("click", () => {
      console.log(`Flex item clicked: "${item.textContent}"`);
      item.style.backgroundColor = "#aed581";
      setTimeout(() => item.style.backgroundColor = "", 500);
    });
  });
  // Toggle visibility of grid and flex sections
  const gridSection = document.querySelector(".grid-container");
  const flexSection = document.querySelector(".flex-container");

  const toggleButtonsHTML = `
    <div style="margin: 20px;">
      <button id="showGrid">Show Grid Only</button>
      <button id="showFlex">Show Flex Only</button>
      <button id="showBoth">Show Both</button>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", toggleButtonsHTML);

  document.getElementById("showGrid").addEventListener("click", () => {
    gridSection.style.display = "grid";
    flexSection.style.display = "none";
  });

  document.getElementById("showFlex").addEventListener("click", () => {
    gridSection.style.display = "none";
    flexSection.style.display = "flex";
  });

  document.getElementById("showBoth").addEventListener("click", () => {
    gridSection.style.display = "grid";
    flexSection.style.display = "flex";
  });
});