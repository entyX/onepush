/* Lessons 0–6: Start here → Ratification */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

/* ───────────────────────── L0 ───────────────────────── */
{
  id: 'l00', n: 0, short: 'Start here', title: 'Start Here: The Big Question', era: 'Start here', eraYears: '', years: '1607–2012', ap: [], sg: '', min: 10,
  sub: 'This whole unit answers one question: how and why did American democracy develop over time? Here is the map before the journey.',
  objectives: ['Explain what “democracy” and “republic” mean, and why the difference matters', 'Describe the main storyline of the unit: who gets a voice in government, and how that changed', 'Recognize the four AP thinking skills that every question in this course tests'],
  sections: [
    { title: 'Democracy is a story, not a moment', blocks: [
      'Most people think of American democracy as something that was finished in 1776 or 1787. It wasn’t. In 1789, the vast majority of adults in the United States could not vote. Women couldn’t, enslaved people couldn’t, most free Black men couldn’t, Native Americans couldn’t, and in most states a white man who didn’t own property couldn’t either.',
      'This unit follows how that changed, and why. Every lesson adds one piece to the same story: <b>who gets a voice in government, how much power the national government should have, and who gets to decide.</b> If you keep that question in your head, the 400 years in this unit will feel like one story instead of a pile of facts.',
      { t: 'terms', items: [
        ['Democracy', 'Government by the people. Citizens hold the power, either directly or through people they elect.'],
        ['Republic', 'A government where citizens elect representatives to make decisions for them. The U.S. is a <b>representative democracy</b>, which is a kind of republic.'],
        ['Franchise / suffrage', 'The right to vote. “Enfranchise” means to give someone the vote; “disenfranchise” means to take it away.'],
        ['Federal government', 'The national government in Washington, D.C., as opposed to state governments.']
      ] },
      { t: 'h', h: 'Who could vote? A preview of the whole unit' },
      { t: 'timeline', items: [
        ['1776–1800', 'Most states let only white men who owned property vote. A few states, like New Jersey, briefly let some women and free Black men with property vote.'],
        ['1800–1850', 'States drop property requirements. Almost all <b>white men</b> can vote: “universal white manhood suffrage” (Lesson 9).'],
        ['1870', 'The <b>15th Amendment</b> says race can’t be used to deny the vote. Black men vote and hold office during Reconstruction (Lesson 14).'],
        ['1890s–1960s', 'Southern states use poll taxes, literacy tests and violence to take the vote back from Black citizens: <b>Jim Crow</b> (Lesson 16).'],
        ['1920', 'The <b>19th Amendment</b> gives women the vote nationwide (Lesson 18).'],
        ['1964–1965', 'The <b>24th Amendment</b> bans poll taxes in federal elections, and the <b>Voting Rights Act</b> enforces the 15th Amendment at last (Lesson 21).']
      ] },
      { t: 'callout', k: 'key', h: 'Democracy in the U.S. expanded in fits and starts. It moved forward, got pushed back, and moved forward again. AP questions love asking you to explain <b>why</b> it changed at a particular moment, so watch for the causes in every lesson.' }
    ] },
    { title: 'The map of the unit', blocks: [
      'Your teacher organizes American political history into <b>party systems</b>. A party system is a stretch of time when the same two major parties compete over the same big issues. When the big issues change, the parties break apart and re-form, and a new system begins.',
      'You don’t need to memorize this yet. Use it as a map. Each lesson will tell you which system you’re in. Tap any row to read a summary.',
      { t: 'diagram', name: 'parties', cap: 'The six party systems. Your class slides use the same structure.' },
      { t: 'callout', k: 'connect', title: 'How the lessons connect', h: 'Each era sets up the next. Colonial self-government (Lesson 1) makes British taxes feel like tyranny (Lesson 2). Fear of tyranny produces a weak first government (Lesson 4), which fails and leads to the Constitution (Lesson 5). The Constitution’s vague spots, like how much power Congress really has, start the first party fight (Lesson 7). Keep looking for these links.' }
    ] },
    { title: 'How APUSH tests you', blocks: [
      'AP U.S. History doesn’t just ask “what happened.” It asks you to <b>think</b> with what happened. Almost every question uses one of these skills:',
      { t: 'flip', title: 'The AP thinking skills', items: [
        ['Causation', 'What caused this, and what did it cause? Example: “Which of the following was the most important cause of the Stamp Act protests?”'],
        ['Comparison', 'How are two things alike or different? Example: Federalists vs. Anti-Federalists.'],
        ['Continuity & Change', 'Over a stretch of time, what changed and what stayed the same? Example: how voting rights changed from 1800 to 1850.'],
        ['Contextualization', 'What bigger situation was happening when this source was created? Example: what was going on in 1850 when the Fugitive Slave Act passed?'],
        ['Sourcing', 'Who made this source, for what audience, and why? Point of view and purpose shape what it says.'],
        ['Claims & evidence', 'Which fact best supports, or challenges, an argument?']
      ] },
      { t: 'sort', prompt: 'Which skill is each question testing?', buckets: ['Causation', 'Comparison', 'Contextualization'], items: [
        ['Which development most directly led to the Constitutional Convention?', 0],
        ['How did the Whigs’ views differ from the Democrats’?', 1],
        ['The excerpt above was most likely written in response to which development?', 2],
        ['What was a major effect of the Compromise of 1877?', 0],
        ['New England and the Middle Colonies were similar in that both…', 1],
        ['Which larger trend best explains the ideas in the excerpt?', 2]
      ] },
      { t: 'h', h: 'The exam format' },
      { t: 'table', head: ['Section', 'What it is', 'Weight'], rows: [
        ['Multiple choice', '55 questions in 55 minutes. They come in sets of 2–4, and each set is based on a source: a quote, a map, a cartoon or a chart.', '40%'],
        ['Short answer (SAQ)', '3 questions in 40 minutes. Each has parts A, B and C, worth 1 point each.', '20%'],
        ['DBQ', 'An essay using 7 documents. You’ll learn it later in the year.', '25%'],
        ['LEQ', 'An essay with no documents. You’ll learn it later in the year.', '15%']
      ], cap: 'Your unit test uses the multiple-choice and SAQ formats, and so do the practice tests on this site.' },
      { t: 'check', q: 'You read a 1765 pamphlet protesting a British tax. A question asks, “The ideas in the excerpt most directly reflect which of the following?” Which skill is this?', o: ['Comparison', 'Contextualization', 'Continuity and change', 'Sourcing'], a: 1, x: 'You need to place the source in its bigger situation, Britain’s new taxes after the French and Indian War. That is contextualization.' },
      { t: 'callout', k: 'exam', title: 'How to use this site', h: ['<b>1.</b> Do the lessons in order. Try every interactive check, because getting things wrong in practice is how you learn.', '<b>2.</b> After each lesson, drill its questions in the Question Bank.', '<b>3.</b> Review flashcards every day, even for 5 minutes.', '<b>4.</b> When you’ve finished most lessons, take a timed practice test.'] }
    ] }
  ]
},

