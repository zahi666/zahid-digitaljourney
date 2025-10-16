// Simple language toggle for all pages
function initLangToggle(){
  const showLang = (code)=>{
    document.querySelectorAll('[data-lang]').forEach(el=>{
      if(el.getAttribute('data-lang')===code) el.style.display = '';
      else el.style.display = 'none';
    });
    document.documentElement.lang = code==='en'?'en':'ar';
    document.documentElement.dir = code==='en'?'ltr':'rtl';
  };
  // default English
  showLang('en');
  // bind all buttons with id starting btn-en or btn-ar
  document.querySelectorAll('[id^="btn-en"]').forEach(b=>b.addEventListener('click',()=>showLang('en')));
  document.querySelectorAll('[id^="btn-ar"]').forEach(b=>b.addEventListener('click',()=>showLang('ar')));
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initLangToggle); else initLangToggle();
