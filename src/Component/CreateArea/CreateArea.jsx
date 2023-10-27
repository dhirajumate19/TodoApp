import classes from "./CreateArea.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Fab } from "@mui/material";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (note.title.length === 0 && note.content.length === 0) {
      setError(true);
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
      setError(false);
    }
  };
  const onExpand = () => {
    setIsExpanded(true);
  };
  return (
    <>
      <form className={classes.createArea}>
        <div className={classes.field}>
          {isExpanded && (
            <input
              name="title"
              placeholder="Title"
              onChange={onHandleChange}
              value={note.title}
            />
          )}
          <textarea
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            onClick={onExpand}
            onChange={onHandleChange}
            value={note.content}
          ></textarea>
          <Fab onClick={onSubmitHandler}>
            <AddIcon />
          </Fab>
        </div>
      </form>
      <div style={{ justifyContent: "end", color: "red" }}>
        {error && <p>Please provide some Ttile or Content</p>}
      </div>
    </>
  );
};
export default CreateArea;
