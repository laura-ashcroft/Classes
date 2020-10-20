# Building A Kitchen with Object Oriented Programming

## Overview

- Using the Class syntax in JS
- Using the constructor function
- Creating methods on classes
- Using the 'extends' keyword
- Using the 'super' keyword

Throughout this workshop make use of the Classes page on the MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes and the W3 Schools page: https://www.w3schools.com/Js/js_classes.asp

# Task 1

Declare a new class, 'Cupboard'. The class should have a constructor function which takes in all of the properties that make up a cupboard - such as width, height and number of shelves. Declare a new variable which is an instance of the 'Cupboard' class. Give it all of the properties it needs according to the class's constructor function. Console log the variable to make sure the class has been created as intended!

# Task 2

Think about the things that stay the same for the cupboard, and the things that can change. For example, although the cupboard door will always exist, it can either be open or closed. How can we represent this fact in our code? To begin with, the door could be an object and have a boolean property which we can change. Secondly, we need a way to change this property - a method! Write a method for our 'Cupboard' class which opens and closes the door.

# Task 3

Are all cupboards created equal? No! What's a fridge? A cold cupboard. Using the 'extends' keyword, create a new class, 'TemperatureCupboard', that's capable of representing you fridge. Using the 'super' keyword, initialise the class with all of the same properties of a cupboard. Add some extra properties that only a TemperatureCupboard would need (like temperature!). Try and think of some other properties a TemperatureCupboard needs that a regular Cupboard does not. Declare a new variable, 'fridge', which is an instance of the 'TemperatureCupboard' class.

# Task 4

Fortunately, your 'TemperatureCupboard' class will inherit all of the methods on the 'Cupboard' class. The 'TemperatureCupboard' still has a door that needs opening, after all. However, a 'TemperatureCupboard' uses electricity, and has a light which goes on and off when the door is opened and closed. Add the property 'light' to your 'TemperatureCupboard' class as a boolean. Write a new method on your 'TemperatureCupboard' class which both opens and closes AND turns the light on and off. Rather than writing the logic for opening and closing the door again, use the 'super' keyword within the body of your new method to call the door opening methon you wrote in task 2.

# Task 5

Thats it! You have all of the object-oriented tools you need to start making your own object-code worlds. As a bonus, think about how you could logically extend your world of cupboards. What contains your cupboards, perhaps a kitchen? What other groups of objects are there in the kitchen? Break everything down into its most essential properties to see how it might relate to other things in the room. There is no right or wrong way to build your world of objects, but the fewer classes you have the more elegant the overall system will be.
