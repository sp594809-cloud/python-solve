"""Original exam presentation based on the T2 reference methods, not their numbering."""
import html,itertools,re
from pathlib import Path
E=lambda s:html.escape(str(s))
COLORS=['#b91c1c','#1d4ed8','#15803d','#7e22ce','#9a3412','#0e7490','#be185d','#334155']
REFERENCES=[('Chapter 4 · SDS','16DHTDWPZ8Jcke1G8yRYzz489KT_wY_Di'),('Chapter 5 · SDS','11RK_tKCq8UWUknRKpUwJ3jhFAlY6AoKI'),('Unit 4 · PB worked solutions','1X1Wj068iPS7bdQZaPikeA9oWsuKngI67'),('Unit 4 · lecture notes','1QA0t8NHEItgfcofDB3_YSd7CFMtXr0Kh'),('Unit 4 · QB examples','1EKs-vrKF4OoiZRJ0m1RxabSBO3ZwCUNT'),('Unit 5 · lecture notes','1AxcgSe2nr0wD4vVq2zBCelWkkskCBugH'),('Unit 5 · additional worked notes','1X2z1LDI4LnHlv6wGVPDnNoNSeo7F2o1R')]
def indices(c):
 return {j for j in range(2**len(c)) if all(a=='-' or a==b for a,b in zip(c,format(j,f'0{len(c)}b')))}
def literal(c,names,pos=False):
 return (' + '.join if pos else ''.join)(v+("'" if (b=='1' if pos else b=='0') else '') for v,b in zip(names,c) if b!='-') or ('0' if pos else '1')
def runs(ns):
 out=[]
 for n in ns:
  if out and n==out[-1][-1]+1:out[-1].append(n)
  else:out.append([n])
 return out

def grouped_map(names,on,dc,patterns,pos=False,label='F'):
 n=len(names);rb=n//2;cb=n-rb;rs=[j^(j>>1) for j in range(2**rb)];cs=[j^(j>>1) for j in range(2**cb)];cell=82;x0=90;y0=65;w=x0+cell*len(cs)+25;h=y0+cell*len(rs)+25
 out=f'<div class="map-figure"><svg class="kmap" viewBox="0 0 {w} {h}" role="img" aria-label="{E(label)} Karnaugh map with selected groups"><title>{E(label)}: group '+('zeros for POS' if pos else 'ones for SOP')+'</title><rect width="100%" height="100%" fill="white"/><g fill="#111" font-family="system-ui,sans-serif" text-anchor="middle">'
 out+=f'<text x="45" y="25" font-size="13">{E("".join(names[:rb]))} / {E("".join(names[rb:]))}</text>'
 for c,j in enumerate(cs):out+=f'<text x="{x0+(c+.5)*cell}" y="47">{j:0{cb}b}</text>'
 for r,j in enumerate(rs):out+=f'<text x="45" y="{y0+(r+.5)*cell+6}">{j:0{rb}b}</text>'
 for r,rv in enumerate(rs):
  for c,cv in enumerate(cs):
   j=rv*2**cb+cv;x=x0+c*cell;y=y0+r*cell;v='X' if j in dc else '1' if j in on else '0'
   out+=f'<rect x="{x}" y="{y}" width="{cell}" height="{cell}" fill="none" stroke="#94a3b8"/><text x="{x+cell/2}" y="{y+47}" font-size="24">{v}</text><text x="{x+cell-13}" y="{y+18}" font-size="11" fill="#64748b">{j}</text>'
 out+='</g>'
 legend=[]
 for k,cube in enumerate(patterns):
  covered=indices(cube);rr=[r for r,rv in enumerate(rs) if any(rv*2**cb+cv in covered for cv in cs)];cc=[c for c,cv in enumerate(cs) if any(rv*2**cb+cv in covered for rv in rs)];color=COLORS[k%len(COLORS)];inset=5+(k%4)*4
  wrap=len(runs(rr))>1 or len(runs(cc))>1
  for rrun in runs(rr):
   for crun in runs(cc):
    out+=f'<rect x="{x0+crun[0]*cell+inset}" y="{y0+rrun[0]*cell+inset}" width="{cell*len(crun)-2*inset}" height="{cell*len(rrun)-2*inset}" rx="12" fill="none" stroke="{color}" stroke-width="2.5"'+(' stroke-dasharray="7 3"' if wrap else '')+'/>'
  legend.append(f'<li style="--group-color:{color}"><strong>G{k+1}</strong> · '+E(', '.join(map(str,sorted(covered))))+' → <strong>'+E(literal(cube,names,pos))+'</strong>'+(' · wraps across opposite edges' if wrap else '')+'</li>')
 return out+'</svg><ol class="group-key">'+''.join(legend)+'</ol><p class="figure-note">Same colour = one group. Dashed pieces join across opposite edges. Small numbers are cell indices; X is optional. Overlapping groups are allowed.</p></div>'

