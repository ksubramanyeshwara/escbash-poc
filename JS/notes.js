/* JS/notes.js — Notes data, WAAPI transitions, and search/filter logic. */
const DATA=[{"id": "n1", "m": 1, "title": "What Linux actually is", "lesson": "What is Linux?", "date": "2026-09-14", "src": "# What Linux actually is\n\nLinux is only the **kernel**. A *distribution* (Ubuntu, Debian, RHEL) bundles it with tools and a package manager.\n\n## Why DevOps cares\n- Almost every cloud VM and container image runs Linux\n- Servers have no GUI, so the shell *is* the interface\n- Everything is a file: configs, logs, devices\n\n## Distros I will meet\n1. **Ubuntu / Debian** use `apt`\n2. **RHEL / Rocky / Amazon Linux** use `dnf` or `yum`\n\n> Tip: check which distro I am on with `cat /etc/os-release` before following any install guide."}, {"id": "n2", "m": 1, "title": "First safe commands", "lesson": "Your first commands", "date": "2026-09-14", "src": "# First safe commands\n\nThese only *read* information, so they cannot break anything:\n\n```bash\nwhoami      # which user am I?\nhostname    # which machine is this?\ndate        # current server time\nuptime      # how long it has been running\n```\n\n## Remember\n- Commands are **case sensitive**\n- `clear` or `Ctrl+L` cleans the screen\n- Up arrow recalls the previous command"}, {"id": "n3", "m": 1, "title": "Getting help offline", "lesson": "Getting help", "date": "2026-09-15", "src": "# Getting help offline\n\nWhen I forget a flag, I do not need a browser.\n\n```bash\nman ls          # full manual, press q to quit\nls --help       # short summary of options\ntype cd         # is it a builtin or a program?\n```\n\n## Reading a man page\n- `/word` searches, `n` jumps to the next match\n- **SYNOPSIS** shows the shape of the command\n- Square brackets `[ ]` mean *optional*"}, {"id": "n4", "m": 2, "title": "Absolute vs relative paths", "lesson": "Absolute vs relative paths", "date": "2026-09-17", "src": "# Absolute vs relative paths\n\nLinux has **one tree** with one root: `/`.\n\n| Kind | Starts with | Example |\n|------|-------------|---------|\n| Absolute | `/` | `/var/log/syslog` |\n| Relative | anything else | `logs/app.log` |\n\n## Rule of thumb\nUse **absolute** paths in scripts and cron jobs, because the working directory is not guaranteed there.\n\n- `.` is the current folder\n- `..` is the parent folder\n- `~` is my home folder"}, {"id": "n5", "m": 2, "title": "Moving around fast", "lesson": "Moving around", "date": "2026-09-17", "src": "# Moving around fast\n\n```bash\ncd /var/log     # go to an absolute path\ncd ..           # up one level\ncd ~            # home (same as plain cd)\ncd -            # jump back to the previous folder\n```\n\n## Habits that save time\n1. Press **Tab** to complete names\n2. Use `cd -` to flip between two folders\n3. Quote paths with spaces: `cd \"My Folder\"`"}, {"id": "n6", "m": 2, "title": "Where am I?", "lesson": "Where am I?", "date": "2026-09-18", "src": "# Where am I?\n\n`pwd` prints the current directory. Run it first whenever a path error looks confusing.\n\n```bash\n$ pwd\n/root/scripts\n$ ls ..\nnotes.txt  orders.log  scripts\n```\n\n> Most \"No such file or directory\" errors are a **wrong working directory**, not a missing file."}];
const MODS={1:"01 - Introduction to Linux",2:"02 - Paths and navigation"};
const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function inline(t){
  return t.split(/(`[^`]+`)/).map((x,i)=>{
    if(i%2)return "<code>"+esc(x.slice(1,-1))+"</code>";
    return esc(x).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/(^|[^*])\*([^*\s][^*]*)\*/g,"$1<em>$2</em>").replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  }).join("");
}
function md(src){
  const L=src.replace(/\r/g,"").split("\n");let o="",i=0;
  const cells=r=>r.trim().replace(/^\||\|$/g,"").split("|").map(c=>c.trim());
  while(i<L.length){
    const l=L[i];
    if(/^```/.test(l)){const b=[];i++;while(i<L.length&&!/^```/.test(L[i]))b.push(L[i++]);i++;o+="<pre><code>"+esc(b.join("\n"))+"</code></pre>";continue}
    if(!l.trim()){i++;continue}
    let m;
    if(m=l.match(/^(#{1,3})\s+(.*)$/)){o+="<h"+m[1].length+">"+inline(m[2])+"</h"+m[1].length+">";i++;continue}
    if(/^(-{3,}|\*{3,})\s*$/.test(l)){o+="<hr>";i++;continue}
    if(/^>/.test(l)){const b=[];while(i<L.length&&/^>/.test(L[i]))b.push(L[i++].replace(/^>\s?/,""));o+="<blockquote><p>"+inline(b.join(" "))+"</p></blockquote>";continue}
    if(/^\s*\|.*\|\s*$/.test(l)&&i+1<L.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(L[i+1])&&L[i+1].includes("-")){
      const h=cells(l);i+=2;const rows=[];while(i<L.length&&/^\s*\|.*\|\s*$/.test(L[i]))rows.push(cells(L[i++]));
      o+='<div class="tw"><table><thead><tr>'+h.map(c=>"<th>"+inline(c)+"</th>").join("")+"</tr></thead><tbody>"+rows.map(r=>"<tr>"+r.map(c=>"<td>"+inline(c)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>";continue}
    if(/^\s*[-*]\s+/.test(l)){const b=[];while(i<L.length&&/^\s*[-*]\s+/.test(L[i]))b.push(L[i++].replace(/^\s*[-*]\s+/,""));o+="<ul>"+b.map(x=>"<li>"+inline(x)+"</li>").join("")+"</ul>";continue}
    if(/^\s*\d+\.\s+/.test(l)){const b=[];while(i<L.length&&/^\s*\d+\.\s+/.test(L[i]))b.push(L[i++].replace(/^\s*\d+\.\s+/,""));o+="<ol>"+b.map(x=>"<li>"+inline(x)+"</li>").join("")+"</ol>";continue}
    const b=[];while(i<L.length&&L[i].trim()&&!/^(```|#{1,3}\s|>|\s*[-*]\s|\s*\d+\.\s)/.test(L[i]))b.push(L[i++]);
    o+="<p>"+inline(b.join(" "))+"</p>";
  }
  return o;
}
const NOTES=DATA.slice().sort((a,b)=>a.m-b.m);
const fmt=d=>new Date(d+"T00:00:00").toLocaleDateString([],{dateStyle:"medium"});
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e};
const grid=document.getElementById("ngrid"),side=document.getElementById("side"),prev=document.getElementById("prev"),prevStage=document.getElementById("prevStage"),sm=document.getElementById("sm");
const gv=document.getElementById("gridView"),sv=document.getElementById("splitView"),nside=sv.querySelector(".nside");
const BLURB={1:"What Linux is, why every cloud runs it, and the first commands you can safely type into the black screen without breaking anything.",2:"The Linux filesystem is one tree with one root. Learn to read and write paths, and move around any folder you land in."};
const plural=n=>n+(n===1?" note":" notes");
/* module cards (grid view) */
[...new Set(NOTES.map(n=>n.m))].forEach((m,idx)=>{
  const list=NOTES.filter(n=>n.m===m),latest=list.map(n=>n.date).sort().pop();
  const a=el("a","ncard fade-up delay-"+((idx%3)+1));a.href="#"+list[0].id;a.dataset.note=list[0].id;
  a.append(el("span","tag mono","module"),el("h3","",MODS[m]),el("p","",BLURB[m]||""));
  const mt=el("div","nmeta");mt.append(el("span","",plural(list.length)),el("span","","Updated "+fmt(latest)));a.appendChild(mt);grid.appendChild(a);
});

