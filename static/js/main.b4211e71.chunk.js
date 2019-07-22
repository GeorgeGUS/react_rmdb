(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),l=a.n(c),m=a(4),o=a(8),i=a(11),s=a(12),u=a(14),d=a(13),p=a(15),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t}),console.error(e,t.componentStack)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.errorInfo;return t?n.a.createElement("div",null,n.a.createElement("h3",null,"Stranger things happen here..."),n.a.createElement("p",null,"Keep calm, we called El to fix it."),n.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},t&&t.toString(),a&&a.componentStack)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),t}(r.Component),E=(a(41),function(){return n.a.createElement("header",{className:"rmdb-header"},n.a.createElement("div",{className:"rmdb-header-content rmdb-container"},n.a.createElement(m.b,{to:"/"},n.a.createElement("img",{className:"rmdb-logo",src:"".concat("/react_rmdb","/images/reactMovie_logo.png"),alt:"rmdb-logo"})),n.a.createElement("a",{href:"https://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"rmdb-tmdb-logo",src:"".concat("/react_rmdb","/images/movie-db-logo.svg"),alt:"tmdb-logo"}))))}),h=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Whoooops. This page doesn't exist..."),n.a.createElement("button",{onClick:e.history.goBack},"Go to previous page"))},f=a(32),v="https://api.themoviedb.org/3/",g="844dba0bfd8f3a4f3799f6130ef9e335",N="".concat("/react_rmdb","/images/no_image.jpg"),y=function(e,t){return function(a){var r=t?"":N;return a?"".concat("https://image.tmdb.org/t/p/").concat(e).concat(a):r}},_=y("w1280",!0),w=y("w500"),k=y("w300"),x=y("w154"),j="en-US",D=function(e){var t=e.title,a=e.desc,r=e.image;return n.a.createElement(f.Helmet,null,n.a.createElement("html",{lang:j}),n.a.createElement("title",null,t),n.a.createElement("meta",{name:"title",content:t}),n.a.createElement("meta",{name:"description",content:a}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:url",content:document.location.href}),n.a.createElement("meta",{property:"og:title",content:t}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:image",content:r}),n.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{property:"twitter:url",content:document.location.href}),n.a.createElement("meta",{property:"twitter:title",content:t}),n.a.createElement("meta",{property:"twitter:description",content:a}),n.a.createElement("meta",{property:"twitter:image",content:r}),n.a.createElement("link",{rel:"canonical",href:document.location.href}))},S=a(24),I=a.n(S),O=a(19),M=a(33),T=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=arguments[c];return function(t){function r(){var e,t,n;Object(i.a)(this,r);for(var c=arguments.length,l=new Array(c),m=0;m<c;m++)l[m]=arguments[m];return(n=Object(u.a)(this,(e=Object(d.a)(r)).call.apply(e,[this].concat(l)))).state={movies:[],response:null,loading:!0,currentPage:1,totalPages:1,searchTerm:n.props.match.params.searchTerm||""},n.createEndpoint=function(e,t,a){return function(){var r=n.props.match.params.id,c=n.state,l=c.currentPage,m=c.searchTerm;return"".concat(v).concat(e,"/").concat(t||r,"?api_key=").concat(g,"&language=").concat(j,"&append_to_response=").concat(a,"&query=").concat(m,"&page=").concat(l)}},n._endpoint=(t=n).createEndpoint.apply(t,a),n.fetchItems=Object(M.a)(I.a.mark(function e(){var t;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n._endpoint());case 3:return e.next=5,e.sent.json();case 5:(t=e.sent).status_code?n.setState({loading:!1}):t.results?n.setState(function(e){var a=e.movies;return{movies:[].concat(Object(O.a)(a),Object(O.a)(t.results)),loading:!1,currentPage:t.page,totalPages:t.total_pages}}):n.setState({response:t,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Fetch error:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),n.updateItems=function(e,t){n.setState(function(a){var r=a.movies,n=a.searchTerm,c=a.currentPage;return{movies:e?Object(O.a)(r):[],loading:!0,searchTerm:e?n:t,currentPage:e?c+1:1}},n.fetchItems)},n}return Object(p.a)(r,t),Object(s.a)(r,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.searchTerm;e.match.params.searchTerm!==t&&this.updateItems(!1,t)}},{key:"render",value:function(){return n.a.createElement(e,Object.assign({},this.state,this.props,{updateItems:this.updateItems}))}}]),r}(r.Component)},P=(a(52),function(e){var t=e.children;return n.a.createElement("main",{className:"rmdb-page"},t)}),C=a(34),F=a.n(C),B=(a(53),function(e){var t=e.children,a=e.header,r=e.loading,c=e.isActors,l=F()({"rmdb-grid-content":!0,"rmdb-grid-content-actor":c});return n.a.createElement(b,null,n.a.createElement("div",{className:"rmdb-grid"},n.a.createElement("div",{className:"rmdb-container"},a&&!r&&n.a.createElement("h2",null,a),n.a.createElement("div",{className:l},t&&t.map(function(e,t){return n.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))))}),R=(a(54),function(e){var t=e.image,a=e.title,r=e.text,c={backgroundImage:"url('".concat(t,"')")};return n.a.createElement("div",{className:"rmdb-heroimage",style:c},n.a.createElement("div",{className:"rmdb-heroimage-content rmdb-container"},n.a.createElement("div",{className:"rmdb-heroimage-text"},n.a.createElement("h1",null,a),n.a.createElement("p",null,r))))}),z=(a(55),function(e){var t=e.text,a=e.onClick;return n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("button",{type:"button",className:"rmdb-loadmorebtn",onClick:function(){return a(!0)}},t))}),A=(a(56),["Itself","Herself","Himself"]),U=function(e){var t=e.clickable,a=e.image,r=e.title,c=e.year,l=e.movieId,o=e.gender,i=e.character;return n.a.createElement("div",{className:"rmdb-moviethumb"},t?n.a.createElement(m.b,{to:"/movie/".concat(l),className:"rmdb-moviethumb-wrapper"},n.a.createElement("img",{className:"rmdb-moviethumb-image",src:a,alt:r}),n.a.createElement("p",{className:"rmdb-moviethumb-title"},"\u201c",r,"\u201d",c?", ".concat(c):"",n.a.createElement("br",null),o&&n.a.createElement("span",null,"Character: ",i||A[o]))):n.a.createElement("img",{className:"rmdb-moviethumb-image",src:a,alt:"moviethumb"}))},H=a(6),G=(a(60),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={value:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value.trim(),r=a.props.match.params.searchTerm;""!==t&&t!==r&&a.props.history.push("/search/".concat(t))},a.handleInput=function(e){var t=e.target.value;a.setState({value:t})},a.selectText=function(e){e.target.select()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.searchTerm;e&&this.setState({value:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.searchTerm;e.match.params.searchTerm!==t&&this.setState({value:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"rmdb-searchbar"},n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("form",{className:"rmdb-searchbar-form",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"rmdb-searchbar-label"},n.a.createElement(H.a,{className:"rmdb-searchbar-icon",icon:"search"}),n.a.createElement("span",{className:"visually-hidden"},"Search"),n.a.createElement("input",{type:"text",name:"search",className:"rmdb-searchbar-input",placeholder:"Search",onFocus:this.selectText,onChange:this.handleInput,value:this.state.value})),n.a.createElement("button",{className:"rmdb-searchbar-submit"},"Search"))))}}]),t}(r.Component)),J=Object(o.f)(G),L=(a(61),function(){return n.a.createElement("div",{className:"loader"})}),Y=T(function(e){var t=e.loading,a=e.movies,r=e.currentPage,c=e.totalPages,l=e.updateItems,m=a.length>0?a[0]:{};return n.a.createElement(P,null,n.a.createElement(D,{title:"RMDB - Popular Movies",desc:"React Movie (or RMDB) is a database for searching information about movies and actors",image:_(m.backdrop_path)}),n.a.createElement(R,{image:_(m.backdrop_path),title:m.original_title,text:m.overview}),n.a.createElement(J,null),n.a.createElement(B,{header:"Popular Movies",loading:t},a.map(function(e){return n.a.createElement(U,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:w(e.poster_path),movieId:e.id,movieName:e.title})})),t&&n.a.createElement(L,null),r<c&&!t&&n.a.createElement(z,{text:"Load More",onClick:l}))},"movie","popular"),q=(a(62),function(e){var t=e.actor;return n.a.createElement("div",{className:"rmdb-actor"},n.a.createElement(m.b,{to:"/actor/".concat(t.id),className:"rmdb-actor-image"},n.a.createElement("img",{src:x(t.profile_path),alt:t.name})),n.a.createElement("div",{className:"rmdb-actor-info"},n.a.createElement(m.b,{to:"/actor/".concat(t.id)},n.a.createElement("p",{className:"rmdb-actor-name"},t.name)),n.a.createElement("p",{className:"rmdb-actor-character"},t.character)))}),K=(a(27),function(e){var t=e.movie,a=t.backdrop_path,r=t.poster_path,c=t.title,l=t.genres,m=t.overview,o=t.vote_average,i=t.credits,s={backgroundImage:"url(".concat(_(a),")")},u=i.crew.filter(function(e){return"Director"===e.job}),d=l.map(function(e){return e.name}).join(", ");return n.a.createElement("div",{className:"rmdb-info",style:s},n.a.createElement("div",{className:"rmdb-info-content rmdb-container clearfix"},n.a.createElement("div",{className:"rmdb-info-thumb"},n.a.createElement(U,{image:w(r)})),n.a.createElement("div",{className:"rmdb-info-text"},n.a.createElement("h1",null,c),n.a.createElement("h2",null,"Plot"),n.a.createElement("p",null,m),n.a.createElement("div",{className:"rmdb-info-sections"},n.a.createElement("div",{className:"rmdb-info-section"},n.a.createElement("h2",null,"Genres"),n.a.createElement("p",null,d)),n.a.createElement("div",{className:"rmdb-info-section"},n.a.createElement("h2",null,"IMDB rating"),n.a.createElement("div",{className:"rmdb-rating"},n.a.createElement("meter",{className:"rmdb-rating-scale",min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*o}),n.a.createElement("p",{className:"rmdb-rating-score"},o))),n.a.createElement("div",{className:"rmdb-info-section"},u.length>1?n.a.createElement("h2",null,"Directors"):n.a.createElement("h2",null,"Director"),n.a.createElement("p",null,u.map(function(e){return e.name}).join(", ")))))))}),W=function(e){return e&&0!==e?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e):"n/a"},Q=(a(28),function(e){var t=e.movie,a=t.runtime,r=t.budget,c=t.revenue,l=t.release_date;return n.a.createElement("div",{className:"rmdb-infobar"},n.a.createElement("ul",{className:"rmdb-infobar-list rmdb-container"},n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:["far","calendar-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Release date: ",l)),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:["far","clock"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Running time: ",function(e){if(!e||0===e)return"n/a";var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(a))),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:["far","money-bill-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Budget: ",W(r))),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:"ticket-alt",size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Revenue: ",W(c)))))}),V=(a(63),function(e){var t=e.title;return n.a.createElement("div",{className:"rmdb-breadcrumbs"},n.a.createElement("div",{className:"rmdb-container"},n.a.createElement("ul",{className:"rmdb-breadcrumbs-list"},n.a.createElement("li",{className:"rmdb-breadcrumbs-item"},n.a.createElement(m.b,{to:"/"},"Home")),n.a.createElement("li",{className:"rmdb-breadcrumbs-item"},t))))}),X=T(function(e){var t=e.response,a=e.loading,r=t&&t.credits.cast;return n.a.createElement(P,null,t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{title:'RMDB - "'.concat(t.title,'"'),desc:t.overview,image:w(t.poster_path)}),n.a.createElement(V,{title:t.title}),n.a.createElement(K,{movie:t}),n.a.createElement(Q,{movie:t})),r&&n.a.createElement(B,{header:"Actors",loading:a,isActors:!0},r.map(function(e){return n.a.createElement(q,{key:e.name,actor:e})})),a&&n.a.createElement(L,null),!r&&!a&&n.a.createElement("h1",null,"Not found!"))},"movie",null,["credits","videos"]),Z=T(function(e){var t=e.loading,a=e.movies,r=e.currentPage,c=e.totalPages,l=e.updateItems,m=e.searchTerm,o='Search results for "'.concat(m,'"');return n.a.createElement(P,null,n.a.createElement(D,{title:"RMDB - Search: ".concat(m),desc:o}),n.a.createElement(J,null),n.a.createElement(B,{header:o,loading:t},a.map(function(e){return n.a.createElement(U,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:w(e.poster_path),movieId:e.id,movieName:e.title})})),t&&n.a.createElement(L,null),r<c&&!t&&n.a.createElement(z,{text:"Load More",onClick:l}))},"search","movie"),$=function(e){var t=e.actor,a=t.profile_path,r=t.name,c=t.biography;return n.a.createElement("div",{className:"rmdb-info"},n.a.createElement("div",{className:"rmdb-info-content rmdb-container clearfix"},n.a.createElement("div",{className:"rmdb-info-thumb"},n.a.createElement(U,{image:w(a)})),n.a.createElement("div",{className:"rmdb-info-text"},n.a.createElement("h1",null,r),c&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Biography"),n.a.createElement("p",null,c)))))},ee=[{gen:"n/a",icon:"genderless"},{gen:"Female",icon:"venus"},{gen:"Male",icon:"mars"}],te=function(e){var t=e.actor,a=t.gender,r=t.birthday,c=t.deathday,l=t.place_of_birth,m=function(e,t){var a=t?new Date(t):new Date,r=new Date(e),n=a.getFullYear()-r.getFullYear(),c=a.getMonth()-r.getMonth();return(c<0||0===c&&a.getDate()<r.getDate())&&n--,n}(r,c),o="".concat(r," \u2013 ").concat(c||"now"," (").concat(m," years old)"),i=ee[a],s=i.gen,u=i.icon;return n.a.createElement("div",{className:"rmdb-infobar"},n.a.createElement("ul",{className:"rmdb-infobar-list rmdb-container"},n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:["far","calendar-alt"],size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Age: ",r?o:"n/a")),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:u,size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Gender: ",s)),n.a.createElement("li",{className:"rmdb-infobar-item"},n.a.createElement(H.a,{icon:"globe",size:"2x"}),n.a.createElement("span",{className:"rmdb-infobar-info"},"Place of birth: ",l||"n/a"))))},ae=T(function(e){var t=e.response,a=e.loading,r=t&&t.movie_credits.cast;return n.a.createElement(P,null,t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{title:"RMDB - ".concat(t.name),desc:t.biography,image:w(t.profile_path)}),n.a.createElement(V,{title:t.name}),n.a.createElement($,{actor:t}),n.a.createElement(te,{actor:t})),r&&n.a.createElement(B,{header:"".concat(r.length," Movies with ").concat(t.name),loading:a},r.sort(function(e,t){return new Date(t.release_date)-new Date(e.release_date)}).map(function(e){return n.a.createElement(U,{key:e.id,clickable:!0,title:e.title,year:e.release_date&&e.release_date.slice(0,4),image:k(e.poster_path),movieId:e.id,gender:t.gender,character:e.character})})),a&&n.a.createElement(L,null),!r&&!a&&n.a.createElement("h1",null,"Not found!"))},"person",null,["images","movie_credits","tv_credits"]),re=function(){return n.a.createElement(b,null,n.a.createElement(m.a,null,n.a.createElement(E,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",component:Y,exact:!0}),n.a.createElement(o.a,{path:"/search/:searchTerm",component:Z,exact:!0}),n.a.createElement(o.a,{path:"/movie/:id",component:X,exact:!0}),n.a.createElement(o.a,{path:"/actor/:id",component:ae,exact:!0}),n.a.createElement(o.a,{component:h}))))},ne=a(17),ce=a(35),le=a(10),me=a(18);ne.b.add(ce.a,le.d,me.a,me.b,me.c,le.e,le.a,le.c,le.f,le.b);a(64),a(65);l.a.render(n.a.createElement(re,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b4211e71.chunk.js.map