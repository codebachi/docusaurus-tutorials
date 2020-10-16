---
id: latex-spacing-in-math-mode
title: Spacing in math mode
---

```latex
\begin{align*}
34x^2a \mathbin{\#} 13bc \\
34x^2a \mathrel{\#} 13bc
\end{align*}
```

Reference guide
Description of spacing commands

LATEX code | Description
------------ | -------------
\quad  | space equal to the current font size (= 18 mu)
\,     | 3/18 of \quad (= 3 mu)
\:     | 4/18 of \quad (= 4 mu)
\;     | 5/18 of \quad (= 5 mu)
\!     | -3/18 of \quad (= -3 mu)
\      | (space after backslash!)	equivalent of space in normal text
\qquad | twice of \quad (= 36 mu)