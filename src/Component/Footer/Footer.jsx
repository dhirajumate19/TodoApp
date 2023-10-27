import classes from "./Footer.module.css";
const Footer = () => {
  const date = new Date();
  // console.log(date.getFullYear());
  return (
    <footer className={classes.footer}>
      <p>{`CopyRight ${date.getFullYear()}`}</p>
    </footer>
  );
};
export default Footer;
