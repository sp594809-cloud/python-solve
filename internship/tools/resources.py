"""Curated links verified against creator/university pages on 2026-10-04.
Descriptions are our learning guidance; videos remain on their creators' channels.
"""
VIDEOS={}
def V(key,video,title,creator,language,focus,source=None):
 VIDEOS[key]=dict(id=key,url='https://www.youtube.com/watch?v='+video,title=title,creator=creator,language=language,focus=focus,source=source or 'https://www.youtube.com/watch?v='+video,checked='2026-10-04')
V('python','JP7ITIXGpHk','Functions and Variables','Harvard CS50 · David Malan','English','Watch the opening print, variables, numbers and strings examples first. Return to custom functions in Week 4.','https://cs50.harvard.edu/python/weeks/0/')
V('conditions','_b6NgY_pMdw','Conditionals','Harvard CS50 · David Malan','English','Trace if, elif, else and boolean decisions. Pause and predict the branch before the lecturer runs it.','https://cs50.harvard.edu/python/weeks/1/')
V('loops','-7xg8pGcP6w','Loops','Harvard CS50 · David Malan','English','Focus on for, while, lists and dictionaries; draw a short iteration trace.','https://cs50.harvard.edu/python/weeks/2/')
V('exceptions','LW7g1169v7w','Exceptions','Harvard CS50 · David Malan','English','Read errors and practise targeted try/except blocks.','https://cs50.harvard.edu/python/weeks/3/')
V('tests','tIrcxwLqzjQ','Unit Tests','Harvard CS50 · David Malan','English','Observe a failing test, repair the code and rerun the suite.','https://cs50.harvard.edu/python/weeks/5/')
V('files','KD-Yoel6EVQ','File I/O','Harvard CS50 · David Malan','English','Follow text files and CSV examples; try one Unicode value yourself.','https://cs50.harvard.edu/python/weeks/6/')
V('objects','e4fwY9ZsxPw','Object-Oriented Programming','Harvard CS50 · David Malan','English','Start with classes, instances and __init__. Save properties and inheritance for a second pass.','https://cs50.harvard.edu/python/weeks/8/')
V('dicts','daefaLgNkw0','Dictionaries: Working with Key-Value Pairs','Corey Schafer','English','Practise reading, updating and safely looking up dictionary values.')
V('sqlite','pd-0G0MigUA','Python SQLite: Database, Tables and Queries','Corey Schafer','English','Follow table creation, inserts and parameterized values using sample data.')
V('git','NcoBAfJ6l2Q','Git','Harvard CS50 · Brian Yu','English','Practise status, commits and branches in a disposable learning repository.','https://cs50.harvard.edu/web/weeks/1/')
V('html','zFZrkCIc2Oc','HTML and CSS','Harvard CS50 · Brian Yu','English','Start with document structure, forms and selectors, then responsive layout.','https://cs50.harvard.edu/web/weeks/0/')
V('javascript','x5trGVMKTdY','JavaScript','Harvard CS50 · Brian Yu','English','Focus on DOM events, forms and API requests; test each interaction yourself.','https://cs50.harvard.edu/web/weeks/5/')
V('security','6PWTxRGh_dk','Scalability and Security','Harvard CS50 · Brian Yu','English','Use the HTTPS and web-security discussion after you can run the local demo. Advanced scaling is optional.','https://cs50.harvard.edu/web/weeks/8/')
V('fastapi','tLKKmouUams','FastAPI Course for Beginners','freeCodeCamp.org','English','Learn routes, parameters and request bodies. Follow our project requirements and current FastAPI docs when older syntax differs.')
V('ml','Gv9_4yMHFhI','A Gentle Introduction to Machine Learning','StatQuest · Josh Starmer','English','Learn the training/test distinction before fitting the course model.','https://statquest.org/video_index.html')
V('validation','fSytzGwwBVw','Machine Learning Fundamentals: Cross Validation','StatQuest · Josh Starmer','English','Understand why one train/test score is insufficient and how validation helps model selection.','https://statquest.org/video_index.html')
V('confusion','Kdsp6soqA7o','Machine Learning Fundamentals: The Confusion Matrix','StatQuest · Josh Starmer','English','Read the types of correct and incorrect predictions rather than only accuracy.','https://statquest.org/video_index.html')
V('hindi','UrsmFxEIp5k','Complete Python Course for Beginners in Hindi','CodeWithHarry','Hindi','Use the video chapters to find the current topic. Watch a short section, then return and write the code yourself.')
V('hindi-git','gwWKnnCMQ5c','Git and GitHub for Beginners in Hindi','CodeWithHarry','Hindi','Practise local commits and branches. Authentication screens may differ from this older recording.')
V('notebook','HW29067qVWk','Jupyter Notebook: Introduction, Setup and Walkthrough','Corey Schafer','English','Focus on cells, execution order and saving. This app already provides JupyterLite, so local installation is optional.')
V('language','QAZc9xsQNjQ','Language: Words, Representation and AI','Harvard CS50 · Brian Yu','English','Advanced extension: focus on bag-of-words and word representation after the lexical search lesson. The neural-network material is optional.','https://cs50.harvard.edu/ai/weeks/6/')
V('libraries','MztLZWibctI','Libraries','Harvard CS50 · David Malan','English','Follow imports, pip, JSON and the main-module pattern. Practise with the supplied local fixtures before live APIs.','https://cs50.harvard.edu/python/weeks/4/')
V('etc','6pgodt1mezg','Et Cetera','Harvard CS50 · David Malan','English','Use the type hints, comprehensions and generators sections after Week 7. Pause to rewrite each example.','https://cs50.harvard.edu/python/weeks/9/')
V('venv','Kg1Yvry_Ydk','Virtual Environments: venv on Mac and Linux','Corey Schafer','English','Learn environment creation and dependency isolation. Windows activation commands are provided in the project README.')
WEEK_VIDEOS={1:['python','hindi'],2:['conditions','python','hindi'],3:['loops','dicts','hindi'],4:['python','tests','hindi'],5:['exceptions','files','hindi'],6:['files','sqlite','git','hindi-git'],7:['objects','dicts','hindi'],8:['tests','git','hindi-git'],9:['html','javascript'],10:['fastapi'],11:['javascript','fastapi'],12:['security','fastapi'],13:['ml','validation'],14:['ml','validation','confusion'],15:['language','dicts','validation'],16:['fastapi','tests','git']}
# First choice is matched to the current lesson; the rest are optional weekly support.
FOCUS={
'f01-l1':'python','f01-l2':'python','f01-l3':'python','f01-l4':'python','f01-l5':'python','f01-l6':'python','f01-l7':'python','f01-l8':'python',
'f02-l1':'python','f02-l2':'python','f02-l3':'python',
'f03-l7':'dicts','f03-l8':'dicts','f05-l1':'exceptions','f05-l2':'exceptions','f05-l3':'libraries','f05-l4':'files','f05-l5':'files',
'f06-l1':'libraries','f06-l2':'files','f06-l3':'sqlite','f06-l4':'venv','f06-l5':'git','f06-l6':'dicts',
'f07-l1':'objects','f07-l2':'objects','f07-l3':'libraries','f07-l4':'loops','f07-l5':'loops','f07-l6':'libraries',
'f08-l1':'etc','f08-l2':'etc','f08-l3':'etc','f08-l4':'tests','f08-l5':'dicts','f08-l6':'git',
'w03-l2':'dicts','w05-l1':'exceptions','w05-l2':'files','w05-l3':'files','w06-l3':'sqlite','w07-l1':'objects','w09-l3':'javascript','w13-l2':'validation','w13-l3':'validation','w14-l2':'confusion','w14-l3':'confusion'}
def attach(lessons):
 for l in lessons:
  keys=WEEK_VIDEOS[l['week']];first=FOCUS.get(l['id'],keys[0]);keys=[first]+[k for k in keys if k!=first]
  l['videos']=[dict(VIDEOS[k],recommended=i==0) for i,k in enumerate(keys)]
