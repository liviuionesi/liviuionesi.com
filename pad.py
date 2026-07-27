import re

content = """[Freiwaldaustr. 39, 73230 Kirchheim unter Teck](https://www.google.com/maps/search/?api=1&query=Freiwaldaustr.+39%2C+73230+Kirchheim+unter+Teck) | [www.liviuionesi.com](https://www.liviuionesi.com)  
[+49 1514 6966832](tel:+4915146966832) | [ionesiliviu@yahoo.com](mailto:ionesiliviu@yahoo.com)  
[linkedin.com/in/liviu-ionesi](https://www.linkedin.com/in/liviu-ionesi) | [github.com/pehlivanu](https://github.com/pehlivanu)"""

lines = content.split('\n')
nbsp = '\u00A0'

padded_lines = []
for i, line in enumerate(lines):
    if i == 0:
        # 45 chars
        padded = line.replace(' | ', f' {nbsp*5}|{nbsp*5} ')
    elif i == 1:
        # 16 chars -> needs 29 nbsps
        padded = line.replace(' | ', f'{nbsp*29} {nbsp*5}|{nbsp*5} ')
    elif i == 2:
        # 28 chars -> needs 17 nbsps
        padded = line.replace(' | ', f'{nbsp*17} {nbsp*5}|{nbsp*5} ')
    padded_lines.append(padded)

new_content = '\n'.join(padded_lines)

with open('Liviu_Ionesi-CV.md', 'r', encoding='utf-8') as f:
    cv = f.read()

# Replace the specific block
old_block = """[Freiwaldaustr. 39, 73230 Kirchheim unter Teck](https://www.google.com/maps/search/?api=1&query=Freiwaldaustr.+39%2C+73230+Kirchheim+unter+Teck) • [www.liviuionesi.com](https://www.liviuionesi.com)  
[+49 1514 6966832](tel:+4915146966832) • [ionesiliviu@yahoo.com](mailto:ionesiliviu@yahoo.com)  
[linkedin.com/in/liviu-ionesi](https://www.linkedin.com/in/liviu-ionesi) • [github.com/pehlivanu](https://github.com/pehlivanu)"""

if old_block in cv:
    cv = cv.replace(old_block, new_content)
    with open('Liviu_Ionesi-CV.md', 'w', encoding='utf-8') as f:
        f.write(cv)
    print("Replaced with NBSP padding.")
else:
    print("Could not find the block.")
