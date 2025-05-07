{
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }
        else {
            return products.reduce((Prev, current) => current.price > Prev.price ? current : Prev);
        }
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    const t1 = getMostExpensiveProduct(products);
    console.log(t1);
    // Output: { name: "Bag", price: 50 }





}