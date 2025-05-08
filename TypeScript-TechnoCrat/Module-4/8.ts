async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}

const t1 = squareAsync(4).then(console.log);
console.log(t1)        // Output after 1s: 16
const t2 = squareAsync(-3).catch(console.error);
console.log(t2)    // Output: Error: Negative number not allow2d