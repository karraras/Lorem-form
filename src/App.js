import React from "react";
import data from "./text";
function App() {
  const [value, setValue] = React.useState(1);
  const [info, setInfo] = React.useState([]);
  function loop() {
    let dat = [];
    for (let i = 0; i < value; i++) {
      dat.push(data[i]);
    }
    setInfo(dat);
  }
  React.useEffect(() => {
    loop();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          step="1"
          min="1"
          max="8"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="btn" onClick={() => loop()}>
          generate
        </button>
      </form>
      <article>
        {info.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
