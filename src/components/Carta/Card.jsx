import "./Card.scss";

function Card({ item }) {
  const { nombre, descripcion, precio, image_src } = item;
  return (
    <>
      <div className="card-info">
        <div className="card-titulo">
          <span>{nombre}</span>
        </div>
        <div className="card-ingredientes">
          <span>{descripcion}</span>
        </div>

        <div className="card-precio">
          <footer>
            <span>$ {precio}</span>
          </footer>
        </div>
      </div>
      <div className="producto-pic-container-card">
        <img
          src={image_src}
          alt="ginzasushi sushi barros luco"
          className="producto-pic-card"
        />
      </div>
    </>
  );
}

export default Card;
