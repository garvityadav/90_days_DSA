import {
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7,
  pattern8,
  pattern9,
} from "./patterns";
import { sortingEx_1, bubbleSort, insertionSort } from "./sorting";
const patterns = (pattern: any, number: number) => {
  return pattern(number);
};

// patterns(pattern9, 5);

//sortingEx_1(6, [12, 6, 25, 78, 100, 1]);
// bubbleSort(6, [5, 4, 3, 2, 1, 0]);
insertionSort(6, [5, 4, 3, 2, 1, 0]);
