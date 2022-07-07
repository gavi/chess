/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Board from "../islands/Board.tsx";


export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6 border-slate-50 border-2 rounded-md p-4 content-center`}>
       Chess 
      </p>
      <Board state="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" />
    </div>
  );
}
