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
          <img src={threeFliesPhoto} alt="three bactrocera flies" />
          <div>
            <h2>About Us</h2>
            <p>
              Welcome to Farma Tech International, where we are dedicated to
              supporting the efforts of private farmers and international
              agencies in the monitoring and control of pests of economic
              importance. For over a decade, we have provided state-of-the-art
              semio-chemicals and proprietary controlled release products to
              attract and capture fruit flies and other pests.{' '}
            </p>
            <p>
              Our company was founded on the principle that pest control can be
              achieved using innovative and environmentally responsible
              solutions. We believe in the power of science and technology to
              create products that are effective, safe, and sustainable.
            </p>
            <p>
              {' '}
              At Farma Tech, we work closely with farmers and other stakeholders
              to understand their pest control needs and develop solutions that
              meet those needs. Our team of experts is constantly researching
              and testing new technologies to improve our products and stay at
              the forefront of the industry.
            </p>
            <p>
              {' '}
              We are proud of the impact that our products have had on the lives
              and livelihoods of farmers around the world. Our mission is to
              continue to innovate and collaborate with our partners to create a
              world where pests are no longer a threat to agriculture and food
              security.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default HomePage;
