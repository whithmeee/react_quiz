import './index.scss';
import React, { useState } from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, questuin, onClickVarian }) {
  const response = Math.floor((step / questions.length) * 100);
  return (
    <>
      <div className='progress'>
        <div style={{ width: `${response}%` }} className='progress__inner'></div>
      </div>
      <h1>Что такое {questuin.title}</h1>
      <ul>
        {questuin.variants.map((text, index) => (
          <li onClick={() => onClickVarian(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const questuin = questions[step];

  const onClickVarian = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === questuin.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className='App'>
      {step !== questions.length ? (
        <Game step={step} questuin={questuin} onClickVarian={onClickVarian} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
