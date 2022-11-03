import classes from './MealsForm.module.css'
import Input from '../../UI/Input'
const MealsForm =(props) => {

    return (
        <form className={classes.form}>
            <div>
            <Input
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
            </div>
            <button>+ Add Cart</button>
        </form>
    )
}

export default MealsForm
