# Tooltips
  
  
## HTML
HTML elements can have an associated tooltip. Examples of HTML elements with tooltips are
items in the shop, and job elements. 

To enable tooltips for an HTML element with the current W3C CSS framework, there are two steps. First, simply add the class  
"tooltip" to an element's class list. 
  
Second, add a child span to the element, with class name "tooltipText".

## Javascript
Rows get their tooltips via IC's original createRow() function. During game setup, all rows are created at once.
During this process, a row's name is used to associate the row with the corresponding tooltip text in the 
big tooltip text object.

Going forward, this architecture will be modified into a dynamic process.
What does that mean?
Instead of having static tooltip text predefined, tooltip text will be dynamically generated  
when an element is hovered over. This functionality will allow tooltips to display changing values  
like cost, multiplier, time till completion, etc etc. 

Built-in Javascript 'mouseenter' and 'mouseleave' event listeners.
