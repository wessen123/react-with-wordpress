import React from "react";
import { Link } from "@reach/router";
class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home
           
          </Link>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
        )
    }
}


export default Navbar;