import React from "react";
import Tour from "./Tour";


const Tours = ({ tours, removeTour }) => {

    return (
        <div>
            {/* The .map() function is being used, but the Tour component inside the callback is not being returned explicitly. 
            In JavaScript, if you use curly braces ({}) inside an arrow function without a return statement, 
            it does not return anything. */}
            {tours.map((tour) => {
                return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
            })}
        </div>
    );
}

export default Tours;

/*When you use {} inside the .map() function, it treats the block as a code block, not a return statement.
By using () or adding return, you ensure that the Tour component is returned for each item in the tours array.
*/