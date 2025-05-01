import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/index.js';
import { getImageUrl, getFlyUrl } from '../utils/blobImports';
import StoreBlock from '../components/StoreBlock';
import './styles/homepage.css';

const HomePage = () => {
  return (
    <>
      <Carousel
        className="carousel"
        imageArr={[
          getFlyUrl('Cropped_Full_Fly_On_Green_Leaf.jpg'),
          getFlyUrl('Cropped_Fly_On_Yellow_Lure.jpg'),
          getFlyUrl('Cropped_Fly_On_Green_Leaf.jpg'),
        ]}
      />
      <h1 className="carousel-caption">Welcome to FarmaTech International</h1>
      <section className="store-block-container">
        <StoreBlock productColor="#FF5050" productName="Trimedlure" />
        <StoreBlock productColor="#008000" productName="Cuelure" />
        <StoreBlock productColor="#FFFF00" productName="Methyl Eugenol" />
      </section>
      <section className="content-container">
        <article className="content-block">
          <h2>Monitoring & Control of Pests of Economic Importance</h2>
        </article>
        <article className="content-block forest-green">
          <img
            className="company-info-photo"
            src={getFlyUrl('Bactrocera_invadens_(06410591)_(6922919407).jfif')}
            alt="three bactrocera flies"
          />
          <div className="company-info">
            <Link to="/about" className="company-info-link">
              Company Info
            </Link>
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
            <div className="quick-links-container">
              <div className="quick-link">
                <img
                  className="quick-link-image"
                  src={getImageUrl('/liquid/tml/all.jpg')}
                />
                <Link to="/products" className="quick-link-caption">
                  Products
                </Link>
              </div>
              <div className="quick-link">
                <img
                  className="quick-link-image"
                  src={getImageUrl('/misc/traps_with_flies/DSC00729.JPG')}
                />
                <Link to="/contact" className="quick-link-caption">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default HomePage;
