(this["webpackJsonpreact-redux-registration-login-example"]=this["webpackJsonpreact-redux-registration-login-example"]||[]).push([[0],{112:function(e){e.exports=JSON.parse('[{"name":"Product 1","score":"80","polarity":"positive"},{"name":"Product 2","score":"80","polarity":"negative"},{"name":"Product 3","score":"80","polarity":"negative"},{"name":"Product 4","score":"80","polarity":"neutral"},{"name":"Product 5","score":"80","polarity":"positive"},{"name":"Product 6","score":"80","polarity":"negative"},{"name":"Product 7","score":"80","polarity":"neutral"},{"name":"Product 8","score":"80","polarity":"positive"},{"name":"Product 9","score":"80","polarity":"positive"},{"name":"Product 10","score":"80","polarity":"positive"},{"name":"Product 11","score":"80","polarity":"negative"},{"name":"Product 12","score":"80","polarity":"neutral"}]')},120:function(e,t,a){e.exports=a(225)},225:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),o=a(18),s=a(114),l=JSON.parse(localStorage.getItem("users"))||[];var c=a(17),u=Object(c.a)(),m=a(33),d=a(105),g=a.n(d),p=a(106),A="ALERT_SUCCESS",f="ALERT_ERROR",h="ALERT_CLEAR",E="USERS_REGISTER_REQUEST",v="USERS_REGISTER_SUCCESS",b="USERS_REGISTER_FAILURE",y="USERS_LOGIN_REQUEST",S="USERS_LOGIN_SUCCESS",O="USERS_LOGIN_FAILURE",C="USERS_LOGOUT",w="USERS_GETALL_REQUEST",j="USERS_GETALL_SUCCESS",N="USERS_GETALL_FAILURE",k="USERS_DELETE_REQUEST",z="USERS_DELETE_SUCCESS",I="USERS_DELETE_FAILURE",T=JSON.parse(localStorage.getItem("user")),R=T?{loggedIn:!0,user:T}:{};var U=a(63),L=a(15);var x=Object(m.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loggingIn:!0,user:t.user};case S:return{loggedIn:!0,user:t.user};case O:case C:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{registering:!0};case v:case b:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case j:return{items:t.users};case N:return{error:t.error};case k:return Object(L.a)(Object(L.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(L.a)(Object(L.a)({},e),{},{deleting:!0}):e}))});case z:return{items:e.items.filter((function(e){return e.id!==t.id}))};case I:return Object(L.a)(Object(L.a)({},e),{},{items:e.items.map((function(e){if(e.id===t.id){e.deleting;var a=Object(U.a)(e,["deleting"]);return Object(L.a)(Object(L.a)({},a),{},{deleteError:t.error})}return e}))});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{type:"alert-success",message:t.message};case f:return{type:"alert-danger",message:t.message};case h:return{};default:return e}}}),B=Object(p.createLogger)(),Q=Object(m.d)(x,Object(m.a)(g.a,B));function G(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var D=a(20),W=a(21),M=a(23),J=a(22),P=a(16),F={success:function(e){return{type:A,message:e}},error:function(e){return{type:f,message:e}},clear:function(){return{type:h}}};var K={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("/users/authenticate",a).then(H).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:Y,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/users/register",t).then(H)},getAll:function(){var e={method:"GET",headers:G()};return fetch("/users",e).then(H)},getById:function(e){var t={method:"GET",headers:G()};return fetch("/users/".concat(e),t).then(H)},update:function(e){var t={method:"PUT",headers:Object(L.a)(Object(L.a)({},G()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("/users/".concat(e.id),t).then(H)},delete:function(e){var t={method:"DELETE",headers:G()};return fetch("/users/".concat(e),t).then(H)}};function Y(){localStorage.removeItem("user")}function H(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&Y();var r=a&&a.message||e.statusText;return Promise.reject(r)}return a}))}var q={login:function(e,t){return function(a){a({type:y,user:{username:e}}),K.login(e,t).then((function(e){a(function(e){return{type:S,user:e}}(e)),u.push("/")}),(function(e){a(function(e){return{type:O,error:e}}(e)),a(F.error(e))}))}},logout:function(){return K.logout(),{type:C}},register:function(e){return function(t){t(function(e){return{type:E,user:e}}(e)),K.register(e).then((function(e){t(function(e){return{type:v,user:e}}()),u.push("/login"),t(F.success("Registration successful"))}),(function(e){t(function(e){return{type:b,error:e}}(e)),t(F.error(e))}))}},getAll:function(){return function(e){e({type:w}),K.getAll().then((function(t){return e(function(e){return{type:j,users:e}}(t))}),(function(t){return e(function(e){return{type:N,error:e}}(t))}))}},delete:function(e){return function(t){t(function(e){return{type:k,id:e}}(e)),K.delete(e).then((function(a){t(function(e){return{type:z,id:e}}(e))}),(function(a){t(function(e,t){return{type:I,id:e,error:t}}(e,a))}))}}};var _=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return n.a.createElement(P.c,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?n.a.createElement(t,e):n.a.createElement(P.b,{to:{pathname:"/login",state:{from:e.location}}})}}))},V=a(8),Z=a(47),X=a(254),$=a(259),ee=a(258),te=a(256),ae=a(6),re=a(255),ne=Object(X.a)((function(e){return{avatar:{float:"right",marginRight:20,marginTop:5,cursor:"pointer"},root:{maxWidth:125,float:"right",marginTop:50,marginRight:-60}}})),ie=function(e){var t=e.user,a=ne(),r=n.a.useState(!1),i=Object(Z.a)(r,2),o=i[0],s=i[1],l=t.firstName.substring(0,1).toUpperCase()+t.lastName.substring(0,1).toUpperCase();return n.a.createElement("div",{style:{textAlign:"center",border:"1px solid",height:50}},n.a.createElement("a",{href:"/Dashboard-React"},n.a.createElement("img",{src:"https://thegooddatafactory.com/images/logo-footer.png",style:{width:110,margin:10,float:"left"}})),n.a.createElement("h4",{style:{marginTop:15,marginRight:120,display:"inline-block"}},"Dashboad"),n.a.createElement($.a,{className:Object(ae.a)(a.avatar,Object(V.a)({},a.expandOpen,o)),onClick:function(){s(!o)},"aria-expanded":o},l),n.a.createElement(re.a,{className:a.root},n.a.createElement(ee.a,{in:o,timeout:"auto",unmountOnExit:!0},n.a.createElement(te.a,null,n.a.createElement("h6",null,t.firstName.charAt(0).toUpperCase()+t.firstName.slice(1)," ",t.lastName.charAt(0).toUpperCase()+t.lastName.slice(1)),n.a.createElement("a",{href:"/Dashboard-React/login"},"Logout")))))},oe=a(257),se=a(26),le=a(7),ce=function(){return n.a.createElement("div",{style:{marginTop:0}},n.a.createElement("h4",{style:{fontWeight:"bold"}},"Sentiments"),n.a.createElement("div",{style:{display:"flex",marginTop:-15}},n.a.createElement("h3",{style:{marginLeft:10,fontWeight:"bold"}},"21"),n.a.createElement("div",{style:{marginTop:20,marginLeft:10,color:"#bdbdbd"}},n.a.createElement("p",null,"90%"),n.a.createElement("p",{style:{fontSize:50,marginTop:-55,color:"#b71c1c",marginBottom:0}},"."))),n.a.createElement(se.b,{data:[{country:"Russia",area:5},{country:"Canada",area:20}],height:"75",width:"75"},n.a.createElement(le.f,{scheme:["#00c853","#ff5722","#b71c1c"]}),n.a.createElement(se.c,{valueField:"area",argumentField:"country"})))},ue=a(111),me=function(){return n.a.createElement("div",{style:{marginTop:0}},n.a.createElement("h4",{style:{fontWeight:"bold",marginLeft:60}},"Share of Comments"),n.a.createElement(ue.Doughnut,{data:{datasets:[{data:[300,50,80],backgroundColor:["#3949ab","#f06292","#4a148c"]}]},height:120}))},de=function(){return n.a.createElement("div",{style:{marginTop:0}},n.a.createElement("h4",{style:{fontWeight:"bold"}},"Buzz Words"),n.a.createElement("div",{style:{display:"flex",marginTop:20}},n.a.createElement("p",{style:{color:"#00c853",fontSize:24,fontWeight:"bold"}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:13,marginLeft:50}},"Buzz Words")),n.a.createElement("div",{style:{display:"flex",margin:-10}},n.a.createElement("p",{style:{color:"#00c853",fontSize:19,fontWeight:"bold",marginLeft:100}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:10,marginLeft:20,marginTop:15}},"Buzz Words")),n.a.createElement("div",{style:{display:"flex",margin:-10}},n.a.createElement("p",{style:{color:"#00c853",fontSize:19,fontWeight:"bold",marginLeft:20}},"Buzz Words"),n.a.createElement("p",{style:{color:"#b71c1c",fontSize:25,marginLeft:20,marginTop:-5}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:17,marginLeft:20,marginTop:0}},"Buzz Words")),n.a.createElement("div",{style:{display:"flex",margin:-10}},n.a.createElement("p",{style:{color:"#ff5722",fontSize:12,fontWeight:"bold",marginLeft:50}},"Buzz Words"),n.a.createElement("p",{style:{color:"#b71c1c",fontSize:20,marginLeft:10,marginTop:-5}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:15,marginLeft:30,marginTop:0}},"Buzz Words")))},ge=Object(X.a)((function(e){return{root:{marginTop:20,marginLeft:90,marginRight:90},avatar:{float:"right",marginRight:20,marginTop:5},summaryTable:{border:"1px solid",padding:30},cercle:{width:20,height:20,borderRadius:20,border:"1px solid",margin:10}}})),pe=function(){var e=ge();return n.a.createElement("div",{className:e.root},n.a.createElement("h5",null,"Last 7 days Summary"),n.a.createElement("div",{className:e.summaryTable},n.a.createElement(oe.a,{container:!0,spacing:3},n.a.createElement(oe.a,{item:!0,xs:2},n.a.createElement(ce,null)),n.a.createElement(oe.a,{item:!0,xs:3},n.a.createElement(me,null)),n.a.createElement(oe.a,{item:!0,xs:3},n.a.createElement("div",{style:{display:"flex",marginTop:60}},n.a.createElement("div",{className:e.cercle}),n.a.createElement("div",{className:e.cercle}),n.a.createElement("div",{className:e.cercle}))),n.a.createElement(oe.a,{item:!0,xs:4},n.a.createElement(de,null)))))},Ae=a(226),fe=Object(X.a)((function(e){var t,a,r;return{paper1:(t={padding:e.spacing(1),textAlign:"center"},Object(V.a)(t,"padding",40),Object(V.a)(t,"color","#ffffff"),Object(V.a)(t,"backgroundColor","#00c853"),t),paper2:(a={padding:e.spacing(1),textAlign:"center"},Object(V.a)(a,"padding",40),Object(V.a)(a,"color","#ffffff"),Object(V.a)(a,"backgroundColor","#ff5722"),a),paper3:(r={padding:e.spacing(1),textAlign:"center"},Object(V.a)(r,"padding",40),Object(V.a)(r,"color","#ffffff"),Object(V.a)(r,"backgroundColor","#b71c1c"),r)}})),he=function(e){var t=e.name,a=e.polarity,r=e.history,i=fe();return n.a.createElement("div",{onClick:function(){!function(e,t,a){t.push("/products/".concat(e,"/").concat(a))}(t,r,a)},style:{cursor:"pointer"}},"positive"===a&&n.a.createElement(Ae.a,{className:i.paper1},t),"neutral"===a&&n.a.createElement(Ae.a,{className:i.paper2},t),"negative"===a&&n.a.createElement(Ae.a,{className:i.paper3},t))},Ee=a(112),ve=Object(X.a)((function(e){var t,a,r;return{root:{marginTop:20,marginLeft:90,marginRight:90},rootGrid:{flexGrow:1,padding:40},productBuzz:{border:"1px solid"},paper1:(t={padding:e.spacing(1),textAlign:"center"},Object(V.a)(t,"padding",40),Object(V.a)(t,"color","#ffffff"),Object(V.a)(t,"backgroundColor","#00c853"),t),paper2:(a={padding:e.spacing(1),textAlign:"center"},Object(V.a)(a,"padding",40),Object(V.a)(a,"color","#ffffff"),Object(V.a)(a,"backgroundColor","#ff5722"),a),paper3:(r={padding:e.spacing(1),textAlign:"center"},Object(V.a)(r,"padding",40),Object(V.a)(r,"color","#ffffff"),Object(V.a)(r,"backgroundColor","#b71c1c"),r),select:{marginTop:-40,float:"right",marginRight:-20}}})),be=function(e){var t=e.history,a=ve();function r(e){e.num;return n.a.createElement(n.a.Fragment,null,Ee.map((function(e){return n.a.createElement(oe.a,{key:e.name,item:!0,xs:2},n.a.createElement(he,{name:e.name,polarity:e.polarity,history:t}))})))}return n.a.createElement("div",{className:a.root},n.a.createElement("h5",null,"Product Buzz"),n.a.createElement("div",{className:a.productBuzz},n.a.createElement("div",{className:a.rootGrid},n.a.createElement("p",{className:a.select},"Select (last week, month, quarter, year... )"),n.a.createElement(oe.a,{container:!0,spacing:3},n.a.createElement(oe.a,{container:!0,item:!0,xs:12,spacing:3},n.a.createElement(r,{num:0}))))))},ye=function(e){Object(M.a)(a,e);var t=Object(J.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.deleteUser(e)}}},{key:"render",value:function(){var e=this.props.user,t=this.props.history;return n.a.createElement("div",null,n.a.createElement(ie,{user:e}),n.a.createElement(pe,null),n.a.createElement(be,{history:t}))}}]),a}(n.a.Component);var Se={getUsers:q.getAll,deleteUser:q.delete},Oe=Object(o.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}),Se)(ye),Ce=a(28),we=function(e){Object(M.a)(a,e);var t=Object(J.a)(a);function a(e){var r;return Object(D.a)(this,a),(r=t.call(this,e)).props.logout(),r.state={username:"",password:"",submitted:!1},r.handleChange=r.handleChange.bind(Object(Ce.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(Ce.a)(r)),r}return Object(W.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(V.a)({},a,r))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.username,r=t.password;a&&r&&this.props.login(a,r)}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.state,a=t.username,r=t.password,i=t.submitted;return n.a.createElement("div",{class:" content"},n.a.createElement("div",{class:" row",style:{margin:0}},n.a.createElement("div",{class:" col-lg-8"},n.a.createElement("img",{src:"https://thegooddatafactory.com/images/logo-footer.png",style:{width:360,margin:40}}),n.a.createElement("h6",{style:{margin:60}},"Welcome "),n.a.createElement("p",{style:{margin:60}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ipsum sit amet metus mattis cursus. Nullam tristique, nibh ut tempus tristique, ligula sem mollis felis, ac luctus nunc purus consectetur sapien. Morbi in nunc pulvinar, scelerisque enim nec, lobortis enim. Aenean non tempor risus. Phasellus vestibulum dapibus libero, quis tristique dui faucibus ac. Etiam lacinia, odio at fermentum volutpat, velit metus interdum erat, eu dapibus neque nisl sit amet est. Nam et est ut ipsum pulvinar efficitur vel non massa. In gravida nec enim eget consequat. Suspendisse feugiat elit lacus, a posuere ligula convallis in. Duis laoreet justo et fermentum suscipit, magna purus egestas ex, vitae elementum arcu dolor sit amet sem.")),n.a.createElement("div",{class:" col-lg-4"},n.a.createElement("div",{style:{marginTop:250,backgroundColor:"#84ffff",borderRadius:20,padding:15,width:350,borderStyle:"solid"}},n.a.createElement("h2",{style:{textAlign:"center"}},"Login"),n.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"+(i&&!a?" has-error":"")},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a,onChange:this.handleChange}),i&&!a&&n.a.createElement("div",{className:"help-block"},"Username is required")),n.a.createElement("div",{className:"form-group"+(i&&!r?" has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",value:r,onChange:this.handleChange}),i&&!r&&n.a.createElement("div",{className:"help-block"},"Password is required")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary"},"Login"),e&&n.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})))),n.a.createElement("p",null,"You don't have an account ?",n.a.createElement(P.a,{to:"/register",className:"btn btn-link"},"Sign Up ")))))}}]),a}(n.a.Component);var je={login:q.login,logout:q.logout},Ne=Object(o.b)((function(e){return{loggingIn:e.authentication.loggingIn}}),je)(we),ke=function(e){Object(M.a)(a,e);var t=Object(J.a)(a);function a(e){var r;return Object(D.a)(this,a),(r=t.call(this,e)).state={user:{firstName:"",lastName:"",username:"",password:""},submitted:!1},r.handleChange=r.handleChange.bind(Object(Ce.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(Ce.a)(r)),r}return Object(W.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value,n=this.state.user;this.setState({user:Object(L.a)(Object(L.a)({},n),{},Object(V.a)({},a,r))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;t.firstName&&t.lastName&&t.username&&t.password&&this.props.register(t)}},{key:"render",value:function(){var e=this.props.registering,t=this.state,a=t.user,r=t.submitted;return n.a.createElement("div",{style:{marginTop:150,backgroundColor:"#84ffff",borderRadius:20,padding:15,width:350,marginLeft:600,borderStyle:"solid"}},n.a.createElement("h2",null,"Register"),n.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"+(r&&!a.firstName?" has-error":"")},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",className:"form-control",name:"firstName",value:a.firstName,onChange:this.handleChange}),r&&!a.firstName&&n.a.createElement("div",{className:"help-block"},"First Name is required")),n.a.createElement("div",{className:"form-group"+(r&&!a.lastName?" has-error":"")},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{type:"text",className:"form-control",name:"lastName",value:a.lastName,onChange:this.handleChange}),r&&!a.lastName&&n.a.createElement("div",{className:"help-block"},"Last Name is required")),n.a.createElement("div",{className:"form-group"+(r&&!a.username?" has-error":"")},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:this.handleChange}),r&&!a.username&&n.a.createElement("div",{className:"help-block"},"Username is required")),n.a.createElement("div",{className:"form-group"+(r&&!a.password?" has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:this.handleChange}),r&&!a.password&&n.a.createElement("div",{className:"help-block"},"Password is required")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary"},"Register"),e&&n.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),n.a.createElement(P.a,{to:"/login",className:"btn btn-link"},"Cancel"))))}}]),a}(n.a.Component);var ze={register:q.register},Ie=Object(o.b)((function(e){return{registering:e.registration.registering}}),ze)(ke),Te=a(113),Re=Object(X.a)((function(e){return{root:{width:800},rootGrid:{padding:20,height:220},productBuzz:{border:"1px solid"}}})),Ue=function(){var e=Re();return n.a.createElement("div",{className:e.root},n.a.createElement("h5",null,"Sentiments"),n.a.createElement("div",{className:e.productBuzz},n.a.createElement("div",{className:e.rootGrid},n.a.createElement(Ae.a,{style:{backgroundColor:"#00c853",backgroundImage:"linear-gradient(green,green,green,green,green,red,red,red,red, red)",width:400}},n.a.createElement(se.b,{data:function(e,t,a){for(var r=[],n=e;n<t;n+=a)r.push({splineValue:Math.sin(n)/n,lineValue:Math.pow(n/15,2.718)-.2,argument:n});return r}(2.5,12,.5),height:170},n.a.createElement(se.d,{valueField:"splineValue",argumentField:"argument"}))),n.a.createElement("div",{style:{float:"right",marginTop:-180,marginLeft:350,width:250}},n.a.createElement(Te.a,{value:new Date})))))},Le=Object(X.a)((function(e){return{root:{width:800},rootGrid:{padding:10,height:160},productBuzz:{border:"1px solid"}}})),xe=function(){var e=Le();return n.a.createElement("div",{className:e.root},n.a.createElement("h5",null,"Opinions"),n.a.createElement("div",{className:e.productBuzz},n.a.createElement("div",{className:e.rootGrid},n.a.createElement("div",{style:{marginTop:0,marginLeft:70}},n.a.createElement("div",{style:{display:"flex",marginTop:20}},n.a.createElement("p",{style:{color:"#00c853",fontSize:24,fontWeight:"bold"}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:13,marginLeft:50}},"Buzz Words")),n.a.createElement("div",{style:{display:"flex",margin:-10}},n.a.createElement("p",{style:{color:"#00c853",fontSize:19,fontWeight:"bold",marginLeft:100}},"Buzz Words"),n.a.createElement("p",{style:{color:"#00c853",fontSize:10,marginLeft:20,marginTop:15}},"Buzz Words")),n.a.createElement("div",{style:{display:"flex",margin:-10}},n.a.createElement("p",{style:{color:"#00c853",fontSize:19,fontWeight:"bold",marginLeft:20}},"Buzz Words"),n.a.createElement("p",{style:{color:"#b71c1c",fontSize:25,marginLeft:20,marginTop:-5}},"Buzz Words"))),n.a.createElement("div",{style:{width:5,backgroundColor:"#e0e0e0",height:130,marginLeft:370,marginTop:-120}}),n.a.createElement("div",{style:{float:"right",marginRight:180,marginTop:-130}},n.a.createElement("p",{style:{fontWeight:"bold"}},"Top 10 Opinions"),n.a.createElement("p",null,"-Op1 .."),n.a.createElement("p",null,"-Op2 .."),n.a.createElement("p",null,"Op3 ..")))))},Be=Object(X.a)((function(e){return{root:{width:800},rootGrid:{padding:10,height:160},productBuzz:{border:"1px solid"}}})),Qe=function(){var e=Be();return n.a.createElement("div",{className:e.root},n.a.createElement("h5",null,"Itentions"),n.a.createElement("div",{className:e.productBuzz},n.a.createElement("div",{className:e.rootGrid},n.a.createElement(Ae.a,null,n.a.createElement(se.b,{data:[{key:"0",value:0},{key:"9",value:0},{key:"1",value:7.525},{key:"2",value:0},{key:"222",value:0},{key:"12",value:0},{key:"21",value:0},{key:"3",value:3.682},{key:"42",value:0},{key:"22",value:0},{key:"521",value:0},{key:"442",value:0},{key:"232",value:0},{key:"21",value:0},{key:"5",value:6.31},{key:"6",value:0},{key:"423",value:0},{key:"232",value:0},{key:"231",value:0},{key:"7",value:6.93}],height:130,width:600},n.a.createElement(se.a,{valueField:"value",argumentField:"key"}))))))},Ge=function(e){Object(M.a)(a,e);var t=Object(J.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.deleteUser(e)}}},{key:"render",value:function(){var e=this.props.user,t=this.props.history,a=this.props.match.params.name,r=this.props.match.params.polarity;return n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(ie,{user:e}),n.a.createElement("div",null,n.a.createElement("div",{class:" row"},n.a.createElement("div",{class:" col-lg-4"},n.a.createElement("div",{style:{paddingLeft:0,paddingRight:250,paddingTop:60}},n.a.createElement(he,{name:a,polarity:r,history:t})),n.a.createElement("p",{style:{fontWeight:"bold",marginTop:40,marginLeft:0}},"Auto generated insight"),n.a.createElement("p",{style:{marginTop:10,marginLeft:0,paddingRight:230}},"Nunc aliquet tempor mattis. Nulla maximus consequat quam, ac maximus metus sodales quis. Sed cursus, augue vitae sollicitudin efficitur, massa purus blandit velit, at tempor est felis eget ex. Nunc pellentesque sem luctus dictum convallis. Praesent vulputate felis aliquam arcu porttitor, nec suscipit nibh bibendum. Proin rhoncus et nulla a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ante sit amet leo semper pellentesque.")),n.a.createElement("div",{class:" col-lg-8"},n.a.createElement("div",{style:{marginLeft:500,marginTop:-480}},n.a.createElement(Ue,null),n.a.createElement(xe,null),n.a.createElement(Qe,null))))))}}]),a}(n.a.Component);var De={getUsers:q.getAll,deleteUser:q.delete},We=Object(o.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}),De)(Ge),Me=function(e){Object(M.a)(a,e);var t=Object(J.a)(a);function a(e){var r;return Object(D.a)(this,a),r=t.call(this,e),u.listen((function(e,t){r.props.clearAlerts()})),r}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props.alert;return n.a.createElement("div",null,n.a.createElement("div",null,e.message&&n.a.createElement("div",{className:"alert ".concat(e.type)},e.message),n.a.createElement(P.d,{history:u},n.a.createElement(P.e,null,n.a.createElement(_,{exact:!0,path:"/",component:Oe}),n.a.createElement(P.c,{path:"/login",component:Ne}),n.a.createElement(P.c,{path:"/register",component:Ie}),n.a.createElement(P.c,{path:"/products/:name/:polarity",component:We}),n.a.createElement(P.b,{from:"*",to:"/"})))))}}]),a}(n.a.Component);var Je={clearAlerts:F.clear},Pe=Object(o.b)((function(e){return{alert:e.alert}}),Je)(Me);!function(){var e=window.fetch;window.fetch=function(t,a){return new Promise((function(r,n){setTimeout((function(){if(t.endsWith("/users/authenticate")&&"POST"===a.method){var i=JSON.parse(a.body),o=l.filter((function(e){return e.username===i.username&&e.password===i.password}));if(o.length){var c=o[0],u={id:c.id,username:c.username,firstName:c.firstName,lastName:c.lastName,token:"fake-jwt-token"};r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(u))}})}else n("Username or password is incorrect")}else if(t.endsWith("/users")&&"GET"===a.method)a.headers&&"Bearer fake-jwt-token"===a.headers.Authorization?r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(l))}}):n("Unauthorised");else if(t.match(/\/users\/\d+$/)&&"GET"===a.method)if(a.headers&&"Bearer fake-jwt-token"===a.headers.Authorization){var m=t.split("/"),d=parseInt(m[m.length-1]),g=l.filter((function(e){return e.id===d})),p=g.length?g[0]:null;r({ok:!0,text:function(){return JSON.stringify(p)}})}else n("Unauthorised");else{if(t.endsWith("/users/register")&&"POST"===a.method){var A=JSON.parse(a.body);return l.filter((function(e){return e.username===A.username})).length?void n('Username "'+A.username+'" is already taken'):(A.id=l.length?Math.max.apply(Math,Object(s.a)(l.map((function(e){return e.id}))))+1:1,l.push(A),localStorage.setItem("users",JSON.stringify(l)),void r({ok:!0,text:function(){return Promise.resolve()}}))}if(t.match(/\/users\/\d+$/)&&"DELETE"===a.method)if(a.headers&&"Bearer fake-jwt-token"===a.headers.Authorization){for(var f=t.split("/"),h=parseInt(f[f.length-1]),E=0;E<l.length;E++){if(l[E].id===h){l.splice(E,1),localStorage.setItem("users",JSON.stringify(l));break}}r({ok:!0,text:function(){return Promise.resolve()}})}else n("Unauthorised");else e(t,a).then((function(e){return r(e)}))}}),500)}))}}(),Object(i.render)(n.a.createElement(o.a,{store:Q},n.a.createElement(Pe,null)),document.getElementById("app"))}},[[120,1,2]]]);
//# sourceMappingURL=main.94fde06f.chunk.js.map