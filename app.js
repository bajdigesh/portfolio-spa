const routes = {
  "/": { template: "/pages/home/index.html" },
  kakshyalaya: { template: "pages/case-study/index.html" },
  "book-my-event": { template: "pages/case-study/index.html" },
  error: { template: "/pages/error/index.html" },
};

const router = async () => {
  var location = window.location.hash.replace("#", "");

  if (location.length === 0) {
    location = "/";
  }

  const route = routes[location] || routes["error"];

  if (route.template) {
    const content = await fetch(route.template).then((reponse) =>
      reponse.text()
    );
    document.getElementById("app").innerHTML = content;
  } else {
    const content = await fetch(routes.error.template).then((reponse) =>
      reponse.text()
    );
    document.getElementById("app").innerHTML = content;
  }
};
window.addEventListener("hashchange", function () {
  router();
});

router();
