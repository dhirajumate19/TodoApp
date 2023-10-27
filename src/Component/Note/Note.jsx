import classes from "./Note.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDeleteHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
};
export default Note;
