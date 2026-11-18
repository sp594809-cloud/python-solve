"""Build worked solutions for PS Q345–Q507 from the original question bank."""
import json
import runpy

import fitz
from math import comb, exp, factorial, sqrt
from pathlib import Path
from statistics import NormalDist

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
source = {q["id"]: q for q in json.loads((DATA / "questions-source.json").read_text())}
solutions = {}
normal = NormalDist()

def fmt(value):
    return f"{value:.8g}" if isinstance(value, (int, float)) else value

def step(title, formula):
    return {"title": title, "formula": formula}

def add(i, answer, *steps, question=None, note=None, tables=None):
    row = source[i]
    record = dict(id=i, question=question or row["question"].strip(),
                  page=row["page"], marks=int(row["marks"][0]),
                  answer=answer, steps=list(steps))
    if note:
        record["note"] = note
    if tables:
        record["table"], record["workingTable"] = tables
    solutions[i] = record

def calc(i, answer, setup, work, **kwargs):
    add(i, fmt(answer), step("Set up the calculation", setup),
        step("Calculate", work), **kwargs)

def discrete(i, mean, events, *, binomial=None, count=None, **kwargs):
    if binomial is not None:
        n, p = binomial
        model = f"X ~ Bin({n}, {fmt(p)}). Use P(X = k) = C({n}, k) × {fmt(p)}^k × {fmt(1-p)}^({n}−k)."
        pmf = lambda k: comb(n, k) * p**k * (1-p)**(n-k)
    else:
        model = f"X ~ Pois({fmt(mean)}). Use P(X = k) = e^(−{fmt(mean)}) × {fmt(mean)}^k / k!."
        pmf = lambda k: exp(-mean) * mean**k / factorial(k)
    steps = [step("Choose the distribution", model)]
    answers = []
    for index, (label, indices, complement) in enumerate(events, 1):
        indices = list(indices)
        value = sum(pmf(k) for k in indices)
        formula = " + ".join(f"P(X = {k})" for k in indices)
        if complement:
            value = 1-value
            formula = f"1 − ({formula})"
        result = f"{label} ≈ {fmt(value)}"
        if count:
            expected = value * count
            steps.append(step(label, f"{formula} ≈ {fmt(value)}. Expected count = {count} × {fmt(value)} ≈ {fmt(expected)}."))
            answers.append(f"{label}: {fmt(expected)} expected (about {int(expected+0.5)})")
        else:
            steps.append(step(label, f"{formula} ≈ {fmt(value)}"))
            answers.append(result)
    add(i, " · ".join(answers), *steps, **kwargs)

def event(label, *indices, complement=False):
    return (label, indices, complement)

def B(i, n, p, *events, **kwargs):
    discrete(i, None, events, binomial=(n,p), **kwargs)

def P(i, rate, *events, **kwargs):
    discrete(i, rate, events, **kwargs)

def fit(i, xs, fs, kind, *, n=None, question=None, tail=False, note=None):
    total = sum(fs)
    mean = sum(x*f for x,f in zip(xs,fs))/total
    if kind == "Binomial":
        p = mean/n
        model = f"Estimate p = x̄/{n} = {fmt(p)}. Use P(X = k) = C({n},k)p^k(1−p)^({n}−k)."
        probabilities = [comb(n,x)*p**x*(1-p)**(n-x) for x in xs]
    else:
        model = f"Estimate λ = x̄ = {fmt(mean)}. Use P(X = k) = e^(−λ)λ^k/k!."
        probabilities = [exp(-mean)*mean**x/factorial(x) for x in xs]
    expected = [fmt(total*p) for p in probabilities]
    rows = [[x, f, e] for x,f,e in zip(xs,fs,expected)]
    if tail:
        rows.append([f"{xs[-1]+1} and above", 0, fmt(total*(1-sum(probabilities)))])
    given = dict(headers=["x", "Frequency"], rows=list(map(list,zip(xs,fs))))
    working = dict(headers=["x", "Observed", "Expected"], rows=rows)
    add(i, f"{kind} fit. Expected frequencies for x = {xs[0]} to {xs[-1]}: {', '.join(expected)}.",
        step("Find the sample mean", f"Σf = {total}, Σfx = {sum(x*f for x,f in zip(xs,fs))}, x̄ = {fmt(mean)}."),
        step("Estimate the parameter", model),
        step("Find expected frequencies", f"Multiply each fitted probability by {total}."),
        question=question, note=note, tables=(given,working))

