type MyCallback<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: MyCallback<T>): Array<T> {
  const myNewArray: Array<T> = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      myNewArray.push(array[index]);
    }
  }

  return myNewArray;
};
