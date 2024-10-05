import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup/";
import LikeButton from "./Like";
import { AiFillAppstore } from "react-icons/ai"
import { useState } from "react";

const items = [
  'New York',
  'Port Said',
  'Port Fouad'
];
function app ()
{

  return (<div>
     <LikeButton onClick={() => console.log("Clicked")} />
    </div> );
}

export default app;