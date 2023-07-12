// SPDX-License-Identifier: GPL-3.0
// Pragmas are common instructions for compilers about how to treat the source code (e.g. pragma once).
pragma solidity ^0.8.8 ; //Everytime we need to mention the version of the solidity and it is written to very top position
//pragma solidity ^0.8.7 tells . Hey, any version of zero point 8.7 And above is okay for this contract. This means zero point 8.8 would work
//pragma solidity >=0.8.7<0.9.0 This means that any compiler between zero point 8.7 and zero point 9.0 would work. This means zero point 8.8 would work. Zero

// point 8.9 would work 0.8 point 10 would work. But zero point 9.0 would not work because it is not strictly less than 0.9 point
contract SimpleStorage {
    struct People{
    uint favourite;
    string name;
}
People public person=People({favourite:2,name:"Anshul"});
    //contract is the keyword that  tells our compiler that the next section of this code is going to define a contract. You can think of a contract similar to a class in any object oriented programming
// A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain


// Data types in Solidity

//Boolean,unit,int,address,bytes

// Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. Solidity provides several elementary types which can be combined to form complex types.

// The concept of “undefined” or “null” values does not exist in Solidity, but newly declared variables always have a default value dependent on its type.

// int / uint: Signed and unsigned integers of various sizes. Keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.





//    bool hasFavouriteNumber=false;
  
    // this favorite number actually does get set to a default value, the default

// value for solidity is going to be whatever the node value is, which in solidity is case zero
//    string favouriteNumberInText="Five";
//    int256 favouriteInt=-5;
//    bytes32 favouriteBytes="cat";
//     bytes objects, or a bytes 32, again, representing how many bytes we want them to be. And this says that we have called favorite bytes, and we're

// just gonna set it equal to cat. So strings are actually really interesting, because strings are secretly just bytes objects, but

// only for text to a cat is actually a string, but can automatically get converted into one of these bytes object
 uint256 public  favorite;                 
                                            //For overiding  we wrote "virtual"   
function store(uint favouriteNumbers) public  virtual {
    favorite = favouriteNumbers;                
}

// 0xd9145CCE52D386f254917e481eB44e9943F39138
//  Remember, anytime we do anything on the

// blockchain, we modify any value, we are sending a transaction. So

// deploying a contract is modifying the blockchain to have this contract, it's modifying the state of the blockchain. And

// if we had sent this on a Rinkeby, or COVID, or main net network, we would have had to spend the gas to actually deploy

// this contract. And this is the simulation of how much gas and the transaction hash and from and to and all this other stuff

// about our transaction had, we actually deployed it to a real network. But since it's JavaScript VM, it's all fake

// information



//  Now the question might be having is, that's really cool, Patrick, but I can't see what favorite number

// actually is, how do I know that those transactions are actually going through? Well, right now, the visibility of our favorite

// number is set to private, so we actually can't see it. And we'll talk about visibility in just a second. To make it so that we

// can see it. We'll change our favorite numbers visibility to public.

// public: visible externally and internally (creates a getter function for storage/state variables)

// every single time we change the state of the blockchain, we do it in a

// transaction
//  Public is visible

// externally and internally, meaning anybody who interacts with this contract or sees this contract can see what's stored

// in this favorite number function. You'll see here in the solidity documentation, it says it creates a getter function for

// the storage slash state variables. When we add this keyword public to favorite number, what we're actually

// doing is we're creating what's called a getter function for favorite number, we're basically creating a function that says to

// return the value of favorite number, and that's why this blue button pops up. Because this blue button is a function that

// says, hey, return the value of favorite number

// private: only visible in the current contract

// external: only visible externally (only for functions) - i.e. can only be message-called (via this.func)

// internal: only visible internally


//view ,pure
// Functions can be declared view in which case they promise not to modify the state.

// But the pure function promise that they will not modify the state also they cannot read the state
function retrive() public view returns(uint256){
    return favorite;            //returns keyword tells that what the retrive function will return since we hAve used the favourite state then the return has unint type 
}
function add() public pure returns(uint)
{

return (1+1);
// Since we're just reading from the blockchain. Remember, we

// only spend gas we only make a transaction if we modify the blockchain state. So you'll notice in our little console

// down here, that if I call retrieve this call things comes up. However, it looks different than when we call the store

// function. And we call the store function, we get this little checkmark, we get a hash, we don't get a little checkmark.


// IF A GAS IS CALLING A FUNCTION WHICH IN TURNS CALLS A FUNCTION THEN WE HAVE TO PAY THE GAS FEE


}
//Declaring the arrays
People[] public people;
function addperson(string memory _name,uint _favouriteNo)public{
   
    // People memory newPerson=People({favourite:_favouriteNo,name:_name});
    // people.push(newPerson);

//    THERE ARE COUPLE OF WAYS TO INITIALISE THE NEW PERSON LET'S SEE
    people.push(People({favourite:_favouriteNo,name:_name}));

   
}


// Reference Types in Solidity
// A reference type variable is one that stores the location (memory address) of their data on the Heap memory and they don't share their data directly.
// Examples of reference types in Solidity include strings, structs, arrays, and mapping.
//ARRAYS AND STRUCT
// The struct data type is a reference data type that can be used to create a structure of other data types. A struct can contain both value type and reference type including other structs but not a struct of itself.

// Solidity provides a way to define new types in the form of structs

// Solidity gives us the flexibility to create our own data type using struct, which is just a collection of variables under a single name. This allows us to organize data according to our needs.

// How to define a struct in Solidity
// We define a struct with the keyword struct followed by its name and curly braces. Inside, we add more than one member, as a struct contains members of different data types except for a member of its own data type.

// How to declare a struct object
// A struct object is declared using the name of the early defined struct followed by the object name and a semicolon. For our example, the declaration will look like this: User object_name;. To assign a value to a struct object, we either assign every member a value one by one or we assign it all at once by passing the value of each member as an argument on the struct.


//*********** MEMORY AND STORAGE ******************/

// EMV OVERVIEW
// EVM CAN STORE THE DATA INTO SIX PLACES
// 1. STACK
// 2.MEMORY
// 3.STORAGE
// 4.CALLDATA
// 5.CODE
// 6.LOGS


// Call data and memory represent that the the variable one exists temporarily  get stored temporarily 
// CALL DATA IS THE TEMPORARILY VARIABLE THAT CANNOT BE MODIFIED 
// STORAGE IS THE PERMANENT VARIABLE THAT CAN BE MODIFIED 
// IF NOTHING IS MENTIONED THEN AUTOMATICALLY THE VARIABLE WILL BE STORAGE 

// WE CAN USE MEMORY ONLY IN ARRAYS,STRUCT,MAPPING AND SINCE STRING IS AN ARRAY IN BYTES 
// SO WE USE MEMORY KEYWORD ONLY FOR THESE TYPES


// MEMORY VS THE STORAGE
// Every complex type, i.e. arrays and structs, has an additional annotation, the “data location”, about whether it is stored in memory or in storage.

// Mapping
// Concept of keys and value
// mapping(key=>value)
 // key value
//  0=>Ravvi
// 5=>Akash
// 100=>Rita

// we write the data type of key and value
mapping(uint => string) public rollno;
function setter(uint keys, string memory name) public{

rollno[keys]=name;
}




}

// NOW CREATING DIFFERENT CONTRACTS SO THAT THEY CAN INTERRACT WITH EACH OTHER













// contract Storage{

// uint favourite;
// // ARRAYS

// struct People{
//     uint favourite;
//     string name;
// }

// People[] public people; //IT IS DYNAMICALLY STORED AT=RRAY BECAUSE IT HAS NO FIXED LENGTH
// // People[3] public people; //IT IS STATICALLY STORED ARRAY BECAUSE IT HAS FIXED LENGTH

// People public person=People({favourite:2,name:"Anshul"});



// function storage1(uint256 fav) public{
//     favourite=fav ;
// }

// }

