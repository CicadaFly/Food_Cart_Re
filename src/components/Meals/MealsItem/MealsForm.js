import classes from './MealsForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'
const MealsForm =(props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    //下面這個event.preventDefault()是來防止submit後重新整理頁面
    const submitHandler = (event) =>{
        event.preventDefault();
        //current.value回傳的一定是string，需要透過+來轉為數值
        const enterAomunt = amountInputRef.current.value;
        const enterAomuntNumber = +enterAomunt;

            if ( enterAomunt.trim().length === 0 ||
                enterAomuntNumber < 1 || enterAomuntNumber >5) 
                {setAmountIsValid(false);
                    return;}
        props.onAddToCart(enterAomuntNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
             ref = {amountInputRef}
             label = 'Amount'
             input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
              }}
            />
            <button>+ Add Cart</button>
            {!amountIsValid && <p>Please Enter valid value (1~5)</p>}
        </form>
    )
}

export default MealsForm
