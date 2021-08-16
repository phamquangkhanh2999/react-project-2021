var initialState = [
  {
    id: 1,
    name: 'Iphone X 64G',
    imgae:
      'https://didongmoi.com.vn/site/pictures/slide_posts/dien-thoai-iphone-x-64gb-ban-qt-like-new-99-den.jpg',
    des: 'San pham do app san xuat',
    price: 700,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: 'Iphone 8 plus',
    imgae:
      'https://product.hstatic.net/1000329106/product/iphone_8_plus_black_299ef04de97e4021ba2bdd8d6f55c147_master.jpg',
    des: 'San pham do app san xuat',
    price: 900,
    inventory: 10,
    rating: 5,
  },
  {
    id: 3,
    name: 'Iphone XS Max',
    imgae:
      'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
    des: 'San pham do app san xuat',
    price: 1000,
    inventory: 10,
    rating: 3,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
