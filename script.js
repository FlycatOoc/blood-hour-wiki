const characterData = {
  keisha: { name: 'Keisha Ellyana', ability: 'Echo Projection', files: ['17477','17478','17479','17480','17481','17482','17483','17484','17485','17486'] },
  khairun: { name: 'Khairun Amara', ability: 'Vector Thread', files: ['17498','17499','17500','17501','17502','17503','17504','17505','17506'] },
  hani: { name: 'Hani Marissa', ability: 'System Interface', files: ['17514','17515','17516','17517','17518','17519','17520','17521','17522'] },
  putri: { name: 'Putri Imelda', ability: 'Kinetic Burst', files: ['17558','17559','17560','17561','17562','17563','17564','17565','17566','17567'] },
  isyirah: { name: 'Isyirah Amara', ability: 'Lucky Shift', files: ['17602','17603','17604','17605','17606','17607','17608','17610','17611','17613'] }
};
const grid = document.getElementById('characterGrid');
const search = document.getElementById('characterSearch');
const count = document.getElementById('characterCount');
const modal = document.getElementById('galleryModal');
const modalTitle = document.getElementById('modalTitle');
const modalAbility = document.getElementById('modalAbility');
const galleryImage = document.getElementById('galleryImage');
const imageIndex = document.getElementById('imageIndex');
let activeCharacter = null;
let activeIndex = 0;
function imagePath(slug, file) { return `assets/characters/${slug}/${file}.png`; }
function showImage() {
  const files = characterData[activeCharacter].files;
  galleryImage.src = imagePath(activeCharacter, files[activeIndex]);
  galleryImage.alt = `${characterData[activeCharacter].name} artwork ${activeIndex + 1}`;
  imageIndex.textContent = `${String(activeIndex + 1).padStart(2,'0')} / ${String(files.length).padStart(2,'0')}`;
}
function openGallery(slug) {
  activeCharacter = slug; activeIndex = 0;
  const data = characterData[slug];
  modalTitle.textContent = data.name;
  modalAbility.textContent = data.ability;
  showImage(); modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeGallery() { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
document.querySelectorAll('.character-card').forEach(card => card.querySelector('button').addEventListener('click', () => openGallery(card.dataset.slug)));
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeGallery));
document.getElementById('prevImage').addEventListener('click', () => { const n=characterData[activeCharacter].files.length; activeIndex=(activeIndex-1+n)%n; showImage(); });
document.getElementById('nextImage').addEventListener('click', () => { activeIndex=(activeIndex+1)%characterData[activeCharacter].files.length; showImage(); });
document.addEventListener('keydown', e => { if (!modal.classList.contains('open')) return; if(e.key==='Escape') closeGallery(); if(e.key==='ArrowLeft') document.getElementById('prevImage').click(); if(e.key==='ArrowRight') document.getElementById('nextImage').click(); });
search.addEventListener('input', () => { const q=search.value.toLowerCase().trim(); let visible=0; document.querySelectorAll('.character-card').forEach(card => { const match=(card.dataset.name+' '+card.dataset.ability).toLowerCase().includes(q); card.hidden=!match; if(match) visible++; }); count.textContent=`${visible} PROFILE${visible===1?'':'S'}`; let empty=grid.querySelector('.empty-state'); if(visible===0&&!empty){empty=document.createElement('p');empty.className='empty-state';empty.textContent='No matching profile found.';grid.appendChild(empty)} else if(visible>0&&empty) empty.remove(); });
const menuToggle=document.getElementById('menuToggle'); const nav=document.getElementById('mainNav'); menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
