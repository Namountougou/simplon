import Menu from "../components/Menu";
import "./technoadd.css";
export default function AddComponent(props) {
  const { handleAddTechno } = props;
  const techno = {
    name: "React",
    category: "",
  };
  return (
    <>
      <Menu />
      <div className="techno-add">
        <form>
          <label htmlFor="name">NAME</label>
          <br />
          <input type="text" name="tecno-name" id="tecno-name" />
          <br />
          <label htmlFor="category">category</label>
          <br />
          <br />
          <select
            name="category"
            value="choisir une categorie"
            id="tecno-category"
          >
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="angular">Angular</option>
            <option value="laravel">Laravel</option>
          </select>
          <br />
          <label htmlFor="comment">category</label>
          <br />
          <textarea name="comment" value="commentaire" cols="30" rows="5" />
          <br />

          <input type="submit" value="Add techno" />
        </form>
      </div>
    </>
  );
}