def connected_svg(net):
 """Every edge connects actual terminals; retain a netlist for unambiguous crossings."""
 depth={a:0 for a in net.inputs};levels={}
 for name,op,args in net.nodes:
  d=1+max(depth[a] for a in args);depth[name]=d;levels.setdefault(d,[]).append((name,op,args))
 maxdepth=max(depth.values());height=max(240,120*max([len(net.inputs),*[len(v) for v in levels.values()]]));width=250*maxdepth+310
 coords={a:(65,30+(j+.5)*(height-60)/len(net.inputs)) for j,a in enumerate(net.inputs)}
 for d,nodes in levels.items():
  for j,(name,op,args) in enumerate(nodes):coords[name]=(90+d*250,30+(j+.5)*(height-60)/len(nodes))
 wires=[];gates=[];labels=[]
 for a in net.inputs:
  x,y=coords[a];labels.append(f'<text x="{x-12}" y="{y+5}" text-anchor="end">{E(a)}</text>')
 for name,op,args in net.nodes:
  x,y=coords[name];left=x-88
  for k,a in enumerate(args):
   sx,sy=coords[a];ty=y+(k-(len(args)-1)/2)*44/max(1,len(args)-1);mid=left-35-k*9;entry=left+12*(1-((ty-y)/34)**2) if op in ['OR','NOR','XOR'] else left
   wires.append(f'<path d="M{sx} {sy} H{mid} V{ty} H{entry}"/><circle cx="{entry}" cy="{ty}" r="2" fill="#111"/>')
  if op in ['AND','NAND']:
   shape=f'M{left} {y-34} H{x-50} A34 34 0 0 1 {x-50} {y+34} H{left} Z';end=x-16
  elif op in ['OR','NOR','XOR']:
   shape=f'M{left} {y-34} Q{x-34} {y-36} {x-16} {y} Q{x-34} {y+36} {left} {y+34} Q{x-64} {y} {left} {y-34} Z';end=x-16
   if op=='XOR':gates.append(f'<path d="M{left-7} {y-34} Q{x-71} {y} {left-7} {y+34}" fill="none"/>')
  else:shape=f'M{left} {y-30} L{x-19} {y} L{left} {y+30} Z';end=x-19
  gates.append(f'<path d="{shape}" fill="white"/>')
  if op in ['NAND','NOR','NOT']:gates.append(f'<circle cx="{end+5}" cy="{y}" r="5" fill="white"/>');end+=10
  gates.append(f'<path d="M{end} {y} H{x}"/>')
  labels.append(f'<text x="{x-48}" y="{y-42}" text-anchor="middle" font-size="13">{E(name)} · {op}</text>')
 for k,(name,a) in enumerate(net.outputs.items()):
  sx,sy=coords[a];ex=width-125;ey=height-35-k*40
  wires.append(f'<path d="M{sx} {sy} H{ex-20-k*12} V{ey} H{ex}"/>');labels.append(f'<text x="{ex+7}" y="{ey+5}">{E(name)}</text>')
 svg=f'<div class="circuit-scroll"><svg class="circuit connected-circuit" style="width:{width}px" viewBox="0 0 {width} {height}" role="img" aria-label="Connected gate circuit"><title>Connected circuit; crossing wires without dots are separate</title><rect width="100%" height="100%" fill="white"/><g stroke="#111" stroke-width="1.6" fill="none">'+''.join(wires+gates)+'</g><g fill="#111" font-size="16" font-family="system-ui,sans-serif">'+''.join(labels)+'</g></svg></div>'
 return '<p>Follow the connected wires from inputs to outputs. Crossing wires without a junction dot are separate. A bubble means inversion; tied-input NAND/NOR gates act as NOT gates. Swipe sideways for wide circuits.</p>'+svg

