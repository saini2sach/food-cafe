(this["webpackJsonpfood-cafe"]=this["webpackJsonpfood-cafe"]||[]).push([[0],{10:function(e,t,a){e.exports={1:"CategoryItem_1__2boWe",2:"CategoryItem_2__14_Rv",3:"CategoryItem_3__19Rum",categoryItem:"CategoryItem_categoryItem__1oi27",disabledBtn:"CategoryItem_disabledBtn__20L6t",logoimg:"CategoryItem_logoimg__21NqO"}},13:function(e,t,a){e.exports={checkbox:"Checkbox_checkbox__2LdRR",clickableText:"Checkbox_clickableText__1ujOt",checkmark:"Checkbox_checkmark__3dUTp",checkboxContainer:"Checkbox_checkboxContainer__2b6nn",sm:"Checkbox_sm__2Y-1K"}},14:function(e,t,a){e.exports={mainContainer:"Main_mainContainer__39wGh",productContainer:"Main_productContainer__3jcF6",cartContainer:"Main_cartContainer__2PlFL"}},21:function(e,t,a){e.exports={app:"App_app___B2LQ"}},23:function(e,t,a){e.exports={listContainer:"Category_listContainer__-9dTD"}},27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(32),a(1)),o=a(8),s=a(7),d=a(2),u=a(3),h=a(5),m=a(4),p=a(21),f=a.n(p),C=a(6),b=a.n(C),v=a(13),_=a.n(v),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.props.handleChange({name:t.target.name,value:t.target.checked})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.checked,a=e.disabled,n=e.name,c=e.checkmarkClass,l=e.rootClass,i=e.id,o=e.children;return r.a.createElement("div",{className:_.a.checkboxContainer+" "+l},r.a.createElement("label",{className:_.a.checkbox,id:i},o,r.a.createElement("input",{type:"checkbox",disabled:a,checked:t,name:n,onChange:this.handleChange}),r.a.createElement("span",{className:_.a.checkmark+" "+c})))}}]),a}(n.PureComponent);g.defaultProps={name:"check_box",rootClass:""};var k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchVal:t.target.value})},e.handleKeyUp=function(t){13===t.keyCode&&e.props.handleSearch(e.state.searchVal)},e.handleSearchClick=function(){e.props.handleSearch(e.state.searchVal)},e.toggleDrawer=function(t){e.setState({showFilterDrawer:t})},e.closeDrawer=function(){e.setState({showFilterDrawer:!1})},e.handleCheckChange=function(t){console.log("data",t);var a=Object(i.a)({},e.state.filterCriteria);a[t.name]=t.value,e.setState({filterCriteria:a})},e.handleCancelClick=function(){e.setState({filterCriteria:e.initialObj,filterArr:[]})},e.handleApplyClick=function(){var t=[],a=[];Object.keys(e.state.filterCriteria).map((function(n){return e.state.filterCriteria[n]&&(a.push(n),t.push(function(e){var t={pizza:1,burger:2,icecream:3,drinks:4};return t[e]?t[e]:e}(n))),n})),e.setState({showFilterDrawer:!1,filterArr:a}),e.props.applyFilter(t)},e.initialObj={pizza:!1,burger:!1,icecream:!1,veg:!1,nonveg:!1,drinks:!1},e.state={searchVal:"",showFilterDrawer:!1,filterCriteria:e.initialObj,filterArr:[]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchVal,a=e.showFilterDrawer,n=e.filterCriteria,c=e.filterArr,l=void 0===c?[]:c;return r.a.createElement("nav",{className:b.a.navContainer},r.a.createElement("div",{className:b.a.main},r.a.createElement("input",{name:"search",value:t,onChange:this.handleChange,placeholder:"Search the products",onKeyUp:this.handleKeyUp}),r.a.createElement("button",{onClick:this.handleSearchClick,className:b.a.searchBtn},"Search"),r.a.createElement("button",{className:b.a.filterBtn,onClick:this.toggleDrawer.bind(!0)},"Filter")),l.length>0&&r.a.createElement("div",{className:b.a.filterArr},r.a.createElement("span",null,"Filter Applied: "),l.map((function(e,t){return r.a.createElement("span",{key:t},e.toUpperCase())}))),a&&r.a.createElement("div",{className:b.a.filterDrawer},r.a.createElement("div",null,r.a.createElement("span",{onClick:this.closeDrawer},"Close"),r.a.createElement("h3",null,"Filter By")),r.a.createElement("div",{className:b.a.filterType},r.a.createElement("h5",null,"Category"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.pizza,name:"pizza"},"Pizza"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.burger,name:"burger"},"Burger"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.icecream,name:"icecream"},"Icecream"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.drinks,name:"drinks"},"Drinks")),r.a.createElement("div",{className:b.a.filterType},r.a.createElement("h5",null,"Type of Food"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.veg,name:"veg"},"Veg"),r.a.createElement(g,{handleChange:this.handleCheckChange,checked:n.nonveg,name:"nonveg"},"Non-Veg")),r.a.createElement("div",{className:b.a.btnContainer},r.a.createElement("button",{className:b.a.applyBtn,onClick:this.handleApplyClick},"Apply"),r.a.createElement("button",{className:b.a.cancelBtn,onClick:this.handleCancelClick},"Cancel"))))}}]),a}(n.Component),E=Object(o.b)((function(e){return Object(i.a)({},e.addReducer)}))(k),y=a(22),O=a(26),j=a(10),N=a.n(j),A=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={added:!1},e.addItem=function(){e.setState({added:!0}),e.props.addItem(e.props.subitem)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.subitem,t=e.price,a=e.item,n=e.ingredient,c=e.logo,l=this.state.added;return r.a.createElement("div",{className:N.a.categoryItem},r.a.createElement("div",{className:N.a.logoimg+" "+N.a[c]}),r.a.createElement("h4",null,a),r.a.createElement("p",null,"( ",n," )"),r.a.createElement("h5",null,"\u20b9",t),r.a.createElement("button",{onClick:this.addItem,className:l?N.a.disabledBtn:"",disabled:l},l?"Added":"Add"))}}]),a}(n.Component),D=a(23),I=a.n(D),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addItem=function(t){e.props.addItem(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item.list,a=void 0===t?[]:t;return r.a.createElement("div",null,a.length>0?r.a.createElement("div",{className:I.a.listContainer},a.map((function(t){return r.a.createElement(A,{key:t.id,subitem:t,addItem:e.addItem})}))):"No Item Found")}}]),a}(n.Component),S=a(14),x=a.n(S),T=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cartItem:[],itemAdded:!1},e.addItem=function(t){e.setState({cartItem:[].concat(Object(O.a)(e.state.cartItem),[t]),itemAdded:!0})},e.proceedHandle=function(){console.log("Your added item are : ",e.state.cartItem);var t,a=[],n=0,r=Object(y.a)(e.state.cartItem);try{for(r.s();!(t=r.n()).done;){var c=t.value;a.push(c.item),n+=Number(c.price)}}catch(l){r.e(l)}finally{r.f()}alert("Your order has been Placed of Rupees - "+n+". Your order details are - "+a.join(", "))},e}return Object(u.a)(a,[{key:"getCategory",value:function(e,t){return e.list.length>0?r.a.createElement("div",{className:x.a.productContainer,key:t},r.a.createElement("h2",null,e.subhead),r.a.createElement(w,{key:t,item:e,addItem:this.addItem})):null}},{key:"render",value:function(){var e=this,t=this.props.productData,a=this.state,n=a.itemAdded,c=a.cartItem;return r.a.createElement("div",{className:x.a.mainContainer},n&&r.a.createElement("div",{className:x.a.cartContainer},r.a.createElement("div",null,r.a.createElement("b",null,c.length)," Items Added :",c.map((function(e,t){return r.a.createElement("span",{key:t},r.a.createElement("b",null,e.item)," ",c.length!==t+1?", ":""," ")}))),r.a.createElement("button",{onClick:this.proceedHandle},"Proceed to Pay")),t.products?t.products.map((function(t,a){return e.getCategory(t,a)})):r.a.createElement("p",null,"Please wait, products are loading..."))}}]),a}(n.Component),F=Object(o.b)((function(e){return Object(i.a)({},e.appReducer)}),(function(e){return Object(s.b)({},e)}))(T),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSearch=function(t){e.props.handleSearch(t)},e.applyFilter=function(t){e.props.applyFilter(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getProductList()}},{key:"render",value:function(){var e=this.props.productData;return r.a.createElement("div",{className:f.a.app},r.a.createElement("header",null,r.a.createElement("h1",null,e.heading),r.a.createElement("p",null,e.description)),r.a.createElement(E,{handleSearch:this.handleSearch,applyFilter:this.applyFilter}),r.a.createElement(F,null))}}]),a}(n.Component),P=a(18),R=a.n(P),B=a(24),H={SET_PRODUCT_DATA:"SET_PRODUCT_DATA",HANDLE_SEARCH:"HANDLE_SEARCH",HANDLE_FILTER:"HANDLE_FILTER"},z=function(){return function(){var e=Object(B.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(" http://demo6817798.mockable.io/getproductdetail");case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:n=e.sent,e.next=11;break;case 10:alert("HTTP-Error: "+n.status);case 11:console.log("getProductList",n),t({type:H.SET_PRODUCT_DATA,payload:n}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(t){t({type:H.HANDLE_SEARCH,payload:e})}},V=function(e){return function(t){t({type:H.HANDLE_FILTER,payload:e})}},J=Object(o.b)((function(e){return Object(i.a)({},e.appReducer)}),(function(e){return Object(s.b)({getProductList:z,handleSearch:U,applyFilter:V},e)}))(L),Y=a(25),K={productData:{},initialPayload:{}},M=Object(s.c)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case H.SET_PRODUCT_DATA:return Object(i.a)({},e,{productData:n,initialPayload:n});case H.HANDLE_SEARCH:var r=JSON.parse(JSON.stringify(e.initialPayload));return n.length>0?r.products.forEach((function(e){e.list=e.list.filter((function(t){return(t.item+" "+e.subhead).toLowerCase().includes(n)}))})):r=Object(i.a)({},e.initialPayload),Object(i.a)({},e,{productData:r});case H.HANDLE_FILTER:var c=JSON.parse(JSON.stringify(e.initialPayload));return c.products.forEach((function(e){e.list=e.list.filter((function(e){var t=n.includes("nonveg");return!!n.includes(e.logo)&&(!t||(e.nonveg||!1))}))})),Object(i.a)({},e,{productData:c});default:return e}}}),W=Object(s.d)(M,Object(s.a)(Y.a)),q=document.getElementById("root");l.a.render(r.a.createElement(o.a,{store:W},r.a.createElement(J,null)),q)},6:function(e,t,a){e.exports={navContainer:"Nav_navContainer__1a28W",main:"Nav_main__HkwdC",searchBtn:"Nav_searchBtn__1xlZl",filterBtn:"Nav_filterBtn__209VN",filterArr:"Nav_filterArr__Lj_CJ",filterDrawer:"Nav_filterDrawer__3Dx3i",filterType:"Nav_filterType__TYbpm",btnContainer:"Nav_btnContainer__djnr2",cancelBtn:"Nav_cancelBtn__2D0ci"}}},[[27,1,2]]]);
//# sourceMappingURL=main.954cde2b.chunk.js.map