/* Lessons 7–12: First Party System → Secession */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

/* ───────────────────────── L7 ───────────────────────── */
{
  id: 'l07', n: 7, short: '1790s & first parties', title: 'The 1790s: Hamilton, Jefferson & the First Party System', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1789–1800', ap: ['3.10'], sg: '8–9', min: 28,
  sub: 'The framers hated political parties, and then created two of them within five years. The fight was about how much power the new national government should use.',
  objectives: ['Explain Hamilton’s financial plan and why Jefferson opposed it', 'Compare Federalists and Democratic-Republicans: leaders, beliefs, supporters and key laws', 'Explain the Whiskey Rebellion, Washington’s Farewell Address, the Alien and Sedition Acts and the “Revolution of 1800”'],
  sections: [
    { title: 'Two advisors, two visions', blocks: [
      'George Washington became the first president in 1789. He created a <b>cabinet</b> of advisors, and two of them quickly became rivals. Their disagreement split the country into the <b>{{First Party System}}</b>.',
      { t: 'img', src: 'hamilton.jpg', portrait: true, cap: '<b>Alexander Hamilton</b>, Secretary of the Treasury. Born poor in the Caribbean, he became a New York lawyer and admired Britain’s economy. He wanted a strong national government allied with wealthy merchants and bankers, and an America of cities, trade and manufacturing.', credit: 'John Trumbull, 1806. Public domain.' },
      { t: 'img', src: 'jefferson.jpg', portrait: true, cap: '<b>Thomas Jefferson</b>, Secretary of State. A Virginia planter and author of the Declaration, he distrusted banks, cities and concentrated power. He dreamed of a republic of independent small farmers, with most power left to the states.', credit: 'Rembrandt Peale, 1800. Public domain.' }
    ] },
    { title: 'Hamilton’s financial plan', blocks: [
      'The new nation owed nearly $80 million in national and state war debts and had terrible credit. Hamilton proposed a three-part plan to make the U.S. financially strong and to tie wealthy Americans’ interests to the national government.',
      { t: 'flip', items: [
        ['1. Pay the debts, in full', 'The federal government would pay back national debt at <b>full value</b> and <b>assume</b> (take over) all state war debts. Southern states, which had already paid much of their debt, objected. The <b>Compromise of 1790</b> fixed it: Southerners accepted assumption, and in exchange the national capital moved south to the Potomac River.'],
        ['2. A national bank', 'A <b>{{Bank of the United States}}</b> (chartered 1791 for 20 years), part-owned by the government. It would hold federal money, make loans and issue a stable currency.'],
        ['3. Taxes and tariffs', 'A <b>{{tariff}}</b> (tax on imports) and an <b>excise tax</b> on whiskey to raise revenue. In his Report on Manufactures, Hamilton also wanted <b>protective tariffs</b> to help new American factories compete with Britain.']
      ] },
      { t: 'h', h: 'The bank fight: is it constitutional?' },
      'The Constitution doesn’t mention a bank. So is it allowed? This question created the two great ways of reading the Constitution:',
      { t: 'table', head: ['', 'Hamilton: loose construction', 'Jefferson: strict construction'], rows: [
        ['Reads the Necessary and Proper Clause as…', '“Necessary” means <b>useful or helpful</b>. A bank helps Congress tax, borrow and regulate money.', '“Necessary” means <b>absolutely essential</b>. A bank is convenient, not essential.'],
        ['Conclusion', 'The bank is an <b>implied power</b> and is constitutional', 'The bank is <b>unconstitutional</b>; the power is reserved to the states (10th Amendment)'],
        ['Bigger view', 'A flexible Constitution and an energetic government', 'A limited government, so liberty stays safe']
      ] },
      'Washington sided with Hamilton and signed the bank bill. But the argument didn’t go away. It runs through Jackson’s Bank War (Lesson 9) and the Supreme Court’s McCulloch v. Maryland ruling (Lesson 8).',
      { t: 'check', q: 'Hamilton’s argument that the Constitution allowed a national bank relied mainly on', o: ['the 10th Amendment and reserved powers', 'the Necessary and Proper Clause', 'the Supremacy Clause and federal law', 'the Commerce Clause and trade powers'], a: 1, x: 'Hamilton argued that the elastic clause lets Congress do things that help carry out its listed powers. That is an implied power. The 10th Amendment was Jefferson’s argument against the bank.' }
    ] },
    { title: 'The Whiskey Rebellion (1794)', blocks: [
      'Hamilton’s whiskey tax hit western farmers hard. Grain was bulky to ship over the mountains, so they distilled it into whiskey, which was easier to transport and often used as money. In <b>1794</b>, farmers in western Pennsylvania attacked tax collectors.',
      'Washington responded with overwhelming force: about <b>13,000 militia</b>, more than he had commanded in most Revolutionary battles, and he rode out with them himself. The rebellion collapsed without a real fight.',
      { t: 'table', head: ['', 'Shays’ Rebellion (1786–87)', 'Whiskey Rebellion (1794)'], rows: [
        ['Who', 'Massachusetts farmers in debt', 'Pennsylvania frontier farmers'],
        ['Grievance', 'State taxes, debt, foreclosures', 'Federal excise tax on whiskey'],
        ['Government response', 'National government couldn’t act; private money paid the state militia', 'President Washington led about 13,000 federal troops'],
        ['What it showed', 'The Articles were too weak', 'The new government <b>could enforce federal law</b>']
      ] },
      { t: 'callout', k: 'key', h: 'Same kind of event, opposite outcome. That contrast is the clearest evidence that the Constitution created a stronger national government. Many westerners resented the show of force and joined Jefferson’s party.' }
    ] },
    { title: 'Foreign policy splits the country', blocks: [
      'In 1789 the <b>French Revolution</b> began, and by 1793 France and Britain were at war. Americans divided sharply:',
      { t: 'table', head: ['', 'Federalists', 'Democratic-Republicans'], rows: [
        ['Favored', '<b>Britain</b>: the main trading partner, a stable government, and the source of Hamilton’s revenue through tariffs on British imports', '<b>France</b>: the 1778 ally that helped win the Revolution, and a fellow revolutionary republic'],
        ['Saw the other side as…', 'Radical mobs (France’s Reign of Terror)', 'Monarchists who wanted to be British again']
      ] },
      'Washington tried to stay out of it with his <b>Neutrality Proclamation</b> (1793). Then <b>Jay’s Treaty</b> (1794) avoided war with Britain, but Democratic-Republicans thought it gave away too much. That fight helped harden the two parties.',
      { t: 'h', h: 'Washington’s Farewell Address (1796)' },
      'Washington refused a third term, which set a precedent that lasted until FDR. In his <b>{{Farewell Address}}</b> (1796, a Forever Date), he gave the country three warnings:',
      { t: 'terms', items: [
        ['1. Avoid political parties', 'Parties (“the spirit of party”) divide the nation and let factions put their own interest above the public good.'],
        ['2. Avoid permanent alliances', 'Stay clear of “permanent alliances” with foreign nations. This guided U.S. foreign policy for over a century.'],
        ['3. Avoid sectionalism', 'Don’t let geographic regions (North, South, West) turn against each other.']
      ] },
      { t: 'callout', k: 'connect', h: 'All three warnings come true. Parties already existed as he spoke. Foreign entanglements drag the U.S. into the War of 1812 (Lesson 8). And sectionalism tears the country apart in the 1850s (Lessons 10–12).' }
    ] },
    { title: 'Adams, the Alien and Sedition Acts & 1800', blocks: [
      'Federalist <b>John Adams</b> won the presidency in 1796. Jefferson came in second and, under the original rules, became his vice president, despite being from the rival party. France began seizing American ships, and when French officials demanded bribes from U.S. diplomats (the <b>XYZ Affair</b>, 1797–98), Americans were furious. An undeclared naval “Quasi-War” with France followed.',
      'Federalists used the war fever to pass the <b>{{Alien and Sedition Acts}}</b> (1798):',
      { t: 'terms', items: [
        ['Naturalization Act', 'Raised the residency requirement for citizenship from 5 to 14 years. Immigrants tended to vote Democratic-Republican.'],
        ['Alien Acts', 'Let the president deport foreigners considered dangerous'],
        ['Sedition Act', 'Made it a crime to publish “false, scandalous and malicious” writing against the government. Several Democratic-Republican newspaper editors were jailed.']
      ] },
      'Jefferson and Madison answered secretly with the <b>Virginia and Kentucky Resolutions</b> (1798–99). They argued that the federal government is a compact among the states, so <b>states can judge whether federal laws are constitutional</b>. Kentucky’s 1799 resolution used the word “nullification.” Remember this idea, because South Carolina revives it in 1832 (Lesson 9) and the Confederacy leans on it in 1860 (Lesson 12).',
      { t: 'h', h: 'The “Revolution of 1800”' },
      'In 1800, Jefferson defeated Adams. It was ugly: Jefferson tied with his own running mate Aaron Burr in the Electoral College, and the House needed 36 ballots to choose Jefferson. The <b>12th Amendment</b> (1804) fixed the problem by having electors vote separately for president and vice president.',
      { t: 'callout', k: 'key', title: 'Why it’s called a revolution', h: 'For the first time anywhere, power passed <b>peacefully</b> from one political party to its rival through an election. Adams handed over power and went home. That is the Forever Date for 1800: the first peaceful transition of power between parties.' }
    ] },
    { title: 'Compare the first parties', blocks: [
      { t: 'diagram', name: 'parties', cur: 1 },
      { t: 'table', head: ['', 'Federalists', 'Democratic-Republicans'], rows: [
        ['Leaders', 'Alexander Hamilton, John Adams', 'Thomas Jefferson, James Madison'],
        ['Government', 'Strong national government', 'Strong state governments, limited national government'],
        ['Constitution', 'Loose construction (implied powers)', 'Strict construction'],
        ['Economy', 'Commerce, manufacturing, national bank, tariffs', 'Agriculture; against the bank'],
        ['Supporters', 'Merchants, bankers, Northeast, cities', 'Farmers, planters, South and West, immigrants'],
        ['Foreign policy', 'Pro-British', 'Pro-French'],
        ['Trust in the people', 'Feared “mobocracy”; government by the wealthy and educated', 'Trusted ordinary (white male) farmers'],
        ['Key laws', 'Hamilton’s plan, bank, Alien and Sedition Acts', 'Virginia and Kentucky Resolutions; later the Louisiana Purchase']
      ] },
      { t: 'sort', prompt: 'From your class slides: which party would each person most likely support?', buckets: ['Federalist', 'Democratic-Republican'], items: [
        ['A New England merchant', 0], ['A Maryland plantation owner', 1], ['A textile mill owner', 0], ['A farmer in Kentucky', 1], ['A Philadelphia banker', 0], ['An Irish immigrant in 1798', 1], ['Someone who thinks the bank is unconstitutional', 1], ['Someone who wants to support Britain over France', 0]
      ] },
      { t: 'check', q: 'Which party believed the national government needed to be stronger than the state governments?', o: ['Democratic-Republicans', 'Federalists', 'Anti-Federalists', 'Both parties equally'], a: 1, x: 'Federalists like Hamilton wanted a strong central government. Democratic-Republicans favored states’ rights.' }
    ] }
  ]
},

