const works = [
  {
    title: "Kakshyalaya",
    description:
      "A website for a NGO showcasing their works and contribution in rural education in Nepal.",
    link: "https://google.com/",
    thumb: "kakshyalaya.png",
    problem:
      "Business owner didn't had any online platform to showcase their activities and get the required attention for funding and volunteering. Kakshyalaya seeks to generate necessary funds through donations and manpower through volunteering.",
    solution:
      "We created a simple websie that allows the owner to showcase their activities. It helps the business to outline their project goals and seek volunteering services.",
    role: "Lead UI/UX designer",
  },
  {
    title: "Jaslaya",
    description: "An ecommerce site for wholeselling and retailing purpose",
    link: "https://jaslaya.com/",
    problem:
      "The client felt lack of wholeselling ecommerce portals that do out of city deliveries too. All the ecommerce are based on the same cities.",
    solution:
      "Created a ecommerce site that lets vendors do wholeselling as well as retailing deliver in and out of the city. We created simple and visually pleasing UI to let users know about the different offers on the produts.",
    role: "Lead UI/UX designer",
  },
  {
    title: "Book My Event",
    description:
      "A conceptual mobile app that lets users compare different venues for their events.",
    link: "https://google.com/",
    thumb: "book-my-event.png",
    problem:
      "The clients need to visit all the halls and event organisaers personally to get detailed comparision of the venues. Visiting the venues is time consuming and hectic in traffic. It causes loss of time and energy that can be used in other works.",
    solution:
      "We created a that lets users compare between the different venues and book the desired ones.",
    role: "Lead UI/UX designer, Frontend Develoepr",
  },
];

const renderPortfolios = () => {
  setInterval(() => {
    let worksListItem = "";
    let worksListElement = "";
    worksListElement = document.getElementById("works-list");

    if (!worksListElement.childNodes.length) {
      for (let i = 0; i < works.length; i++) {
        worksListItem += "<li>";
        worksListItem += "<figure>";
        worksListItem += '<img src="/assets/images/' + works[i].thumb + '">';
        worksListItem += "</figure>";
        worksListItem += "<h4>";
        worksListItem += works[i].title;
        worksListItem += "</h4>";
        worksListItem += "<p>";
        worksListItem += works[i].description;
        worksListItem += "</p>";
        worksListItem +=
          '<a href="#' +
          works[i].title.toLowerCase().replaceAll(" ", "-") +
          '">';
        worksListItem += "View Project";
        worksListItem += "</a>";
        worksListItem += "</li>";
      }

      worksListElement.innerHTML = worksListItem;
    }
  }, 500);
};
renderPortfolios();

const renderCaseStudy = () => {
  setInterval(() => {
    let caseStudyElements = "";
    let caseStudyContainer = "";
    caseStudyContainer = document.getElementById("case-study-content");

    works.forEach((portfolio) => {
      const titleSlug = portfolio["title"].toLowerCase().replaceAll(" ", "-");
      const urlLocation = window.location.hash.replace("#", "");

      if (!caseStudyContainer.childNodes.length && titleSlug === urlLocation) {
        caseStudyElements += "<div class='project-details'>";
        caseStudyElements += "<div class='project-summary'>";
        caseStudyElements += "<h1>" + portfolio["title"] + "</h1>";
        caseStudyElements += "<p>" + portfolio["description"] + "</p>";
        caseStudyElements += "<h3> Role </h3>";
        caseStudyElements += "<p>" + portfolio["role"] + "</p>";
        caseStudyElements += "</div>";
        caseStudyElements += "<figure>";
        caseStudyElements +=
          "<img src='/assets/images/" +
          portfolio["thumb"] +
          "' alt='Image " +
          portfolio["title"] +
          "' />";
        caseStudyElements += "</figure>";
        caseStudyElements += "</div>";

        caseStudyElements += "<div class='project-study'>";

        if (portfolio["problem"] !== "") {
          caseStudyElements += "<div class='problems'>";
          caseStudyElements += "<h3> Problem </h3>";
          caseStudyElements += "<p data-detail='problem'>";
          caseStudyElements += portfolio["problem"];
          caseStudyElements += "</p>";
          caseStudyElements += "</div>";
        }

        if (portfolio["solution"] !== "") {
          caseStudyElements += "<div class='solutions'>";
          caseStudyElements += "<h3> Solution </h3>";
          caseStudyElements += "<p data-detail='solution'>";
          caseStudyElements += portfolio["solution"];
          caseStudyElements += "</p>";
          caseStudyElements += "</div>";
        }

        caseStudyElements += "</div>";

        caseStudyContainer.innerHTML = caseStudyElements;
      }
    });
  }, 500);
};

renderCaseStudy();

console.log(renderCaseStudyView);
