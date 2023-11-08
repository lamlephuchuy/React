import React from "react";
import ReactDOM from "react-dom";

const user = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 49
}

const element = (
    <div>
       <h1>{user.firstName}</h1>
       <h1>{user.lastName}</h1>
       <p>Age: {user.age}</p>
    </div>
   );
   

ReactDOM.render(element, document.getElementById('root'));