---
id: cm-pointer
title: Pointers
---

# 11 Pointers
Pointers are one of C's most important -- and most often misunderstood  features. Because of their importance, we'll devote three chapters to pointers. In this chapter, we'll concentrate on the basics; Chapter 12 and 17 cover more  advanced uses of pointers.
We'll start with a discussion of memory addresses and their relationship to pointer variables (Section 11.1). Section 11.2 then introduces the address and indirection operators. Section 11.3 covers pointer assignment. Section 11.4 explains how to pass pointers to functions, while Section 11.5 discusses returning pointers from functions.

## 11.1 Pointer Variables
The first step in understanding pointers is visualizing what they represent at the machine level. In most moern computers, main memory is divided into **bytes**, with each byte capable of storing **eight bits** of information:

![](https://i.imgur.com/0QnE0W3.png)

Each byte has a unique address to distinguish it from the other bytes in memory. If there are `n` bytes in memory, we can think of addresses as numbers that range from `0` to `n-1` (see the figure at the top of the next page).
An excutable program consists of both code (machine instructions corresponding to statements in the original C program) and data (variable in the original program). Each variable in the program occupies one or more bytes of memory;

![enter image description here](https://i.imgur.com/9ZgElLN.png)

the address of the first byte is said to be address of the variable. In the following figure, the variable i occupies the bytes at addresses 2000 and 2001, so i's address is 2000:
 ![enter image description here](https://i.imgur.com/B5PUCrD.png)

Here's where pointers come in. Altough addresses are represented by numbers, their range of values may differ from that of intergers, so we can't necessarily store them oridinary interger variables. We can, however, store them in special pointer variables. When we store the address of a variable i in the pointer variable p, we say that p "points to" `i`. In other words, a pointer is nothing more than an address, and an pointer variable is just a variable that can store a address.
Insted of showing addresses as numbers in our examples, I'll use a simlpler notation. To indicate that a pointer variable p stores the address  of a variable i, I'll show the contents of `p` as an arrow  directed towards `i`:

![enter image description here](https://i.imgur.com/lC3JVvZ.png)

### Declaring Pointer Variables
A pointer variable is declared in much the same way as an ordinary variable. The only difference is that the number of a pointer variable must br preceded by an asterisk:
```c
int *p;
```


## 11.2 The Address and Indirection Operators

C provide a pair of operators designed specifically for use with pointers. To find the addess of a variable, we use the `&` (address) operator. If `x` is variable, then `&x` is the address of `x` in memory. To gain access to the object that pointer points to, we use the `*` (indirection) operator. If `p` is a pointer, then `*p` represents the object to which currently points.

### The Address Operator
Declaring a poiner variable sets aside space for a pointer but doesn't make it point to an object:
```c
int *p; /* points nowhere in particular */
```
It's crucial to initialize  before we use it. One way to initialize a pointer variable is to assign it the address of some variable --- or, more generally, lvalue---using the `&` operator:
```c
int i, *p;
...
p = &i;
```
By assigning the address of `i` to the variable `p`, this statement makes `p` point to `i`:

![](https://i.imgur.com/8umGtPy.png)

It's also possible to initialize a pointer variable at the time we declare it:

```c
int i;
int *p = &i;
```
We can even combine the declaration of `i` with the declaration of `p`, provided  that `i` is declared first:

```c
int i, *p = &i;
```

## The indirection Operator

Once a pointer variable points to an object, we can use the `*` (indirection) operator to access what's stored in the object. If `p` points to `i`, for example, we can print the value of `i` as follows:
```c
printf("%d\n", *p);
```
`printf` will display the value of `i`, not the address of `i`.
The mathematically inclined reader may wish to think of `*` as the inverse of `&`.
Applying `&` to a variable products a pointer to the variable; applying `*` to the pointer takes us back to the variable; applying `*` to the pointer takes us back to the original variable:

```c
j = *&i;   /* same as j = i; */
```

As long as p points to i, *p is an alias for i. Not only does *p have the same values as i, but changing the value of *p also changes the value of i. (*p is an lvalue, so assignment to it is legal.) The following ezample illustrates the equivalence of *p and i; diagrams show the values of p and i at various points in the computation.

```c
p = &i;
```

![](https://i.imgur.com/HP9g8JJ.png)

```c
i = 1;
```

![](https://i.imgur.com/r0jXasx.png)

```c
printf("%d\n, i);     /* prints 1 */
printf("%d\n, *p);    /* prints 1 */
```

![](https://i.imgur.com/nPo7jsG.png)

```c
printf("%d\n, i);     /* prints 2 */
printf("%d\n, *p);    /* prints 2 */
```
Never apply the indirection operator to an uninitialized pointer variable. If a pointer variable `p` hasn't been initialized, attempting to use the value of `p` in any way causes undefined behavior. In the following example, the call of `printf` may print garbage, cause the program to crash, or have some othe effect:
```c
int *p;
printf("%d", *p);    /*** WRONG ***/
```
Assigning a value to  *p is particularly dangerous. If [ happens to contain a valid memory address, the following assignment will attempt to modify the date stored at tha address:
```c
int *p;
*p = 1;    /*** WRONG ***/
```
If the location modified by this assignment belong to the program, it may behave erratically; if it belongs to the operation system, the program will most likely crash. Your compiler may issue a warning `p` is uninitialized, so pay close attention to any warnig message you get.

### Pointer Assignment

C allows the use of the assignment operator to copy pointers, provided tha they have the same type. Suppose that i, j, p and q have been declared as follows:
```c
int i, j, *p, *q;
```
The statement
```c
p = &i;
```
is an example of pointer assignment; the assress of `i` is copied onto `p`. Here's anohter example of pointer assignment:
```c
q = p;
```
This statement copies the contents of `p` (the address of `i`) into q, in effect making `1` point the same place as `p`:

![](https://i.imgur.com/LURBXXJ.png)

Both `p` and `q` point to `i`, so we can change `i` by assigning a new value to either `*p` or `*q`:

```c
*p = 1;
```

![](https://i.imgur.com/zZDsJI2.png)
```c
*q = 2;
```
![](https://i.imgur.com/feFItpj.png)

Any number of pointer variables may point to the same object.
Becareful not ot confuse
```c
q = p;
```
with
```c
*q = *p;
```
The first statement is a pointet assignment; the second isn't, as the following example shows:
```c
p = &i;
q = &j;
i = 1;
```
![](https://i.imgur.com/6gQHC6w.png)
```c
*q = *p;
```
![](https://i.imgur.com/yOPqeGL.png)
The assignment *q copies the value that p points to (the value of i) into the object that q points to (the variable j).

### 1.4 Pointers as Auguments
So far, we've managed to avoid a rather important question: What are pointers foo for? There's no single answer t that question, since pointers have several distinct uses in C. In this section, we'll discover other uses for pointers in Section 11.5 and in Chapter 12 and 17.
We saw inSection 9.3 tha a variable supplied as an argument in a function call is protected against change, because C passes arguments by value. This property of C can be a nuisance if we want the function to be able to modify the variable. In Sectionn 9.3 we tried -- and failed -- to write a decompose function that could modify two of its arguments.
Pointers offer a solution to this problem:instead of passing a variable x as the argument to function, we'll supply &x, apointer to x. We'll declare the corre sponding parameter p to be a pointer. When the function is called, p will have the value &x, hence *p(the object that p points to) will be an ailias for x. Each appearance of *p in the body of the function will be an indirect reference to x, allowing the function both to read x and to modify it.
To see this technique in action, let's modify the decompose function by declaring the parameters int_part and frac_part to be pointers. The definition od decompose will now look like this:
```c
void decompose(double x, long *int_part, double *frac_part)
{
	*int_part = (long) x;
	*frac_part = x - *int_part;
}
```
The prototype for decompose could be eihter
```c
void decompose(double x, long *int_part, double *frac_part);
```
or
```c
void decompose(double, long *, double *);
```
We'll call decompose in the following way:
```c
decompose(3.14159, &i, &d);
```
Because of the `&` operator in front of `i` and `d`, the arguments to `decompose` are `pointers` to `i` and `d`, not the values of `i` and `d`. When `decompose` is called, the value 3.12459 is coped into `x`, a pointer to `i` is stored in `int_part`, and a pointer to `d` is stored in `frac_part`:

![](https://i.imgur.com/zPO8fgF.png)
The first assignment in the body of decompose converts the value of x to type long and stores it in the object pointed to by int_part. Since int_part points to i, the assignment puts the value 3 in i:
![](https://i.imgur.com/d7IoBer.png)
The second assignment fetches the value that int_part points to (the value of i), which is 3. This value is converted to type double and subtracted from x, giving.14159, which is then stored in the object that frac_part points to:
![](https://i.imgur.com/TCT1Q5k.png)
When decompose returns, i and d will have the values 3 and .14159, just as we originally wanted.
using pointers as arguments to functions is actually nothing new; we've been doing it in calls of scanf since Chapter 2. Consider the following example:
```c
int i;
...
scanf("&d", &i);
```
We must put the & operator in fornt of i so taht scanf is given a pointer to i;that pointer tells scanf where to put the value that it reads. Without the &, scanf would be supplied with the value of i.
Altough scanf's argunments must be pointers, it's not always true that every argument needs the & operator. In the following example, scanf is passed a pointer variable: