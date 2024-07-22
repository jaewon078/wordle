import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="tentativeGuess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="tentativeGuess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