/* ───────────────────────── L8 ───────────────────────── */
{
  id: 'l08', n: 8, short: 'Marshall Court', title: 'Jefferson, the War of 1812 & the Marshall Court', era: 'A Growing Democracy', eraYears: '1800–1848', years: '1801–1824', ap: ['4.2'], sg: '10', min: 22,
  sub: 'Jefferson’s party took the presidency, but a Federalist chief justice took the Supreme Court and used it to make the national government stronger for decades.',
  objectives: ['Explain how Jefferson balanced strict construction with the Louisiana Purchase', 'Explain the War of 1812’s effect on the parties', 'Explain the significance of Marbury v. Madison, McCulloch v. Maryland and Gibbons v. Ogden'],
  sections: [
    { title: 'Jefferson in power', blocks: [
      'Jefferson (president 1801–1809) did a lot of what he promised. He cut the army and navy, repealed the whiskey tax, and paid down the national debt. But the biggest decision of his presidency contradicted his own principles.',
      'In <b>1803</b>, France offered to sell the entire Louisiana Territory for $15 million. That roughly doubled the size of the country. The problem was that the Constitution says nothing about buying land. A <b>strict constructionist</b> should say no. Jefferson considered a constitutional amendment, then decided the deal was too good to risk and bought it anyway.',
      { t: 'callout', k: 'think', h: 'The <b>Louisiana Purchase</b> is a favorite AP example of a politician acting against his stated principles. Jefferson used a loose interpretation of presidential treaty power to get land for his “empire of liberty” of small farmers. Ideals bend when practical opportunities arise.' },
      { t: 'h', h: 'The War of 1812 and the end of the Federalists' },
      'Britain and France were at war again, and both seized American ships. Britain also practiced <b>impressment</b>, kidnapping American sailors into the Royal Navy, and armed Native nations resisting U.S. expansion in the West. Young “War Hawks” in Congress pushed President Madison into war in <b>1812</b> (a Forever Date).',
      'The war went badly at times. The British burned Washington, D.C. in 1814. But Americans saw it as a <b>“Second War of Independence”</b> that proved the U.S. could stand up to Britain, especially after Andrew Jackson’s victory at New Orleans in January 1815.',
      'Meanwhile, New England Federalists, whose trade was wrecked by the war, met at the <b>Hartford Convention</b> (1814–15). They proposed constitutional amendments, and some even talked about secession. Their timing was terrible: news of the peace treaty and New Orleans arrived right after. Federalists looked disloyal, and the party died out.',
      { t: 'callout', k: 'connect', h: 'With the Federalists gone, the U.S. had essentially one party, the Democratic-Republicans, during the <b>“Era of Good Feelings”</b> under President James Monroe (1817–1825). But one party couldn’t hold together, and it split by 1828 (Lesson 9). The Federalists’ ideas didn’t vanish either: they lived on in the Supreme Court.' }
    ] },
    { title: 'Marbury v. Madison (1803)', blocks: [
      { t: 'img', src: 'john-marshall.jpg', portrait: true, cap: '<b>John Marshall</b>, Chief Justice 1801–1835. A Virginia Federalist appointed by John Adams in his final weeks in office. Over 34 years, his rulings consistently <b>strengthened the national government and the Supreme Court</b>.', credit: 'Henry Inman, 1832. Public domain.' },
      'The story starts with Adams’s last days. The lame-duck Federalist Congress passed the <b>Judiciary Act of 1801</b>, creating new judgeships, and Adams filled them with Federalists, the “midnight judges.” Some appointment papers (commissions) weren’t delivered in time. Jefferson’s Secretary of State, <b>James Madison</b>, refused to deliver them.',
      'One appointee, <b>William Marbury</b>, sued, asking the Supreme Court to order Madison to deliver his commission. A 1789 law said the Court could issue such orders.',
      { t: 'chain', title: 'Marshall’s clever ruling', items: [
        ['Yes, Marbury deserves his job', 'Madison was wrong to withhold it'],
        ['But the Court can’t order it', 'The part of the 1789 law giving the Court that power goes beyond the Constitution'],
        ['So that law is void', '“A law repugnant to the Constitution is void”'],
        ['Result: judicial review', 'The Court claims the power to strike down laws']
      ] },
      { t: 'quote', h: '“It is emphatically the province and duty of the judicial department to say what the law is.”', cite: 'Chief Justice John Marshall, Marbury v. Madison (1803)' },
      { t: 'callout', k: 'key', h: '<b>{{Judicial review}}</b>, the power of courts to declare laws unconstitutional, isn’t written in the Constitution. Marshall established it in Marbury. It was a brilliant move: Jefferson “won” the case (Marbury didn’t get his job), so Jefferson couldn’t defy the ruling, but the Court gained a huge new power.' }
    ] },
    { title: 'McCulloch v. Maryland (1819)', blocks: [
      'The first Bank of the United States expired in 1811. After the War of 1812 showed how hard it was to finance a war without one, Congress chartered the <b>Second Bank of the United States</b> in 1816. Many states hated it. <b>Maryland</b> passed a heavy tax on the bank’s Baltimore branch, and the branch cashier, James McCulloch, refused to pay.',
      'Two questions reached the Supreme Court:',
      { t: 'table', head: ['Question', 'Marshall’s answer', 'What it established'], rows: [
        ['Can Congress create a bank?', '<b>Yes.</b> Under the Necessary and Proper Clause, Congress has <b>implied powers</b>. A bank is a reasonable way to carry out its powers to tax, borrow and regulate commerce.', 'Hamilton’s <b>loose construction</b> wins'],
        ['Can a state tax the national bank?', '<b>No.</b> “The power to tax involves the power to destroy.” States can’t interfere with legitimate federal institutions.', '<b>Federal supremacy</b> over the states']
      ] },
      { t: 'check', q: 'The Supreme Court’s ruling in McCulloch v. Maryland most strongly supported the views of', o: ['Thomas Jefferson on strict construction', 'Alexander Hamilton on implied powers', 'the Anti-Federalists on reserved powers', 'the Kentucky Resolutions on state rights'], a: 1, x: 'McCulloch confirmed that Congress has implied powers under the elastic clause. That is Hamilton’s argument from 1791, nearly word for word.' }
    ] },
    { title: 'Gibbons v. Ogden (1824)', blocks: [
      'New York gave one company a monopoly on steamboat traffic in its waters. Aaron Ogden held a license from that monopoly. Thomas Gibbons ran competing steamboats between New York and New Jersey under a <b>federal</b> coasting license. Ogden sued to stop him.',
      'Marshall ruled for Gibbons. <b>Interstate commerce</b> (trade between states) includes navigation and transportation, and Congress’s power to regulate it is supreme. New York’s monopoly conflicted with federal law, so it was void.',
      { t: 'callout', k: 'key', h: 'Gibbons defined the <b>Commerce Clause</b> broadly. That opened the door for steamboats, canals and later railroads to operate freely across state lines. It also became the basis for huge expansions of federal power later, including New Deal economic regulations (Lesson 19) and the Civil Rights Act of 1964 (Lesson 21).' },
      { t: 'h', h: 'Who “won” each case?' },
      { t: 'sort', prompt: 'Your class slide asked this. Did each ruling favor a stronger national government or the states?', buckets: ['Strengthened national government / Court', 'Strengthened the states'], items: [
        ['Marbury v. Madison', 0], ['McCulloch v. Maryland', 0], ['Gibbons v. Ogden', 0], ['Maryland’s tax on the Bank', 1], ['New York’s steamboat monopoly', 1]
      ], x: 'All three Marshall Court cases strengthened federal power or the Court itself. Federalist ideas outlived the Federalist Party.' },
      { t: 'callout', k: 'exam', title: 'Practice: CEE paragraph', h: 'Your class wrote this one: <i>Explain how the power of the federal government changed in the period 1800–1824.</i> A strong answer: <b>Claim</b>: The federal government grew stronger, mainly through the Supreme Court. <b>Evidence</b>: In McCulloch v. Maryland (1819), the Court ruled that Congress had implied powers to create a national bank and that states couldn’t tax it. <b>Explanation</b>: This confirmed a loose reading of the Constitution and federal supremacy, giving the national government power well beyond what Jefferson’s party wanted.' },
      { t: 'order', prompt: 'Put these in chronological order.', items: ['Judiciary Act / midnight judges', 'Marbury v. Madison', 'Louisiana Purchase', 'War of 1812 begins', 'Hartford Convention', 'McCulloch v. Maryland', 'Missouri Compromise', 'Gibbons v. Ogden'], x: 'Marbury (Feb 1803) came just before the Louisiana Purchase deal (April–May 1803).' }
    ] }
  ]
},

