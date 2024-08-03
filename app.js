function addItem() {
  const trashSvg = `<svg onclick="removeItem(event)" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.16666L12.5869 10.8501C12.4813 12.5576 12.4285 13.4114 12.0005 14.0253C11.7889 14.3287 11.5165 14.5849 11.2005 14.7773C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7766C4.46987 14.5838 4.19733 14.3272 3.98579 14.0232C3.55792 13.4084 3.5063 12.5534 3.40307 10.8435L3 4.16666" stroke="#6B6671" stroke-linecap="round"/>
<path d="M2 4.16668H14M10.7038 4.16668L10.2487 3.22783C9.9464 2.60418 9.7952 2.29236 9.53447 2.09788C9.47667 2.05474 9.4154 2.01637 9.35133 1.98314C9.0626 1.83334 8.71607 1.83334 8.023 1.83334C7.31253 1.83334 6.95733 1.83334 6.66379 1.98942C6.59873 2.02402 6.53665 2.06394 6.47819 2.10879C6.21443 2.31114 6.06709 2.63438 5.77241 3.28085L5.36861 4.16668" stroke="#6B6671" stroke-linecap="round"/>
<path d="M6.33337 11.5V7.5" stroke="#6B6671" stroke-linecap="round"/>
<path d="M9.66663 11.5V7.5" stroke="#6B6671" stroke-linecap="round"/>
</svg>
`;
  const inputValue = document.getElementById("input-value").value;
  const contentContainer = document.getElementById("content-container");

  if (inputValue != "") {
    const newChild = document.createElement("div");
    newChild.className = "content-item flex";
    newChild.innerHTML = `<p class="paragraph">${inputValue}</p>${trashSvg}`;

    contentContainer.appendChild(newChild);
  }
}

function removeItem(event) {
  let element = event.target;
  while (element && !element.classList.contains("content-item")) {
    element = element.parentNode;
  }

  element.parentNode.removeChild(element);
  shootWarning();
}

function shootWarning() {
  let warning = document.getElementById("warning");

  if (warning.classList.contains("hide")) {
    warning.classList.remove("hide");
    setTimeout(function () {
      warning.classList.add("hide");
    }, 1000);
  }
}
