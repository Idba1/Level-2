{
    // {
    // access modifiers
    class BankAccount {
        readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter
        set deposit(ammount: number) {
            this._balance = this._balance + ammount;
        }

        // addDeposit(ammount: number) {
        //     this._balance = this._balance + ammount;
        // }

        // getter
        get balance() {
            return this._balance;
        }
        // getBalance() {
        //     return this._balance;
        // }
    }



    const goribManusherAccount = new BankAccount(111, 'gorib', 29);
    // goribManusherAccount.balance = 200000;
    // goribManusherAccount.addDeposit(200000000); 
    // console.log(goribManusherAccount.getBalance()); //function call kore

    const myBalance = goribManusherAccount.balance; //property'r moto kore
    console.log(myBalance);
    goribManusherAccount.deposit = 1000;
    console.log(goribManusherAccount.balance);








}
