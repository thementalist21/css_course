// Day 1 

// html head body
// title
// html needs lang to help audio readers, SEO 
// Start of the page needs !Doctype
// meta tags aren't visual but are needed
// meta tags having charset utf-8 is important
// text basics with h1,h2,h3 and p1 - These are all block elements
// Inline elements like <em> and <strong> are also SEO driven for websites to draw attention to important content
// Link tag helps to add icon or add reference to the css   
// Line breaks <br> 
// html entities - whitespace collapsing - adding < > in your text - adding space in between block elements - adding  &lt; and &gt; &nbsp; etc  
// address tag picked up by SEO
// comments in HTML 
// different values of rel and types


// Day 2 
// Lists - Ordered, Unordered and Description List (Description list has description term and detail)
///////// Learning //////// Ordered lists for rankings, hierarchial stuff - unordered lists for other stuff - Description - Key-Value pairs
// Keep using these in these contexts to seal usage of lists.

// Hyperlinks with anchor tags - absolute reference(websites from outside) vs relative reference(websites inside our server) vs internal reference(on the same web page) 
// Back to the Top is just #
// anchor tag
// sections (where are sections used) chatgpt 
// target="_blank" (Read more about)chatgpt
// tel and email address in anchor tag (Read more about)chatgpt
// adding images to the page 
// title in the image is not accessible by the screen reader
// Cumulative Layout Shift - chatgpt
///////// Learning //////// first number is the width in an image
// below the fold chatgpt
// browser loading - lazy eager 
// figure is good for telling the browser that the caption is related to the image - good for assistive and browser 
// where are figures used chatgpt

 // Semantics 
 // header - footer - main 
 // if you hvae more than one nav - better to label it aria-label
 // link a heading id to the aria-labelledby for semantic meaning
// article and section are not more important than the other but article is more specific and section is more generic both are semantic
// 2 clear articles in each section 
// aside - details - summary --> semantic tags
// put time in <time> tag and duration in time tag 
// Avoid using divs or spans 

// Created tables table - tr - td 
// The size of the element is not like other block elements 
// using row span and col span 
// adding semantics to tables - caption, thead, tbody, tfoot, scope in th
// instead of scope you can also use [id's and headers] 
// to create tables --> table - caption - thead --> th's -- tbody -- tfoot ! 

// Forms
// To create a form --->  fieldset -> legend -> p -> label -> input - semantics in form
// Many types of form inputs - radio buttons, checklists, select (dropdown), message
// message - label ---> textarea 
// buttons for submit(Get) Post and Reset 
// form action has http bin to store the Get Requests 

// he didn't use sections in articles --> mainly went for header - main - footer and articles inside main 

/////// CSSS ///////

// Style sheet can be inline for each object - in the file with the style object - or outside the file
// the hierarcy of styling is ::  inline - then the cascade of where the style is placed in the file after the link or before

// h1, h2 {} means both h1 and h2 but h1 h2 {} means h2's inside h1's  ((importance of the comma))
// better to create classes and set a style for that class
// specificity and cascading next rides the hierarchy of styling 
// inheritance in CSS - font size in body got inherited by everthing else - properties related to FONT, Typography, Color
// inheritance keeps code DRY (Don't Repeat Yourself)
// !important flag  DON't USE THIS


// colors ////

// contrast ratios - website to check for this 
// rgb and rgba and hex codes colors 
// coolors.co and specificity calculators

// css units ///////

// 16px is default for font size in browsers - don't use fixed pixel counts for Font-Size --> 
// using percentages for header or h1 or anything it is always relative to the PArent of the element. 
// for ex.. if header is at 50% the h1 inside it is at 50% then it is 50% of the header.

// usage of rem - em // we want to use rem's for font size
// default browser css can be seen in Dev Tools
// CSS Reset - because of default browser css settings 
// viewportwidth units 

// css box model
// content -> padding -> border -> marging 
// 

// Typography 
// importing and using links for Fonts from Google Fonts

// Styling Links
// pesudoooooooo classses - visited, hover, focus, active 
// can change the styling of anchor tags itelf.

// Styling Lists
// Pseudo Elements - marker - content


// Mini Project Learnings
// Start with CSS Reset - padding margin box-sizing
// Style Each element in the Cascading form of the html --> body -> nav -> h1 -> ol -> li -> li a -> li a pseudo classes -> 
//  