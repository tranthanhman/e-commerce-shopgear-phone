import React from 'react';
import Grid from './Grid';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logofull.png';
import ContactIcon from './ContactIcon';
const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/blog",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];

function Footer() {
  
  return (
    <div className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={50}>
        <div className="footer__info">
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0968894960</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0968894960</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0968894960</strong>
              </p>
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Về DNS</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div  className="footer__info__logo">
              <Link to="/">
               <img src={Logo}  alt="logo full"/>
              </Link>
            </div>
            <ContactIcon
              facebook="bx bxl-facebook-square"
              instagram="bx bxl-instagram"
              github="bx bxl-github"
              twitter="bx bxl-twitter"
              google="bx bxl-google"
            />
            <div className="footer__paypal">
              <img
                src="https://cdn.tgdd.vn/Files/2019/07/16/1179841/636629240000820088-760x367.jpg"
                alt=""
              />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;