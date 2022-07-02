/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Cell from "./Cell.tsx"

interface BoardProps {
  state: string;
}

export default function Board(props:BoardProps) {
  const items = []
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      items.push(<Cell piece={""} row={i} col={j}/>)
    }
  }
  let count = 0;
  for(let i=0;i<props.state.length;i++){
    if(props.state.charAt(i) === " "){
      break;
    }
    else if(props.state.charAt(i) === "/"){
      //Next row
    }
    else if(!isNaN(Number(props.state.charAt(i)))){
        count = count + Number(props.state.charAt(i))
    }
    else {
        items[count].props.piece = props.state.charAt(i)
        count = count + 1;
    }
  }
  return (
    <div class={tw`grid grid-cols-8 border-slate-50 border-2 rounded mx-auto bg-slate-50`} style="width:40rem">
     {items}
    </div>
  );
}
