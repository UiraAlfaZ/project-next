import React from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import Image from 'next/legacy/image';
import pinmap from '@/asssets/img/map-pin.png';
import prof1 from '@/asssets/img/louis.png';
import prof2 from '@/asssets/img/haris.png';
import prof3 from '@/asssets/img/nialholand.png';
// import prof4 from '@/asssets/img/liampayne.png'

const List = () => {
  return (
    <>
        <div style={{ marginTop: "50px" }}>
          <div className="card">
            <InputGroup>
              <Form.Control size="lg" placeholder="Search for any details" aria-label="Recipient's username with two button addons" />
              <Button variant="outline-secondary">Kategori</Button>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="mt-4" style={{ marginTop: "50px" }}>
          <div className="card">
            <div className="row">
              <div className="col-lg-1 col-md-2 col-sm-2">
                <Image src={prof1} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>

              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                {/* <Link href={"/profileuser"}> */}
                  <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                    Lihat Profile
                  </button>
                {/* </Link> */}
              </div>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={prof2} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={prof3} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
            </div>
            </div>
 
  
    </>
  )
}

export default List
