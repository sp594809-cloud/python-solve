window.PROBABILITY_BOOK_DATA = {
  "chapter": 4,
  "title": "Correlation and Regression",
  "range": [
    281,
    344
  ],
  "questions": [
    {
      "id": 281,
      "unit": 4,
      "question": "The coefficient of correlation between two variables x and y is 0.48. The covariance is 36. The variance of x is 16. The standard deviation of y is:",
      "marks": 3,
      "page": 23,
      "steps": [
        {
          "title": "Use r = covariance/(σₓσᵧ)",
          "text": "Rearrange to isolate σᵧ.",
          "formula": "σᵧ = 36/(0.48×4) = 18.75"
        }
      ],
      "answer": "σᵧ = 18.75"
    },
    {
      "id": 282,
      "unit": 4,
      "question": "Calculate the correlation coefficient between the following values: X: 3, 5, 1, 7, 5. Y: 4, 3, 0, 8, 2",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 4.2; ȳ = 3.4"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=20.8; Σdy²=35.2; Σdxdy=21.6"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.798272"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "3",
            "5",
            "1",
            "7",
            "5"
          ],
          [
            "y",
            "4",
            "3",
            "0",
            "8",
            "2"
          ]
        ]
      },
      "answer": "0.798272"
    },
    {
      "id": 283,
      "unit": 4,
      "question": "The values of correlation coefficient lie in the interval:",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use the correlation bound",
          "text": "Correlation is a normalized covariance. Cauchy–Schwarz bounds its magnitude by one.",
          "formula": "−1 ≤ r ≤ 1"
        }
      ],
      "answer": "[−1, 1]"
    },
    {
      "id": 284,
      "unit": 4,
      "question": "What is the value of correlation coefficient which is not possible?",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Check the correlation bound",
          "text": "A valid correlation cannot exceed 1 in magnitude.",
          "formula": "|1.2| > 1; impossible"
        }
      ],
      "answer": "1.2"
    },
    {
      "id": 285,
      "unit": 4,
      "question": "If six hand writings were ranked by two judges in a competition and the rankings are as follows: Judge 6 5 4 3 2 1 1 Judge 1 2 3 4 5 6 2",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 6, 5, 4, 3, 2, 1; Rᵧ = 1, 2, 3, 4, 5, 6"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = -1"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            "x",
            "6",
            "5",
            "4",
            "3",
            "2",
            "1"
          ],
          [
            "y",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ]
        ]
      },
      "answer": "-1"
    },
    {
      "id": 286,
      "unit": 4,
      "question": "Calculate the rank correlation coefficient, if two judges in a beauty contest ranked the entries as follows Judge 1 2 3 4 5 X Judge 5 4 3 2 1 Y",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 1, 2, 3, 4, 5; Rᵧ = 5, 4, 3, 2, 1"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = -1"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
          [
            "y",
            "5",
            "4",
            "3",
            "2",
            "1"
          ]
        ]
      },
      "answer": "-1"
    },
    {
      "id": 287,
      "unit": 4,
      "question": "If the sum of the squares of difference of ranks of 6 candidates in two criteria is 21, the rank correlation coefficient is_______.",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Apply Spearman’s formula",
          "text": "n=6 and Σd²=21.",
          "formula": "ρ = 1 − 6Σd²/[n(n²−1)] = 1 − 126/(6×35) = 0.4"
        }
      ],
      "answer": "0.4"
    },
    {
      "id": 288,
      "unit": 4,
      "question": "The two lines of regression are 8𝑥 − 10𝑦 = 66 and 40𝑥 − 18𝑦 = 214, and variance of 𝑥 series is 9. What is the standard deviation of 𝑦 series?",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Identify the regression coefficients",
          "text": "The first line, y=0.8x−6.6, is y on x, so bᵧₓ=0.8. Rewrite the second as x=0.45y+5.35, so bₓᵧ=0.45.",
          "formula": "r²=bᵧₓbₓᵧ=0.36 ⇒ r=0.6"
        },
        {
          "title": "Relate r and the standard deviations",
          "text": "The slopes are positive, hence r is positive. Also r=bᵧₓσₓ/σᵧ.",
          "formula": "σᵧ=bᵧₓσₓ/r=0.8×3/0.6 = 4"
        }
      ],
      "answer": "σᵧ = 4",
      "note": "The two regression lines share the same positive intersection; the x-on-y slope comes from solving the second line for x."
    },
    {
      "id": 289,
      "unit": 4,
      "question": "The two regression lines are given by 𝑥 − 𝑦 + 1 = 0 and 2𝑥 − 𝑦 + 4 = 0. The two regression lines pass through the point:",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Find the intersection",
          "text": "A pair of regression lines intersects at the sample means. Solve y=x+1 and y=2x+4.",
          "formula": "x+1=2x+4 ⇒ x=−3; y=−2"
        }
      ],
      "answer": "(−3, −2)"
    },
    {
      "id": 290,
      "unit": 4,
      "question": "If two regression coefficients are -0.1 and -0.9, then correlation coefficient is,",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use the regression coefficient identity",
          "text": "r²=bₓᵧbᵧₓ; r has the coefficients’ common sign.",
          "formula": "r = −√(-0.1×-0.9) = -0.3"
        }
      ],
      "answer": "r = -0.3"
    },
    {
      "id": 291,
      "unit": 4,
      "question": "If two regression coefficients are -0.4 and -0.9, then the correlation coefficient is,",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use the regression coefficient identity",
          "text": "r²=bₓᵧbᵧₓ; r has the coefficients’ common sign.",
          "formula": "r = −√(-0.4×-0.9) = -0.6"
        }
      ],
      "answer": "r = -0.6"
    },
    {
      "id": 292,
      "unit": 4,
      "question": "If two regression coefficients are -0.8 and -0.2, what would be the value of coefficient of correlation?",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use the regression coefficient identity",
          "text": "r²=bₓᵧbᵧₓ; r has the coefficients’ common sign.",
          "formula": "r = −√(-0.8×-0.2) = -0.4"
        }
      ],
      "answer": "r = -0.4"
    },
    {
      "id": 293,
      "unit": 4,
      "question": "The two regression lines of a sample are 𝑥 + 6𝑦 = 6 and 3𝑥 + 2𝑦 = 10. Then coefficient of correlation between x and y is",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Read the coefficients",
          "text": "From x+6y=6, y on x has slope −1/6. From 3x+2y=10, x on y has slope −2/3.",
          "formula": "r²=(−1/6)(−2/3)=1/9; both slopes are negative, so r=−1/3"
        }
      ],
      "answer": "r = −1/3"
    },
    {
      "id": 294,
      "unit": 4,
      "question": "The two regression lines x and y always intersect at points",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use the defining property",
          "text": "Both regression equations pass through the sample mean point.",
          "formula": "Intersection = (x̄, ȳ)"
        }
      ],
      "answer": "(x̄, ȳ)"
    },
    {
      "id": 295,
      "unit": 4,
      "question": "If 𝑟 = 0 then the regression coefficients are",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Use r²=bₓᵧbᵧₓ",
          "text": "With zero correlation, each least-squares slope is zero (assuming nonzero variances).",
          "formula": "bₓᵧ=bᵧₓ=0"
        }
      ],
      "answer": "Both regression coefficients are 0"
    },
    {
      "id": 296,
      "unit": 4,
      "question": "The regression lines of a sample are 𝑥 + 6𝑦 = 6 and 3𝑥 + 2𝑦 = 10. Find the sample means 𝑥̅ and 𝑦̅.",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Solve the regression lines",
          "text": "Their intersection is the pair of sample means. Substitute y=1−x/6 into 3x+2y=10.",
          "formula": "3x+2−x/3=10 ⇒ x=3; y=0.5"
        }
      ],
      "answer": "x̄ = 3; ȳ = 0.5"
    },
    {
      "id": 297,
      "unit": 4,
      "question": "If the two lines of regression are 4𝑥 − 5𝑦 + 30 = 0 and 20𝑥 − 9𝑦 − 107 = 0 which of these are lines of regression of x on y?",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Read the slope for each direction",
          "text": "The x-on-y line, solved for x, has slope 9/20=0.45. The y-on-x line, solved for y, has slope 4/5=0.8.",
          "formula": "bₓᵧ=9/20; bᵧₓ=4/5; product = 0.36 ≤ 1"
        }
      ],
      "answer": "x on y: 20x−9y−107=0"
    },
    {
      "id": 298,
      "unit": 4,
      "question": "From the following paired data, calculate the regression coefficient bᵧₓ.",
      "marks": 1,
      "page": 24,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 6; ȳ = 8"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=40; Σdy²=20; Σdxdy=-26"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "6",
            "2",
            "10",
            "4",
            "8"
          ],
          [
            "y",
            "9",
            "11",
            "5",
            "8",
            "7"
          ]
        ]
      },
      "answer": "bᵧₓ = -0.65"
    },
    {
      "id": 299,
      "unit": 4,
      "question": "If the difference between the rank of the 4 observations is 2.5,0.5,−1.5, −1.5 then Spearman’s rank correlation coefficient equals to _____.",
      "marks": 3,
      "page": 24,
      "steps": [
        {
          "title": "Find Σd²",
          "text": "The four rank differences are 2.5, 0.5, −1.5, −1.5.",
          "formula": "Σd² = 2.5²+0.5²+1.5²+1.5²=11"
        },
        {
          "title": "Apply Spearman’s formula",
          "text": "",
          "formula": "ρ=1−6×11/[4(4²−1)]=−0.1"
        }
      ],
      "answer": "−0.1 (none of the listed choices)"
    },
    {
      "id": 300,
      "unit": 4,
      "question": "Obtain the two regression lines from the following data and hence find the correlation coefficient. x 6 2 10 4 8 y 9 11 5 8 7",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 6; ȳ = 8"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=40; Σdy²=20; Σdxdy=-26"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.919239"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 8 = -0.65(x − 6); x − 6 = -1.3(y − 8)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=-0.65; bₓᵧ=-1.3; r=-0.919239"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "6",
            "2",
            "10",
            "4",
            "8"
          ],
          [
            "y",
            "9",
            "11",
            "5",
            "8",
            "7"
          ]
        ]
      },
      "answer": "-0.919239; bᵧₓ=-0.65; bₓᵧ=-1.3"
    },
    {
      "id": 301,
      "unit": 4,
      "question": "Find the line of regression of y on x.",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 2.456; ȳ = 41.82"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=2.50852; Σdy²=255.268; Σdxdy=24.3994"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.964211"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 41.82 = 9.72661(x − 2.456); x − 2.456 = 0.0955835(y − 41.82)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=9.72661; bₓᵧ=0.0955835; r=0.964211"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "1.53",
            "1.78",
            "2.6",
            "2.95",
            "3.42"
          ],
          [
            "y",
            "33.5",
            "36.3",
            "40.0",
            "45.8",
            "53.5"
          ]
        ]
      },
      "answer": "0.964211; bᵧₓ=9.72661; bₓᵧ=0.0955835"
    },
    {
      "id": 302,
      "unit": 4,
      "question": "Calculate the coefficient of correlation and obtain the lines of regression for the following: X 1 2 3 4 5 6 7 8 9 Y 9 8 10 12 11 13 14 16 15",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 5; ȳ = 12"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=60; Σdy²=60; Σdxdy=57"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.95"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 12 = 0.95(x − 5); x − 5 = 0.95(y − 12)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=0.95; bₓᵧ=0.95; r=0.95"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "rows": [
          [
            "x",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ],
          [
            "y",
            "9",
            "8",
            "10",
            "12",
            "11",
            "13",
            "14",
            "16",
            "15"
          ]
        ]
      },
      "answer": "0.95; bᵧₓ=0.95; bₓᵧ=0.95"
    },
    {
      "id": 303,
      "unit": 4,
      "question": "Find correlation coefficient for the data given below. x 4 5 9 14 18 22 24 y 16 22 11 16 7 3 17",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 13.7143; ȳ = 13.1429"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=385.429; Σdy²=254.857; Σdxdy=-164.714"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.525546"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "4",
            "5",
            "9",
            "14",
            "18",
            "22",
            "24"
          ],
          [
            "y",
            "16",
            "22",
            "11",
            "16",
            "7",
            "3",
            "17"
          ]
        ]
      },
      "answer": "-0.525546"
    },
    {
      "id": 304,
      "unit": 4,
      "question": "Calculate the co-efficient of correlation between the given series of data for x and y in the following table: x 54 57 55 57 56 52 59 y 36 35 32 34 36 38 35",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 55.7143; ȳ = 35.1429"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=31.4286; Σdy²=20.8571; Σdxdy=-11.7143"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.457537"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "54",
            "57",
            "55",
            "57",
            "56",
            "52",
            "59"
          ],
          [
            "y",
            "36",
            "35",
            "32",
            "34",
            "36",
            "38",
            "35"
          ]
        ]
      },
      "answer": "-0.457537"
    },
    {
      "id": 305,
      "unit": 4,
      "question": "Let 3x + 2y = 26 and 6x + y = 31, be the two regression lines. (i) Find the mean value and correlation coefficient between x and y (ii) if the variance of y is 4 find the standard deviation of x.",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Regression lines intersect at the means.",
          "formula": "Solve 3x+2y=26 and 6x+y=31: x̄=4, ȳ=7"
        },
        {
          "title": "Identify the two slopes",
          "text": "Write one line as y on x and the other as x on y.",
          "formula": "y=13−1.5x ⇒ bᵧₓ=−1.5; x=31/6−y/6 ⇒ bₓᵧ=−1/6"
        },
        {
          "title": "Calculate r and σₓ",
          "text": "",
          "formula": "r=−√(1/4)=−0.5; σₓ=rσᵧ/bᵧₓ=(−0.5×2)/(−1.5)=2/3"
        }
      ],
      "answer": "Means (4,7); r=−0.5; σₓ=2/3"
    },
    {
      "id": 306,
      "unit": 4,
      "question": "Find the coefficient of correlation from the data: x = 7, 8, 9, 11, 10, 13, 12 y = 1, 2, 3, 4, 5, 6, 7",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 10; ȳ = 4"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=28; Σdy²=28; Σdxdy=26"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.928571"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "7",
            "8",
            "9",
            "11",
            "10",
            "13",
            "12"
          ],
          [
            "y",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
          ]
        ]
      },
      "answer": "0.928571"
    },
    {
      "id": 307,
      "unit": 4,
      "question": "Given 𝑛 = 10, 𝜎 = 5.4,𝜎 = 6.2 and the sum of 𝑋 𝑌 the product of the deviations from the mean of x and y is 66. Find correlation coefficient.",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Use the population-SD definition",
          "text": "The reported sum is Σ(x−x̄)(y−ȳ)=66 over n=10 pairs.",
          "formula": "r = Σdxdy/[nσₓσᵧ] = 66/[10×5.4×6.2] ≈ 0.19713"
        }
      ],
      "answer": "r ≈ 0.19713"
    },
    {
      "id": 308,
      "unit": 4,
      "question": "The coefficient of rank correlation of the marks obtained by 10 students in physics and chemistry was found to be 0.5. It was later discovered that the difference in ranks in the two subjects obtained by one of the students was wrongly taken as 3 instead of 7. Find the correct coefficient of the rank correlation.",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Undo the error in Σd²",
          "text": "Changing one difference from 3 to 7 adds 7²−3²=40.",
          "formula": "For n=10, old ρ=0.5 ⇒ old Σd²=10×99×(1−0.5)/6=82.5"
        },
        {
          "title": "Recalculate the coefficient",
          "text": "",
          "formula": "New Σd²=122.5; ρ=1−6×122.5/(10×99)≈0.25758"
        }
      ],
      "answer": "ρ ≈ 0.25758",
      "note": "The printed “difference” need not be an integer-compatible dataset after this correction; apply the standard textbook formula to the supplied coefficient."
    },
    {
      "id": 309,
      "unit": 4,
      "question": "Obtain the correlation coefficient for the following data: 𝑥 100 98 78 85 110 93 80 𝑦 85 90 70 72 95 81 74",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 92; ȳ = 81"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=814; Σdy²=544; Σdxdy=639"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.960261"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "100",
            "98",
            "78",
            "85",
            "110",
            "93",
            "80"
          ],
          [
            "y",
            "85",
            "90",
            "70",
            "72",
            "95",
            "81",
            "74"
          ]
        ]
      },
      "answer": "0.960261"
    },
    {
      "id": 310,
      "unit": 4,
      "question": "Calculate the correlation coefficient between x and y from the following data: 𝑛 = 10, ∑𝑥 = 140, ∑𝑦 = 150, ∑(𝑥 − 10)2 = 180, ∑(𝑦 − 15)2 = 215, ∑(𝑥 − 10)(𝑦 − 15) = 60.",
      "marks": 4,
      "page": 25,
      "steps": [
        {
          "title": "Recover centred sums",
          "text": "The listed sums are measured from 10 and 15. Here x̄=14 and ȳ=15.",
          "formula": "Σdx²=180−10(14−10)²=20; Σdy²=215"
        },
        {
          "title": "Recover the cross-product",
          "text": "",
          "formula": "Σdxdy=60−10(14−10)(15−15)=60"
        },
        {
          "title": "Calculate correlation",
          "text": "",
          "formula": "r=60/√(20×215)≈0.9150"
        }
      ],
      "answer": "r ≈ 0.9150"
    },
    {
      "id": 311,
      "unit": 4,
      "question": "The following table shows how 10 students were ranked according to their achievements in both the laboratory and lecture portions of a python course. Find the coefficient of rank correlation. Labo 8 3 9 2 7 10 4 6 1 5 rator y Lect 9 5 10 1 8 7 3 4 2 6 ure",
      "marks": 3,
      "page": 25,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 8, 3, 9, 2, 7, 10, 4, 6, 1, 5; Rᵧ = 9, 5, 10, 1, 8, 7, 3, 4, 2, 6"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.854545"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "8",
            "3",
            "9",
            "2",
            "7",
            "10",
            "4",
            "6",
            "1",
            "5"
          ],
          [
            "y",
            "9",
            "5",
            "10",
            "1",
            "8",
            "7",
            "3",
            "4",
            "2",
            "6"
          ]
        ]
      },
      "answer": "0.854545"
    },
    {
      "id": 312,
      "unit": 4,
      "question": "Find the correlation between temperature (°C) and ice-cream sales ($).",
      "marks": 3,
      "page": 26,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 18.675; ȳ = 402.417"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=176.983; Σdy²=174755; Σdxdy=5325.03"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.957507"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ],
        "rows": [
          [
            "x",
            "14.2",
            "16.4",
            "11.9",
            "15.2",
            "18.5",
            "22.1",
            "19.4",
            "25.1",
            "23.4",
            "18.1",
            "22.6",
            "17.2"
          ],
          [
            "y",
            "215",
            "325",
            "185",
            "332",
            "406",
            "522",
            "412",
            "614",
            "544",
            "421",
            "445",
            "408"
          ]
        ]
      },
      "answer": "0.957507"
    },
    {
      "id": 313,
      "unit": 4,
      "question": "Calculate the coefficient of correlation for the following pairs of x and y: 𝑥 17 19 21 26 20 28 26 27 𝑦 23 27 25 26 27 25 30 33",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 23; ȳ = 27"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=124; Σdy²=70; Σdxdy=48"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.515207"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            "x",
            "17",
            "19",
            "21",
            "26",
            "20",
            "28",
            "26",
            "27"
          ],
          [
            "y",
            "23",
            "27",
            "25",
            "26",
            "27",
            "25",
            "30",
            "33"
          ]
        ]
      },
      "answer": "0.515207"
    },
    {
      "id": 314,
      "unit": 4,
      "question": "Find the regression coefficient of y on x.",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 3; ȳ = 172"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=10; Σdy²=2080; Σdxdy=80"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rows": [
          [
            "x",
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
          [
            "y",
            "160",
            "180",
            "140",
            "180",
            "200"
          ]
        ]
      },
      "answer": "bᵧₓ = 8"
    },
    {
      "id": 315,
      "unit": 4,
      "question": "The ranks of same 16 students in Maths and MOS are as follows: Ma 1 1 1 1 1 1 1 1 2 3 4 5 6 7 8 9 ths 0 1 2 3 4 5 6 M 1 1 1 1 1 1 1 1 3 4 5 7 2 6 8 9 OS 0 1 5 4 2 6 3 Calculate the rank correlation coefficient for proficiencies of this group in given subjects.",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9; Rᵧ = 10, 11, 13, 14, 12, 16, 15, 8.5, 2, 3, 4, 6, 1, 5, 7, 8.5"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.859456"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16"
        ],
        "rows": [
          [
            "x",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ],
          [
            "y",
            "10",
            "11",
            "13",
            "14",
            "12",
            "16",
            "15",
            "9",
            "3",
            "4",
            "5",
            "7",
            "2",
            "6",
            "8",
            "9"
          ]
        ]
      },
      "answer": "0.859456",
      "note": "The PDF table digits for this 16-student question are wrapped across narrow cells. Verify the transcribed second row against the original before relying on this numerical coefficient."
    },
    {
      "id": 316,
      "unit": 4,
      "question": "Obtain the correlation coefficient for the following data: 𝑥 58 64 51 74 88 91 𝑦 12 18 15 41 46 52",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 71; ȳ = 30.6667"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=1316; Σdy²=1551.33; Σdxdy=1363"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.953927"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            "x",
            "58",
            "64",
            "51",
            "74",
            "88",
            "91"
          ],
          [
            "y",
            "12",
            "18",
            "15",
            "41",
            "46",
            "52"
          ]
        ]
      },
      "answer": "0.953927"
    },
    {
      "id": 317,
      "unit": 4,
      "question": "The following table gives the marks obtained by 11 students in Mathematics and Physics translation, Find the rank correlation coefficient. Mathema 4 4 5 6 7 8 8 8 8 9 9 tics 0 6 4 0 0 0 2 5 5 0 5 Physics 4 4 5 4 4 7 5 7 6 4 7 5 5 0 3 0 5 5 2 5 2 0",
      "marks": 3,
      "page": 26,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 1, 2, 3, 4, 5, 6, 7, 8.5, 8.5, 10, 11; Rᵧ = 4.5, 4.5, 6, 3, 1, 11, 7, 10, 8, 2, 9"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.360731"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "rows": [
          [
            "x",
            "40",
            "46",
            "54",
            "60",
            "70",
            "80",
            "82",
            "85",
            "85",
            "90",
            "95"
          ],
          [
            "y",
            "45",
            "45",
            "50",
            "43",
            "40",
            "75",
            "55",
            "72",
            "65",
            "42",
            "70"
          ]
        ]
      },
      "answer": "0.360731",
      "note": "The source table contains repeated scores, so average ranks are used. Read wrapped two-digit scores carefully when matching your question-paper copy."
    },
    {
      "id": 318,
      "unit": 4,
      "question": "Fit both regression lines for cell count y and hour x, then estimate y after 15 hours.",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 4.5; ȳ = 148.8"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=82.5; Σdy²=60875.6; Σdxdy=2228"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.994184"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 148.8 = 27.0061(x − 4.5); x − 4.5 = 0.0365992(y − 148.8)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=27.0061; bₓᵧ=0.0365992; r=0.994184"
        },
        {
          "title": "Estimate after 15 hours",
          "text": "Substitute x=15 into the y-on-x regression line.",
          "formula": "ŷ = 148.8 + 27.0061(15−4.5) = 432.364"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ],
          [
            "y",
            "43",
            "46",
            "82",
            "98",
            "123",
            "167",
            "199",
            "213",
            "245",
            "272"
          ]
        ]
      },
      "answer": "0.994184; bᵧₓ=27.0061; bₓᵧ=0.0365992"
    },
    {
      "id": 319,
      "unit": 4,
      "question": "Find the coefficient of correlation by spearman’s method from the following data: IQ 10 8 10 10 9 10 9 11 11 11 𝑋 6 6 0 1 9 3 7 3 2 0 𝑖 Hou 2 2 7 0 27 50 29 12 6 17 rs 𝑌 8 0 𝑖 The above data shows the correlation between the IQ of a person and number of hours spent in front of the TV per week by person.",
      "marks": 4,
      "page": 26,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 7, 1, 4, 5, 3, 6, 2, 10, 9, 8; Rᵧ = 3, 1, 8, 10, 4, 9, 7, 5, 2, 6"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = -0.030303"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "106",
            "86",
            "100",
            "101",
            "99",
            "103",
            "97",
            "113",
            "112",
            "110"
          ],
          [
            "y",
            "7",
            "0",
            "27",
            "50",
            "8",
            "29",
            "20",
            "12",
            "6",
            "17"
          ]
        ]
      },
      "answer": "-0.030303",
      "note": "The scan breaks the IQ digits between lines; this reconstruction combines the digits into whole IQ scores. Check the values against a clear copy if any differ."
    },
    {
      "id": 320,
      "unit": 4,
      "question": "Obtain the rank correlation coefficient from the following data: 𝑥 10 12 10 15 13 12 10 𝑦 14 13 12 10 13 12 11",
      "marks": 3,
      "page": 26,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 2, 4.5, 2, 7, 6, 4.5, 2; Rᵧ = 7, 5.5, 3.5, 1, 5.5, 3.5, 2"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = -0.24772"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "10",
            "12",
            "10",
            "15",
            "13",
            "12",
            "10"
          ],
          [
            "y",
            "14",
            "13",
            "12",
            "10",
            "13",
            "12",
            "11"
          ]
        ]
      },
      "answer": "-0.24772"
    },
    {
      "id": 321,
      "unit": 4,
      "question": "Following are the scores of ten students in class and their IQ: Sco 3 4 2 5 8 9 6 5 4 5 re 5 0 5 5 5 0 5 5 5 0 IQ 1 1 1 1 1 1 1 1 1 1 0 0 1 4 5 3 0 2 4 1 0 0 0 0 0 0 0 0 0 0 Calculate the rank correlation co-efficient between the score and IQ.",
      "marks": 4,
      "page": 27,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 2, 3, 1, 6.5, 9, 10, 8, 6.5, 4, 5; Rᵧ = 2.5, 2.5, 5.5, 8.5, 10, 7, 2.5, 2.5, 8.5, 5.5"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.359838"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "35",
            "40",
            "25",
            "55",
            "85",
            "90",
            "65",
            "55",
            "45",
            "50"
          ],
          [
            "y",
            "100",
            "100",
            "110",
            "140",
            "150",
            "130",
            "100",
            "100",
            "140",
            "110"
          ]
        ]
      },
      "answer": "0.359838",
      "note": "The PDF breaks each two- or three-digit score across table rows. The values are reconstructed by joining those printed digits; verify against your copy."
    },
    {
      "id": 322,
      "unit": 4,
      "question": "Nine competitors in the reality show India’s Got Talent ranked by two judges in the following order. Calculate the Spearman’s rank correlation coefficient. Competitors A B C D E F G H I Kiran Kher 1 6 2 7 3 8 4 9 5 Karan Johar 5 2 6 8 7 1 3 9 4",
      "marks": 3,
      "page": 27,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 1, 6, 2, 7, 3, 8, 4, 9, 5; Rᵧ = 5, 2, 6, 8, 7, 1, 3, 9, 4"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.0333333"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "rows": [
          [
            "x",
            "1",
            "6",
            "2",
            "7",
            "3",
            "8",
            "4",
            "9",
            "5"
          ],
          [
            "y",
            "5",
            "2",
            "6",
            "8",
            "7",
            "1",
            "3",
            "9",
            "4"
          ]
        ]
      },
      "answer": "0.0333333"
    },
    {
      "id": 323,
      "unit": 4,
      "question": "Find the correlation coefficient from the following data: 5 5 5 6 6 6 6 6 6 5 X 0 0 5 0 5 5 5 0 0 0 1 1 1 1 1 1 1 1 1 1 Y 1 3 4 6 6 5 5 4 3 3",
      "marks": 4,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 57; ȳ = 14"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=410; Σdy²=22; Σdxdy=80"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.842339"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "50",
            "50",
            "55",
            "60",
            "65",
            "65",
            "65",
            "60",
            "50",
            "50"
          ],
          [
            "y",
            "11",
            "13",
            "14",
            "16",
            "16",
            "15",
            "15",
            "14",
            "13",
            "13"
          ]
        ]
      },
      "answer": "0.842339"
    },
    {
      "id": 324,
      "unit": 4,
      "question": "Raw material used in the production of a synthetic fibre is stored in a place which has no humidity control. Measurements of the relative humidity in the storage place and the moisture content of a sample of the raw material (both in %) on 7 days yielded the following results: Hu mid 42 35 50 43 48 62 31 ity (x): Mo istu re 12 8 14 9 11 16 7 con tent (y): Find the lines of regression of y on x and x on y.",
      "marks": 4,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 44.4286; ȳ = 11"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=629.714; Σdy²=64; Σdxdy=187"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.931494"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 11 = 0.29696(x − 44.4286); x − 44.4286 = 2.92188(y − 11)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=0.29696; bₓᵧ=2.92188; r=0.931494"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "42",
            "35",
            "50",
            "43",
            "48",
            "62",
            "31"
          ],
          [
            "y",
            "12",
            "8",
            "14",
            "9",
            "11",
            "16",
            "7"
          ]
        ]
      },
      "answer": "0.931494; bᵧₓ=0.29696; bₓᵧ=2.92188"
    },
    {
      "id": 325,
      "unit": 4,
      "question": "Compute the coefficient of correlation between X and Y using the following data: X 2 4 5 6 8 11 Y 18 12 10 8 7 5",
      "marks": 3,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 6; ȳ = 10"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=50; Σdy²=106; Σdxdy=-67"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.920316"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            "x",
            "2",
            "4",
            "5",
            "6",
            "8",
            "11"
          ],
          [
            "y",
            "18",
            "12",
            "10",
            "8",
            "7",
            "5"
          ]
        ]
      },
      "answer": "-0.920316"
    },
    {
      "id": 326,
      "unit": 4,
      "question": "Find the Correlation coefficient and lines of regression from the following data: x 57 58 59 59 60 61 62 64 y 67 68 65 68 72 72 69 71 Find the value of y when x = 66",
      "marks": 4,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 60; ȳ = 69"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=36; Σdy²=44; Σdxdy=24"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.603023"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 69 = 0.666667(x − 60); x − 60 = 0.545455(y − 69)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=0.666667; bₓᵧ=0.545455; r=0.603023"
        },
        {
          "title": "Estimate y at x=66",
          "text": "Use the y-on-x regression line.",
          "formula": "ŷ=69+0.666667(66−60)=73"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            "x",
            "57",
            "58",
            "59",
            "59",
            "60",
            "61",
            "62",
            "64"
          ],
          [
            "y",
            "67",
            "68",
            "65",
            "68",
            "72",
            "72",
            "69",
            "71"
          ]
        ]
      },
      "answer": "0.603023; bᵧₓ=0.666667; bₓᵧ=0.545455"
    },
    {
      "id": 327,
      "unit": 4,
      "question": "Obtain both the lines of regression for the following data and hence find the correlation coefficient. 𝑥 60 34 40 50 45 41 22 43 𝑦 75 32 34 40 45 33 12 30",
      "marks": 4,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 41.875; ȳ = 37.625"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=866.875; Σdy²=2237.88; Σdxdy=1275.62"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.915855"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 37.625 = 1.47152(x − 41.875); x − 41.875 = 0.570016(y − 37.625)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=1.47152; bₓᵧ=0.570016; r=0.915855"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            "x",
            "60",
            "34",
            "40",
            "50",
            "45",
            "41",
            "22",
            "43"
          ],
          [
            "y",
            "75",
            "32",
            "34",
            "40",
            "45",
            "33",
            "12",
            "30"
          ]
        ]
      },
      "answer": "0.915855; bᵧₓ=1.47152; bₓᵧ=0.570016"
    },
    {
      "id": 328,
      "unit": 4,
      "question": "Obtain both the lines of regression for the following data and hence find the correlation coefficient. 𝑥 25 28 35 32 31 36 29 38 34 32 𝑦 43 46 49 41 36 32 31 30 33 39",
      "marks": 3,
      "page": 27,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 32; ȳ = 38"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=140; Σdy²=398; Σdxdy=-93"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.393983"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 38 = -0.664286(x − 32); x − 32 = -0.233668(y − 38)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=-0.664286; bₓᵧ=-0.233668; r=-0.393983"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "25",
            "28",
            "35",
            "32",
            "31",
            "36",
            "29",
            "38",
            "34",
            "32"
          ],
          [
            "y",
            "43",
            "46",
            "49",
            "41",
            "36",
            "32",
            "31",
            "30",
            "33",
            "39"
          ]
        ]
      },
      "answer": "-0.393983; bᵧₓ=-0.664286; bₓᵧ=-0.233668"
    },
    {
      "id": 329,
      "unit": 4,
      "question": "Obtain the two lines of regression for the following data: Sal 190 240 250 300 310 335 300 es Ad vert isin g 5 10 15 20 20 30 30 exp end itur e",
      "marks": 4,
      "page": 28,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 275; ȳ = 18.5714"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=15150; Σdy²=535.714; Σdxdy=2600"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.912642"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 18.5714 = 0.171617(x − 275); x − 275 = 4.85333(y − 18.5714)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=0.171617; bₓᵧ=4.85333; r=0.912642"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "190",
            "240",
            "250",
            "300",
            "310",
            "335",
            "300"
          ],
          [
            "y",
            "5",
            "10",
            "15",
            "20",
            "20",
            "30",
            "30"
          ]
        ]
      },
      "answer": "0.912642; bᵧₓ=0.171617; bₓᵧ=4.85333"
    },
    {
      "id": 330,
      "unit": 4,
      "question": "The following data gives the age and blood pressure (BP) of 10 sports persons. N a A B C D E F G H I J m e A ge 42 36 55 58 35 65 60 50 48 51 ( X) B P 11 10 10 10 11 98 93 85 82 99 (Y 0 5 8 2 8 ) (1) Find the regression equation of 𝑌 on 𝑋 and 𝑋 on 𝑌. (2) Find the correlation coefficient.",
      "marks": 4,
      "page": 28,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 50; ȳ = 99.7"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=904; Σdy²=1098.1; Σdxdy=-263"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = -0.263968"
        },
        {
          "title": "Find both regression lines",
          "text": "Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².",
          "formula": "y − 99.7 = -0.290929(x − 50); x − 50 = -0.239505(y − 99.7)"
        },
        {
          "title": "Check the correlation",
          "text": "For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.",
          "formula": "bᵧₓ=-0.290929; bₓᵧ=-0.239505; r=-0.263968"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "42",
            "36",
            "55",
            "58",
            "35",
            "65",
            "60",
            "50",
            "48",
            "51"
          ],
          [
            "y",
            "98",
            "93",
            "110",
            "85",
            "108",
            "102",
            "82",
            "102",
            "118",
            "99"
          ]
        ]
      },
      "answer": "-0.263968; bᵧₓ=-0.290929; bₓᵧ=-0.239505",
      "note": "The blood-pressure digits are split across narrow PDF table cells; transcribe them from a clear copy if any joined value differs."
    },
    {
      "id": 331,
      "unit": 4,
      "question": "Find the regression equation showing the capacity utilization on production from the following data: Standard Average Deviation Production (in lakh 35.6 10.5 units) Capacity utilization 84.8 8.5 (in %) Correlation 𝑟 = 0.62 Coefficient Estimate the production when capacity utilization is 70%.",
      "marks": 4,
      "page": 28,
      "steps": [
        {
          "title": "Use the regression of production on utilization",
          "text": "x=utilization (mean 84.8, SD 8.5); y=production (mean 35.6, SD 10.5).",
          "formula": "bᵧₓ = rσᵧ/σₓ = 0.62×10.5/8.5 ≈ 0.76588"
        },
        {
          "title": "Predict at x=70",
          "text": "",
          "formula": "ŷ=35.6+0.76588(70−84.8)≈24.269"
        }
      ],
      "answer": "Production at 70% utilization ≈ 24.269 lakh units"
    },
    {
      "id": 332,
      "unit": 4,
      "question": "From the following results, obtain the two regression equations and estimate the yield when the rainfall is 29 cm and the rainfall, when the yield is 600 kg: Yield in kg. Rainfall in cm Mean 508.4 26.7 SD 36.8 4.6 The coefficient of correlation between yield and rainfall is 0.52.",
      "marks": 4,
      "page": 28,
      "steps": [
        {
          "title": "Find the regression slopes",
          "text": "x=rainfall, y=yield.",
          "formula": "bᵧₓ=0.52×36.8/4.6=4.16; bₓᵧ=0.52×4.6/36.8=0.065"
        },
        {
          "title": "Estimate yield from 29 cm",
          "text": "",
          "formula": "ŷ=508.4+4.16(29−26.7)=517.968 kg"
        },
        {
          "title": "Estimate rainfall for 600 kg",
          "text": "",
          "formula": "x̂=26.7+0.065(600−508.4)=32.654 cm"
        }
      ],
      "answer": "Yield ≈ 517.968 kg; rainfall ≈ 32.654 cm"
    },
    {
      "id": 333,
      "unit": 4,
      "question": "Given that 𝑛 = 25, ∑𝑋 = 125,∑𝑋2 = 650,∑𝑌 = 100,∑𝑌2 = 460 𝑎𝑛𝑑 ∑𝑋𝑌 = 508. It was later discovered at the time of checking that he had copied down two pairs as (6,14) and (8,6) while the correct pairs were (8,12) and (6,8). Obtain the correct value of the correlation coefficient.",
      "marks": 3,
      "page": 28,
      "steps": [
        {
          "title": "Correct the totals",
          "text": "Replace wrong pairs (6,14),(8,6) with (8,12),(6,8). Σx and Σy stay unchanged; Σx² also stays unchanged.",
          "formula": "Σx=125; Σy=100; Σx²=650; corrected Σy²=436; corrected Σxy=520"
        },
        {
          "title": "Apply the product-moment formula",
          "text": "",
          "formula": "Sxx=650−125²/25=25; Syy=436−100²/25=36; Sxy=520−125×100/25=20"
        },
        {
          "title": "Calculate correlation",
          "text": "",
          "formula": "r=20/√(25×36)=2/3"
        }
      ],
      "answer": "r = 2/3"
    },
    {
      "id": 334,
      "unit": 4,
      "question": "From the following data of the marks obtained by 8 students in Computer Networking (CN) and Compiler Design (CD) papers, compute rank coefficient of correlation. CN 15 20 28 12 40 60 20 80 CD 40 30 50 30 20 10 30 60",
      "marks": 4,
      "page": 29,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 2, 3.5, 5, 1, 6, 7, 3.5, 8; Rᵧ = 6, 4, 7, 4, 2, 1, 4, 8"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            "x",
            "15",
            "20",
            "28",
            "12",
            "40",
            "60",
            "20",
            "80"
          ],
          [
            "y",
            "40",
            "30",
            "50",
            "30",
            "20",
            "10",
            "30",
            "60"
          ]
        ]
      },
      "answer": "0"
    },
    {
      "id": 335,
      "unit": 4,
      "question": "The coefficient of rank correlation of marks obtained by 10 students in English and Economics was found to be 0.6. It was later discovered that the difference in ranks in the two subjects obtained by one of the students was wrongly taken as 7 instead of 1. Find the correct coefficient of rank correlation.",
      "marks": 4,
      "page": 29,
      "steps": [
        {
          "title": "Correct Σd²",
          "text": "For 10 students the original ρ=.6 gives Σd²=66. Correcting d=7 to d=1 reduces this sum by 48.",
          "formula": "Σd²(new)=66−(49−1)=18"
        },
        {
          "title": "Recompute Spearman correlation",
          "text": "",
          "formula": "ρ=1−6×18/[10(10²−1)]≈0.89091"
        }
      ],
      "answer": "ρ ≈ 0.89091"
    },
    {
      "id": 336,
      "unit": 4,
      "question": "Compute the coefficient of rank correlation between Economics marks and Statistics marks as given below: Econ 80 56 50 48 50 62 60 omic s mark s Stati 90 75 75 65 65 50 65 stics mark s",
      "marks": 4,
      "page": 29,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 7, 4, 2.5, 1, 2.5, 6, 5; Rᵧ = 7, 5.5, 5.5, 3, 3, 1, 3"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.160492"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "80",
            "56",
            "50",
            "48",
            "50",
            "62",
            "60"
          ],
          [
            "y",
            "90",
            "75",
            "75",
            "65",
            "65",
            "50",
            "65"
          ]
        ]
      },
      "answer": "0.160492"
    },
    {
      "id": 337,
      "unit": 4,
      "question": "In partially destroyed laboratory record of an analysis of correlation data, the following results are eligible. • Variance of x, 2 = 9 x • Two line of regressions: 8𝑥 − 10𝑦 + 66 = 0, 40𝑥 − 18𝑦 = 214. From the above obtain mean values of x and y, the standard deviation of y and correlation coefficient.",
      "marks": 4,
      "page": 29,
      "steps": [
        {
          "title": "Find the common intersection",
          "text": "From the lines y=0.8x+6.6 and x=0.45y+5.35, solve their intersection.",
          "formula": "x̄=13; ȳ=17"
        },
        {
          "title": "Identify regression slopes",
          "text": "",
          "formula": "bᵧₓ=0.8; bₓᵧ=0.45; r=+√(0.36)=0.6"
        },
        {
          "title": "Recover σᵧ",
          "text": "Given σₓ=3 and r=bᵧₓσₓ/σᵧ.",
          "formula": "σᵧ=0.8×3/0.6=4"
        }
      ],
      "answer": "x̄ = 13; ȳ = 17; σᵧ = 4; r = 0.6",
      "note": "Check: substitute (−5,2.6) in both lines; it satisfies the printed pair."
    },
    {
      "id": 338,
      "unit": 4,
      "question": "Psychological tests of intelligence and of engineering ability were applied to 10 students as per the following data. Find the coefficient of correlation. In te 1 1 1 1 1 lli 9 9 9 9 9 0 0 0 0 0 ge 9 8 6 3 2 5 4 2 1 0 nc e ab 1 1 1 1 9 9 9 9 9 9 ili 0 0 0 0 8 5 6 2 7 4 ty 1 3 0 4",
      "marks": 4,
      "page": 29,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 99; ȳ = 99"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=170; Σdy²=110; Σdxdy=62"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.453389"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "105",
            "104",
            "102",
            "101",
            "100",
            "99",
            "98",
            "96",
            "93",
            "92"
          ],
          [
            "y",
            "101",
            "103",
            "100",
            "98",
            "95",
            "96",
            "104",
            "102",
            "97",
            "94"
          ]
        ]
      },
      "answer": "0.453389"
    },
    {
      "id": 339,
      "unit": 4,
      "question": "In a college, IT department has arranged one competition for IT students to develop an efficient program to solve a problem. Ten students took part in the competition and ranked by two judges given in the following table. Find the degree of agreement between the two judges using Rank correlation coefficient. (J=Judge) J-1 3 5 8 4 7 10 2 1 6 9 J-2 6 4 9 8 1 2 3 10 5 7",
      "marks": 3,
      "page": 29,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 3, 5, 8, 4, 7, 10, 2, 1, 6, 9; Rᵧ = 6, 4, 9, 8, 1, 2, 3, 10, 5, 7"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = -0.29697"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "rows": [
          [
            "x",
            "3",
            "5",
            "8",
            "4",
            "7",
            "10",
            "2",
            "1",
            "6",
            "9"
          ],
          [
            "y",
            "6",
            "4",
            "9",
            "8",
            "1",
            "2",
            "3",
            "10",
            "5",
            "7"
          ]
        ]
      },
      "answer": "-0.29697"
    },
    {
      "id": 340,
      "unit": 4,
      "question": "Calculate the Co-efficient of correlation from the following data: x 12 9 8 10 11 13 7 y 14 8 6 9 11 12 3",
      "marks": 3,
      "page": 30,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 10; ȳ = 9"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=28; Σdy²=84; Σdxdy=46"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.948504"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rows": [
          [
            "x",
            "12",
            "9",
            "8",
            "10",
            "11",
            "13",
            "7"
          ],
          [
            "y",
            "14",
            "8",
            "6",
            "9",
            "11",
            "12",
            "3"
          ]
        ]
      },
      "answer": "0.948504"
    },
    {
      "id": 341,
      "unit": 4,
      "question": "Calculate the correlation coefficient between the following values of demand and the corresponding price of a commodity: De ma 65 66 67 67 68 69 70 72 nd Pri 67 68 65 68 72 72 69 71 ce",
      "marks": 4,
      "page": 30,
      "steps": [
        {
          "title": "Find the means",
          "text": "Calculate x̄ and ȳ.",
          "formula": "x̄ = 68; ȳ = 69"
        },
        {
          "title": "Find the centred sums",
          "text": "For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.",
          "formula": "Σdx²=36; Σdy²=44; Σdxdy=24"
        },
        {
          "title": "Calculate Pearson correlation",
          "text": "Divide the cross-product sum by the geometric mean of the two sums of squares.",
          "formula": "r = Σdxdy / √(Σdx²Σdy²) = 0.603023"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rows": [
          [
            "x",
            "65",
            "66",
            "67",
            "67",
            "68",
            "69",
            "70",
            "72"
          ],
          [
            "y",
            "67",
            "68",
            "65",
            "68",
            "72",
            "72",
            "69",
            "71"
          ]
        ]
      },
      "answer": "0.603023"
    },
    {
      "id": 342,
      "unit": 4,
      "question": "Ten competitors in a musical test were ranked by the three judges A, B and C in the following order: R 1 6 5 1 3 2 4 9 7 8 an 0 k b y A R 3 5 8 4 7 1 2 1 6 9 an 0 k b y B R 6 4 9 8 1 2 3 1 5 7 an 0 k b y C Using the rank correlation method, find which pair of judges has the nearest approach to common liking in music.",
      "marks": 3,
      "page": 30,
      "steps": [
        {
          "title": "Rank each judge pair",
          "text": "Compute Pearson correlation of the two rank lists. A higher positive coefficient means closer agreement.",
          "formula": "A & B=-0.212121, A & C=0.636364, B & C=-0.29697"
        },
        {
          "title": "Choose the nearest agreement",
          "text": "",
          "formula": "Largest correlation: A & C"
        }
      ],
      "table": {
        "headers": [
          "Judge pair",
          "A–B",
          "A–C",
          "B–C"
        ],
        "rows": [
          [
            "ρ",
            "-0.212121",
            "0.636364",
            "-0.29697"
          ]
        ]
      },
      "answer": "A & C"
    },
    {
      "id": 343,
      "unit": 4,
      "question": "Obtain the rank correlation coefficient from the following data: x 10 12 18 18 15 40 y 12 18 25 25 50 25",
      "marks": 3,
      "page": 30,
      "steps": [
        {
          "title": "Assign ranks",
          "text": "Rank 1 means the smallest value. Equal values receive their average rank.",
          "formula": "Rₓ = 1, 2, 4.5, 4.5, 3, 6; Rᵧ = 1, 2, 4, 4, 6, 4"
        },
        {
          "title": "Correlate the ranks",
          "text": "For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.",
          "formula": "ρ = corr(Rₓ,Rᵧ) = 0.585239"
        }
      ],
      "table": {
        "headers": [
          "Variable",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "rows": [
          [
            "x",
            "10",
            "12",
            "18",
            "18",
            "15",
            "40"
          ],
          [
            "y",
            "12",
            "18",
            "25",
            "25",
            "50",
            "25"
          ]
        ]
      },
      "answer": "0.585239"
    },
    {
      "id": 344,
      "unit": 4,
      "question": "If the two lines of regression are 4𝑥 − 5𝑦 + 30 = 0 and 20𝑥 − 9𝑦 − 107 = 0, which of these are lines of regression of 𝑥 on 𝑦 and 𝑦 on 𝑥? Find 𝑟 and 𝜎 𝑦 when 𝜎 = 3. 𝑥",
      "marks": 4,
      "page": 30,
      "steps": [
        {
          "title": "Identify each regression direction",
          "text": "Solve each equation for its dependent variable.",
          "formula": "y=(4/5)x+6 ⇒ bᵧₓ=0.8; x=(9/20)y+107/20 ⇒ bₓᵧ=0.45"
        },
        {
          "title": "Find r and σᵧ",
          "text": "",
          "formula": "r=+√(0.8×0.45)=0.6; σᵧ=bᵧₓσₓ/r=0.8×3/0.6=4"
        }
      ],
      "answer": "x on y: 20x−9y−107=0; y on x: 4x−5y+30=0; r=0.6; σᵧ=4"
    }
  ]
};
