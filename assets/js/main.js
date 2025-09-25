document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.querySelector('.nav-toggle');
  var siteNav=document.querySelector('.site-nav');
  navToggle&&navToggle.addEventListener('click',function(){
    siteNav.classList.toggle('open');
  });

  // Smooth scroll for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el=document.querySelector(href);
        if(el){
          window.scrollTo({top:el.offsetTop-60,behavior:'smooth'});
          if(siteNav.classList.contains('open')) siteNav.classList.remove('open');
        }
      }
    });
  });

  // Simple contact form handler
  var form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      alert('문의가 전송되었습니다. 빠른 시일내에 답변드리겠습니다.');
      form.reset();
    });
  }

  // Animate elements when they enter the viewport
  var observers = document.querySelectorAll('.anim');
  if('IntersectionObserver' in window && observers.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },{threshold:0.15});
    observers.forEach(function(el){io.observe(el)});
  } else {
    // fallback: just add class
    observers.forEach(function(el){el.classList.add('in-view')});
  }
});