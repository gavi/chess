/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Piece from "./Piece.tsx"

interface CellProps {
  row: number;
  col: number;
  piece: string;
}


export default function Cell(props: CellProps) {
    const black = tw`grid border-2 border-slate-400 w-20 h-20 bg-green-50`;
    const white = tw`grid border-2 border-red-200 w-20 h-20 bg-slate-20`;
    const cls = (props.row+1*props.col+1)%2==0?black:white;
      return (
      <div class={cls}>
        <div class={tw`grid place-content-around`}>
          <Piece piece={props.piece}/>
        </div>
      </div>
      )
    
  
}
