import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import Timer from "../components/Timer";


export type timer = {
   name: string;
   duration: number;
}
type TimersState =
   {
      isRunning: boolean;
      timers: timer[]
   }

type TimerContextValue = TimersState & {
   addTimer: (Timer: timer) => void,
   startTimers: () => void,
   stopTimers: () => void
}
const TimerConextext = createContext<TimerContextValue | null>(null);

export function useTimerContext() {
   const timerCtx = useContext(TimerConextext)
   if (timerCtx === null) {
      throw new Error("timer contextx can be null")
   }
   return timerCtx
}

type TimerConextextProviderProps = {
   children: ReactNode;

}

const initalState: TimersState = {
   isRunning: true,
   timers: []
}

type StartTimerAction = {
   type: 'START_TIMERS'
}

type addTimerAction = {
   type: 'ADD_TIMER',
   payload: timer
}

type StopTimerAction = {
   type: 'STOP_TIMERS'
}


type Action = StartTimerAction | addTimerAction | StopTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
   if (action.type === 'START_TIMERS') {
      return {
         ...state,
         isRunning: true
      }
   }
   else if (action.type === 'ADD_TIMER') {
      return {
         ...state,
         timers: [...state.timers, {
            name: action.payload.name,
            duration: action.payload.duration,
         }]
      }
   }
   else if (action.type === 'STOP_TIMERS') {
      return {
         ...state,
         isRunning: false
      }
   }
   return state;
}

export default function TimerConextextProvider({ children }: TimerConextextProviderProps) {
   const [timerState, dispatch] = useReducer(timersReducer, initalState)

   const ctx: TimerContextValue = {
      timers:timerState.timers ,
      isRunning: timerState.isRunning,
      addTimer(timerData) {

         dispatch({ type: 'ADD_TIMER', payload: timerData })
      },
      startTimers() {
         dispatch({ type: 'START_TIMERS' })
      },
      stopTimers() {
         dispatch({ type: 'STOP_TIMERS' })
      }

   };
   return (
      <TimerConextext.Provider value={ctx}>
         {children}
      </TimerConextext.Provider>)
}