/* ───────────────────────── L1 ───────────────────────── */
{
  id: 'l01', n: 1, short: 'Thirteen Colonies', title: 'The Thirteen Colonies', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1607–1754', ap: ['2.3'], sg: '1', min: 18,
  sub: 'Three regions with very different ways of life. Geography, religion and money shaped each one, and so did a long British habit of leaving the colonists alone.',
  objectives: ['Name which colonies belonged to New England, the Middle Colonies and the South (including the Chesapeake)', 'Explain why each region developed a distinct identity', 'Describe mercantilism and salutary neglect, and why self-government became normal in the colonies'],
  sections: [
    { title: 'Why the colonies weren’t all the same', blocks: [
      'England founded its North American colonies between 1607 (Jamestown, Virginia) and 1732 (Georgia). They weren’t planned as one country. Different groups started them for different reasons: some for profit, some for religious freedom, and some as gifts of land to a king’s friends.',
      'Three forces shaped each region: <b>geography and climate</b> (what you can grow), <b>why the settlers came</b> (money or religion), and <b>who did the work</b> (families, servants or enslaved people). Put those together and you get three very different societies.',
      { t: 'img', src: 'colonies-1775.png', cap: 'The British colonies in 1775. Notice the <b>Proclamation Line of 1763</b> running along the Appalachian Mountains. You’ll meet it in Lesson 2.', credit: 'Map: Wikimedia Commons, public domain.' },
      { t: 'table', head: ['Region', 'Colonies'], rows: [
        ['New England', 'Massachusetts, Connecticut, Rhode Island, New Hampshire'],
        ['Middle Colonies', 'New York, New Jersey, Pennsylvania, Delaware'],
        ['Southern Colonies', 'Maryland, Virginia, North Carolina, South Carolina, Georgia'],
        ['Chesapeake (part of the South)', 'Virginia and Maryland, the colonies around Chesapeake Bay']
      ] },
      { t: 'callout', k: 'mistake', h: 'Students often put Maryland in the Middle Colonies. On the AP exam, Maryland is a <b>Chesapeake</b> colony, which is part of the South. Like Virginia, it was built on tobacco.' }
    ] },
    { title: 'New England: towns, churches and trade', blocks: [
      'New England was settled mostly by <b>Puritans</b>, English Protestants who wanted to “purify” the Church of England. They came in <b>families</b>, not as single young men, and they came for religious reasons. They wanted to build a model Christian society, which their leader John Winthrop called “a city upon a hill.”',
      'The land was rocky and the winters were long, so large plantations never worked there. Instead, families ran <b>small farms</b> and the region built a <b>diversified economy</b> of fishing, shipbuilding, lumber and Atlantic trade. Boston became a busy port.',
      'Religion shaped government. Towns held <b>town meetings</b> where male church members debated and voted on local issues, an early form of direct self-government. But Puritans were <b>not</b> religiously tolerant. People who disagreed, like Roger Williams and Anne Hutchinson, were banished. Williams went on to found Rhode Island, which allowed religious freedom.',
      { t: 'callout', k: 'key', h: 'New England: <b>least religiously tolerant, fairly equal economically, most diversified economy</b>. Families, small farms, towns, trade.' }
    ] },
    { title: 'The Middle Colonies: grain and diversity', blocks: [
      'The Middle Colonies had richer soil and milder weather. Farmers grew <b>cereal crops</b>, grains like wheat, corn and oats, so much that the region became known as the “breadbasket” of the colonies. Cities like Philadelphia and New York grew rich exporting grain and flour.',
      'This region was the most <b>diverse</b>. New York began as the Dutch colony of New Netherland. Pennsylvania was founded by William Penn, a <b>Quaker</b>, as a “holy experiment” in religious freedom. Germans, Scots-Irish, Dutch, Swedes, English, Quakers, Catholics and Jews all lived there.',
      { t: 'callout', k: 'key', h: 'Middle Colonies: <b>most religiously tolerant and most ethnically diverse</b>. Grain farming, busy ports, a moderate gap between rich and poor.' }
    ] },
    { title: 'The South and the Chesapeake: cash crops and slavery', blocks: [
      'The South had a long growing season and rich soil, which was perfect for <b>cash crops</b>: crops grown to sell for profit rather than to eat. In the Chesapeake (Virginia and Maryland) the crop was <b>tobacco</b>. In the Carolinas and Georgia it was <b>rice</b> and <b>indigo</b> (a blue dye).',
      'Cash crops need huge amounts of labor. At first the Chesapeake relied on <b>indentured servants</b>: poor English people who agreed to work 4–7 years in exchange for passage to America. After 1676, when former servants joined <b>Bacon’s Rebellion</b> against Virginia’s government, planters increasingly turned to <b>enslaved Africans</b>, whose slavery was permanent and hereditary. By the 1700s the South was a slave society.',
      'This created <b>plantation agriculture</b>: a few wealthy planters owned huge estates and most of the political power, while most people were poor farmers or enslaved. The South was the <b>most economically stratified</b> region, meaning the gap between top and bottom was the widest. Its economy was the <b>least diversified</b> because it depended on a few export crops.',
      'One more key fact for this unit: Virginia’s <b>House of Burgesses</b> (1619) was the first elected representative assembly in the English colonies. Even here, the habit of self-government started early.',
      { t: 'table', head: ['', 'New England', 'Middle', 'South / Chesapeake'], rows: [
        ['Economy', 'Fishing, shipbuilding, trade, small farms', 'Cereal crops (wheat), trade', 'Cash crops: tobacco, rice, indigo'],
        ['Labor', 'Family farms', 'Family farms, some servants', 'Indentured servants, then enslaved Africans'],
        ['Religion', 'Puritan, least tolerant', 'Quaker and many others, most tolerant', 'Anglican (Church of England)'],
        ['Society', 'Least stratified', 'Moderate', 'Most stratified'],
        ['Government', 'Town meetings', 'Assemblies', 'House of Burgesses (1619), planter elite']
      ] },
      { t: 'sort', prompt: 'Sort each description into its region.', buckets: ['New England', 'Middle Colonies', 'South / Chesapeake'], items: [
        ['Puritan town meetings', 0], ['Wheat and flour exports', 1], ['Tobacco plantations', 2], ['William Penn’s “holy experiment”', 1], ['Shipbuilding and fishing', 0], ['Indentured servitude, then slavery', 2], ['Rice and indigo', 2], ['Roger Williams banished', 0], ['Most ethnically diverse', 1]
      ] },
      { t: 'check', q: 'Your class asked: <i>which two regions were most similar?</i> Which pair has the strongest case?', o: ['New England and the South, since both were settled by English Protestants', 'New England and the Middle Colonies, since both had family farms and ports', 'The Middle Colonies and the South, since both exported large cash crops', 'The South and New England, since both had strong elected assemblies'], a: 1, x: 'New England and the Middle Colonies both relied on family farming, port cities and mixed economies, and slavery was far less central to either. The South stands apart because of cash crops, plantations and a slave labor system.' }
    ] },
    { title: 'Mercantilism and salutary neglect', blocks: [
      'Why did Britain want colonies at all? The answer is <b>{{mercantilism}}</b>, the main economic idea of the 1600s and 1700s. Mercantilists believed the world had a fixed amount of wealth, measured in gold and silver. A country got richer by <b>exporting more than it imported</b>. Colonies were useful because they supplied raw materials and bought the mother country’s manufactured goods.',
      { t: 'diagram', name: 'atlantic', cap: 'The colonies’ place in the Atlantic trade system. Goods, money and enslaved people moved around the Atlantic.' },
      'To control this trade, Parliament passed the <b>{{Navigation Acts}}</b> (starting in 1651). They required colonial trade to use English or colonial ships and required certain goods, like tobacco, to be shipped only to England.',
      'But here’s the twist. Britain rarely enforced these laws. Officials took bribes, smuggling was common, and London was busy with wars and politics at home. From about 1690 to 1763 Britain mostly left the colonies alone, a policy later called <b>{{salutary neglect}}</b>. (“Salutary” means helpful; the neglect was good for everyone, because the colonies grew rich and Britain profited.)',
      { t: 'chain', title: 'Why this matters for democracy', items: [
        ['Salutary neglect', 'Britain stays hands-off for decades'],
        ['Self-government grows', 'Colonial assemblies control taxes and pass their own laws'],
        ['Colonists expect it', 'They see self-rule as their right as English subjects'],
        ['1763: Britain cracks down', 'New taxes feel like an attack on their rights (Lesson 2)']
      ] },
      { t: 'callout', k: 'connect', h: 'Under salutary neglect, colonial legislatures got used to holding the <b>“power of the purse,”</b> meaning they alone decided taxes and paid the royal governors’ salaries. When Parliament suddenly started taxing them directly after 1763, colonists saw it as a break with how things had always worked. That is the spark for Lesson 2.' },
      { t: 'check', q: 'Which statement best explains how salutary neglect affected colonial politics?', o: ['It made colonists rely on royal governors to write laws', 'It let colonial assemblies gain real self-government', 'It led Parliament to repeal the Navigation Acts', 'It pushed colonists to seek seats in Parliament'], a: 1, x: 'Because Britain didn’t closely enforce its laws, colonial assemblies ran most of their own affairs, including taxes. The Navigation Acts stayed on the books; they just weren’t enforced much.' }
    ] }
  ]
},

