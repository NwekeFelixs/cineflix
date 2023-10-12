import React from 'react';
import { IoBookmarkOutline, IoStarOutline, IoPlayCircleOutline } from 'react-icons/io5';
import '../css/main.css'
import '../css/media_query.css'
import '../css/reset.css'
import '../css/variable.css'
import redNotice from '../img/movies/red-notice.jpg';
import spiderMan from '../img/movies/spider-men.jpg';
import matrix from '../img/movies/matrix.jpg';
import Ninteen from '../img/movies/1917.jpg';
import lotr from '../img/movies/LOTR.jpg';
import captainMarvel from '../img/movies/captain-marvel.jpg';
import casinoRoyale from '../img/movies/casino-royale.jpg';
import darkNight from '../img/movies/dark-knight.jpg';
import dune from '../img/movies/dune.jpg';
import endgame from '../img/movies/endgame.jpg';
import gladiator from '../img/movies/gladiator.jpg';
import interstaller from '../img/movies/interstaller.jpg';
import saving from '../img/movies/saving-private-ryan.jpg';
import panther from '../img/movies/panther.jpg';
import shangChi from '../img/movies/shang-chi.jpg';
import ww from '../img/movies/ww84.jpg';
import venom from '../img/movies/venom.jpg';
import eternals from '../img/movies/eternals.jpg'

const movies = [
    {
      title: 'Red Notice',
      image: redNotice,
      genre: 'Action/Comedy',
      year: '2021',
      rating: '6.4',
    },
    {
      title: 'Spider-Man: Homecoming',
      image: spiderMan,
      genre: 'Action/Adventure',
      year: '2017',
      rating: '7.4',
    },
    {
      title: 'The Matrix Resurrections',
      image: matrix,
      genre: 'Sci-fi/Action',
      year: '2021',
      rating: 'N/A',
    },
    {
      title: 'Eternals',
      image: eternals,
      genre: 'Adventure/Action',
      year: '2021',
      rating: '6.8',
    },
    {
      title: 'Dune',
      image: dune,
      genre: 'drama',
      year: '2021',
      rating: '8.2',
    },
    {
      title: '1917',
      image: Ninteen,
      genre: 'War/Drama',
      year: '2019',
      rating: '8.3',
    },
    {
      title: 'Shang-Chi and The Legend of The Ten Rings',
      image: shangChi,
      genre: 'Action/Fantasy',
      year: '2021',
      rating: '7.6',
    },
    {
      title: 'Casino Royale',
      image: casinoRoyale,
      genre: 'Action/Adventure',
      year: '2006',
      rating: '8.0',
    },
    {
      title: 'The Dark Knight',
      image: darkNight,
      genre: 'Action/Adventure',
      year: '2008',
      rating: '9.0',
    },
    {
      title: 'Black Panther',
      image: panther,
      genre: 'Action/Adventure',
      year: '2018',
      rating: '7.3',
    },
    {
      title: 'Venom',
      image: venom,
      genre: 'action',
      year: '2018',
      rating: '6.7',
    },
    {
      title: 'Lord Of The Rings: Return Of The King',
      image: lotr,
      genre: 'Fantasy/Adventure',
      year: '2003',
      rating: '8.9',
    },
    {
      title: 'Saving Private Ryan',
      image: saving,
      genre: 'War/Action',
      year: '1998',
      rating: '8.6',
    },
    {
      title: 'Interstellar',
      image: interstaller,
      genre: 'Sci-fi/Adventure',
      year: '2014',
      rating: '8.6',
    },
    {
      title: 'Gladiator',
      image: gladiator,
      genre: 'Action/Adventure',
      year: '2000',
      rating: '8.5',
    },
    {
      title: 'Avengers: Endgame',
      image: endgame,
      genre: 'Action/Sci-fi',
      year: '2019',
      rating: '8.4',
    },
    {
      title: 'Wonder Woman 1984',
      image: ww,
      genre: 'Action/Adventure',
      year: '2020',
      rating: '5.4',
    },
    {
      title: 'Captain Marvel',
      image: captainMarvel,
      genre: 'Action/Sci-fi',
      year: '2019',
      rating: '6.8',
    },
    
  ];
  

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="card-head">
              <img src={movie.image} alt={movie.title} className="card-img" />
              <div className="card-overlay">
                <div className="bookmark">
                  <IoBookmarkOutline />
                </div>
                <div className="rating">
                  <IoStarOutline />
                  <span>{movie.rating}</span>
                </div>
                <div className="play">
                  <IoPlayCircleOutline />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{movie.title}</h3>
              <div className="card-info">
                <span className="genre">{movie.genre}</span>
                <span className="year">{movie.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;
