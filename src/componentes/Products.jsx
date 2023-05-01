export default function Context({
  props,
  addComment,
  add,
  delette,
  edit,
  userType,
}) {
  return (
    <div className="productos">
      {props.map((object, index) => (
        <div className="page" key={index}>
          <div className="prod">
            <div className="buttons">
              {userType === "Proveedor" && (
                <div>
                  <img
                    style={{ cursor: "pointer" }}
                    className="img"
                    onClick={() => edit(object.id)}
                    src="https://icon-library.com/images/white-edit-icon/white-edit-icon-5.jpg"
                    alt={object.id}
                  />
                  <img
                    style={{ cursor: "pointer" }}
                    className="img"
                    onClick={() => delette(object.id)}
                    src="https://modayjoyas.com/wp-content/uploads/2022/11/que-no-puede-faltar-en-una-peluqueria.png"
                    alt={object.id}
                  />
                </div>
              )}
            </div>
            <div>
              <h3>{object.name}</h3>
              <p className="pes">Cantidad:{object.cantidad}</p>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="comentar"
            onClick={() => {
              addComment(index);
            }}
          >
            <p className="p">COMENTAR</p>
          </div>
        </div>
      ))}
      <div className="prod">
        <img
          style={{ cursor: "pointer" }}
          className="img2"
          onClick={add}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/2048px-Plus_font_awesome.svg.png"
          alt="plus"
        />
      </div>
    </div>
  );
}
