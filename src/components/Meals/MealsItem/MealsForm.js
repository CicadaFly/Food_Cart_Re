import classes from './MealsForm.module.css'
import Input from '../UI/Input'
const MealsForm =() => {

    return (
        <form className={classes.form}>
            <div>
            <Input
             label = 'Amount'
            />
            </div>
            <button>+ Add Cart</button>
        </form>
    )
}

export default MealsForm
