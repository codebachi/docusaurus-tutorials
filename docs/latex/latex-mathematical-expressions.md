---
id: latex-mathematical-expressions
title: Mathematical Expressions
---

[Latex guide](https://www.overleaf.com/learn/latex/Subscripts_and_superscripts)

## Mathematical Expressions

### Reference guide


description | code | examples
------------ | ------------- | -------------
Greek letters | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$


## Subscripts and superscripts

```latex
\int\limits_0^1 x^2 + y^2 \ dx
```
$$
\int\limits_0^1 x^2 + y^2 \ dx
$$

The symbols `_` and `^` can also be combined in the same expression, for example:
```latex
a_1^2 + a_2^2 = a_3^2
```
$$
a_1^2 + a_2^2 = a_3^2
$$

```latex
(a^n)^{r+s} = a^{nr+ns}
```
$$
(a^n)^{r+s} = a^{nr+ns}
$$

```latex
\sum_{i=1}^{\infty} \frac{1}{n^s} 
= \prod_p \frac{1}{1 - p^{-s}}
```

$$
\sum_{i=1}^{\infty} \frac{1}{n^s} 
= \prod_p \frac{1}{1 - p^{-s}}
$$

### Reference guide
Additional examples and operators

LATEX markup | Renders as
------------ | -------------
a_{n_i} | $a_{n_i}$
\int_{i=1}^n  | $\int_{i=1}^n$
\sum_{i=1}^{\infty} | $\sum_{i=1}^{\infty}$
\prod_{i=1}^n  | $\prod_{i=1}^n$
\cup_{i=1}^n  | $\cup_{i=1}^n$
\cap_{i=1}^n  | $\cap_{i=1}^n$
\oint_{i=1}^n  | $\oint_{i=1}^n$
\coprod_{i=1}^n  | $\coprod_{i=1}^n$