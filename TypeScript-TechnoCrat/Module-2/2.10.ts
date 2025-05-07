{
    // mapped types

    const arrOffNumbers: number[] = [1, 2, 3, 4];

    // const arrOfString: string[] = ['1', '2', '3', '4'];

    const arrOfString: string[] = arrOffNumbers.map(number => number.toString());
    console.log(arrOfString);



    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'] //look up type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // type AreaString = {
    //     [key in 'height' | 'width']: string
    // }

    type AreaString = {
        [key in keyof AreaNumber]: string
    }

    type AreaStringBool = {
        [key in keyof AreaNumber]: boolean
    }






    type AreaString2<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString2<{ height: string; width: number }> = {
        height: '100',
        width: 50,
    }







}