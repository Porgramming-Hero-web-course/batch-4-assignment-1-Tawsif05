# The Significance of Union and Intersection Types in TypeScript

In TypeScript union and intersection types are very important for reduce code duplication, improve code readability and many . Here is some description between union and intersection below;

---

## 1. Union Types (`|`)

The union type allows multiple types. So that we can use it easily and this makes our code clean and readable. Also it reduce code repetition so that our time can save and also could will get readability.

### Benefits Of Union Types In Some Points:
- Helps in writing functions that handle multiple types.
- Reduces code duplication.
- Minimizes common errors.

### Examples-01:
```typescript
type Age = string | number;

let userAge: Age;

userAge = 25; // ok
userAge = "25"; // ok
userAge = true; // gives an error because type should be string or number.
```

### Example-02:
```typescript


type Car = {
    name: string;
    modelNum: number;
    year: number; 
}

type Bike = {
    name: string;
    cc: number;
    year: number;
}

const vehicle: Car | Bike = {
    name: "something",
    cc: 1200,
    year: 2015,
    modelNum: 11120,
    // everything is ok until now
    // By using the union type, we can easily check two types for the vehicle. It also makes the code readable and clean.
    age: 3 , // this gives an error so we can easily find errors
}

```

## 2.Intersection Type (`&`)


An intersection type combines multiple type into one. As simple as that. Let we have two type and now we want a variable who should include this two type. So we do not need to write all two type for that. By using intersection we can easily combine this two type. 


### Benefits Of Intersection Types In Some Points:

 Allow creating types that combine two types in fact multiple types not two type. It allow as many type as you want.

 Intersection Types enforce stricter type after creating combine type. You must follow the combine types.


###Example-1

```typescript

type student = {
    name: string;
    age: number;
 }

type partTimeJobHolder = {
    name: string;
    job: string;
}

const AStudentWithPartTimeJob: student & partTimeJobHolder  = {
    name: 'taw',
    age: 20,
    job: 'something' // if you not give this property typescript gives you error for using intersection type . So from that we can understand that it strict the combine type and definitely it combine multiple type.
} 
```





