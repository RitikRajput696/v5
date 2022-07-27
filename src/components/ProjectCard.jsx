import React from "react";
import CardData from "./CardData";

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
  );
}

export default CardList;
// function ProjectCard() {
//   return (
//     <div className="card">
//       <div className="card-img">
//         <img src={ClockImg} alt="" />
//       </div>
//       <div className="card-text">
//         <h2>Project Name</h2>
//         <div className="card-labels">
//           <code>HTML</code>
//           <code>CSS</code>
//           <code>REACT</code>
//         </div>
//         <div className="card-bottom">
//           <a href="#">LIVE</a>
//           <a href="#">SOURCE CODE</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;