/* Smooth WAAPI transition controller across Grid <-> Split Preview & Note Switching */
const EASE="cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_OUT="cubic-bezier(0.4, 0, 1, 1)";
const activeAnims=new Set();
let currentId=null,currentMod=null,navToken=0;
const reducedMotion=()=>typeof matchMedia==="function"&&matchMedia("(prefers-reduced-motion:reduce)").matches;

function cancelAnims(){
  activeAnims.forEach(a=>{try{a.cancel()}catch(e){}});
  activeAnims.clear();
}
function anim(target,frames,opts){
  if(!target||!target.animate||reducedMotion())return Promise.resolve();
  const a=target.animate(frames,opts);
  activeAnims.add(a);
  return a.finished.catch(()=>{}).then(()=>{
    if(!opts||opts.fill!=="forwards"){activeAnims.delete(a);try{a.cancel()}catch(e){}}
  });
}
function renderSidebar(n){
  const list=NOTES.filter(x=>x.m===n.m);
  if(currentMod!==n.m){
    sm.innerHTML="";sm.append(el("span","tag mono","module"),el("b","",MODS[n.m]),el("small","",plural(list.length)));
    side.innerHTML="";
    list.forEach(x=>{
      const s=el("a","sc");s.href="#"+x.id;s.dataset.note=x.id;
      s.append(el("span","tag mono",x.lesson),el("b","",x.title));
      if(x.id===n.id)s.setAttribute("aria-current","true");
      side.appendChild(s);
    });
    currentMod=n.m;
  }else{
    side.querySelectorAll(".sc").forEach(s=>{
      if(s.dataset.note===n.id)s.setAttribute("aria-current","true");
      else s.removeAttribute("aria-current");
    });
  }
  const activeCard=side.querySelector(".sc[aria-current='true']");
  if(activeCard&&!reducedMotion()){
    try{activeCard.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}catch(e){}
  }
}
function renderPreviewBody(n){
  prevStage.innerHTML="";
  const meta=el("div","pmeta");
  meta.append(el("span","tag mono",MODS[n.m]),el("span","","Lesson: "+n.lesson),el("span","",fmt(n.date)));
  const body=el("div","prose");
  body.innerHTML=md(n.src);
  meta.classList.add("fade-up","visible");
  [...body.children].forEach((ch,i)=>ch.classList.add("fade-up","delay-"+((i%3)+1)));
  prevStage.append(meta,body);
  if(window.__observeReveals)window.__observeReveals();
  if(window.__refreshReveals)window.__refreshReveals(true);
}

