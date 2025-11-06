// IntersectionObserver reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Close mobile on anchor tap (if you use the mobile menu)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=> {
    const mobile = document.querySelector('#mobile');
    if(mobile && !mobile.classList.contains('hidden')) mobile.classList.add('hidden');
  });
});