/* ───────────────────────── L2 ───────────────────────── */
{
  id: 'l02', n: 2, short: 'Road to Revolution', title: 'The Road to Revolution', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1754–1775', ap: ['3.2', '3.3'], sg: '2–3', min: 25,
  sub: 'Britain won a world war and ended up with a huge debt. When Parliament tried to make the colonists help pay it, salutary neglect ended and the road to revolution began.',
  objectives: ['Explain the causes and results of the French and Indian War', 'Trace British policies from 1763 to 1775 and the colonial reaction to each', 'Explain how colonists justified resistance, and the methods they used'],
  sections: [
    { title: 'The French and Indian War (1754–1763)', blocks: [
      'By the 1750s, Britain and France were rivals around the world. In North America, both claimed the <b>Ohio River Valley</b>, rich land west of the Appalachian Mountains. The French built forts there to protect their fur trade; British colonists, especially land speculators from Virginia, wanted to settle it.',
      'In <b>1754</b> (a Forever Date), a young Virginia militia officer named <b>George Washington</b> clashed with French troops in the Ohio Valley and was forced to surrender at Fort Necessity. Those skirmishes grew into the <b>{{French and Indian War}}</b>. It spread to Europe and beyond, where it’s called the <b>Seven Years’ War</b>. The name comes from who the British colonists fought: the French and their Native American allies.',
      { t: 'img', src: 'join-or-die.jpg', cap: '“Join, or Die,” Benjamin Franklin’s 1754 cartoon. It urged the colonies to unite against the French. At the <b>Albany Congress</b> that year, Franklin proposed the <b>Albany Plan of Union</b>, a shared colonial government. Every colony rejected it, which shows how separate they still felt.', credit: 'Pennsylvania Gazette, 1754. Public domain.' },
      'After early losses, Britain poured in troops and money and won. The <b>Treaty of Paris (1763)</b> removed France from mainland North America. Britain took Canada and all French land east of the Mississippi River, and Spain took Louisiana.',
      { t: 'h', h: 'Three results that set up a revolution' },
      { t: 'flip', items: [
        ['1. A massive debt', 'Britain’s national debt nearly doubled. Parliament decided the colonists, who had been protected by the war, should help pay for it and for the 10,000 troops now stationed in America.'],
        ['2. New western land, and new conflict', 'Native nations who had traded with the French now faced British settlers. In 1763 the Odawa leader <b>Pontiac</b> led a war against British forts. Britain wanted to avoid more expensive wars.'],
        ['3. Less need for Britain', 'With France gone, colonists no longer needed British protection. Many also felt colonial soldiers had been looked down on by British officers.']
      ] }
    ] },
    { title: 'Salutary neglect ends: 1763–1766', blocks: [
      'Starting in 1763, Britain tried to tighten control and raise money. Each new policy got a stronger reaction from the colonists.',
      { t: 'table', head: ['Policy', 'What it did', 'Why colonists objected'], rows: [
        ['{{Proclamation of 1763}}', 'Banned colonial settlement west of the Appalachian Mountains to prevent wars with Native nations', 'Colonists had just fought for that land. Veterans and land speculators like Washington felt cheated.'],
        ['{{Sugar Act}} (1764)', 'Actually <i>lowered</i> the tax on molasses, but strictly enforced it. Smugglers were tried in vice-admiralty courts with no jury.', 'It was meant to raise money, not just regulate trade, and it took away jury trials.'],
        ['{{Quartering Act}} (1765)', 'Required colonies to house and supply British troops', 'Why keep a standing army in peacetime? Colonists saw it as a threat to liberty.'],
        ['{{Stamp Act}} (1765)', 'A <b>direct tax</b> on printed paper: newspapers, legal documents, playing cards', 'The first direct tax Parliament ever put on the colonies. It hit lawyers, printers and merchants, who were the most vocal colonists.']
      ] },
      'The Stamp Act caused an explosion. The protests were massive:',
      { t: 'terms', items: [
        ['Stamp Act Congress (1765)', 'Nine colonies sent delegates to New York. They declared that only colonial assemblies could tax the colonies. This was an early sign of colonies cooperating.'],
        ['Sons of Liberty', 'Protest groups that intimidated stamp distributors, sometimes violently, until nearly all of them resigned.'],
        ['Boycotts (nonimportation)', 'Merchants agreed not to import British goods. British merchants, hurt by lost sales, pressured Parliament.'],
        ['Result', 'Parliament <b>repealed</b> the Stamp Act in 1766 but passed the <b>Declaratory Act</b>, insisting it could make laws for the colonies “in all cases whatsoever.”']
      ] },
      { t: 'h', h: '“No taxation without representation”' },
      'This slogan sums up the colonists’ argument. As English subjects, they said, they had the right to be taxed only by representatives they elected. They elected their own assemblies, but they had no members in Parliament. So Parliament couldn’t tax them.',
      'British leaders answered with <b>{{virtual representation}}</b>: every member of Parliament represented all British subjects everywhere, including colonists, even if the colonists didn’t vote for them. Colonists rejected this. They believed in <b>actual representation</b>, meaning you must be able to vote for your representative.',
      { t: 'callout', k: 'key', h: 'At first, colonists weren’t trying to leave Britain. They were demanding their <b>rights as Englishmen</b>. They were protesting to restore the old relationship, salutary neglect, not to start a new country.' }
    ] },
    { title: 'Escalation: 1767–1774', blocks: [
      { t: 'timeline', items: [
        ['1767', '<b>Townshend Acts</b>: taxes on imported glass, lead, paint, paper and tea. Colonists boycott again. Women’s groups such as the Daughters of Liberty spin homemade cloth to replace British goods.'],
        ['1770', '<b>Boston Massacre</b>: British soldiers fire into a crowd, killing five colonists. Most Townshend taxes are repealed, except the tax on tea.'],
        ['1772', '<b>Committees of Correspondence</b>: networks of letter-writers (started by Samuel Adams) spread news between towns and colonies.'],
        ['1773', '<b>{{Tea Act}}</b>: gives the struggling British East India Company a monopoly on tea sales. Tea actually gets <i>cheaper</i>, but the old tea tax stays.'],
        ['Dec 1773', '<b>{{Boston Tea Party}}</b>: colonists disguised as Mohawks dump 342 chests of tea into Boston Harbor.'],
        ['1774', '<b>Coercive (“Intolerable”) Acts</b>: Britain closes Boston Harbor, limits Massachusetts self-government and town meetings, and expands quartering.']
      ] },
      { t: 'img', src: 'boston-massacre.jpg', cap: 'Paul Revere’s engraving of the Boston Massacre (1770). This is <b>propaganda</b>: it shows orderly soldiers firing on peaceful citizens, but the real event began with a crowd taunting soldiers and throwing snowballs and objects. On the AP exam, always ask: <i>who made this, and why?</i>', credit: 'Paul Revere, 1770. Public domain.' },
      { t: 'callout', k: 'think', title: 'Why protest cheaper tea?', h: 'The Tea Act lowered tea prices, so why did colonists destroy the tea? Because buying it meant accepting Parliament’s right to tax them. It was about the <b>principle</b>, not the price. Smuggling merchants, who would lose business to the East India Company’s monopoly, were also furious.' },
      { t: 'img', src: 'tea-party.jpg', cap: 'A later (1846) Currier lithograph of the Boston Tea Party. Images like this, made decades later, helped turn the event into a national legend.', credit: 'Nathaniel Currier, 1846. Public domain.' }
    ] },
    { title: 'From protest to war: 1774–1775', blocks: [
      'The Intolerable Acts backfired. Instead of isolating Boston, they convinced other colonies that any of them could be next. In <b>September 1774</b>, twelve colonies sent delegates to the <b>{{First Continental Congress}}</b> in Philadelphia. They organized a boycott of British goods, petitioned the king to restore their rights, and agreed to meet again.',
      'In <b>April 1775</b>, British troops marched to <b>Lexington and Concord</b> to seize colonial weapons. Militia fought back, “the shot heard round the world,” and the Revolutionary War began.',
      'The <b>{{Second Continental Congress}}</b> met in <b>May 1775</b>. It became the colonies’ government during the war. It created the Continental Army, named George Washington commander, and printed money. It also sent the king the <b>Olive Branch Petition</b>, one last attempt at peace. King George III refused to read it and declared the colonies in rebellion. Independence was now on the table (Lesson 3).',
      { t: 'order', prompt: 'Put these events in chronological order.', items: ['French and Indian War begins', 'Proclamation of 1763', 'Stamp Act', 'Townshend Acts', 'Boston Massacre', 'Boston Tea Party', 'First Continental Congress', 'Lexington and Concord'] },
      { t: 'sort', prompt: 'British action or colonial response?', buckets: ['British action', 'Colonial response'], items: [
        ['Declaratory Act', 0], ['Stamp Act Congress', 1], ['Committees of Correspondence', 1], ['Coercive Acts', 0], ['Nonimportation boycotts', 1], ['Quartering Act', 0], ['Sons of Liberty intimidate tax collectors', 1], ['Tea Act', 0]
      ] },
      { t: 'chain', title: 'The big cause-and-effect chain', items: [
        ['War debt', 'The French and Indian War leaves Britain deeply in debt'],
        ['New taxes', 'Parliament taxes the colonies directly (Stamp Act)'],
        ['Resistance', 'Boycotts, protests, congresses: “no taxation without representation”'],
        ['Crackdown', 'Britain punishes Boston (Coercive Acts)'],
        ['Unity and war', 'The colonies unite; fighting begins in 1775']
      ] },
      { t: 'check', q: 'Which of the following best explains why Parliament began taxing the colonies after 1763?', o: ['To punish Boston for destroying East India tea', 'To pay off war debt and the cost of defense', 'To fund new manufacturing in the colonies', 'To end smuggling with the French West Indies'], a: 1, x: 'The French and Indian War left Britain with an enormous debt plus the cost of troops in America. The Tea Party came later (1773), and stopping smuggling was a secondary goal of the Sugar Act, not the main reason for taxing.' }
    ] }
  ]
},

