document.querySelectorAll('[data-carousel]').forEach(function(c){var t=c.querySelector('.track');
c.querySelector('.prev').onclick=function(){t.scrollBy({left:-t.clientWidth/1.5})};
c.querySelector('.next').onclick=function(){t.scrollBy({left:t.clientWidth/1.5})};});
document.querySelectorAll('[data-copy]').forEach(function(b){b.onclick=function(){var s=document.getElementById(b.dataset.copy).textContent;
(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(function(){b.textContent='COPIED'},function(){var r=document.createRange();r.selectNode(document.getElementById(b.dataset.copy));getSelection().removeAllRanges();getSelection().addRange(r)})}});
