type AreaString2<T> = {
    [key in keyof T]: T[key]
}

const area1: AreaString2<{ height: string; width: number }> = {
    height: '100',
    width: 50,
}

console.log(area1.height);