calc(345,"√(npq)","For X ~ Bin(n,p), Var(X) = np(1−p) = npq.","Take the square root: SD(X) = √(npq).")
calc(346,"m","For a Poisson variable, the mean equals its rate.","Var(X) = rate = m.")
calc(347,"e^(−λ)","Use P(X = k) = e^(−λ)λ^k/k!.","Set k = 0 and use λ⁰ = 0! = 1.")
P(348,1,event("P(X = 1)",1))
calc(349,3,"P(X = 1) = (2/3)P(X = 2). Hence P(X = 2)/P(X = 1) = 3/2.","For a positive Poisson rate, the ratio is λ/2. Thus λ = 3 and Var(X) = 3.",question="For a Poisson variable X with P(X = 1) = (2/3)P(X = 2), find the variance.")
P(350,3,event("P(|X − 3| < 1) = P(X = 3)",3))
B(351,10,.1,event("Exactly two defectives",2))
calc(352,45,"np = 15 and np(1−p) = 10.","1−p = 10/15 = 2/3, so p = 1/3 and n = 15/(1/3) = 45.")
B(353,3,1/3,event("At least two reds",2,3))
calc(354,3,"P(at least one head in n tosses) = 1 − (1/2)^n.","Set (1/2)^n = 1 − 0.875 = 1/8, so n = 3.")
B(355,4,.2,event("At most two defectives",0,1,2))
B(356,4,.5,event("More heads than tails",3,4))
B(357,6,.5,event("At least five heads",5,6))
B(358,6,.5,event("Exactly five odd rolls",5))
B(359,6,.5,event("At least five odd rolls",5,6))
B(360,6,.5,event("At most five odd rolls",6,complement=True))
calc(361,40,"A binomial count has mean np.","400 × 0.1 = 40.")
calc(362,2350/340,"Each bacterium has probability 1/340 of being in a given field.","By linearity of expectation, 2350 × (1/340) ≈ 6.912.")
B(363,5,.4,event("Late at least three times",3,4,5))
B(364,5,.4,event("Never late",0))
calc(365,32,"np = 8 and np(1−p) = 6.","1−p = 6/8 = 3/4. Therefore p = 1/4 and n = 8/(1/4) = 32.")
P(366,5,event("Exactly seven absent",7),note="The practice book uses the Poisson approximation with λ = 250 × 0.02. The exact binomial result is about "+fmt(comb(250,7)*.02**7*.98**243)+".")
P(367,.6,event("Exactly one imperfection",1))
P(368,1,event("At least two imperfections",0,1,complement=True))
P(369,3,event("At most one imperfection",0,1))
P(370,2.3,event("Exactly two defects",2))
calc(371,120**.25,"Cancel e^(−λ) in P(X = 1) = P(X = 5) with λ > 0.","λ = λ⁵/120, so λ⁴ = 120 and λ ≈ 3.3098.")
B(372,5,.5,event("At most one negative",0,1))
calc(373,16,"A Poisson variable has variance equal to its mean.","Var(X) = 16.")
calc(374,6,"Each guess has probability 1/3 of being right after eliminating one choice.","E[X] = 18 × (1/3) = 6.")
B(375,5,.7,event("At least four passes",4,5))
calc(376,"X ~ Bin(20, 0.5)","np = 10 and np(1−p) = 5.","1−p = 5/10, so p = 0.5 and n = 20. P(X = k) = C(20,k)/2²⁰ for k = 0,…,20.")
B(377,32,.25,event("At least two successes",0,1,complement=True),note="Derive p = 1−6/8 = 1/4 and n = 8/p = 32.")
B(378,8,.8,event("Exactly three recoveries",3))
B(379,6,.6,event("At least four passes",4,5,6))
B(380,3,.25,event("Exactly one without a licence",1),note="The question requests a binomial model with p = 3/12. Sampling without replacement would give a hypergeometric probability of 108/220.")
B(381,4,.5,event("Exactly two heads",2),event("At least two heads",2,3,4),event("At most two heads",0,1,2))
B(382,8,1/3,event("At least six correct answers",6,7,8))
p383=1-(2/3)**5-5*(1/3)*(2/3)**4
add(383,f"(i) {fmt(p383)}. (ii) 6 shots.",
    step("Use the binomial model","Each shot hits independently with probability 1/3."),
    step("At least two hits in five shots",f"1 − (2/3)⁵ − 5(1/3)(2/3)⁴ = {fmt(p383)}."),
    step("More than 90% chance of a hit","Require (2/3)^n < 0.1. Taking logs gives n > ln(0.1)/ln(2/3) ≈ 5.68, so use 6 shots."),
    question="A man hits a target with probability 1/3 per shot. Find (i) the chance of at least two hits in five shots and (ii) the fewest shots giving more than a 90% chance of at least one hit.")
