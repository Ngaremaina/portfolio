function myBackground(title) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(title).style.display = "block";   
  }

  // const parent = document.createElement('div');
  // parent.setAttribute("class", "parent-container");

  // const container = document.createElement('div');
  // container.setAttribute("class", "bottom-container");

  // const welcome = document.createElement('h1');
  // welcome.setAttribute("id", "copyright");
  // welcome.textContent = "Welcome to my Portfolio";

  // document.body.append(parent);
  // parent.appendChild(container);
  // container.appendChild(welcome);


