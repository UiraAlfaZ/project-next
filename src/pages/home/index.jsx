
import FormExample from '@/components/dummy';
import Footer from '@/components/footer';
import List from '@/components/list';
import NavbarProfile from '@/components/navbarprofile';
import React from 'react';

const Home = () => {
  return (
    <>
      <NavbarProfile/>
      
      <div style={{ backgroundColor: "#5E50A1", width: "1488px", height: "100px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container ">
        <div style={{ marginTop: "30px", zIndex: "1", position: "relative" }}>
          <h2 style={{ color: "white" }}>Top Jobs</h2>
        </div>
      <List/>
      </div>
      <Footer/>
    </>
  );
};

export default Home
