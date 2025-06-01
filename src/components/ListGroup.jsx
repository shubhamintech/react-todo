import { Fragment, useState } from "react";

function ListGroup() {
    let items = [
        'Araria',
        'Arwal',
        'Aurangabad',
        'Banka',
        'Begusarai',
        'Bhagalpur',
        'Bhojpur',
        'Buxar',
        'Darbhanga',
        'East Champaran',
        'Gaya',
        'Gopalganj',
        'Jamui',
        'Jehanabad',
        'Khagaria',
        'Kishanganj',
        'Kaimur',
        'Katihar',
        'Lakhisarai',
        'Madhubani'
    ];
    // items =   [];
    // if(items.length === 0)
    // {
    //     return (
    //         <>
    //             <h1>List</h1><p>No item found</p>
    //         </>
    //     )
    // }

    const getMessage = ()=> {
        return items.length === 0 && <p>No item found</p>;
    }

    // let selectedIndex = 0;

    // Hook
   const [selectedIndex,setSelectedIndex] =  useState(-1);
   
    return (
        <Fragment>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map((item,index)=>(
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=> {setSelectedIndex(index)}}>{item}</li>
            ))}
        </ul>
        </Fragment>
    );
}

export default ListGroup;