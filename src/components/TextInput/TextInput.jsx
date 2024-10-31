// - Синхронізація з локальним сховищем:

//   Зроби текстове поле, яке синхронізується з localStorage. При введенні тексту зберігай його і в useState, і в localStorage, а при першому рендері завантажуй значення з localStorage (якщо воно існує).

const TextInput = ({ handleInput, value }) => {
  return (
    <div>
      <input onChange={handleInput} type="text" placeholder="Type here..." />
      <p>Output: {value}</p>
    </div>
  );
};

export default TextInput;
