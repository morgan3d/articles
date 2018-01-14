function addBlogRunner() {
    var header = `
<span class="md"><a style="text-decoration:none" href="https://casual-effects.com"><div style="margin-top:-20px; width:100%; height: 60px; border-bottom:1px solid; background:url('https://casual-effects.com/casual-effects.png'); background-size: contain; background-repeat: no-repeat; background-position: center; "></div></a></span>`;
    var footer = `<div style="border-top: solid 1px; padding-top:10px" class="md">
<table><tr valign=top><td><img src="http://casual-effects.com/morgan/headshots/mcguire-square-small.png" width="85px" style="border:1px solid #888; margin-right:25px"></td><td>
<i>
This is a personal blog article by <a href="https://casual-effects.com">Morgan
McGuire</a>. Morgan is a scientist at NVIDIA and holds faculty appointments at Williams College
and the University of Waterloo. 

<p>He is the author of the <a
href="http://graphicscodex.com">Graphics Codex</a>, an essential reference for computer
graphics now available in iOS and Web Editions.</p></i>
</td></tr></table>
</div>`;
    if (document.getElementsByClassName("title").length) {
        document.body.innerHTML = header + document.body.innerHTML + footer;
    } else {
        setTimeout(addBlogRunner,100);
    }
}

addBlogRunner();
