let orders = [];
let orderId = 1;


function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const order = {
    id: orderId++,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(order);
  return order;
}


function updateOrderStatus(id, status) {
  const order = orders.find(order => order.id === id);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
}


function getOrders() {
  return orders;
}


function getOrderById(id) {
  return orders.find(order => order.id === id);
}

module.exports = { addOrder, updateOrderStatus, getOrders, getOrderById };
