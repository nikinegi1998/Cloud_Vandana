// ====================================================
// Perform sorting of an array in descending order.
// ====================================================

function performSorting() {
  let arr = [4, 8, 0, 7, 1, 3];

  console.log("Before sorting: ", arr);

  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[max] < arr[j]) max = j;
    }

    let tmp = arr[max];
    arr[max] = arr[i];
    arr[i] = tmp;
  }

  console.log("After sorting: ", arr);
}

performSorting();
