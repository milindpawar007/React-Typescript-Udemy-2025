import Input from './components/Input';
import Button from './components/Button';
import Container from './components/container';
function App() {
  return (
    <main>
      {/* <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button el={'button'}>A button</Button>
      </p>
      <p>
        <Button
          el={'anchor'}
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Link
        </Button>

      </p> */}
      <Container as={Button}>Click Me</Container>
    </main>
  );
}

export default App;
