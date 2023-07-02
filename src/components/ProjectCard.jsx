import React from 'react';
import CardData from './CardData';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

function CardList() {
  return (
    <section className="CardList">
      {CardData.map((card) => {
        return <ProjectCard key={CardData.id} {...card} />;
      })}
    </section>
  );
}

function ProjectCard({ img, title, live, sourceCode }) {
  return (
    <Fade duration="2000">
      <div className="card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-text">
          <h2>{title}</h2>
          <div className="card-bottom">
            <a href={live}>LIVE</a>
            <a href={sourceCode}>SOURCE CODE</a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CardList;
