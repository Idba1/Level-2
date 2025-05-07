{
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

        // getter
        private getBalance() {
            return this._balance;
        }


        getHiddenBalance() {
            return this.getBalance();
        }
    }



    const goribManusherAccount = new BankAccount(111, 'gorib', 29);
    goribManusherAccount.deposit = 500;
    const blnc = goribManusherAccount.getHiddenBalance();
    console.log(blnc);
}
