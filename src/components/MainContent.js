import React from "react";
import CardJurusan from "./CardJurusan";
import Hero from "./Hero";
import jurusan1 from "../assets/jurusan1.jpg";
import jurusan2 from "../assets/jurusan2.jpg";
import jurusan3 from "../assets/jurusan3.jpg";

export const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5 ">
            <h1>Jurusan Sekolah</h1>
          </div>

          <div
            className="row justify-content-center" /* pembungkus cardjurusan */
          >
            <div className="col-lg-4 col-12 ">
              <CardJurusan image={jurusan1} jurusan="TIK" />
            </div>

            <div className="col-lg-4 col-12 ">
              <CardJurusan image={jurusan2} jurusan="IPA" />
            </div>

            <div className="col-lg-4 col-12 ">
              <CardJurusan image={jurusan3} jurusan="IPS" />
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Kegiatan Sekolah</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
