// FSD-1 Unit 2 - HTML (batch 1 of full set)
var FSD1_UNIT_2 = {
  unit: 2,
  title: "UNIT 2 – HTML Basics, Lists, Tables, Media & Semantic Elements",
  mcqs: [
    {
      id: "FSD-026", srNo: 26,
      question: "Which attribute of <meta> tag is used to automatically refresh the page?",
      options: ["http-equiv", "content", "name", "refresh"],
      answer: "A", correct: "http-equiv",
      explanation: "http-equiv=\"refresh\" is used with content to auto-refresh the page."
    },
    {
      id: "FSD-027", srNo: 27,
      question: "Which tag is used to display power in expression (A+B)²?",
      options: ["<big>", "<sub>", "<sup>", "<superscript>"],
      answer: "C", correct: "<sup>",
      explanation: "<sup> renders superscript text for powers/exponents."
    },
    {
      id: "FSD-028", srNo: 28,
      question: "Which is the correct HTML statement to display formula in a paragraph? (C₂H₅O₂)²",
      options: [
        "(C<sub>2</sub>H<sub>5</sub>O<sub>2</sub>)<sup>2</sup>",
        "(C<sub>2</sub>H<sub>5</sub>O<sub>2</sub>)<sup>2</sup>",
        "(C<sup>2</sup>H<sub>5</sub>O<sub>2</sub>)<sup>2</sup>",
        "(C<sup>2</sup>H<sub>5</sub>O<sub>2</sub>)<sup>2</sup>"
      ],
      answer: "A", correct: "(C<sub>2</sub>H<sub>5</sub>O<sub>2</sub>)<sup>2</sup>",
      explanation: "Use <sub> for subscripts and <sup> for the outer power.",
      previousYear: "[LJU,2025]"
    },
    {
      id: "FSD-029", srNo: 29,
      question: "In HTML, which attribute is used to create a link that opens in a new window/tab?",
      options: ["src=\"_blank\"", "alt=\"_blank\"", "target=\"_self\"", "target=\"_blank\""],
      answer: "D", correct: "target=\"_blank\"",
      explanation: "target=\"_blank\" opens the link in a new tab/window.",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-030", srNo: 30,
      question: "Which of the following is way to start an ordered list with capital alphabets (C)?",
      options: [
        "<ol type=\"I\" start=\"3\">",
        "<ol type=\"A\" start=\"3\">",
        "<ol type=\"a\" new=\"3\">",
        "<ol type=\"A\" begin=\"4\">"
      ],
      answer: "B", correct: "<ol type=\"A\" start=\"3\">",
      explanation: "type=\"A\" for capital letters; start=\"3\" begins at C.",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-031", srNo: 31,
      question: "______ attribute is used to define the space between a table cell's border and the content present in it.",
      options: ["caption", "cellspacing", "cellpadding", "margin"],
      answer: "C", correct: "cellpadding",
      explanation: "cellpadding sets space between cell border and content."
    },
    {
      id: "FSD-032", srNo: 32,
      question: "Which of the following is way to start an ordered list with capital alphabets with the count of numeric value 4?",
      options: [
        "<ol type=\"I\" start=\"4\">",
        "<ol type=\"a\" new=\"4\">",
        "<ol type=\"A\" start=\"4\">",
        "<ol type=\"A\" begin=\"4\">"
      ],
      answer: "C", correct: "<ol type=\"A\" start=\"4\">",
      explanation: "type=\"A\" start=\"4\" starts ordered list at letter D."
    },
    {
      id: "FSD-033", srNo: 33,
      question: "Which of the following type is not supported in <ol> tag?",
      options: ["type=\"I\"", "type=\"A\"", "type=\"S\"", "type=\"a\""],
      answer: "C", correct: "type=\"S\"",
      explanation: "Valid ol types: 1, a, A, i, I. Type \"S\" is not supported."
    },
    {
      id: "FSD-034", srNo: 34,
      question: "Which of the following is the correct specification of <meta> tag?",
      options: [
        "<meta name=\"http-equiv\" content=\"refresh\" time=\"8\"/>",
        "<meta http-equiv=\"refresh\" content=\"8\"/>",
        "<meta name=\"description\" value=\"Full Stack\"/>",
        "<meta name=\"keyword\" value=\"Full Stack\"/>"
      ],
      answer: "B", correct: "<meta http-equiv=\"refresh\" content=\"8\"/>",
      explanation: "Correct syntax uses http-equiv=\"refresh\" and content for the delay.",
      previousYear: "[LJU,2025]"
    },
    {
      id: "FSD-035", srNo: 35,
      question: "What is the output of following code: <span style=\"color:blue; background-color:yellow;font-size:10px\"> blue eyes </span>",
      options: [
        "blue eyes is written in blue font color having yellow background & font is of 10px size.",
        "Blue eyes is written as simple word having blue background & font is of 10px size.",
        "Blue eyes is written in yellow color having blue background & font is of 10px size.",
        "Blue eyes is written in blue font color having yellow background only."
      ],
      answer: "A", correct: "blue eyes is written in blue font color having yellow background & font is of 10px size.",
      explanation: "Inline style applies color, background-color and font-size as specified."
    },
    {
      id: "FSD-036", srNo: 36,
      question: "Which is allowed attribute value to start numbers from 3 in ordered list?",
      options: ["<ol start=\"3\">", "<ol starting=\"3\">", "<ol s=\"3\">", "<ol start no=\"3\">"],
      answer: "A", correct: "<ol start=\"3\">",
      explanation: "The start attribute sets the starting number of an ordered list."
    },
    {
      id: "FSD-037", srNo: 37,
      question: "If the image you are loading in the web page is not available, then you want a text to appear in the image placeholder, which attribute lets you define this text?",
      options: ["src", "align", "text", "alt"],
      answer: "D", correct: "alt",
      explanation: "alt provides alternative text when the image cannot be displayed."
    },
    {
      id: "FSD-038", srNo: 38,
      question: "The correct sequence of HTML tags for starting a web page is ______",
      options: [
        "head, title, html, body",
        "html, body, title, head",
        "html, head, title, body",
        "html, head, body, title"
      ],
      answer: "C", correct: "html, head, title, body",
      explanation: "Standard structure: <html><head><title>...</title></head><body>..."
    },
    {
      id: "FSD-039", srNo: 39,
      question: "Which tag is used to render bold text?",
      options: ["<em>", "<b>", "<strong>", "Both B and C"],
      answer: "D", correct: "Both B and C",
      explanation: "Both <b> and <strong> can render bold text (<strong> also implies importance)."
    },
    {
      id: "FSD-040", srNo: 40,
      question: "Which tag is used to insert largest heading?",
      options: ["<h1>", "<h2>", "<h3>", "<h4>"],
      answer: "A", correct: "<h1>",
      explanation: "<h1> is the largest heading; <h6> is the smallest."
    }
  ],
  coding: []
};
console.log("FSD1 Unit 2 loaded:", FSD1_UNIT_2.mcqs.length, "MCQs");
