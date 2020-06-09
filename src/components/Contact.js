import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="full-contact">
      <h1>Contact Us</h1>
      <div className="contact-div">
        <div className="pod1">
          <input placeholder="ime" type="text"></input>
          <input placeholder="prezime" type="text"></input>
          <input placeholder="kompanija" type="text"></input>
          <input placeholder="email" type="email"></input>
          <input placeholder="telefonski broj" type="number"></input>
        </div>
        <div className="pod2">
          <select id="vraboteni" name="vraboteni">
            <option value="broj">broj na vraboteni</option>
            <option value="prvbroj">1</option>
            <option value="vtorbroj">2-10</option>
            <option value="tretbroj">11-50</option>
            <option value="tretbroj">51-200</option>
            <option value="tretbroj">200+</option>
          </select>
          <select id="sektor" name="sektor">
            <option value="broj">Covecki resursi</option>
            <option value="prvbroj">marketing</option>
            <option value="vtorbroj">produkt</option>
            <option value="tretbroj">prodazba</option>
            <option value="tretbroj">ceo</option>
          </select>
          <textarea placeholder="Poraka"></textarea>
        </div>
      </div>
      <button className="subBtn">SUBMIT</button>
    </div>
  );
};

export default Contact;
