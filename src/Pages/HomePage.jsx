import { useState } from "react";
import Products from "../componentes/Products";
import Modal from "../componentes/Modal";


const HomePage = () => {
  const products = [
    { id: 1, name: "teclado", cantidad: 2, comment: [] },
    { id: 2, name: "monitor", cantidad: 1, comment: [] },
    { id: 3, name: "mouse", cantidad: 3, comment: ["forma ergonomica", "color negro", "sin calbe", "con luz led"] },
  ];

  const [prod, setProd] = useState(products);
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState();
  const [value, setValue] = useState("");
  const [userType, setUserType] = useState("Proveedor");



  const handleUserTypeA = () => {
    setUserType("Cliente"); 
  };

  const handleUserTypeB = () => {
    setUserType("Proveedor");
  };

  const saveComment = (value) => {
    if (value !== "") {
      const newList = [...prod];
      newList[selection].comment.push(value);
      setProd(newList);
      setValue("");
    } else {
      alert("Debes incluir un comentario");
    }
  };

  const addComment = (index) => {
    setIsOpen(true);
    setSelection(index);
  };

  const edit = (id) => {
    let names = "";
    let cantidades = 0;
    let promptCanceled1 = false;
    let promptCanceled2 = false;

    while (names === "") {
      names = prompt("Nombra el producto");
      if (names === "") {
        alert("Debes asignar un nombre");
      } else if (names === null) {
        promptCanceled1 = true;
      }
    }

    while (!promptCanceled1) {
      cantidades = prompt("Modifica la cantidad(numero)");
      if (cantidades === null) {
        promptCanceled2 = true;
        break;
      }
      cantidades = Number(cantidades);
      if (isNaN(cantidades) || cantidades === 0) {
        alert("Debes asignar una cantidad(numero)");
      } else {
        break;
      }
    }

    if (!promptCanceled1 && !promptCanceled2) {
      const newli = [...prod];
      newli.map((object) => {
        if (id === object.id) {
          object.name = names;
          object.cantidad = cantidades;
        }
        return setProd(newli);
      });
    }
  };

  const delette = (id) => {
    const newList = prod.filter((prod) => prod.id !== id);
    setProd(newList);
  };

  const cross = (commentIndex) => {
    const newLi = [...prod];
    newLi[selection].comment.splice(commentIndex, 1);
    setProd(newLi);
  };

  const add = () => {
    let ids = Date.now();
    let names = "";
    let cantidades = NaN;
    let promptCanceled1 = false;
    let promptCanceled2 = false;

    while (names === "") {
      names = prompt("Nombra el producto");
      if (names === "") {
        alert("Debes asignar un nombre");
      } else if (names === null) {
        promptCanceled1 = true;
      }
    }

    while (!promptCanceled1) {
      cantidades = prompt("Modifica la cantidad(numero)");
      if (cantidades === null) {
        promptCanceled2 = true;
        break;
      }
      cantidades = Number(cantidades);
      if (isNaN(cantidades) || cantidades === 0) {
        alert("Debes asignar una cantidad(numero)");
      } else {
        break;
      }
    }

    if (!promptCanceled1 && !promptCanceled2) {
      const copyProd = [...prod];
      copyProd.push({
        id: ids,
        name: names,
        cantidad: cantidades,
      });
      setProd(copyProd);
    }
  };

  const resetWeb = () => {
    window.location.reload();
  };

  return (
    <div className="App">
    <div className="pag">
      <div className="usuarios">
        <div className="usuarios_indicador">
          <h5><span></span> {userType}</h5>
        </div>
        <div className="usuarios_boton">
          <div style={{ cursor: "pointer" }} onClick={handleUserTypeA}>Cliente</div>
          <div  style={{ cursor: "pointer" }} onClick={handleUserTypeB}>Proveedor</div>
        </div>
      </div>
      <Modal
        open={isOpen}
        props={prod}
        selection={selection}
        save={saveComment}
        close={() => setIsOpen(false)}
        value={value}
        setValue={setValue}
        cross={cross}
        userType={userType}
      />
      <div className="title" onClick={resetWeb}>
        <h1 style={{ cursor: "pointer" }}>Productos</h1>
      </div>
      <Products
        props={prod}
        addComment={addComment}
        add={add}
        delette={delette}
        edit={edit}
        userType={userType}
      ></Products>
    </div>
    </div>
  );
};

export default HomePage;