B(384,5,5/7,event("At least four eggs",4,5),count=100)
calc(385,2500/243,"C(5,3)p³(1−p)² = 2C(5,2)p²(1−p)³ for 0 < p < 1.","Cancel matching factors: p = 2(1−p), so p = 2/3. Expected sets with no even rolls = 2500(1/3)⁵ ≈ 10.29.")
B(386,5,.5,event("Three boys",3),event("Five girls",0),event("Two or three boys",2,3),event("At least one boy",0,complement=True),count=800)
B(387,4,.5,event("Two boys and two girls",2),event("At least one boy",0,complement=True),event("No girls",4),event("At most two girls",2,3,4),count=1000)
fit(388,list(range(6)),[2,14,20,34,22,8],"Binomial",n=5,question="Fit a binomial distribution to the observed frequencies below.")
fit(389,list(range(8)),[7,6,19,35,30,23,7,1],"Binomial",n=7,question="Seven unbiased coins are tossed 128 times. Fit a binomial distribution to the observed counts of heads below.", note="The table fits p from the observations. If the stated fairness is treated as known, use p = 0.5 instead, with expected frequencies 1, 7, 21, 35, 35, 21, 7, 1.")
B(390,10,.2,event("Everyone completed homework",0),event("At most two did not complete it",0,1,2),event("At least one did not complete it",0,complement=True))
fit(391,list(range(5)),[12,66,109,59,10],"Binomial",n=4,question="Fit a binomial distribution to the observed frequencies below.")
calc(392,"X ~ Bin(15, 1/3)","Use t² − (25/3)t + 50/3 = 0 for the mean and variance. The larger root is the mean.","Roots (25 ± 5)/6 are 5 and 10/3. Then q = (10/3)/5 = 2/3, p = 1/3 and n = 15.",question="The sum and product of the mean and variance of a binomial distribution are 25/3 and 50/3. Determine the distribution.")
B(393,5,.6,event("P(X < 4)",4,5,complement=True),note="From np = 3 and np(1−p) = 1.2, p = 0.6 and n = 5.")
B(394,400,.005,event("Exactly one page with errors",1),event("At most three pages with errors",0,1,2,3))
B(395,6,1/15,event("Not more than three busy",0,1,2,3),event("At least three busy",0,1,2,complement=True))
calc(396,"Mean = 8/3. SD = 4/3.","A 5 or 6 occurs with probability 2/6 = 1/3, so X ~ Bin(8,1/3).","E[X] = 8/3. Var(X) = 8(1/3)(2/3) = 16/9, so SD = 4/3.")
B(397,5,.1,event("None defective",0),event("One defective",1),event("At most two defective",0,1,2))
B(398,20,.1,event("Exactly two defective parts",2),count=1000,note="The mean number of defectives is 20p = 2.")
calc(399,"Mean = 8. SD ≈ 2.5298.","A random guess has probability 1/5 of being correct.","E[X] = 40/5 = 8. SD(X) = √[40(1/5)(4/5)] = √6.4.")
calc(400,sum(comb(8,k)*comb(12,5-k) for k in range(3,6))/comb(20,5),"Choose 5 people without replacement. A majority means 3, 4 or 5 students.","Divide C(8,3)C(12,2) + C(8,4)C(12,1) + C(8,5) by C(20,5).")
calc(401,.2,"For n = 5, the ratio P(X = 2)/P(X = 1) is 2p/(1−p).","0.2048/0.4096 = 0.5, so 2p = 0.5(1−p) and p = 0.2.")
B(402,10,.5,event("At most three vegetarians",0,1,2,3),count=100,question="Half the population is vegetarian. If 100 investigators each sample 10 people, how many are expected to report three or fewer vegetarians?")
B(403,10,.1,event("One defective",1),event("None defective",0),event("At most two defective",0,1,2))
P(404,1,event("At least two misprints",0,1,complement=True))
P(405,35*60/1045,event("No printing errors",0),event("Exactly two printing errors",2))
P(406,2,event("At least one defective",0,complement=True),event("Exactly seven defective",7),event("P(1 < X < 8)",2,3,4,5,6,7))
P(407,1.5,event("Neither car used",0),event("Some demand refused",0,1,2,complement=True))
calc(408,f"(i) {fmt(exp(-1.2)*1.2**2/2)}. (ii) {fmt((.6*exp(-.6))**2)}.","Use λ = 1.2 for the whole cable and λ = 0.6 per half.","(i) e^(−1.2) × 1.2²/2!. (ii) Independent halves give [e^(−0.6) × 0.6]².")
P(409,10,event("At most four potholes",0,1,2,3,4))
P(410,1.8,event("P(X > 1)",0,1,complement=True),event("P(X = 5)",5),event("P(0 < X < 5)",1,2,3,4))
P(411,2,event("P(X ≤ 2)",0,1,2),question="If 3P(X = 4) = (1/2)P(X = 2) + P(X = 0) for a Poisson variable, find its mean and P(X ≤ 2).",note="Cancel e^(−λ): λ⁴/8 = λ²/4 + 1. Solve λ⁴ − 2λ² − 8 = 0 to get λ² = 4, so the mean is 2.")
P(412,.4,event("More than three claims",0,1,2,3,complement=True))
P(413,200/2400,event("At least one fatal accident",0,complement=True))
P(414,43*10/585,event("No typographical errors",0))
P(415,3,event("No accidents",0),event("More than three accidents",0,1,2,3,complement=True),count=1000)
fit(416,list(range(6)),[40,30,20,15,10,5],"Poisson",question="Mistakes per page follow a Poisson distribution. Find fitted expected frequencies for the observed data below.",tail=True)
B(417,100,.05,event("At least 97 good bulbs (at most 3 defective)",0,1,2,3),event("Fewer than 96 good bulbs (at least 5 defective)",0,1,2,3,4,complement=True),count=500)
P(418,.04,event("No defectives",0),event("One defective",1),event("Two defectives",2),count=20000,question="The probability of a defective article is 1/500. In 20,000 packets of 20 articles each, estimate the number with zero, one and two defectives.")
fit(419,list(range(9)),[56,156,132,92,37,22,4,0,1],"Poisson",question="Fit a Poisson distribution to the observed frequencies below.",tail=True)
P(420,1,*[event(f"P(X = {k})",k) for k in range(6)],note="The equation P(1) = P(0) gives λ = 1. Start with P(0) = e⁻¹ and use P(k) = P(k−1)/k.")
P(421,3,event("Two diamonds at least three times",0,1,2,complement=True),note="Each draw of two cards has probability (13/52)(12/51) = 1/17 of two diamonds. Assume the deck is reset between trials, giving Poisson rate 51/17 = 3.")
B(422,100,.05,event("More than ten defective blades",*range(11),complement=True))
P(423,.4,event("No crashes in ten years",0))
P(424,2,event("P(X = 4)",4),event("P(X ≥ 1)",0,complement=True),event("P(1 < X < 4)",2,3),note="For a positive rate, P(2)/P(1) = λ/2 = 1, so the mean is 2.")
P(425,1,event("P(X < 2)",0,1),event("P(X > 4)",0,1,2,3,4,complement=True),event("P(X ≥ 1)",0,complement=True),note="For λ > 0, cancel e^(−λ)λ² and multiply by 8: 4 = 3λ² + λ⁴. Hence λ² = 1 and both mean and variance equal 1.")
B(426,2000,.001,event("Exactly three reactions",3),event("More than two reactions",0,1,2,complement=True))
P(427,4,event("Fewer than four accidents",0,1,2,3))
P(428,4,event("Demand exceeds six lights",*range(7),complement=True))
P(429,.5,event("No defective bottles",0),event("At least two defective bottles",0,1,complement=True),count=100)

