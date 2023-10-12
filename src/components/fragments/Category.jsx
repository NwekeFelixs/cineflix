import React from 'react';
import '../css/main.css'
import '../css/media_query.css'
import '../css/reset.css'
import '../css/variable.css'
import action from '../img/action.jpg';
import adventure from '../img/adventure.jpg';
import crime from '../img/crime.jpg';
import comedy from '../img/comedy.jpg';
import horror from '../img/horror.jpg';
import thriller from '../img/thriller.webp';
import animated from '../img/animated.jpg';
import sciFi from '../img/sci-fi.jpg';

const Category = () => {
  return (
    <section className="category" id="category">
      <h2 className="section-heading">Category</h2>
      <div className="category-grid">
        <div className="category-card">
          <img src={action} alt="" className="card-img" />
          <div className="name">Action</div>
          <div className="total">100</div>
        </div>
        <div className="category-card">
          <img src={comedy} alt="" className="card-img" />
          <div className="name">Comedy</div>
          <div className="total">50</div>
        </div>
        <div className="category-card">
          <img src={thriller} alt="" className="card-img" />
          <div className="name">Thriller</div>
          <div className="total">20</div>
        </div>
        <div className="category-card">
          <img src={horror} alt="" className="card-img" />
          <div className="name">Horror</div>
          <div className="total">80</div>
        </div>
        <div className="category-card">
          <img src={adventure} alt="" className="card-img" />
          <div className="name">Adventure</div>
          <div className="total">100</div>
        </div>
        <div className="category-card">
          <img src={animated} alt="" className="card-img" />
          <div className="name">Animated</div>
          <div className="total">50</div>
        </div>
        <div className="category-card">
          <img src={crime} alt="" className="card-img" />
          <div className="name">Crime</div>
          <div className="total">20</div>
        </div>
        <div className="category-card">
          <img src={sciFi} alt="" className="card-img" />
          <div className="name">SCI-FI</div>
          <div className="total">80</div>
        </div>
      </div>
    </section>
  );
};

export default Category;
