import "./style.css";

export default function Form({addWatch}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = Array.from(new FormData(evt.target).entries())
    .reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {});
    
    addWatch(data)
    evt.target.reset()
  }

  return (
    <form action="" onSubmit={handleSubmit} >
      <div className="form__wrap">
        <p>
          <label htmlFor="city">Название</label>
          <input type="text" name="city" id="city" required/>
        </p>
        <p>
          <label htmlFor="time-zone">Временная зона</label>
          <input type="number" name="time-zone" id="time-zone" required/>
        </p>
        <button type="submit">Добавить</button>
      </div>
    </form>
  );
}
