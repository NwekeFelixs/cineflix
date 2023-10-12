import React from 'react';
import { IoFilm, IoCalendar, IoTime } from 'react-icons/io5';
import '../css/main.css'
import '../css/media_query.css'
import '../css/reset.css'
import '../css/variable.css'
import bannerImg from '../img/John-Wick-3.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-card">
        <img src={bannerImg} className="banner-img" alt="" />
        <div className="card-content">
          <div className="card-info">
            <div className="genre">
              <IoFilm />
              <span>Action/Thriller</span>
            </div>
            <div className="year">
              <IoCalendar />
              <span>2019</span>
            </div>
            <div className="duration">
              <IoTime />
              <span>2h 11m</span>
            </div>
            <div className="quality">4K</div>
          </div>
          <h2 className="card-title">John Wick: Chapter 3 - Parabellum</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
