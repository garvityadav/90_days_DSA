import {
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7,
  pattern8,
} from "./patterns";

const patterns = (pattern: any, number: number) => {
  return pattern(number);
};

patterns(pattern8, 5);
