const dom = {
  scenarioSelect: document.getElementById('scenarioSelect'),
  intentBox: document.getElementById('intentBox'),
  appTitle: document.getElementById('appTitle'),
  appSubtitle: document.getElementById('appSubtitle'),
  pillRow: document.getElementById('pillRow'),
  storyboardList: document.getElementById('storyboardList'),
  narrationText: document.getElementById('narrationText'),
  stepCounter: document.getElementById('stepCounter'),
  stepButtons: document.getElementById('stepButtons'),
  metrics: document.getElementById('metrics'),
  assemblyTimeline: document.getElementById('assemblyTimeline'),
  output1: document.getElementById('output1'),
  output2: document.getElementById('output2'),
  output3: document.getElementById('output3'),
  output4: document.getElementById('output4'),
  autoplayBtn: document.getElementById('autoplayBtn'),
  composeBtn: document.getElementById('composeBtn'),
  resetBtn: document.getElementById('resetBtn'),
  narrationBtn: document.getElementById('narrationBtn')
};

const platformEls = {
  unistack: document.querySelector('[data-platform="unistack"]'),
  uniweave: document.querySelector('[data-platform="uniweave"]'),
  uniscale: document.querySelector('[data-platform="uniscale"]'),
  uniprotect: document.querySelector('[data-platform="uniprotect"]')
};

const flowMap = {
  unistack: document.getElementById('flow-unistack'),
  uniweave: document.getElementById('flow-uniweave'),
  uniscale: document.getElementById('flow-uniscale'),
  uniprotect: document.getElementById('flow-uniprotect')
};

const outputPaths = ['out-1', 'out-2', 'out-3', 'out-4'].map(id => document.getElementById(id));
const composer = document.getElementById('composer');

let scenario = window.APP_SCENARIOS[0];
let currentStep = 0;
let autoplayTimer = null;
let narrationEnabled = true;

function init(){
  window.APP_SCENARIOS.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.name;
    if(i === 0) opt.selected = true;
    dom.scenarioSelect.appendChild(opt);
  });

  dom.scenarioSelect.addEventListener('change', () => {
    const next = window.APP_SCENARIOS.find(s => s.id === dom.scenarioSelect.value);
    if(next){
      scenario = next;
      renderScenario();
      resetDemo();
    }
  });

  dom.autoplayBtn.addEventListener('click', startAutoplay);
  dom.composeBtn.addEventListener('click', () => nextStep(currentStep + 1));
  dom.resetBtn.addEventListener('click', resetDemo);
  dom.narrationBtn.addEventListener('click', toggleNarration);

  renderScenario();
  resetDemo();
}

function renderScenario(){
  dom.intentBox.textContent = scenario.intent;
  dom.appTitle.textContent = scenario.appTitle;
  dom.appSubtitle.textContent = scenario.appSubtitle;

  dom.pillRow.innerHTML = '';
  scenario.pills.forEach(p => {
    const span = document.createElement('span');
    span.className = `pill ${p.tone}`;
    span.textContent = p.label;
    dom.pillRow.appendChild(span);
  });

  dom.storyboardList.innerHTML = '';
  scenario.storyboard.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dom.storyboardList.appendChild(li);
  });

  renderPlatformChips();
  renderOutputs();
  renderMetrics();
  renderTimeline();
  renderStepButtons();
}

function renderPlatformChips(){
  Object.entries(scenario.platforms).forEach(([key, chips]) => {
    const wrap = platformEls[key].querySelector('.chips');
    wrap.innerHTML = '';
    chips.forEach(chip => {
      const el = document.createElement('div');
      el.className = 'chip';
      el.textContent = chip;
      wrap.appendChild(el);
    });
  });
}

function renderOutputs(){
  scenario.outputs.forEach((o, idx) => {
    const el = dom[`output${idx+1}`];
    el.className = `output-card ${o.tone}`;
    el.innerHTML = `<div><h3>${o.title}</h3><p>${o.desc}</p></div>`;
  });
}

function renderMetrics(){
  dom.metrics.innerHTML = '';
  scenario.metrics.forEach(m => {
    const div = document.createElement('div');
    div.className = 'metric';
    div.innerHTML = `<div class="value">${m.value}</div><div class="label">${m.label}</div>`;
    dom.metrics.appendChild(div);
  });
}

