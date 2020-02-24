// ---Work 1

function getNodesTexts(selector) {
  const elementsList = document.querySelectorAll(selector);
  const elementsTextsList = [];
  for (const element of elementsList) {
    elementsTextsList.push(element.innerText);
  }
  return elementsTextsList;
}

function randomSortElementsTexts(targetArr) {
  return [...targetArr].sort(() => Math.random() - 0.5);
}

function constructElementsMarkup(tag, className, textsList) {
  return textsList.reduce((markupStr, element) => {
    const liMarkup = `<${tag} class="${className}">${element}</${tag}>`;
    markupStr += liMarkup;
    return markupStr;
  }, "");
}

function replaceMarkup(selector, markupString) {
  const element = document.querySelector(selector);
  element.innerHTML = markupString;
}

function firstTaskManager() {
  const SELECTOR_STR = "randomListItem";
  setInterval(() => {
    const liElementsTextsList = getNodesTexts(`.${SELECTOR_STR}`);
    const sortedTextsList = randomSortElementsTexts(liElementsTextsList);
    const liMarkupString = constructElementsMarkup(
      "li",
      SELECTOR_STR,
      sortedTextsList
    );

    replaceMarkup(".randomList", liMarkupString);
  }, 5000);
}

// ---Work 2

const screenBrowserInfo = () => {
  const browserInfo = {
    userScreenWidth: screen.availWidth, //---возвращает ширину экрана в px
    userScreenHeight: screen.availHeight, //----возвращает высоту экрана в px
    browserUserAgent: navigator.userAgent, //----Содержит информацию о браузере
    userPlatform: navigator.platform ///---указывает платформу браузера
  };
  return browserInfo;
};

const acceptInfoPage = browserInfoPage => {
  const elementInfo = document.querySelector("#browserInfo").children; //---.children----возвращает коллекцию дочерних элементов
  const elementNewFacts = ({} = browserInfoPage);
  for (let i = 0; i < elementInfo.length; ) {
    for (prop in elementNewFacts) {
      const tempStr = elementInfo[i].innerText.replace(
        "unknown",
        `${elementNewFacts[prop]}`
      );
      elementInfo[i].innerText = tempStr;
      i++;
    }
  }
  return elementInfo;
};

const secondTaskManager = () => {
  acceptInfoPage(screenBrowserInfo());
  setTimeout(() => {
    threeTaskManager("h3");
  }, 5000);
};
setTimeout(() => {
  secondTaskManager();
}, 4600);

// ---Work 3

const threeTaskManager = headName => {
  const header = document.querySelector(headName);
  return (header.outerHTML = "<h1>NEW LIST HEADER</h1>");
};

// ---Work 4

const dataTaskManager = () => {
  const nav = document.querySelector("nav");
  const currentDate = new Date();
  const dateArr = currentDate.toString().split(" ");
  dateArr.length = 4;
  nav.innerText = dateArr.join(" ");
  nav.setAttribute("style", "color:grey");
};

const main = () => {
  firstTaskManager();
  dataTaskManager();
};

main();
//---- setAttribute добавляет новый или изменяет значение атрибута в текущем элементе.
