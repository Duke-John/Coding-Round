import React from 'react';
import App from "./App";

function Answerpage()
{
  return(
    <div>
    <h1>
      Area he visited for marketing
    </h1>
    <h2>
    {localStorage.getItem('Name')}
    </h2>
    </div>
  );
}
export default Answerpage;
