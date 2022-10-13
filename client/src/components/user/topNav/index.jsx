import React from "react";
import  "../topNav/styles.css";

const TopNav = ()=>{

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return(  
<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Online Library</a>
  
</div>

    )
}

export default TopNav;