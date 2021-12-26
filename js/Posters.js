AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function () {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/comic-page/marvel-1000.jpg",
      },
      {
        id: "spiderman",
        url: "./assets/comic-page/defenders.jpg",
      },

      {
        id: "captain-aero",
        url: "./assets/comic-page/caption-marvel.jpg",
      },
      {
        id: "outer-space",
        url: "./assets/comic-page/avengers-forever.jpeg",
      },
    ];
    let previousXPosition = -60;

    for (var item of postersRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 30,
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#143d59" });

    return entityEl;
  },
  createPoster: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });

    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.2 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
});
