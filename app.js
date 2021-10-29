

 usermobile=8789096437;
 userpass=123;

 const mobile=document.querySelector("#mobile");
 const mobileLabel=document.querySelector("#mobileLabel");      

 const passwordInput=document.querySelector("#password");
 const passwordLabel=document.querySelector("#passwordLabel");
 
 const showPassword=document.querySelector(".show");
 const password=document.querySelector("#password");

 const form=document.querySelector("#form");

 const passError=document.querySelector(".password");
 const mobileError=document.querySelector(".mobile");

 let state=true;

mobile.addEventListener("input",(e)=>{
  let len=e.target.value.length;
  mobileError.innerText="";

  if(len==10){
    mobile.style.border="2px solid green";
    mobileLabel.style.color="lightgreen";
  }else{
    mobile.style.border="2px solid tomato";
    mobileLabel.style.color="tomato";
  }
});

 passwordInput.addEventListener("input",(e)=>{
   passwordInput.style.border="2px solid dodgerblue";
   passwordLabel.style.color="#eee";
   passError.innerText="";
 });

  showPassword.addEventListener("click",(e)=>{
    if(state){
      password.type="text";
      e.target.innerText="Hide";
      state=false;
    }else{
      password.type="password";
      e.target.innerText="Show";
      state=true;
    }
  });

 form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const mobileValue=e.target.mobile.value;
   const passwordValue=e.target.password.value;
 
   if(!mobileValue){
     mobileError.innerText="mobile is required";
     mobile.style.border="2px solid tomato";
     mobileLabel.style.color="tomato";
   }else if(mobileValue.length!=10){
     mobileError.innerText="invalid mobile number"
   }else if(!passwordValue){
     passwordInput.style.border="2px solid tomato";
     passwordLabel.style.color="tomato";
     passError.innerText="password is required";
   }else if(mobileValue && passwordValue){
       document.querySelector(".error").style.transform="translateY(-55px)";    
     if(mobileValue==usermobile && passwordValue==userpass){
       alert("congrats 😁😁😁");
     }else{
       document.querySelector(".error").style.transform="translateY(0px)";    
     }
   }
     
   
   });
