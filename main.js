const { addOrder, updateOrderStatus, getOrders, getOrderById } = require('./orders');


const order1 = addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Es Teh', price: 5000 }
]);

const order2 = addOrder('Bob', [
  { name: 'Kwitiaw', price: 20000 },
  { name: 'Jus Jeruk', price: 5000 }
]);

console.log('Daftar Pesanan:');
console.log(getOrders());


updateOrderStatus(order1.id, 'Diproses');
console.log(`Pesanan ID ${order1.id} setelah diperbarui:`);
console.log(getOrderById(order1.id));


console.log('Daftar Pesanan Terbaru:');
console.log(getOrders());
