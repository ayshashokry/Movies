(this.webpackJsonpmovieslist=this.webpackJsonpmovieslist||[]).push([[0],{62:function(e,A,t){},63:function(e,A,t){},91:function(e,A,t){"use strict";t.r(A);var c=t(1),n=t(0),a=t(21),i=t.n(a),s=(t(62),t(7)),o=t(8),r=t(10),j=t(9),h=(t(63),t(96)),B=t(98),g=t(24),l=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsxs)(h.a,{className:" bg-dark text-light",expand:"lg",children:[Object(c.jsx)(h.a.Brand,{children:Object(c.jsx)(g.b,{to:"/",children:"Movies-List"})}),Object(c.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(B.a,{className:"ml-auto",children:[Object(c.jsx)("i",{className:"fab fa-imdb fa-4x",style:{color:"#f5de50"}}),Object(c.jsx)("i",{className:"fas fa-tv fa-4x pl-4"})]})})]})}}]),t}(n.Component),E=t(93),b=t(94),C=t(52),d=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"homefooter p-3 text-center bg-dark text-light",children:Object(c.jsx)(E.a,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)(C.a,{md:12,children:Object(c.jsxs)("div",{children:["Developed By :",Object(c.jsx)("span",{className:"pl-2 font-weight-bold",style:{color:"rosybrown"},children:"Aisha Shokry"}),", Using ",Object(c.jsx)("i",{className:"fab fa-react"})," React JS & Redux integrated with external movies data API",Object(c.jsx)("a",{href:"http://www.omdbapi.com/",target:"_blank",className:"pl-2",rel:"noopener noreferrer",children:"OMDB"})]})})})})})}}]),t}(n.Component),O=t(6),x=t(18),Q=t(97),u=t(95),w=t(15),I="SEARCH_MOVIE",m="FETCH_MOVIES",p="FETCH_MOVIE",F="LOADING",D=t(41),G=t.n(D),f=function(e){return function(A){A({type:I,payload:e})}},S=function(e){return function(A){G.a.get(" https://www.omdbapi.com/?i=tt3896198&apikey=462f909&s=".concat(e)).then((function(e){return A({type:m,payload:e.data})})).catch((function(e){return console.log(e)}))}},Y=function(e){return function(A){G.a.get(" https://www.omdbapi.com/?apikey=462f909&i=".concat(e)).then((function(e){return A({type:p,payload:e.data})})).catch((function(e){return console.log(e)}))}},y=function(){return{type:F}},U=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=A.call.apply(A,[this].concat(n))).onTypeSearch=function(A){e.props.searchMovie(A.target.value)},e.onSearch=function(A){A.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsxs)(E.a,{className:"form-container mt-5 p-5",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsxs)("p",{style:{fontSize:"40px"},children:[" ",Object(c.jsx)("i",{className:"fas fa-search pr-4 fa-2x"}),"Search for a movie, Tv series"]})}),Object(c.jsxs)(Q.a,{children:[Object(c.jsx)(Q.a.Group,{children:Object(c.jsx)(Q.a.Control,{onChange:this.onTypeSearch,type:"text",placeholder:"Search movie, Tv series"})}),Object(c.jsx)(u.a,{variant:"primary",type:"submit",className:"search-btn",onClick:this.onSearch,children:"Search"})]})]})}}]),t}(n.Component),M=Object(x.b)((function(e){return{text:e.movieslist.text}}),(function(e){return Object(w.bindActionCreators)({searchMovie:f,fetchMovies:S,setLoading:y},e)}))(U),R=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})}}]),t}(n.Component),k=t(99),v=t.p+"static/media/no-img.86e8f937.png",N=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(e){return Object(s.a)(this,t),A.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.movie;return Object(c.jsx)(C.a,{sm:12,lg:3,md:6,style:{marginBottom:"30px",marginTop:"20px"},children:Object(c.jsxs)(k.a,{className:"cardstyle",children:["N/A"===e.Poster?Object(c.jsx)(k.a.Img,{className:"w-100",style:{height:"50%"},variant:"top",src:v}):Object(c.jsx)(k.a.Img,{className:"w-100",style:{height:"50%"},variant:"top",src:e.Poster}),Object(c.jsxs)(k.a.Body,{children:[Object(c.jsxs)(k.a.Title,{children:[e.Title,"-",e.Year]}),Object(c.jsx)(k.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(c.jsx)(u.a,{variant:"primary",className:"submit-btn",children:Object(c.jsx)(g.b,{to:"/movie/".concat(e.imdbID),children:"Movie Details"})})]})]})})}}]),t}(n.Component),H=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.movies,A=e.Search&&e.Search.length>0?e.Search.map((function(e,A){return Object(c.jsx)(N,{movie:e},A)})):e.Response?Object(c.jsx)("h3",{children:"No movies match your search"}):null;return Object(c.jsx)(E.a,{className:"mb-5 mt-5",children:Object(c.jsx)(b.a,{children:A})})}}]),t}(n.Component),J=Object(x.b)((function(e){return{movies:e.movieslist.movies}}))(H),K=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props.loading),Object(c.jsxs)("div",{className:"HomePage",children:[Object(c.jsx)(M,{}),this.props.loading?Object(c.jsx)(R,{}):Object(c.jsx)(J,{})]})}}]),t}(n.Component),Z=Object(x.b)((function(e){return{loading:e.movieslist.loading}}))(K),W=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,A=e.movie,t=e.loading;console.log(A);var n=Object(c.jsxs)(E.a,{style:{backgroundColor:"ghostwhite",padding:"20px"},children:["series"===A.Type?Object(c.jsx)("h4",{className:"text-center",children:"Series Details"}):Object(c.jsx)("h4",{className:"text-center",children:"Movie Details"}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{md:12,lg:4,children:"N/A"!==A.Poster?Object(c.jsx)("img",{alt:"moviePoster",src:A.Poster}):Object(c.jsx)("img",{alt:"moviePoster",src:v,className:"w-100",style:{height:"50%"}})}),Object(c.jsx)(C.a,{md:12,lg:8,children:Object(c.jsxs)("div",{className:"movieDetails mt-5",children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Title: "})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsxs)("h6",{children:[A.Title," ",A.Year]})})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Country:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.Country})})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Language:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.Language})})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Rated:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.Rated})})]}),A.Production?Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Production:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.Production})})]}):null,Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"IMDB Rating:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.imdbRating})})]}),A.Ratings&&0!==A.Ratings.length?Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Other Ratings:"})}),Object(c.jsx)(C.a,{sm:8,children:A.Ratings?A.Ratings.map((function(e,A){return Object(c.jsxs)("h6",{children:[Object(c.jsxs)("span",{style:{fontWeight:"bold",color:"gray"},children:[e.Source," :"]}),Object(c.jsx)("span",{children:e.Value})]},A)})):null})]}):null,Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{sm:4,children:Object(c.jsx)("h5",{children:"Actors:"})}),Object(c.jsx)(C.a,{sm:8,children:Object(c.jsx)("h6",{children:A.Actors})})]})]})})," ",Object(c.jsx)("a",{href:"https://www.imdb.com/title/"+A.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn viewimdb-btn text-center",children:"View on IMDB"})]})]}),a=t?Object(c.jsx)(R,{}):n;return Object(c.jsx)("div",{style:{margin:"50px 0 100px"},children:a})}}]),t}(n.Component),L=Object(x.b)((function(e){return{movie:e.movieslist.movie,loading:e.movieslist.loading}}),(function(e){return Object(w.bindActionCreators)({fetchMovie:Y,setLoading:y},e)}))(W),P=function(e){Object(r.a)(t,e);var A=Object(j.a)(t);function t(){return Object(s.a)(this,t),A.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(O.a,{exact:!0,path:"/",component:Z}),Object(c.jsx)(O.a,{exact:!0,path:"/movie/:id",component:L}),Object(c.jsx)(d,{})]})})}}]),t}(n.Component),T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(A){var t=A.getCLS,c=A.getFID,n=A.getFCP,a=A.getLCP,i=A.getTTFB;t(e),c(e),n(e),a(e),i(e)}))},q=t(20),V={text:"",movies:[],movie:[],loading:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case I:return Object(q.a)(Object(q.a)({},e),{},{text:A.payload,loading:!1});case m:return Object(q.a)(Object(q.a)({},e),{},{movies:A.payload,loading:!1});case p:return Object(q.a)(Object(q.a)({},e),{},{movie:A.payload,loading:!1});case F:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});default:return e}},X=Object(w.combineReducers)({movieslist:z}),_=t(54),$=t(55),ee=t(56),Ae=t.n(ee),te=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(A){return}}(),ce=[_.a],ne=Object(w.createStore)(X,te,Object($.composeWithDevTools)(w.applyMiddleware.apply(void 0,[Ae.a].concat(ce))));ne.subscribe((function(){!function(e){try{var A=JSON.stringify(e);localStorage.setItem("state",A)}catch(t){}}({changed:ne.getState().changed,Devices:ne.getState().Devices})})),i.a.render(Object(c.jsx)(x.a,{store:ne,children:Object(c.jsx)(P,{})}),document.getElementById("root")),T()}},[[91,1,2]]]);
//# sourceMappingURL=main.fc5cf222.chunk.js.map