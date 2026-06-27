function CartSidebar({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="sidebar">
      <h2>Cart Summary</h2>

      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.qty}
          </p>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartSidebar;