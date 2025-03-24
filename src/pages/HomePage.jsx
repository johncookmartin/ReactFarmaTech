import React from 'react';
import Carousel from '../components/Carousel';
import { carouselArr } from '../assets/carouselArray';
import StoreBlock from '../components/StoreBlock';
import threeFliesPhoto from '../assets/flies/Bactrocera_invadens_(06410591)_(6922919407).jfif';

const HomePage = () => {
  return (
    <>
      <Carousel imageArr={carouselArr} />
      <h1 className="carousel-caption">Welcome to FarmaTech International</h1>
      <section class="store-block-container">
        <StoreBlock productColor="#FF5050" productName="Trimedlure" />
        <StoreBlock productColor="#008000" productName="Cuelure" />
        <StoreBlock productColor="#FFFF00" productName="Methyl Eugenol" />
      </section>
      <section className="content-container">
        <article className="content-block">
          <div className="company-info">
            <p>
              Farma Tech International supports the efforts of both private
              farmers and international agencies in monitoring and control of
              pests of economic importance. For over a decade Farma Tech has
              provided state of the art semio-chemicals and proprietary
              controlled release products to attract and capture fruit flies and
              other pests.
            </p>
          </div>
        </article>
        <article className="content-block forest-green">
          <img src={threeFliesPhoto} alt="three bactrocera flies" />
          <div>
            <h2>About Us</h2>
            <h3>Mission</h3>
            <div>
              <p>
                Farma Tech International seeks to provide superior products and
                services to support international agencies, as well as the
                private sector, in developing and implementing the most
                effective, economical, and sustainable Integrated Pest
                Management (IPM) systems and programs possible.
              </p>
            </div>
            <h3>Company Profile</h3>
            <div>
              <p>
                Farma Tech International, incorporated in 1992, provides state
                of the art semio-chemicals and proprietary Controlled Release
                products, mainly to international agencies in support of their
                efforts to monitor and control pests of economic importance. In
                cooperation with the United States Department of Agriculture
                (USDA) it has developed and tested new and unique pest
                monitoring and control products including the C&C Trap for which
                Farma Tech International and the USDA share a patent. Farma Tech
                International enjoys strong ties to research organizations
                including the Agriculture Research Services (ARS) branch of the
                USDA and currently has proven Controlled Release products for
                Mediterranean Fruit Fly and Gypsy Moth. Other cooperative
                projects have included working closely with the USDA Animal and
                Plant Health Inspection Service (USDA/APHIS), the USDA Forest
                Service (USDA/FS), the California Department of Food and
                Agriculture (CDFA), and the Inter-American Institute for
                Cooperation on Agriculture (IICA).
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default HomePage;
