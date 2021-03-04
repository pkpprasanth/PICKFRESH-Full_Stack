
export class CartGetSet
{
  orderId: number;
  orderPrice: number;
  orderProductName: string;
  orderQuantity: number;
  orderedDate: string;
  userEmail: string;
  userName: string;

  constructor(orderId: number, orderPrice: number, orderProductName: string, orderQuantity: number,
              orderedDate: string, userEmail: string, userName: string)
  {
    this.orderId = orderId;
    this.orderPrice = orderPrice;
    this.orderProductName = orderProductName;
    this.orderQuantity = orderQuantity;
   // this.orderedDate = orderedDate;
    this.userEmail = userEmail;
    this.userName = userName;
  }
}
