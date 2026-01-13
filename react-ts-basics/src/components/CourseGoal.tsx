import { FC, PropsWithChildren, ReactNode } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  description,
  onDelete,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
