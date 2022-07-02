document.querySelectorAll('img').forEach(el => el.remove());
var urlNode = document.createElement('div');
urlNode.textContent = window.location.href;
document.querySelector('.post-body .lead-para').appendChild(urlNode);
var sections = Array.from(document.querySelectorAll('section'));
sections.shift().remove();
sections.pop().remove();
sections.pop().remove();
sections.pop().remove();
document.querySelector('.panel-heading a').click();
['.top-bar','.sticky-wrapper','.essb_links_list', 'rw-widget-floating', '.video-wrapper', '.learndash-wrapper', '.col-md-3.sidebar', '.pagination', 'a.download-lesson', '#alert-dialog', '.cookie-overlay', '.ui-dialog', '.ui-widget-overlay', '.panel-heading'].forEach(key => {
  var ele = document.querySelector(key);
  ele && ele.remove()
});

var styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.id = 'test';
styleTag.innerHTML = `
.element-normal-bottom {margin: 0!important;} 
.element-normal-top{margin: 0!important;}
ul{margin-bottom: 6px!important;}
p{margin-bottom: 10px!important;}
.element-short-top{margin-top: 0!important;}
h4{font-size: 16px;margin: 10px 0 0 0!important;}
.panel-body{padding: 0!important;}
`;
document.head.appendChild(styleTag);
window.print();