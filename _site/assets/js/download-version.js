document.addEventListener('DOMContentLoaded',()=>{const a=document.querySelectorAll('.preview-download-toggle');a.forEach(a=>{const b=a.querySelector('h4');b.addEventListener('click',c=>{a.classList.contains('active')?(a.classList.remove('active'),b.textContent='Show all downloads'):(a.classList.add('active'),b.textContent='Hide all downloads')})})})