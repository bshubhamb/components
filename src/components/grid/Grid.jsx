import classes from './grid.module.css'
import { useEffect, useMemo, useState } from 'react';

const GridClicking = ({data}) => {

    const flatData = useMemo(() => data.flat(), data);

    const docRoot = useMemo(() => document.querySelector(":root"), data);
    const templateStyle = data[0].reduce((prev, curr) => {return prev += "1fr "}, "");
    docRoot.style.setProperty("--template", templateStyle);

    const selectionSize = useMemo(() => flatData.reduce((prev, curr) => {
        if(curr == 1){
            prev = prev + 1;
        }
        return prev;
    }, 0), flatData);


    const [selected, setSelected] = useState(new Map());

    console.log(selected);
    const itemClicked = (index) => {
        if(selected.get(index)){
            return;
        }
        setSelected((prev) => {
            return new Map([...prev, [index, true]]);            
        });

    }

    useEffect(() => {
        if(selected.size == selectionSize){
            unselect();
        }
    }, [selected])


    const unselect = () => {
        const additionOrder = [...selected.keys()];

        for(let i=0; i< additionOrder.length;i++){
                        
            setTimeout(() => setSelected((prev) => {
                let t = new Map(prev);
                t.delete(additionOrder[i]);
                return t;
            }), 500*i);
        }
    }


    return <div className={classes.container}>
        {flatData.map((item, index) => {
        {console.log("asjbhbdskjfhbas")}

            return (<div key={index+"__"+item}
                onClick={() => itemClicked(index)}
                className={`
                    ${classes.item} 
                    ${selected.get(index) ? classes.selected : classes.unSelected}
                    ${item == 1 ? classes.visible : classes.hidden}`}
                    
            >
                
                </div>)
        })}
    </div>
}

export default GridClicking;