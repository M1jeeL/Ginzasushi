export const types = {
  login: "[Auth]: login",
  logout: "[Auth]: logout",
  register: "[Auth]: register",
  loadUser: "[Auth]: loadUser",

  addToCart: "[Cart] Add to cart",
  removeOneFromCart: "[Cart] Remove one item from cart",
  removeAllFromCart: "[Cart] Remove all items from cart",
  clearCart: "[Cart] Clear cart",
  addQuantityForEach: "[Cart] Add +1 quantity per item ",
  removeQuantityForEach: "[Cart] Remove -1 quantity per item",
  setCart: "[Cart] Set Cart",
  calculateTotal: "[Cart] Calculate total from cart",

  productsAddNew: "[Products] New product",
  productsActive: "[Products] Set active product",
  productsLoad: "[Products] Load products",
  productsUpdated: "[Products] Updated product",
  productsFileUrl: "[Products] Updated image url",
  productsDelete: "[Products] Delete note",

  categoriesLoad: "[Products] Load Categories",
  categoriesAddNew: "[Products] New Category",
  categoriesUpdated: "[Products] Updated Category",
  categoriesDelete: "[Products] Delete Category",

  uiSetError: "[UI] setError",
  uiRemoveError: "[UI] removeError",
  uiStartLoading: "[UI] startLoading",
  uiFinishLoading: "[UI] finishLoading",
  uiLoadComunas: "[UI] loadComunas",
  uiShowSidebar: "[UI] showSidebar",
};