def N(i, mu, sd, *events, count=None, **kwargs):
    steps = [step("Standardize X", f"Use Z = (X − {fmt(mu)})/{fmt(sd)}, with Φ(z) = P(Z ≤ z).")]
    answers = []
    for label, low, high in events:
        zl = None if low is None else (low-mu)/sd
        zh = None if high is None else (high-mu)/sd
        expression = (f"Φ({fmt(zh)})" if zl is None else
                      f"1 − Φ({fmt(zl)})" if zh is None else
                      f"Φ({fmt(zh)}) − Φ({fmt(zl)})")
        value = (1 if zh is None else normal.cdf(zh))-(0 if zl is None else normal.cdf(zl))
        if count:
            steps.append(step(label, f"{expression} ≈ {fmt(value)}. Multiply by {count}."))
            answers.append(f"{label}: about {int(count*value+0.5)} out of {count}")
        else:
            steps.append(step(label, f"{expression} ≈ {fmt(value)}."))
            answers.append(f"{label}: {fmt(value)}")
    add(i, " · ".join(answers), *steps, **kwargs)

def E(i, rate, *events, extra=(), **kwargs):
    steps = [step("Use the exponential survival function",
                  f"λ = {fmt(rate)}. For t ≥ 0, P(X > t) = e^(−λt).")]
    answers = []
    for label, low, high in events:
        a, b = rate*low, None if high is None else rate*high
        value = exp(-a)-(0 if b is None else exp(-b))
        expression = f"e^(−{fmt(a)})" if b is None else f"e^(−{fmt(a)}) − e^(−{fmt(b)})"
        steps.append(step(label, f"{expression} ≈ {fmt(value)}."))
        answers.append(f"{label}: {fmt(value)}")
    for title, formula, answer in extra:
        steps.append(step(title, formula))
        answers.append(answer)
    add(i, " · ".join(answers), *steps, **kwargs)

