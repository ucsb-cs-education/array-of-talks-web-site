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

(3) Next, locate the div element open tag for the most recent talk---by convention, we list them in reverse order, so it should be 
right at the top.  E.g.:

```
     <div id="array-5" class="content clearfix active-talk">
```

Copy and paste everything from there to the matching close div tag (<code>&gt;/div&gt;), and change it to
match the details of the new event.

