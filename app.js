const decisionData = {
  travel: {
    heading: "ตัวอย่างที่ 1 · ไปเที่ยวกับเพื่อน",
    options: [
      { title:"ทริปภูเขา / ป่าไม้", sub:"สงบ ผ่อนคลาย ใกล้ชิดธรรมชาติ", icon:"▲", image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        pros:["วิวสวยงามและอากาศเย็นสบาย","เหมาะสำหรับการพักผ่อนและใกล้ชิดธรรมชาติ","บรรยากาศสงบ เหมาะกับการใช้เวลากับเพื่อน"],
        cons:["การเดินทางหรือเดินขึ้นเขาอาจเหนื่อย","บางพื้นที่มีสิ่งอำนวยความสะดวกจำกัด"],
        analysis:"เหมาะกับกลุ่มที่อยากพักใจและชอบกิจกรรมกลางแจ้ง ควรเช็กสภาพอากาศ ระยะทาง และระดับความยากของเส้นทางก่อนเดินทาง",
        recommend:["จุดชมวิวและเส้นทางธรรมชาติ","ลานกางเต็นท์หรือที่พักวิวภูเขา","เตรียมรองเท้าให้เหมาะสมและมีแผนสำรอง"],
        yes:"ได้พักผ่อนอย่างเต็มที่ สร้างความทรงจำร่วมกันท่ามกลางธรรมชาติ", no:"อาจพลาดบรรยากาศสงบ แต่ยังเลือกกิจกรรมธรรมชาติใกล้บ้านได้",
        summary:"เหมาะกับกลุ่มที่ชอบธรรมชาติและต้องการพักผ่อน หากทุกคนพร้อมเรื่องการเดินทางและกิจกรรมกลางแจ้ง"},
      { title:"ทริปทะเล / ชายหาด", sub:"ชิลริมทะเลและอาหารอร่อย", icon:"≈", image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        pros:["วิวทะเลสวยและได้พักผ่อนริมชายหาด","มีร้านอาหารทะเลและคาเฟ่ให้เลือกมาก","กิจกรรมหลากหลาย เหมาะกับการเที่ยวเป็นกลุ่ม"],
        cons:["การจราจรอาจหนาแน่นในวันหยุด","ค่าอาหารและที่พักบางพื้นที่ค่อนข้างสูง"],
        analysis:"เหมาะกับกลุ่มที่อยากพักผ่อนแบบสบาย ๆ และมีตัวเลือกเรื่องอาหารกับกิจกรรม ควรจองที่พักล่วงหน้าในช่วงเทศกาล",
        recommend:["ร้านอาหารทะเลและคาเฟ่ริมชายหาด","จุดชมพระอาทิตย์ตก","ตรวจสอบการเดินทางและงบที่พัก"],
        yes:"ได้บรรยากาศวันหยุดสบาย ๆ กิจกรรมริมทะเลและมื้ออาหารที่น่าจดจำ", no:"อาจพลาดช่วงเวลาริมทะเล แต่ยังเลือกกิจกรรมพักผ่อนใกล้เมืองแทนได้",
        summary:"เหมาะกับกลุ่มที่ชอบบรรยากาศสบาย ๆ อาหารหลากหลาย และวางแผนการเดินทางได้"},
      { title:"ทริปต่างประเทศ", sub:"เปิดประสบการณ์และวัฒนธรรมใหม่", icon:"✈", image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
        pros:["ได้สัมผัสวัฒนธรรมและประสบการณ์ใหม่","มีสถานที่สำคัญและอาหารท้องถิ่นให้ค้นพบ","เป็นความทรงจำที่พิเศษสำหรับกลุ่มเพื่อน"],
        cons:["ใช้งบประมาณสูงกว่าตัวเลือกอื่นโดยทั่วไป","ต้องเตรียมเอกสาร การเดินทาง และการสื่อสาร"],
        analysis:"เหมาะกับกลุ่มที่พร้อมวางแผนล่วงหน้าและอยากผจญภัยร่วมกัน ควรตรวจสอบเอกสาร เงื่อนไขเข้าประเทศ และค่าใช้จ่ายทั้งหมด",
        recommend:["สถานที่สำคัญและแหล่งวัฒนธรรม","ร้านอาหารท้องถิ่นที่มีรีวิวดี","จัดแผนเที่ยว 3 วันและเผื่องบฉุกเฉิน"],
        yes:"ได้เปิดมุมมองใหม่และสร้างความทรงจำจากประสบการณ์ที่แตกต่าง", no:"มีเวลาวางแผน เก็บเงิน และเตรียมตัวให้พร้อมขึ้น",
        summary:"เหมาะกับกลุ่มที่มีงบและเวลาเพียงพอ พร้อมวางแผนเรื่องเอกสารและการเดินทาง"}
    ]
  },
  food: {
    heading:"ตัวอย่างที่ 2 · เลือกร้านอาหาร",
    options:[
      {title:"ก๋วยเตี๋ยวต้มยำร้านคุณ A",sub:"รสจัดจ้าน กินง่าย",icon:"♨",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
       pros:["รสชาติต้มยำเข้มข้น เหมาะกับคนชอบรสจัด","รวดเร็วและอิ่มสบายในมื้อกลางวัน","ราคาเข้าถึงง่ายโดยทั่วไป"],cons:["บางเมนูอาจมีรสเค็มเกินไป","อาจไม่เหมาะกับคนไม่กินเผ็ด"],
       analysis:"เป็นตัวเลือกที่ดีถ้าต้องการมื้อที่รวดเร็วและมีรสชาติจัดจ้าน ควรแจ้งระดับความเผ็ดและเลือกเมนูให้เหมาะกับตัวเอง",recommend:["สั่งเผ็ดน้อยหรือแยกพริกได้","เลือกเมนูตามความชอบ","เช็กราคาและเวลารอช่วงพักเที่ยง"],
       yes:"ได้มื้อกลางวันที่อิ่มเร็วและมีรสชาติถูกใจ",no:"ยังเลือกร้านใกล้เคียงที่มีรสชาติอ่อนกว่าได้",summary:"เหมาะถ้าชอบต้มยำและต้องการมื้อกลางวันที่รวดเร็ว ควรปรับรสตามความชอบ"},
      {title:"ข้าวกะเพรา",sub:"เมนูคุ้นเคย เลือกง่าย",icon:"✦",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
       pros:["หาซื้อง่ายและใช้เวลารอไม่นาน","ปรับระดับเผ็ดและเลือกเนื้อสัตว์ได้","เป็นมื้อที่อิ่มและคุ้นเคย"],cons:["รสชาติและปริมาณแตกต่างกันตามร้าน","บางร้านอาจใช้น้ำมันหรือเครื่องปรุงมาก"],
       analysis:"เหมาะกับวันที่ต้องการความสะดวกและคาดเดาราคาได้ง่าย เลือกปริมาณและเครื่องเคียงให้พอดีกับความหิว",recommend:["เลือกร้านใกล้ตัว","ขอระดับเผ็ดตามต้องการ","เช็กเมนูและราคาก่อนสั่ง"],
       yes:"ได้อาหารจานเดียวที่สะดวกและไม่ต้องเสียเวลาคิดมาก",no:"ยังลองอาหารใหม่ในวันที่มีเวลามากขึ้นได้",summary:"เหมาะกับมื้อที่ต้องการความสะดวก รวดเร็ว และปรับเมนูได้"},
      {title:"สลัด / อาหารเบา ๆ",sub:"สดชื่นและปรับส่วนผสมได้",icon:"❋",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
       pros:["มีผักและส่วนผสมหลากหลาย","ปรับน้ำสลัดและโปรตีนได้ตามชอบ","เลือกส่วนผสมได้ตามความต้องการ"],cons:["บางร้านมีราคาสูงกว่าอาหารจานเดียว","อาจไม่อิ่มหากปริมาณน้อย"],
       analysis:"เหมาะกับคนที่ต้องการมื้อสดชื่นและเลือกส่วนผสมได้ ลองเพิ่มโปรตีนหรือเครื่องเคียงตามความหิว",recommend:["เลือกส่วนผสมที่ชอบ","พิจารณาเพิ่มไข่หรือโปรตีน","เช็กขนาดจานและราคาก่อนสั่ง"],
       yes:"ได้มื้อที่สดชื่นและเลือกส่วนผสมให้ตรงกับความชอบ",no:"ยังเพิ่มผักเป็นเครื่องเคียงในมื้ออื่นได้",summary:"เหมาะถ้าต้องการมื้อเบา ๆ ที่ปรับส่วนผสมได้ โดยคำนึงถึงความอิ่มและงบ"}
    ]
  },
  life:{
    heading:"ตัวอย่างที่ 3 · เลือกเส้นทางชีวิต",
    options:[
      {title:"เรียนต่อ",sub:"เพิ่มความรู้และโอกาสในอนาคต",icon:"✧",image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
       pros:["ได้พัฒนาความรู้และทักษะอย่างเป็นระบบ","อาจเปิดโอกาสทางอาชีพเพิ่มเติม","ได้สร้างเครือข่ายและพบผู้คนใหม่"],cons:["ต้องลงทุนทั้งเวลาและค่าใช้จ่าย","ผลลัพธ์ขึ้นอยู่กับสาขาและการนำไปใช้"],
       analysis:"เหมาะถ้าหลักสูตรตรงกับเป้าหมายและคุณพร้อมลงทุนเวลา ควรเทียบเนื้อหา ค่าใช้จ่าย และเส้นทางอาชีพหลังเรียน",recommend:["เปรียบเทียบหลักสูตรและทุนการศึกษา","คุยกับผู้เรียนหรือคนทำงานในสาขา","วางแผนเวลาและค่าใช้จ่าย"],
       yes:"ได้โครงสร้างการเรียนรู้และโอกาสพัฒนาทักษะใหม่",no:"อาจเริ่มทำงานหรือเก็บประสบการณ์ก่อน แล้วค่อยกลับมาเรียนเมื่อพร้อม",summary:"เหมาะเมื่อการเรียนตอบโจทย์เป้าหมายระยะยาวและมีแผนรองรับค่าใช้จ่าย"},
      {title:"เริ่มทำงาน",sub:"เรียนรู้จากประสบการณ์จริง",icon:"↗",image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
       pros:["ได้ประสบการณ์และรายได้จากการทำงาน","พัฒนาทักษะที่ใช้จริงในสายอาชีพ","ค้นพบความสนใจจากสถานการณ์จริง"],cons:["อาจต้องเรียนรู้หลายอย่างด้วยตัวเอง","บางตำแหน่งต้องการวุฒิหรือทักษะเฉพาะ"],
       analysis:"เหมาะถ้ามีโอกาสงานที่ตรงกับความสนใจและพร้อมเรียนรู้ ควรตรวจสอบหน้าที่งาน โอกาสเติบโต และวัฒนธรรมองค์กร",recommend:["ตรวจสอบรายละเอียดงานและสวัสดิการ","เตรียมเรซูเม่และผลงาน","กำหนดเป้าหมายการเรียนรู้"],
       yes:"ได้เริ่มสะสมประสบการณ์และเรียนรู้จากการทำงานจริง",no:"มีเวลาพัฒนาทักษะและสมัครงานที่ตรงกับเป้าหมายขึ้น",summary:"เหมาะเมื่อมีงานที่ตอบโจทย์และพร้อมเรียนรู้จากประสบการณ์จริง"},
      {title:"พักเพื่อค้นหาตัวเอง",sub:"ทบทวนเป้าหมายและความสนใจ",icon:"☼",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
       pros:["มีเวลาทบทวนความสนใจและเป้าหมาย","สามารถทดลองกิจกรรมหรือทักษะใหม่","ช่วยวางแผนก้าวต่อไปอย่างรอบคอบ"],cons:["ต้องวางแผนค่าใช้จ่ายและเวลาให้ชัด","หากไม่มีเป้าหมายอาจรู้สึกไม่คืบหน้า"],
       analysis:"เหมาะเมื่อมีแผนที่ชัดเจนและกำหนดกรอบเวลา ลองตั้งเป้าหมายเล็ก ๆ ที่ทำได้จริงและประเมินผลเป็นระยะ",recommend:["กำหนดกรอบเวลาและงบประมาณ","ทดลองกิจกรรมหรือเรียนคอร์สสั้น ๆ","ทบทวนเป้าหมายทุกเดือน"],
       yes:"มีพื้นที่สำรวจความสนใจและกลับมาวางแผนอย่างมีทิศทาง",no:"ยังจัดเวลาทบทวนตัวเองควบคู่ไปกับเส้นทางอื่นได้",summary:"เหมาะเมื่อมีแผนและขอบเขตที่ชัดเจน เพื่อให้ช่วงเวลานี้มีเป้าหมาย"}
    ]
  }
};
let currentCategory = "travel";
let currentOption = 0;
const $ = (id) => document.getElementById(id);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[ch]));

