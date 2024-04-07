import React from 'react';
import NavbarProfile from '@/components/navbarprofile';
import Image from "next/legacy/image";
import prof from '@/asssets/img/louis.png';
import linkd from '@/asssets/img/linkedin.png';
import mail from '@/asssets/img/mail.png';
import phone from '@/asssets/img/phone.png';
import loc from '@/asssets/img/loc.png';
import insta from '@/asssets/img/instagram.png';
import Footer from '@/components/footer';
import { Button } from 'react-bootstrap';



const ProfilePerusahaan = () => {
  return (
    <>
      <NavbarProfile/>
      <div className="container">
        <div className="card rounded" style={{ marginTop: "40px" }}>
          <div className="rounded" style={{ backgroundColor: "#5E50A1", height: "200px", width: "1300px", zIndex: "0", position: "absolute" }}></div>
          <div className="d-flex justify-content-center" style={{ zIndex: "1", position: "relative", marginTop: "120px" }}>
            <Image src={prof} alt="louis" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <h3>PT. Martabat Jaya Abadi</h3>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>Financial</h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Image src={loc} alt="location" />
          </div>
          <div className="d-flex mt-4">
            <div style={{ textAlign: "center" }}>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</h5>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-4">  
              <Button style={{ color: "white", backgroundColor: "#5E50A1" }}>Edit Profile</Button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={mail} alt="mail" /> martabatjaya@gmail.com
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={insta} alt="instagram" /> martabat_jaya
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={phone} alt="phone" /> 021-2990-0056
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={linkd} alt="mail" /> MartabatJaya
            </h5>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProfilePerusahaan
