import React from "react";
import './Contact us.css';

function ContactUs() {
    return (
        <div>


            <body>
                <section class="banner-bottom">
                    <div class="container py-md-5" style={{padding:"none"}}>
                        <h3 class="title-wthree mb-lg-5 mb-4 text-center" style={{color:"#db2d21"}}>Contact Us </h3>
                        <div class="row contact_information">
                            <div class="col-md-6">
                                <div class="contact_right p-lg-5 p-4">
                                    <form action="#" method="post">
                                        <div class="field-group">

                                            <div class="content-input-field">
                                                <input name="text1" id="text1" type="email" value="" placeholder="User Email" required=""/>
                                            </div>
                                        </div>
                                        <div class="field-group">

                                            <div class="content-input-field">
                                                <input name="text1" id="text3" type="text" value="" placeholder="User Phone" required=""/>
                                            </div>
                                        </div>
                                        <div class="field-group">
                                            <div class="content-input-field">
                                                <textarea placeholder="Your Message Here..." required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="content-input-field">
                                            <button type="submit" class="btn">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 contact_left p-4">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1874.8142584224145!2d73.77697167182771!3d19.98211906140189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1404d9a899%3A0x6366ca609dc432a2!2sSagar%20Sweets!5e0!3m2!1sen!2sin!4v1678183688345!5m2!1sen!2sin"></iframe>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                                <div class="mt-5 information-wthree">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-comments"></span> Communication</h4>
                                    <p class="cont-wthree-para mb-3 text-capitalize">for general queries, including property Sales and constructions, please email us at <a href="mailto:info@example.com">sagarsweet's@gmail.com</a></p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                                <div class="mt-5 information-wthree">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-life-ring"></span> Technical Support</h4>
                                    <p class="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>+91 7972227009</label></p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                                <div class="mt-5 information-wthree">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-map"></span> Others</h4>
                                    <p class="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>02532 - 471771</label></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </body>

        </div>
    );
}

export default ContactUs;