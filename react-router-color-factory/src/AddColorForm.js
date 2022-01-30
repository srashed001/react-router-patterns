import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './AddColorForm.css'
import { Button, TextField } from "@mui/material";

const AddNewColorForm = ({ addColor }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    name: "",
    hexidecimal: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    history.push("/colors");
  };

  return (
    <div className="AddColorForm">
      <form onSubmit={handleSubmit}>
        <TextField className="AddColorForm"
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Color Name"
        /><br></br>
        <input
          required
          type="color"
          name="hexidecimal"
          value={formData.hexidecimal}
          onChange={handleChange}
        /><br></br>
        <Button className="button" variant="contained">Pick Color</Button>
      </form>
      <Button className="button" variant="contained"><Link exact to="/colors">Go Back</Link></Button>
      
    </div>
  );
};

export default AddNewColorForm;
