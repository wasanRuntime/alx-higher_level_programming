## Python - Inheritance
> Each file in this repository holds code that illustrates an essential concept of programming,
> specific to the Python programming language:
> superclass, baseclass, and subclasses; utilizing parent classes' attributes and methods;
> overwriting parent classes' methods

### Description of what each file shows:
* main_files ----- folder holds main programs to showcase examples of how to use functions
* tests ---------- folder holds tests and edge cases checking
* Files that start with:
0. function that returns list of attributes and methods of object
1. class that inherits from list and prints sorted list
2. function using type() - same object
3. function using isinstance() - same class inherited from
4. function using issubclass() - only subclass of
5. empty class BaseGeometry (so next questions can build on this one)
6. add area method that's empty
7. add integer_validator method
8. class Rectangle that inherits BaseGeometry; initializes private width, height
9. implement __str__ to print
10. class Square that inherits Rectangle; initialize size and use area
11. implement area and print
100. 100- class MyInt that inherits from int; inverts == and != operations
