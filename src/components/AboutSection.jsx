import React from "react";

function AboutSection() {
  return (
    <section className="AboutSection">
      <div className="AboutImage"></div>
      <div className="Person">
        <div className="PersonImage">
          <img src="" alt="" />
        </div>
        <table>
          <tr>
            <th>Name</th>
            <td>Ritik Rajput</td>
          </tr>
          <tr>
            <th>Class</th>
            <td>12th</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>18</td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default AboutSection;
