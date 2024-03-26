import React, { useState } from "react";
import "../compontent/Otp.css";
import OtpInput from "react-otp-input";
import toast from "react-hot-toast";
import { object } from "yup";

export const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleconifrm = () => {
    setOtp("");
    sessionStorage.setItem("otp", otp);
    toast.success("user are sucess");
  };

//   function countok(arr, target) {
//     let count = 0;
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         count += countok(item, target);
//       } else if (item === target) {
//         count++;
//       }
     
//     });
//     return count;
//   }
//   let target = 2;
//   let arr = [1, 2, 3, 4, 2, 4, [2, 2], 7, [2, 2]];
//   let resuit = countok(arr, target);
//   console.log(resuit);
 
//  let obj= {"a":1, "b":2, "c":3} 
// let swapped = {};
// const map= new Map(object.entries(obj))
// console.log(map)
// const obj = { "a":1, "b":2, "c":3 }
// const map = new Map(Object.entries(obj));
// console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

// const swappedObj = Object.fromEntries([...map.entries()].map(([key, value]) => [value, key]));
// console.log(swappedObj)

                // second task 

  const array1 = [3, 4, 3, 2, 5, 0, 4, 3, 2, 6];

const output = array1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(output);


 const array = [3, 4, 3, 2, 5, 0, 4, 3, 2, 6];
const obj= {}

array.forEach((item)=>{
    if(obj[item]){
         obj[item]= obj[item]+1
}else{
     obj[item]=1
}
})
console.log(obj)
 

        //first task 

// const fruits = "shailendra singh rathod";
// const a = fruits.split(" ").reverse().join(" ")  
// let b =new Array(a)
// console.log(b)

 

 let one = 'shailendra singh  rathod';
let two = one.split('');
console.log(two)
let arr=new Array(two.length)
console.log(arr)
let i=0;
while(i<two.length){
    console.log(i)
    arr.push(two[i].split('').reverse().join(''));
i++;
}
let result=arr.join(' ')
    console.log(result)

 
  return (
    <>
      <div
        className="otpdiv"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",

          width: "100%",
          height: "100vh",
        }}
      >
        <div className="otppp">
          <div>
            <h1
              style={{ color: "black", fontSize: "25px", textAlign: "center" }}
            >
              Enter Otp
            </h1>
          </div>

          <OtpInput
            inputStyle={{
              margin: "10px",
              height: "35px",
              width: " 60px",
              borderRadius: "5px",
              border: "none",
              background: "black",
              fontSize: "20px",
              color: "white",
            }}
            inputType="numbere"
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
          />
          <button className="confirm" onClick={() => handleconifrm()}>
            confirm
          </button>
        </div>
      </div>

  
    </>
  );
};
