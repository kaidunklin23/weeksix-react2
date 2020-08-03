import React from 'react'

const Unicorns = ({unicorns, deleteUnicorn}) => {
    //     const unicornList = unicorns.map(unicorn => {
    //         if (unicorn.age >20){
    //         return(
    //             <div className="unicorn" key={unicorn.id}>
    //             <div>Name: {unicorn.name}</div>
    //             <div>Age:{unicorn.age}</div>
    //             <div>Color: {unicorn.color}</div>
    //         </div>
    //         )
    //     }else {
    //         return null
    //     }
    // })
   
  
        return(
            <div className="unicorn-list">
                {
         
            unicorns.map(unicorn => {
                 return  unicorn.age > 20 ? (
            <div className="unicorn" key={unicorn.id}>
                <div>Name: {unicorn.name}</div>
                <div>Age:{unicorn.age}</div>
                <div>Color: {unicorn.color}</div>
                <button onClick={() => deleteUnicorn(unicorn.id)}>Delete Unicorn</button>
                    </div>
                         ) : null;
                    })
                }
            </div>
        )
    }


export default Unicorns