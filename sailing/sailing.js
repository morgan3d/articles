function addBlogRunner() {
    var header = `<style>em.asterisk { font-style: normal; font-weight: bold; }</style>
<span class="md"><a style="text-decoration:none" href="https://casual-effects.com"><div style="margin-top:-20px; width:100%; height: 60px; border-bottom:1px solid; background:url('https://casual-effects.com/casual-effects.png'); background-size: contain; background-repeat: no-repeat; background-position: center; "></div></a></span>`;
    
    var footer = `<div style="border-top: solid 1px; padding-top:10px" class="md">
<i style="font-size:95%">
This is a personal blog article by <a href="https://casual-effects.com">Morgan
McGuire</a>.</i>
</div>`;
    if (document.getElementsByClassName("title").length) {
        document.body.innerHTML = header + document.body.innerHTML + footer;
    } else {
        setTimeout(addBlogRunner, 100);
    }
}

if(!window.markdeepOptions){window.markdeepOptions={tocStyle:'medium'};}
document.write('<style>h1 {margin-top:50px; padding-bottom:6px; border-bottom: 1px solid #555}');
document.write('<style class="fallback">body{visibility:hidden}</style>');

addBlogRunner();
