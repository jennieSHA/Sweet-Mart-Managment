import { Link } from "react-router-dom";
import eleven from '../images/eleven.jpg'
import twelve from '../images/twelve.jpg'
import thretin from '../images/thretin.jpg'
import fortyin from '../images/fortyin.jpg'
import fifteen from '../images/fifteen.jpg'
function About() {
    return (
                <div><br />
            <div class="profileclass container text-center">
                <img src={eleven} class="card-img-top" alt="img"s style={{width:"500px",borderRadius:"10%"}} />
                {/* <h3 class="profile">Profile</h3> */}
                {/* <p class="info">In the world of architectural hardware solutions, Mahesh is a name that everyone associates with security, trust, and elegance. As one of the leading global manufacturers of door-ware, locking mechanism and glass fixtures and fittings, the journey towards earning worldwide recognition is one that has taken constant dedication to innovation, adhering to quality, and a passion for excellence.</p> */}
            </div>
            <br />
            <div class="container text-center"style={{"fontFamily":"Serif"}}>
                <h3>SPECIALITY</h3>
                <p style={{ "text-align": "justify", fontSize: "18px" }}>The quality and taste of our sweets and namkeen is without a doubt our biggest differentiator. We have achieved it with our comprehensive infrastructure, skilled manpower, semiautomatic manufacturing unit situated at easily accessible points. The hygienic handling and distribution of fresh edibles is ensured by the strategic locations of our distribution hubs.</p>
            </div>
            <br />


            
<div class="container">
  <div class="row">
    <div class="col">
       <div class="container text-center">
                <img src={twelve} style={{ width: "300px", height: "200px" }} />
            </div>
    </div>
    <div class="col">
      <div class="container text-center">
                <img src={thretin} style={{ width: "300px", height: "200px" }} />
            </div>
    </div>
    <div class="col">
       <div class="container text-center">
                <img src={fortyin} style={{ width: "300px", height: "200px" }} />
            </div>
    </div>
  </div>
</div>
            <br />
            <div class="container text-center">
                <h3 style={{"fontFamily":"Serif"}}>THE STORE</h3>
                <p style={{ "text-align": "justify", fontSize: "20px" ,"fontFamily":"Sofia"}}>The sweet shop, is a place you come to get lost in the wonder of mithai. From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it all in one of our mithai tours.</p>
            </div>
            <br/>
            
            <div id="a1" class="col" style={{marginLeft:"250px"}}>
                        <img src={fifteen} />
                    </div>
                    {/* <div class="col">
                        <img src="../images/.jpg" />
                    </div> */}
                
            <br />
            <br />
            <div class="container text-center">
  <h3 style={{"fontFamily":"Serif"}} >Quality Policy</h3>

Our quality check begins right from the moment we choose our raw material. We carefully select and test our raw materials daily at our in-house lab. The entire process of manufacturing is keenly supervised from pre to post production. Utmost care is taken to ensure the guarantee of quality, hygiene, and taste. We have engineered a unique technique and process to fulfill the demand for high quantity production while maintaining the parameters for taste and quality
            </div>
            
            
        </div>
        
    );
}
export default About;
