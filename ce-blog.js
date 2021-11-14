function addBlogRunner() {
    var header = `<style>em.asterisk { font-style: normal; font-weight: bold; }</style>
<span class="md"><a style="text-decoration:none" href="https://casual-effects.com"><div style="margin-top:-20px; width:100%; height: 60px; border-bottom:1px solid; background:url('https://casual-effects.com/casual-effects.png'); background-size: contain; background-repeat: no-repeat; background-position: center; "></div></a></span>`;
    var footer = `<div style="border-top: solid 1px; padding-top:10px" class="md">
<table><tr valign=top><td><img src="https://casual-effects.com/morgan/headshots/mcguire-square-small.png" width="200px" style="border:1px solid #888"></td><td width="30px"> </td><td>
<i style="font-size:95%">
This is a personal blog article by <a href="https://casual-effects.com">Morgan
McGuire</a> [<a href="https://twitter.com/CasualEffects">@CasualEffects</a>]. Morgan is the Chief Scientist at Roblox and holds faculty appointments at
the University of Waterloo and McGill University.

<p>He is the author of the <a
href="https://graphicscodex.com">Graphics Codex</a>, an essential reference for computer
graphics now available in iOS and Web Editions.</p></i>
</td></tr></table>
</div>`;
    if (document.getElementsByClassName("title").length) {
        document.body.innerHTML = header + document.body.innerHTML + footer;
    } else {
        setTimeout(addBlogRunner, 100);
    }
}

if(!window.markdeepOptions){window.markdeepOptions={tocStyle:'medium'};}
document.write('<style>h1 {margin-top:50px; padding-bottom:6px; border-bottom: 1px solid #555}em.asterisk { font-style: normal; font-weight: bold; }</style>');

addBlogRunner();
