import * as Icon from 'react-bootstrap-icons';

const Footer= ()=>





<div class="container">
  <footer class="py-5">
    <div className='text-start my-3 d-flex justify-content-around w-25'>
    <Icon.Facebook className='h2 text-secondary'/>
    <Icon.Instagram className='h2 text-secondary'/>
    <Icon.Twitter className='h2 text-secondary' />
    <Icon.Youtube className='h2 text-secondary' />
    </div>
    <div class="row d-flex justify-content-around">

      <div class="col6 col-md-2 mb-3">
       
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Audio and Subtitles</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Media Center</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Privacy</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Contact Us</a></li>
          <button type='button' className='btn btn-outline-secondary text-white w-100 h-50 mt-4' >Service Code</button>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Audio Description</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Investor Relations</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Legal Norices</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
     
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Help Center</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Jobs</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Cookies Preferences</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
     
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Gift Cards</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Terms of Use</a></li>
          <li class="nav-item mb-2"><a href="#a" class="nav-link p-0 text-muted">Corporate Information</a></li>
        </ul>
      </div>


     

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
        <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
        <li class="ms-3"><svg class="bi" width="24" height="24"></svg></li>
      </ul>
    </div>
    </div>
  </footer>
</div>



export default Footer;