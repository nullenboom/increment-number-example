pragma solidity ^0.5.0;

contract IncrementShort {
   int256 sum;
   int256 count;
   
   function add(int256 n) public {
       sum += n;
       count++;
   }
}




