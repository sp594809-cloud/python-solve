// Full SEM III unit 10; question numbers match the 2026 source PDF.
var SEM3_UNIT_10 = {
  "unit": 10,
  "title": "Unit 10 — Matplotlib and Streamlit",
  "mcqs": [
    {
      "id": "S3-674",
      "srNo": 674,
      "question": "In the following syntax given below:\nplt.plot(ypoints,’o:r’)\nWhat does this ‘o:r’ stands for?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "o (marker), : (color) and r (line)",
        "o (color), : (line) and r (marker)",
        "o (line), : (marker) and r (color)",
        "o (marker), : (line) and r (color)"
      ],
      "answer": "D",
      "correct": "o (marker), : (line) and r (color)",
      "explanation": "A compact plot format combines marker o (circle), linestyle : (dotted) and color r (red)."
    },
    {
      "id": "S3-675",
      "srNo": 675,
      "question": "In the given chart, points surrounded with circle is called",
      "marks": 1.0,
      "sourcePage": 56,
      "figures": [
        "figures/q675-p56-1.png"
      ],
      "options": [
        "Labels",
        "Ticks",
        "Markers",
        "Series"
      ],
      "answer": "C",
      "correct": "Markers",
      "explanation": "Markers identify the individual data points on a plotted line."
    },
    {
      "id": "S3-676",
      "srNo": 676,
      "question": "In the given syntax what does this ms indicates?\nplt.plot(ypoints,marker=’o’,ms=10)",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Markerborder",
        "Markercolor",
        "Markershape",
        "Markersize"
      ],
      "answer": "D",
      "correct": "Markersize",
      "explanation": "ms is shorthand for markersize, controlling marker size in points."
    },
    {
      "id": "S3-677",
      "srNo": 677,
      "question": "Consider the code given below:\nplt.bar(cities, population,color=[‘r’,’g’,’b’,’m’])\nwhat will be the colour of last bar?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Magneta",
        "Green",
        "Blue",
        "Black"
      ],
      "answer": "A",
      "correct": "Magneta",
      "explanation": "The final color code m means magenta. The PDF misspells it as Magneta."
    },
    {
      "id": "S3-678",
      "srNo": 678,
      "question": "Which type of error will be generated in this program and why?  import matplotlib.pyplot as plt\nimport numpy as np\nypoints = np.array([3,8,1,10,5,7])\nplt.plot(ypoints,linestyle='*')\nplt.show()",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Syntax Error as '*' this type of linestyle does not\nexist",
        "Value Error as '*' this type of linestyle does not exist",
        "Type Error as linestyle is not proper with this type of array",
        "Syntax Error as this is not a syntax of linestyle"
      ],
      "answer": "B",
      "correct": "Value Error as '*' this type of linestyle does not exist",
      "trace": {
        "code": "import numpy as np\nypoints = np.array([3,8,1,10,5,7])\nplt.plot(ypoints,linestyle='*')\nplt.show()",
        "output": "",
        "error": "NameError: name 'plt' is not defined"
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-679",
      "srNo": 679,
      "question": "Which linestyle does Python takes by default?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Dashpot",
        "Dotted",
        "Dashed",
        "Solid"
      ],
      "answer": "D",
      "correct": "Solid",
      "explanation": "The default line style is solid, represented by a hyphen."
    },
    {
      "id": "S3-680",
      "srNo": 680,
      "question": "The following code will generate which type of linestyle?\nplt.plot(ypoints,linestyle=':')",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Dotted",
        "Dashed",
        "Value Error",
        "Syntax Error"
      ],
      "answer": "A",
      "correct": "Dotted",
      "explanation": "A colon linestyle creates a dotted line; '--' is dashed."
    },
    {
      "id": "S3-681",
      "srNo": 681,
      "question": "Consider the following code written to display a bar chart\nx=range(0,40,8)\ny=range(10,100,10)\nplt.bar(x,y)\nWhile executing it, is producing error. Why?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Both the sequences x and y do not start with 0",
        "Both the sequences x and y are not of same shape",
        "Values produced by range is not considered for chart.",
        "Both the sequences x and y have values with different intervals"
      ],
      "answer": "B",
      "correct": "Both the sequences x and y are not of same shape",
      "explanation": "range(0,40,8) has 5 values while range(10,100,10) has 9. Bar x positions and heights must have compatible lengths."
    },
    {
      "id": "S3-682",
      "srNo": 682,
      "question": "The following syntax will create:\nplt.subplot(2,1,1)\nplt.subplot(2,1,2)",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "Will create two subplots- above and below",
        "Will create two different line plots",
        "Will create two subplots (side by side)",
        "Syntax error will be generated"
      ],
      "answer": "A",
      "correct": "Will create two subplots- above and below",
      "explanation": "subplot(2,1,1) selects the upper panel and subplot(2,1,2) selects the lower panel in a 2-row, 1-column grid."
    },
    {
      "id": "S3-683",
      "srNo": 683,
      "question": "The following syntax indicates:\nplt.subplot(3,1,2)",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "position of 1st plot at 3rd row, 1st column and\n2nd place",
        "position of 1st plot at 1st row, 3rd column, and 2nd place",
        "position of 1st plot at 2nd row, 3rd column and 1st place",
        "position of 1st plot at 2nd row, 1st column and 3rd place"
      ],
      "answer": "A",
      "correct": "position of 1st plot at 3rd row, 1st column and\n2nd place",
      "explanation": "subplot(3,1,2) means 3 rows, 1 column, selecting position 2: the middle panel. The PDF’s option A wording is incorrect; it does not mean the third-row location.",
      "note": "The PDF labels A as correct, but its wording is misleading. The accurate meaning is a 3-row, 1-column grid with subplot 2 selected."
    },
    {
      "id": "S3-684",
      "srNo": 684,
      "question": "Which argument is used in plt.plot() to specify a dashed line style?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "style='dashed'",
        "linestyle=':'",
        "line='--'",
        "ls='--'"
      ],
      "answer": "D",
      "correct": "ls='--'",
      "explanation": "ls='--' or linestyle='--' selects a dashed line."
    },
    {
      "id": "S3-685",
      "srNo": 685,
      "question": "Which function is used to configure page title, layout, and favicon in Streamlit?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.page_config()",
        "st.set_page_config()",
        "st.configure_page()",
        "st.page_setup()"
      ],
      "answer": "B",
      "correct": "st.set_page_config()",
      "explanation": "st.set_page_config sets options such as page_title, page_icon and layout."
    },
    {
      "id": "S3-686",
      "srNo": 686,
      "question": "WWhhiicchh foufn tchteio fno lilso uwsiendg tiso c coornreficgtu troe dpiasgpela tyit tleh,e l alayroguets,t a hneda dfainvgic oinn S itnr eSatrmealitm?lit?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.header(\"Welcome\")",
        "st.title(\"Welcome\")",
        "st.markdown(\"Welcome\")",
        "st.heading(\"Welcome\")"
      ],
      "answer": "B",
      "correct": "st.title(\"Welcome\")",
      "explanation": "st.title renders the page’s main, largest heading."
    },
    {
      "id": "S3-687",
      "srNo": 687,
      "question": "WWhhiicchh ooff tthhee ffoolllloowwiinngg icsa cno drrisepclta tyo b doitshp ltaeyx tt haen dla vrgaersiat bhleesa dtoingge tinh eSrt?reamlit?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.text()",
        "st.write()",
        "st.code()",
        "st.header()"
      ],
      "answer": "B",
      "correct": "st.write()",
      "explanation": "st.write accepts text and values and displays them in the app."
    },
    {
      "id": "S3-688",
      "srNo": 688,
      "question": "WWhhiicchh ofufn tchteio fno lilso uwsiendg tcoa np ldaicsep lwayid bgoetths itnesxitd ea nad s vidaerbiaabrl?es together?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.sidebar.widget()",
        "st.sidebar()",
        "st.sidebar.<widget>()",
        "st.column.sidebar()"
      ],
      "answer": "C",
      "correct": "st.sidebar.<widget>()",
      "explanation": "Use the sidebar container, for example st.sidebar.selectbox, to place a widget in the sidebar."
    },
    {
      "id": "S3-689",
      "srNo": 689,
      "question": "WWhhiicchh ffuunnccttiioonn iws iulls aeldlo two ap lmacuel twi-liidngee ttes xint sinidpeu at fsriodmeb tahre? user?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.text_input()",
        "st.text_area()",
        "st.write_input()",
        "st.multiline_input()"
      ],
      "answer": "B",
      "correct": "st.text_area()",
      "explanation": "st.text_area provides a multiline text-entry widget; text_input is a single line."
    },
    {
      "id": "S3-690",
      "srNo": 690,
      "question": "WWhhiicchh fwuindcgteiot nis wbeills ta lsluoiwte ad mfour lstei-lleinceti tnegx at ivnapluute fbroetmw etheen u0s aenr?d 100 continuously?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.number_input()",
        "st.slider()",
        "st.selectbox()",
        "st.radio()"
      ],
      "answer": "B",
      "correct": "st.slider()",
      "explanation": "st.slider provides a selected numeric value constrained by minimum and maximum bounds."
    },
    {
      "id": "S3-691",
      "srNo": 691,
      "question": "WWhhiicchh winipdugte wt iisd bgeets ta slluoiwtesd m fourl tsipellee csteinlegc ati ovnalsu fer obmet wa elisetn? 0 and 100 continuously?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.radio()",
        "st.checkbox()",
        "st.selectbox()",
        "st.multiselect()"
      ],
      "answer": "D",
      "correct": "st.multiselect()",
      "explanation": "st.multiselect returns a list of all selected options."
    },
    {
      "id": "S3-692",
      "srNo": 692,
      "question": "WWhhiicchh ionfp tuhte w foidllgoewt ianlglo wwisd gmeutslt iisp lNe OseTl eacvtaioilanbs lfer oinm S tar eliastm?lit?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.date_input()",
        "st.time_input()",
        "st.datetime_input()",
        "st.file_uploader()"
      ],
      "answer": "C",
      "correct": "st.datetime_input()",
      "explanation": "For the Streamlit API represented in this question bank, datetime_input is not a listed standard widget; date_input and time_input are separate widgets."
    },
    {
      "id": "S3-693",
      "srNo": 693,
      "question": "WWhhiicchh ofufn tchteio fno lilso uwsiendg twoi dugpelotsa ids CNSOVT, iamvaaiglaebs,l eo irn P SDtFre failmesl?it?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.upload()",
        "st.file_upload()",
        "st.file_uploader()",
        "st.upload_file()"
      ],
      "answer": "C",
      "correct": "st.file_uploader()",
      "explanation": "st.file_uploader returns an uploaded file object, or None before an upload."
    },
    {
      "id": "S3-694",
      "srNo": 694,
      "question": "WWhhiicchh ffuunnccttiioonn iiss uusseedd ttoo ucrpeloataed aC dSVow, inmloaagedsa,b oler PfiDleF b fuiltetso?n?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.button()",
        "st.download_button()",
        "st.save_button()",
        "st.export_button()"
      ],
      "answer": "B",
      "correct": "st.download_button()",
      "explanation": "st.download_button exposes supplied data as a downloadable file."
    },
    {
      "id": "S3-695",
      "srNo": 695,
      "question": "WWhhiicchh ffuunnccttiioonn iiss uusseedd ttoo cdrisepaltaey aim doagwensl oina dStarbelaem filliet ?button?",
      "marks": 1.0,
      "sourcePage": 56,
      "options": [
        "st.show_image()",
        "st.display_image()",
        "st.img()",
        "st.image()"
      ],
      "answer": "D",
      "correct": "st.image()",
      "explanation": "st.image displays an image from an uploaded file, an array, a path or image data."
    },
    {
      "id": "S3-696",
      "srNo": 696,
      "question": "Which function will show a green success message?",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "st.success()",
        "st.done()",
        "st.complete()",
        "st.info()"
      ],
      "answer": "A",
      "correct": "st.success()",
      "explanation": "st.success renders a green success status message."
    },
    {
      "id": "S3-697",
      "srNo": 697,
      "question": "WWhhiacth w fuilln bceti odnis pwlailly sehdo awft ae rg crelicekni nsug ctchees bs umtteosnsa igne t?he following code?\nif st.button(\"Click Me\"):\n  st.write(\"Hello Streamlit\")",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "Nothing",
        "Always \"Hello Streamlit\"",
        "\"Hello Streamlit\" only when button is clicked",
        "Error"
      ],
      "answer": "C",
      "correct": "\"Hello Streamlit\" only when button is clicked",
      "explanation": "A button returns True on the rerun triggered by its click, so the conditional writes the message for that event."
    },
    {
      "id": "S3-698",
      "srNo": 698,
      "question": "Which function is used to display a Matplotlib chart in Streamlit?",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "st.chart()",
        "st.plot()",
        "st.pyplot()",
        "st.line_chart()"
      ],
      "answer": "C",
      "correct": "st.pyplot()",
      "explanation": "st.pyplot renders a Matplotlib figure inside the app."
    },
    {
      "id": "S3-699",
      "srNo": 699,
      "question": "WWhhiicchh ffuunnccttiioonn idsi ruescetdly t cor deaistpelsa ya ali nMe acthpalortt lwibi tchhoaurtt uins iSntgr eMamatlpitl?otlib?",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "st.line_chart()",
        "st.plot_line()",
        "st.draw_line()",
        "st.chart_line()"
      ],
      "answer": "A",
      "correct": "st.line_chart()",
      "explanation": "st.line_chart creates a line chart directly from supplied data."
    },
    {
      "id": "S3-700",
      "srNo": 700,
      "question": "WWhhiacth w fuilln tchteio snli ddeirre rcetltyu crnre iant tehse a f loinlleo wchinagrt c woditeh?out using Matplotlib?\nage = st.slider(\"Select Age\", 0, 100, 25)\nst.write(\"Age:\", age)",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "Always returns 25",
        "Returns user’s selected age between 0–100",
        "Returns only 0 or 100",
        "Error"
      ],
      "answer": "B",
      "correct": "Returns user’s selected age between 0–100",
      "explanation": "The slider defaults to 25 and returns the current selected value within 0 through 100."
    },
    {
      "id": "S3-701",
      "srNo": 701,
      "question": "What will be the output of the following code if \"Python\" is selected?\nlang = st.selectbox(\"Choose Language\", [\"Python\", \"Java\", \"C++\"])\nst.write(\"You selected:\", lang)",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "You selected: Java",
        "You selected: C++",
        "You selected: Python",
        "Error"
      ],
      "answer": "C",
      "correct": "You selected: Python",
      "explanation": "The selectbox returns the selected string Python; st.write combines it with You selected:."
    },
    {
      "id": "S3-702",
      "srNo": 702,
      "question": "What will this code do?\nwith st.expander(\"See Details\"):\n  st.write(\"This is inside expander\")",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "Always shows text without toggle",
        "Shows collapsible section with \"See Details\"",
        "Error",
        "Creates sidebar only"
      ],
      "answer": "B",
      "correct": "Shows collapsible section with \"See Details\"",
      "explanation": "st.expander creates a collapsible container and renders its body inside that container."
    },
    {
      "id": "S3-703",
      "srNo": 703,
      "question": "What does the following code do?\nfile = st.file_uploader(\"Upload a CSV\", type=[\"csv\"])\nif file is not None:\n  st.write(\"File Uploaded Successfully!\")",
      "marks": 1.0,
      "sourcePage": 57,
      "options": [
        "Always shows \"File Uploaded Successfully!\"",
        "Uploads only images",
        "Uploads CSV and confirms success",
        "Error"
      ],
      "answer": "C",
      "correct": "Uploads CSV and confirms success",
      "explanation": "The uploader accepts csv files; once it returns a file instead of None, the conditional displays the confirmation."
    }
  ],
  "coding": [
    {
      "id": "S3-C704",
      "srNo": 704,
      "question": "These cost categories applied to a $9.00 microcontroller:\nEngineering $1.35\nManufacturing $3.60\nSales $2.25\nProfit $1.80\nCreate a pie chart will show the cost breakdown as different sized pieces.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nlabels = ['Engineering', 'Manufacturing', 'Sales', 'Profit']\nvalues = [1.35, 3.6, 2.25, 1.8]\nplt.pie(values, labels=labels, explode=[0, 0, 0, 0], autopct='%1.1f%%', colors=plt.cm.tab20.colors[:len(labels)])\nplt.title('Microcontroller cost breakdown')\nplt.axis('equal')\nplt.tight_layout()\nplt.show()",
      "explanation": "Pie wedge sizes are proportional to the values. explode offsets the selected wedge and autopct prints percentages. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C705",
      "srNo": 705,
      "question": "Here is how many students got each grade in the recent test:\nA- 4, B-12, C-10, D-2. Plot a pie chart for the student grades in the recent chart with different colors for each student grades\nand create a wedge for D. Also put a chart title as student's grade history.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nlabels = ['A', 'B', 'C', 'D']\nvalues = [4, 12, 10, 2]\nplt.pie(values, labels=labels, explode=[0, 0, 0, 0.1], autopct='%1.1f%%', colors=plt.cm.tab20.colors[:len(labels)])\nplt.title(\"Student's grade history\")\nplt.axis('equal')\nplt.tight_layout()\nplt.show()",
      "explanation": "Pie wedge sizes are proportional to the values. explode offsets the selected wedge and autopct prints percentages. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C706",
      "srNo": 706,
      "question": "Imagine you survey your friends to find the kind of movie they like best: Comedy- 4, Action -5, Romance - 6, Drama -1, SciFi -\n4. Plot a pie chart for the above survey and use different color for each analysis and create a wedge for action movies. Also\nput as chart title as \"Survey analysis of movie\"",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nlabels = ['Comedy', 'Action', 'Romance', 'Drama', 'SciFi']\nvalues = [4, 5, 6, 1, 4]\nplt.pie(values, labels=labels, explode=[0, 0.1, 0, 0, 0], autopct='%1.1f%%', colors=plt.cm.tab20.colors[:len(labels)])\nplt.title('Survey analysis of movie')\nplt.axis('equal')\nplt.tight_layout()\nplt.show()",
      "explanation": "Pie wedge sizes are proportional to the values. explode offsets the selected wedge and autopct prints percentages. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C707",
      "srNo": 707,
      "question": "Create a Pie Chart using Python Program for the popularity data of different programming languages and displayed it as a\npie chart using the Matplotlib Python library. For Python- 29, Java – 19, Javascript – 8, C# - 7, PHP – 6, C,C++ - 5, R – 3.\nCreate an exploded view of python and show the % of each programming language in Pie Chart.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nlabels = ['Python', 'Java', 'Javascript', 'C#', 'PHP', 'C/C++', 'R']\nvalues = [29, 19, 8, 7, 6, 5, 3]\nplt.pie(values, labels=labels, explode=[0.1, 0, 0, 0, 0, 0, 0], autopct='%1.1f%%', colors=plt.cm.tab20.colors[:len(labels)])\nplt.title('Programming language popularity')\nplt.axis('equal')\nplt.tight_layout()\nplt.show()",
      "explanation": "Pie wedge sizes are proportional to the values. explode offsets the selected wedge and autopct prints percentages. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C708",
      "srNo": 708,
      "question": "Write a python program to create a bar plot of course v/s no. of students using the following dictionary with appropriate\nlabels for X and Y axes and colour of the bars green.\nData={‘C’:20,’C++’:15,’Java’:30,’Python’:35}",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\ndata = {'C':20, 'C++':15, 'Java':30, 'Python':35}\nplt.bar(list(data), list(data.values()), color='green')\nplt.xlabel('Course')\nplt.ylabel('Number of students')\nplt.title('Course enrolment')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use dictionary keys for categories and values for bar heights. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C709",
      "srNo": 709,
      "question": "Create a bar chart for the following dataset:\nCountry = ['USA','Canada','Germany','UK','France']\nGDP_Per_Capita = [45000,42000,52000,49000,47000]. Also plot title, X-Axis, Y-Axis, different color for each country and the\ngrid should be visible",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\ncountries = ['USA','Canada','Germany','UK','France']\ngdp = [45000,42000,52000,49000,47000]\nplt.bar(countries, gdp, color=['red','blue','green','orange','purple'])\nplt.xlabel('Country')\nplt.ylabel('GDP per capita')\nplt.title('GDP per capita by country')\nplt.grid(axis='y')\nplt.tight_layout()\nplt.show()",
      "explanation": "Assign one color per country and show a y-axis grid for comparison. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C710",
      "srNo": 710,
      "question": "A Bar Chart to display employee id numbers on X-axis and their salaries as Y-axis in the form of a bar graph for two\ndepartments of a company. There are two departments like sales department and purchase department. For sales\ndepartment their id's and salaries are mentioned as : x= [1001,1003,1006,1007,1009,1011] and y= [10000,\n23000.50,18000.33,16500.5,12000.75, 9999.99] and for purchase department their id's and salaries are mentioned as:\nx=[100̣2,1004,1010,1008,1014,1015] and y=[ 5000,6000,4500.5,12000,9000,10000]. Make the chart title as \"Microsoft\nInc.\", x-axis as emplyee id and Y axis as Salary. Use different colors for sales and purchase department.",
      "marks": 5.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nplt.bar([1001,1003,1006,1007,1009,1011], [10000,23000.50,18000.33,16500.5,12000.75,9999.99], color='blue', label='Sales')\nplt.bar([1002,1004,1010,1008,1014,1015], [5000,6000,4500.5,12000,9000,10000], color='orange', label='Purchase')\nplt.title('Microsoft Inc.')\nplt.xlabel('Employee ID')\nplt.ylabel('Salary')\nplt.legend()\nplt.tight_layout()\nplt.show()",
      "explanation": "Plot the two departments as labelled bar series on the same axes. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C711",
      "srNo": 711,
      "question": "Write a program to build two bar graphs using subplot function for given two dictionaries in which one graph is in 1st row\nand another in second row which is horizontal representation of bar graph.\nD1={“aryan”:66,”bob”:70,”jack”:66,”seema”:34}\nD2={“joy”:45,”sid”:85,”hina”:90}\nAnd also make a title of graph at top as “BAR PLOT”.",
      "marks": 5.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nd1 = {'aryan':66,'bob':70,'jack':66,'seema':34}\nd2 = {'joy':45,'sid':85,'hina':90}\nfig, axes = plt.subplots(2,1)\naxes[0].bar(list(d1), list(d1.values()))\naxes[0].set(xlabel='Student', ylabel='Score', title='Group 1')\naxes[1].barh(list(d2), list(d2.values()))\naxes[1].set(xlabel='Score', ylabel='Student', title='Group 2')\nfig.suptitle('BAR PLOT')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use a vertical bar chart above a horizontal one in a two-row figure. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C712",
      "srNo": 712,
      "question": "A program to display a histogram showing the number of employees in specific age groups. The data is shown:\nemp_ages=[22,45,30,59,58,56,57,45,43,43,50,40,34,33,25,19] and their bins are [0,10,20,30,40,50,60]. Create a histogram\nwith x-axis label as \"emplyee ages\" and y axis label as \" no. of employees\". Create a title of the plot as \"Oracle Corp\". Also\nteh color of histogram created should be cyan.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nages = [22,45,30,59,58,56,57,45,43,43,50,40,34,33,25,19]\nplt.hist(ages, bins=[0,10,20,30,40,50,60], color='cyan', edgecolor='black')\nplt.xlabel('Employee ages')\nplt.ylabel('Number of employees')\nplt.title('Oracle Corp')\nplt.tight_layout()\nplt.show()",
      "explanation": "Histogram bins count observations in age intervals, unlike a bar chart of individual employees. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C713",
      "srNo": 713,
      "question": "Jeff is a branch manager at a local bank. Recently Jeff’s is receiving customer feedback saying that the wait times for a client\nto be served by a customer service representative are too long. Jeff decides to observe and write down the time spent by\neach customer on waiting. Here are his findings from observing and writing down the wait times spent by 20 customers (in\nseconds): 43.1, 35.6, 37.6,36.5,45.3,43.5,40.3,50.2,47.3,31.2,42.2,45.5,30.3,31.4,35.6,45.2,54.1,45.6,36.5,43.1.\nPlot a histogram for the above data.",
      "marks": 5.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nwaits = [43.1,35.6,37.6,36.5,45.3,43.5,40.3,50.2,47.3,31.2,42.2,45.5,30.3,31.4,35.6,45.2,54.1,45.6,36.5,43.1]\nplt.hist(waits, bins=6, edgecolor='black')\nplt.xlabel('Waiting time (seconds)')\nplt.ylabel('Customers')\nplt.title('Bank customer waiting times')\nplt.tight_layout()\nplt.show()",
      "explanation": "Group the 20 wait times into six intervals; each bar is the number of customers in that interval. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C714",
      "srNo": 714,
      "question": "Uncle Bruno owns a garden with 30 black cherry trees. Each tree is of a different height. The height of the trees (in inches):\n61, 63, 64, 66, 68, 69, 71, 71.5, 72, 72.5, 73, 73.5, 74, 74.5, 76, 76.2, 76.5, 77, 77.5, 78, 78.5, 79, 79.2, 80, 81, 82, 83, 84, 85,\n87. Plot a histogram with color green, title of the chart should be height of trees along with it’s fontsize as 20.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nheights = [61,63,64,66,68,69,71,71.5,72,72.5,73,73.5,74,74.5,76,76.2,76.5,77,77.5,78,78.5,79,79.2,80,81,82,83,84,85,87]\nplt.hist(heights, bins=8, color='green', edgecolor='black')\nplt.title('Height of trees', fontsize=20)\nplt.xlabel('Height (inches)')\nplt.ylabel('Number of trees')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use the supplied 30 measurements and the requested green histogram with a 20-point title. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C715",
      "srNo": 715,
      "question": "A Program to create a line graph to show the profits of a company in various years. The data is as mentioned: x axis as\nyears and y axis as profits (in Millions). X=[2012,2013,2014,2015,2016,2017] and y = [9,10,10.5,8.8,10.9,9.75]. Plot a line\nchart with x axis as \"Years\" and y axis as \"Profits (in Millions)\" and title of the line chart as \"XYZ Company\". Also the linestyle\nshould be dashed one.",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nplt.plot([2012,2013,2014,2015,2016,2017], [9,10,10.5,8.8,10.9,9.75], linestyle='--')\nplt.xlabel('Years')\nplt.ylabel('Profits (in Millions)')\nplt.title('XYZ Company')\nplt.tight_layout()\nplt.show()",
      "explanation": "A dashed line connects the year/profit observations. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C716",
      "srNo": 716,
      "question": "Laurell had visited a zoo recently and had collected the following data. How can Laurell use a scatter plot to represent this\ndata? .Take Type of Animal as X-axis and no. in Y axis. The data is as follows: Zebra-25, Lions- 5, Monkeys- 50, Elephants -10,\nOstriches - 20",
      "marks": 3.0,
      "sourcePage": 57,
      "solution": "import matplotlib.pyplot as plt\nplt.scatter(['Zebra','Lions','Monkeys','Elephants','Ostriches'], [25,5,50,10,20])\nplt.xlabel('Type of animal')\nplt.ylabel('Number')\nplt.title('Zoo animal counts')\nplt.tight_layout()\nplt.show()",
      "explanation": "Each categorical x position is paired with its animal count. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C717",
      "srNo": 717,
      "question": "Prayatna sells designer bags and wallets. During the sales season, he gave discounts ranging from 10% to 50% over a period\nof 5 weeks. He recorded his sales for each type of discount in an array. Draw a scatter plot to show a relationship between\nthe discount offered and sales made. Take 5 sales in Rupees as user defined values",
      "marks": 3.0,
      "sourcePage": 58,
      "solution": "import matplotlib.pyplot as plt\ndiscounts = [10,20,30,40,50]\nsales = [float(input(f'Sales for {d}% discount: ')) for d in discounts]\nplt.scatter(discounts, sales)\nplt.xlabel('Discount (%)')\nplt.ylabel('Sales (rupees)')\nplt.title('Discount versus sales')\nplt.tight_layout()\nplt.show()",
      "explanation": "Collect one sales value per discount and plot the five pairs. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleInputs": [
        "100",
        "200",
        "300",
        "400",
        "500"
      ]
    },
    {
      "id": "S3-C718",
      "srNo": 718,
      "question": "Plot a subplot showing the marks of 5 students for 6 subjects (Digital Electronics, Probability and Stochastics, Python, Full\nStack Development, IELTS (Reading), and Data Structure). All the marks for each subject and for each student is to be taken\nuser defined. Subplot should be prepared for each subject. Each Subplot should have a title of subject along with a main title\nof a plot.",
      "marks": 5.0,
      "sourcePage": 58,
      "solution": "import matplotlib.pyplot as plt\nsubjects = ['Digital Electronics','Probability and Stochastics','Python','Full Stack Development','IELTS (Reading)','Data Structure']\nfig, axes = plt.subplots(3,2, figsize=(12,10))\nfor ax, subject in zip(axes.flat, subjects):\n    marks = [float(input(f'{subject}, student {i+1}: ')) for i in range(5)]\n    ax.bar(range(1,6), marks)\n    ax.set(title=subject, xlabel='Student', ylabel='Marks')\nfig.suptitle('Student marks by subject')\nplt.tight_layout()\nplt.show()",
      "explanation": "Take 30 input marks and create one subplot for each of six subjects. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleInputs": [
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80",
        "80"
      ]
    },
    {
      "id": "S3-C719",
      "srNo": 719,
      "question": "Write a Python program to draw a scatter plot comparing two subject marks of Mathematics and Science. Use marks of 10\nstudents.\nTest Data:\nmath_marks = [88, 92, 80, 89, 100, 80, 60, 100, 80, 34]\nscience_marks = [35, 79, 79, 48, 100, 88, 32, 45, 20, 30]\nmarks_range = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\nAdd appropriate labels, title and legend.",
      "marks": 4.0,
      "sourcePage": 58,
      "solution": "import matplotlib.pyplot as plt\nmath_marks = [88,92,80,89,100,80,60,100,80,34]\nscience_marks = [35,79,79,48,100,88,32,45,20,30]\nmarks_range = [10,20,30,40,50,60,70,80,90,100]\nplt.scatter(marks_range, math_marks, label='Mathematics')\nplt.scatter(marks_range, science_marks, label='Science')\nplt.xlabel('Marks range / sample position')\nplt.ylabel('Marks')\nplt.title('Mathematics and Science marks')\nplt.legend()\nplt.tight_layout()\nplt.show()",
      "explanation": "Use the supplied marks_range for both series and add a legend. The two arrays have one mark per student. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C720",
      "srNo": 720,
      "question": "Draw multiple plots in one figure using subplot function. The multiple plots include below according to order:\n1. Plot a scatter plot with following data:\nx = [5,7,8,7,2,17,2,9,4,11,12,9,6]\ny = [99,86,87,88,111,86,103,87,94,78,77,85,86]\nThe x axis represents the age of car while y axis represents the speed of car.\nThe title of the graph should be age v/s speed of car. Also in graph there should be x and y labels. The marker used should be\nstar. The marker color should be green. The marker size should be 60.\n2. Plot a horizontal bar with following data:\nx=[\"A\", \"B\", \"C\", \"D\"]\ny=[3, 8, 1, 10]\nThe x axis represents the name of car while y axis represents the selling of car.\nThe title of the graph should be name v/s selling of car. Also in graph there should be x and y label. The horizontal bar chart's\nheight should be 0.1. The color of bar should be yellow.\n3. Plot a histogram with following data:\ndata=[1,3,3,3,3,9,9,5,4,4,8,8,8,6,7]\nbins=4, the title of the graph should be histogram of cars. The orientation should be vertical. The color of plot should be\nviolet\n4. Plot a pie with following data:\ny=[35,25,25,15]\nmylabels=['Apple','Bananas','Cherries','Dates']\nThe title of the graph should be pie chart. The exploded view should be shown with 0.2 value for 'Apple'\nAlso need to provide a superior title to the subplot prepared i.e 'My Subplot for cars'(0.5 marks) and subplot preparation\n(0.5 mark)\nFor clear visualization can use the following syntax after importing matplotlib\nplt.figure(figsize=(10,10))",
      "marks": 9.0,
      "sourcePage": 58,
      "solution": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2,2, figsize=(10,10))\na,b,c,d = axes.flat\na.scatter([5,7,8,7,2,17,2,9,4,11,12,9,6], [99,86,87,88,111,86,103,87,94,78,77,85,86], marker='*', color='green', s=60)\na.set(title='Age v/s speed of car', xlabel='Age', ylabel='Speed')\nb.barh(['A','B','C','D'], [3,8,1,10], height=0.1, color='yellow')\nb.set(title='Name v/s selling of car', xlabel='Sales', ylabel='Car name')\nc.hist([1,3,3,3,3,9,9,5,4,4,8,8,8,6,7], bins=4, color='violet', orientation='vertical')\nc.set(title='Histogram of cars', xlabel='Value', ylabel='Frequency')\nd.pie([35,25,25,15], labels=['Apple','Bananas','Cherries','Dates'], explode=[0.2,0,0,0])\nd.set_title('Pie chart')\nfig.suptitle('My Subplot for cars')\nplt.tight_layout()\nplt.show()",
      "explanation": "Create the four requested plots with their specified marker, bar height, histogram bins and exploded wedge. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C721",
      "srNo": 721,
      "question": "There is an array of scores of 5 Batsmen in 4 T20 Matches. Which is given below.\nScores= [[13, 10, 9, 33],\n[63, 46, 90, 42],\n[39, 76, 13, 29],\n[82, 9, 29, 78],\n[67, 61, 59, 36]]\nFurther you are asked to perform below tasks.\n(i). Add scores of every batsman of 5th Match given below in the same array and print the array.\nMatch_5= [41, 87, 72, 36, 92]\n(ii). Add two new batsmen’s scores in respective 5 T20 Matches in the array created in task (i) above and print the array.\nBatsman_6= [77, 83, 98, 95, 89]\nBatsman_7= [92, 71, 52, 61, 53]\n(iii). Add extra column with sum of all 5 T20 Matches’ scores of each batsman in the array created in task (ii) and print the\nfinal array.\nNote: Use Numpy module for all the Arrays given above.\nUsing the final array created in task(iii) above, generate graphs mentioned below:\n(a). Make a line chart of Total Scores of each batsman which is stored in last column of final array v/s No. of Batsman. Use\ndashed line in graph, with black color. Give label on x-axis as “No. of Batsman” and label on y-axis as “Scores”. Give title to\nthe chart as “Leader Board” with bold fonts.\n(b). Make one Bar chart of scores of Batsman_1 and Batsman_2 for all 5 T20 matches. Give color for bars of Batsman_1 as\nPurple and for Batsman_2 Dark red. Also show required legend in bar chart.\n(c). Make a pie chart of Total Scores of each batsman which is stored in last column of final array. Show the pie chart with\nexploded view of all pieces with 0.1 amount. Also display percentage in the pie chart. Also show required legend for pie\nchart.\nNote: Passing the values using numpy Array Slicing from array created in task(iii) for creating graphs above is compulsory.",
      "marks": 9.0,
      "sourcePage": 58,
      "solution": "import matplotlib.pyplot as plt\nimport numpy as np\nscores = np.array([[13,10,9,33],[63,46,90,42],[39,76,13,29],[82,9,29,78],[67,61,59,36]])\nscores = np.column_stack((scores, [41,87,72,36,92]))\nprint(scores)\nscores = np.vstack((scores, [77,83,98,95,89], [92,71,52,61,53]))\nprint(scores)\nfinal = np.column_stack((scores, scores.sum(axis=1)))\nprint(final)\nfig, axes = plt.subplots(1,3, figsize=(16,5))\naxes[0].plot(np.arange(1,8), final[:,-1], '--', color='black')\naxes[0].set(xlabel='No. of Batsman', ylabel='Scores')\naxes[0].set_title('Leader Board', fontweight='bold')\nx = np.arange(1,6)\naxes[1].bar(x-0.2, final[0,:5], width=0.4, color='purple', label='Batsman 1')\naxes[1].bar(x+0.2, final[1,:5], width=0.4, color='darkred', label='Batsman 2')\naxes[1].set(xlabel='Match', ylabel='Scores', title='First two batsmen')\naxes[1].legend()\nlabels = [f'Batsman {i}' for i in range(1,8)]\naxes[2].pie(final[:,-1], explode=[0.1]*7, autopct='%1.1f%%')\naxes[2].legend(labels, loc='upper left', bbox_to_anchor=(1,1))\naxes[2].set_title('Total score share')\nplt.tight_layout()\nplt.show()",
      "explanation": "Append a column, append two rows, then append row totals. All graph values use slices of the final NumPy array. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleOutput": "[[13 10  9 33 41]\n [63 46 90 42 87]\n [39 76 13 29 72]\n [82  9 29 78 36]\n [67 61 59 36 92]]\n[[13 10  9 33 41]\n [63 46 90 42 87]\n [39 76 13 29 72]\n [82  9 29 78 36]\n [67 61 59 36 92]\n [77 83 98 95 89]\n [92 71 52 61 53]]\n[[ 13  10   9  33  41 106]\n [ 63  46  90  42  87 328]\n [ 39  76  13  29  72 229]\n [ 82   9  29  78  36 234]\n [ 67  61  59  36  92 315]\n [ 77  83  98  95  89 442]\n [ 92  71  52  61  53 329]]"
    },
    {
      "id": "S3-C722",
      "srNo": 722,
      "question": "Write a program to build 6 graphs(3 row and 2 column) using subplot function for given data:\nSubplot 1:\nDraw a line from (5,5) to (10,17) to (25,25) to (60,40) to (80,30) with suitable label in the x axis, y axis and a title.\nLine color should be green.\nLine style should be dotted.\nMarker should be diamond.\nSubplot 2:\nWrite a Python program to create bar plot of scores by group and gender. Give suitable label in the x axis, y axis and a title.\nColors of all label should be black and title should be bold. Color of bar plot of men and women scores should be green and\nred.\nData:\nScores_men = (22, 30, 35, 35, 26)\nScores_women = (25, 32, 30, 35, 29)\nSubplot 3:\nWrite a Python programming to create a pie chart with a title of the popularity of Car company. Make multiple wedges of\nthe pie. Also show the percentage.\ndata:\nCar : Maruti Suzuki, Hyundai, Kia, Toyota, Honda\nPopularity: 25,50,30,20,35\nSubplot 4:\nWrite a Python program to draw a scatter plot comparing two subject marks of Mathematics and Science. Use marks of 10\nstudents. Marker of mathematics and science should be circle and star. Colors of marker of mathematics and science should\nbe yellow and blue.\nTest Data:\nmath_marks = [88, 92, 80, 89, 100, 80, 60, 100, 80, 34]\nscience_marks = [35, 79, 79, 48, 100, 88, 32, 45, 20, 30]\nSubplot 5:\nWrite a Python programming to display a horizontal bar chart of the popularity of programming Languages. Colors of all\nprogramming Languages should be different. Give suitable label in the x axis, y axis and a title.\ndata:\nProgramming languages: Java, Python, PHP, JavaScript, C, C++\nPopularity: 20,100,25,30,45,50\nSubplot 6:\nWrite a Python programming to display a Histogram chart for given data.\nColor of chart should be red.\nData=[10,20,20,30,30,30,40,40,40,40,50,50,50,60,60,70]",
      "marks": 9.0,
      "sourcePage": 59,
      "solution": "import matplotlib.pyplot as plt\nimport numpy as np\nmath_marks = [88,92,80,89,100,80,60,100,80,34]\nscience_marks = [35,79,79,48,100,88,32,45,20,30]\nfig, axes = plt.subplots(3,2, figsize=(12,12))\na,b,c,d,e,f = axes.flat\na.plot([5,10,25,60,80], [5,17,25,40,30], color='green', linestyle=':', marker='D')\na.set(xlabel='X', ylabel='Y', title='Line graph')\nx = np.arange(5)\nb.bar(x-0.2, [22,30,35,35,26], width=0.4, color='green', label='Men')\nb.bar(x+0.2, [25,32,30,35,29], width=0.4, color='red', label='Women')\nb.set(xlabel='Group', ylabel='Score')\nb.set_title('Scores by group and gender', fontweight='bold')\nb.legend()\nc.pie([25,50,30,20,35], labels=['Maruti Suzuki','Hyundai','Kia','Toyota','Honda'], explode=[0.1]*5, autopct='%1.1f%%')\nc.set_title('Car company popularity')\nd.scatter(range(1,11), math_marks, marker='o', color='yellow', label='Math')\nd.scatter(range(1,11), science_marks, marker='*', color='blue', label='Science')\nd.set(xlabel='Student', ylabel='Marks', title='Subject comparison')\nd.legend()\ne.barh(['Java','Python','PHP','JavaScript','C','C++'], [20,100,25,30,45,50], color=['red','blue','green','yellow','purple','orange'])\ne.set(xlabel='Popularity', ylabel='Language', title='Programming language popularity')\nf.hist([10,20,20,30,30,30,40,40,40,40,50,50,50,60,60,70], color='red')\nf.set(xlabel='Value', ylabel='Frequency', title='Histogram')\nfig.suptitle('Six plots')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use a 3×2 grid and apply the requested styling separately to each axes. Men and women bars are offset to avoid overlap. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C723",
      "srNo": 723,
      "question": "Consider the following datasheet to visualize Company Sales Data\nGet total profit of all months and show line plot with the following Style properties:\n• Line Style dotted and Line-color should be red\n• Show legend at the lower right location.\n• X label name = Month Number\n• Y label name = Total Profits\n• Add a circle marker\n• Line marker color as blue\n• Line marker size as 5\n• Line width should be 3",
      "marks": 0,
      "sourcePage": 59,
      "figures": [
        "figures/q723-p59-1.png"
      ],
      "solution": "import matplotlib.pyplot as plt\nmonths = list(range(1,13))\nprofits = [211000,183300,224700,222700,209600,201400,295500,361400,234000,266700,412800,300200]\nplt.plot(months, profits, linestyle=':', color='red', marker='o', markerfacecolor='blue', markersize=5, linewidth=3, label='Total profits')\nplt.legend(loc='lower right')\nplt.xlabel('Month Number')\nplt.ylabel('Total Profits')\nplt.title('Company sales profits')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use the twelve total-profit values printed in the source table. Set the dotted red line, blue circle markers of size 5, line width 3 and lower-right legend.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C724",
      "srNo": 724,
      "question": "There is an array of scores of 5 Batsmen in 4 T20 Matches. Which is given below.\nScores= [[31, 12, 19, 53],\n[67, 48, 95, 83],\n[59, 67, 13, 59],\n[62, 29, 99, 88],\n[87, 91, 69, 76]]\n1. Find the maximum score in T_20-3 and print it (use only the numpy module)\n2. Find the minimum score of YUVRAJ and print it (use only the numpy module)\n3. Add an extra column with the sum of all 4 T20 Matches’ scores of each batsman in the array created and print it. (use\nonly the numpy module)\nPlayer rows in order: Sachin, Dhoni, Yuvraj, Ganguly, Kohli.",
      "marks": 9.0,
      "sourcePage": 59,
      "figures": [
        "figures/q724-p59-2.png"
      ],
      "solution": "import numpy as np\nscores = np.array([[31,12,19,53],[67,48,95,83],[59,67,13,59],[62,29,99,88],[87,91,69,76]])\nprint('Maximum T20-3:', scores[:,2].max())\nyuvraj_row = 2  # Third row: YUVRAJ\nprint('Minimum Yuvraj:', scores[yuvraj_row].min())\nfinal = np.column_stack((scores, scores.sum(axis=1)))\nprint(final)",
      "explanation": "The source figure identifies Yuvraj as row 3 (index 2), whose minimum is 13. The maximum in match 3 is 99. column_stack appends each player’s total.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleOutput": "Maximum T20-3: 99\nMinimum Yuvraj: 13\n[[ 31  12  19  53 115]\n [ 67  48  95  83 293]\n [ 59  67  13  59 198]\n [ 62  29  99  88 278]\n [ 87  91  69  76 323]]"
    },
    {
      "id": "S3-C725",
      "srNo": 725,
      "question": "Write a NumPy program to swap columns in a given array.\nTake number of rows, number of columns, and also take the values of each rows and columns as input and also number of\ncolumns to be swapped.\nEnter the number of rows: 3\nEnter the number of columns: 4\nEnter values for row 1: 0 1 2 3\nEnter values for row 2: 4 5 6 7\nEnter values for row 3: 8 9 10 11\nEnter the index of the first column to be swapped: 0\nEnter the index of the second column to be swapped: 1\nOriginal array:\n[[ 0 1 2 3]\n[ 4 5 6 7]\n[ 8 9 10 11]]\nAfter swapping arrays:\n[[ 1 0 2 3]\n[ 5 4 6 7]\n[ 9 8 10 11]]",
      "marks": 3.0,
      "sourcePage": 60,
      "solution": "import numpy as np\nrows = int(input('Rows: '))\ncolumns = int(input('Columns: '))\na = np.array([list(map(int, input('Row: ').split())) for _ in range(rows)])\nif a.shape != (rows,columns): raise ValueError('Incorrect dimensions')\ni = int(input('First column index: '))\nj = int(input('Second column index: '))\nif not 0 <= i < columns or not 0 <= j < columns: raise ValueError('Invalid index')\nprint('Original:', a)\na[:, [i,j]] = a[:, [j,i]]\nprint('After swapping:', a)",
      "explanation": "Fancy indexing takes a copy of the two right-hand columns before assigning them in reverse order.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "4",
        "0 1 2 3",
        "4 5 6 7",
        "8 9 10 11",
        "0",
        "1"
      ],
      "exampleOutput": "Original: [[ 0  1  2  3]\n [ 4  5  6  7]\n [ 8  9 10 11]]\nAfter swapping: [[ 1  0  2  3]\n [ 5  4  6  7]\n [ 9  8 10 11]]"
    },
    {
      "id": "S3-C726",
      "srNo": 726,
      "question": "You are given a dataset representing the daily workout durations (workout_durations_data = [40, 50, 45, 55, 60, 30, 40, 50,\n45, 55, 60, 30, 40, 50, 45, 55, 60, 30, 40, 50, 45, 55, 60, 30, 40, 50, 45, 55])\nof an individual over the course of a month. Additionally, there is data on calories burned (calories_burned_data= [200, 250,\n220, 270, 300, 150, 200, 250, 220, 270, 300, 150, 200, 250, 220, 270, 300, 150, 200, 250, 220, 270, 300, 150, 200, 250, 220,\n270]) during each workout session. Your task is to perform a comprehensive analysis and visualization of this fitness data.\nCalculate Weekly Averages:\nCalculate the weekly average workout duration and calories burned. Use a loop to compute these averages for each week.\nCreate Visualizations:\nDesign a 3x2 subplot layout to visualize the following aspects:\nSubplot 1 (Line plot for daily workout durations): (Days v/s Duration (in Minutes)\nUse a blue line with circular markers (marker size 8).\nTitle: \"Daily Workout Durations\"\nSubplot 2 (Line plot for weekly averages of workout duration and weekly calories burned):\nUse a green line with circular markers (marker size 8) for workout duration.\nUse an orange line with square markers (marker size 8) for calories burned.\nTitle: \"Weekly Averages\"\nSubplot 3 (Bar chart for daily workout durations):\nUse a blue color for bars.\nTitle: \"Daily Workout Durations (Bar Chart)\"\nSubplot 4 (Histogram for workout durations distribution):\nUse a skyblue color for bars. Take value of bins as 10\nTitle: \"Workout Durations Distribution (Histogram)\"\nSubplot 5 (Pie chart for calories burned distribution over the weeks):\nstartangle should be 90 degree and also display percentage in pie chart with 1 digits after one decimal place.\nAlso display labels\nTitle: \"Calories Burned Distribution (Pie Chart)\"\nSubplot 6 (Line plot for the rate of change in workout durations):\nUse a red line with triangular markers (marker size 8).\nTitle: \"Rate of Change in Workout Durations\"\nFeatures and Customizations:\nUtilize different colors for each plot.\nAdd markers to the line plots for emphasis.\nAdjust marker sizes for better visibility.\nFormula and Calculation:\nThe rate of change in workout durations can be calculated using the formula:\nLet's consider an example to illustrate this. Suppose we have the following workout duration data for four consecutive days:\nWorkout Duration already given in list above at top (workout_durations_data):\nDay 1: Workout Duration = 40 minutes\nDay 2: Workout Duration = 50 minutes\nDay 3: Workout Duration = 45 minutes\nDay 4: Workout Duration = 55 minutes\nWe want to calculate the rate of change in workout durations for each day.\nThe negative rate of change between Day 2 and Day 3 indicates a decrease in workout duration, while the positive rate of\nchange between Day 3 and Day 4 indicates an increase.\nIn the context of the fitness data visualization, the rate of change plot will show how the workout durations are changing on\na daily basis, providing insights into trends and fluctuations in the individual's exercise routine.\nInstructions:\nImplement the required calculations using nested loops.\nEnsure that each subplot is labeled appropriately.\nCustomize the visualizations with specific colors, markers, and marker sizes.\nDisplay the main title for the entire figure.",
      "marks": 9.0,
      "sourcePage": 60,
      "figures": [
        "figures/q726-p60-1.png",
        "figures/q726-p61-1.png"
      ],
      "solution": "import matplotlib.pyplot as plt\ndurations = [40,50,45,55,60,30,40,50,45,55,60,30,40,50,45,55,60,30,40,50,45,55,60,30,40,50,45,55]\ncalories = [200,250,220,270,300,150,200,250,220,270,300,150,200,250,220,270,300,150,200,250,220,270,300,150,200,250,220,270]\nweekly_duration, weekly_calories, weekly_totals = [], [], []\nfor week in range(4):\n    duration_total = calorie_total = 0\n    for day in range(week*7, (week+1)*7):\n        duration_total += durations[day]\n        calorie_total += calories[day]\n    weekly_duration.append(duration_total/7)\n    weekly_calories.append(calorie_total/7)\n    weekly_totals.append(calorie_total)\nprint('Weekly average duration:', weekly_duration)\nprint('Weekly average calories:', weekly_calories)\nchanges = []\nfor day in range(1, len(durations)): changes.append(durations[day]-durations[day-1])\nfig, axes = plt.subplots(3,2, figsize=(12,12))\na,b,c,d,e,f = axes.flat\ndays = range(1,29)\na.plot(days, durations, 'o-', color='blue', markersize=8)\na.set(title='Daily Workout Durations', xlabel='Days', ylabel='Duration (minutes)')\nb.plot(range(1,5), weekly_duration, 'o-', color='green', markersize=8, label='Duration')\nb.plot(range(1,5), weekly_calories, 's-', color='orange', markersize=8, label='Calories')\nb.set(title='Weekly Averages', xlabel='Week', ylabel='Average')\nb.legend()\nc.bar(days, durations, color='blue')\nc.set(title='Daily Workout Durations (Bar Chart)', xlabel='Day', ylabel='Minutes')\nd.hist(durations, bins=10, color='skyblue')\nd.set(title='Workout Durations Distribution (Histogram)', xlabel='Minutes', ylabel='Frequency')\ne.pie(weekly_totals, labels=['Week 1','Week 2','Week 3','Week 4'], startangle=90, autopct='%1.1f%%')\ne.set_title('Calories Burned Distribution (Pie Chart)')\nf.plot(range(2,29), changes, '^-', color='red', markersize=8)\nf.set(title='Rate of Change in Workout Durations', xlabel='Day', ylabel='Change (minutes/day)')\nfig.suptitle('Fitness data analysis')\nplt.tight_layout()\nplt.show()",
      "explanation": "Nested loops calculate weekly sums and averages. Rate of change is the difference over one day. The supplied month has 28 observations, so it has exactly four complete weeks. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleOutput": "Weekly average duration: [45.714285714285715, 47.142857142857146, 46.42857142857143, 47.857142857142854]\nWeekly average calories: [227.14285714285714, 234.28571428571428, 230.0, 237.14285714285714]"
    },
    {
      "id": "S3-C727",
      "srNo": 727,
      "question": "Write a Python program to create a single figure with multiple subplots using the matplotlib library. The figure should have\nthe following plots arranged in a 2x2 grid:\n1. Scatter Plot\nx = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\ny = [55, 60, 58, 63, 70, 65, 75, 80, 78, 85]\nX-Axis Label: \"Engine Age (Years)\"\nY-Axis Label: \"Fuel Efficiency (MPG)\"\nTitle: \"Engine Age v/s Fuel Efficiency\"\nMarker: Diamond (D), red color, size 80.\n2. Horizontal Bar Chart\nx = [\"Model A\", \"Model B\", \"Model C\", \"Model D\", \"Model E\"]\ny = [25, 30, 15, 40, 20]\nX-Axis Label: \"Sales Volume\"\nY-Axis Label: \"Car Model\"\nTitle: \"Car Model v/s Sales Volume\"\nBar height: 0.3, bar color: pink.\n3. Histogram\ndata = [4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 10, 10, 10]\nNumber of bins: 6\nTitle: \"Mileage Distribution\"\nColor: Green\n4. Pie Chart\ny = [40, 30, 20, 10]\nlabels = ['SUV', 'Sedan', 'Truck', 'Hatchback']\nExplode the \"SUV\" section by 0.15.\nTitle: \"Car Types Market Share\"\nFinally, provide a superior title for the entire figure as \"Automobile Data Analysis Subplots\".\n6) Bar Chart:\nPlot a bar chart comparing Quarter–3 sales of the first four products with red color bars.\n• Label x-axis as “Product Number”\n• Label y-axis as “Total Sales (in Lakhs)”\n• Give title “Product-wise Quarter–3 Sales” in red Color.\n• Display grid with blue dotted lines\n7) Pie Chart\nPlot a pie chart showing percentage contribution of total annual sales by each product.\n• Use values from the last column of the final array\n• Show exploded view of all the slices with 0.1 amount.\n• Display percentage values with two decimal places\n• Display appropriate legend.",
      "marks": 6.0,
      "sourcePage": 61,
      "solution": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2,2, figsize=(12,10))\na,b,c,d = axes.flat\na.scatter([2,4,6,8,10,12,14,16,18,20], [55,60,58,63,70,65,75,80,78,85], marker='D', color='red', s=80)\na.set(xlabel='Engine Age (Years)', ylabel='Fuel Efficiency (MPG)', title='Engine Age v/s Fuel Efficiency')\nb.barh(['Model A','Model B','Model C','Model D','Model E'], [25,30,15,40,20], height=0.3, color='pink')\nb.set(xlabel='Sales Volume', ylabel='Car Model', title='Car Model v/s Sales Volume')\nc.hist([4,5,5,6,6,6,7,7,8,8,8,9,10,10,10], bins=6, color='green')\nc.set(title='Mileage Distribution', xlabel='Mileage', ylabel='Frequency')\nd.pie([40,30,20,10], labels=['SUV','Sedan','Truck','Hatchback'], explode=[0.15,0,0,0])\nd.set_title('Car Types Market Share')\nfig.suptitle('Automobile Data Analysis Subplots')\nplt.tight_layout()\nplt.show()",
      "explanation": "Create the requested 2×2 grid with diamond markers, pink horizontal bars, six histogram bins and an exploded SUV wedge. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C728",
      "srNo": 728,
      "question": "There is a numpy array of a company records sales (in lakhs) of 5 Products across 4 Quarters, as given below:\nSales = [[12, 18, 15, 20],\n[22, 25, 28, 30],\n[10, 14, 13, 16],\n[30, 35, 33, 38],\n[18, 20, 22, 25]]\nEach row represents a Product and each column represents a Quarter (Q1–Q4).\n1) Find the maximum sale of Q4 (Quarter -4) across all products and print it.\n2) Add two new product’s sales data for all 4 Quarters to the array and print the updated array.\nProduct_6 = [25, 28, 30, 35]\nProduct_7 = [14, 18, 20, 22]\n3) Find the minimum sale of Product_7 across all Quarters from the array created in task (2) and print it.\n4) Add an extra column showing the total annual sales of each product in the array created in task (2) and print the final\narray.\nNOTE: Using the final array created in task 4 above, generate graphs mentioned below:\nUse subplot of (1 row and 3 columns) to plot below mentioned graphs.\n5) Line Chart:\nPlot a line chart of quarter-wise annual sales of product-2 (stored in the second row of the final array) versus Quarter\nNumber.\n• Use dashed line style in red color\n• Use circle marker in green color and black colored border\n• Label x-axis as “Quarter Number”\n• Label y-axis as “Total Sales (in Lakhs)”\n• Give title “Product-wise Annual Sales” in Blue Color.\n6) Bar Chart:\nPlot a bar chart comparing Quarter–3 sales of the first four products with red color bars.\n• Label x-axis as “Product Number”\n• Label y-axis as “Total Sales (in Lakhs)”\n• Give title “Product-wise Quarter–3 Sales” in red Color.\n• Display grid with blue dotted lines\n7) Pie Chart\nPlot a pie chart showing percentage contribution of total annual sales by each product.\n• Use values from the last column of the final array\n• Show exploded view of all the slices with 0.1 amount.\n• Display percentage values with two decimal places\n• Display appropriate legend.",
      "marks": 15.0,
      "sourcePage": 61,
      "solution": "import matplotlib.pyplot as plt\nimport numpy as np\nsales = np.array([[12,18,15,20],[22,25,28,30],[10,14,13,16],[30,35,33,38],[18,20,22,25]])\nprint('Maximum Q4:', sales[:,3].max())\nsales = np.vstack((sales, [25,28,30,35], [14,18,20,22]))\nprint(sales)\nprint('Minimum product 7:', sales[6,:].min())\nfinal = np.column_stack((sales, sales.sum(axis=1)))\nprint(final)\nfig, axes = plt.subplots(1,3, figsize=(16,5))\naxes[0].plot(range(1,5), final[1,:4], linestyle='--', color='red', marker='o', markerfacecolor='green', markeredgecolor='black')\naxes[0].set(xlabel='Quarter Number', ylabel='Total Sales (in Lakhs)')\naxes[0].set_title('Product-wise Annual Sales', color='blue')\naxes[1].bar(range(1,5), final[:4,2], color='red')\naxes[1].set(xlabel='Product Number', ylabel='Total Sales (in Lakhs)')\naxes[1].set_title('Product-wise Quarter-3 Sales', color='red')\naxes[1].grid(color='blue', linestyle=':')\naxes[2].pie(final[:,-1], explode=[0.1]*7, autopct='%1.2f%%')\naxes[2].legend([f'Product {i}' for i in range(1,8)], loc='upper left', bbox_to_anchor=(1,1))\naxes[2].set_title('Annual sales contribution')\nplt.tight_layout()\nplt.show()",
      "explanation": "Use the final array for all chart slices. Maximum Q4 is 38 and minimum product 7 is 14. The product-2 line uses its four quarterly sales, as requested. Install matplotlib; run locally to display the figure.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": "",
      "exampleOutput": "Maximum Q4: 38\n[[12 18 15 20]\n [22 25 28 30]\n [10 14 13 16]\n [30 35 33 38]\n [18 20 22 25]\n [25 28 30 35]\n [14 18 20 22]]\nMinimum product 7: 14\n[[ 12  18  15  20  65]\n [ 22  25  28  30 105]\n [ 10  14  13  16  53]\n [ 30  35  33  38 136]\n [ 18  20  22  25  85]\n [ 25  28  30  35 118]\n [ 14  18  20  22  74]]"
    },
    {
      "id": "S3-C729",
      "srNo": 729,
      "question": "Create a Streamlit app where the user can:\n- Enter Name (text input)\n- Select Age (slider: 10–100)\n- Choose Gender (radio: Male, Female, Other)\n- Select multiple Hobbies (multiselect)\n- Upload a profile picture (file uploader for images)\nWhen the user clicks Submit, display the profile details and show the uploaded image.",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nst.title('Profile form')\nwith st.form('profile'):\n    name = st.text_input('Name')\n    age = st.slider('Age', 10, 100, 18)\n    gender = st.radio('Gender', ['Male','Female','Other'])\n    hobbies = st.multiselect('Hobbies', ['Reading','Coding','Sports','Music','Travel'])\n    picture = st.file_uploader('Profile picture', type=['png','jpg','jpeg'])\n    submitted = st.form_submit_button('Submit')\nif submitted:\n    st.write({'Name':name, 'Age':age, 'Gender':gender, 'Hobbies':hobbies})\n    if picture: st.image(picture)",
      "explanation": "Save as app.py, install streamlit and run streamlit run app.py. A form collects the fields and submits them together.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C730",
      "srNo": 730,
      "question": "Develop a Streamlit application that includes the following features:\n• A sidebar dropdown menu for selecting a country (India, USA, UK, or Canada).\n• A number input field to enter the total population.\n• A number input field to enter the number of vaccinated individuals.\n• A button that calculates and displays the name of country and vaccination percentage when clicked.\n• A progress bar to visually represent the vaccination rate.\n• A success message if the vaccination percentage exceeds 70%, otherwise display a warning message.",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nst.title('Vaccination rate')\ncountry = st.sidebar.selectbox('Country', ['India','USA','UK','Canada'])\npopulation = st.number_input('Total population', min_value=1, step=1)\nvaccinated = st.number_input('Vaccinated people', min_value=0, step=1)\nif st.button('Calculate'):\n    if vaccinated > population: st.error('Vaccinated count cannot exceed population')\n    else:\n        rate = vaccinated/population\n        st.write(country, f'{rate*100:.2f}% vaccinated')\n        st.progress(rate)\n        if rate > 0.70: st.success('Vaccination exceeds 70%')\n        else: st.warning('Vaccination is 70% or less')",
      "explanation": "Run with streamlit run app.py. Keep the progress value between 0 and 1 and reject impossible population inputs.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C731",
      "srNo": 731,
      "question": "Create a Streamlit app where the user can input marks of 5 subjects (using number_input in columns).\n- Add a button to calculate:\n- Total marks\n- Average marks\n- Division (First/Second/Fail based on average)\n- Display results inside an expander section.",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nst.title('Subject marks')\ncolumns = st.columns(5)\nmarks = [column.number_input(f'Subject {i+1}', min_value=0.0, max_value=100.0, key=f'mark{i}') for i,column in enumerate(columns)]\nif st.button('Calculate'):\n    total = sum(marks)\n    average = total/5\n    division = 'First' if average >= 60 else 'Second' if average >= 40 else 'Fail'\n    with st.expander('Results', expanded=True):\n        st.write('Total:', total, 'Average:', average, 'Division:', division)",
      "explanation": "Run as a Streamlit app. Assumed cutoffs, since the PDF does not define them: First >=60%, Second >=40%, otherwise Fail.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C732",
      "srNo": 732,
      "question": "BMI Calculator App\nTake user inputs:\n- Weight (kg) (number input)\n- Height (cm) (number input)\nOn button click, calculate BMI = weight / (height/100)^2.\n- Display:\n- BMI Value\n- A health category (Underweight, Normal, Overweight, Obese)\n- Show results in colored messages (st.success(), st.warning(), st.error()).",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nst.title('BMI calculator')\nweight = st.number_input('Weight (kg)', min_value=0.1, value=60.0)\nheight = st.number_input('Height (cm)', min_value=1.0, value=170.0)\nif st.button('Calculate'):\n    bmi = weight/(height/100)**2\n    st.write(f'BMI: {bmi:.2f}')\n    if bmi < 18.5: st.warning('Underweight')\n    elif bmi < 25: st.success('Normal')\n    elif bmi < 30: st.warning('Overweight')\n    else: st.error('Obese')",
      "explanation": "Run as a Streamlit app. Convert centimeters to meters before squaring height. This exercise uses common adult BMI category thresholds.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C733",
      "srNo": 733,
      "question": "Matplotlib Integration App\nTake number input n (number of random points).\n- Generate n random values for x and y.\n- Plot them in Matplotlib as a scatter plot.\n- Display the plot in Streamlit using st.pyplot().",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nimport numpy as np\nimport matplotlib.pyplot as plt\nst.title('Random scatter plot')\nn = st.number_input('Number of points', min_value=1, max_value=10000, value=50, step=1)\nif st.button('Generate'):\n    rng = np.random.default_rng()\n    fig, ax = plt.subplots()\n    ax.scatter(rng.random(n), rng.random(n))\n    ax.set(xlabel='X', ylabel='Y', title='Random points')\n    st.pyplot(fig)\n    plt.close(fig)",
      "explanation": "Install streamlit, numpy and matplotlib. st.pyplot displays the Matplotlib figure; close it afterwards to free resources.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    },
    {
      "id": "S3-C734",
      "srNo": 734,
      "question": "To-Do List App\nLet the user enter a task in a text input and add it via a button.\n- Show all added tasks in a checkbox list.\n- When a checkbox is ticked, mark the task as completed (use st.success() message).",
      "marks": 5.0,
      "sourcePage": 62,
      "solution": "import streamlit as st\nst.title('To-do list')\nif 'tasks' not in st.session_state: st.session_state.tasks = []\nwith st.form('add_task', clear_on_submit=True):\n    task = st.text_input('Task')\n    add = st.form_submit_button('Add')\nif add and task.strip(): st.session_state.tasks.append(task.strip())\nfor i, task in enumerate(st.session_state.tasks):\n    complete = st.checkbox(task, key=f'task_{i}')\n    if complete: st.success('Completed: ' + task)",
      "explanation": "Session state preserves tasks across Streamlit reruns. Index-based checkbox keys also allow duplicate task text.",
      "topic": "Matplotlib and Streamlit",
      "starterCode": ""
    }
  ]
};