def canonical_work(names,on,off,expr,parse,sp,fmt):
 vs=sp.symbols(' '.join(names));n=len(names);parts=[]
 if expr:
  e=parse(expr,vs)
  for ispos,form in [(False,sp.to_dnf(e,simplify=True)),(True,sp.to_cnf(e,simplify=True))]:
   parts.append('<h4>'+('SOP: expand each product' if not ispos else 'POS: expand each sum')+'</h4><p>Equivalent '+('SOP' if not ispos else 'POS')+': F = '+E(fmt(form))+'</p>')
   outer=sp.And if ispos else sp.Or;inner=sp.Or if ispos else sp.And;ts=form.args if isinstance(form,outer) else [form]
   for t in ts:
    if t in [sp.true,sp.false]:continue
    present=t.free_symbols;missing=[v for v in vs if v not in present];args=t.args if isinstance(t,inner) else [t];expanded=[]
    for bits in itertools.product([0,1],repeat=len(missing)):
     literals=[*args,*[v if b else ~v for v,b in zip(missing,bits)]];expanded.append(inner(*literals))
    if missing:
     if ispos:line='('+fmt(t)+') = '+''.join('('+fmt(x)+')' for x in expanded)
     else:line=fmt(t)+''.join('('+str(v)+' + '+str(v)+"')" for v in missing)+' = '+' + '.join(fmt(x) for x in expanded)
     parts.append('<p>'+E(line)+'</p>')
   parts.append('<p>'+('Use T=(T+X)(T+X′) for each missing variable. Multiply the expanded factors and remove duplicate maxterms.' if ispos else 'Insert X+X′=1 for each missing variable. OR the expanded products and remove duplicate minterms.')+'</p>')
 sop=' + '.join(literal(format(j,f'0{n}b'),names) for j in on) or '0';pos=''.join('('+literal(format(j,f'0{n}b'),names,True)+')' for j in off) or '1 (empty product)'
 parts+=['<p><strong>Full literal SOP:</strong> '+E(sop)+'</p>','<p><strong>Full literal POS:</strong> '+E(pos)+'</p>','<p>Check: one-set and zero-set are disjoint and together contain all '+str(2**n)+' indices. Variable order changes the indices, so retain the printed order.</p>']
 return '<section class="step"><h3>Expand into canonical literals</h3>'+''.join(parts)+'</section>'

def finish(qs,helpers):
 for q in qs:
  b=q.get('boolean');method=q.get('method','');i=q['id']
  if method=='canonical':
   q['solution']+=canonical_work(b['variables'],b['ones'],b['zeros'],q.get('expression'),helpers['parse'],helpers['sp'],helpers['fmt'])
   recipe=['State the variable order.','Expand missing variables and remove duplicates.','Write the literal form and the requested Σm or ΠM indices.'];mistake='Minterm: 0 → prime. Maxterm: 1 → prime. Do not interchange the rules.'
  elif b:
   g=q['grouping'];recipe=['List the one/zero cells and don’t-cares in the printed variable order.','Draw Gray-code labels; show every selected group.' if method!='tab' else 'Group by number of ones; combine one-bit differences and mark combined rows.','Show prime implicants and essential groups; select a cover of all required cells.','Write the requested expression'+(' and draw the specified gates.' if q.get('gateKind') else '.')];mistake='Don’t-cares are optional, not required cells. No group may include a forbidden cell.'
   q['solution']+='<section class="step"><h3>Selected groups, drawn on the map</h3>'+grouped_map(b['variables'],b['ones'],b['dontCares'],g['patterns'],g['pos'])+'</section>'
  elif q.get('arithmetic'):
   recipe=['Define data inputs and carry/borrow input, if present.','Write both output columns of the truth table.','Derive and simplify both outputs.','Draw and label the required gate or two-half-circuit implementation.'];mistake='Borrow is required when B+Bin exceeds A. Carry and borrow have different equations.'
  elif i in [520,522,526,531,532,534,535,536]:
   recipe=['Add the two binary BCD digits.','Calculate K=C4+Z3Z2+Z3Z1.','Add 0110 when K=1; otherwise add 0000.','Write the units digit and the decimal carry K as separate BCD digits.'];mistake='Decimal carry is K, not just the second binary adder’s carry.'
  elif i in [513,521,528,533]:
   recipe=['Write the printed bit order and identify the LSB.','Start from bit 0 and carry into the next column.','Give S3S2S1S0 and C4 separately.'];mistake='Keep the final carry; do not mistake A0 for the MSB.'
  else:
   recipe=['Write the requested answer.','Support it with the specific reason below.'];mistake='For a one-mark question, keep the answer brief; expand only when the question asks for justification.'
  q['exam']={'outline':recipe,'pitfall':mistake}
  q['solution']='<aside class="exam-card"><h3>Write this in the exam</h3><p><strong>'+E(q['answer'])+'</strong></p><ol>'+''.join('<li>'+E(x)+'</li>' for x in recipe)+'</ol><p class="exam-pitfall"><strong>Avoid this mistake:</strong> '+E(mistake)+'</p><a href="revision.html">One-day revision plan →</a></aside>'+q['solution']+'<details class="recall-check"><summary>Check your understanding without looking</summary><p>Hide this solution. Reproduce the answer and required working on paper, then compare the truth table, group coverage or arithmetic identity. If a step differs, find the first mismatch rather than memorising the final line.</p></details>'

