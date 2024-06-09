import{useState} from 'react'
import classes from './menu.module.css'

const Menu = (props) => {

    const {options} = props;

    console.log(props)

    const [open, setOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState(props.initialSelection ? props.initialSelection : options[0]);

    const selectOption = (option, index) => {
        setSelectedOption(options[index]);
        setOpen(false);
    }

    const openMenu = () => {
        setOpen(prev => { return !prev; });
    }


    return (
        <div className={classes.menuContainer}>
            <div 
            className={`${classes.selectedItem}`}
            onClick={() => openMenu()}>
                <span className={`${classes.menuText} ${classes.slide}`}>{selectedOption}</span>
            </div>

            {open && <div className={classes.menuItemsContainer}>
                {options.map((option, index) => {
                    return(
                    <div 
                    className={`${classes.menuItem}` } 
                    onClick={() => selectOption(option, index)}>
                        <span className={`${classes.menuText} ${classes.slide}`}>{option}</span>
                        {option == selectedOption && <div className={classes.selectionIndicator}>$</div>}
                    </div>)
                })}
            </div>}
        </div>

        

    )
}


export default Menu;