import { type FormEvent, useRef } from 'react';

type newGoalProps = {
  handelAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ handelAddGoal }: newGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    handelAddGoal(enteredGoal, enteredSummary);
  };
  return (
    <form onSubmit={handelSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
