import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup/";

import { useState } from "react";

const items = [
  'New York',
  'Port Said',
  'Port Fouad'
];
function app ()
{

  return (<div>
     <ListGroup heading="Countries" items={items} onSelectItem={() => console.log('Clicked')}/>

    </div> );
}

export default app;