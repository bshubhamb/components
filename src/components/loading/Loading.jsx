import classes from './loading.module.css'

function Loading({type=0}) {

    const dots = new Array(5).fill(1);

    // const rootEl = document.getElementById(":root");

    // rootEl.style.setProperty("--nth-child-1", 1);

    return ( 
        <div className={classes.container}>
            {type == 0 && <div className={classes.dots}>
                {dots.map(() => <div className={classes.dot}></div>)}
            </div>}
            {type == 1 && <div className={classes.dots1}>
                <div className={classes.dot1}></div>
                </div>}
        </div>
     );
}


export default Loading;