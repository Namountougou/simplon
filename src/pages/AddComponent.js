import Menu from "../components/Menu";
import { useState } from "react";
import "./technoadd.css";

export default function AddComponent(props) {
  const { handleAddTechno, a } = props;
  const [tech, setTechno] = useState({
    name: "ttt",
    category: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTechno(handleAddTechno, a);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setTechno({ ...tech, [name]: value });
  }
  return (
    <>
      <Menu />
      <div className="techno-add">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">NAME</label>
          <br />
          <input
            type="text"
            name="nom"
            value={handleAddTechno.nom}
            onChange={(e) => handleChange(e)}
            id="tecno-name"
          />
          <br />
          <label htmlFor="category">category</label>
          <br />
          <br />
          <select
            name="category"
            id="tecno-category"
            value={handleAddTechno.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="choisir une categorie">choisir une categorie</option>
            <option value="react">Frontend</option>
            <option value="node">Backend</option>
          </select>
          <br />
          <label htmlFor="description">description</label>
          <br />
          <textarea
            name="description"
            value={handleAddTechno.description}
            onChange={(e) => handleChange(e)}
            cols="30"
            rows="8"
          ></textarea>
          <br />

          <input type="submit" value="valider" className="btn" />
        </form>
      </div>
    </>
  );
}
