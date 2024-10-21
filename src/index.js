function onHamburgerClick() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}

function openContent(event, contentId) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(contentId).style.display = "block";
  event.currentTarget.className += " active";
}

function onAccordianClick(event) {
  const panel = event.target.nextElementSibling;

  const panels = document.getElementsByClassName("panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
  panel.style.display = "block";
}
