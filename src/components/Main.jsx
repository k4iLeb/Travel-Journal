import "../App.css";
import data from "../data";
import Card from "./Card";

export default function Main() {
  const cards = data.map((obj) => <Card key={obj.title} obj={obj} />);
  return <div className="main--content">{cards}</div>;
}
