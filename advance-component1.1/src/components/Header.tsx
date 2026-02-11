import { useContext } from 'react';
import Button from './UI/Button.tsx';
import {  useTimerContext } from '../store/timer-context.tsx';

export default function Header() {
  const timerCtx = useTimerContext()!;

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timerCtx.isRunning ? timerCtx.stopTimers : timerCtx.startTimers}>{timerCtx.isRunning ?"Stop Timers":"Start Timer"}</Button>
    </header>
  );
}