async function show(id,opts={}){
  const myToken=++navToken;
  const n=NOTES.find(x=>x.id===id);
  const initial=!!opts.initial;
  const targetId=n?n.id:"";

  if(!initial&&currentId===targetId){
    if(n)prev.focus({preventScroll:true});
    return;
  }

  cancelAnims();
  const wasSplit=!initial&&!sv.hidden;
  const wasGrid=!initial&&!gv.hidden;

  /* Case 1: Switching between notes inside Split View */
  if(wasSplit&&n){
    const list=NOTES.filter(x=>x.m===n.m);
    const oldIdx=list.findIndex(x=>x.id===currentId);
    const newIdx=list.findIndex(x=>x.id===n.id);
    const dir=(oldIdx>=0&&newIdx>=0&&newIdx<oldIdx)?-1:1;

    currentId=n.id;
    document.title=n.title+" · Notes";
    renderSidebar(n);

    await anim(prevStage,[
      {opacity:1,transform:"translateY(0)"},
      {opacity:0,transform:"translateY("+(-10*dir)+"px)"}
    ],{duration:120,easing:EASE_OUT,fill:"forwards"});
    if(myToken!==navToken){cancelAnims();return;}

    renderPreviewBody(n);
    cancelAnims();
    if(window.scrollY>40)window.scrollTo({top:0,behavior:reducedMotion()?"auto":"smooth"});

    anim(prevStage,[
      {opacity:0,transform:"translateY("+(14*dir)+"px)"},
      {opacity:1,transform:"translateY(0)"}
    ],{duration:250,easing:EASE,fill:"backwards"});
    if(window.__refreshReveals)window.__refreshReveals(true);
    prev.focus({preventScroll:true});
    return;
  }

  /* Case 2: Opening a particular note preview from Grid View (or initial load) */
  if(n){
    if(wasGrid){
      await anim(gv,[
        {opacity:1,transform:"translateY(0) scale(1)"},
        {opacity:0,transform:"translateY(-8px) scale(.988)"}
      ],{duration:150,easing:EASE_OUT,fill:"forwards"});
      if(myToken!==navToken){cancelAnims();return;}
      gv.hidden=true;
      cancelAnims();
    }else{
      gv.hidden=true;
    }

    currentId=n.id;
    document.title=n.title+" · Notes";
    renderSidebar(n);
    renderPreviewBody(n);
    window.scrollTo(0,0);
    sv.hidden=false;
    if(window.__refreshReveals)window.__refreshReveals(true);

    if(!reducedMotion()){
      anim(nside,[
        {opacity:0,transform:"translateX(-14px)"},
        {opacity:1,transform:"translateX(0)"}
      ],{duration:260,easing:EASE,fill:"backwards"});
      [...side.children].forEach((c,i)=>anim(c,[
        {opacity:0,transform:"translateX(-10px)"},
        {opacity:1,transform:"translateX(0)"}
      ],{duration:220,delay:Math.min(i*35,175),easing:EASE,fill:"backwards"}));
      anim(prev,[
        {opacity:0,transform:"translateY(16px) scale(.992)"},
        {opacity:1,transform:"translateY(0) scale(1)"}
      ],{duration:280,easing:EASE,fill:"backwards"});
    }
    prev.focus({preventScroll:true});
    return;
  }

  /* Case 3: Returning back to all modules Grid View (or initial load) */
  if(wasSplit){
    await anim(sv,[
      {opacity:1,transform:"translateY(0) scale(1)"},
      {opacity:0,transform:"translateY(10px) scale(.99)"}
    ],{duration:150,easing:EASE_OUT,fill:"forwards"});
    if(myToken!==navToken){cancelAnims();return;}
    sv.hidden=true;
    cancelAnims();
  }else{
    sv.hidden=true;
  }

  currentId="";
  currentMod=null;
  document.title="Notes · Linux Lighthouse";
  window.scrollTo(0,0);
  gv.hidden=false;
  if(window.__refreshReveals)window.__refreshReveals(true);

  if(wasSplit&&!reducedMotion()){
    const ph=gv.querySelector(".ph");
    if(ph)anim(ph,[
      {opacity:0,transform:"translateY(-6px)"},
      {opacity:1,transform:"translateY(0)"}
    ],{duration:230,easing:EASE,fill:"backwards"});
    [...grid.children].forEach((c,i)=>anim(c,[
      {opacity:0,transform:"translateY(14px) scale(.985)"},
      {opacity:1,transform:"translateY(0) scale(1)"}
    ],{duration:280,delay:Math.min(i*45,225),easing:EASE,fill:"backwards"}));
  }
}

const idFromHash=()=>{try{return location.hash.slice(1)}catch(e){return""}};
function go(id){show(id);try{history.pushState(null,"",id?"#"+id:location.pathname+location.search)}catch(e){}}

/* clicks work without relying on the URL hash, so they also work inside previews/iframes */
document.addEventListener("click",e=>{
  const a=e.target.closest("a");if(!a)return;
  if(a.dataset.note){e.preventDefault();go(a.dataset.note)}
  else if(a.dataset.back!==undefined){e.preventDefault();go("")}
});
addEventListener("popstate",()=>show(idFromHash()));
addEventListener("hashchange",()=>show(idFromHash()));
show(idFromHash(),{initial:true});
