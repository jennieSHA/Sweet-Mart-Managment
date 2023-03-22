import './Footer.css';
import four from "../images/four.jpg"
import five from "../images/five.jpeg"
import six from "../images/six.jpeg"
import seven from "../images/seven.jpg"
import eight from "../images/eight.jpg"
import nine from "../images/nine.jpg"
function Footer() {

    return(
        <footer class="text-center text-white" style={{"background-color": "white"}}>
            <div class="container p-4">
                <section class="">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={four} class="w-100" alt='img'/>
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={five} class="w-100" />
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={six} class="w-100"/>
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={seven} class="w-100"/>
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={eight} class="w-100"/>
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                                <img src={nine} class="w-100"/>
                                <a href="#!">
                                    <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.2)"}}>

                                     </div>
                                </a>
                            </div>
                         </div>
            </div>
        </section>

  </div>

            


  <div class="text-center p-3" style={{"background-color": "black"}}>
   <div></div>
       <div class="container">
  <div class="row">
    <div class="col" style={{paddingLeft:"160px"}}>
       © 2023 SAGAR SWEET MART -
                    <a style={{ color: "yellow" }} > Created by : CDAC Nashik </a>
    </div>
                           <div id='soc' style={{color:"#999997"}}><p id='so'>Connect us on -</p> </div>
                        <div>
                            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                        
                            <div class="social">
                           <a href='https://www.facebook.com/sagarsweets.co.in/' > <i class="fa-brands fa-square-facebook"></i></a>
                         <a href='https://www.instagram.com/sagarsweets.co.in/?hl=en'>  <i class="fa-brands fa-instagram"></i></a>
                           <a href='https://twitter.com/home'> <i class="fa-brands fa-square-twitter"></i></a>
                            </div>
                            
    </div>
    
  </div>
</div>         
  </div>


</footer>
    );
}

export default Footer;