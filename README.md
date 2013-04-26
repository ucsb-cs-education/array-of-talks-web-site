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


(3) Next, remove the <code>active-array</code> class from the <code>&lt;li&gt;</code> element 
for the "previous talk":

Before:
```
     <li><a href="#toolbar5" class="scroll active-array">[5]</a></li>

```

After:
```
     <li><a href="#toolbar5" class="scroll">[5]</a></li>

```

The word <code>active-array</code> should ONLY be present on the <code>&lt;li&gt;</code> element for the
talk that you want to be the "default" when the page is first brought up (i.e. the current talk, the one you
are just now adding to the page.)



(4) Next, locate the comment that marks the start of the detail section for the most recent talk, and the open 
div element open tag for the most recent talk---by convention, we list them in reverse order, so it should be 
right at the top.  E.g.:

```
<!-- TALK[5] -->
     <div id="array-5" class="content clearfix active-talk">
```

Copy and paste everything from there to the matching close div tag (<code>&gt;/div&gt;) just before the comment that marks the 
start of the subsequent talk, e.g.:

```
                </div><!-- end of TALK[5] -->

<!-- TALK[4] -->
```

(5) Change all the numbers as appropriate.   Here is a (possibly incomplete) list for Talks[6], showing all the places you
would need to change the 6 to 7 for the next talk, or other changes needed in the HTML (as opposed to the 
text.)

Opening comment:
```
<!-- TALK[6] -->
```

Id on div open tag:

```
<div id="array-6" class="content clearfix active-talk">
```

Replace image filename (and upload image with that name)

```
      <img src="img/talks6img_KimVollHeadShot.jpg" class="clearfix right" />
```

Closing comment:                 
```
  </div><!-- end of TALK[5] -->
```

