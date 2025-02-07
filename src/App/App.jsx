import React, { useState } from "react";
import styles from "./App.module.css";


function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите значение:");
    if (promptValue && promptValue.length >= 3) {
      setCurrentValue(promptValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  const onAddButtonClick = () => {
    if (currentValue.length >= 3) {
      setList((prevList) => [...prevList, {
		id: getUniqId(),
		value: currentValue
	  }]);
      setCurrentValue("");
	  setError('')
    }
  };

  const isValueVaild = currentValue.length < 3

  function getUniqId(){
	return Date.now()
  }

  return (
    <div className={styles.app}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={styles["no-margin-text"]}>
        Текущее значение <code>value</code>: "<output className={styles["current-value"]}>{currentValue}</output>"
      </p>
      {error && <div className={styles.error}>Введенное значение должно содержать минимум 3 символа</div>}
      <div className={styles["buttons-container"]}>
        <button className={styles.button} onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button
          className={styles.button}
          onClick={onAddButtonClick}
          disabled={isValueVaild}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        {list.length === 0 ? (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        ) : (
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} className={styles["list-item"]}>
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