def quantile(i, mu, sd, *events):
    steps = []
    answers = []
    for label,p in events:
        z = normal.inv_cdf(p)
        x = mu+sd*z
        steps.append(step(label, f"Use left-tail probability {fmt(p)}. z = Φ⁻¹({fmt(p)}) ≈ {fmt(z)}. x = μ + σz = {fmt(mu)} + {fmt(sd)} × ({fmt(z)}) ≈ {fmt(x)}."))
        answers.append(f"{label}: {fmt(x)}")
    add(i, " · ".join(answers), *steps)

def unknown_normal(i, x1, p1, x2, p2, extra=None):
    z1,z2 = normal.inv_cdf(p1),normal.inv_cdf(p2)
    sd = (x2-x1)/(z2-z1)
    mu = x1 - sd*z1
    steps = [step("Convert both probabilities to z-scores",
                  f"Φ⁻¹({fmt(p1)}) = {fmt(z1)} and Φ⁻¹({fmt(p2)}) = {fmt(z2)}."),
             step("Solve the two equations",
                  f"{x1} = μ + ({fmt(z1)})σ and {x2} = μ + ({fmt(z2)})σ. Subtract to get σ ≈ {fmt(sd)}, then substitute to get μ ≈ {fmt(mu)}.")]
    answer = f"Mean ≈ {fmt(mu)}. SD ≈ {fmt(sd)}."
    if extra:
        low,high,count,label = extra
        zl = (low-mu)/sd
        zh = None if high is None else (high-mu)/sd
        expression = f"1 − Φ({fmt(zl)})" if zh is None else f"Φ({fmt(zh)}) − Φ({fmt(zl)})"
        prob = (1 if zh is None else normal.cdf(zh))-normal.cdf(zl)
        steps.append(step(label, f"{expression} ≈ {fmt(prob)}." + (f" Multiply by {count}." if count else "")))
        answer += f" {label}: " + (f"about {int(count*prob+0.5)}." if count else f"{fmt(100*prob)}%.")
    add(i,answer,*steps)

def fit_normal(i, bounds, fs, mu=None, sd=None, *, discrete=False):
    total = sum(fs)
    mids = [(a+b)/2 for a,b in bounds]
    supplied = mu is not None
    if not supplied:
        mu = sum(f*x for f,x in zip(fs,mids))/total
        sd = sqrt(sum(f*(x-mu)**2 for f,x in zip(fs,mids))/total)
    model = NormalDist(mu,sd)
    labels = [f"{fmt(a)}–{fmt(b)}" if a!=b else fmt(a) for a,b in bounds]
    edges = ([mids[0]-(mids[1]-mids[0])/2] +
             [(a+b)/2 for a,b in zip(mids,mids[1:])] +
             [mids[-1]+(mids[-1]-mids[-2])/2]) if discrete else [
                 bounds[0][0], *[(a[1]+b[0])/2 for a,b in zip(bounds,bounds[1:])], bounds[-1][1]]
    if not discrete and bounds[0][1] < bounds[1][0]:
        edges[0] -= .5
        edges[-1] += .5
    values = [total*(model.cdf(b)-model.cdf(a)) for a,b in zip(edges,edges[1:])]
    rows = [[label,f,fmt(value)] for label,f,value in zip(labels,fs,values)]
    rows.insert(0,[f"Below {fmt(edges[0])}","",fmt(total*model.cdf(edges[0]))])
    rows.append([f"Above {fmt(edges[-1])}","",fmt(total*(1-model.cdf(edges[-1])))])
    given = dict(headers=["Class or value","Frequency"],rows=list(map(list,zip(labels,fs))))
    working = dict(headers=["Class or value","Observed","Expected"],rows=rows)
    why = "Use the given mean and standard deviation." if supplied else "Use class midpoints m. Compute μ = Σfm/N and σ = √[Σf(m−μ)²/N]."
    add(i,"Expected frequencies in the printed classes: "+", ".join(map(fmt,values))+".",
        step("Set the parameters",f"{why} N = {total}, μ ≈ {fmt(mu)}, σ ≈ {fmt(sd)}."),
        step("Find the class boundaries", "Boundaries: "+", ".join(map(fmt,edges))+". Use the midpoint between adjacent values or between the ends of adjacent classes."),
        step("Calculate the expected frequencies",f"For each interval (a,b), calculate {total} × [Φ((b−μ)/σ) − Φ((a−μ)/σ)]. The two tails account for the fitted mass outside the listed classes."),
        question="Fit a normal distribution to the data below."+ (f" Use μ = {mu} and σ = {sd}." if supplied else ""),
        tables=(given,working))

