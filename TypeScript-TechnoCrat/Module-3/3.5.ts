{
    // access modifiers
    class BankAccount {
        readonly id: number;
        public name: string;
        private _balance: number;
        protected _balance2: number;

        constructor(id: number, name: string, balance: number, balance2: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._balance2 = balance2;
        }

        addDeposit(ammount: number) {
            this._balance = this._balance + ammount;
        }

        getBalance() {
            return this._balance;
        }
    }


    class StudentAccount extends BankAccount {
        constructor(id: number, name: string, balance: number, balance2: number) {
            super(id, name, balance, balance2);
        }
        test() {
            this._balance2 = 300000;
            console.log(`${this._balance2}`);
        }
    }


    const goribManusherAccount = new BankAccount(111, 'gorib', 29, 0);
    // goribManusherAccount.balance = 200000;
    goribManusherAccount.addDeposit(200000000);
    console.log(goribManusherAccount.getBalance());

    const std1 = new StudentAccount(100, 'student', 54, 45);
    console.log(std1.getBalance());
    std1.test();









}