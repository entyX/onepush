/* Lessons 19–24: New Deal → Rise of Conservatism, plus Exam Skills */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

/* ───────────────────────── L19 ───────────────────────── */
{
  id: 'l19', n: 19, short: 'New Deal', title: 'The Great Depression & the New Deal', era: 'Reform & a Bigger Government', eraYears: '1890–1945', years: '1920–1940', ap: ['7.10'], sg: '23', min: 28,
  sub: 'The worst economic collapse in American history ended the age of laissez-faire. FDR’s New Deal permanently changed what Americans expect the federal government to do.',
  objectives: ['Explain laissez-faire and how Hoover responded to the Depression', 'Describe the three R’s of the New Deal, with two programs for each', 'Explain conservative and progressive criticisms of the New Deal', 'Explain how the New Deal changed the role of the federal government'],
  sections: [
    { title: 'Boom, bust and laissez-faire', blocks: [
      'In the 1920s, Americans elected three Republican presidents in a row, all by big margins: Warren Harding (1920), Calvin Coolidge (1924) and Herbert Hoover (1928). After World War I and the 1918 flu pandemic, voters wanted a “return to normalcy.” The government followed <b>{{laissez-faire}}</b>: low taxes, few regulations, and business left alone. As Coolidge reportedly put it, “the chief business of the American people is business.”',
      'The economy boomed, but on a shaky foundation:',
      { t: 'flip', items: [
        ['Credit', 'Families bought cars, radios and appliances “on the installment plan,” paying over time with money they didn’t have yet.'],
        ['Speculation', 'Investors bought stocks “<b>on margin</b>”: put down 10% and borrow the rest, betting prices would keep rising.'],
        ['Inequality', 'Wealth was concentrated at the top. Workers and farmers couldn’t afford to buy everything factories made (overproduction).'],
        ['Weak banks', 'Thousands of small banks had no deposit insurance. If one failed, its depositors lost everything.']
      ] },
      'On <b>October 29, 1929</b>, “Black Tuesday,” the stock market crashed. Panic spread to banks, and more than 9,000 failed between 1930 and 1933, wiping out savings. Businesses closed and trade collapsed, worsened by the high Smoot-Hawley Tariff of 1930. By 1933, about <b>25% of workers</b> were unemployed.',
      { t: 'img', src: 'migrant-mother.jpg', cap: '“Migrant Mother” by Dorothea Lange (1936). Florence Owens Thompson and her children in a California pea-pickers’ camp. Lange took it for a New Deal agency, the Resettlement Administration, and it became the most famous image of the Depression.', credit: 'Dorothea Lange, 1936. Library of Congress, public domain.' }
    ] },
    { title: 'Hoover’s response', blocks: [
      'Herbert Hoover was a self-made millionaire and a talented organizer who believed in “<b>rugged individualism</b>.” He feared that direct federal handouts would weaken Americans’ character and expand government dangerously. He urged businesses to keep wages up and asked charities and local governments to help the needy.',
      'He did more than he’s often given credit for. The <b>Reconstruction Finance Corporation</b> (1932) lent money to banks, railroads and businesses, and he supported public works like Hoover Dam. But he refused <b>direct relief</b>, federal money given straight to struggling people. Critics said he helped banks but not people.',
      'Americans blamed him bitterly. Shantytowns of the homeless were called “<b>Hoovervilles</b>.” Newspapers used as blankets were “Hoover blankets,” and empty pockets turned inside out were “Hoover flags.” In 1932, when World War I veterans (the “Bonus Army”) camped in Washington demanding early payment of promised bonuses, the army drove them out with tear gas and burned their camp.',
      { t: 'callout', k: 'key', h: 'Hoover’s response represents the old idea of limited federal government. The New Deal represents a new idea: the federal government is <b>responsible</b> for the economy and for citizens’ basic welfare. That shift is the most important thing to understand in this lesson.' }
    ] },
    { title: 'FDR and the New Deal', blocks: [
      { t: 'img', src: 'fdr.jpg', portrait: true, cap: '<b>Franklin Delano Roosevelt</b>, Democrat, elected in <b>1932</b> (a Forever Date). He was elected four times, the only president to serve more than two terms. Paralyzed from the waist down by polio, he projected confidence. His radio “fireside chats” explained his policies directly to Americans in their living rooms.', credit: 'Public domain.' },
      { t: 'quote', h: '“The only thing we have to fear is fear itself.”', cite: 'Franklin D. Roosevelt, First Inaugural Address, March 4, 1933' },
      'FDR promised a “New Deal for the American people.” He wasn’t committed to a single theory. He wanted to experiment: “Take a method and try it. If it fails, admit it frankly and try another. But above all, try something.” In his first <b>Hundred Days</b>, Congress passed 15 major laws. He began by closing every bank for a “bank holiday” and reopening only the sound ones.',
      { t: 'img', src: 'ec1932.png', cap: 'The 1932 election. FDR (blue) won 42 of 48 states. A huge shift from Hoover’s landslide just four years earlier.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      { t: 'h', h: 'The three R’s' },
      { t: 'diagram', name: 'threeRs' },
      { t: 'terms', items: [
        ['FDIC', 'Federal Deposit Insurance Corporation (1933): the government insures bank deposits, so a bank failure no longer wipes out savings. Bank runs largely ended. <b>Reform.</b>'],
        ['SEC', 'Securities and Exchange Commission (1934): regulates the stock market, requiring honest information and policing fraud. <b>Reform.</b>'],
        ['WPA', 'Works Progress Administration (1935): employed about 8.5 million people building roads, schools and bridges, and paid artists and writers too. <b>Relief.</b>'],
        ['NRA', 'National Recovery Administration (1933): business codes setting prices, wages and hours to stop cutthroat competition. <b>Recovery.</b> Struck down by the Supreme Court in 1935.'],
        ['AAA', 'Agricultural Adjustment Act/Administration (1933): paid farmers to grow less, to raise crop prices. <b>Recovery.</b> Many landowners pocketed the payments and evicted sharecroppers.'],
        ['Social Security (1935)', 'Old-age pensions, unemployment insurance and aid to dependent children, the foundation of the modern safety net. <b>Reform.</b>']
      ] },
      { t: 'sort', prompt: 'Sort each New Deal program into the right R.', buckets: ['Relief (help now)', 'Recovery (fix the economy)', 'Reform (prevent it again)'], items: [
        ['WPA jobs', 0], ['FDIC', 2], ['AAA crop payments', 1], ['SEC', 2], ['CCC', 0], ['NRA codes', 1], ['Social Security', 2], ['FERA direct relief', 0], ['PWA public works', 1]
      ], x: 'Some programs fit more than one R. The PWA, for example, gave jobs (relief) and pumped money into the economy (recovery). On the exam, explain your reasoning.' }
    ] },
    { title: 'Critics on the right and the left', blocks: [
      'The New Deal was attacked from both directions:',
      { t: 'table', head: ['Conservative critics', 'Progressive / left critics'], rows: [
        ['<b>Too much government.</b> The New Deal was “creeping socialism,” threatened free enterprise and individual liberty, and violated the Constitution’s limits on federal power.', '<b>Not enough.</b> The New Deal saved capitalism and the banks instead of fixing deep inequality.'],
        ['Deficit spending piled up debt.', '<b>Huey Long</b>, the Louisiana senator, proposed “Share Our Wealth”: heavily tax the rich and guarantee every family a home and a minimum income.'],
        ['Business groups like the American Liberty League called FDR a dictator.', '<b>Dr. Francis Townsend</b> proposed a $200-a-month pension for every American over 60.'],
        ['The <b>Supreme Court</b> struck down the NRA (1935) and the first AAA (1936). FDR’s 1937 “court-packing” plan to add justices failed badly.', '<b>Father Charles Coughlin</b>, a hugely popular radio priest, attacked bankers. He later turned to antisemitism.'],
        ['', 'Socialists wanted government ownership of key industries.']
      ] },
      { t: 'callout', k: 'mistake', title: 'Who was left out', h: 'Many programs excluded or shortchanged Black Americans. Social Security at first excluded <b>farm and domestic workers</b>, the jobs most Black workers held, partly to win the votes of Southern Democrats in Congress. AAA payments led to evictions of Black and white sharecroppers. Even so, many Black voters switched from the party of Lincoln to FDR’s Democrats in 1936, because the New Deal offered real help.' },
      { t: 'check', q: 'Which of the following would a conservative critic of the New Deal most likely argue?', o: ['The New Deal should have guaranteed every family a minimum income', 'The New Deal expanded federal power beyond constitutional limits and threatened free enterprise', 'The New Deal failed to break up big banks', 'Social Security pensions were too small'], a: 1, x: 'Conservatives objected to the size and reach of government. The minimum-income, break-up-the-banks and bigger-pensions options are left/progressive criticisms that the New Deal did too little.' }
    ] },
    { title: 'A permanent change', blocks: [
      'The New Deal didn’t end the Depression; massive spending for World War II did. But it changed America permanently:',
      { t: 'chain', items: [
        ['Before 1933', 'Laissez-faire: the federal government stays out of the economy and personal welfare'],
        ['The New Deal', 'The federal government regulates banks and markets, creates jobs and builds a safety net'],
        ['After', 'Americans expect Washington to manage the economy and protect basic security']
      ] },
      'It also built the <b>New Deal coalition</b> that made Democrats the majority party for decades: labor unions, urban immigrants and Catholics, Black voters, Northern liberals, and the white “Solid South.” That is the <b>Fifth Party System</b>. Keep an eye on that coalition, because it contains a contradiction: Black voters and segregationist Southern whites in the same party. The civil rights era will break it apart (Lessons 20–23).',
      { t: 'diagram', name: 'parties', cur: 5 }
    ] }
  ]
},

/* ───────────────────────── L20 ───────────────────────── */
{
  id: 'l20', n: 20, short: 'Early civil rights', title: 'Early Federal Action on Civil Rights', era: 'Civil Rights, Trust & Realignment', eraYears: '1945–1980s', years: '1946–1957', ap: ['8.6'], sg: '24', min: 24,
  sub: 'After World War II, the federal government began, slowly and often reluctantly, to take apart Jim Crow. The courts led the way, the president followed, and Congress lagged behind.',
  objectives: ['Explain why World War II and the Isaac Woodard case pushed civil rights forward', 'Explain Executive Order 9981', 'Explain Brown v. Board of Education and the role of Thurgood Marshall', 'Explain the Little Rock Nine crisis and the federal government’s role in the 1940s–50s'],
  sections: [
    { title: 'The first civil rights movement, and the second', blocks: [
      'Remember Reconstruction? Historians sometimes call it the <b>first</b> civil rights movement: the 14th and 15th Amendments and the Civil Rights Act of 1866 promised equality. Then Jim Crow took it away (Lessons 15–16). The modern movement of the 1950s–60s is the <b>second</b>, and its job was to finally enforce what Reconstruction had promised.',
      '<b>Civil rights</b> are the rights of citizens to political and social freedom and equality: the right to vote, to equal treatment under the law, and to use public places.',
      { t: 'h', h: 'Why after World War II?' },
      'About one million Black Americans served in World War II, in a segregated military, fighting a Nazi regime built on racism. Black newspapers promoted the “<b>Double V</b>” campaign: victory over fascism abroad and over racism at home. Black veterans came home expecting the democracy they had fought for.',
      'Instead, many met violence. In February 1946, <b>{{Isaac Woodard}}</b>, a decorated Black Army sergeant, was riding a bus home to South Carolina hours after his discharge, still in uniform. After he argued with the driver, the local police chief beat him so savagely that he was permanently blinded. An all-white jury acquitted the police chief in less than 30 minutes.',
      { t: 'callout', k: 'key', h: 'President <b>Harry Truman</b> was horrified by Woodard’s case. He created the President’s Committee on Civil Rights (1946), whose report, <i>To Secure These Rights</i> (1947), called for ending segregation and protecting voting rights. It was the first time a president put federal power behind civil rights since Reconstruction.' }
    ] },
    { title: 'Desegregating the military (1948)', blocks: [
      'Congress, where Southern Democrats could block any civil rights bill with a filibuster, wouldn’t act. So Truman used his own power as commander in chief. <b>{{Executive Order 9981}}</b> (July 1948) ordered “equality of treatment and opportunity for all persons in the armed services without regard to race.” The military resisted at first, but by the Korean War it was integrating. The last all-Black units were abolished by 1954.',
      'Truman also put civil rights in the 1948 Democratic platform. Furious Southern Democrats walked out and ran South Carolina governor Strom Thurmond for president as a “<b>Dixiecrat</b>” (States’ Rights Democrat). Thurmond won four Deep South states. It was the first big crack in the Solid South, and an early sign of the realignment you’ll see in Lesson 23.',
      { t: 'check', q: 'Truman desegregated the military through an executive order rather than legislation mainly because', o: ['the Constitution forbids Congress from regulating the military', 'Southern Democrats in Congress could block civil rights legislation', 'the Supreme Court had already ordered it', 'the military requested it'], a: 1, x: 'Southern Democrats used the filibuster and their committee power to kill civil rights bills. An executive order let Truman act as commander in chief without Congress.' }
    ] },
    { title: 'Brown v. Board of Education (1954)', blocks: [
      'Under Plessy’s “separate but equal,” Southern school systems were separate but never equal. Black schools got far less money, had overcrowded classrooms, worn-out hand-me-down books and sometimes no buses at all.',
      'The <b>NAACP</b> had a long-term legal strategy, designed by Charles Hamilton Houston: chip away at Plessy case by case, starting with law schools and graduate schools, where the inequality was hardest to deny. Houston’s former student led the legal team.',
      { t: 'img', src: 'marshall-thurgood.jpg', portrait: true, cap: '<b>Thurgood Marshall</b>, chief lawyer of the NAACP Legal Defense Fund. He argued 32 cases before the Supreme Court and won 29. In 1967 he became the first Black Supreme Court justice.', credit: 'Public domain.' },
      '<i>Brown v. Board of Education of Topeka</i> combined five cases from Kansas, South Carolina, Virginia, Delaware and Washington, D.C. Linda Brown, a Black third-grader in Topeka, had to travel far to a segregated school when a white school was much closer. Marshall argued that segregation itself violated the 14th Amendment’s equal protection clause. Psychologists Kenneth and Mamie Clark’s “doll tests” showed how segregation damaged Black children’s self-esteem.',
      { t: 'quote', h: '“We conclude that, in the field of public education, the doctrine of ‘separate but equal’ has no place. Separate educational facilities are inherently unequal.”', cite: 'Chief Justice Earl Warren, Brown v. Board of Education (May 17, 1954), unanimous 9–0' },
      { t: 'callout', k: 'key', h: '<b>Brown overturned Plessy v. Ferguson</b> for public education. Warren worked hard to make the ruling unanimous, so that the South couldn’t point to any dissent. It’s a Forever Date: <b>1954</b>.' },
      'But how fast would schools have to change? In a follow-up ruling (<i>Brown II</i>, 1955), the Court said only “<b>with all deliberate speed</b>.” That vague phrase let Southern states stall for years. In 1956, 101 Southern members of Congress signed the <b>Southern Manifesto</b> pledging to resist Brown, and states launched “<b>massive resistance</b>.” Virginia’s Prince Edward County closed its public schools entirely from 1959 to 1964 rather than integrate.'
    ] },
    { title: 'The Little Rock Nine (1957)', blocks: [
      'In 1957, nine Black students were selected to integrate <b>Central High School</b> in Little Rock, Arkansas. Governor <b>Orval Faubus</b> ordered the Arkansas National Guard to <b>block</b> them, defying a federal court. When the students tried to enter, white mobs screamed threats at them.',
      { t: 'img', src: 'little-rock.jpg', cap: 'White protesters at the Arkansas State Capitol rally against the integration of Central High School, 1959. The images from Little Rock, broadcast on national television, showed Americans the ugliness of resistance to Brown.', credit: 'John T. Bledsoe, U.S. News & World Report, 1959. Library of Congress, public domain.' },
      'President <b>Dwight Eisenhower</b> was reluctant. He didn’t like using federal force against states, and he privately doubted Brown. But a governor openly defying federal law threatened the Constitution itself. Eisenhower sent the Army’s <b>101st Airborne Division</b> and put the Arkansas Guard under federal control to escort the nine students into school.',
      { t: 'callout', k: 'connect', h: 'This was the first time since <b>Reconstruction</b> that a president sent federal troops into the South to protect Black citizens’ rights. Compare it to 1877, when federal troops were <b>withdrawn</b> (Lesson 15). The federal government was back.' },
      'The struggle didn’t end there. Faubus closed all of Little Rock’s high schools for the 1958–59 school year, the “Lost Year,” rather than continue integration. Also in 1957, Congress passed the first civil rights law since Reconstruction, the <b>Civil Rights Act of 1957</b>. It was weak, but it created a Civil Rights Division in the Justice Department.',
      { t: 'h', h: 'Closer to home: Seattle' },
      'School segregation wasn’t only a Southern problem. Seattle never had segregation laws, but housing discrimination (redlining and restrictive covenants) kept Black families concentrated in the Central District, so neighborhood schools were segregated in practice. In 1978 Seattle became the first major U.S. city to adopt <b>mandatory busing</b> to integrate its schools <b>without a court order</b>. It faced opposition, families left the district, and the plan was later scaled back. In 2007, the Supreme Court’s <i>Parents Involved v. Seattle School District No. 1</i> ruling limited how districts could use race in assigning students.',
      { t: 'table', head: ['Branch', 'Early civil rights action (1940s–50s)'], rows: [
        ['Executive', 'Truman’s Committee on Civil Rights; Executive Order 9981 (1948); Eisenhower sends troops to Little Rock (1957)'],
        ['Judicial', 'Brown v. Board (1954) overturns Plessy; Browder v. Gayle (1956) ends bus segregation after the Montgomery Bus Boycott'],
        ['Legislative', 'Mostly blocked by Southern Democrats; the weak Civil Rights Act of 1957']
      ] },
      { t: 'order', prompt: 'Put the early civil rights events in order.', items: ['Isaac Woodard blinded', 'Executive Order 9981', 'Brown v. Board of Education', 'Brown II: “all deliberate speed”', 'Southern Manifesto', 'Little Rock Nine'] }
    ] }
  ]
},

/* ───────────────────────── L21 ───────────────────────── */
{
  id: 'l21', n: 21, short: '1960s civil rights laws', title: '1960s Civil Rights Legislation', era: 'Civil Rights, Trust & Realignment', eraYears: '1945–1980s', years: '1960–1972', ap: ['8.10'], sg: '25', min: 22,
  sub: 'Nonviolent protest forced the issue onto TV screens and into Congress. In two years, the federal government knocked down the legal walls of Jim Crow.',
  objectives: ['Explain how nonviolent protest pushed the federal government to act', 'Describe the Civil Rights Act of 1964, the 24th Amendment and the Voting Rights Act of 1965', 'Describe the Equal Pay Act and Title IX', 'Explain how civil rights reshaped the political parties'],
  sections: [
    { title: 'Protest creates pressure', blocks: [
      'The 1950s showed that court rulings alone weren’t enough. In the 1960s, activists used <b>nonviolent direct action</b> to create crises the nation couldn’t ignore, often deliberately provoking violent responses that television cameras would capture.',
      { t: 'timeline', items: [
        ['1960', '<b>Sit-ins</b>: four Black college students sit at a whites-only Woolworth’s lunch counter in Greensboro, North Carolina. Sit-ins spread across the South.'],
        ['1961', '<b>Freedom Rides</b>: integrated groups ride buses through the South to test desegregation rulings. A bus is firebombed in Alabama.'],
        ['1963', '<b>Birmingham</b>: police chief Bull Connor turns fire hoses and police dogs on peaceful marchers, many of them children. The images shock the nation.'],
        ['Aug 1963', '<b>March on Washington</b>: about 250,000 people; Martin Luther King Jr.’s “I Have a Dream” speech.'],
        ['Nov 1963', 'President Kennedy, who had proposed a civil rights bill that June, is assassinated. <b>Lyndon B. Johnson</b> vows to pass it.']
      ] },
      { t: 'img', src: 'mlk-march.jpg', cap: 'Martin Luther King Jr. at the March on Washington for Jobs and Freedom, August 28, 1963.', credit: 'U.S. National Archives, public domain.' }
    ] },
    { title: 'The Civil Rights Act of 1964', blocks: [
      'LBJ, a Texan and former Senate majority leader, knew exactly how to work Congress. He framed the bill as a memorial to Kennedy. Southern senators launched the longest filibuster in Senate history up to that point, about 60 working days. Democratic senator <b>Hubert Humphrey</b> of Minnesota led the supporters, and Republican leader <b>Everett Dirksen</b> of Illinois brought enough Republicans on board to end the filibuster.',
      { t: 'img', src: 'lbj-cra.jpg', cap: 'President Johnson signs the Civil Rights Act on July 2, 1964, with Martin Luther King Jr. and other leaders looking on.', credit: 'Cecil Stoughton, White House Press Office. Public domain.' },
      { t: 'terms', items: [
        ['Title II', 'Bans segregation and discrimination in <b>public accommodations</b>: hotels, restaurants, theaters, gas stations. It was justified under Congress’s <b>commerce power</b> (remember Gibbons v. Ogden).'],
        ['Title VI', 'Programs receiving federal money can’t discriminate. The threat of losing federal school funding finally sped up school desegregation.'],
        ['Title VII', 'Bans <b>employment discrimination</b> based on race, color, religion, sex or national origin, and creates the EEOC to enforce it.']
      ] },
      { t: 'h', h: 'Who voted for it?' },
      'The vote split more by <b>region</b> than by party. In both houses, a higher percentage of Republicans than Democrats voted yes. Nearly all Southern Democrats voted no. Southern Democrats, led by Georgia senator Richard Russell, called it federal overreach into states’ rights.',
      { t: 'sort', prompt: 'How did each group mostly vote on the Civil Rights Act of 1964?', buckets: ['Mostly YES', 'Mostly NO'], items: [
        ['Northern Democrats', 0], ['Northern Republicans', 0], ['Southern Democrats', 1], ['Senate Republican leader Everett Dirksen', 0], ['Senator Hubert Humphrey', 0], ['Senator Strom Thurmond (who switched to the GOP that year)', 1]
      ] },
      { t: 'callout', k: 'key', h: 'The Civil Rights Act knocked out the <b>legal pillar</b> of Jim Crow: segregation in public life was now federal crime territory. But it did little about the <b>political pillar</b>, voting. That needed another fight.' }
    ] },
    { title: 'The vote: the 24th Amendment and the Voting Rights Act', blocks: [
      'The <b>{{24th Amendment}}</b> (ratified January 1964) banned <b>poll taxes</b> in federal elections. The Supreme Court extended the ban to state elections in 1966. But literacy tests and intimidation still kept most Black Southerners off the rolls. In Mississippi, only about 7% of eligible Black adults were registered in 1964.',
      'In March 1965, activists marched from <b>Selma</b> toward Montgomery, Alabama, demanding voting rights. On “<b>Bloody Sunday</b>” (March 7), state troopers attacked them with clubs and tear gas on the Edmund Pettus Bridge. Future congressman John Lewis’s skull was fractured. Days later, LBJ went before Congress on national television:',
      { t: 'quote', h: '“It is not just Negroes, but really it is all of us, who must overcome the crippling legacy of bigotry and injustice. And we shall overcome.”', cite: 'President Lyndon B. Johnson, address to Congress, March 15, 1965' },
      'The <b>{{Voting Rights Act of 1965}}</b> finally enforced the 15th Amendment, 95 years after it was ratified:',
      { t: 'terms', items: [
        ['Literacy tests banned', 'Suspended in places with low registration, and later banned nationwide'],
        ['Federal examiners', 'Federal officials could register voters directly, bypassing hostile local registrars'],
        ['Preclearance (Section 5)', 'States and counties with a history of discrimination, mostly in the South, needed federal approval before changing <b>any</b> voting rule']
      ] },
      'The results were dramatic. Black registration in Mississippi rose from about <b>7% to about 60%</b> in just three years. Thousands of Black officials were elected across the South in the following decades.',
      { t: 'callout', k: 'connect', title: 'Still debated today', h: 'In <i>Shelby County v. Holder</i> (2013), the Supreme Court struck down the formula that decided which places needed preclearance, ruling it was based on outdated data. Supporters said the South had changed; critics said protections were still needed. Since then, many states have passed new voting laws, and the debate continues. It’s the same unit question: <b>who decides who votes?</b>' }
    ] },
    { title: 'Beyond race: sex discrimination', blocks: [
      'The civil rights movement inspired other groups, especially the women’s movement, to use the same federal tools:',
      { t: 'table', head: ['Law', 'What it did'], rows: [
        ['<b>Equal Pay Act</b> (1963)', 'Requires equal pay for men and women doing equal work. At the time, women earned about 59 cents for every dollar men earned.'],
        ['<b>Civil Rights Act</b>, Title VII (1964)', '“Sex” was added to the employment section, reportedly in part by a Southern opponent hoping to kill the bill. It stayed, and it became a key tool against sex discrimination.'],
        ['<b>Title IX</b> (1972)', 'No sex discrimination in any education program receiving federal funds. Its best-known effect was a huge expansion of girls’ and women’s sports.']
      ] },
      { t: 'callout', k: 'key', title: 'How did the federal government respond?', h: 'By the mid-1960s, <b>all three branches</b> were acting: the courts (Brown and later rulings), the president (LBJ’s leadership and enforcement) and Congress (the 1964 and 1965 laws). Compare that to the 1870s, when the federal government gave up, and the 1950s, when it acted reluctantly.' }
    ] },
    { title: 'The political earthquake', blocks: [
      'Civil rights reshaped the parties. Before the 1960s, the Democratic Party held both Black voters in the North and segregationist whites in the South. That couldn’t last.',
      { t: 'table', head: ['', 'Democrats became associated with…', 'Republicans became associated with…'], rows: [
        ['Government', 'Bigger government, federal civil rights enforcement, social programs', 'Smaller government, states’ rights, lower taxes'],
        ['Voters gained', 'Black voters (by 1964, overwhelmingly)', 'White Southern conservatives, increasingly'],
        ['Voters lost', 'White Southern conservatives', 'Black voters']
      ] },
      'An aide later recalled LBJ saying, after signing the 1964 act, that Democrats had lost the South for a generation. Whether or not he said it, the prediction came true. In 1964, Republican Barry Goldwater, who voted against the Civil Rights Act, won five Deep South states that had voted Democratic for nearly a century. Lesson 23 picks up that story.',
      { t: 'check', q: 'The Voting Rights Act of 1965 differed from the 15th Amendment mainly in that it', o: ['granted Black men the right to vote for the first time', 'provided federal enforcement mechanisms like federal examiners and preclearance', 'banned poll taxes in federal elections', 'extended the vote to 18-year-olds'], a: 1, x: 'The 15th Amendment (1870) already banned racial discrimination in voting on paper. The VRA added the federal enforcement it lacked. Poll taxes were the 24th Amendment; 18-year-olds were the 26th.' }
    ] }
  ]
},

/* ───────────────────────── L22 ───────────────────────── */
{
  id: 'l22', n: 22, short: 'Credibility gap', title: 'The Credibility Gap: Vietnam & Watergate', era: 'Civil Rights, Trust & Realignment', eraYears: '1945–1980s', years: '1963–1976', ap: ['8.14'], sg: '26', min: 22,
  sub: 'In 1964, three out of four Americans trusted the federal government to do the right thing. By 1980, only one in four did. Here is what happened in between.',
  objectives: ['Define the credibility gap', 'Explain how the Vietnam War, the antiwar movement, the 1968 Democratic Convention, Kent State and the Pentagon Papers damaged trust', 'Explain the Watergate scandal and its consequences'],
  sections: [
    { title: 'What is a credibility gap?', blocks: [
      'A <b>{{credibility gap}}</b> is the distance between what leaders say and what people believe is true. In the 1960s, journalists started using the phrase about the Johnson administration’s claims on Vietnam. By the mid-1970s it described the whole relationship between Americans and their government.',
      { t: 'diagram', name: 'trust', cap: 'Share of Americans who trust the federal government to do what is right “just about always” or “most of the time.” Approximate figures from American National Election Studies data compiled by the Pew Research Center.' },
      'The decline started with doubts after President Kennedy’s assassination in 1963. Most Americans at first accepted the Warren Commission’s finding that Lee Harvey Oswald acted alone, but suspicion grew over the following decade. Then came Vietnam.'
    ] },
    { title: 'Vietnam: the war the government misrepresented', blocks: [
      'The U.S. sent aid and then troops to South Vietnam to stop the spread of communism from North Vietnam. In August 1964, after reports of North Vietnamese attacks on U.S. ships, Congress passed the <b>Gulf of Tonkin Resolution</b>, giving LBJ broad power to use military force without declaring war. The second reported attack likely never happened.',
      'By 1968, more than <b>500,000</b> American troops were in Vietnam. Officials kept assuring the public that victory was near, that there was “light at the end of the tunnel.” Then in January 1968, North Vietnamese and Viet Cong forces launched the <b>Tet Offensive</b>, attacking more than 100 cities at once, even the U.S. embassy grounds in Saigon. Militarily, the U.S. pushed them back. Politically, it was devastating: why would the enemy be this strong if victory was near? In March, LBJ announced he wouldn’t run for reelection.',
      { t: 'h', h: 'The antiwar movement' },
      'Opposition grew from college teach-ins in 1965 to massive marches. Students burned draft cards, and the draft fell hardest on poor and working-class men, who couldn’t get student deferments.',
      { t: 'terms', items: [
        ['1968 Democratic National Convention', 'In Chicago, thousands of antiwar protesters clashed with police, who beat protesters, reporters and bystanders on live television while protesters chanted “The whole world is watching.” A later investigation called it a “police riot.” The Democratic Party looked divided and chaotic. Republican Richard Nixon won in November, promising “law and order.”'],
        ['{{Kent State}} (May 4, 1970)', 'After Nixon announced an expansion of the war into Cambodia, protests erupted on campuses. At Kent State University in Ohio, the Ohio National Guard fired on students, <b>killing four and wounding nine</b>. Ten days later, police killed two students at Jackson State, a historically Black college in Mississippi.'],
        ['{{Pentagon Papers}} (1971)', 'Daniel Ellsberg, a former military analyst, leaked a secret Defense Department history of the war to the <i>New York Times</i>. It showed that four presidential administrations had <b>misled the public</b> about the war. Nixon’s administration tried to stop publication. In <i>New York Times v. United States</i> (1971), the Supreme Court ruled the papers could be published.']
      ] },
      { t: 'callout', k: 'key', h: 'Vietnam damaged trust because the public learned, repeatedly, that the government had <b>lied about the war</b>: about Tonkin, about progress, about the war’s expansion. When the government used force against its own citizens, as at Chicago and Kent State, it deepened the divide.' }
    ] },
    { title: 'Watergate', blocks: [
      { t: 'img', src: 'nixon.jpg', portrait: true, cap: '<b>Richard Nixon</b>, Republican, president 1969–1974. He won reelection in 1972 in one of the largest landslides in history, carrying 49 states. Less than two years later, he became the only president ever to resign.', credit: 'Official portrait. Public domain.' },
      { t: 'timeline', items: [
        ['June 17, 1972', 'Police catch five burglars inside the Democratic National Committee headquarters at the <b>Watergate</b> complex in Washington, D.C. They are connected to Nixon’s reelection campaign (CREEP).'],
        ['Aug–Oct 1972', '<i>Washington Post</i> reporters Bob Woodward and Carl Bernstein trace money and links from the burglars back to the White House.'],
        ['Nov 1972', 'Nixon is reelected in a landslide.'],
        ['1973', 'Seven men are convicted. The Senate holds televised hearings. A Nixon aide reveals that Nixon <b>secretly taped</b> conversations in the Oval Office.'],
        ['Oct 1973', '<b>“Saturday Night Massacre”</b>: Nixon orders the firing of the special prosecutor demanding the tapes. The attorney general and his deputy resign rather than do it.'],
        ['Nov 1973', 'Nixon tells reporters: “People have got to know whether or not their president is a crook. Well, I’m not a crook.”'],
        ['July 1974', 'In <i>United States v. Nixon</i>, the Supreme Court rules <b>unanimously</b> that he must hand over the tapes. The House Judiciary Committee approves articles of impeachment.'],
        ['Aug 1974', 'The “<b>smoking gun</b>” tape shows Nixon ordered a cover-up just days after the break-in, using the CIA to block the FBI investigation. Republican support collapses. <b>Nixon resigns on August 9, 1974.</b>']
      ] },
      'His successor, <b>Gerald Ford</b>, pardoned Nixon a month later, saying the nation needed to move on. Many Americans saw it as one more deal among insiders, and Ford lost the 1976 election to Jimmy Carter, a Washington outsider who promised, “I will never lie to you.”',
      { t: 'reveal', title: 'Think like a historian', items: [
        ['Was Watergate a failure or a success of American democracy?', '<b>Both.</b> It showed a president abusing power and lying. But it also showed the system’s checks working: a free press investigated, Congress held hearings and moved toward impeachment, and the Supreme Court ruled unanimously that even the president is not above the law. A strong answer explains both sides.'],
        ['Why did Nixon need the cover-up at all?', 'The break-in was small. The cover-up, which involved lying, obstructing justice and paying hush money, turned it into a constitutional crisis. “It’s not the crime, it’s the cover-up” became a lesson for every politician afterward.']
      ] }
    ] },
    { title: 'The aftermath', blocks: [
      'Congress responded by trying to restrain presidential power:',
      { t: 'terms', items: [
        ['War Powers Resolution (1973)', 'The president must notify Congress within 48 hours of sending troops, and must withdraw them within 60–90 days without congressional approval. Passed over Nixon’s veto.'],
        ['Campaign finance reform (1974)', 'Limits on campaign contributions and the Federal Election Commission'],
        ['Freedom of Information Act (strengthened 1974)', 'Easier public access to government records'],
        ['Church Committee (1975)', 'A Senate investigation that exposed CIA and FBI abuses, including spying on Americans']
      ] },
      { t: 'chain', title: 'How the credibility gap grew', items: [
        ['Vietnam deceptions', 'Gulf of Tonkin, false optimism, Tet'],
        ['Government vs. citizens', '1968 DNC, Kent State'],
        ['Proof of lying', 'Pentagon Papers (1971)'],
        ['Presidential crime', 'Watergate and resignation (1974)'],
        ['Result', 'Deep, lasting cynicism about government']
      ] },
      { t: 'callout', k: 'connect', h: 'Here’s why this matters for the next lesson. If Americans don’t trust the government, they’re open to a message that <b>government itself is the problem</b>. That’s exactly what Ronald Reagan argued in 1980.' },
      { t: 'check', q: 'The Pentagon Papers contributed to a loss of trust in government primarily because they revealed that', o: ['President Nixon had ordered the Watergate break-in', 'several presidential administrations had misled the public about the Vietnam War', 'the National Guard had fired on students at Kent State', 'the Gulf of Tonkin Resolution was unconstitutional'], a: 1, x: 'The Pentagon Papers were a secret history showing that administrations from Truman to Johnson had not told the public the truth about Vietnam. They weren’t about Watergate, which came later.' }
    ] }
  ]
},

/* ───────────────────────── L23 ───────────────────────── */
{
  id: 'l23', n: 23, short: 'Rise of conservatism', title: 'Liberalism vs. Conservatism: The Rise of the New Right', era: 'Civil Rights, Trust & Realignment', eraYears: '1945–1980s', years: '1960–1988', ap: ['8.14', '9.2'], sg: '27', min: 30,
  sub: 'From Goldwater’s landslide loss to Reagan’s landslide win took just 16 years. A new conservative coalition grew out of the Sun Belt, churches and a backlash against the 1960s.',
  objectives: ['Explain the “liberal consensus” and the basic liberal–conservative spectrum', 'Explain the context for and key figures in the rise of movement conservatism', 'Explain the Southern Strategy and the Religious Right', 'Explain why the rise of the Sun Belt mattered in national politics', 'Describe the Reagan Revolution'],
  sections: [
    { title: 'The liberal consensus', blocks: [
      'After World War II, both parties mostly accepted FDR’s argument that a modern government should manage the economy and provide a safety net. Republican president Dwight Eisenhower (1953–1961) kept Social Security, expanded it, and built the Interstate Highway System. Historians call this agreement the <b>{{liberal consensus}}</b>.',
      'It peaked under LBJ’s <b>Great Society</b> (1964–65): the War on Poverty, <b>Medicare</b> (health insurance for the elderly) and <b>Medicaid</b> (for the poor), federal aid to education, and the civil rights laws from Lesson 21.',
      { t: 'diagram', name: 'spectrum' },
      { t: 'table', head: ['Generally, liberals favor…', 'Generally, conservatives favor…'], rows: [
        ['Larger government programs and a social safety net', 'Smaller government and more individual responsibility'],
        ['Regulating business to protect workers, consumers and the environment', 'Free markets with less regulation'],
        ['Higher taxes on the wealthy to fund programs', 'Lower taxes'],
        ['Federal action to protect civil rights', 'States’ rights and local control'],
        ['Openness to social change', 'Preserving traditional values, religion and family structures']
      ] }
    ] },
    { title: 'Goldwater: a landslide loss that launched a movement', blocks: [
      { t: 'img', src: 'goldwater.jpg', portrait: true, cap: '<b>Barry Goldwater</b>, Republican senator from Arizona and author of <i>The Conscience of a Conservative</i> (1960). He wanted to roll back the New Deal, opposed the Civil Rights Act of 1964 as federal overreach, and called for an aggressive stand against communism.', credit: 'Public domain.' },
      'At the 1964 Republican convention, Goldwater declared: “<b>Extremism in the defense of liberty is no vice.</b>” To most voters he seemed too radical, and LBJ crushed him, winning 44 states.',
      { t: 'img', src: 'ec1964.png', cap: 'The 1964 election. Look at what Goldwater (red) won: his home state of Arizona, plus <b>five Deep South states</b> (Mississippi, Alabama, Georgia, Louisiana and South Carolina) that had voted Democratic since Reconstruction. His opposition to the Civil Rights Act won them over.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      'Goldwater lost, but his campaign built the organization, donors and young activists of a new conservative movement. It also introduced a former actor who gave a famous televised speech for Goldwater, “A Time for Choosing”: <b>Ronald Reagan</b>.',
      { t: 'h', h: 'Why conservatives felt threatened in the 1960s' },
      'Conservatives saw the 1960s as an assault on the “American way of life.” Goldwater warned that the nation’s “moral fiber” was decaying. They pointed to:',
      { t: 'flip', items: [
        ['Federal overreach', 'Washington forcing changes on states and communities: school integration, <b>busing</b>, civil rights enforcement, regulations'],
        ['The Warren Court', '<i>Engel v. Vitale</i> (1962) ruled that school-sponsored prayer violated the First Amendment. Other rulings expanded rights for criminal defendants.'],
        ['Disorder', 'Urban riots (1965–68), rising crime, campus protests and the counterculture'],
        ['Cost', 'Great Society spending and, in the 1970s, high inflation'],
        ['{{Affirmative action}}', 'Policies giving preference to minorities and women in hiring and admissions to address past discrimination. Critics called it reverse discrimination.']
      ] }
    ] },
    { title: 'The Southern Strategy', blocks: [
      'After the civil rights laws, openly racist campaigning became unacceptable in national politics. Politicians began using coded language, sometimes called “<b>dog whistles</b>”: phrases like “states’ rights,” “law and order” and “forced busing” that signaled opposition to civil rights to white voters without saying so openly.',
      '<b>George Wallace</b>, the Democratic governor of Alabama, had promised “segregation now, segregation tomorrow, segregation forever” in 1963. In 1968 he ran for president as a third-party candidate and won five Deep South states. He showed there were millions of white voters ready to leave the Democrats.',
      'Richard Nixon’s campaign worked to win those voters. His <b>{{Southern Strategy}}</b> appealed to white Southerners and suburbanites who resented civil rights changes, through “law and order,” opposition to busing, and promises to appoint conservative judges. Nixon called these voters the “<b>silent majority</b>”: ordinary Americans who weren’t protesting and felt ignored.',
      { t: 'callout', k: 'key', title: 'Realignment', h: 'Over the next few decades, the white South moved from solidly Democratic to solidly Republican. That shift is the <b>Sixth Party System</b>. The Republican Party became the home of both economic and racial/social conservatives.' },
      { t: 'diagram', name: 'parties', cur: 6 }
    ] },
    { title: 'The Religious Right', blocks: [
      'In the 1970s, evangelical Protestant Christians, many of whom had avoided politics, became a powerful political force. The <b>{{Religious Right}}</b> was a reaction against social changes advocated by the civil rights movement, the women’s movement and others.',
      'In 1979, televangelist <b>{{Jerry Falwell}}</b> founded the <b>{{Moral Majority}}</b> to mobilize conservative Christians as voters. One early spark was a fight over <b>private Christian schools</b>: many “segregation academies” had opened in the South after integration, and in the 1970s the IRS moved to deny tax exemptions to private schools that discriminated by race. Conservative activists cast it as a fight for religious freedom against government interference.',
      'The movement soon expanded to what it called “<b>traditional family values</b>”:',
      { t: 'terms', items: [
        ['{{Roe v. Wade}} (1973)', 'The Supreme Court ruled that the constitutional right to privacy included a woman’s right to an abortion. It became the central issue for the Religious Right. (The Court overturned Roe in 2022.)'],
        ['The Equal Rights Amendment', 'Passed Congress in 1972. Activist <b>Phyllis Schlafly</b> led a campaign arguing it would harm traditional families. It fell short of ratification.'],
        ['School prayer', 'Support for restoring prayer in public schools'],
        ['Gay rights', 'Opposition to the gay rights movement']
      ] },
      'Because it could deliver huge blocs of voters, the Religious Right became a central part of the Republican coalition, starting with Reagan in 1980.'
    ] },
    { title: 'The Sun Belt', blocks: [
      'The <b>{{Sun Belt}}</b> is the band of Southern and Southwestern states from Florida and Georgia through Texas and Arizona to Southern California. After World War II it grew enormously:',
      { t: 'flip', items: [
        ['Air conditioning', 'Made hot climates livable year-round'],
        ['Defense spending', 'Military bases and aerospace and defense industries, especially in California, Texas and Arizona'],
        ['Business climate', 'Lower taxes, cheaper land and “right-to-work” laws that weakened unions attracted companies from the Northeast and Midwest (the Rust Belt)'],
        ['Retirees and suburbs', 'Retirees moved to Florida and Arizona; new suburbs grew fast']
      ] },
      { t: 'callout', k: 'key', title: 'Why the Sun Belt mattered', h: 'Population means <b>House seats and electoral votes</b>. As people moved South and West, those states gained political power, and Sun Belt suburbs leaned conservative: anti-tax, anti-union, anti-communist and often evangelical. Goldwater (Arizona), Nixon (California) and Reagan (California) all came from the Sun Belt. Its growth moved the center of American politics to the right.' }
    ] },
    { title: 'The Reagan Revolution', blocks: [
      'By 1980, everything came together: distrust of government after Vietnam and Watergate, “stagflation” (high inflation <i>and</i> high unemployment), an energy crisis, and the humiliating Iran hostage crisis, in which Iranian militants held 52 Americans for 444 days.',
      { t: 'img', src: 'reagan.jpg', portrait: true, cap: '<b>Ronald Reagan</b>, Republican, former Hollywood actor and governor of California. In <b>1980</b> (a Forever Date) he defeated President Jimmy Carter in a landslide, 489 electoral votes to 49. He won again in 1984, carrying 49 states.', credit: 'Official portrait, 1981. Public domain.' },
      { t: 'quote', h: '“In this present crisis, government is not the solution to our problem; government is the problem.”', cite: 'Ronald Reagan, First Inaugural Address, January 1981' },
      { t: 'img', src: 'ec1980.png', cap: 'The 1980 election. Reagan (red) won 44 states, including most of the South, the region that had been the Democrats’ “Solid South.”', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      '<b>{{Movement conservatism}}</b>, also called the <b>New Right</b>, united three groups under Reagan:',
      { t: 'table', head: ['Group', 'What they wanted'], rows: [
        ['Economic conservatives', 'Tax cuts, deregulation, smaller government, free markets'],
        ['Social / religious conservatives', 'Traditional family values, opposition to abortion, school prayer'],
        ['Anti-communists', 'A big military buildup and confrontation with the Soviet Union']
      ] },
      { t: 'h', h: 'Reaganomics' },
      'Reagan’s economic policy, nicknamed “<b>Reaganomics</b>” or supply-side economics, argued that cutting taxes, especially for businesses and high earners, would encourage investment and growth that would “trickle down” to everyone.',
      { t: 'terms', items: [
        ['Tax cuts', 'The top income tax rate fell from 70% to 50% (1981), then to 28% (1986).'],
        ['Deregulation', 'Fewer rules on business, banking, energy and the environment'],
        ['Domestic cuts', 'Reduced spending on some social programs, though Social Security and Medicare remained'],
        ['Defense buildup', 'Huge increases in military spending'],
        ['Deficits', 'Lower taxes plus higher defense spending meant the national debt roughly <b>tripled</b> during his two terms.']
      ] },
      'Public support was mixed. Most Americans opposed cuts to programs they used, but they liked lower taxes. The economy recovered strongly after a recession in 1981–82, and Reagan’s “<b>Morning in America</b>” campaign in 1984 captured a national mood of renewed optimism.',
      { t: 'callout', k: 'connect', title: 'Bring it all together', h: 'Look how far the unit has come. In 1932, Americans turned to FDR and a bigger federal government. In 1980, they turned to Reagan and a promise of smaller government. The core question, <b>how much power the national government should have</b>, is the same one Hamilton and Jefferson argued about in 1791. That’s the throughline of American democracy.' },
      { t: 'sort', prompt: 'Which strand of the conservative coalition does each belong to?', buckets: ['Economic conservatism', 'Social / religious conservatism', 'Political realignment of the South'], items: [
        ['Moral Majority', 1], ['Supply-side tax cuts', 0], ['Southern Strategy', 2], ['Opposition to Roe v. Wade', 1], ['Deregulation', 0], ['George Wallace’s 1968 campaign', 2], ['STOP ERA campaign', 1], ['Goldwater wins the Deep South in 1964', 2]
      ] },
      { t: 'check', q: 'Which of the following best explains why the rise of the Sun Belt strengthened conservatism?', o: ['Sun Belt states had the strongest labor unions', 'Population growth gave conservative-leaning Southern and Western states more House seats and electoral votes', 'The Sun Belt voted overwhelmingly for the New Deal coalition', 'The Sun Belt lost population to the Northeast'], a: 1, x: 'More people meant more representatives and electoral votes, and Sun Belt suburbs leaned toward anti-tax, anti-union, often evangelical conservatism.' }
    ] }
  ]
},

/* ───────────────────────── L24 ───────────────────────── */
{
  id: 'l24', n: 24, short: 'Exam skills', title: 'Exam Skills Workshop: SAQs, Context & the LEQ', era: 'Exam skills', eraYears: '', years: 'Writing', ap: [], sg: '20', min: 18,
  sub: 'Knowing the history is half the battle. This workshop shows you exactly how to turn what you know into points.',
  objectives: ['Write an SAQ response that earns all 3 points', 'Analyze a source using SPY', 'Write a thesis and contextualization for an LEQ'],
  sections: [
    { title: 'Anatomy of an SAQ', blocks: [
      'Each SAQ has three parts (A, B and C), worth <b>1 point each</b>. You have 40 minutes for 3 SAQs, about 13 minutes each. There is no thesis and no intro paragraph. Get straight to the point.',
      'Pay close attention to the <b>task verb</b>:',
      { t: 'table', head: ['Verb', 'What you must do', 'Length'], rows: [
        ['<b>Identify</b>', 'Name a specific thing (an event, person, law or idea)', '1 sentence can earn it'],
        ['<b>Describe</b>', 'Give relevant characteristics, more than just a name', '2 sentences'],
        ['<b>Explain</b>', 'Say <b>how or why</b>: connect your evidence to the prompt', '2–3 sentences, with “because” or “which led to”']
      ] },
      { t: 'callout', k: 'key', title: 'The ACE method (your class uses CEE/CER, which works the same way)', h: '<b>A</b>nswer the question directly, using the prompt’s words. <b>C</b>ite specific evidence: a named law, event, person or date. <b>E</b>xplain how the evidence answers the question. If you do all three in every part, you’ll earn the point almost every time.' },
      { t: 'h', h: 'Strong vs. weak' },
      { t: 'reveal', title: 'Prompt: Explain ONE cause of the Constitutional Convention of 1787.', items: [
        ['Weak answer (0 points)', '“People were unhappy with the government, so they wanted to make a new one.” This is too vague. Which people? Which government? Why? There is no specific evidence.'],
        ['Strong answer (1 point)', '“One cause of the Constitutional Convention was <b>Shays’ Rebellion</b> (1786–87). Because the Articles of Confederation gave the national government no power to tax or raise an army, it couldn’t put down the farmers’ uprising in Massachusetts. This convinced leaders like Washington and Madison that a stronger national government was needed, which led them to meet in Philadelphia in 1787.” <i>Answer, specific evidence, and an explanation with “because” and “which led to.”</i>']
      ] },
      { t: 'callout', k: 'mistake', title: 'Points students lose', h: ['<b>Too vague</b>: “the government,” “people back then,” “bad laws.”', '<b>Wrong time period</b>: if the prompt says 1800–1848, the Civil War doesn’t count.', '<b>Answering the wrong part</b>: label your answers A, B and C clearly.', '<b>Restating the source</b> instead of bringing in outside evidence when the prompt asks for it.'] }
    ] },
    { title: 'Secondary-source SAQs: comparing historians', blocks: [
      'One SAQ usually gives you <b>one or two passages by historians</b>. A common prompt: (A) describe one difference between the historians’ interpretations; (B) give evidence supporting Historian 1; (C) give evidence supporting Historian 2.',
      'Your class practiced with two historians on the causes of the Civil War. One argued that conflict between North and South over slavery had been building since the founding. The other argued that the war came from a breakdown of the political party system in the 1850s.',
      { t: 'table', head: ['Part', 'Weak (from your class “not great” sample)', 'Strong (College Board–style)'], rows: [
        ['A: Difference', '“One thinks it was slavery, the other thinks it was politics.” Too thin: it doesn’t describe either argument.', '“Historian 1 argues the war grew from a long-standing sectional conflict over slavery dating back decades, while Historian 2 argues that the collapse of the national party system in the 1850s, rather than slavery alone, made war likely.”'],
        ['B: Support Historian 1', '“The Missouri Compromise shows he was right.” Names evidence but doesn’t explain it.', '“The Missouri Compromise (1820) supports Historian 1. Even in 1820, admitting a single state caused a national crisis over slavery’s expansion, showing the sectional conflict was already deep decades before the war.”'],
        ['C: Support Historian 2', '(left blank or vague)', '“The Kansas-Nebraska Act (1854) supports Historian 2. By repealing the Missouri Compromise line, it destroyed the Whig Party and created the sectional Republican Party, leaving no national party able to compromise.”']
      ] },
      { t: 'check', q: 'A prompt asks you to “briefly explain how ONE historical development from 1820 to 1860 not mentioned in the excerpt supports Historian 2.” The excerpt mentions the Kansas-Nebraska Act. Which is the best choice?', o: ['The Kansas-Nebraska Act', 'The collapse of the Whig Party after 1854 and the founding of the sectional Republican Party', 'The Emancipation Proclamation', 'The Northwest Ordinance'], a: 1, x: 'You can’t use something the excerpt already mentions, and the Emancipation Proclamation (1863) and Northwest Ordinance (1787) are outside 1820–1860. The Whig collapse and Republican founding fit Historian 2’s party-breakdown argument.' }
    ] },
    { title: 'Reading sources: SPY', blocks: [
      'For every document, on SAQs, MCQs and later the DBQ, use <b>SPY</b>:',
      { t: 'terms', items: [
        ['S: Summarize', 'In one sentence, what does the source say?'],
        ['P: Prompt', 'How does it relate to the question you’re answering?'],
        ['Y: whY', 'Why is this source important to your argument? Think about its author, purpose, audience and historical situation.']
      ] },
      { t: 'callout', k: 'exam', title: 'Read the question first', h: 'On multiple choice, read the <b>question stem before the source</b>. Then you know what to look for. For a cartoon or image, check the <b>date and creator</b> first: they often give away the context.' },
      { t: 'h', h: 'Contextualization' },
      'Contextualization means describing the <b>broader historical situation</b> around a topic or source: what was happening before or during it that helps explain it. It’s the <b>most frequently missed</b> point on the LEQ and DBQ.',
      { t: 'reveal', items: [
        ['Example: context for an essay on political participation, 1776–1876', '“As European empires competed for power in North America, Britain governed its colonies with a loose hand. Under the policy later called salutary neglect, Parliament rarely enforced its trade laws, and colonial assemblies grew used to governing themselves. When Britain tried to tighten control and raise taxes after the French and Indian War, colonists who expected self-government resisted, setting the stage for debates over who should have a voice in the new nation.” <i>Notice: it’s 3–4 sentences, it comes from just before the essay’s time period, and it leads directly into the topic.</i>']
      ] }
    ] },
    { title: 'LEQ basics', blocks: [
      'The Long Essay Question (LEQ) is 40 minutes and 15% of the exam. You choose one of three prompts. It’s worth 6 points:',
      { t: 'table', head: ['Rubric row', 'Points', 'How to earn it'], rows: [
        ['Thesis / claim', '1', 'A historically defensible claim that answers the prompt and sets up your reasoning'],
        ['Contextualization', '1', '3–4 sentences on the broader situation before or during the period'],
        ['Evidence', '2', 'Specific examples (1 pt), used to support your argument (2 pts)'],
        ['Analysis and reasoning', '2', 'Use a historical skill like causation or continuity and change (1 pt); show <b>complexity</b> (1 pt)']
      ] },
      { t: 'h', h: 'The counterclaim thesis' },
      'Your class uses a powerful template: <b>“Although X, A and B. Therefore, Y.”</b> It acknowledges the other side, which is a step toward the complexity point.',
      { t: 'check', q: 'Prompt: <i>Explain how changes in political participation in the United States influenced society between 1776 and 1876.</i> Which thesis is strongest?', o: ['“Political participation changed a lot between 1776 and 1876.”', '“Although the Revolution promised equality, voting remained limited to white men for most of the period. However, the expansion of white male suffrage in the 1820s–1840s fueled mass political parties, and the Reconstruction Amendments briefly made Black men voters and officeholders, showing that participation expanded unevenly and was often reversed.”', '“The Civil War was the most important event in American history.”', '“In this essay I will talk about voting, parties and Reconstruction.”'], a: 1, x: 'The “Although…” thesis makes a defensible claim, uses the counterclaim structure, names specific developments and sets up a line of reasoning. “Changed a lot” is too vague, the Civil War claim doesn’t answer the prompt, and “In this essay I will…” just announces a topic.' },
      { t: 'callout', k: 'key', title: 'You’re ready', h: 'You’ve now covered the whole unit. Head to <b>Unit Tests</b> for a timed practice exam, or the <b>SAQ Practice</b> page to apply this workshop.' }
    ] }
  ]
}

);
