---
title: 'Chapter 1 Problems'
---

### 1-1

> For each function $f(n)$ and time $t$ in the following table, determine the largest size $n$ of a problem that can be solved in time $t$ , assuming that the algorithm to solve the problem takes $f(n)$ microseconds.

$$
\begin{aligned}
\text{We use:} \quad 1 \ \text{second} &= 1\times10^6 \ \textup{microseconds} \\
\quad 1 \ \text{minute} &= 6\times10^7 \ \text{microseconds} \\
\quad 1 \ \text{hour} &= 3.6\times10^9 \ \text{microseconds} \\
\quad 1 \ \text{day} &= 8.64\times10^{10} \ \text{microseconds} \\
\quad 1 \ \text{month} &= 2.628\times10^{12} \ \text{microseconds} \\
\quad 1 \ \text{year} &= 3.154\times10^{13} \ \text{microseconds} \\
\quad 1 \ \text{century} &= 3.156\times10^{15} \ \text{microseconds}
\end{aligned}
$$

|            | 1 second                  | 1 minute                         | 1 hour                             | 1 day                                  | 1 month                                 | 1 year                                  | 1 century                               |
| ---------- | ------------------------- | -------------------------------- | ---------------------------------- | -------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| $\lg n$    | $2^{10^6} \approx \infty$ | $2^{6\times10^7} \approx \infty$ | $2^{3.6\times10^9} \approx \infty$ | $2^{8.64\times10^{10}} \approx \infty$ | $2^{2.628\times10^{12}} \approx \infty$ | $2^{3.154\times10^{13}} \approx \infty$ | $2^{3.156\times10^{15}} \approx \infty$ |
| $\sqrt{n}$ | $10^{12}$                 | $3.6\times10^{15}$               | $1.296\times10^{19}$               | $7.465\times10^{21}$                   | $6.906\times10^{24}$                    | $9.948\times10^{26}$                    | $9.960\times10^{30}$                    |
| $n$        | $1\times10^6$             | $6\times10^7$                    | $3.6\times10^9$                    | $8.64\times10^{10}$                    | $2.628\times10^{12}$                    | $3.154\times10^{13}$                    | $3.156\times10^{15}$                    |
| $n \lg n$  | $62746$                   | $2.801\times10^{6}$              | $1.334\times10^{8}$                | $2.755\times10^{9}$                    | $7.283\times10^{10}$                    | $7.977\times10^{11}$                    | $6.866\times10^{13}$                    |
| $n^2$      | $1000$                    | $7745$                           | $60000$                            | $293938$                               | $1621110$                               | $5616048$                               | $56178287$                              |
| $n^3$      | $100$                     | $391$                            | $1532$                             | $4420$                                 | $13799$                                 | $31595$                                 | $146682$                                |
| $2^n$      | $19$                      | $25$                             | $31$                               | $36$                                   | $41$                                    | $44$                                    | $51$                                    |
| $n!$       | $9$                       | $11$                             | $12$                               | $13$                                   | $15$                                    | $16$                                    | $17$                                    |
