import createElement from "./createHTMLElements";

const headerBottom = () => {
  // Selecting DOM Elements
  const container = document.querySelector(".container");
  const content = document.querySelector("#content");

  //Header bottom div being created in the Home page
  const headerBottom = createElement("div", ["headerBottom"], {});
  container.appendChild(headerBottom);
  content.appendChild(container);

  const taglineText = createElement("h1", ["taglineText"], {});
  taglineText.textContent = "The Only Thing We Love More Than Food, is YOU!";
  headerBottom.appendChild(taglineText);
  container.appendChild(headerBottom);

  document.body.appendChild(content);
};

export default headerBottom;
