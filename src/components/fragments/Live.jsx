import React from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import planet from '../img/planet.jpg';
import got from '../img/got.jpg';
import vikings from '../img/vikins.jpg';
import avatar1 from '../img/bbcamerica.jpg';
import avatar2 from '../img/HBO-Logo-square.jpg';

const liveCardData = [
  {
    imgSrc: planet,
    liveBadge: 'LIVE',
    totalViewers: '305K viewers',
    title: 'Planet Earth II Season 1 - Islands',
    avatarSrc: avatar1,
  },
  {
    imgSrc: got,
    liveBadge: 'LIVE',
    totalViewers: '1.7M viewers',
    title: "Game of Thrones Season 5 - Mother's Mercy",
    avatarSrc: avatar2,
  },
  {
    imgSrc: vikings,
    liveBadge: 'LIVE',
    totalViewers: '468K viewers',
    title: 'Vikings Season 4 - What Might Have Been',
    avatarSrc: avatar2,
  },
];

const LiveTvShowCard = ({ cardData }) => (
  <div className="live-card">
    <div className="card-head">
      <img src={cardData.imgSrc} alt="" className="card-img" />
      <div className="live-badge">{cardData.liveBadge}</div>
      <div className="total-viewers">{cardData.totalViewers}</div>
      <div className="play">
        <IoPlayCircleOutline />
      </div>
    </div>
    <div className="card-body">
      <img src={cardData.avatarSrc} alt="" className="avatar" />
      <h3 className="card-title">{cardData.title}</h3>
    </div>
  </div>
);

const Live = () => {
  return (
    <section className="live" id="live">
      <h2 className="section-heading">Live Tv Shows</h2>
      <div className="live-grid">
        {liveCardData.map((card, index) => (
          <LiveTvShowCard key={index} cardData={card} />
        ))}
      </div>
    </section>
  );
};

export default Live;
