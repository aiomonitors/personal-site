(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(8),s=n.n(a),r=n(1),l=n(2),c=n(5),p=n(3),d=n(4),h=n(6),m={listStyleType:"none",marginBottom:"10px"},u={listStyleType:"none",display:"flex",justifyContent:"space-between",paddingBottom:"30px",height:"40px",alignItems:"center",fontWeight:500,backgroundColor:"rgba(21,22,26, 0.5)",zIndex:100,position:"fixed",top:0,width:"80%",margin:"auto",marginRight:"150px",padding:"10px"},y={display:"flex",marginRight:"30px",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",textDecoration:"none",color:"white"},f={color:"white",textDecoration:"none"},g={textDecoration:"none",marginLeft:"40px",color:"white"},w={margin:"15px auto"},v={borderRadius:"8px",color:"#BB8FCE",marginLeft:"20px",padding:"10px",textDecoration:"none",fontWeight:600},b={borderRadius:"8px",color:"#BB8FCE",padding:"10px",textDecoration:"none",fontWeight:600,marginTop:"30px"},x={mainStyleDefault:{marginTop:"20px"},mainStyle:{marginTop:"150px"},mainHeader:{fontWeight:500,fontSize:"calc(30px + 3vw)"},languages:{fontSize:"calc(12px + .25vw)",color:"#BB8FCE"},aboutMe:{fontWeight:500,fontSize:"calc(15px + .75vw)",marginTop:"20px"}},k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).toggleSwitch=function(){var e="block"==i.state.display?"none":"block";i.setState({display:e})},i.listenToScroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);i.setState({theposition:e})},i.state={display:"none",width:0,height:0,theposition:0},i.defaultStyle={listStyleType:"none",marginBottom:"10px"},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.listenToScroll)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e,t;return t=!1,this.state.width>768?(e=u,t=y):(e=m,t={display:this.state.display,textAlign:"center",marginBottom:"15px",textDecoration:"none"}),this.state.theposition>.1&&this.state.width>768?e=Object(h.a)({},u,{borderBottom:"1px solid rgba(128, 128, 128, 0.5"}):this.state.theposition<.1&&this.state.width>768&&(e=Object(h.a)({},u,{borderBottom:"none"})),o.a.createElement("div",{style:e,className:this.props.className},o.a.createElement(j,{onClick:this.toggleSwitch.bind(this)}),o.a.createElement(S,null,this.props.logo),o.a.createElement("div",{id:"links-area",style:t},this.props.children))}}]),n}(i.Component),E=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={display:"none",width:0,height:0},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>768?(this.linkStyle=g,this.liStyle=null):(this.liStyle=w,this.linkStyle=f),o.a.createElement("li",{style:this.liStyle},o.a.createElement("a",{href:this.props.link,className:this.props.className,onClick:this.props.onClick,style:this.linkStyle,target:this.props.target},this.props.children))}}]),n}(i.Component),S=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={display:"none",width:0,height:0},i.defaultStyle={display:"inline-block",fontSize:"35px",fontWeight:"400",marginTop:"10px",color:"#BB8FCE"},i.style={display:"inline-block",fontSize:"22px",marginTop:"10px",marginLeft:"20px",color:"#BB8FCE"},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.width>768?this.defaultStyle:this.style,o.a.createElement("a",{href:this.props.link,className:this.props.className,style:this.defaultStyle,onClick:this.props.onClick},this.props.children)}}]),n}(i.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={display:"none",width:0,height:0},i.defaultStyle={position:"absolute",top:"10px",right:"20px",cursor:"pointer",color:"color: rgba(255,255,255,0.8);",fontSize:"24px",marginTop:"10px"},i.style={display:"none"},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e;return e=this.state.width>768?this.style:this.defaultStyle,o.a.createElement("i",{className:"fas fa-bars",onClick:this.props.onClick,style:e})}}]),n}(i.Component),D=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={display:"none",width:0,height:0},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this.state.width>768?v:b;return o.a.createElement("a",{href:this.props.link,className:this.props.className,onClick:this.props.onClick,style:e},"Contact Me")}}]),n}(i.Component),O=(n(14),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={display:"none",width:0,height:0},i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"toggleSwitch",value:function(){this.setState({display:"none"==this.state.display?"block":"none"})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("header",null,o.a.createElement(k,{logo:"\ud83e\uddec"},o.a.createElement(E,{link:"#projects"},"Projects"),o.a.createElement(E,{link:"./resume.pdf",target:"_blank"},"Resume"),o.a.createElement(E,{link:"https://github.com/aiomonitors",target:"_blank"},"Github"),o.a.createElement(D,{link:"mailto:navr@discoders.us"}))),o.a.createElement("main",{style:x.mainStyle},o.a.createElement("div",{style:x.mainHeader,className:"animated fadeIn fast"},"Shihab Chowdhury"),o.a.createElement("div",{style:x.languages},"Python, Node, TypeScript, GoLang"),o.a.createElement("div",{style:x.aboutMe},"I'm a 17 year old programmer living in Queens, New York City. I also enjoy playing ",o.a.createElement(W,{fontSize:x.aboutMe.fontSize},"lacrosse"),", ",o.a.createElement(W,{fontSize:x.aboutMe.fontSize},"video games"),", ",o.a.createElement(W,{fontSize:x.aboutMe.fontSize},"reading"),", and ",o.a.createElement(W,{fontSize:x.aboutMe.fontSize},"reselling")," sneakers."),o.a.createElement(C,{moreClick:this.toggleSwitch.bind(this),state:this.state,id:"projects"},o.a.createElement(z,{title:"godiscord",src:"https://hackernoon.com/drafts/y54f33rq.png",href:"https://github.com/aiomonitors/godiscord"},"A package for GoLang to create and deliver Discord webhooks easily."),o.a.createElement(z,{src:"https://hackernoon.com/drafts/y54f33rq.png",title:"supcomgo",href:"https://github.com/aiomonitors/supcomgo"},"A package for GoLang to scrape droplists from ",o.a.createElement("a",{href:"https://supremecommunity.com",style:{color:"#BB8FCE",textDecoration:"none"}},"Supreme Community")," and send it to Discord, save as JSON or CSV."),o.a.createElement(z,{src:"https://cdn.discordapp.com/attachments/498986135830134794/570651365836193827/PP.jpg",title:"Discoders",date:"2019 - Present"},"A company with the goal of creating monitoring solutions and automation technology to make reselling sneakers & clothing easier."),o.a.createElement(z,{style:{display:this.state.display,textDecoration:"none"},src:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",href:"https://www.npmjs.com/package/simple-proxy-scraper",title:"ProxyScrape"},"A Node.js module to scrape proxies from the internet"),o.a.createElement(z,{style:{display:this.state.display,textDecoration:"none"},src:"./ww2proj.png",href:"http://ww2proj.shihab.xyz",title:"Atomic Fission in WW2 Website"},"A website I created for my 11th grade history class about Atomic Fission during WWII. Uses ",o.a.createElement(W,null,"Bootstrap")))),o.a.createElement("footer",null,o.a.createElement(T,{state:this.state})))}}]),n}(i.Component)),W=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).style={fontSize:i.props.fontSize,color:"#BB8FCE"},i}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("a",{href:this.props.href,className:this.props.className,onClick:this.props.onClick,style:this.style},this.props.children)}}]),n}(i.Component),C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).divStyle={marginTop:"150px",marginBottom:"150px"},i.cardHolderStyle={marginTop:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gridAutoRows:"auto",gridGap:"20px",marginBottom:"20px"},i}return Object(l.a)(n,[{key:"render",value:function(){var e="block"==this.props.state.display?"Less":"More";return o.a.createElement("div",{style:this.divStyle},o.a.createElement("div",{style:{fontSize:"calc(15px + 2.5vw)"}},"Projects"),o.a.createElement("div",{style:this.cardHolderStyle},this.props.children),o.a.createElement("div",{onClick:this.props.moreClick,style:{width:"50px",textAlign:"center",padding:"10px 20px",border:"1px solid grey",borderRadius:"8px",margin:"auto"}},e))}}]),n}(i.Component),z=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).style={display:"flex",flexDirection:"column",alignItems:"center",justifyContentt:"space-between",height:"300px",textDecoration:"none"},i.imageContainer={height:"185px"},i.imageStyle={borderRadius:"11px",objectFit:"cover",height:"100%",width:"100%",transform:"scale(1)"},i.cardBody={marginTop:"10px",width:"100%",textAlign:"left"},i.cardHeader={fontSize:"25px",color:"grey",display:"flex",alignItems:"center",justifyContent:"space-between"},i.cardText={marginTop:"5px",color:"grey"},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.href?o.a.createElement("i",{class:"fas fa-external-link-alt",style:{color:"#CCD1D1",marginLeft:"10px",fontSize:"13px"}}):null;return o.a.createElement("a",{style:this.props.style||this.style,href:this.props.href,target:"_blank"},o.a.createElement("div",{style:this.imageContainer},o.a.createElement("img",{src:this.props.src,style:this.imageStyle})),o.a.createElement("div",{style:this.cardBody},o.a.createElement("div",{style:this.cardHeader},o.a.createElement("div",null,this.props.title,o.a.createElement("div",{style:{fontSize:"15px"}},this.props.date)),e),o.a.createElement("div",{style:this.cardText},this.props.children)))}}]),n}(i.Component),T=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).defaultStyle={display:"flex",flexDirection:"row",listStyleType:"none",justifyContent:"space-between",width:"100%",alignItems:"center"},i.responsive={display:"flex",flexDirection:"column",listStyleType:"none",textAlign:"left",width:"100%",marginBottom:"50px",borderTop:"1px solid rgba(128,128,128, 0.5)",padding:"10px"},i.linkStyle={display:"flex",flexDirection:"row"},i.linkStyleResponse={display:"flex",flexDirection:"column",marginLeft:"20px"},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.state.width>768?this.defaultStyle:this.responsive,t=this.props.state.width>768?this.linkStyle:this.linkStyleResponse;return o.a.createElement("div",{style:e},o.a.createElement("div",{style:{display:"inline-block",fontSize:"12px",marginLeft:"20px"}},"Shihab Chowdhury"),o.a.createElement("div",{style:t},o.a.createElement(B,{state:this.props.state,link:"#projects"},"Projects"),o.a.createElement(B,{state:this.props.state,link:"./resume.pdf",target:"_blank"},"Resume"),o.a.createElement(B,{state:this.props.state,link:"https://github.com/aiomonitors",target:"_blank"},"Github"),o.a.createElement(L,{state:this.props.state}),o.a.createElement(B,{state:this.props.state},"Built with ",o.a.createElement(W,null,"React"))))}}]),n}(i.Component),B=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).liStyleDefault={textDecoration:"none",color:"grey",fontSize:"12px",margin:"20px"},i.liStyleResponsive={textDecoration:"none",color:"grey",fontSize:"12px",textAlign:"left",display:"flex",marginTop:"20px"},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.state.width>768?this.liStyleDefault:this.liStyleResponsive;return o.a.createElement("li",{style:e},o.a.createElement("a",{href:this.props.link,className:this.props.className,onClick:this.props.onClick,style:{textDecoration:"none",color:"grey"},target:this.props.target},this.props.children))}}]),n}(i.Component),L=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).style={fontSize:"12px",color:"grey",textDecoration:"none",display:"flex",flexDirection:"row"},i}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:this.style},o.a.createElement(N,{link:"mailto:navr@discoders.us",state:this.props.state},o.a.createElement("i",{class:"fas fa-envelope",style:{textDecoration:"none",color:"grey"}})),o.a.createElement(N,{link:"https://twitter.com/aiomonitors",state:this.props.state},o.a.createElement("i",{class:"fab fa-twitter",style:{textDecoration:"none",color:"grey"}})),o.a.createElement(N,{link:"https://instagram.com/monitorthat",state:this.props.state},o.a.createElement("i",{class:"fab fa-instagram",style:{textDecoration:"none",color:"grey"}})),o.a.createElement(N,{link:"https://github.com/aiomonitors",state:this.props.state},o.a.createElement("i",{class:"fab fa-github",style:{textDecoration:"none",color:"grey"}})))}}]),n}(i.Component),N=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).liStyleDefault={textDecoration:"none",color:"grey",fontSize:"12px",marginLeft:"10px",marginTop:"20px"},i.liStyleResponsive={textDecoration:"none",color:"grey",fontSize:"12px",marginTop:"20px"},i.linkStyleResponsive={marginRight:"20px"},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.state.width>768?this.liStyleDefault:this.liStyleResponsive,t=this.props.state.width>768?{}:this.linkStyleResponsive;return o.a.createElement("li",{style:e},o.a.createElement("a",{href:this.props.link,className:this.props.className,onClick:this.props.onClick,style:t,target:"_blank"},this.props.children))}}]),n}(i.Component);s.a.render(o.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2bcdad30.chunk.js.map