def half_blocks(sub=False):
 name='HS' if sub else 'HA';first='b1' if sub else 'c1';second='b2' if sub else 'c2';final='Bout' if sub else 'Cout';out='D' if sub else 'S';cin='Bin' if sub else 'Cin'
 return f'''<div class="circuit-scroll"><svg class="circuit" viewBox="0 0 660 310" role="img" aria-label="Two {name} circuits and an OR gate"><rect width="660" height="310" fill="white"/><g stroke="#111" stroke-width="2" fill="white"><rect x="110" y="45" width="110" height="100"/><rect x="340" y="45" width="110" height="100"/><rect x="350" y="220" width="100" height="60"/><path d="M40 75H110 M40 115H110 M220 75H340 M285 25V115H340 M450 75H560 M220 125H260V240H350 M450 125H485V200H300V260H350 M450 250H560" fill="none"/></g><g fill="#111" font-family="system-ui,sans-serif" font-size="18"><text x="15" y="80">A</text><text x="15" y="120">B</text><text x="140" y="103">{name} 1</text><text x="370" y="103">{name} 2</text><text x="260" y="65">P</text><text x="270" y="20">{cin}</text><text x="232" y="155">{first}</text><text x="470" y="155">{second}</text><text x="380" y="257">OR</text><text x="570" y="80">{out}</text><text x="570" y="255">{final}</text></g></svg></div>'''

def bcd_svg():
 return '''<div class="circuit-scroll"><svg class="circuit" viewBox="0 0 720 430" role="img" aria-label="Two connected binary adders and BCD correction logic"><rect width="720" height="430" fill="white"/><g stroke="#111" stroke-width="2" fill="white"><rect x="170" y="40" width="230" height="85"/><rect x="455" y="160" width="205" height="85"/><rect x="170" y="300" width="230" height="85"/><path d="M45 80H170 M270 125V300 M400 80H480V160 M285 215H455 M455 220H420V355H400 M420 270H670 M170 345H90" fill="none"/><circle cx="270" cy="215" r="3" fill="#111"/><path d="M270 215H285 M270 385V410" fill="none"/><circle cx="420" cy="270" r="3" fill="#111"/></g><g fill="#111" font-family="system-ui,sans-serif" font-size="17"><text x="30" y="60">A, B, Cin</text><text x="200" y="90">4-bit binary adder 1</text><text x="292" y="175">Z3..Z0</text><text x="420" y="67">C4</text><text x="474" y="188">Correction logic</text><text x="474" y="217">K=C4+Z3Z2+Z3Z1</text><text x="203" y="340">4-bit binary adder 2</text><text x="430" y="340">0KK0</text><text x="445" y="290">K = decimal carry</text><text x="35" y="370">Cin=0</text><text x="300" y="413">BCD units digit</text><text x="190" y="275" font-size="13">4-bit bus</text></g></svg></div>'''
