import { observable, computed, action } from 'mobx';

// 购物车Store
class CartStore {
  @observable bookList = [];
}

export default new CartStore();
