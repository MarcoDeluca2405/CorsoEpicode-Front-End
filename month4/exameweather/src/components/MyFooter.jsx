import { Link } from "react-router-dom"
import * as Icon  from 'react-bootstrap-icons';

const MyFooter = () =>{

    return(

        <div class="container-fluid myFooterBanner">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-0 border-top">
          <div class="col-md-4 d-flex align-items-center">

            <Link to="/">
            <img className="myImg2" src="https://cdn.pixabay.com/photo/2014/04/03/00/39/sun-308967_960_720.png" alt="sun" />
            </Link>
            <span class="mb-3 mb-md-0 text-dark">© 2022 Company, Inc</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3 "><a class="text-muted" href="https://twitter.com/?lang=it"><Icon.Twitter className="icon" /> </a></li>
            <li class="ms-3 "><a class="text-muted" href="https://www.instagram.com/"><Icon.Instagram className="icon"/></a></li>
            <li class="ms-3 "><a class="text-muted" href="https://www.facebook.com/"><Icon.Facebook  className="icon"/></a></li>
          </ul>
        </footer>
      </div>

    )

}


export default MyFooter