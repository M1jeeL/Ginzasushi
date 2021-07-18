import "./Card.css";

function Card({ item}) {
  const { nombre, ingredientes, precio } = item;
  const src = "https://images.vexels.com/media/users/3/230800/isolated/preview/6fae7b492e567aae76ab5220a894087c-cute-dibujos-animados-de-sushi.png"

  return (
    <>
      
        <div className="card-info">
          <div className="card-titulo">
            <span>{nombre}</span>
          </div>
          <div className="card-ingredientes">
            <span>{ingredientes}</span>
          </div>

          <div className="card-precio">
            <footer>
              <span>$ {precio}</span>
            </footer>
          </div>
        </div>
        {src !== "" ? (
          <div className="producto-pic-container-card">
            <img
              src={src}
              alt="ginzasushi sushi barros luco"
              className="producto-pic-card"
            />
          </div>
        ) : (
          ""
        )}
      
    </>
  );
}

export default Card;
