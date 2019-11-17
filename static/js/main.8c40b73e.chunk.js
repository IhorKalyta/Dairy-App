(this.webpackJsonpdiary=this.webpackJsonpdiary||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=(a(16),a(9)),c=a(1),m=a(2),l=a(4),u=a(3),d=a(6),v=a(5),p=(a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).removeItem=function(e){a.props.remove(e)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center",onClick:function(){e.props.setActiveComment(),e.props.toggleHidden()}},r.a.createElement("h3",null,this.props.item.title),r.a.createElement("span",{className:"badge badge-info badge-pill"}," ",this.props.item.commentsCount),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.props.removeItem(e.props.id)}},"Delete")))}}]),t}(r.a.Component)),h=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return a.setState({value:e.target.value})},a.handleEnter=function(e){13===e.charCode&&e.ctrlKey&&a.addComment(a.state.value)},a.addComment=function(e){e.trim()&&e.length>0&&(a.props.addComment(e),a.setState({value:""}))},a.state={value:""},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"font-weight-light"},"Comments #",this.props.activeItem&&this.props.activeItem.title),r.a.createElement("ul",{className:"list-group list-group-flush"},this.props.activeItem&&this.props.activeItem.comments.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("div",{className:"avatar"}),e.text)}))),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("textarea",{className:"form-control",rows:"4",value:this.state.value,onChange:this.handleChange,onKeyPress:this.handleEnter})))))}}]),t}(r.a.Component));function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({text:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t=a.state.text.trim();if(t.length){var n=a.state.items.slice();n.push({id:a.state.items.length+1,title:t,commentsCount:0,comments:[],displayComment:!1}),a.setState({text:"",items:n},a.saveToLocalStorage)}},a.remove=function(e){var t=a.state.items.slice();t.splice(e,1),a.setState({items:t},a.saveToLocalStorage)},a.addComment=function(e){var t=a.state.items.map((function(t){return t.id===a.state.activeItem.id?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{commentsCount:t.comments.length+1,comments:t.comments.concat({id:t.comments.length+1,text:e})}):t}));a.setState({items:t},a.saveToLocalStorage)},a.getActiveItem=function(){return a.state.items.find((function(e){return e.id===a.state.activeItem.id}))},a.saveToLocalStorage=function(){window.localStorage.setItem("savedList",JSON.stringify(a.state.items))},a.state={items:[],text:"",activeItem:{},isHidden:!0},a.remove=a.remove.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("savedList"))||[];this.setState({items:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"font-weight-light"},"Items"),r.a.createElement("form",{className:"app",onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Type name here...",value:this.state.text,onChange:this.handleChange})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{className:"btn btn-info"},"Add new"))),r.a.createElement("ul",{className:"list-group list-group-flush",id:"list-tab",role:"tablist"},this.state.items.map((function(t,a){return r.a.createElement(p,{item:t,key:t.id,id:a,removeItem:e.remove,setActiveComment:function(){return e.setState({activeItem:t})},toggleHidden:function(){return e.setState({isHidden:!1})}})}))))))),!this.state.isHidden&&r.a.createElement(h,{addComment:this.addComment,activeItem:this.getActiveItem()})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.8c40b73e.chunk.js.map