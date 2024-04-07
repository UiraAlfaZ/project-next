import React from 'react';
import { Button } from 'react-bootstrap';
import Image from "next/legacy/image";
import g1 from '@/asssets/img/pict1.png';
import g2 from '@/asssets/img/pict2.png';
import g3 from '@/asssets/img/pict3.png';
import ylwcheck from '@/asssets/img/chechlistyellow.png';
import blucheck from '@/asssets/img/checklistblue.png';
import NavbarLog from '@/components/navbarlog';
import Footer from '@/components/footer';

const LandingPages = () => {
  return (
    <>
    <NavbarLog/>
      <div className="container">
        <div className="row" style={{ marginTop: "147px" }}>
          <div className="col-6" style={{ paddingTop: "136px" }}>
            <h2>Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
            <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <Button className="mt-4" style={{ width: "210px", height: "63px" }}>
              Mulai Dari Sekarang
            </Button>
          </div>
          <div className="col-6">
            <Image src={g1} alt="gambar1" style={{ marginLeft: "130px" }} />
          </div>
        </div>
        <div className="row flex" style={{ marginTop: "152px" }}>
          <div className="col-sm-12 col-md-10 col-lg-7">
            <Image src={g2} alt="gambar2" />
          </div>
          <div className="col-sm-12 col-md-2 col-lg-5" style={{ paddingTop: "30px" }}>
            <h2>Kenapa harus mencari tallent di peworld</h2>

            <p style={{ marginTop: "36px" }}>
              
              <Image src={blucheck} alt="blucheck" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
              
              <Image src={blucheck} alt="blucheck" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
              
              <Image src={blucheck} alt="blucheck" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
            
              <Image src={blucheck} alt="blucheck" /> Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "152px" }}>
          <div className="col-6">
            <h2>Skill Tallent</h2>
            <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="row">
              <div className="col-6">
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> Java
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> Kotlin
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> PHP
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> JavaScript
                </p>
              </div>
              <div className="col-6">
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> Golang
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> C++
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> Ruby
                </p>
                <p style={{ marginTop: "36px" }}>
                  <Image src={ylwcheck} alt="checklist" /> 10+ Bahasa lainnya
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image src={g3} alt="gambar3" />
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ marginTop: "232px" }}>
          <div className="card" style={{ width: "1140px", height: "227px", borderRadius: "40px, 8px, 40px, 8px", backgroundColor: "#5E50A1" }}>
            <div className="d-flex justify-content-around align-items-center my-auto">
              <h2>Lorem ipsum dolor sit amet</h2>
              <button type="button" className="btn ml-1" style={{ width: "210px", height: "63px", backgroundColor: "white", padding: "10px 20px", cursor: "pointer", color: "#796EAF", marginLeft: "16px" }}>
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default LandingPages
