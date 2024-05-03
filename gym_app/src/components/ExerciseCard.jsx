import React, { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);
  function handleSets() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-violet-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="uppercase whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl font-medium flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalaize">{exercise.type}</p>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded broder-[1.5px] border-solid border-violet-900 w-full"
            >
              <h3 className="capitalize text-violet-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSets}
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-violet-900 hover:border-violet-600 w-full"
        >
          <h3 className="text-slate-400 text-sm capittalaize">
            Sets completed
          </h3>
          <p className="font-medium">{setsCompleted} / 5</p>
        </button>
      </div>
      <div className="flex flex-col text-violet-100 bg-violet-950 rounded gap-2">
        {exercise.description.split("___").map((val) => {
          return (
            <div key={val} className="text-sm">
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
}