E(430,1/3,("More than five minutes",5,None),question="A mobile conversation lasts X minutes, with density f(x) = (1/3)e^(−x/3) for x ≥ 0. Find P(X > 5).")
E(431,3,("P(X ≥ 2)",2,None))
calc(432,"Mean = 1/2. Variance = 1/4.","The density 2e^(−2x) has rate λ = 2.","Use E[X] = 1/λ and Var(X) = 1/λ².")
calc(433,"1/(ln 2)²","P(X ≤ 1) = P(X > 1), so each probability equals 1/2.","e^(−λ) = 1/2 gives λ = ln 2. Therefore Var(X) = 1/(ln 2)².")
N(434,1000,200,("More than 1200 mm",1200,None),note="The practice book option is “less than 50%”. The calculated chance is about 15.87%.")
calc(435,.5,"The two sides of a normal curve about μ have equal area.","The total area is 1 and the point X = μ has probability zero, so each side has area 0.5.")
calc(436,"(−∞, ∞)","A normal density is positive at every real x.","Its support extends over all real numbers.")
calc(437,8,"In N(100,64), the second parameter is σ².","σ = √64 = 8.")
calc(438,7,"In N(200,49), the second parameter is σ².","σ = √49 = 7.")
N(439,0,1,("Left of Z = 1",None,1))
for i,k in [(440,2.33),(441,1.65),(442,2.58),(443,1.96)]:
    N(i,0,1,("Central area",-k,k))
N(444,10,2,("Greater than 10",10,None))
quantile(445,1,2,("k",.9))
E(446,1/15,("Miss the flight",15,None))
E(447,1,("Between 1 and 2",1,2))
calc(448,.5,"An exponential variable with mean 0.5 also has SD 0.5.","E[P²] = Var(P) + E[P]² = 0.5² + 0.5² = 0.5.")
calc(449,"The mean μ","The density depends on the squared distance (x−μ)².","Points the same distance on either side of μ have the same density.")
N(450,66,20,("Between 58 and 75 hours",58,75))
N(451,0,1,("Within three standard deviations",-3,3))
N(452,0,1,("Within two standard deviations",-2,2))
calc(453,"1 − 2a","Symmetry gives P(X ≤ −3) = P(X ≥ 3) = a.","Subtract both tails from 1. Equality at individual points does not affect the probability.")
calc(454,"2(1 − k)","P(X ≥ 5) = 1 − k. Symmetry gives the same probability below −5.","Add the disjoint tails to obtain 2(1 − k).")
calc(455,"3/5","The mean is (1+10)/2 = 5.5. The endpoints 4 and 7 are equally far from 5.5.","Each outside tail has probability 1/5. The middle has probability 1 − 2/5 = 3/5.")
calc(456,0,"The standard normal distribution is N(0,1).","Its first parameter, the mean, is 0.")
calc(457,0,"The standard normal has μ = 0.","The density has the same height at z and −z, so its axis of symmetry is z = 0.")
calc(458,"μ = 0, σ = 1","Standardize by using Z = (X−μ)/σ.","Then E[Z] = 0 and Var(Z) = 1, giving SD = 1.")
calc(459,60,"Linearity of expectation gives E[Y] = 5E[X] + 10.","E[Y] = 5(10) + 10 = 60.")
calc(460,260-60*normal.inv_cdf(.1131),"P(X < 260) = 0.1131 gives z = Φ⁻¹(0.1131) ≈ −1.21.","(260 − μ)/60 ≈ −1.21, so μ ≈ 332.6.")
calc(461,"(14, 26)","A central normal interval of roughly 99.73% is μ ± 3σ.","Here μ = 20 and σ = √4 = 2, so the endpoints are 20 ± 6.")
quantile(462,2,3,("x",.9115))
N(463,30,5,("Between 26 and 40",26,40),("At least 45",45,None))
calc(464,2*normal.cdf(-.1),"The distances from mean 2 are ±0.01, giving z = ±0.1.","Add the two tails: 2Φ(−0.1) ≈ 0.92034.")
N(465,68.22,sqrt(10.8),("Over 72 inches",72,None),count=1000,note="Convert six feet to 72 inches and take the square root of the given variance.")
calc(466,1-normal.cdf(2)**3,"A student scores at most 75 with probability Φ((75−65)/5) = Φ(2).","Assuming independent selections, P(at least one above 75) = 1 − [Φ(2)]³.")
N(467,4,4,("Between 5 and 10",5,10),("At least 15",15,None),("Between 10 and 15",10,15),("At most 5",None,5))
strength=6000+100*normal.inv_cdf(.05)
add(468,f"(i) {fmt(normal.cdf(2.5))}. (ii) {fmt(normal.cdf(-1)-normal.cdf(-2))}. (iii) {fmt(strength)} kg/cm².",
    step("Standardize the strength","Use z = (x−6000)/100."),
    step("Calculate the two probabilities","(i) Φ(2.5). (ii) Φ(−1) − Φ(−2)."),
    step("Find the strength exceeded by 95%","The left tail is 5%, so z = Φ⁻¹(0.05) ≈ −1.64485. Convert back using x = 6000 + 100z."))
