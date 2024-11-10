type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number | string => {
    if(shape.shape === 'circle') {
        const result: number = Math.PI * shape.radius * shape.radius;
        return result;
    }else if(shape.shape === 'rectangle'){
        const result:number = shape.width * shape.height;
        return result
    }
    return ('Please give a valid form of data');       

}

