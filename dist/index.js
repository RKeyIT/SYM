"use strict";
const currentDate = new Date();
const operationWithCoins = [];
class Coin {
    constructor(amount, color, comment) {
        this.amount = amount;
        this.color = color;
        this.comment = comment;
        this.date = new Date();
        operationWithCoins.push(this);
    }
}
//# sourceMappingURL=index.js.map