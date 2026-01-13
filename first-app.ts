
// Implement a generic function that returns the same value.
function identity<T>(value: T): T {

    return value

}

identity<string>("hello");
identity<number>(42);
identity(true);

//Create a function that wraps any value into an array.

function wrapInArray<T>(value: T): T[] 
{
    return [value]
}


// Create a generic Pair<T, U> type.
type Pair<T, U> = {
 first:T,
 second:U
};

const p: Pair<number, string> = { first: 1, second: "one" };



//Create a function that accepts only values with a length property.

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello");   // ok
getLength([1,2,3]);  // ok
getLength(123);      // ❌ error


// Safely get a value from an object using generics.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Milind" };

getProperty(user, "name"); // string
getProperty(user, "age");  // ❌ error


// Design a reusable API response type.

type ApiResponse<T> = {
  // implement
  data :T,
   success:boolean
};

const res: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Milind" },
  success: true,
};
