import React from "react";
import CardJurusan from "./CardJurusan";
import Hero from "./Hero";
import jurusan1 from "../assets/jurusan1.jpg";
import jurusan2 from "../assets/jurusan2.jpg";
import jurusan3 from "../assets/jurusan3.jpg";
import CardKegiatan from "./CardKegiatan";
import kegiatan1 from "../assets/kegiatan1.jpg";
import kegiatan2 from "../assets/kegiatan2.jpg";
import kegiatan3 from "../assets/kegiatan3.jpg";
import kegiatan4 from "../assets/kegiatan4.jpg";

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

            <div className="col-12 my-5">
              <CardKegiatan
                image={kegiatan1}
                deskripsi=" Ini Adalah kegiatan sekolah 1 "
              />
            </div>

            <div className="col-12 my-5">
              <CardKegiatan
                image={kegiatan2}
                deskripsi=" Ini Adalah kegiatan sekolah 2 "
              />
            </div>

            <div className="col-12 my-5">
              <CardKegiatan
                image={kegiatan3}
                deskripsi=" Ini Adalah kegiatan sekolah 3 "
              />
            </div>

            <div className="col-12 my-5">
              <CardKegiatan
                image={kegiatan4}
                deskripsi=" Ini Adalah kegiatan sekolah 4 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
