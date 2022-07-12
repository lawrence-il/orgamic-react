import { FC } from "react";
import { Link } from "react-router-dom";

import logo from "./logo-w.png";

import "./../../styles/social.sass";
import "./sass/footer.sass";
import "./sass/footer-media.sass";

const Footer:FC = () => {
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__wrapper">
                        <div className="footer__desc">
                            <Link to={"/"} className="footer__logo">
                                <img src={logo} alt="logo" />
                            </Link>
                            <div className="footer__txt">
                                There are many variations of 
                                passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form.      
                            </div>
                            <div className="social">
                                <a className="social__icon-link" href="/">
                                    <svg  width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="social__icon"d="M4.55 7.475H6.175L6.825 4.875H4.55V3.575C4.55 2.9055 4.55 2.275 5.85 2.275H6.825V0.0910001C6.6131 0.0630501 5.81295 0 4.96795 0C3.2032 0 1.95 1.07705 1.95 3.055V4.875H0V7.475H1.95V13H4.55V7.475Z" fill="#CCCCCC"/>
                                    </svg>
                                </a>
                                <a className="social__icon-link" href="/">
                                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="social__icon"d="M14.3536 1.30582C13.8469 1.52995 13.3096 1.67715 12.7594 1.74254C13.3393 1.39571 13.7734 0.849859 13.9806 0.206713C13.4364 0.530605 12.8397 0.757594 12.2178 0.880381C11.8001 0.433423 11.2464 0.136999 10.6428 0.037191C10.0392 -0.062617 9.41956 0.0397836 8.88018 0.328473C8.3408 0.617163 7.91191 1.07597 7.66018 1.63356C7.40845 2.19115 7.34799 2.81628 7.4882 3.41178C6.38452 3.35646 5.30481 3.06965 4.31917 2.56997C3.33352 2.07029 2.46399 1.3689 1.767 0.511357C1.52029 0.935104 1.39065 1.41681 1.39134 1.90714C1.39134 2.86953 1.88116 3.71974 2.62585 4.21752C2.18515 4.20365 1.75415 4.08464 1.36878 3.8704V3.90492C1.36891 4.54586 1.5907 5.16704 1.99655 5.66313C2.40239 6.15922 2.96731 6.49968 3.59553 6.6268C3.18643 6.73766 2.75746 6.754 2.34111 6.67459C2.51824 7.22629 2.86346 7.70878 3.32845 8.05452C3.79343 8.40025 4.3549 8.59191 4.93424 8.60267C4.35845 9.05487 3.69919 9.38916 2.99413 9.5864C2.28907 9.78365 1.55204 9.84 0.825195 9.75222C2.09401 10.5682 3.57104 11.0014 5.07959 11C10.1855 11 12.9778 6.77016 12.9778 3.10182C12.9778 2.98236 12.9744 2.86156 12.9691 2.74342C13.5126 2.35061 13.9817 1.86401 14.3543 1.30648L14.3536 1.30582Z" fill="#CCCCCC"/>
                                    </svg>
                                </a>
                                <a className="social__icon-link" href="/">
                                    <svg  width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="social__icon"d="M6.85449 0C8.62054 0 8.84089 0.00649996 9.53379 0.039C10.226 0.0715 10.6973 0.18005 11.112 0.34125C11.541 0.50635 11.9024 0.72995 12.2638 1.0907C12.5943 1.41563 12.8501 1.80868 13.0132 2.2425C13.1738 2.65655 13.283 3.12845 13.3155 3.8207C13.346 4.5136 13.3545 4.73395 13.3545 6.5C13.3545 8.26605 13.348 8.4864 13.3155 9.1793C13.283 9.87155 13.1738 10.3428 13.0132 10.7575C12.8505 11.1916 12.5947 11.5847 12.2638 11.9093C11.9388 12.2397 11.5457 12.4954 11.112 12.6587C10.6979 12.8193 10.226 12.9285 9.53379 12.961C8.84089 12.9915 8.62054 13 6.85449 13C5.08844 13 4.86809 12.9935 4.17519 12.961C3.48294 12.9285 3.01169 12.8193 2.59699 12.6587C2.163 12.4959 1.76988 12.2401 1.44519 11.9093C1.11461 11.5844 0.858848 11.1914 0.695742 10.7575C0.534542 10.3434 0.425992 9.87155 0.393492 9.1793C0.362942 8.4864 0.354492 8.26605 0.354492 6.5C0.354492 4.73395 0.360992 4.5136 0.393492 3.8207C0.425992 3.1278 0.534542 2.6572 0.695742 2.2425C0.858396 1.80842 1.11421 1.41526 1.44519 1.0907C1.76998 0.76 2.16307 0.504224 2.59699 0.34125C3.01169 0.18005 3.48229 0.0715 4.17519 0.039C4.86809 0.00844996 5.08844 0 6.85449 0ZM6.85449 3.25C5.99254 3.25 5.16589 3.59241 4.5564 4.2019C3.9469 4.8114 3.60449 5.63805 3.60449 6.5C3.60449 7.36195 3.9469 8.1886 4.5564 8.7981C5.16589 9.40759 5.99254 9.75 6.85449 9.75C7.71645 9.75 8.5431 9.40759 9.15259 8.7981C9.76208 8.1886 10.1045 7.36195 10.1045 6.5C10.1045 5.63805 9.76208 4.8114 9.15259 4.2019C8.5431 3.59241 7.71645 3.25 6.85449 3.25ZM11.0795 3.0875C11.0795 2.87201 10.9939 2.66535 10.8415 2.51298C10.6891 2.3606 10.4825 2.275 10.267 2.275C10.0515 2.275 9.84484 2.3606 9.69247 2.51298C9.54009 2.66535 9.45449 2.87201 9.45449 3.0875C9.45449 3.30299 9.54009 3.50965 9.69247 3.66202C9.84484 3.8144 10.0515 3.9 10.267 3.9C10.4825 3.9 10.6891 3.8144 10.8415 3.66202C10.9939 3.50965 11.0795 3.30299 11.0795 3.0875ZM6.85449 4.55C7.37166 4.55 7.86765 4.75545 8.23335 5.12114C8.59905 5.48684 8.80449 5.98283 8.80449 6.5C8.80449 7.01717 8.59905 7.51316 8.23335 7.87886C7.86765 8.24455 7.37166 8.45 6.85449 8.45C6.33732 8.45 5.84133 8.24455 5.47563 7.87886C5.10994 7.51316 4.90449 7.01717 4.90449 6.5C4.90449 5.98283 5.10994 5.48684 5.47563 5.12114C5.84133 4.75545 6.33732 4.55 6.85449 4.55Z" fill="#CCCCCC"/>
                                    </svg>
                                </a>
                                <a className="social__icon-link" href="/">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="social__icon" d="M3.24322 1.44509C3.24303 1.82816 3.09067 2.19546 2.81967 2.46619C2.54866 2.73693 2.1812 2.88892 1.79813 2.88873C1.41507 2.88854 1.04776 2.73618 0.777026 2.46517C0.506291 2.19417 0.354301 1.82671 0.354492 1.44364C0.354684 1.06057 0.507041 0.693269 0.778047 0.422534C1.04905 0.151798 1.41651 -0.000191354 1.79958 1.80807e-07C2.18265 0.000191715 2.54995 0.152549 2.82069 0.423555C3.09142 0.694562 3.24341 1.06202 3.24322 1.44509ZM3.28655 3.95828H0.397823V13H3.28655V3.95828ZM7.85074 3.95828H4.97646V13H7.82186V8.25526C7.82186 5.61208 11.2667 5.36654 11.2667 8.25526V13H14.1193V7.2731C14.1193 2.81723 9.02068 2.98333 7.82186 5.17155L7.85074 3.95828Z" fill="#CCCCCC"/>
                                    </svg>
                                </a>
                            </div>    
                        </div>
                        <div className="footer__quick-link">
                            <h3 className="footer__quick-link-title">
                                Quick Link      
                            </h3>
                            <nav className="footer__quick-link-list">
                                <Link to={"/"}>Home</Link>
                                <Link to={"about"}>About Us</Link>  
                            </nav> 
                        </div>    
                    </div>
                    <div className="footer__official-info">
                        <h3 className="footer__official-info-title">
                            Official Info
                        </h3>
                        <nav className="footer__contacts">
                            <div className="footer__address">
                                30 Commercial <br />
                                <span>Road Fratton, Australia</span>
                            </div>
                            <a className="footer__tel" href="tel:+18884521829">
                                1-888-452-1829
                            </a>
                        </nav>
                        <div className="footer__open-hours">
                            <h3 className="footer__open-hours-subtitle">Open Hours:</h3>
                            <div className="footer__open-hours-text">
                                Mon – Sat: 8 am – 5 pm,
                                Sunday: CLOSED
                            </div>    
                        </div>
                    </div>
                </div>    
            </div>
            <div className="footer__line"></div>
            <div className="footer__copyright">
                Copyright © 2021, Orgamic. All Rights Reserved.
            </div>         
        </footer>
    );
};

export default Footer;