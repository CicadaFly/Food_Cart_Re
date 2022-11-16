import classes from './CustomerCheck.module.css'
import { useRef } from 'react';



const CustomerCheck = (props) =>{

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler= (event) => {
        event.preventDefault();

        const enterName = nameInputRef.current.value;
        const enterStreet = streetInputRef.current.value;
        const enterPostal = postalInputRef.current.value;
        const enterCity = cityInputRef.current.value;

        const checkNameIsValid = !enterName.trim() === '';
        const checkStreetIsValid = !enterStreet.trim() === '';
        const checkCityIsValid = !enterCity.trim() === '';
        const checkPostalIsValid = enterPostal.trim().length === 5;

        const formIsOkay = checkNameIsValid & checkCityIsValid & checkPostalIsValid &checkStreetIsValid;

        if (!formIsOkay)  
           { return};
        
        
        props.onCofirm = ({
            name: enterName,
            street: enterStreet,
            city: enterCity,
            postal: enterPostal,
        });
    };


        const nameControlClasses = `${classes.control} ${
            checkNameIsValid? '' : classes.invalid
        }`;
        const streetControlClasses = `${classes.control} ${
            checkStreetIsValid? '' : classes.invalid
          }`;
        const postalCodeControlClasses = `${classes.control} ${
            checkPostalIsValid? '' : classes.invalid
          }`;
        const cityControlClasses = `${classes.control} ${
            checkCityIsValid? '' : classes.invalid
          }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
            </div>

            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef}/>
            </div>

            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Your postal ID</label>
                <input type="text" id="postal" ref={postalInputRef}/>
            </div>

            <div className={cityControlClasses}>
                <label htmlFor="city">city</label>
                <input type="text" id="city" ref={cityInputRef}/>
            </div>

            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};






export default CustomerCheck