/* ───────────────────────── L3 ───────────────────────── */
{
  id: 'l03', n: 3, short: 'Enlightenment & states', title: 'Common Sense, Independence & the First State Constitutions', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1689–1780', ap: ['3.4'], sg: '4', min: 22,
  sub: 'Ideas from the Enlightenment gave colonists a reason to break away completely, and a blueprint for the new governments they built in every state.',
  objectives: ['Explain natural rights, the social contract and separation of powers, and who came up with each', 'Explain how Common Sense and the Declaration of Independence used Enlightenment ideas', 'Compare the first state constitutions, including how they handled voting and slavery'],
  sections: [
    { title: 'The Enlightenment: reason applied to government', blocks: [
      'The <b>{{Enlightenment}}</b> was an intellectual movement of the 1600s and 1700s in Europe. Its thinkers believed that human <b>reason</b>, careful logical thinking, could improve society, including government. Educated colonists like Jefferson, Adams and Franklin read these writers closely.',
      { t: 'flip', title: 'Three thinkers you must know', items: [
        ['John Locke<br><small>England, 1690</small>', '<b>Natural rights</b>: everyone is born with rights to life, liberty and property. Government is a <b>social contract</b>: people agree to be governed in exchange for protection of those rights. If a government breaks the deal, the people may <b>overthrow</b> it.'],
        ['Montesquieu<br><small>France, 1748</small>', '<b>Separation of powers</b>: split government into three branches (legislative, executive, judicial) so no single person or group holds all the power.'],
        ['Jean-Jacques Rousseau<br><small>France, 1762</small>', 'Also wrote about the <b>social contract</b>: legitimate government comes from the “general will” of the people, which is the idea of <b>popular sovereignty</b>.']
      ] },
      { t: 'callout', k: 'key', h: 'The big shift: power comes <b>from the people</b>, not from God or a king. Locke’s idea that people can overthrow a government that violates their rights is the logic of the whole American Revolution.' }
    ] },
    { title: 'Common Sense (1776)', blocks: [
      { t: 'img', src: 'common-sense.jpg', portrait: true, cap: '<b>Common Sense</b> by Thomas Paine, published January 1776. Paine was a recent immigrant from England. Before him, most colonists still blamed Parliament and hoped the king would help. Paine attacked the king himself, and the whole idea of monarchy.', credit: 'Title page, 1776. Public domain.' },
      'Paine wrote in <b>plain, direct language</b> that ordinary farmers and workers could understand, and it was read aloud in taverns and churches. He argued that hereditary monarchy was absurd: why should someone rule just because of who their father was? He argued that it made no sense for an island to rule a continent, and that independence was the only common-sense choice.',
      { t: 'quote', h: '“There is something very absurd, in supposing a continent to be perpetually governed by an island.”', cite: 'Thomas Paine, Common Sense (1776)' },
      'Common Sense was a sensation. Tens of thousands of copies sold within months, in a population of about 2.5 million. It moved public opinion from <i>reconciliation</i> toward <i>independence</i>.'
    ] },
    { title: 'The Declaration of Independence (1776)', blocks: [
      'On <b>July 4, 1776</b> (a Forever Date), the Second Continental Congress adopted the <b>{{Declaration of Independence}}</b>, written mainly by <b>{{Thomas Jefferson}}</b> of Virginia. It has three parts, and the first is pure Locke:',
      { t: 'quote', h: '“We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.”', cite: 'Declaration of Independence, 1776' },
      { t: 'table', head: ['Part', 'What it says', 'Enlightenment link'], rows: [
        ['1. Philosophy', 'People have natural rights; government exists to protect them; when it fails, people can replace it', 'Locke’s natural rights and social contract'],
        ['2. Grievances', 'A long list of King George III’s abuses: taxing without consent, quartering troops, dissolving assemblies', 'Proves the king broke the contract'],
        ['3. Declaration', 'The colonies are “free and independent states”', 'The right of revolution']
      ] },
      { t: 'img', src: 'declaration.jpg', cap: 'John Trumbull’s painting of the committee presenting the Declaration to Congress (painted 1817–1819). Jefferson stands at the center holding the document.', credit: 'John Trumbull. Public domain.' },
      { t: 'callout', k: 'think', title: 'The contradiction', h: '“All men are created equal” was written by a man who enslaved more than 600 people over his lifetime. Jefferson’s draft included a passage blaming the king for the slave trade, but Congress cut it, partly to satisfy South Carolina and Georgia. The gap between the Declaration’s ideals and reality becomes a <b>huge theme</b> of this unit. Abolitionists, women’s rights activists and civil rights leaders all later quoted the Declaration to demand equality.' },
      { t: 'check', q: 'The phrase “deriving their just powers from the consent of the governed” most directly reflects which idea?', o: ['Mercantilism', 'Divine right', 'The social contract', 'Virtual representation'], a: 2, x: 'Government gets its legitimate power from the people’s agreement. That is the social contract (Locke). Divine right of kings is the opposite idea.' }
    ] },
    { title: 'Writing the first state constitutions', blocks: [
      'Independence meant the colonies, now states, needed new governments. Between 1776 and 1780, almost every state wrote a <b>written constitution</b>. That was itself an Enlightenment idea: the rules of government should be written down where everyone can read them, not based on tradition like Britain’s unwritten constitution.',
      { t: 'h', h: 'What most states had in common' },
      { t: 'terms', items: [
        ['Written constitutions', 'Clear rules everyone could point to'],
        ['Bills of rights', 'Lists of protected freedoms. Virginia’s Declaration of Rights (1776, by George Mason) became a model.'],
        ['Weak governors', 'After their experience with royal governors and the king, states gave governors little power: short terms and often no veto.'],
        ['Strong legislatures', 'Elected assemblies held most of the power, because they were closest to the people.'],
        ['Property requirements', 'Most states still required voters, and especially officeholders, to own property or pay taxes.']
      ] },
      { t: 'h', h: 'How they differed' },
      { t: 'table', head: ['State', 'Notable feature'], rows: [
        ['Pennsylvania (1776)', 'The most democratic. A <b>unicameral</b> (one-house) legislature, no governor (a council instead), and voting for all male taxpayers.'],
        ['Massachusetts (1780)', 'Written by John Adams, more balanced: a <b>bicameral</b> legislature, a strong governor with a veto, and <b>three branches</b>. It was the first constitution approved by a special convention and a vote of the people, and it became a model for the U.S. Constitution.'],
        ['New Jersey (1776)', 'Let “all inhabitants” worth £50 vote. Some property-owning <b>women and free Black men voted</b> until a 1807 law limited voting to white men.'],
        ['Southern states', 'Kept higher property requirements and protected slavery.']
      ] },
      { t: 'h', h: 'Slavery and the state constitutions' },
      'Revolutionary ideals pushed some Northern states to act against slavery. <b>Vermont’s</b> 1777 constitution banned adult slavery. <b>Pennsylvania</b> passed the first <b>{{gradual emancipation}}</b> law in 1780: children born to enslaved mothers after that date would be freed at age 28. In <b>Massachusetts</b>, enslaved people like Quock Walker and Elizabeth Freeman sued, citing the 1780 constitution’s statement that “all men are born free and equal,” and courts effectively ended slavery there by 1783. New York (1799) and New Jersey (1804) passed gradual emancipation laws as well.',
      'But gradual meant slow. Some people stayed enslaved in New Jersey until the 13th Amendment in 1865. And no Southern state abolished slavery. This North–South split grows into the central conflict of Lessons 10–13.',
      { t: 'sort', prompt: 'Success or failure? Sort each feature of the state constitutions by whether it lived up to revolutionary ideals.', buckets: ['Lived up to the ideals', 'Fell short'], items: [
        ['Written bills of rights', 0], ['Property requirements to vote', 1], ['Gradual emancipation in Pennsylvania', 0], ['Slavery protected in the South', 1], ['Elected legislatures hold most power', 0], ['Women excluded from voting (except briefly in NJ)', 1]
      ] },
      { t: 'callout', k: 'connect', h: 'States made governors weak because they feared executive tyranny. The first national government, the Articles of Confederation (Lesson 4), went even further: it had <b>no executive at all</b>. That fear of concentrated power runs through everything until 1787.' }
    ] }
  ]
},

