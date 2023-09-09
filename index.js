const arr = [2,3,1,4,6,12,5,21,12,12,0];
const arrTwo = [2,3,1,4,6,12,5,21,12,12,0];

function bubleSort(arr) {
    let  temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
bubleSort(arr);
console.log(`Имепративный подход ${arr}`);

console.log(`Декларативный подход ${arrTwo.sort((a,b)=>a-b)}`)

