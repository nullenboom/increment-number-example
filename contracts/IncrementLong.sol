pragma solidity ^0.5.0;

contract IncrementLong {
   int256 sum;
   int256 count;

   function add(int256 n) public {
       sum = sum + n;
       count = count + 1;
   }
}




