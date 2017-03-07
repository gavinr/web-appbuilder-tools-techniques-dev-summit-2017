<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### Pattern:
# Wrap Your Widgets

# ....maybe <!-- .element: class="fragment" -->


Note: Extending widgets is a really great way to take advantage of out of the box functionality, while still allowing you to put any small bits of organizational functionality that may be required.That's great, but sometimes, we need to write a whole widget to tackle a more complex or unique workflow.  

There's a lot of work that goes into writing one of these widgets, so we want to make sure the widget is as flexible and portable as possible.One way to do that, is to write the widget functionality as a vanilla JavaScript API widget (that could work in any application), and combine that widget into your Web App Builder App.

By creating a widget that is more portable, the workflow can be moved to a wider variety of applications, tested and written outside of web app builder, and more closely follow your organizations style guidelines.

DEMODEMODEMO

SLIDE

That being said, Web App Builder still provides a lot of great functionality, such as communication between widgets, application level event handlers, and panel based layout controls.  If you find your widget requires a lot of this functionality, or makes heavy use of the framework and its events, wrapping isn't really worth it.  There's no reason to fit a square peg in a round hole for the sake of best practices.

Test
---

### How do I test all this Web App Builder code?

Note: Alright, so now we've got the works of what could be a really great widget: the boiler plate has all be scaffolded out, our widget is either set up to extend out of the box functionality or another wrapped widget, and we're ready to get started on development.

Since we're all very disiplined developers and practice test driven development, the first step here is to start writing some unit tests.

Now, I know what you're thinking: I've got this whole web app builder framework going on, so I better get some libraries to fake network calls, set this whole thing up, fake the web app builder events, copy the entire app builder over, run a node server and.... 

---

<!-- .slide: data-background="img/stopsign.jpg" -->

Note: Stop It.  These are unit tests.  Your widget is still your code.  One of the main tenants of great unit testing is to never test other people's code.  Let ESRI handle testing the web app builder code and focus on your own widget.

That means that we want to break up as much of the code as possible into small functional blocks.  For example, if your widget is listening to the onMaximize event to execute some functionality, you don't have to test whether or not the event was called when you maximize the layout pane.  Trust that web app builder correctly called the event at the right time and focus on testing the function connected to that event.

By breaking up your widget into easily understandable logic blocks, the code will not only be easier to write unit tests for, but it will be far easier to develop and maintain.  Let's see what that looks like in the code.

DEMODEMODEMO