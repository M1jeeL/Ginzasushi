import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startRemoveAllFromCart } from "../../actions/products";
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from "reactstrap";
import { formatearNumero } from "../../helpers/formatearNumero";
import CartModalRow from "./CartModalRow";
import "./CartModal.scss";

const CartModal = ({ openCartModal, handleCartModal }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.products);

  const totalShow = formatearNumero(total);

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <div className="modal-cart-container">
      <Modal
        isOpen={openCartModal}
        toggle={handleCartModal}
        className="modal-cart"
      >
        <ModalHeader toggle={handleCartModal} className="header-modal-cart">
          Carrito de compras
        </ModalHeader>
        {cart.length > 0 ? (
          <>
            <ModalBody>
              {cart.map((item, index) => (
                <CartModalRow key={index} item={item} index={index} />
              ))}
            </ModalBody>
            <ModalFooter className="footer-modal-cart">
              <strong className="subtotal-modal-cart">
                Subtotal: ${totalShow}
              </strong>
              <Button
                type="button"
                style={styleBtnProduct}
                onClick={() => dispatch(startRemoveAllFromCart())}
              >
                Vaciar Carrito
              </Button>

              <Link to="/checkout" className="btn-modal-cart">
                <Button
                  type="button"
                  style={styleBtnProduct}
                  onClick={handleCartModal}
                >
                  Finalizar Compra
                </Button>
              </Link>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>No hay productos en el carrito</ModalBody>
            <ModalFooter className="footer-modal-cart">
              <Link to="/carta">
                <Button
                  type="button"
                  style={styleBtnProduct}
                  onClick={handleCartModal}
                  className="btn-modal-cart"
                >
                  Ver carta
                </Button>
              </Link>
            </ModalFooter>
          </>
        )}
      </Modal>
    </div>
  );
};

export default CartModal;
