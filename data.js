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
    title: "Book My Event",
    description:
      "A conceptual mobile app that lets users compare different venues for their events.",
    link: "https://google.com/",
    thumb: "book-my-event.png",
    problem:
      "Business owner didn't had any online platform to showcase their activities and get the required attention for funding and volunteering. Kakshyalaya seeks to generate necessary funds through donations and manpower through volunteering.",
    solution:
      "We created a simple websie that allows the owner to showcase their activities. It helps the business to outline their project goals and seek volunteering services.",
    role: "Lead UI/UX designer, Frontend Develoepr",
  },
];

var worksListItem = "";
let worksListElement = "";
var hasRendered = false;

const renderPortfolios = setInterval(() => {
  worksListElement = document.getElementById("works-list");
  if (worksListElement && !hasRendered) {
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
        '<a href="#' + works[i].title.toLowerCase().replaceAll(" ", "-") + '">';
      worksListItem += "View Project";
      worksListItem += "</a>";
      worksListItem += "</li>";
    }

    worksListElement.innerHTML = worksListItem;
    hasRendered = true;
  }
}, 500);

setTimeout(() => {
  clearInterval(renderPortfolios);
}, 10000);

let caseStudyElements = "";
var caseStudyRendered = false;

const renderCaseStudy = setInterval(() => {
  works.forEach((portfolio) => {
    const titleSlug = portfolio["title"].toLowerCase().replaceAll(" ", "-");
    const urlLocation = window.location.hash.replace("#", "");

    if (!caseStudyRendered && titleSlug === urlLocation) {
      caseStudyElements += "<div class='project-details'>";
      caseStudyElements += "<div class='project-summary'>";
      caseStudyElements += "<h1>" + portfolio["title"] + "</h1>";
      caseStudyElements += "<p>" + portfolio["description"] + "</p>";
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

      document.getElementById("case-study-content").innerHTML =
        caseStudyElements;

      caseStudyRendered = true;
    }
  });
}, 500);
setTimeout(() => {
  clearInterval(renderCaseStudy);
}, 10000);
