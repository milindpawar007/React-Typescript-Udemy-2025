import CourseGoalList from './components/courseGoalList';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handelAddGoal(goal: string, summary: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prev, newGoal];
    });
  }

  function handelDelete(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Alist of Goals' }}>
        <h1>Your Course Goals </h1>
      </Header>
      <NewGoal handelAddGoal={handelAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handelDelete} />
    </main>
  );
}
