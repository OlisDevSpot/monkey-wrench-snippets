setTimeout(() => {
  const details = document.getElementsByTagName("details")[0];
  updateSectionDescription(details);
  updateNumbers(details);
}, 2000);

function findIndexOfRate(string) {
  const index = string.indexOf("2.99") || string.indexOf("3.5");
  return index
}

function updateSectionDescription(element) {
  const description = element.querySelectorAll(".flex-direction-column.display-flex.font-size-inherit")[2];
  const text = description.innerText;
  const loc = findIndexOfRate(text);
  const textArr = text.split(" ");
  const rate = textArr.slice(-2)[0].replace(",", "");
  description.innerHTML = `<p>LightReach Approved Rate: <span><del>4.5%</del></span> <b>${rate}</b></p>`;
}

function updateNumbers(element) {
  const numbersDiv = element.querySelector(".p-top-0.p-right-0.p-bottom-lg.p-left-0.flex-direction-column.display-flex.font-size-inherit");
  const pricePerKWHDiv = numbersDiv.querySelectorAll(":scope > div")[1];
  const totalPaymentsDiv = numbersDiv.querySelectorAll(":scope > div")[4];

  const pricePerKWH = pricePerKWHDiv.querySelectorAll("div")[1].querySelectorAll("div")[1];
  pricePerKWH.innerText ="0.19";

  const totalPaymentsText = totalPaymentsDiv.querySelectorAll("div")[1].querySelectorAll("div")[0];
  console.log(totalPaymentsDiv);
  totalPaymentsText.innerText ="Eligible cash-back energy credits";

  const projectPriceText = numbersDiv.querySelectorAll(":scope > div")[7].querySelectorAll("div")[1].querySelectorAll("div")[1].innerText.replace("$", "").replace(",", "");
  const projectPrice =  parseInt(projectPriceText);
  console.log(projectPrice);

  const totalMoneyBack = totalPaymentsDiv.querySelectorAll("div")[1].querySelectorAll("div")[1];
  totalMoneyBack.innerText = calcMoneyBack(projectPrice);

  const pricePerKW = numbersDiv.querySelectorAll(":scope > div")[2];
  pricePerKW.remove();
  numbersDiv.querySelectorAll(":scope > div")[4].remove();
  numbersDiv.querySelectorAll(":scope > div")[4].remove();
  numbersDiv.querySelectorAll(":scope > div")[4].remove();
}

function calcMoneyBack(projectPrice) {
  if (projectPrice <30000) {
    return "$582"
  } else if (projectPrice < 40000) {
    return "$782"
  } else if (projectPrice < 50000) {
    return "$982"
  } else {
    return "$1,013"
  }
}
