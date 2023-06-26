import "./block.css";
export const Block = (props) => {
  return (
    <div className={"block"}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
