array-of-talks-web-site
=======================

To add a new talk to the website:

(1) Open index.html for editing.

(2) Locate this line: <code> &lt;div id="toolbar5" class="array clearfix"&gt;</code>.

Under that, you should see a list where you can add the new talk.
For example:

```
     <li><a href="#toolbar5" class="scroll active-array">[5]</a></li>

```

Add a new line just like it right underneath, incrementing the number by one.  E.g.

```
     <li><a href="#toolbar6" class="scroll active-array">[6]</a></li>

```
