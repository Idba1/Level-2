// const fs = require("fs");

// console.log("Task 1");

// const text = "Learning file system"

// fs.writeFileSync("./hello.txt", text)

// console.log("Task 3");

// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

// console.log("Task 4");

// console.log(data);





// const fs = require('fs');

// console.log("Task 1");

// let text = "node js";
// fs.readFile('./hello.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("something went wrong", err);
//         return;
//     }
//     text = data;
//     console.log(text, "Inside call back");
// });

// console.log(text);

// console.log("Task 3");






// const fs = require('fs');

// const data = 'Hey Idba!';

// fs.writeFile('output.txt', data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully!');
// });


// console.log("Task 1");

// let text = "node js";
// fs.readFile('./output.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("something went wrong", err);
//         return;
//     }
//     text = data;
//     console.log(text, "Inside call back");
// });

// console.log(text, "from console");

// console.log("Task 3");




// console.log("Task 1");
















// const fs = require('fs');

// fs.readFile('./hello.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("something went wrong", err);
//         return;
//     }
//     fs.writeFile('./output.txt', data, { encoding: "utf-8" }, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//             return;
//         }
//         console.log('File written successfully!');
//     });
// });



const fs = require("fs");

const readStream = fs.createReadStream("./hello-world.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
    console.log(data);

    writeStream.write(data, (err) => {
        if (err) {
            throw new Error("Write Error: " + err.message);
        }
    });
});

readStream.on("error", (err) => {
    throw new Error("Read Error: " + err.message);
});

writeStream.on("error", (err) => {
    throw new Error("Write Error: " + err.message);
});

readStream.on("end", () => {
    console.log("Reading ended");
    writeStream.end();
});

writeStream.on("finish", () => {
    console.log("Written successfully");
});