/* ───────────────────────── L4 ───────────────────────── */
{
  id: 'l04', n: 4, short: 'Articles of Confederation', title: 'The Articles of Confederation', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1777–1787', ap: ['3.7'], sg: '5', min: 18,
  sub: 'America’s first national government was weak on purpose. It won a war and organized the West, but by 1786 many leaders thought it was falling apart.',
  objectives: ['Describe how the Articles of Confederation structured the national government', 'Identify its weaknesses and its real accomplishments', 'Explain the problems of the “Critical Period” and why Shays’ Rebellion was a turning point'],
  sections: [
    { title: 'A government designed to be weak', blocks: [
      'Remember why the colonists rebelled: they feared a distant, powerful government that could tax them without consent. So when the Second Continental Congress drafted the first national constitution, the <b>{{Articles of Confederation}}</b> (drafted 1777, <b>adopted 1781</b>, a Forever Date), it built a “firm league of friendship” among sovereign states, <b>not</b> a strong central government.',
      { t: 'table', head: ['Feature', 'How it worked under the Articles'], rows: [
        ['Legislature', 'One house (unicameral): the Confederation Congress'],
        ['Voting in Congress', '<b>Each state got one vote</b>, regardless of population'],
        ['Executive', '<b>None.</b> There was no president to enforce laws.'],
        ['Courts', '<b>None.</b> There was no national court system.'],
        ['Passing laws', 'Major laws needed <b>9 of 13</b> states to agree'],
        ['Amending the Articles', 'Required <b>unanimous</b> (13 of 13) approval'],
        ['Taxes', '<b>Congress could not tax.</b> It could only ask states for money (“requisitions”).'],
        ['Trade', 'Congress could not regulate trade between states or with other countries']
      ] },
      'Why ratification took until 1781: <b>Maryland</b> refused to sign until states like Virginia gave up their huge claims to western land. Those lands became a national domain, which turns out to be one of the Articles’ biggest successes.',
      { t: 'callout', k: 'key', h: 'The Articles reflected the lesson of the Revolution: <b>concentrated power is dangerous</b>. The problem is that a government with no power to tax can’t pay its bills, and a government with no executive can’t enforce anything.' }
    ] },
    { title: 'What the Articles got right', blocks: [
      'Don’t write the Articles off completely. AP questions sometimes test their successes:',
      { t: 'terms', items: [
        ['Won the war', 'The Confederation Congress managed the Revolutionary War to victory.'],
        ['Treaty of Paris (1783)', 'Britain recognized American independence, with a western border at the Mississippi River.'],
        ['Land Ordinance of 1785', 'Surveyed western land into a grid of townships and set aside land in each township to fund public schools.'],
        ['{{Northwest Ordinance}} (1787)', 'Set up a process for territories to become <b>equal states</b> (not colonies), protected religious freedom and trial by jury, and <b>banned slavery</b> in the Northwest Territory (north of the Ohio River).']
      ] },
      { t: 'callout', k: 'connect', h: 'The Northwest Ordinance’s ban on slavery north of the Ohio River set an early precedent that <b>Congress could ban slavery in federal territories</b>. Remember this for Lesson 10. The Missouri Compromise uses the same idea, and the Dred Scott decision (Lesson 11) says Congress never had that power.' }
    ] },
    { title: 'The Critical Period (1781–1787)', blocks: [
      'Historians call the years under the Articles the “<b>{{Critical Period}}</b>,” because many leaders believed the country might not survive. The problems all trace back to the government’s weakness:',
      { t: 'flip', title: 'Weakness → consequence', items: [
        ['No power to tax', 'The national government couldn’t pay its war debts or its soldiers. States often ignored requisitions, so Congress got only a fraction of what it asked for.'],
        ['No power over trade', 'States taxed each other’s goods and fought trade wars. Britain flooded the U.S. with cheap goods and closed its West Indies ports to Americans.'],
        ['No common currency', 'The Continental dollar was nearly worthless (“not worth a Continental”). States printed their own money.'],
        ['Weak abroad', 'Britain refused to leave forts in the Northwest. Spain closed New Orleans and the lower Mississippi to Americans in 1784. Foreign nations didn’t take the U.S. seriously.'],
        ['Hard to fix', 'Amendments required all 13 states, so a single state could block any reform.']
      ] }
    ] },
    { title: 'Shays’ Rebellion (1786–1787)', blocks: [
      'In western Massachusetts, many farmers were Revolutionary War veterans who had been paid in nearly worthless money. Now the state demanded taxes in hard currency (gold and silver), and courts were taking their farms when they couldn’t pay their debts.',
      'In 1786, armed farmers led by <b>Daniel Shays</b>, a former Continental Army captain, shut down courts to stop the foreclosures. In January 1787 they marched on the federal arsenal in Springfield. The national government had <b>no army to send</b>. Massachusetts had to raise a militia funded by wealthy Boston merchants, which scattered the rebels.',
      { t: 'chain', title: 'Why Shays’ Rebellion mattered', items: [
        ['Economic crisis', 'Debt, high taxes, worthless money'],
        ['Rebellion', 'Farmers close courts and attack the Springfield arsenal'],
        ['Government can’t respond', 'No national army; private money pays the militia'],
        ['Elites alarmed', 'Leaders fear “mob rule” and anarchy'],
        ['Constitutional Convention', 'May 1787: delegates meet to fix, and then replace, the Articles']
      ] },
      'George Washington wrote that he was shocked, and that the country needed a government with real power. Earlier, in 1786, five states had met at the <b>Annapolis Convention</b> to talk about trade problems. Too few states came, so they called for a bigger meeting in Philadelphia in May 1787. Shays’ Rebellion made sure that meeting happened, and that the delegates came ready for big changes.',
      { t: 'callout', k: 'connect', title: 'Coming back in Lesson 7', h: 'Compare Shays’ Rebellion to the <b>Whiskey Rebellion</b> of 1794. Both were farmer uprisings against taxes. But in 1794, the new federal government under the Constitution sent about 13,000 troops and crushed it. That contrast shows how much stronger the national government had become.' },
      { t: 'check', q: 'Shays’ Rebellion most directly demonstrated which weakness of the Articles of Confederation?', o: ['The lack of national courts to try the rebels', 'The lack of money or an army to keep order', 'The rule that amendments had to be unanimous', 'The equal vote each state had in Congress'], a: 1, x: 'The government had no army and no taxing power to pay for one, so Massachusetts had to rely on privately funded militia. The other options are real weaknesses, but they aren’t what the rebellion exposed.' }
    ] }
  ]
},

