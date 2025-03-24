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
      <section className="store-block-container">
        <StoreBlock productColor="#FF5050" productName="Trimedlure" />
        <StoreBlock productColor="#008000" productName="Cuelure" />
        <StoreBlock productColor="#FFFF00" productName="Methyl Eugenol" />
      </section>
      <section className="content-container">
        <article className="content-block">
          <h2 className="company-banner">
            Monitoring & Control of Pests of Economic Importance
          </h2>
        </article>
        <article className="content-block forest-green">
          <img src={threeFliesPhoto} alt="three bactrocera flies" />
          <div>
            <h3>Company Info</h3>
            <div>
              <p>
                Farma Tech International supports the efforts of both private
                farmers and international agencies in monitoring and control of
                pests of economic importance. For over a decade Farma Tech has
                provided state of the art semio-chemicals and proprietary
                controlled release products to attract and capture fruit flies
                and other pests.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default HomePage;
