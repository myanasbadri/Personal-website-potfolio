import navicon1 from '../assents/nav-icon1.svg';
import navicon2 from '../assents/nav-icon2.svg';
import navicon3 from '../assents/nav-icon3.svg';
import navicon4 from '../assents/icons8-github.svg';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


export const Footer =()=>{
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return(
        <>
        <div className="footer">
            <div className="container-footer" data-aos="zoom-in-down">
                <h1>
                    Start a project
                </h1>
                <div className="p-footer">
                    <p className="text-center">
                        Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                    </p>
                </div>
                <div className="bnt-footer justify-content-center "><a href="#">let's do this</a></div>
            </div>
        </div>
        <div className="copyright text-center d-flex justify-content-center align-items-center">
                <a href="#home" className="footer-home" >An aS</a>
                <div className="container-copyright" data-aos="zoom-in-right">
                    <div className="myacconts" data-aos="zoom-in-left">
                    <span className="navbar-text d-flex align-items-center justify-content-center" >
                        <div className="social-icon me-50">
                            <a href="#"><img src={navicon1} alt=""/></a>
                            <a href="#"><img src={navicon2} alt=""/></a>
                            <a href="#"><img src={navicon3} alt=""/></a>
                            <a href="#"><img src={navicon4} alt=""/></a>
                        </div>
                        
                    </span>
                    <div className="horizontal-line"></div>
                    </div>
                    <div className='copyright-anas'>
                        <ul>
                            <il className='link-copy'>© 2024 AnaS. All rights reserved.</il>
                            <il> <a href='#' className='link-copy'>Privacy Policy</a> </il>
                            <il> <a href='#'className='link-copy'>Terms and Conditions</a> </il>
                            <il> <a href='#'className='link-copy'>Cookie Policy</a> </il>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Footer;