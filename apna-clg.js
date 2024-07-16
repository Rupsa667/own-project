/**1st hw **/

// const product={
//   name:"Ball Pen",
//   rating:4,
//   price:200,
//   offer:5
// };
// console.log(product);
// console.log(typeof(product));
// console.log(product.name);

/**2nd hw **/
// let no=prompt("enter a no:");
// if(no%5==0){
//   console.log("the no is divisible by 5");
// }
//   else{
//     console.log("the no is not divisible by 5");
//   }

/*3rd hw */
// let a=prompt("enter a no:");
// if(a>=90&&a<=100){
//   // grade="a";
//   console.log("a");
// }
// else if(a>=70&&a<=89){
//   // grade="b";
//   console.log("b");
// }
// else if(a>=60&&a<=69){
//   // grade="c";
//   console.log("c");
// }
// else if(a>=50&&a<=59){
//   // grade="d";
//   console.log("d");
// }
// // console.log("grade is:",grade);

/*4th hw*/
// for(let i=0;i<=100;i++){
//   console.log(i);
// }
// let i=0;
// while(i<=100){
//   console.log(i);
//   i++;
// }
// let i=0;
// do{
//   console.log(i);
//   i++;
// }
// while(i<=100);

/*5th hw*/
// let gameNum=25;
// let userName=prompt("enter the no:");
// while(userName!=gameNum){
//   userName=prompt("enter the no:");
// }
// console.log("console you find the correct game no");

/*6th hw*/
// let fullName=prompt("enetr the full name:");
// console.log(fullName);
// let userName="@"+fullName+fullName.length;
// console.log(userName);

/*7th hw*/
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//   sum=sum+val;
// }
// console.log(sum);
// console.log(marks.length);
// let avg=sum/marks.length;
// console.log(avg);

/**8th hw**/
// let items=[250,645,300,900,50];
// for(val of items){
//     let offer=val/10;
//     finalPrice=val-offer;
//     console.log("the  price is",finalPrice);
//   }

/*9th hw*/
// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// // companies.shift();
// // companies.splice(2,1,"ola");
// companies.push("amazon");

/*10th hw*/
// let count =0;
// function Name(str){
//  for(char of str){
//   if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
//     count++;
//   }
//  }
//  console.log(count);
// }
// Name("Rupsa");

/*11th hw*/
// let count =0;
// const Name=(str)=>{
//   for(char of str){
//       if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
//         count++;
//       }
//      }
//      console.log(count);
//     }
//     Name("Rupaa");

/*12th hw*/
// let no=[2,6,5,3,1,7];
// no.forEach((val)=>{
//   console.log(val*val);
//   });
  
/*13th hw*/
// let marks=[40,89,96,99,78];
// let newArr=marks.filter((val)=>{
//   return (val>=90);
// });
// console.log(newArr);

/*14th hw*/
// let n=prompt("enter a no:");
// let arr=[];
// for(let i=0;i<=n;i++){
//   arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((res,curr)=>{
//   return res+curr;
// });
// console.log(sum);

/*15th hw*/
// let modeBtn=document.querySelector("#modeBtn");
// let currMode="light";
                            /*modeBtn.addEventListener("click",()=>{*/
//   modeBtn.onclick=()=>{
//   if(currMode==="light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
//   }
//   else{
//     currMode="light";
//     document.querySelector("body").style.backgroundColor="white";
//   }
//   console.log(currMode);
// };



  // let mouse=document.querySelector("#mouse");
  // mouse.click=()=>{
  //   // backgroundColor:"black";
  //   console.log("btn is click");
  // }

  /*16th hw*/
/**this hw is include by first=access,second=property use,third=change**/
//   let h2=document.querySelector("h2");
//   console.dir(h2.innerText);
//  h2.innerText=h2.innerText + " from apna college";

/*17th hw*/
// let box=document.querySelectorAll(".box");
// let idx=1;
// for( let val of box){
//   val.innerText=`new unique value${idx}`;
//   idx++;
// }

// divs[0].innerText="my name";
// divs[1].innerText="rupsa";
// divs[2].innerText="de";
// console.dir(divs);

/*18th hw*/
// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.Color="white";
// document.querySelector("body").prepend(newBtn);

/*19th hw*/
// let para=document.querySelector("p");
// para.classList.add("newClass");