function showNav() {
    let x = document.getElementsByClassName('nav-links');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  console.log(showNav());