import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimerConextextProvider from './store/timer-context.tsx';

function App() {
  return (
    <TimerConextextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerConextextProvider>
  );
}

export default App;
