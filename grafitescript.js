function homeChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;

    if(document.body.clientWidth > document.body.clientHeight){
      console.log("You're dumb.")
    }

    if((document.body.clientWidth > document.body.clientHeight) && (sessionStorage.getItem("varKey") != "Desktop")){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./index.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && (sessionStorage.getItem("varKey") != "Mobile")){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobilehome.html";
      console.log("c");
    }
  }, 100);
  window.onbeforeunload = function(){
    memory = "asdf";
    sessionStorage.setItem("varkey", memory);
  };
}

/*function contactChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafitecontactus.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileContactUs.html";
      console.log("c");
    }
  }, 100);
}*/

/*function donationRequestChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafitedonationrequestform.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileDonationRequestForm.html";
      console.log("c");
    }
  }, 100);
}*/

function missionChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafiteourmission.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileOurMission.html";
      console.log("c");
    }
  }, 100);
}

function servicesChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafiteservices.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileServices.html";
      console.log("c");
    }
  }, 100);
}

function teamChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafiteteam.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileTeam.html";
      console.log("c");
    }
  }, 100);
}

function eightballChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;

    if(document.body.clientWidth > document.body.clientHeight){
      console.log("You're dumb.")
    }

    if((document.body.clientWidth > document.body.clientHeight) && (sessionStorage.getItem("varKey") != "Desktop")){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafiteeightball.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && (sessionStorage.getItem("varKey") != "Mobile")){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileeightball.html";
      console.log("c");
    }
  }, 100);
  window.onbeforeunload = function(){
    memory = "asdf";
    sessionStorage.setItem("varkey", memory);
  };
}
/*function tutoringFormChecker(){
  window.setInterval(function(){
    console.log("a");
    console.log(localStorage.getItem("varKey"));
    let memory;
    if((document.body.clientWidth > document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Desktop"){ //Desktop
      memory = "Desktop";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./grafitetutoringrequestform.html"
      console.log("b");
    }else if((document.body.clientWidth < document.body.clientHeight) && sessionStorage.getItem("varKey") !== "Mobile"){ //Mobile
      memory = "Mobile";
      sessionStorage.setItem("varKey", memory);
      window.location.href = "./mobileTutoringRequestForm.html";
      console.log("c");
    }
  }, 100);
}*/


  /*window.setInterval(function(){
    if(document.body.clientWidth > document.body.clientHeight && memory == "Desktop"){ //Desktop
      document.open();
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      document.write (
        "<!DOCTYPE html>" + "<html>" + "<head>" +
        "<link href='./grafitestyles.css' type='text/css' rel='stylesheet'>" +
        "<script src='./grafitescript.js' type = 'text/javascript'>" + "</script>" +
        "<title>" + "Grafite | Home" + "</title>" +
      "</head>" +
      "<body style='background: black;'>" +
        "<div id='navbarbackground'>" +
        "</div>" +
        "<button id='homebutton' href='./home.html'>" + "Grafite" + "</button>" +
        "<table id='navbar'>" +
          "<tr>" +

          "</tr>" +
        "</table>" +
        "<img src='./images/twitter_logo.png' id='twitterlogo'>" +
        "<img src='./images/facebook_logo.png' id='facebooklogo'>" +
        "<img src='./images/instagram_logo.png' id='instagramlogo'>" +
        "<button id='donatebutton'>" + "Donate Now" + "</button>" +
        "<img src='./images/grafite_logo' id='grafitelogo' href='./index.html'>" +
        "<div id='homepagemessage'>" +
          "<div style='margin-top: 10%; font-family: Poppins, sans-serif; font-weight: bold; width: 50vw; margin: 10% auto 0 auto; font-size: 2vw;'>" + "Get in touch with us!" + "</div>" +
          "<div style='font-family: Poppins, sans-serif; width: 50vw; margin: 0 auto;'>" + "Here at Grafite, we want to work closely with the students we help and our donors. Contact us personally if you have questions our website doesn't answer! We will be glad to answer any questions." + "</div>" +
        "</div>" + "</body>" + "</html>"
      );
      let buttonText = ['Our Mission', 'Team', 'Services','Contact Us'];
      let buttonLink = ['../grafiteourmission.html', '../grafiteteam.html', '../grafiteservices.html', '../grafitecontactus.html'];
      let tr = document.getElementsByTagName('tr');
      for(i = 0; i < buttonText.length; i++){
        let td = tr[0].appendChild(document.createElement('td'));
        td.className = 'navbutton';
        td.addEventListener('click', () => {
          window.location.href = buttonLink[i];
        });
        td.innerHTML = buttonText[i];
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      memory = "Mobile";
      console.log("desktop")
    }else if(document.body.clientWidth < document.body.clientHeight && memory == "Mobile"){//Mobile
      document.open();
      document.write("This is a mobile page");
      memory = "Desktop";
      console.log("mobile");
    }
  }, 20)
}*/

/*
<div id="navbarbackground">
</div>
<button id="homebutton" href="./home.html">Grafite</button>
<table id="navbar">
  <tr>
    <td class="navbutton" onclick="location.href='./grafiteourmission.html'">Our Mission</td>
    <td class="navbutton" onclick="location.href='./grafiteteam.html'">Team</td>
    <td class="navbutton" onclick="location.href='./grafiteservices.html'">Services</td>
    <td class="navbutton" onclick="location.href='./grafitegetinvolved.html'">Contact Us</td>
  </tr>
</table>
<img src="./images/twitter_logo.png" id="twitterlogo">
<img src="./images/facebook_logo.png" id="facebooklogo">
<img src="./images/instagram_logo.png" id="instagramlogo">
<button id="donatebutton">Donate Now</button>
<img src="./images/grafite_logo" id="grafitelogo">
<div id="homepagemessage">
  <div style="margin-top: 10%; font-family: 'Poppins', sans-serif; font-weight: bold; width: 50vw; margin: 10% auto 0 auto; font-size: 2vw;">Get in touch with us!</div>
  <div style="font-family: 'Poppins', sans-serif; width: 50vw; margin: 0 auto;">Here at Grafite, we want to work closely with the students we help and our donors. Contact us personally if you have questions our website doesn't answer! We will be glad to answer any questions.</div>
</div>
*/
