(this["webpackJsonpreact-router-tuts"]=this["webpackJsonpreact-router-tuts"]||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var i,r,c,s,o,a,d,b,l,j,x,p=t(18),h=t.n(p),u=t(3),O=t(4),g=t(9),m=O.b.nav(i||(i=Object(u.a)(["\n  border-bottom: 1px solid lightblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 0;\n\n  Link {\n    display: flex;\n    justify-content: center;\n    align-items: inherit;\n    border: 1px solid lightblue;\n    background: lightblue;\n    color: white;\n    border-radius: 50%;\n    height: 80px;\n    width: 80px;\n  }\n"]))),f=Object(O.b)(g.b)(r||(r=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: inherit;\n  border: 1px solid lightblue;\n  background: lightblue;\n  color: white;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n  text-decoration: none;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),w=t(0),y=function(){return Object(w.jsx)(m,{children:Object(w.jsx)(f,{to:"/",children:Object(w.jsx)("h2",{children:"Auth"})})})},k=t(23),v=t(1),E=O.b.footer(c||(c=Object(u.a)(["\n  /* margin-top: auto; */\n  min-height: 130px;\n  background: lightblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n"]))),A=function(){var n=Object(v.useState)(new Date),e=Object(k.a)(n,2),t=e[0],i=e[1];return Object(v.useEffect)((function(){return i(new Date)}),[]),Object(w.jsx)(E,{children:Object(w.jsxs)("p",{children:["\xa9",t.getFullYear()," DAPDEV"]})})},P=Object(O.a)(s||(s=Object(u.a)(["\n  * {\n    margin:0;\n    box-sizing: border-box;\n    padding: 0;\n    list-style: none;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.15rem;\n  }\n"]))),S=O.b.main(o||(o=Object(u.a)(["\n  min-height: 100vh;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  /* overflow-x: hidden; */\n  /* background: #fcfcfc; */\n"]))),I=t(2),z=O.b.button(a||(a=Object(u.a)(["\n  font-weight: bold;\n  letter-spacing: 1px;\n  width: 100%;\n  background: ",";\n  text-align: center;\n  padding: 10px 0;\n  font-size: 14px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  margin-bottom: 1.2rem;\n  border-radius: 6px;\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.primary?"lightblue":"white"}),(function(n){return n.primary?"white":"black"})),C=O.b.div(d||(d=Object(u.a)(["\n  width: 340px;\n  /* min-height: 400px; */\n  border-radius: 5px;\n  padding: 40px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;\n  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px; */\n  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,\n    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px; */\n  background: #fff;\n  /* margin: 20px auto 20px; */\n  /* margin: auto 0; */\n  h2 {\n    margin-bottom: 1.2rem;\n  }\n  p {\n    font-size: 14px;\n    color: #757373;\n    text-align: center;\n    letter-spacing: 1px;\n\n    span {\n      text-decoration: underline;\n      color: lightblue;\n      margin-bottom: 10px;\n    }\n  }\n  @media screen and (max-width: 450px) {\n    width: 90%;\n    padding: 20px;\n    p {\n      font-size: 11px;\n    }\n    h2 {\n      font-size: 25px;\n      padding-bottom: 13px;\n    }\n  }\n"]))),T=Object(O.b)(g.b)(b||(b=Object(u.a)(["\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n  color: #fff;\n"]))),D=O.b.div(l||(l=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* background: coral; */\n  width: 100%;\n  /* min-height: 400px; */\n  padding: 40px 0;\n  flex-grow: 1;\n"]))),N=Object(O.b)(D)(j||(j=Object(u.a)(["\n  @media screen and (max-width: 450px) {\n    padding: 20px 0;\n  }\n"]))),U=O.b.input(x||(x=Object(u.a)(["\n  padding: 15px 15px;\n  font-size: 16px;\n  background: #f7f7f7;\n  color: #757373;\n  width: 100%;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 1.8rem;\n  &:focus {\n    outline: none;\n  }\n"]))),R=function(){return Object(w.jsx)(D,{children:Object(w.jsxs)(C,{children:[Object(w.jsx)("h2",{children:"Sign In"}),Object(w.jsxs)("form",{children:[Object(w.jsx)(U,{type:"email",id:"email",name:"email",placeholder:"Email"}),Object(w.jsx)(U,{type:"password",id:"password",name:"password",placeholder:"Password"}),Object(w.jsx)(z,{primary:!0,type:"submit",children:"SIGN IN"})]}),Object(w.jsx)(T,{to:"/reset_password",children:Object(w.jsx)("p",{style:{marginBottom:"20px"},children:Object(w.jsx)("span",{children:"Forgot password ?"})})}),Object(w.jsx)(g.b,{to:"/signUp",children:Object(w.jsx)(z,{children:"CREATE AN ACCOUNT"})})]})})},B=function(){return Object(w.jsx)(D,{children:Object(w.jsxs)(C,{children:[Object(w.jsx)("h2",{children:"Sign Up"}),Object(w.jsxs)("form",{children:[Object(w.jsx)(U,{type:"email",id:"email",name:"email",placeholder:"Email"}),Object(w.jsx)(U,{type:"password",id:"password",name:"password",placeholder:"Password"}),Object(w.jsx)(U,{type:"password",id:"confirmPass",name:"confirmPass",placeholder:"Confirm Password"}),Object(w.jsx)(z,{primary:!0,type:"submit",children:"CREATE AN ACCOUNT"})]}),Object(w.jsx)(T,{to:"/signIn",children:Object(w.jsxs)("p",{children:["Have an account? ",Object(w.jsx)("span",{children:"Sign in"})]})})]})})},F=function(){return Object(w.jsx)(N,{children:Object(w.jsxs)(C,{children:[Object(w.jsx)("h2",{style:{marginBottom:"0"},children:"Forgot Password"}),Object(w.jsx)("p",{style:{fontSize:"12px",textAlign:"left",marginBottom:"20px"},children:"Please enter the email address that you used to register your account and we will send you an email with a link to reset your password"}),Object(w.jsxs)("form",{children:[Object(w.jsx)(U,{type:"email",placeholder:"Email"}),Object(w.jsx)(z,{primary:!0,type:"submit",children:"RESET MY PASSWORD"})]}),Object(w.jsx)(T,{to:"/signIn",children:Object(w.jsxs)("p",{style:{color:"lightblue"},children:["Return to ",Object(w.jsx)("span",{children:"Sign In"})]})})]})})},W=function(){return Object(w.jsx)(D,{children:Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Welcome to the Dashboard"}),Object(w.jsx)(z,{style:{marginTop:"20px",maxWidth:"150px"},primary:!0,children:"LOGOUT"})]})})},G=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(I.d,{children:[Object(w.jsx)(I.b,{exact:!0,path:"/",children:Object(w.jsx)(I.a,{from:"/",to:"/signIn"})}),Object(w.jsx)(I.b,{path:"/signIn",children:Object(w.jsx)(R,{})}),Object(w.jsx)(I.b,{path:"/signUp",children:Object(w.jsx)(B,{})}),Object(w.jsx)(I.b,{path:"/reset_password",children:Object(w.jsx)(F,{})}),Object(w.jsx)(I.b,{path:"/dashboard",children:Object(w.jsx)(W,{})})]})})};function J(){return Object(w.jsxs)(S,{children:[Object(w.jsx)(P,{}),Object(w.jsx)(y,{}),Object(w.jsx)(G,{}),Object(w.jsx)(A,{})]})}h.a.render(Object(w.jsx)(g.a,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f47679cf.chunk.js.map