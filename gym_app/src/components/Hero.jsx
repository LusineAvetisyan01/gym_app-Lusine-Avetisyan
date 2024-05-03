import React from "react";
import Button from "./Button";

export default function Hero(props) {
  const { updateViewGenerate } = props;
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-violet-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          IT'S TIME TO GET FIT
        </h1>
        <p className="text-violet-950">Gym app by Lusine Avetisyan</p>
      </div>
      <p className="text-md md:text-xl font-light">
        Start crafting your personalized workout plan with just a tap! Begin by
        selecting your fitness goals, and our app will tailor the perfect
        exercise routines just for you. It's the simplest way to achieve your
        health and fitness aspirations!
      </p>

      <Button func={updateViewGenerate} text={"BEGIN"}></Button>
    </div>
  );
}
