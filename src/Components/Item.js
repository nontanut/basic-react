import PropTypes from 'prop-types';
import "./Item.css";

const Item = (props) => {
    const {title, amount} = props;
    const status = amount < 0 ? "expense" : "income";
    const symbol = amount < 0 ? "-" : "+";
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    return (
        <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span>
        </li>
    ); // Math.abs(amount) ช่วยทำให้ตัวเลข - เป็นบวก(คือไม่ซ้อนเครื่องหมาย --)
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
};

export default Item;