N(469,16.28,.12,("Between 16.00 and 16.50 seconds",16,16.5),("At least 16.20 seconds",16.2,None),("At most 16.35 seconds",None,16.35))
N(470,95,7.5,("Between 100 and 110 lb",100,110),count=500)
E(471,.2,("P(X > 5)",5,None),("P(3 ≤ X ≤ 6)",3,6),extra=(("Find mean and variance","E[X] = 1/λ and Var(X) = 1/λ².","Mean = 5, variance = 25"),),question="Let X have density f(x) = (1/5)e^(−x/5) for x > 0, and 0 otherwise. Find (i) P(X > 5), (ii) P(3 ≤ X ≤ 6), (iii) its mean and (iv) its variance.")
N(472,68,3,("Above 72 kg",72,None),("At most 64 kg",None,64),("65 to 71 kg",65,71),count=300)
N(473,0,1,("Greater than 1.09",1.09,None),("Less than −1.65",None,-1.65),("Between −1 and 1.96",-1,1.96),("Between 1.25 and 2.75",1.25,2.75))
N(474,0,1,("(a)",None,1.3),("(b)",1.3,None),("(c)",-1.3,None),("(d)",None,-1.3),("(e)",-1.37,2.01),("(f)",-.5,.5),("(g)",-1.79,-.54))
fit_normal(475,[(a,a+9) for a in range(11,72,10)],[20,28,40,60,32,20,8],43.7,14.8)
calc(476,f"About {round(242/(1-normal.cdf(.7)))} officers.","P(salary > 18500) = 1 − Φ((18500−15000)/5000) = 1 − Φ(0.7).","If there are N officers, N × [1 − Φ(0.7)] = 242. Divide 242 by this tail probability.")
tail477=1-normal.cdf(1.25)
add(477,f"(i) {fmt(tail477)}. (ii) {fmt(tail477/(1-normal.cdf(.5)))}.",
    step("Find the chance of lasting 100 hours","P(X ≥ 100) = 1 − Φ((100−80)/16) = 1 − Φ(1.25)."),
    step("Condition on lasting 88 hours","Divide P(X ≥ 100) by P(X > 88) = 1 − Φ(0.5), since reaching 100 hours implies reaching 88 hours."))
N(478,0,1,("(i)",-.68,0),("(ii)",.81,1.94),("(iii)",-1.28,None))
fit_normal(479,[(x,x) for x in range(125,206,10)],[1,1,14,22,25,19,13,3,2],165.5,15.26,discrete=True)
N(480,18.2,1.25,("Below 16.5",None,16.5),("Between 16.5 and 18.8",16.5,18.8))
N(481,165,15,("Below 138 cm",None,138),("Above 198 cm",198,None),("138 to 198 cm",138,198),count=1000)
unknown_normal(482,45,.31,64,.92,(30,75,None,"Between 30 and 75"))
unknown_normal(483,60,.05,65,.45)
unknown_normal(484,55,.28,62,.95,(65,None,400,"Above 65 kg"))
unknown_normal(485,45,.15,65,.85)
N(486,70,5,("Between 60 and 75",60,75),("Above 75",75,None),("Below 68",None,68),count=1000)
p487=1-normal.cdf(70/45)
mid487=normal.cdf(15/45)-normal.cdf(-15/45)
best487=400+45*normal.inv_cdf(.95)
add(487,f"(i) {fmt(100*p487)}%. (ii) {fmt(mid487)}. (iii) {fmt(best487)} hours.",
    step("At least 470 hours",f"1 − Φ((470−400)/45) ≈ {fmt(p487)}."),
    step("Between 385 and 415 hours",f"Φ(15/45) − Φ(−15/45) ≈ {fmt(mid487)}."),
    step("Find the top 5% threshold",f"Use the 95th percentile: 400 + 45Φ⁻¹(0.95) ≈ {fmt(best487)}."))
