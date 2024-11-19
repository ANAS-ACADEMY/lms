import React from 'react';
import '../Styles/Footer.css';

import googlePlay from '../Images/googlePlay.png';
import appGallery from '../Images/appGallery.png';
import star from '../Images/star.png';
import phone from '../Images/phone.png';
import x from '../Images/x.png';
import fb from '../Images/fb.png';
import multiLogo from '../Images/multilogo.png';
import anascoLogo from '../Images/anascoLogo.png';

function Footer() {
  return (
    <div className='footer-container'>

        <div className='top-container'>

            <div className='top-one'>
                <h2 className='top-one-title'>التدريب</h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://anasacademy.uk/training-222222/">التدريب</a>
                    <a className='top-one-item' href="https://anasacademy.uk/qc/">الشهادات الإحترافية</a>
                    <a className='top-one-item' href="https://anasacademy.uk/alumniunit/">وحدة الخريجين</a>
                </ul>
            </div>
            <div className='top-one'>
                <h2  className='top-one-title'>المنصات الإلكترونية</h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://anasacademy.uk/platform/"> منصة المتدرب</a>
                    <a className='top-one-item' href="https://anasacademy.uk/certificate/certificate-check.php">التحقق من الشهادات</a>
                    <a className='top-one-item'> منصة مناسبات</a>
                </ul>
            </div>
            <div className='top-one'>
                <h2 className='top-one-title'>الاستشارات </h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/">استشارات تعليمية</a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/"> استشارات فنية</a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/">استشارات التسويق الرقمى </a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/"> استشارات تقييم جودة الأعمال </a>
                </ul>
            </div>

            <div className='top-four'>

                <div className='top-four-stores'>
                    <p className='rate-desc'>الاًن متاح على</p>
                    <div className='stores-container'>
                        <a href="https://play.google.com/store/apps/details?id=uk.anasacademy.edu.edu_anas_academyy&pli=1"><img src={googlePlay} alt='googlePlay' className='googlePlay'/></a>
                        <a href="https://appgallery.huawei.com/app/C109021927"><img src={appGallery} alt='appGallery' className='appGallery'/></a>
                    </div>
                </div>

                <div className='top-four-rating'>
                    <p className='rate-desc'>جوجل (4.5 تقييمات) </p>
                    <ul className='stars-container'>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <span className='rate'> 4.5</span>

                    </ul>
                </div>

            </div>

            <div className='top-five'>
                <h2 className='top-one-title'>للتواصل معنا</h2>
                <div className='contact-buttons-container'>
                    <button className='contact-button'>
                        <a href="https://support.anasacademy.uk/" className='contact-button-text' > 
                            <img  src={phone} alt='phone' className='phone'/>
                            تواصل معنا 
                        </a>  
                    </button> 
                    <button className='contact-button'>
                        <a href="https://anasacademy.uk/brand-guide" className='contact-button-text'>
                            دليل الهوية البصرية لأكاديمية أنس للفنوان    
                        </a>
                    </button>           
                </div>
            </div>

        </div>

        <div className='bottom-container'>
            <div className='bottom-one'>
                <h2 className='bottom-one-title'>روابط سريعة</h2>
                <ul className='bottom-one-content'>
                    <li className='bottom-one-item'>أنسكو السعودية</li>
                    <li className='bottom-one-item'>أنسكو مصر </li>
                    <li className='bottom-one-item'> أنسكو بريطانيا</li>
                    <li className='bottom-one-item'> أنسكو الامارات</li>
                </ul>
            </div>
            <div className='bottom-one'>
                <h2  className='bottom-one-title'>مواقع أخرى </h2>
                <ul className='bottom-one-content'>
                    <li className='bottom-one-item'> ANAS Academy</li>
                    <li className='bottom-one-item'>Acadima college </li>
                    <li className='bottom-one-item'> Neo Bridge center </li>
                </ul>
            </div>
            <div className='bottom-three'>
                <h2 className='bottom-one-title'>المسؤلية الاجتماعية </h2>
                <ul className='bottom-one-content'>
                    <li className='bottom-one-item'> مسؤليتنا الإجتماعية في السعودية</li>
                    <li className='bottom-one-item'>  مسؤليتنا الإجتماعية في مصر</li>
                    <li className='bottom-one-item'>  مسؤليتنا الإجتماعية في بريطانيا </li>
                    <li className='bottom-one-item'> مسؤليتنا الإجتماعية في الامارات </li>
                </ul>
            </div>

            <div className='bottom-four'>
                <p className='bottom-four-title'>  تواصل معنا</p>
                <ul className='logos-main-container'>
                    <li className='logo-container'><img src={x} alt='x' className='logo'/></li>
                    <li className='logo-container'><img src={x} alt='x' className='logo'/></li>
                    <li className='logo-container'><img src={x} alt='x' className='logo'/></li>
                    <li className='logo-container'><img src={fb} alt='fb' className='logo'/></li>
                    <li className='logo-container'><img src={fb} alt='fb' className='logo'/></li>
                    <li className='logo-container'><img src={fb} alt='fb' className='logo'/></li>
                </ul>
            </div>

            <div className='bottom-five'>
                <h2 className='bottom-one-title'> الإعتمادات </h2>
                <img src={multiLogo} alt='multiLogo' className='multiLogo'/>
            </div>

        </div>

        <div className='credits-section'>
            <img src={anascoLogo} alt='anascoLogo' className='anascoLogo'/>
            <span className='credits-text'>جميع الحقوق محفوطة لصالح مجموعة  أنسكو @ 2024</span>
            <div className='credits-left'>
                <a className='credits-left-text' href="https://anasacademy.uk/privacy/">سياسة الخصوصية </a>
                <span>|</span>
                <a className='credits-left-text' href="https://anasacademy.uk/termsandconditions/">الشروط والأحكام</a>
            </div>
        </div>

    </div>
  );
}

export default Footer;
