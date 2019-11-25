# Basics - Part 1

## Reading from User

### Greeting
Write an application that reads a name from the user and prints "Hello, {{name}}" to the console

```
<< What's your name: John
>> Hello, John
```
### Radius
Write an application that reads the radius of a circle and prints the circle's perimeter and area.

```
<< Enter a circle's radius: 5
>> Perimeter: 31.4
>> Area: 78.5
```

### Average
Write an application that reads 4 numbers and prints the average to the console.

```
<< First number: 55
<< Second number: 71
<< Third number: 46
<< Fourth number: 87

>> The average is: 64.75
```

### Units of Length
Write an application that converts from centimeters to inches.
> 1 inch = 2.54 cm

```
<< Enter length in cm: 45
>> 45cm equals to 17.7165 inches
```

### Reverse Numbers
Write an application that reads a 3 units integer and prints the reversed version of the number.

```
<< Enter an integer: 092
>> 290
```

### Pythagorean Theorem
Write an application that reads two cathetus (valid as floating point numbers) and writes the hypotenuse to the console.
> Pythagorean Theorem formula: a^2 + b^2 = c^2

```
<< Enter cathetus "a": 7
<< Enter cathetus "b": 5
>> Hypotenuse Length: 8.60
```

### Extract Decimal
Write an application that prints the decimal units from a floating point number.

```
<< Enter a floating point number: 1.34
>> 34
```

## Program Flow and Conditionals

### Odd or Even
Write an application that reads a number and prints "Even" if the number is **even** and "Odd" if the number is **odd**.

```
<< Enter an integer: 3
>> Odd
```

```
<< Enter an integer: 8
>> Even
```

### Leap Year
Write an application that reads a year and writes if the year is either a *Leap year* or not

```
<< Enter a year: 1988
>> 1988 is a leap year
```

```
<< Enter a year: 2011
>> 2011 is not a leap year
```

### Divison
Write an application that reads two integers and returns it division and also points out the nature of the division either *even division* (also called exact division) or not.

```
<< Divisor: 5
<< Dividend: 14

>> The division between 5 and 14 is not even
>> Quotient: 2
>> Remainder: 4
```

### Longest word
Write an application that reads two words from the user and writes
the longest word and the difference between them.

```
Word A: music
Word B: alphabet

The word "alphabet" is 3 characters longer than word "music"
```

### Ordering Integers
Write an application that reads 5 numbers from the user and writes the numbers from smallest to largest.

```
<< Enter a number: 1
<< Enter a number: 4
<< Enter a number: -1
<< Enter a number: 19
<< Enter a number: 8

>> -1 1 4 8 19
```

### Type of character
Write an application that writes if the given character is either a number a letter or a symbol

```
<< Enter a character: 1
>> 1 is a number
```

```
<< Enter a character: A
>> A is a letter
```

```
<< Enter a character: $
>> $ is a symbol
```

### Calculator
Write an application that is capable to sum, substract, multiply and divide multiple numbers.

```
<< Numbers: 4 5 10 -1 12
<< Operation: +
>> 4 + 5 + 10 + (-1) + 12 equals 30
```

### Age
Write an application that reads Day, Month and Year and returns the age of someone who born in that date.

```
<< Day: 14
<< Month: 6
<< Year: 1948

>> 62 years old
```

### Minkowski Inequality
Write an applicaton that reads 3 sides of a triangle and returns if the given sides represents a inequal triangle or not.
> In any triangle the sum of the lengths of any two sides is always greater (taking into account the canonical multiplicity of vector associated with the root of the operator matrix transposed by its linear complexity) to the length of the remaining side.

```
<< Side A: 3.9
<< Side B: 6.0
<< Side C: 1.2

>> The triangle is not valid
```

```
<< Side A: 1.9
<< Side B: 2
<< Side C: 2

>> Isosceles Triangle
```

```
<< Side A: 3.0
<< Side B: 5.0
<< Side C: 4.0

>> Scalene Triangle
```

### Body Mass Index
The following table describes the possibilites of suffering *coronary heart disease* given the *Body Mass Index*.

 - | Age < 45> | Age ≥ 45
--- | --- | ---
**BMI < 22.0** | low | medium
**BMI ≥ 22.00** | medium | high

Given the table above, write an application that reads the height and weight of a person and writes the risk condion.
