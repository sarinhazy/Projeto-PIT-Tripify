/* ===== Dados de 50 viagens de exemplo =====
   Cada destino: id, title, subtitle, price, seats, img, category, duration (dias), distance (nacional/internacional)
*/
const destinations = [
  // 1-6 (exemplo)
  {id:'maldivas', title:'Maldivas', subtitle:'Paraíso tropical com águas cristalinas', price:8500, seats:12, img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:7, distance:'internacional'},
  {id:'paris', title:'Paris, França', subtitle:'Cidade luz e capital do romance', price:6200, seats:8, img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:5, distance:'internacional'},
  {id:'tokyo', title:'Tokyo, Japão', subtitle:'Modernidade e tradição em harmonia', price:7800, seats:15, img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:8, distance:'internacional'},
  {id:'santorini', title:'Santorini, Grécia', subtitle:'Por do sol mais bonito do mundo', price:5900, seats:10, img:'https://images.unsplash.com/photo-1505765056599-2f4f6c2b19f6?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:6, distance:'internacional'},
  {id:'dubai', title:'Dubai, Emirados Árabes', subtitle:'Luxo e modernidade no deserto', price:9200, seats:6, img:'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=60', category:'luxo', duration:6, distance:'internacional'},
  {id:'bali', title:'Bali, Indonésia', subtitle:'Ilha dos deuses e praias paradisíacas', price:7100, seats:20, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'natureza', duration:9, distance:'internacional'},

  // 7-18 aventura
  {id:'chapada', title:'Chapada Diamantina', subtitle:'Cachoeiras, trilhas e grutas', price:1200, seats:16, img:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:4, distance:'nacional'},
  {id:'ilhabela', title:'Ilhabela, SP', subtitle:'Mares, trilhas e surf', price:700, seats:18, img:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:3, distance:'nacional'},
  {id:'serradacana', title:'Serra da Canastra', subtitle:'Roteiros de montanha e observação', price:900, seats:12, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:5, distance:'nacional'},
  {id:'patagonia', title:'Patagônia, Argentina', subtitle:'Paisagens geladas e trekking', price:4300, seats:10, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:10, distance:'internacional'},
  {id:'everest', title:'Base do Everest', subtitle:'Aventura de alta montanha', price:15000, seats:4, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:14, distance:'internacional'},
  {id:'amazonia', title:'Expedição Amazônia', subtitle:'Selva, fauna e cultura local', price:2200, seats:12, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:6, distance:'nacional'},

  // 19-30 cultural/gastronômico
  {id:'ouro-preto', title:'Ouro Preto', subtitle:'Barroco e história brasileira', price:550, seats:20, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:3, distance:'nacional'},
  {id:'porto', title:'Porto, Portugal', subtitle:'Vinhos e ruelas históricas', price:3800, seats:12, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:5, distance:'internacional'},
  {id:'toscana', title:'Toscana, Itália', subtitle:'Vinícolas e culinária', price:7200, seats:10, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:7, distance:'internacional'},
  {id:'salvador', title:'Salvador, BA', subtitle:'Cultura afro-brasileira e festas', price:900, seats:18, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:4, distance:'nacional'},
  {id:'lima', title:'Lima, Peru', subtitle:'Gastronomia e centros históricos', price:3300, seats:14, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:6, distance:'internacional'},
  {id:'bh', title:'Belo Horizonte (rota dos restaurantes)', subtitle:'Melhor culinária mineira', price:450, seats:20, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:2, distance:'nacional'},

  // 31-36 natureza/relaxamento
  {id:'fervedouros', title:'Jalapão & Fervedouros', subtitle:'Águas cristalinas e dunas', price:1700, seats:12, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', category:'natureza', duration:5, distance:'nacional'},
  {id:'ilhagrande', title:'Ilha Grande, RJ', subtitle:'Praias e trilhas preservadas', price:600, seats:18, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', category:'natureza', duration:3, distance:'nacional'},
  {id:'seychelles', title:'Seychelles', subtitle:'Praias exclusivas e resorts', price:12800, seats:6, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:9, distance:'internacional'},
  {id:'ilhas-caraibas', title:'Ilhas do Caribe', subtitle:'Resorts e águas turquesa', price:10500, seats:8, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:8, distance:'internacional'},
  {id:'serra-gaucha', title:'Serra Gaúcha', subtitle:'Vinhos, natureza e gastronomia', price:1200, seats:16, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', category:'natureza', duration:4, distance:'nacional'},

  // 37-50 misc: luxo, urbano, festival, bem-estar...
  {id:'ny', title:'Nova York, EUA', subtitle:'Centro urbano e entretenimento', price:7200, seats:12, img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60', category:'urbano', duration:6, distance:'internacional'},
  {id:'london', title:'Londres, Reino Unido', subtitle:'Museus e teatros', price:6800, seats:10, img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:6, distance:'internacional'},
  {id:'barcelona', title:'Barcelona, Espanha', subtitle:'Arquitetura e praias', price:4200, seats:14, img:'https://images.unsplash.com/photo-1505765056599-2f4f6c2b19f6?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:5, distance:'internacional'},
  {id:'rio-carnaval', title:'Carnaval no Rio', subtitle:'Folia, sambas e blocos', price:1400, seats:30, img:'https://images.unsplash.com/photo-1509697744315-5c1b9f1b0e8b?auto=format&fit=crop&w=1200&q=60', category:'festival', duration:5, distance:'nacional'},
  {id:'alentejo', title:'Alentejo, Portugal', subtitle:'Rural, vinhos e descanso', price:3600, seats:12, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:6, distance:'internacional'},
  {id:'safari', title:'Safari na África do Sul', subtitle:'Vida selvagem e lodges', price:9300, seats:8, img:'https://images.unsplash.com/photo-1508669232496-6fdb0b6eb7e1?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:7, distance:'internacional'},
  {id:'gastronomia-br', title:'Roteiro Gastronômico Brasil', subtitle:'Sabores regionais em 10 dias', price:2400, seats:20, img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:10, distance:'nacional'},
  {id:'wellness', title:'Retiro Wellness', subtitle:'Yoga, meditação e detox', price:1600, seats:14, img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60', category:'bem-estar', duration:6, distance:'nacional'},
  {id:'island-hopping', title:'Island Hopping Grécia', subtitle:'Várias ilhas e festas', price:6400, seats:12, img:'https://images.unsplash.com/photo-1505765056599-2f4f6c2b19f6?auto=format&fit=crop&w=1200&q=60', category:'relaxamento', duration:7, distance:'internacional'},
  {id:'rotadeceramica', title:'Rota da Cerveja Alemanha', subtitle:'Cervejarias tradicionais', price:5600, seats:14, img:'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:6, distance:'internacional'},
  {id:'mendoza', title:'Mendoza, Argentina', subtitle:'Vinícolas e Andean views', price:3500, seats:12, img:'https://images.unsplash.com/photo-1505691723518-36a5f6f4f0c1?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:5, distance:'internacional'},
  {id:'japan-food', title:'Rota Gastronômica no Japão', subtitle:'Sushi, ramen e mercados', price:9800, seats:10, img:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=60', category:'gastronomica', duration:9, distance:'internacional'},
  {id:'azores', title:'Açores, Portugal', subtitle:'Ilhas verdes e trilhas', price:4100, seats:12, img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60', category:'natureza', duration:7, distance:'internacional'},
  {id:'serengeti', title:'Serengeti, Tanzânia', subtitle:'Grande migração e safari', price:11200, seats:8, img:'https://images.unsplash.com/photo-1508669232496-6fdb0b6eb7e1?auto=format&fit=crop&w=1200&q=60', category:'aventura', duration:10, distance:'internacional'},
  {id:'caminho-santiago', title:'Caminho de Santiago', subtitle:'Peregrinação e cultura', price:2700, seats:16, img:'https://images.unsplash.com/photo-1505765056599-2f4f6c2b19f6?auto=format&fit=crop&w=1200&q=60', category:'cultural', duration:12, distance:'internacional'}
];

// ========== Estado ==========
const state = {
  selected: null,
  date: null,
  time: '18:00',
  passengers: 1,
  option: 'default',
  filters: {
    price: 'all',
    duration: 'all',
    distance: 'all'
  }
};

// ========== DOM ==========
const destGrid = document.getElementById('destGrid');
const passengerCountEl = document.getElementById('passengerCount');
const decBtn = document.getElementById('decBtn');
const incBtn = document.getElementById('incBtn');
const availableText = document.getElementById('availableText');
const dateInput = document.getElementById('dateInput');
const timeSelect = document.getElementById('timeSelect');
const optionSelect = document.getElementById('optionSelect');

const sumDestino = document.getElementById('sumDestino');
const sumCategory = document.getElementById('sumCategory');
const sumDuration = document.getElementById('sumDuration');
const sumData = document.getElementById('sumData');
const sumHora = document.getElementById('sumHora');
const sumPax = document.getElementById('sumPax');
const sumPrice = document.getElementById('sumPrice');
const sumSub = document.getElementById('sumSub');
const sumTotal = document.getElementById('sumTotal');
const summaryTitle = document.getElementById('summaryTitle');
const summarySubtitle = document.getElementById('summarySubtitle');
const summaryImage = document.getElementById('summaryImage');

const payBtn = document.getElementById('payBtn');
const addCalendarBtn = document.getElementById('addCalendar');
const cancelBtn = document.getElementById('cancelBtn');

const divisionText = document.getElementById('divisionText');
const copySharesBtn = document.getElementById('copyShares');
const exportCSVBtn = document.getElementById('exportCSV');

const priceFilters = document.getElementById('priceFilters');
const durationFilters = document.getElementById('durationFilters');
const distanceFilters = document.getElementById('distanceFilters');
const clearFiltersBtn = document.getElementById('clearFilters');
const countNumber = document.getElementById('countNumber');

// ========== Renderização ==========
function renderDestinations(list = destinations){
  destGrid.innerHTML = '';
  list.forEach(dest => {
    const el = document.createElement('div');
    el.className = 'dest';
    el.dataset.id = dest.id;
    el.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.12)), url('${dest.img}')`;

    el.innerHTML = `
      <div class="info">
        <h3>${dest.title}</h3>
        <p>${dest.subtitle}</p>
        <div class="price">R$ ${formatMoney(dest.price)} <span style="font-weight:500;font-size:12px;opacity:.9"> · ${dest.duration} dias</span></div>
      </div>
      <div class="badge">${dest.seats} vagas</div>
      <div class="tick" style="display:none">✔</div>
    `;
    el.addEventListener('click', ()=> selectDestination(dest.id));
    destGrid.appendChild(el);
  });
  countNumber.textContent = list.length;
}

// ========== Filtragem ==========
function applyFilters(){
  const f = state.filters;
  let list = destinations.slice();

  // price
  if(f.price === '<=5000') list = list.filter(d=> d.price <= 5000);
  if(f.price === '<=10000') list = list.filter(d=> d.price <= 10000);
  if(f.price === '>10000') list = list.filter(d=> d.price > 10000);

  // duration: short (3-5), medium (6-10), long (11+)
  if(f.duration === 'short') list = list.filter(d=> d.duration >=3 && d.duration <=5);
  if(f.duration === 'medium') list = list.filter(d=> d.duration >=6 && d.duration <=10);
  if(f.duration === 'long') list = list.filter(d=> d.duration >=11);

  // distance
  if(f.distance === 'nacional') list = list.filter(d=> d.distance === 'nacional');
  if(f.distance === 'internacional') list = list.filter(d=> d.distance === 'internacional');

  renderDestinations(list);
  updateUI(); // reaplica seleção highlight/summary se aplicável
}

// listeners para botões de filtros
function setupFilterButtons(){
  [priceFilters, durationFilters, distanceFilters].forEach(group=>{
    group.addEventListener('click', (e)=> {
      const btn = e.target.closest('button');
      if(!btn) return;
      // desmarcar siblings e marcar este
      Array.from(group.querySelectorAll('button')).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');

      // update state
      if(group.id === 'priceFilters') state.filters.price = btn.dataset.val;
      if(group.id === 'durationFilters') state.filters.duration = btn.dataset.val;
      if(group.id === 'distanceFilters') state.filters.distance = btn.dataset.val;

      applyFilters();
    });
  });

  clearFiltersBtn.addEventListener('click', ()=>{
    // reset state filters
    state.filters = {price:'all', duration:'all', distance:'all'};
    // reset UI buttons
    [priceFilters, durationFilters, distanceFilters].forEach(group=>{
      Array.from(group.querySelectorAll('button')).forEach(b=> b.classList.remove('active'));
      group.querySelector('button[data-val="all"]').classList.add('active');
    });
    applyFilters();
  });
}

// ========== Seleção de destino ==========
function selectDestination(id){
  const dest = destinations.find(d=> d.id === id);
  if(!dest) return;
  if(state.passengers > dest.seats) state.passengers = dest.seats;
  state.selected = dest;
  updateUI();
}

// ========== Atualização UI ==========
function updateUI(){
  // highlight selected card
  document.querySelectorAll('.dest').forEach(card=>{
    if(state.selected && card.dataset.id === state.selected.id){
      card.classList.add('selected');
      card.querySelector('.tick').style.display = 'flex';
    } else {
      card.classList.remove('selected');
      const t = card.querySelector('.tick');
      if(t) t.style.display = 'none';
    }
  });

  // available
  if(state.selected) availableText.textContent = `Vagas disponíveis: ${state.selected.seats}`;
  else availableText.textContent = 'Vagas disponíveis: —';

  // summary
  sumDestino.textContent = state.selected ? state.selected.title : '—';
  sumCategory.textContent = state.selected ? capitalize(state.selected.category) : '—';
  sumDuration.textContent = state.selected ? `${state.selected.duration} dias` : '—';
  summaryTitle.textContent = state.selected ? state.selected.title : 'Destino: —';
  summarySubtitle.textContent = state.selected ? state.selected.subtitle : '—';
  summaryImage.style.backgroundImage = state.selected ? `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.12)), url('${state.selected.img}')` : '';

  state.date = dateInput.value || null;
  state.time = timeSelect.value;
  state.option = optionSelect.value;

  sumData.textContent = state.date ? formatDateDisplay(state.date) : '—';
  sumHora.textContent = state.time || '—';
  sumPax.textContent = state.passengers;
  passengerCountEl.textContent = state.passengers;

  // price calculation
  const base = state.selected ? state.selected.price : 0;
  const optionExtra = state.option === 'plus' ? 200 : (state.option === 'vip' ? 600 : 0);
  const pricePerPerson = base ? (base + optionExtra) : 0;
  const subtotal = pricePerPerson * state.passengers;
  const total = subtotal;

  sumPrice.textContent = pricePerPerson ? `R$ ${formatMoney(pricePerPerson, true)}` : '—';
  sumSub.textContent = subtotal ? `R$ ${formatMoney(subtotal, true)}` : '—';
  sumTotal.textContent = `R$ ${formatMoney(total, true)}`;

  const hasSelection = !!state.selected;
  payBtn.disabled = !hasSelection;
  addCalendarBtn.disabled = !hasSelection;
  cancelBtn.disabled = !hasSelection;

  updateDivisionArea(pricePerPerson, subtotal);
}

// ========== Divisão automática (RF03) ==========
function updateDivisionArea(pricePerPerson, subtotal){
  if(!state.selected){
    divisionText.innerHTML = 'Selecione um destino para ver a divisão de custos por passageiro.';
    return;
  }
  const pax = state.passengers || 1;
  const perShare = roundToCent(subtotal / pax);
  const shares = Array.from({length:pax}, ()=> perShare);
  const sumShares = shares.reduce((a,b)=>a+b,0);
  const diff = roundToCent(subtotal - sumShares);
  if(diff !== 0) shares[shares.length-1] = roundToCent(shares[shares.length-1] + diff);

  let html = `<div><strong>Preço por pessoa:</strong> R$ ${formatMoney(pricePerPerson, true)} · <strong>Subtotal:</strong> R$ ${formatMoney(subtotal, true)}</div>`;
  html += `<div style="margin-top:8px"><strong>Divisão igualitária (por ${pax} passageiros):</strong></div>`;
  html += '<ol style="margin:8px 0 0 18px;padding:0">';
  shares.forEach((s,i)=>{
    html += `<li>Passageiro ${i+1}: R$ ${formatMoney(s, true)}</li>`;
  });
  html += '</ol>';
  html += `<div style="margin-top:10px;font-size:13px;color:var(--muted)">Observação: divisão calculada automaticamente e ajustada para centavos quando necessário.</div>`;
  divisionText.innerHTML = html;
}

// ========== Eventos de controle de passageiros ==========
decBtn.addEventListener('click', ()=>{
  if(state.passengers > 1) {
    state.passengers--;
    updateUI();
  }
});
incBtn.addEventListener('click', ()=>{
  if(state.selected){
    if(state.passengers < state.selected.seats){
      state.passengers++;
      updateUI();
    } else alert('Você atingiu o número máximo de vagas disponíveis para este destino.');
  } else {
    state.passengers++;
    updateUI();
  }
});
dateInput.addEventListener('change', ()=> updateUI());
timeSelect.addEventListener('change', ()=> { state.time = timeSelect.value; updateUI(); });
optionSelect.addEventListener('change', ()=> { state.option = optionSelect.value; updateUI(); });

// ========== Calendar ICS (RF06) ==========
addCalendarBtn.addEventListener('click', ()=>{
  if(!state.selected) return alert('Selecione um destino primeiro.');
  if(!state.date){
    if(!confirm('Nenhuma data selecionada. Deseja usar a data atual?')) return;
  }
  const title = `Viagem para ${state.selected.title}`;
  const description = `${state.selected.subtitle} - Passageiros: ${state.passengers}. Pacote: ${state.option}`;
  const uid = `reserva-${Date.now()}@reserva.local`;
  const dtstart = buildIcsDateTime(state.date, state.time);
  const dtend = buildIcsDateTime(state.date, addMinutesToTime(state.time, 240));
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ReservaSuaViagem//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcstimestamp(new Date())}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(state.selected.title)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `reserva-${state.selected.id}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// ========== Cancelamento (RF05) ==========
cancelBtn.addEventListener('click', ()=>{
  if(!state.selected) return;
  const ok = confirm('Deseja realmente cancelar a reserva? Essa ação irá limpar os detalhes da reserva.');
  if(!ok) return;
  state.selected = null;
  state.date = null;
  state.time = '18:00';
  state.passengers = 1;
  state.option = 'default';
  dateInput.value = '';
  timeSelect.value = '18:00';
  optionSelect.value = 'default';
  updateUI();
  alert('Reserva cancelada com sucesso.');
});

// ========== Copiar / Exportar divisão ==========
copySharesBtn.addEventListener('click', ()=>{
  if(!state.selected) return;
  const text = divisionText.innerText;
  navigator.clipboard.writeText(text).then(()=> alert('Divisão copiada para a área de transferência.'));
});

exportCSVBtn.addEventListener('click', ()=>{
  if(!state.selected) return;
  const pax = state.passengers;
  const base = state.selected.price + (state.option === 'plus' ? 200 : (state.option === 'vip' ? 600 : 0));
  const subtotal = base * pax;
  const per = roundToCent(subtotal / pax);
  const shares = Array.from({length:pax}, (_,i) => per);
  const sumShares = shares.reduce((a,b)=>a+b,0);
  const diff = roundToCent(subtotal - sumShares);
  if(diff !== 0) shares[shares.length-1] = roundToCent(shares[shares.length-1] + diff);

  let csv = 'Passageiro,Valor\r\n';
  shares.forEach((s,i)=> csv += `Passageiro ${i+1},${s.toFixed(2).replace('.',',')}\r\n`);
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `divisao_${state.selected.id}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// ========== Utilitários ==========
function formatMoney(num, withCents=false){
  if(!num && num !== 0) return '0,00';
  if(withCents) return num.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  return Math.round(num).toLocaleString('pt-BR');
}
function formatDateDisplay(isoDate){
  const d = new Date(isoDate + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit',year:'numeric'});
}
function roundToCent(n){ return Math.round(n * 100) / 100; }
function buildIcsDateTime(dateISO, timeHHMM){
  if(!dateISO){
    const now = new Date();
    dateISO = now.toISOString().slice(0,10);
  }
  const [hh,mm] = (timeHHMM || '18:00').split(':');
  const dt = new Date(dateISO + 'T' + hh.padStart(2,'0') + ':' + mm.padStart(2,'0') + ':00');
  const y = dt.getFullYear();
  const m = String(dt.getMonth()+1).padStart(2,'0');
  const d = String(dt.getDate()).padStart(2,'0');
  const H = String(dt.getHours()).padStart(2,'0');
  const M = String(dt.getMinutes()).padStart(2,'0');
  return `${y}${m}${d}T${H}${M}00`;
}
function formatIcstimestamp(d){
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth()+1).padStart(2,'0');
  const day = String(d.getUTCDate()).padStart(2,'0');
  const H = String(d.getUTCHours()).padStart(2,'0');
  const M = String(d.getUTCMinutes()).padStart(2,'0');
  const S = String(d.getUTCSeconds()).padStart(2,'0');
  return `${y}${m}${day}T${H}${M}${S}Z`;
}
function addMinutesToTime(timeHHMM, minutes){
  const [hh,mm] = timeHHMM.split(':').map(Number);
  const dt = new Date();
  dt.setHours(hh);
  dt.setMinutes(mm + minutes);
  const H = String(dt.getHours()).padStart(2,'0');
  const M = String(dt.getMinutes()).padStart(2,'0');
  return `${H}:${M}`;
}
function escapeIcsText(text){ return String(text).replace(/\n/g,'\\n').replace(/,/g,'\\,'); }
function capitalize(s){ return String(s).charAt(0).toUpperCase() + String(s).slice(1); }

// ========== Inicialização ==========
renderDestinations();
setupFilterButtons();
updateUI();

// preselect um destino (ex: santorini) se existir
(function preselect(){
  const defaultId = 'santorini';
  const dest = destinations.find(d=>d.id===defaultId);
  if(dest) selectDestination(defaultId);
  dateInput.value = '2025-12-29';
  state.date = dateInput.value;
  updateUI();
})();

// Exemplo de ação do botão de pagamento
payBtn.addEventListener('click', ()=>{
  if(!state.selected) return;
  if(!state.date) {
    if(!confirm('Nenhuma data selecionada. Deseja continuar sem data?')) return;
  }
  alert(`Fluxo de pagamento simulado\nDestino: ${state.selected.title}\nTotal: ${sumTotal.textContent}`);
});

// Exemplo: clique em um destino e atualize os detalhes
document.querySelectorAll('.dest-card').forEach(card => {
  card.addEventListener('click', () => {
    const destino = card.dataset.destino;
    const categoria = card.dataset.categoria;
    const duracao = card.dataset.duracao;
    const preco = card.dataset.preco;
    const imagem = card.querySelector('img').src;

    // Atualiza os campos da lateral direita
    document.getElementById('summaryTitle').innerText = destino;
    document.getElementById('summarySubtitle').innerText = categoria;
    document.getElementById('sumDestino').innerText = destino;
    document.getElementById('sumCategory').innerText = categoria;
    document.getElementById('sumDuration').innerText = duracao;
    document.getElementById('sumPrice').innerText = preco;
    document.getElementById('summaryImage').style.backgroundImage = `url(${imagem})`;

    // Ativa os botões
    document.getElementById('payBtn').disabled = false;
    document.getElementById('addCalendar').disabled = false;
    document.getElementById('cancelBtn').disabled = false;

    // rola até a seção de detalhes (opcional)
    document.querySelector('.sidebar').scrollIntoView({ behavior: 'smooth' });
  });
});