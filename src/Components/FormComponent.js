import { useState,useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    console.log("Render form component");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [fromValid, setFormValid] = useState(false);

    const inputTitle = (event) => {
        setTitle(event.target.value);
    }
    const inputAmount = (event) => {
        setAmount(event.target.value);
    }
    const saveItem = (event) => {
        event.preventDefault(); // ไม่ให้รีเซ็ทเวลากดบันทึก
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle(""); //เคีลยค่าใน state หลังกดบันทึก
        setAmount("");
    }
    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0;
        setFormValid(checkData); // เอาค่า checkData มาใช้ใน state setFormValid
    },[title, amount])
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!fromValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;