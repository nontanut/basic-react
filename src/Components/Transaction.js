import Item from "./Item";
import "./Transaction.css";
// import DataContext from "../Data/DataContext";
// import { useContext } from "react";

const Transaction = (props) => {
  const {items} = props;
  // const {income, expense} = useContext(DataContext);
    return (
      <div>
        <ul className="item-list">
        {items.map((el) => {
          return <Item {...el} key = {el.id}/>
        })}
        </ul>
      </div>
    );
}

export default Transaction;