function renderOptionButtons() {
  const group = decisionData[currentCategory];
  $("optionList").innerHTML = group.options.map((option,index) => `
    <button class="option-button ${index===currentOption?"active":""}" data-option="${index}">
      <span class="option-mini" style="background-image:url('${option.image}')"></span>
      <span class="option-label"><b>${escapeHTML(option.title)}</b><small>${escapeHTML(option.sub)}</small></span>
      <span class="option-chevron">›</span>
    </button>`).join("");
  $("optionList").querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => {
    currentOption = Number(button.dataset.option);
    renderOptionButtons();
    renderAnalysis();
  }));
}
function renderAnalysis() {
  const group = decisionData[currentCategory];
  const option = group.options[currentOption];
  $("analysisSubtitle").textContent = group.heading;
  $("detailTitle").textContent = option.title;
  $("detailSub").textContent = option.sub;
  $("detailThumb").textContent = option.icon;
  $("prosList").innerHTML = option.pros.map(item=>`<li>${escapeHTML(item)}</li>`).join("");
  $("consList").innerHTML = option.cons.map(item=>`<li>${escapeHTML(item)}</li>`).join("");
  $("analysisText").textContent = option.analysis;
  $("recommendList").innerHTML = option.recommend.map(item=>`<li>${escapeHTML(item)}</li>`).join("");
  $("ifYes").textContent = option.yes;
  $("ifNo").textContent = option.no;
  $("summaryText").textContent = option.summary;
}
function selectCategory(category, shouldScroll=false) {
  currentCategory = category;
  currentOption = 0;
  document.querySelectorAll("[data-example]").forEach(card => card.classList.toggle("selected", card.dataset.example === category));
  renderOptionButtons();
  renderAnalysis();
  if (shouldScroll) $("analysis").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll("[data-example]").forEach(card => card.addEventListener("click", () => selectCategory(card.dataset.example,true)));
$("menuToggle").addEventListener("click", () => $("sidebar").classList.toggle("open"));
try{if(localStorage.getItem("aw.theme")==="dark")document.body.classList.add("dark")}catch{}
$("themeToggle").addEventListener("click",()=>{const d=document.body.classList.toggle("dark");try{localStorage.setItem("aw.theme",d?"dark":"light")}catch{}});
function showToast(message) {
  const toast=$("toast");toast.textContent=message;toast.classList.add("show");
  window.clearTimeout(showToast.timer);showToast.timer=window.setTimeout(()=>toast.classList.remove("show"),2800);
}
$("loginBtn").addEventListener("click",()=>showToast("ระบบเข้าสู่ระบบเป็นส่วนตัวอย่าง ยังไม่ได้เชื่อมต่อบัญชีผู้ใช้"));
const CRITERIA=[["budget","งบประมาณ"],["comfort","ความสะดวกสบาย"],["experience","ประสบการณ์ / ประโยชน์"],["time","เวลา"]];
const HKEY="anotherway.history";
const store={get(){try{return JSON.parse(localStorage.getItem(HKEY))||[]}catch{return []}},set(v){try{localStorage.setItem(HKEY,JSON.stringify(v))}catch{}}};
let draft=null;
$("decisionForm").addEventListener("submit",e=>{
  e.preventDefault();
  const topic=$("topic").value.trim();
  const choices=[...new Set($("choices").value.split(/[,;\n，]/).map(v=>v.trim()).filter(Boolean))].slice(0,6);
  const result=$("customResult");
  if(choices.length<2){result.innerHTML="<h3>เพิ่มอีกหนึ่งตัวเลือก</h3><p>กรุณากรอกอย่างน้อย 2 ตัวเลือกที่ไม่ซ้ำกัน เพื่อให้เปรียบเทียบได้</p>";result.classList.add("show");return}
  const pKey=$("priority").value;
  draft={topic,pLabel:$("priority").selectedOptions[0].textContent,budget:$("budget").value.trim(),choices,
    weights:CRITERIA.map(([k])=>pKey===k?3:1),scores:choices.map(()=>CRITERIA.map(()=>3))};
  renderMatrix();result.classList.add("show");result.scrollIntoView({behavior:"smooth",block:"start"});
});
function renderMatrix(){
  const d=draft,r=$("customResult");
  r.innerHTML=`<h3>แนวทางเปรียบเทียบ: ${escapeHTML(d.topic)}</h3>
  <p><b>เกณฑ์หลัก:</b> ${escapeHTML(d.pLabel)}${d.budget?` · <b>งบประมาณ:</b> ${escapeHTML(d.budget)}`:""}<br>เลื่อนให้คะแนน 1–5 ในแต่ละเกณฑ์ (5 = ตรงใจที่สุด) เกณฑ์ที่มี ★ มีน้ำหนักมากกว่า</p>
  <div class="score-grid">${d.choices.map((c,i)=>`<article class="score-card"><div class="score-top"><b>${escapeHTML(c)}</b><span class="score-pct" data-pct="${i}"></span></div>
    ${CRITERIA.map(([k,l],j)=>`<label class="score-row"><span>${l}${d.weights[j]>1?" ★":""}</span><input type="range" min="1" max="5" value="3" data-i="${i}" data-j="${j}" aria-label="${escapeHTML(c)} · ${l}"><output>3</output></label>`).join("")}
    <div class="bar"><i data-bar="${i}"></i></div></article>`).join("")}</div>
  <div class="verdict" id="verdict" aria-live="polite"></div>
  <div class="result-actions"><button class="btn btn-primary" type="button" id="saveBtn">บันทึกผล</button><button class="btn btn-ghost" type="button" id="resetBtn">ล้างผล</button></div>
  <p class="result-note">หมายเหตุ: คะแนนคำนวณจากที่คุณให้เท่านั้น ใช้เป็นแนวทางประกอบ ไม่ใช่คำตอบสุดท้าย ลองตรวจข้อเท็จจริงเรื่องราคา เวลา และข้อจำกัดอีกครั้งก่อนตัดสินใจ</p>`;
  r.querySelectorAll("input[type=range]").forEach(inp=>inp.addEventListener("input",()=>{d.scores[inp.dataset.i][inp.dataset.j]=+inp.value;inp.nextElementSibling.textContent=inp.value;updateScores()}));
  $("saveBtn").onclick=saveDraft;$("resetBtn").onclick=()=>{draft=null;r.classList.remove("show");r.innerHTML=""};
  updateScores();
}
function pcts(){const d=draft,tw=d.weights.reduce((a,b)=>a+b,0);return d.scores.map(s=>Math.round(s.reduce((a,v,j)=>a+v*d.weights[j],0)/(5*tw)*100))}
function updateScores(){
  const d=draft,p=pcts();
  p.forEach((v,i)=>{document.querySelector(`[data-pct="${i}"]`).textContent=v+"%";document.querySelector(`[data-bar="${i}"]`).style.width=v+"%"});
  const o=p.map((v,i)=>[v,i]).sort((a,b)=>b[0]-a[0]);
  $("verdict").innerHTML=o[0][0]-o[1][0]<5
    ?`<b>คะแนนใกล้เคียงกัน</b><p>ลองทบทวนว่าเกณฑ์ใดสำคัญที่สุด หรือหาข้อมูลเพิ่มเติมระหว่าง “${escapeHTML(d.choices[o[0][1]])}” และ “${escapeHTML(d.choices[o[1][1]])}”</p>`
    :`<b>ตอนนี้ “${escapeHTML(d.choices[o[0][1]])}” นำอยู่ ${o[0][0]}%</b><p>ลองถามตัวเองว่าผลนี้ตรงกับความรู้สึกหรือไม่ หากไม่ตรง อาจมีเกณฑ์ที่ยังไม่ได้นับรวม</p>`;
}
function saveDraft(){
  const d=draft,p=pcts(),rank=d.choices.map((c,i)=>({name:c,pct:p[i]})).sort((a,b)=>b.pct-a.pct);
  store.set([{id:Date.now(),ts:Date.now(),topic:d.topic,pLabel:d.pLabel,budget:d.budget,rank},...store.get()].slice(0,30));
  updateBadge();showToast("บันทึกแล้ว ดูได้ที่หน้า “ประวัติ”");
}
function renderHistory(){
  const list=store.get();$("clearHistory").hidden=!list.length;
  $("historyList").innerHTML=list.length?list.map(h=>`<article class="history-item"><div class="history-top"><div><b>${escapeHTML(h.topic)}</b><small>${new Date(h.ts).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"})} · ${escapeHTML(h.pLabel)}${h.budget?" · "+escapeHTML(h.budget):""}</small></div><button class="icon-btn" data-del="${h.id}" aria-label="ลบรายการนี้">✕</button></div>${h.rank.map(r=>`<div class="rank-row"><span>${escapeHTML(r.name)}</span><div class="bar"><i style="width:${r.pct}%"></i></div><b>${r.pct}%</b></div>`).join("")}</article>`).join("")
    :`<div class="empty"><span>◷</span><b>ยังไม่มีประวัติ</b><p>เมื่อวิเคราะห์เสร็จ กด “บันทึกผล” เพื่อเก็บไว้ดูภายหลัง</p><a class="btn btn-primary" href="#analyze">เริ่มวิเคราะห์</a></div>`;
}
$("historyList").addEventListener("click",e=>{const b=e.target.closest("[data-del]");if(!b)return;store.set(store.get().filter(h=>String(h.id)!==b.dataset.del));renderHistory();updateBadge()});
$("clearHistory").addEventListener("click",()=>{if(confirm("ลบประวัติทั้งหมด?")){store.set([]);renderHistory();updateBadge()}});
function updateBadge(){const n=store.get().length;$("histBadge").textContent=n;$("histBadge").hidden=!n}
const routes={home:"หน้าหลัก",examples:"ตัวอย่างการใช้งาน",analyze:"วิเคราะห์การตัดสินใจ",guide:"คู่มือ & เคล็ดลับ",history:"ประวัติการวิเคราะห์",about:"เกี่ยวกับเรา"};
function route(){
  const r=location.hash.slice(1),k=routes[r]?r:"home";
  document.querySelectorAll(".page").forEach(p=>p.hidden=p.dataset.page!==k);
  document.querySelectorAll("[data-route]").forEach(a=>{const on=a.dataset.route===k;a.classList.toggle("active",on);on?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")});
  $("crumb").textContent=routes[k];document.title=routes[k]+" | Another Way";
  $("sidebar").classList.remove("open");window.scrollTo(0,0);
  if(k==="history")renderHistory();
}
window.addEventListener("hashchange",route);
$("tabMenu").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
$("backdrop").addEventListener("click",()=>$("sidebar").classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("sidebar").classList.remove("open")});
updateBadge();route();
renderOptionButtons();
renderAnalysis();