/* ───────────────────────── L5 ───────────────────────── */
{
  id: 'l05', n: 5, short: 'The Constitution', title: 'Building the Constitution', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1787', ap: ['3.9'], sg: '6', min: 28,
  sub: 'In one hot Philadelphia summer, 55 delegates threw out the Articles and built a stronger government. Getting there took a series of hard compromises, including some that protected slavery.',
  objectives: ['Explain the Great Compromise, the Three-Fifths Compromise, the Slave Trade Clause and the Electoral College', 'Explain federalism, separation of powers and checks and balances', 'Evaluate how much ordinary people could vote for or influence the new government', 'Compare the Articles and the Constitution'],
  sections: [
    { title: 'The Constitutional Convention (1787)', blocks: [
      'In May 1787, 55 delegates from 12 states met in Philadelphia. Rhode Island refused to send anyone. Their official task was to <b>revise</b> the Articles. Almost immediately they decided to write an entirely new constitution instead. They met in secret, with the windows closed in the summer heat, so they could argue freely.',
      { t: 'img', src: 'constitution-signing.jpg', cap: 'Howard Chandler Christy’s <i>Scene at the Signing of the Constitution</i> (1940). George Washington presides from the platform on the right. Most delegates were wealthy, educated men: lawyers, merchants and planters.', credit: 'Howard Chandler Christy, 1940. Public domain.' },
      'Key figures: <b>George Washington</b> served as president of the convention, and his support gave it credibility. <b>{{James Madison}}</b> of Virginia came with a detailed plan, took the best notes of the debates, and is called the “Father of the Constitution.” Benjamin Franklin, then 81, was the oldest delegate. Alexander Hamilton wanted an even stronger national government than most delegates.'
    ] },
    { title: 'Compromise #1: Representation', blocks: [
      'The first big fight was about how states would be represented in Congress. Big states and small states wanted very different things.',
      { t: 'table', head: ['', 'Virginia Plan', 'New Jersey Plan'], rows: [
        ['Proposed by', 'James Madison (big-state plan)', 'William Paterson (small-state plan)'],
        ['Legislature', '<b>Bicameral</b> (two houses)', 'Unicameral (one house), like the Articles'],
        ['Representation', 'Based on <b>population</b>; bigger states get more votes', '<b>Equal</b>: one vote per state'],
        ['Who it helped', 'Virginia, Pennsylvania, Massachusetts', 'Delaware, New Jersey, Connecticut']
      ] },
      'The convention almost broke up. Roger Sherman of Connecticut proposed the solution: the <b>{{Great Compromise}}</b> (or Connecticut Plan).',
      { t: 'callout', k: 'key', title: 'The Great Compromise', h: 'A <b>bicameral</b> Congress. The <b>House of Representatives</b> is based on population, which pleased the big states. The <b>Senate</b> gives every state 2 senators, which pleased the small states. All tax bills must start in the House.' },
      { t: 'check', q: 'Which of the following best describes the Great Compromise?', o: ['It counted three-fifths of enslaved people for seats', 'It made one house based on population, one equal', 'It created electors to choose the president', 'It let the slave trade continue until 1808'], a: 1, x: 'The Great (Connecticut) Compromise combined the Virginia and New Jersey Plans into a bicameral Congress. The other options are real compromises too, but different ones.' }
    ] },
    { title: 'Compromise #2: Slavery', blocks: [
      'If seats in the House were based on population, who counted? Southern delegates wanted enslaved people counted, to get more seats, even though they had no rights. Northern delegates objected: if enslaved people were property, why count them for representation?',
      { t: 'terms', items: [
        ['{{Three-Fifths Compromise}}', 'Each enslaved person counted as <b>three-fifths of a person</b> for both House seats and direct taxes. This gave slave states more seats in the House <b>and more electoral votes</b>.'],
        ['{{Slave Trade Clause}} (Art. I, §9)', 'Congress could not ban the <b>importation</b> of enslaved people before <b>1808</b>. Congress did ban it as soon as it could, in 1808, but slavery itself continued.'],
        ['Fugitive Slave Clause (Art. IV, §2)', 'People who escaped slavery into another state had to be returned. Free states couldn’t free them.']
      ] },
      'Notice that the Constitution <b>never uses the word “slavery.”</b> It says “other persons” and “person held to service or labour.” Many delegates were uncomfortable writing it in. But the compromises protected slavery and gave the South extra power in national politics for decades. Eight of the first twelve presidents owned enslaved people while in office.',
      { t: 'callout', k: 'think', h: 'Why compromise on slavery at all? Delegates from South Carolina and Georgia said they would not join a union that threatened slavery. Most Northern delegates decided a union with slavery was better than no union. Historians still debate that choice. For the AP exam, be ready to explain <b>how the Constitution protected and perpetuated slavery</b>, which is a study guide question.' }
    ] },
    { title: 'Compromise #3: Electing a president', blocks: [
      'Delegates disagreed about how to choose the president. If Congress chose, the president would depend on Congress. If the people voted directly, many delegates worried voters spread across a huge country wouldn’t know the candidates, and big states would dominate.',
      'Their compromise was the <b>{{Electoral College}}</b>. Each state gets electors equal to its House seats plus its 2 Senate seats. State legislatures decide how electors are chosen. A candidate needs a majority of electoral votes; if no one gets one, the <b>House of Representatives</b> decides. That happens in 1824 (Lesson 9).',
      { t: 'h', h: 'How much could ordinary people influence the new government?' },
      { t: 'table', head: ['Office', 'How chosen in 1789', 'Direct vote by the people?'], rows: [
        ['House of Representatives', 'Elected by voters every 2 years', '<b>Yes</b>, but states decided who could vote (usually property-owning white men)'],
        ['Senate', 'Chosen by <b>state legislatures</b>', 'No, until the <b>17th Amendment (1913)</b> (Lesson 18)'],
        ['President', 'Chosen by the Electoral College', 'No, indirectly'],
        ['Federal judges', 'Appointed by the president, approved by the Senate, serve for life', 'No']
      ] },
      'This was deliberate. Madison and other framers feared <b>{{tyranny of the majority}}</b>: a passionate majority could vote to trample the rights of a minority, such as creditors or property owners. So they built filters between the people and power. But they also feared <b>{{tyranny of the minority}}</b>: a small group, like a king or a wealthy faction, grabbing control. Their answer was a <b>{{republic}}</b> with layers of representation and power divided many ways.'
    ] },
    { title: 'The principles: dividing power', blocks: [
      { t: 'h', h: 'Federalism' },
      '<b>{{Federalism}}</b> divides power between the national government and the state governments. Some powers belong only to the national government (<b>enumerated</b> or delegated powers), some only to the states (<b>reserved</b> powers), and some to both (<b>concurrent</b> powers). The <b>Supremacy Clause</b> says that when federal and state law conflict, the Constitution and federal law win.',
      { t: 'diagram', name: 'federalism', cap: 'Federalism divides power between levels of government.' },
      { t: 'h', h: 'Separation of powers and checks and balances' },
      'Following Montesquieu, the Constitution splits national power into three branches (<b>{{separation of powers}}</b>), and gives each branch ways to block the others (<b>{{checks and balances}}</b>).',
      { t: 'diagram', name: 'branches', cap: 'Each branch can check the others. The arrows show who can block whom.' },
      { t: 'sort', prompt: 'Which branch holds each power?', buckets: ['Legislative (Congress)', 'Executive (President)', 'Judicial (Courts)'], items: [
        ['Declare war', 0], ['Veto a bill', 1], ['Rule a law unconstitutional', 2], ['Command the armed forces', 1], ['Approve treaties (Senate, 2/3)', 0], ['Impeach the president (House)', 0], ['Nominate Supreme Court justices', 1], ['Collect taxes', 0], ['Hear cases about federal law', 2]
      ] }
    ] },
    { title: 'Articles vs. Constitution', blocks: [
      'This comparison is a classic exam question. Notice how each Constitution feature fixes an Articles problem from Lesson 4.',
      { t: 'table', head: ['', 'Articles of Confederation', 'Constitution'], rows: [
        ['Where power sits', 'States are sovereign; weak “league of friendship”', 'Strong national government shares power with states (federalism)'],
        ['Legislature', 'Unicameral; 1 vote per state', 'Bicameral; House by population, Senate equal'],
        ['Executive', 'None', 'President, who enforces laws and commands the military'],
        ['Courts', 'None', 'Supreme Court and federal courts'],
        ['Taxes', 'Can’t tax; asks states for money', 'Congress can levy and collect taxes'],
        ['Trade', 'Can’t regulate', 'Congress regulates interstate and foreign commerce'],
        ['Army', 'Depends on states', 'Congress can raise an army; the president commands it'],
        ['Amending', 'Unanimous (13 of 13)', '2/3 of Congress + 3/4 of states'],
        ['Passing laws', '9 of 13 states', 'Simple majority of both houses + president (or veto override)']
      ] },
      { t: 'check', q: 'Which change from the Articles of Confederation to the Constitution most directly addressed the problem exposed by Shays’ Rebellion?', o: ['Creating a two-house national legislature', 'Giving Congress the power to tax and raise armies', 'Creating a system of national federal courts', 'Allowing amendments without unanimous consent'], a: 1, x: 'Shays’ Rebellion showed the national government couldn’t pay its debts or put down an uprising. The power to tax and raise an army fixed exactly that. Courts and easier amendments solved other problems.' },
      { t: 'callout', k: 'connect', h: 'The Constitution still had to be <b>approved</b>. Many Americans thought the new government looked a lot like the tyranny they had just fought. That debate is Lesson 6.' }
    ] }
  ]
},