unknown_normal(488,35,.30,60,.90,(40,50,None,"Between 40 and 50"))
unknown_normal(489,35,.07,63,.89)
quantile(490,120,10,("(i) Upper 2% cutoff",.98),("(ii) Lower 5% cutoff",.05))
quantile(491,25,5,("Lower 1% cutoff",.01))
quantile(492,30,6,("Lower 5% cutoff",.05))
fit_normal(493,[(a,a+5) for a in range(60,96,5)],[3,21,150,335,326,135,26,4])
unknown_normal(494,40,.10,75,.95,(50,60,None,"Second division"))
E(495,2,("(i) P(X > 2)",2,None),("(ii) P(X < 1/c)",0,.5),question="Let X have density f(x) = ce^(−2x) for x > 0. Find (i) P(X > 2) and (ii) P(X < 1/c).",note="Normalize first: ∫₀∞ ce^(−2x) dx = c/2 = 1, so c = 2 and 1/c = 1/2.")
E(496,1/4000,("At least 2000 km",2000,None),("At most 3000 km",0,3000))
E(497,1/6,("Under two minutes",0,2),("Four to five minutes",4,5),("More than ten minutes",10,None))
calc(498,exp(-10),"Stock is insufficient when the excess over 20,000 gallons exceeds 15,000 gallons.","One day: e^(−15000/3000) = e⁻⁵. For two independent days, square it: e⁻¹⁰.",question="Daily milk consumption above 20,000 gallons is exponential with rate 1/3000. The daily stock is 35,000 gallons. Find the probability that the stock is insufficient on both of two randomly selected days.")
E(499,.05,("Between 10 and 15 hours",10,15),("Over 20 hours",20,None),extra=(("Find mean and SD","For an exponential lifetime, both are 1/λ = 1/0.05 = 20 hours.","Mean = SD = 20 hours"),))
E(500,1/17,("Breakdown within 15 days",0,15))
E(501,.5,("Repair time exceeds two hours",2,None),("At least 11 hours given over eight hours",3,None),question="Machine repair time X is exponential with rate 1/2 per hour. Find (i) P(X > 2) and (ii) P(X ≥ 11 | X > 8).",note="The exponential distribution is memoryless. Conditional on already taking eight hours, the chance of taking at least three more hours is P(X ≥ 3).")
cost502=[base+50*(1-exp(-200/mean)) for base,mean in [(10,100),(20,150)]]
calc(502,f"Process I. Expected costs: Rs. {cost502[0]:.2f} and Rs. {cost502[1]:.2f}.","For mean m, the chance of a warranty loss is P(X < 200) = 1 − e^(−200/m).","Process I: 10 + 50(1 − e⁻²). Process II: 20 + 50(1 − e^(−200/150)). Choose the smaller expected cost.")
E(503,2,("More than three minutes",3,None),("At least one more minute given two elapsed",1,None),note="The exponential distribution is memoryless, so the second event uses the one-minute survival probability.")
E(504,.25,("Replaced under warranty",0,3),("Within two standard deviations of the mean",0,12),note="Mean and SD both equal four years. The interval [4−8, 4+8] meets the support in [0,12].")
calc(505,"k = ln((1+a)/a)/λ for a > 0","Use e^(−λk) = a(1 − e^(−λk)) for k ≥ 0.","Rearrange to e^(−λk) = a/(1+a), then take logs. For a = 0 there is no finite solution.")
E(506,.1,("Time exceeds 20 hours",20,None),extra=(("Find the expected cost","E[X] = 10 and E[X²] = Var(X) + E[X]² = 100 + 100 = 200. Therefore E[C] = 4 + 2(10) + 4(200) = 824.","E[C] = 824"),))
life507=1000+200*normal.inv_cdf(.1)
add(507,f"(i) About {round(2000*normal.cdf(-1.5))} lamps. (ii) About {life507:.2f} hours.",
    step("Count failures before 700 hours",f"z = (700−1000)/200 = −1.5. Expected failures = 2000Φ(−1.5) ≈ {fmt(2000*normal.cdf(-1.5))}."),
    step("Find when 10% have failed",f"The tenth percentile is 1000 + 200Φ⁻¹(0.10) ≈ {fmt(life507)} hours."))

render = runpy.run_path(str(ROOT.parent / "scripts/build-question-share-images.py"))["render"]
doc = fitz.open(ROOT / "practice-book.pdf")
first_top = {}
for row in source.values():
    page = row["page"]
    first_top[page] = min(first_top.get(page, float("inf")), row["bounds"][1])

for chapter, title, first, last in [
    (5, "Binomial & Poisson distributions", 345, 429),
    (6, "Normal & exponential distributions", 430, 507),
]:
    questions = [solutions[i] for i in range(first,last+1)]
    for question in questions:
        row = source[question["id"]]
        page = row["page"]
        _, top, _, bottom = row["bounds"]
        crops = [(page, top, min(bottom, 1130))]
        following = source[row["id"] + 1]
        if following["page"] == page + 1 and first_top[page + 1] > 145:
            crops.append((page + 1, 139.9, first_top[page + 1]))
        render("probability", question, doc, crops, 7.5, 357.5, (531, 834))
    book = dict(chapter=chapter,title=title,total=len(questions),range=[first,last],questions=questions)
    (DATA/f"chapter-{chapter}.js").write_text("window.PROBABILITY_BOOK_DATA = "+json.dumps(book,ensure_ascii=False,separators=(",",":"))+";\n")
