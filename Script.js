// Drag-to-change-color effect for hero text
const text = document.getElementById("drag-text");
text.addEventListener("drag", () => {
  const colors = ["#ff4b2b", "#1de9b6", "#fbc531", "#6f1e51", "#2575fc"];
  text.style.color = colors[Math.floor(Math.random() * colors.length)];
});
