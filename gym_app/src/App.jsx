import { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [currentView, setCurrentView] = useState("hero");
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateViewGenerate() {
    setCurrentView("generate");
  }
  function updateViewHero() {
    setCurrentView("hero");
  }

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    setCurrentView("workout");
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-violet-950 to-violet-200 text-white text-sm sm:text-base">
      {currentView === "hero" && (
        <Hero updateViewGenerate={updateViewGenerate} />
      )}
      {currentView === "generate" && (
        <Generator
          poison={poison}
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          goal={goal}
          setGoal={setGoal}
          updateWorkout={updateWorkout}
        />
      )}
      {workout && currentView === "workout" && (
        <Workout workout={workout} updateViewHero={updateViewHero} />
      )}
    </main>
  );
}

export default App;
