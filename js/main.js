(function(){
  "use strict";

  // ---- year ----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- header scroll state ----
  var header = document.getElementById('siteHeader');
  var onScroll = function(){
    if(window.scrollY > 40){ header.classList.add('is-scrolled'); }
    else{ header.classList.remove('is-scrolled'); }
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // ---- mobile nav ----
  var toggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var openIcon = toggle.querySelector('.icon-open');
  var closeIcon = toggle.querySelector('.icon-close');

  function closeNav(){
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    openIcon.style.display = '';
    closeIcon.style.display = 'none';
  }
  function openNav(){
    mobileNav.classList.add('is-open');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
  toggle.addEventListener('click', function(){
    mobileNav.classList.contains('is-open') ? closeNav() : openNav();
  });
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeNav();
  });

  // ---- scroll reveal ----
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if(reduceMotion || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function(el){ io.observe(el); });
  }

})();
