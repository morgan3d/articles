// Header image is public domain from https://pixnio.com/nature-landscapes/beaches/water-sea-foam-beach-wet-nature-ocean-turquoise-summer-beautiful-sand-water-wave

function addBlogRunner() {
    var baseURL = location.href.replace(/\/sailing\/.*/, '/sailing');
    
    var header = `
<style>
em.asterisk { font-style: normal; font-weight: bold; }
h1 {margin-top:50px; padding-bottom:6px; border-bottom: 1px solid #555}
body {max-width: 800px !important; padding-top: 60px}
</style>

<span class="md"><a style="text-decoration:none" href="${baseURL}/index.html"><div style="position: absolute; left: 0px; top: 0px; width:100%; height: 50px; border-bottom:1px solid; background: url('${baseURL}/header.jpg'); text-shadow: #2EB3AA 0px 0px 6px; background-size: cover; background-repeat: no-repeat repeat; font-size: 40px; padding-top: 22px; padding-left: 60px; color: #FFF">Notes on Sailing</div></a></span>`;
    
    var footer = `<div style="border-top: solid 1px; padding-top:10px" class="md">
<table><tr valign=top><td>
<img src="${baseURL}/portrait.jpg" width=256>
</td><td width=30px> </td><td><i style="font-size:95%">
This article is part of <a href="https://casual-effects.com">Morgan</a>'s <a href="${baseURL}/index.html">notes on sailing</a>.

<br>
<br>
The work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>,
excepting portions credited to other sources. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a>
</i>
</td></tr></table>
</div>`;
    if (document.getElementsByClassName("title").length) {
        document.body.innerHTML = header + document.body.innerHTML + footer;
    } else {
        setTimeout(addBlogRunner, 100);
    }
}

document.write(`
<style class="fallback">body{visibility:hidden}</style>
<!-- Markdeep: --><script src="https://casual-effects.com/markdeep/latest/markdeep.min.js?"></script>`);

addBlogRunner();
