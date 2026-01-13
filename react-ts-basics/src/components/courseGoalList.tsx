import CourseGoal from './CourseGoal';
import { type CourseGoal as Cgoal } from '../App';
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
  goals: Cgoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>Yo have no course goals yet. Start adding Some.</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Your're Collecting a lot of goal. Don't put too much on your plate.!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
