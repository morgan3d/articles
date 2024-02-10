document.write(`
<style class="fallback">body{visibility:hidden}</style>
<style>
.chart p { display: inline-block; padding-left: 10px; padding-right: 10px }
/* Remove leading paragraph */
.chart p:first-child { display: none }

body { max-width: none }
.md code { white-space: pre-wrap}
body, .md a { font-family: Arial }
.md pre.tilde {font-size: 110%; background: #F8F8F0}
.md h1:before, .md h2:before, .md h3:before, .md h4:before { content: none; }
.md h1 {font-size: 115%; border-bottom: 2px solid #000}
.md h2 {font-size: 110%; border-bottom: none}
</style>
<script>markdeepOptions={tocStyle:'short'}</script>
<script src="../ce-blog.js"> </script>`);

