import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";
import Button from "./Button";

export default function Workout(props) {
  const { workout, updateViewHero } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to your workout"}
      title={["Let's", "Rock!"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard key={i} i={i} exercise={exercise} />;
        })}
      </div>
      <Button func={updateViewHero} text={"Finished? Start new workout"} />
    </SectionWrapper>
  );
}
