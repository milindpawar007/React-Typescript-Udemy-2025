import Container from './UI/Container.tsx';
import { timer as TimerProps, useTimerContext } from '../store/timer-context.tsx';
import { useEffect, useRef, useState } from 'react';


export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTimer] = useState(duration * 1000);

  const interval = useRef<number | null>(null);

  const { isRunning } = useTimerContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }
  useEffect(() => {
    
    if(isRunning)
    {
      const timer = setInterval(() => {
          setRemainingTimer(p => p - 50);
        }, 50);
        interval.current = timer;
    }
    else if(!isRunning && interval.current)
    {
      clearInterval(interval.current)
    }

    

    return () => {
      if (interval.current) clearInterval(interval.current)
    }
  }, [])

  const FormattedRemainingTimer = () => {
    return ((remainingTime / 1000).toFixed(2))
  }

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{FormattedRemainingTimer()}</p>
    </Container>
  );
}
