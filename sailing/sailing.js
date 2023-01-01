// Header image is public domain from https://pixnio.com/nature-landscapes/beaches/water-sea-foam-beach-wet-nature-ocean-turquoise-summer-beautiful-sand-water-wave
var baseURL = location.href.replace(/\/sailing\/.*/, '/sailing');

document.write(`
<span class="md"><a style="text-decoration:none" href="${baseURL}/index.html"><div style="position: absolute; left: 0px; top: 0px; width:100%; height: 60px; background: url('${baseURL}/header.jpg'); text-shadow: #2EB3AA 0px 0px 6px; background-size: cover; background-repeat: repeat no-repeat"></div></a></span>
<span class="md"><a style="text-decoration:none" href="${baseURL}/index.html"><div style=" filter: drop-shadow(0px 1px 3px #333); position: absolute; top: 0px; height: 60px; background-size: cover; background-repeat: no-repeat repeat; font-size: 40px; padding-top: 13px; color: #FFF"><img style="margin-left: -57px; top: 5px; position: absolute" width=50 height=50 src="${baseURL}/fat-compass-rose.png"><b style="margin-left:-2px">Notes on Sailing</b></div></a></span>

<div style="border-top: solid 1px; padding-top:10px" class="md">
<table><tr valign=top><td>
<img src="${baseURL}/portrait.jpg" width=370px>
</td><td width=30px> </td><td><i style="font-size:95%">
This article is part of <a href="https://casual-effects.com">Morgan</a>'s <a href="${baseURL}/index.html">notes on sailing</a>.
<br>
<br>&copy; 2022-2023 Morgan McGuire.
The work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>,
excepting portions credited to other sources. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a>
</i>
</td></tr></table>
</div>

<link rel="icon" type="image/x-icon" href="${baseURL}/compass-rose.png">
<style>
@font-face {
  font-family: 'header';
  src: url('${baseURL}/Oxygen-Regular.ttf');
}

em.asterisk { font-style: normal; font-weight: bold; }
body {max-width: 800px !important; padding-top: 60px}
.md div.title {text-align: left; font-size: 35px}
.md div.subtitle {text-align: left; font-style: italic}
.md div.title, .md h1, .md .nonumberh1, .md h2, .md .nonumberh2, .md h3, .md h4, .md h5 {font-family: header}
.md h1, .md .nonumberh1 {font-size: 30px}
.md h2, .md .nonumberh2 {font-size: 26px}
.md h3, .md .nonumberh3 {font-size: 24px}
.md h4, .md .nonumberh4 {font-size: 22px}
.md {line-height: 175%; color: #333; font-family: Georgia}
.md a {font-family: Georgia}
</style>
<style class="fallback">body{visibility:hidden}</style>
<!-- Markdeep: -->`);

var script = document.createElement('script');
script.src = 'https://casual-effects.com/markdeep/latest/markdeep.min.js?';
document.body.appendChild(script);
