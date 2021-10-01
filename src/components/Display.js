import './Display.css';

function Display({ input }) {
  return (
    <section className="display">
      <div data-cy="input">{input}</div>
    </section>
  );
}

export default Display;