/* ───────────────────────── L9 ───────────────────────── */
{
  id: 'l09', n: 9, short: 'Age of Jackson', title: 'Mass Democracy & the Age of Jackson', era: 'A Growing Democracy', eraYears: '1800–1848', years: '1800–1840', ap: ['4.7'], sg: '11–12', min: 30,
  sub: 'Property requirements fell, turnout exploded, and a rough-edged war hero became president. Democracy grew for white men, while others lost ground.',
  objectives: ['Explain why voting expanded from 1800 to 1848, and who was left out', 'Explain the “corrupt bargain” of 1824 and Jackson’s win in 1828', 'Explain how Jackson expanded presidential and federal power (nullification, the Bank War, the spoils system)', 'Compare Democrats and Whigs, and explain how new parties form'],
  sections: [
    { title: 'Who decides who votes?', blocks: [
      'Here’s something many people don’t realize: the original Constitution <b>doesn’t say who can vote</b>. It leaves voter qualifications to the <b>states</b>. So when voting rights expanded in the early 1800s, it happened state by state, as states rewrote their constitutions.',
      { t: 'table', head: ['State', 'Early constitution', 'Later change'], rows: [
        ['Massachusetts', '1780: men 21+ with a “freehold estate” (land) or property worth £60', '1821: property requirement replaced with a tax-paying requirement'],
        ['New York', '1777: men with land or who paid rent above a set value', '1821/1826: property requirement dropped for <b>white</b> men, but Black men now needed $250 in property'],
        ['New Western states', 'Ohio, Indiana, Illinois and others', 'Joined the Union with few or no property requirements, to attract settlers']
      ] },
      'By the 1840s, nearly every state had dropped property requirements. The result was <b>{{universal white manhood suffrage}}</b>: almost all adult white men could vote, regardless of wealth.',
      { t: 'h', h: 'Why did voting expand?' },
      { t: 'flip', items: [
        ['Western states', 'New frontier states needed settlers, and offering the vote was an attraction. Older states then had to compete or lose people.'],
        ['Revolutionary ideals', 'If “all men are created equal,” why should only property owners vote? Militia veterans especially asked this.'],
        ['The market economy', 'More men worked for wages in cities instead of owning land. Tying the vote to land made less sense.'],
        ['Party competition', 'Politicians realized that winning new voters could win elections, so they pushed to expand the franchise.']
      ] },
      { t: 'h', h: 'But not everyone gained' },
      'At the same time, some groups <b>lost</b> the vote. New Jersey shut out women and free Black men in 1807. New York (1821), North Carolina (1835) and Pennsylvania (1838) restricted or ended voting by free Black men. Democracy expanded for white men partly by drawing the line of race more sharply.',
      { t: 'sort', prompt: 'From your class activity: what happened to each person’s right to vote?', buckets: ['Could vote before 1800, lost it later', 'Gained the vote after 1800', 'Could vote the whole time'], items: [
        ['A New Jersey widow who inherited a small fortune and a shipbuilding business', 0],
        ['A New Jersey tradesman who makes cheap chairs by hand at home', 1],
        ['A wealthy New Jersey man who inherited a profitable shipbuilding business', 2],
        ['A free Black property owner in Pennsylvania, 1830s', 0],
        ['A landless white factory worker in New York, 1830s', 1]
      ], x: 'Wealthy white men always voted. Poorer white men gained the vote. Women in New Jersey (after 1807) and Black men in states like Pennsylvania (after 1838) lost it.' },
      { t: 'diagram', name: 'turnout', cap: 'Turnout as a percentage of eligible voters, from your class slides (1824 is a standard estimate). Notice the jump in 1828, when Jackson ran, and again in 1840, when both parties campaigned hard.' }
    ] },
    { title: 'The “corrupt bargain” of 1824', blocks: [
      'By 1824 the Federalists were gone, so all four presidential candidates were <b>Democratic-Republicans</b>: Andrew Jackson, John Quincy Adams, William Crawford and Henry Clay. No one won a majority of electoral votes, so under the 12th Amendment the <b>House of Representatives</b> chose among the top three.',
      { t: 'img', src: 'ec1824.png', cap: 'The 1824 electoral map. Jackson (orange) won the most electoral votes (99) and the most popular votes, but not a majority. Adams had 84, Crawford 41 and Clay 37.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      'Henry Clay, who came in fourth and was out of the running, was Speaker of the House. He disliked Jackson and shared Adams’s economic views. He threw his support to Adams, and the House chose Adams. Then Adams named Clay <b>Secretary of State</b>, which was seen as the stepping-stone to the presidency.',
      'Jackson’s supporters were furious. They called it a <b>{{corrupt bargain}}</b> that had stolen the election from the people. Jackson spent the next four years running against it.',
      { t: 'callout', k: 'key', h: '1824 split the Democratic-Republicans in two. Jackson’s followers became the <b>Democrats</b>. Adams and Clay’s supporters became the <b>National Republicans</b>, who later formed the core of the <b>Whigs</b>. This is the birth of the <b>{{Second Party System}}</b>.' }
    ] },
    { title: '1828: the “common man” wins', blocks: [
      { t: 'img', src: 'jackson.jpg', portrait: true, cap: '<b>Andrew Jackson</b>, president 1829–1837. An orphan from the Carolina frontier, a Tennessee lawyer and planter who enslaved people, and a hero of the War of 1812 and of brutal wars against Native nations. He had less formal education than earlier presidents, and he turned that into a strength.', credit: 'Public domain.' },
      'In <b>1828</b> (a Forever Date), Jackson crushed Adams. His campaign was a new kind of politics: rallies, parades, hickory poles (for “Old Hickory”), slogans and partisan newspapers. Party organizer <b>Martin Van Buren</b> built the Democrats into the first modern mass party. Jackson was the first president from west of the Appalachians and the first to really campaign.',
      'Jackson presented himself as the champion of the <b>common man</b> against the rich and the “corrupt” elite. His inauguration party became legendary when crowds flooded the White House. This is the root of what we now call <b>populism</b>: the idea that government should follow the will of the ordinary majority. Remember that the framers had feared exactly this “tyranny of the majority.”',
      { t: 'img', src: 'ec1828.png', cap: 'The 1828 election. Jackson (orange) swept the South and West; Adams held New England.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      { t: 'h', h: 'The spoils system' },
      'Jackson replaced many government workers with loyal supporters, a practice called the <b>{{spoils system}}</b> (“to the victor belong the spoils”). Jackson called it “rotation in office”: ordinary citizens could do government jobs, and no one should own a job for life. Critics saw corruption and incompetence. It strengthened party loyalty, and you’ll see it again in Gilded Age politics (Lesson 17).'
    ] },
    { title: 'Jackson’s power: nullification and the Bank War', blocks: [
      'Jackson preached limited government and states’ rights, yet he used presidential power more aggressively than any president before him. Here are his three big fights:',
      { t: 'h', h: '1. The Nullification Crisis (1832–33)' },
      'In 1828, Congress passed a very high protective tariff that Southerners called the <b>“Tariff of Abominations.”</b> It helped Northern manufacturers but raised prices for the South, which sold cotton abroad and bought manufactured goods. Jackson’s own vice president, <b>John C. Calhoun</b> of South Carolina, anonymously wrote that a state could <b>nullify</b> (refuse to enforce) a federal law it judged unconstitutional, which is the Virginia and Kentucky Resolutions’ idea taken further.',
      'In <b>1832</b> (a Forever Date), South Carolina declared the tariffs null and void and threatened secession. Jackson, a states’-rights man, exploded: nullification was treason. He issued a proclamation, and Congress passed the <b>Force Bill</b> (1833) authorizing military force. Henry Clay arranged a <b>Compromise Tariff</b> (1833) that slowly lowered rates, and South Carolina backed down.',
      { t: 'callout', k: 'connect', h: 'Underneath the tariff fight was <b>slavery</b>. South Carolina’s leaders feared that if the federal government could force a tariff on them, it could someday act against slavery. Nullification was practice for secession in 1860 (Lesson 12).' },
      { t: 'h', h: '2. The Bank War' },
      'Jackson hated the <b>Second Bank of the United States</b>, which he saw as a monster serving rich Eastern elites and foreign investors. In 1832, Clay and bank president Nicholas Biddle pushed a recharter bill through Congress early, hoping to make the bank an election issue. Jackson <b>vetoed</b> it. He argued the bank was unconstitutional and helped “the rich and powerful” at the expense of “the humble members of society,” even though the Supreme Court had upheld it in McCulloch. He won reelection easily, then pulled federal money out of the bank and put it into state “pet banks.” The bank died when its charter expired in 1836.',
      'The result was a burst of reckless lending and speculation, followed by the <b>Panic of 1837</b>, a severe depression under his successor, Van Buren.',
      { t: 'img', src: 'king-andrew.jpg', cap: '“King Andrew the First,” an anti-Jackson cartoon from the 1832 election. Jackson holds a <b>veto</b> and tramples the Constitution. He used the veto more than all six earlier presidents combined, and often over policy disagreements rather than constitutional ones.', credit: 'Anonymous, c. 1832. Library of Congress, public domain.' },
      { t: 'h', h: '3. Indian Removal' },
      'Jackson signed the <b>Indian Removal Act</b> (1830) to move Native nations of the Southeast west of the Mississippi. When the Supreme Court ruled in <i>Worcester v. Georgia</i> (1832) that Georgia had no authority over Cherokee land, Jackson refused to help enforce it. The forced removal of the Cherokee in 1838, the <b>Trail of Tears</b>, killed thousands. Democracy for white men expanded alongside the brutal exclusion of Native Americans.',
      { t: 'check', q: 'Which of Jackson’s actions most clearly expanded the power of the executive branch?', o: ['Signing the Compromise Tariff of 1833', 'Vetoing the Bank over policy disagreements', 'Appointing loyal supporters to federal jobs', 'Ignoring the ruling in Worcester v. Georgia'], a: 1, x: 'Earlier presidents vetoed only bills they thought unconstitutional. Jackson used the veto as a policy weapon, which made the president a major player in lawmaking. The spoils system and defying Worcester also showed his power, but the veto changed the office most lastingly.' }
    ] },
    { title: 'Democrats vs. Whigs', blocks: [
      'Jackson’s opponents organized the <b>{{Whig Party}}</b> in the mid-1830s. The name came from the British party that opposed the king, because they saw “King Andrew” as a tyrant. Their leader was Henry Clay, whose <b>{{American System}}</b> was their program: a national bank, a protective tariff, and federally funded <b>internal improvements</b> such as roads and canals to tie the national economy together.',
      { t: 'table', head: ['', 'Democrats', 'Whigs'], rows: [
        ['Leaders', 'Andrew Jackson, Martin Van Buren', 'Henry Clay, Daniel Webster, John Quincy Adams'],
        ['Government', 'Limited federal government, states’ rights (except when Jackson disagreed)', 'Active federal government to build the economy'],
        ['Economy', 'Against the national bank, against high tariffs', 'The American System: bank, tariff, internal improvements'],
        ['Supporters', 'Small farmers, the South and West, urban workers, Irish Catholic immigrants', 'Businessmen, Northern manufacturers, evangelical Protestants, reformers'],
        ['Slavery and expansion', 'Supported slavery and Indian Removal', 'Mixed; more cautious about expansion'],
        ['Echo of…', 'Jefferson’s Democratic-Republicans', 'Hamilton’s Federalists']
      ] },
      { t: 'diagram', name: 'parties', cur: 2 },
      'The two parties competed fiercely for the new mass electorate. In 1840 the Whigs beat the Democrats at their own game: they ran war hero William Henry Harrison with a “log cabin and hard cider” campaign portraying him as a common man (he was actually wealthy). Turnout hit about <b>80%</b>.',
      { t: 'callout', k: 'key', title: 'How and why new parties form', h: 'Parties form when a big new issue cuts across the old coalition. In 1824–28, that issue was personality and democracy (Jackson vs. the elite) plus the bank and tariffs, and the Democratic-Republicans split. Watch it happen again in the 1850s, when <b>slavery</b> splits the Whigs and creates the Republicans (Lesson 11).' },
      { t: 'sort', prompt: 'Democrat or Whig?', buckets: ['Democrat', 'Whig'], items: [
        ['Supports the American System', 1], ['Vetoes the Bank recharter', 0], ['Wants federally funded canals', 1], ['Calls the president “King Andrew”', 1], ['Spoils system', 0], ['Favors a high protective tariff', 1], ['Indian Removal Act', 0]
      ] }
    ] }
  ]
},

/* ───────────────────────── L10 ───────────────────────── */
{
  id: 'l10', n: 10, short: 'Expansion & compromise', title: 'Westward Expansion & the Compromises over Slavery', era: 'Slavery, Sectionalism & Civil War', eraYears: '1820–1865', years: '1787–1850', ap: ['5.4', '5.5'], sg: '13', min: 26,
  sub: 'Every time the United States grew, it had to answer the same question: would the new land allow slavery? For thirty years, Congress answered with compromises.',
  objectives: ['Explain how westward expansion forced the slavery question', 'Explain the parts of the Missouri Compromise and the Compromise of 1850', 'Describe how Northerners reacted to the Fugitive Slave Act', 'Evaluate whether the Compromise of 1850 increased or decreased sectional tension'],
  sections: [
    { title: 'Why expansion meant conflict', blocks: [
      'By the 1850s, the biggest conflict in American politics was the <b>expansion of slavery</b> into new western lands. Parties began to represent <b>sectional</b> interests (North vs. South) instead of national ones.',
      'Why did it matter so much where slavery could go? It was partly about money and power: new states meant new senators and representatives. If free states outnumbered slave states, Congress might someday restrict slavery. For Southern leaders, slavery had to expand or eventually die. For many Northerners, the West should be for free white farmers, not plantations.',
      { t: 'img', src: 'slave-free.gif', cap: 'Watch the balance shift from 1789 to 1861. Free states are blue, slave states red; free territories light blue, slave territories pink. Notice how each new territory forced a decision.', credit: 'Animated map: Wikimedia Commons, public domain / CC.' },
      { t: 'timeline', items: [
        ['1787', '<b>Northwest Ordinance</b> bans slavery north of the Ohio River (Lesson 4).'],
        ['1803', '<b>Louisiana Purchase</b> adds a huge territory that stretches into the South, next to slave states. Slavery isn’t banned there.'],
        ['1819', '<b>Florida</b> acquired from Spain. Enslaved people work its sugar and cotton plantations.'],
        ['1820', '<b>Missouri Compromise</b>', true]
      ] }
    ] },
    { title: 'The Missouri Compromise (1820)', blocks: [
      'In 1819, Missouri, part of the Louisiana Purchase, applied to join as a <b>slave state</b>. At the time there were <b>11 free and 11 slave states</b>, so the Senate was perfectly balanced. Missouri would tip it.',
      'A New York congressman, James Tallmadge, proposed gradually ending slavery in Missouri. The House (where the more populous North had more seats) passed it; the Senate blocked it. The country was suddenly furious. Henry Clay, later called “the Great Compromiser,” helped craft a deal.',
      { t: 'callout', k: 'key', title: 'The Missouri Compromise (1820)', h: ['<b>1.</b> Missouri enters as a <b>slave state</b>.', '<b>2.</b> <b>Maine</b> (split off from Massachusetts) enters as a <b>free state</b>, keeping the Senate balanced at 12–12.', '<b>3.</b> Slavery is banned in the rest of the Louisiana Purchase <b>north of 36°30′</b> latitude (Missouri’s southern border), except in Missouri itself.'] },
      { t: 'quote', h: '“This momentous question, like a fire bell in the night, awakened and filled me with terror. I considered it at once as the knell of the Union.”', cite: 'Thomas Jefferson, letter to John Holmes, 1820' },
      'The compromise kept peace for about 30 years. But Jefferson saw the danger: a line dividing the nation by slavery might become permanent.',
      { t: 'check', q: 'The Missouri Compromise preserved the balance between free and slave states mainly by', o: ['letting Missouri’s settlers vote on slavery', 'pairing free Maine with slave Missouri', 'banning slavery in all western territories', 'ending the slave trade between the states'], a: 1, x: 'Pairing Maine (free) with Missouri (slave) kept the Senate balanced. Popular sovereignty, a vote by residents, is the 1850 and 1854 approach, not 1820.' }
    ] },
    { title: 'The 1840s: a continent and a crisis', blocks: [
      { t: 'terms', items: [
        ['Texas (1836–1845)', 'American settlers in Mexican Texas, many of them slaveholders, revolted in 1836 and created an independent republic. The U.S. annexed Texas as a <b>slave state</b> in 1845.'],
        ['Oregon (1846)', 'The U.S. and Britain split the Oregon Country at the 49th parallel by treaty.'],
        ['Mexican-American War (1846–1848)', 'After a border dispute, the U.S. invaded Mexico. In the Treaty of Guadalupe Hidalgo (1848), Mexico gave up the <b>{{Mexican Cession}}</b> (California, Nevada, Utah, most of Arizona and part of New Mexico) for $15 million.']
      ] },
      'The war had barely begun when Pennsylvania congressman David Wilmot proposed the <b>{{Wilmot Proviso}}</b> (1846): slavery would be banned in <b>any</b> land taken from Mexico. It passed the House several times but always failed in the Senate. The voting was revealing: members voted by <b>section</b>, not by party. Northern Democrats and Whigs voted for it; Southern Democrats and Whigs voted against.',
      { t: 'callout', k: 'key', h: 'The Wilmot Proviso shows the moment the Second Party System began to crack. When politicians vote by region instead of party, the national parties can’t hold together.' },
      'Then gold was discovered in California in 1848. By 1849 about 100,000 people had rushed there, and California applied to join the Union as a <b>free state</b>. That would give free states a Senate majority. Southern leaders threatened secession.'
    ] },
    { title: 'The Compromise of 1850', blocks: [
      'Henry Clay, now old, proposed one more grand bargain. Daniel Webster supported it; John C. Calhoun, dying, opposed it. When it failed as one big bill, Senator <b>Stephen Douglas</b> of Illinois broke it into separate bills and passed each with a different majority. Together they became the <b>{{Compromise of 1850}}</b>.',
      { t: 'table', head: ['Part', 'Who it pleased'], rows: [
        ['1. <b>California</b> joins as a <b>free state</b>', 'North'],
        ['2. The rest of the Mexican Cession is organized into <b>Utah and New Mexico</b> territories, where slavery is decided by <b>{{popular sovereignty}}</b> (a vote of the settlers)', 'South (it could allow slavery north of 36°30′ in theory) and moderates'],
        ['3. A much harsher <b>{{Fugitive Slave Act}}</b>', 'South'],
        ['4. The <b>slave trade</b> (buying and selling, not slavery itself) is banned in <b>Washington, D.C.</b>', 'North'],
        ['5. Texas gives up land claims in New Mexico; the federal government pays Texas’s debts', 'Both']
      ] },
      { t: 'h', h: 'The Fugitive Slave Act: the part that backfired' },
      'The new Fugitive Slave Act forced the North to participate directly in slavery:',
      { t: 'terms', items: [
        ['No jury trial', 'People accused of escaping slavery couldn’t testify in their own defense or get a jury.'],
        ['Rigged pay', 'Federal commissioners got <b>$10</b> if they ruled the person was a fugitive, but only <b>$5</b> if they freed them.'],
        ['Citizens forced to help', 'Ordinary Northerners could be required to help catch fugitives and faced fines or jail for helping someone escape.'],
        ['Free people kidnapped', 'Free Black Northerners could be falsely claimed and dragged into slavery. Thousands fled to Canada.']
      ] },
      'Northern reaction was fierce. Crowds in Boston and elsewhere rescued captured fugitives. Several Northern states passed <b>personal liberty laws</b> to block enforcement, an ironic Northern use of states’ rights. In 1852, Harriet Beecher Stowe published <b><i>Uncle Tom’s Cabin</i></b>, a novel showing slavery’s cruelty that sold hundreds of thousands of copies and turned many Northerners against slavery.',
      { t: 'diagram', name: 'compromises' },
      { t: 'callout', k: 'think', title: 'Did 1850 increase or decrease tension?', h: '<b>Both.</b> In the short term, it calmed the secession crisis. In the long term, it <b>increased</b> tension. The Fugitive Slave Act turned many neutral Northerners against slavery, and popular sovereignty set up the disaster in Kansas (Lesson 11). Free states now held a Senate majority, and party loyalty weakened as regional interests took over. On the AP exam, an argument about both the short and long term earns credit for complexity.' },
      { t: 'sort', prompt: 'Which compromise included each provision?', buckets: ['Missouri Compromise (1820)', 'Compromise of 1850'], items: [
        ['Maine admitted as a free state', 0], ['California admitted as a free state', 1], ['36°30′ line', 0], ['Stricter Fugitive Slave Act', 1], ['Popular sovereignty in Utah and New Mexico', 1], ['Slave trade banned in D.C.', 1], ['Missouri admitted as a slave state', 0]
      ] }
    ] }
  ]
},

/* ───────────────────────── L11 ───────────────────────── */
{
  id: 'l11', n: 11, short: 'Failure of compromise', title: 'The Failure of Compromise: Kansas & Dred Scott', era: 'Slavery, Sectionalism & Civil War', eraYears: '1820–1865', years: '1848–1858', ap: ['5.6'], sg: '14', min: 24,
  sub: 'In four years, a new law reopened the slavery question, a territory turned violent, a new party was born, and the Supreme Court tried to end the debate and made it worse.',
  objectives: ['Compare the goals of abolitionists, Free Soilers, Southern defenders of slavery and supporters of popular sovereignty', 'Explain how the Kansas-Nebraska Act and Bleeding Kansas increased tensions', 'Explain the Dred Scott decision and its effects'],
  sections: [
    { title: 'Four views on slavery', blocks: [
      'By the 1850s, Americans held four main positions on slavery in the territories. Knowing the difference between the first two is one of the most tested ideas in this unit.',
      { t: 'table', head: ['Position', 'What they believed', 'Key people'], rows: [
        ['<b>Abolitionists</b>', 'Slavery is a moral sin and must end everywhere, many said immediately. Some supported equal rights for Black Americans.', 'William Lloyd Garrison, Frederick Douglass, Harriet Tubman'],
        ['<b>{{Free Soil}}</b>', 'Stop slavery from <b>spreading</b> into the territories, but leave it alone where it already exists. Their main concern was protecting land and jobs for <b>free white</b> farmers and workers.', 'Free Soil Party (1848), later the Republicans'],
        ['<b>Popular sovereignty</b>', 'Let the settlers of each territory vote. Supporters said it was the democratic answer: why should Congress decide?', 'Stephen Douglas, Lewis Cass'],
        ['<b>Southern pro-slavery</b>', 'Slavery is protected property under the Constitution; Congress cannot ban it anywhere. Some, like Calhoun, called it a “positive good.”', 'John C. Calhoun, Jefferson Davis']
      ] },
      { t: 'callout', k: 'mistake', title: 'Free Soilers were not abolitionists', h: 'Many Free Soilers opposed slavery’s spread because they didn’t want to compete with enslaved labor, or live near Black people at all. In 1844, Oregon’s provisional government passed a law banning Black settlers, with the threat of public whipping for those who stayed. Free Soil was often about <b>white opportunity</b>, not Black freedom. Their 1848 slogan: “Free Soil, Free Speech, Free Labor, and Free Men.”' },
      { t: 'sort', prompt: 'Who would say this?', buckets: ['Abolitionist', 'Free Soiler', 'Popular sovereignty', 'Pro-slavery Southerner'], items: [
        ['“Slavery is a sin, and the nation must end it now.”', 0], ['“Keep the West for free white farmers.”', 1], ['“Let the people of Kansas decide for themselves.”', 2], ['“Congress has no power to take our property into or out of any territory.”', 3], ['“I don’t oppose slavery in Virginia, only in Nebraska.”', 1], ['“Self-government is the most democratic solution.”', 2]
      ] }
    ] },
    { title: 'The Kansas-Nebraska Act (1854)', blocks: [
      'Senator <b>Stephen Douglas</b> of Illinois wanted a transcontinental railroad to run west from Chicago. That required organizing the huge Nebraska territory, which was north of 36°30′ and so closed to slavery by the Missouri Compromise. To win Southern votes, Douglas proposed the <b>{{Kansas-Nebraska Act}}</b>:',
      { t: 'callout', k: 'key', h: ['Split the region into two territories, <b>Kansas</b> and <b>Nebraska</b>.', 'Let settlers decide on slavery by <b>popular sovereignty</b>.', 'This meant <b>repealing the Missouri Compromise</b> line, which had kept slavery out of the area for 34 years.'] },
      'It passed in <b>1854</b> (a Forever Date), and the North erupted. A deal that had held since 1820 was simply erased. The political results were enormous:',
      { t: 'flip', items: [
        ['The Whigs collapse', 'Northern and Southern Whigs couldn’t agree on anything about slavery. The party disintegrated within two years.'],
        ['The Republican Party is born (1854)', 'Anti-Kansas-Nebraska Whigs, Free Soilers, and Northern Democrats formed a new party with one core goal: <b>stop the spread of slavery</b> into the territories. It was a purely Northern, sectional party.'],
        ['Know-Nothings rise and fall', 'The anti-immigrant, anti-Catholic American (“Know-Nothing”) Party briefly attracted ex-Whigs, then split over slavery too.']
      ] },
      { t: 'diagram', name: 'parties', cur: 3 }
    ] },
    { title: 'Bleeding Kansas', blocks: [
      'Popular sovereignty turned Kansas into a race: whichever side brought more settlers would win. Thousands of pro-slavery “Border Ruffians” crossed from Missouri to vote illegally in Kansas elections in 1855, electing a pro-slavery legislature. Free-state settlers, some armed by Northern emigrant aid societies, set up their own rival government. Kansas had two governments.',
      { t: 'timeline', items: [
        ['May 21, 1856', '<b>Sack of Lawrence</b>: a pro-slavery posse attacks the free-state town of Lawrence, burning a hotel and destroying newspaper presses.'],
        ['May 22, 1856', '<b>Caning of Sumner</b>: in the U.S. Senate, South Carolina congressman Preston Brooks beats Massachusetts senator Charles Sumner unconscious with a cane after Sumner’s antislavery speech, “The Crime Against Kansas.” Southerners send Brooks new canes as gifts.'],
        ['May 24–25, 1856', '<b>Pottawatomie Massacre</b>: the radical abolitionist <b>John Brown</b> and his sons kill five pro-slavery settlers in retaliation.']
      ] },
      'About 200 people died in “<b>{{Bleeding Kansas}}</b>.” It showed that popular sovereignty, which was supposed to be the democratic solution, led to fraud and violence instead. And the beating of a senator on the Senate floor showed that violence had reached the heart of the government.',
      { t: 'callout', k: 'think', h: 'Both sides could point to Kansas as proof of the other side’s evil. Northerners saw the “Slave Power” using fraud and terror. Southerners saw John Brown as proof that abolitionists wanted to murder them. Each event made compromise harder.' },
      'In the 1856 election, Democrat James Buchanan won. But the new Republican candidate, John C. Frémont, carried 11 of the 16 free states, though he wasn’t even on the ballot in most of the South. A purely Northern party had nearly won the presidency in its first try. Southerners noticed.'
    ] },
    { title: 'Dred Scott v. Sandford (1857)', blocks: [
      { t: 'img', src: 'dred-scott.jpg', portrait: true, cap: '<b>Dred Scott</b> (c. 1857). Born enslaved in Virginia around 1799, he was taken by an army surgeon to live for years in the free state of <b>Illinois</b> and the free <b>Wisconsin Territory</b>, where slavery was banned by the Missouri Compromise. Back in Missouri, he sued for his freedom.', credit: 'Public domain.' },
      'Scott’s case wasn’t unusual. Courts had sometimes freed enslaved people who lived in free states. But when it reached the Supreme Court, Chief Justice <b>Roger Taney</b>, from slaveholding Maryland, used it to try to settle the slavery question once and for all. The Court ruled 7–2 against Scott:',
      { t: 'flip', title: 'The three parts of the ruling', items: [
        ['1. Not a citizen', 'Black Americans, enslaved <b>or free</b>, were not and could never be U.S. citizens, so Scott had no right to sue in federal court. Taney wrote that Black people had “no rights which the white man was bound to respect.”'],
        ['2. Property', 'Enslaved people were <b>property</b>, protected by the Fifth Amendment’s ban on taking property without due process.'],
        ['3. Congress can’t ban slavery in territories', 'So the <b>Missouri Compromise was unconstitutional</b>. Slavery could legally go into any territory.']
      ] },
      { t: 'chain', title: 'Why Dred Scott made things worse', items: [
        ['South celebrates', 'Slavery is protected everywhere in the territories'],
        ['Republicans threatened', 'Their whole platform, banning slavery in territories, is now declared unconstitutional'],
        ['Popular sovereignty undermined', 'If Congress can’t ban slavery, can a territorial legislature? Douglas’s idea is in trouble.'],
        ['North enraged', 'Many fear a “Slave Power” conspiracy to spread slavery nationwide']
      ] },
      'In the 1858 Illinois Senate race, Republican <b>Abraham Lincoln</b> challenged Douglas in seven famous debates. Lincoln forced Douglas to explain how popular sovereignty could survive Dred Scott. Douglas’s answer (the <b>Freeport Doctrine</b>) was that settlers could keep slavery out simply by refusing to pass laws protecting it. Douglas won the Senate seat, but the answer angered Southern Democrats. That split comes back in Lesson 12.',
      { t: 'order', prompt: 'Put the decade of crisis in order.', items: ['Wilmot Proviso', 'Compromise of 1850', 'Uncle Tom’s Cabin published', 'Kansas-Nebraska Act', 'Caning of Charles Sumner', 'Dred Scott decision', 'Lincoln-Douglas debates'] },
      { t: 'check', q: 'The Dred Scott decision was a direct threat to the Republican Party because it', o: ['required popular sovereignty in all territories', 'ruled Congress could not ban slavery in territories', 'struck down the Fugitive Slave Act of 1850', 'gave citizenship to all free Black Americans'], a: 1, x: 'The Republicans’ core goal was to use Congress to keep slavery out of the territories. Dred Scott said that was unconstitutional.' }
    ] }
  ]
},

/* ───────────────────────── L12 ───────────────────────── */
{
  id: 'l12', n: 12, short: 'Election of 1860', title: 'The Election of 1860 & Secession', era: 'Slavery, Sectionalism & Civil War', eraYears: '1820–1865', years: '1858–1861', ap: ['5.7'], sg: '15', min: 22,
  sub: 'Four candidates, a party split in half, and a president elected without a single Southern electoral vote. Within weeks, the South began to leave.',
  objectives: ['Identify the four parties of 1860 and their positions on slavery', 'Explain who voted Republican and why Lincoln won', 'Explain why the Democrats split', 'Explain, using the secession documents themselves, why Southern states seceded'],
  sections: [
    { title: 'Road to 1860', blocks: [
      'In 1858, accepting the Republican nomination for Senate, Lincoln gave a warning that became famous:',
      { t: 'quote', h: '“A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free. I do not expect the Union to be dissolved — I do not expect the house to fall — but I do expect it will cease to be divided. It will become all one thing or all the other.”', cite: 'Abraham Lincoln, “House Divided” speech, June 1858' },
      'Then, in October 1859, <b>John Brown</b> (of Pottawatomie) led a raid on the federal arsenal at <b>Harpers Ferry, Virginia</b>, hoping to arm enslaved people for an uprising. It failed. Brown was captured and hanged. But many Northerners praised him as a martyr, and that convinced white Southerners that the North wanted to incite slave revolts. Fear in the South was at a peak going into 1860.'
    ] },
    { title: 'Four parties, four answers', blocks: [
      'The Democrats, the last truly national party, met in Charleston in April 1860. Southern delegates demanded a platform protecting slavery in all territories, which is what Dred Scott seemed to promise. Northern Democrats backed Douglas and popular sovereignty. The Southern delegates <b>walked out</b>, and the party split in two.',
      { t: 'table', head: ['Party', 'Candidate', 'Position on slavery', 'Where it won'], rows: [
        ['<b>Republican</b>', 'Abraham Lincoln (IL)', 'No expansion into the territories; won’t touch slavery where it exists. Also wanted a protective tariff, a homestead act and a transcontinental railroad.', 'Every free state (it split New Jersey)'],
        ['<b>Northern Democrat</b>', 'Stephen Douglas (IL)', 'Popular sovereignty', 'Only Missouri and part of New Jersey'],
        ['<b>Southern Democrat</b>', 'John C. Breckinridge (KY)', 'Federal protection of slavery in all territories (following Dred Scott)', 'The Deep South, plus Maryland and Delaware'],
        ['<b>Constitutional Union</b>', 'John Bell (TN)', 'Avoid the issue; preserve the Union and the Constitution', 'Virginia, Kentucky, Tennessee (the Upper South)']
      ] },
      { t: 'img', src: 'ec1860.png', cap: 'The 1860 electoral map. Lincoln (red) won 180 electoral votes, a clear majority, with only about <b>40% of the popular vote</b>. He wasn’t even on the ballot in ten Southern states. Breckinridge took 72, Bell 39 and Douglas 12.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      { t: 'reveal', title: 'Think it through', items: [
        ['Why might Missouri have voted for Douglas?', 'Missouri was a slave state but bordered free states and had many Northern-born and immigrant settlers. Douglas’s middle path, letting each territory decide, appealed to people caught between North and South.'],
        ['Why did Virginia, Kentucky and Tennessee vote for Bell?', 'These Upper South states had slavery but strong economic ties to the North, and they would be the battlefield in any war. They wanted the Union preserved and the slavery issue avoided.'],
        ['How did Lincoln win with only 40% of the vote?', 'The North had a majority of the population and therefore of electoral votes. Lincoln won almost every free state, and the opposition was split three ways. He could win the Electoral College without a single Southern vote.']
      ] }
    ] },
    { title: 'Who voted Republican, and why', blocks: [
      'The Republicans built a coalition that existed only in the North:',
      { t: 'terms', items: [
        ['Free Soil farmers', 'Wanted western land for free labor. The homestead promise of free land appealed directly to them.'],
        ['Former Northern Whigs', 'Liked the economic program: a protective tariff and a railroad. Many Pennsylvania and New Jersey voters cared most about the tariff.'],
        ['Abolitionists', 'Not satisfied with Republican moderation, but saw the party as the best available option.'],
        ['Northern workers and small businessmen', 'Believed in “free labor”: anyone could work their way up, which slavery made impossible.'],
        ['Former Know-Nothings and some immigrants', 'Many German immigrants in the Midwest were strongly antislavery.']
      ] },
      { t: 'callout', k: 'key', h: 'Republicans were <b>not</b> promising to abolish slavery. Lincoln repeatedly said he had no power or intention to interfere with slavery where it existed. But they believed that confining slavery would put it “in the course of ultimate extinction.” Southern leaders believed that too, and that is exactly why they feared him.' },
      { t: 'check', q: 'The Democratic Party split in 1860 primarily because', o: ['Northern and Southern delegates split over tariff rates', 'Southern delegates demanded a federal slave code', 'Stephen Douglas refused to accept the nomination', 'Southern delegates had joined the Constitutional Union'], a: 1, x: 'After Dred Scott, Southern Democrats wanted a federal guarantee for slavery in every territory. Douglas’s Northern wing stuck with popular sovereignty, and the convention broke apart.' }
    ] },
    { title: 'Secession', blocks: [
      { t: 'timeline', items: [
        ['Nov 6, 1860', 'Lincoln is elected.'],
        ['Dec 20, 1860', '<b>South Carolina</b> secedes, the first state to do so.'],
        ['Jan–Feb 1861', 'Mississippi, Florida, Alabama, Georgia, Louisiana and Texas follow. The <b>Confederate States of America</b> forms in February with Jefferson Davis as president.'],
        ['Mar 4, 1861', 'Lincoln’s inaugural address: “I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.” He also says secession is illegal.'],
        ['Apr 12, 1861', 'Confederate forces fire on <b>Fort Sumter</b> in Charleston Harbor. Lincoln calls for 75,000 volunteers to suppress the rebellion.'],
        ['Apr–Jun 1861', 'Second wave: <b>Virginia, Arkansas, North Carolina and Tennessee</b> secede rather than fight fellow Southern states.']
      ] },
      'Four slave states stayed in the Union: <b>Delaware, Maryland, Kentucky and Missouri</b>, the <b>{{border states}}</b>. Western Virginia broke away and joined the Union as West Virginia in 1863. Keeping the border states loyal was one of Lincoln’s top priorities, and it shaped his early war policy on slavery (Lesson 13).',
      { t: 'h', h: 'Why did they secede? Let the documents speak.' },
      'Several states published “declarations of causes” explaining why they left. They are very direct:',
      { t: 'quote', h: '“Our position is thoroughly identified with the institution of slavery — the greatest material interest of the world.”', cite: 'Mississippi Declaration of Secession, January 1861' },
      { t: 'quote', h: '“Our new government is founded upon exactly the opposite idea; its foundations are laid, its corner-stone rests, upon the great truth that the negro is not equal to the white man; that slavery, subordination to the superior race, is his natural and normal condition.”', cite: 'Confederate Vice President Alexander Stephens, “Cornerstone Speech,” March 1861' },
      { t: 'callout', k: 'mistake', title: 'The “Lost Cause” myth', h: 'Beginning in the late 1800s, some white Southerners promoted the “<b>Lost Cause</b>” story: that the war was about states’ rights, honor or tariffs rather than slavery. Groups like the United Daughters of the Confederacy built monuments and shaped textbooks for generations. Historians reject the Lost Cause because the secession documents themselves name slavery as the cause. When Southern leaders talked about “states’ rights” in 1860, the right they meant was the right to own enslaved people.' },
      { t: 'callout', k: 'connect', title: 'Continuity and change', h: 'Secession had roots: the Virginia and Kentucky Resolutions (1798), the Hartford Convention (1814) and South Carolina’s nullification (1832) all claimed states could resist federal power. What <b>changed</b> in 1860 was that a state actually left, and others followed. Your class slide asked exactly this.' },
      { t: 'check', q: 'Which piece of evidence would best support the argument that slavery was the primary cause of secession?', o: ['The South Carolina Exposition of 1828', 'The Mississippi Declaration of Secession', 'The Hartford Convention’s resolutions', 'Lincoln’s First Inaugural Address'], a: 1, x: 'The Mississippi declaration says outright that the state’s position is “thoroughly identified with the institution of slavery.” It’s a primary source from the seceding state itself.' }
    ] }
  ]
}

);
