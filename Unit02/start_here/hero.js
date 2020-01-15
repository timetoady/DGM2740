let w = window.innerWidth
function alter() {
    if (w <= 1200) {
    return "Hero Image";
  } else {
    return "Hero\nImage";
  }
}

document.querySelector("#heroText").innerText = `${alter()}`;