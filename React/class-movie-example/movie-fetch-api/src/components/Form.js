import { useState} from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchTerm);
  };

  return (
    <>
      <form className="fcontainer"onSubmit={handleSubmit}>
        <input className="searcher"type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm}/>
        <input className="sBtn" type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;
