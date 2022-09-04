const currentDate: Date = new Date();
// This is general date. From this date begins everything operations.

const operationWithCoins: object[] = [];
// This array will save any operations with Coin objects

class Coin {
    readonly date = new Date()  //writing date of operation

    //  Getting to constructor info about operation. 
    //  Amount of coins. How much of coins was operated. 
    //  Color (green, blue, red === getting, saving, spending)
    //  Comment: What that was of operation. Buying bread?
    constructor(public amount: number, readonly color: string, public comment: string){
        operationWithCoins.push(this);
    }
    
}