fetch("api/modules.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("modules");

    data.forEach(mod => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${mod.name}</h2>
        <p>${mod.description}</p>
        <span>Version: ${mod.version}</span><br>
        <span>Author: ${mod.author}</span><br>
        <a href="${mod.zip}" download>Download</a>
      `;

      container.appendChild(card);
    });
  });