/* ───────────────────────── L6 ───────────────────────── */
{
  id: 'l06', n: 6, short: 'Ratification', title: 'The Ratification Debate & the Bill of Rights', era: 'Foundations: Colonies to Constitution', eraYears: '1607–1800', years: '1787–1791', ap: ['3.8'], sg: '7', min: 18,
  sub: 'Federalists said the country needed a strong government to survive. Anti-Federalists said it would destroy liberty. The deal that ended the fight was a Bill of Rights.',
  objectives: ['Compare the arguments of Federalists and Anti-Federalists', 'Explain enumerated, implied and reserved powers, and the Necessary and Proper Clause', 'Explain why the Bill of Rights was created and what it protects'],
  sections: [
    { title: 'Nine states needed', blocks: [
      'The Constitution would take effect once <b>9 of the 13 states</b> ratified (approved) it. Each state held a special <b>ratifying convention</b> with delegates elected for that purpose. That was a deliberate choice: going around the state legislatures (which would lose power) and appealing to “We the People.”',
      'Delaware ratified first, in December 1787. New Hampshire became the 9th in June 1788, which made it official. But everyone knew the new government couldn’t work without the two biggest states, <b>Virginia</b> and <b>New York</b>, and both were closely divided. The Constitution took effect in <b>1789</b> (a Forever Date), with Washington as the first president. Rhode Island held out until 1790.'
    ] },
    { title: 'Federalists vs. Anti-Federalists', blocks: [
      { t: 'table', head: ['', '{{Federalists}}', '{{Anti-Federalists}}'], rows: [
        ['Position', '<b>Supported</b> the Constitution', '<b>Opposed</b> the Constitution (as written)'],
        ['Leaders', 'Alexander Hamilton, James Madison, John Jay', 'Patrick Henry, George Mason, Mercy Otis Warren, “Brutus”'],
        ['Supporters', 'Merchants, cities, the wealthy, coastal areas', 'Small farmers, rural and western areas, people in debt'],
        ['Main argument', 'The Articles failed; we need an energetic, <b>efficacious</b> (effective) national government', 'A strong central government will become a new tyranny, just like Britain'],
        ['On a large republic', 'A big republic is <i>safer</i>: so many factions that no single one can dominate (Federalist No. 10)', 'Republics only work in small areas where leaders know the people'],
        ['On rights', 'A bill of rights is unnecessary because the government only has listed powers', 'There is <b>no bill of rights</b>, so nothing protects individual liberty'],
        ['Fears', 'Anarchy, mob rule, another Shays’ Rebellion', 'A standing army, a king-like president, unlimited taxing, the “elastic clause”']
      ] },
      'Hamilton, Madison and Jay wrote 85 newspaper essays defending the Constitution in New York, under the pen name “Publius.” Together they’re called <b>{{The Federalist Papers}}</b>. The most famous is Madison’s <b>Federalist No. 10</b>, which argues that a large republic controls <b>factions</b> (self-interested groups) better than a small one, because no single faction can become a majority.',
      { t: 'quote', h: '“Ambition must be made to counteract ambition.”', cite: 'James Madison, Federalist No. 51 (1788), explaining checks and balances' },
      { t: 'sort', prompt: 'Who would make each argument?', buckets: ['Federalist', 'Anti-Federalist'], items: [
        ['The national government needs power to tax or it will collapse', 0], ['Without a bill of rights, our liberties are unprotected', 1], ['A large republic will control the danger of factions', 0], ['The Necessary and Proper Clause gives Congress unlimited power', 1], ['The president could become a king', 1], ['Shays’ Rebellion proves we need a stronger union', 0], ['Representatives in a huge country can’t know their voters', 1]
      ] }
    ] },
    { title: 'Powers: enumerated, implied, reserved', blocks: [
      'The Anti-Federalists’ deepest fear was about how far the national government’s power would reach. To understand that debate, you need four terms:',
      { t: 'terms', items: [
        ['{{Enumerated powers}}', 'Powers <b>specifically listed</b> for Congress in the Constitution (Article I, Section 8): taxing, coining money, declaring war, regulating commerce.'],
        ['{{Implied powers}}', 'Powers <b>not listed</b> but reasonably implied by the listed ones. Justified by the Necessary and Proper Clause.'],
        ['{{Necessary and Proper Clause}}', 'Article I, §8: Congress may make all laws “necessary and proper” for carrying out its listed powers. It’s nicknamed the <b>elastic clause</b> because it stretches federal power.'],
        ['{{Reserved powers}}', 'Powers kept by the <b>states</b> (or the people) because they aren’t given to the national government. Protected by the <b>10th Amendment</b>.']
      ] },
      { t: 'callout', k: 'connect', title: 'This exact debate builds the first parties', h: 'What does “necessary” mean: absolutely essential, or just useful? Hamilton says useful (<b>loose construction</b>). Jefferson says essential (<b>strict construction</b>). That fight over the elastic clause, starting with a national bank, creates the first political parties in Lesson 7, and the Supreme Court settles it in Lesson 8.' }
    ] },
    { title: 'The Bill of Rights (1791)', blocks: [
      'To win ratification in states like Massachusetts, Virginia and New York, Federalists made a promise: <b>once the new government starts, we will add a bill of rights</b>. Madison, now a congressman, kept the promise. He drafted amendments based partly on state bills of rights like Virginia’s. Ten were ratified in <b>1791</b>: the <b>{{Bill of Rights}}</b>.',
      { t: 'flip', title: 'The Bill of Rights, simplified', items: [
        ['1st', 'Freedom of religion, speech, press, assembly and petition'],
        ['2nd', 'Right to keep and bear arms (tied to a “well regulated militia”)'],
        ['3rd', 'No forced quartering of soldiers in homes in peacetime. Remember the Quartering Act?'],
        ['4th', 'No unreasonable searches and seizures; warrants need probable cause'],
        ['5th', 'Due process; no self-incrimination; no double jeopardy'],
        ['6th', 'Speedy, public jury trial; right to a lawyer'],
        ['7th', 'Jury trial in civil cases'],
        ['8th', 'No cruel and unusual punishment or excessive bail'],
        ['9th', 'Listing some rights doesn’t mean people lack others'],
        ['10th', 'Powers not given to the federal government are <b>reserved to the states or the people</b>']
      ] },
      { t: 'callout', k: 'key', h: 'The Bill of Rights was the <b>Anti-Federalists’ lasting victory</b>. They lost the ratification fight but shaped the Constitution anyway. Notice how many amendments respond directly to British abuses from Lesson 2: quartering, searches, jury trials.' },
      { t: 'check', q: 'The Bill of Rights was added to the Constitution mainly to', o: ['give the national government power to tax', 'win over critics who feared for their liberties', 'end the Three-Fifths Compromise for good', 'limit the power of the new Supreme Court justices'], a: 1, x: 'Federalists promised a bill of rights to win votes in key states. It reassured Anti-Federalists who feared that a strong national government would trample individual rights.' }
    ] }
  ]
}

);
