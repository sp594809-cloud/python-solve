// ============================================================
// FSD-1 Practice Book (SEM-III 2026) - UNIT 1
// Web Architecture & HTTP Fundamentals
// Source: L.J. Institute of Engineering and Technology Practice Book
// ============================================================

var FSD1_UNIT_1 = {
  unit: 1,
  title: "UNIT 1 – Web Architecture & HTTP Fundamentals",
  mcqs: [
    {
      id: "FSD-001",
      srNo: 1,
      question: "How HTTP is a stateless protocol?",
      options: [
        "Client and server can relate two consecutive requests",
        "Client and server know each other only during current request",
        "Client and server do not retain information between various requests of web page.",
        "Only B & C"
      ],
      answer: "D",
      correct: "Only B & C",
      explanation: "HTTP is stateless because the client and server only know each other during the current request and do not retain information between requests."
    },
    {
      id: "FSD-002",
      srNo: 2,
      question: "URL stands for ______",
      options: [
        "Universal Resource Locator",
        "Uniform Resource Locator",
        "Universal Resource Library",
        "Uniform Resource Library"
      ],
      answer: "B",
      correct: "Uniform Resource Locator",
      explanation: "URL stands for Uniform Resource Locator."
    },
    {
      id: "FSD-003",
      srNo: 3,
      question: "Which of the following is the correct sequence to specify URL?",
      options: [
        "Method://Path/Host:Port",
        "Method://Host:Path/Port",
        "Method://Path:Port/Host",
        "Method://Host:Port/Path"
      ],
      answer: "D",
      correct: "Method://Host:Port/Path",
      explanation: "Correct URL format is Method://Host:Port/Path (e.g. https://example.com:443/page).",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-004",
      srNo: 4,
      question: "Which of the following is used to read an HTML page and render it?",
      options: ["Web server", "Web network", "Web browser", "Web matrix"],
      answer: "C",
      correct: "Web browser",
      explanation: "A web browser reads and renders HTML pages.",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-005",
      srNo: 5,
      question: "What does DNS stand for?",
      options: [
        "Domain Name Server",
        "Domain Name System",
        "Domain Network System",
        "Domain Node System"
      ],
      answer: "B",
      correct: "Domain Name System",
      explanation: "DNS stands for Domain Name System.",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-006",
      srNo: 6,
      question: "Which of the following points are for designing effective navigation?",
      options: [
        "Don't make your users guess",
        "Consistency is a key",
        "Add a Home button",
        "ALL"
      ],
      answer: "D",
      correct: "ALL",
      explanation: "All listed points help design effective navigation.",
      previousYear: "[LJU,2022]"
    },
    {
      id: "FSD-007",
      srNo: 7,
      question: "The first line of HTTP response message is called _____________",
      options: ["Request line", "Header line", "Status line", "Entity line"],
      answer: "C",
      correct: "Status line",
      explanation: "The first line of an HTTP response is the Status line.",
      previousYear: "[LJU,2024]"
    },
    {
      id: "FSD-008",
      srNo: 8,
      question: "Which of the following is present in both an HTTP request line and a status line?",
      options: ["HTTP version number", "URL", "Method", "None of the mentioned"],
      answer: "A",
      correct: "HTTP version number",
      explanation: "Both request line and status line include the HTTP version number.",
      previousYear: "[LJU,2025]"
    },
    {
      id: "FSD-009",
      srNo: 9,
      question: "Why HTTP is stateless?",
      options: [
        "It has less no of state.",
        "It does not maintain any connection information on previous transaction",
        "It is out of state",
        "It is less efficient"
      ],
      answer: "B",
      correct: "It does not maintain any connection information on previous transaction",
      explanation: "HTTP does not keep connection/state information from previous transactions."
    },
    {
      id: "FSD-010",
      srNo: 10,
      question: "The first network that planted seeds of internet was _______",
      options: ["NSFNet", "Vnet", "ARPANET", "interanet"],
      answer: "C",
      correct: "ARPANET",
      explanation: "ARPANET was the first network that led to the internet.",
      previousYear: "[LJU,2025]"
    },
    {
      id: "FSD-011",
      srNo: 11,
      question: "What does W3C stand for?",
      options: [
        "Web Council",
        "Work on Web Council",
        "World Wide Web Consortium",
        "World Wide Web Community"
      ],
      answer: "C",
      correct: "World Wide Web Consortium",
      explanation: "W3C is the World Wide Web Consortium."
    },
    {
      id: "FSD-012",
      srNo: 12,
      question: "What is 200 Ok HTTP response code?",
      options: [
        "request is unsuccessful",
        "request is successful",
        "request is pending",
        "there is an error"
      ],
      answer: "B",
      correct: "request is successful",
      explanation: "HTTP 200 OK means the request was successful."
    },
    {
      id: "FSD-013",
      srNo: 13,
      question: "A piece of icon or image on a web page associated with another webpage is called as _____",
      options: ["URL", "Hyperlink", "Plugin", "Extension"],
      answer: "B",
      correct: "Hyperlink",
      explanation: "A hyperlink associates an icon/image with another webpage."
    },
    {
      id: "FSD-014",
      srNo: 14,
      question: "HTTP stands for?",
      options: [
        "Hidden text transfer protocol",
        "Hyper text transfer protocol",
        "Hyper text transition protocol",
        "Hidden text transition protocol"
      ],
      answer: "B",
      correct: "Hyper text transfer protocol",
      explanation: "HTTP stands for HyperText Transfer Protocol."
    },
    {
      id: "FSD-015",
      srNo: 15,
      question: "Which organization was founded by Tim Berners Lee?",
      options: ["IBM", "W3C", "Microsoft", "Google"],
      answer: "B",
      correct: "W3C",
      explanation: "Tim Berners-Lee founded the World Wide Web Consortium (W3C)."
    },
    {
      id: "FSD-016",
      srNo: 16,
      question: "There are the following statements that are given below, which of them are correct about URL?\n1)URL stands for Universal Resource Locator.\n2)URL is a global address to access resources over the Web.\n3)The resources accessed by the URL can be an HTML file, CSS file, etc\n4)URL cannot use any protocol to access web resources.",
      options: ["1,2", "2,3", "1,2,3", "3,4"],
      answer: "B",
      correct: "2,3",
      explanation: "Statements 2 and 3 are correct. URL stands for Uniform (not Universal) Resource Locator, and it can use protocols."
    },
    {
      id: "FSD-017",
      srNo: 17,
      question: "A web page is located using a ________.",
      options: [
        "Universal Record Linking",
        "Universal Record Locator",
        "Uniform Resource Locator",
        "Uniformly Reachable Links"
      ],
      answer: "C",
      correct: "Uniform Resource Locator",
      explanation: "A web page is located using a Uniform Resource Locator (URL).",
      previousYear: "[LJU,2025]"
    },
    {
      id: "FSD-018",
      srNo: 18,
      question: "Which protocol is used to send information over the web?",
      options: ["SMTP", "FTP", "POP", "HTTP"],
      answer: "D",
      correct: "HTTP",
      explanation: "HTTP is the primary protocol used to send information over the web.",
      previousYear: "[LJU,2024]"
    },
    {
      id: "FSD-019",
      srNo: 19,
      question: "Which of the following HTTP status codes means \"Forbidden – client is authenticated but not allowed\"?",
      options: ["200", "301", "403", "500"],
      answer: "C",
      correct: "403",
      explanation: "HTTP 403 Forbidden means the client is authenticated but not allowed to access the resource."
    },
    {
      id: "FSD-020",
      srNo: 20,
      question: "In an HTTP request message, which line specifies the method, resource, and protocol version?",
      options: ["Status Line", "Request Line", "Header Line", "Entity Body"],
      answer: "B",
      correct: "Request Line",
      explanation: "The Request Line specifies the method, resource (URI), and protocol version."
    }
  ],
  coding: [
    {
      id: "FSD-C021",
      srNo: 21,
      marks: 3,
      topic: "URL",
      question: "Which are the parts of URL? State use of them.",
      solution: "Parts of a URL:\n1. Scheme/Protocol (e.g. https://) – defines how to access the resource\n2. Host/Domain (e.g. www.example.com) – the server location\n3. Port (e.g. :443) – optional, specifies the port number\n4. Path (e.g. /page/index.html) – location of the resource on the server\n5. Query string (e.g. ?id=1) – optional parameters\n6. Fragment (e.g. #section) – optional page section reference",
      explanation: "A complete URL has scheme, host, optional port, path, optional query and fragment."
    },
    {
      id: "FSD-C022",
      srNo: 22,
      marks: 3,
      topic: "Browser-Server",
      question: "How browser interacts with the server?",
      solution: "1. User enters URL in browser\n2. Browser resolves domain via DNS to get IP address\n3. Browser sends HTTP request to the server\n4. Server processes the request and sends HTTP response (HTML/CSS/JS etc.)\n5. Browser renders the response content\n6. For further actions (links, forms) the cycle repeats",
      explanation: "Browser uses DNS, then HTTP request/response cycle to load pages."
    },
    {
      id: "FSD-C023",
      srNo: 23,
      marks: 4,
      topic: "Web Design",
      question: "Which are the symptoms of bad design?",
      solution: "Symptoms of bad web design include:\n- Confusing or inconsistent navigation\n- Slow page load times\n- Poor readability (fonts, contrast)\n- Non-responsive layout on mobile\n- Broken links / missing images\n- Cluttered layout with too much content\n- Lack of clear call-to-action\n- Horizontal scrollbars on standard screens",
      explanation: "Bad design shows up as poor navigation, performance, readability and responsiveness."
    },
    {
      id: "FSD-C024",
      srNo: 24,
      marks: 5,
      topic: "Layout",
      question: "Differentiate between flexible and fixed page layout. Also justify Use of horizontal scrollbar should be avoided to have effective web design.",
      solution: "Fixed layout: Page width is fixed in pixels. Content does not reflow with window size. Can cause horizontal scroll on small screens.\n\nFlexible (fluid/responsive) layout: Width uses % or relative units. Content adapts to screen size.\n\nHorizontal scrollbar should be avoided because:\n- Users expect vertical scrolling only\n- Horizontal scroll hides content and hurts usability\n- Especially bad on mobile devices\n- Good design uses responsive techniques so content fits the viewport width",
      explanation: "Flexible layouts adapt; fixed can force horizontal scroll which harms UX."
    },
    {
      id: "FSD-C025",
      srNo: 25,
      marks: 5,
      topic: "Navigation",
      question: "What is navigation? Discuss the characteristics of effective navigation.",
      solution: "Navigation is the system of menus, links and controls that lets users move around a website and find content.\n\nCharacteristics of effective navigation:\n1. Consistency – same structure/labels across pages\n2. Clarity – clear labels, no jargon\n3. Visibility – easy to find (e.g. top or side menu)\n4. Feedback – current page highlighted\n5. Efficiency – few clicks to reach important pages\n6. Home link – always available\n7. Don't make users guess – predictable structure",
      explanation: "Effective navigation is consistent, clear, visible and predictable."
    }
  ]
};

console.log("FSD1 Unit 1 loaded:", FSD1_UNIT_1.mcqs.length, "MCQs,", FSD1_UNIT_1.coding.length, "coding/descriptive");