function renderTimeline(){
  dom.assemblyTimeline.innerHTML = '';
  for(let i=0;i<5;i++){
    const step = document.createElement('div');
    step.className = 'timeline-step';
    dom.assemblyTimeline.appendChild(step);
  }
}

function renderStepButtons(){
  const labels = [
    '1. Interpret intent',
    '2. UniWeave',
    '3. UniScale',
    '4. UniStack + Protect',
    '5. Go live'
  ];
  dom.stepButtons.innerHTML = '';
  labels.forEach((label, idx) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.addEventListener('click', () => nextStep(idx + 1, true));
    dom.stepButtons.appendChild(btn);
  });
}

function resetDemo(){
  clearAutoplay();
  currentStep = 0;
  dom.narrationText.textContent = scenario.narration[0];
  dom.stepCounter.textContent = 'Step 1 / 6';
  Object.values(flowMap).forEach(p => p.classList.remove('live'));
  outputPaths.forEach(p => p.classList.remove('live'));
  Object.values(platformEls).forEach(card => {
    card.classList.remove('flash');
    card.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  });
  document.querySelectorAll('.timeline-step').forEach(t => t.classList.remove('on'));
  Array.from(dom.stepButtons.children).forEach(btn => btn.classList.remove('active-step'));
  composer.classList.remove('flash');
  stopSpeech();
}

function nextStep(step, manual=false){
  clearAutoplay();
  if(step < 1) step = 1;
  if(step > 5) step = 5;
  currentStep = step;

  if(step >= 1){
    dom.narrationText.textContent = scenario.narration[0];
    composer.classList.add('flash');
    activateTimeline(1);
  }
  if(step >= 2){
    activatePlatform('uniweave');
    dom.narrationText.textContent = scenario.narration[1];
    activateTimeline(2);
  }
  if(step >= 3){
    activatePlatform('uniscale');
    dom.narrationText.textContent = scenario.narration[2];
    activateTimeline(3);
  }
  if(step >= 4){
    activatePlatform('unistack');
    activatePlatform('uniprotect');
    dom.narrationText.textContent = scenario.narration[3] + " " + scenario.narration[4];
    activateTimeline(4);
  }
  if(step >= 5){
    outputPaths.forEach(p => p.classList.add('live'));
    Array.from({length:4}, (_, i) => dom[`output${i+1}`].classList.add('flash'));
    dom.narrationText.textContent = scenario.narration[5];
    activateTimeline(5);
  }

  dom.stepCounter.textContent = `Step ${step + 1} / 6`;
  Array.from(dom.stepButtons.children).forEach((btn, idx) => {
    btn.classList.toggle('active-step', idx + 1 === step);
  });

  if(narrationEnabled){
    speak(dom.narrationText.textContent, manual);
  }
}

function activatePlatform(key){
  const card = platformEls[key];
  const path = flowMap[key];
  if(card){ card.classList.add('flash'); }
  if(path){ path.classList.add('live'); }
  if(card){
    card.querySelectorAll('.chip').forEach((chip, idx) => {
      setTimeout(() => chip.classList.add('on'), idx * 120);
    });
  }
}

function activateTimeline(level){
  document.querySelectorAll('.timeline-step').forEach((t, idx) => {
    t.classList.toggle('on', idx < level);
  });
}

function startAutoplay(){
  resetDemo();
  const steps = [1,2,3,4,5];
  let i = 0;
  const run = () => {
    if(i >= steps.length) return;
    nextStep(steps[i]);
    i += 1;
    autoplayTimer = setTimeout(run, i === 4 ? 4500 : 3400);
  };
  run();
}

function clearAutoplay(){
  if(autoplayTimer){
    clearTimeout(autoplayTimer);
    autoplayTimer = null;
  }
}

function toggleNarration(){
  narrationEnabled = !narrationEnabled;
  dom.narrationBtn.textContent = `Narration: ${narrationEnabled ? 'On' : 'Off'}`;
  if(!narrationEnabled) stopSpeech();
}

function speak(text, manual=false){
  if(!('speechSynthesis' in window)) return;
  stopSpeech();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = manual ? 1.03 : 1;
  u.pitch = 1;
  u.lang = 'en-US';
  window.speechSynthesis.speak(u);
}

function stopSpeech(){
  if('speechSynthesis' in window){
    window.speechSynthesis.cancel();
  }
}

init();