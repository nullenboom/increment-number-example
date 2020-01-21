pragma solidity ^0.5.15;

contract IncrementLong {
   int256 count;

   function increment() public {
       count = count + 1;
   }
}




