import Container from './UI/Container.tsx';
import { timer as TimerProps, useTimerContext } from '../store/timer-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const intervalRef = useRef<number | null>(null);

  const { isRunning } = useTimerContext()!;

  // if duration changes (ex: new timer added), keep state consistent
  useEffect(() => {
    setRemainingTime(duration * 1000);
  }, [duration]);

  useEffect(() => {
    // always clear previous interval
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // if not running, do nothing
    if (!isRunning) return;

    intervalRef.current = window.setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          // stop at 0
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return 0;
        }
        return prev - 50;
      });
    }, 50);

    // cleanup on stop/unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{(remainingTime / 1000).toFixed(2)}</p>
    </Container>
  );
}
