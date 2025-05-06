{
    // basic promise

    // simulate
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something'
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        })
    }

    // calling create promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        console.log(data);
        return data;
    }

    showData();


    // for boolean
    const createPromiseBool = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            const data: boolean = true
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        })
    }

    const showData2 = async (): Promise<boolean> => {
        const data: boolean = await createPromiseBool();
        return data;
    }

    showData2();


    // for object

    type Something = { something: string };

    const createPromise3 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' }
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to fetch');
            }
        })
    }

    // calling create promise function
    const showData3 = async (): Promise<Something> => {
        const data: Something = await createPromise3();
        console.log(data);
        return data;
    }

    showData3();

    // get data

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    };


    const getData = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data: Todo = await response.json();
        console.log(data);
        return data;
    }
    getData();

}