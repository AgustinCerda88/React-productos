export default function Modal({
  open,
  close,
  props,
  selection,
  save,
  value,
  setValue,
  cross,
  userType,
  id = "input",
}) {
  if (!open) return null;

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="modal">
      <div className="todo">
        <div className="header">
          <img
            style={{ cursor: "pointer" }}
            className="imgx"
            src="https://static.vecteezy.com/system/resources/previews/001/200/173/non_2x/x-png.png"
            onClick={close}
            alt="imagen"
          />
          <h4 className="h4">Comentarios</h4>
        </div>
        <div className="comentarios">
          <ul className="ul">
            {props[selection].comment.map((cmnt, index) => (
              <div key={index} className="coment">
                <div className="coment__div">
                  <li>{cmnt}</li>
                  <div className="line"></div>
                </div>
                {userType === "Proveedor" && (
                <div style={{ cursor: "pointer" }} onClick={() => cross(index)}>
                  X
                </div>)}
              </div>
            ))}
          </ul>
        </div>
        <div>Añade un comentario</div>
        <input
          onChange={handleChange}
          id="input"
          value={value}
          className="text"
          type="textarea"
          placeholder="Escribe un breve comentario sobre el producto"
        />
        <div
          style={{ cursor: "pointer" }}
          className="button"
          onClick={() => save(value)}
        >
          Añadir
        </div>
      </div>
    </div>
  );
}
