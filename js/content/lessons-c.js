/* Lessons 13–18: Civil War → Progressive Era */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

/* ───────────────────────── L13 ───────────────────────── */
{
  id: 'l13', n: 13, short: 'Civil War politics', title: 'Government & Politics During the Civil War', era: 'Slavery, Sectionalism & Civil War', eraYears: '1820–1865', years: '1861–1865', ap: ['5.9'], sg: '16', min: 24,
  sub: 'Lincoln began the war to save the Union. By 1863 it had become a war to end slavery, and along the way the federal government grew more powerful than ever before.',
  objectives: ['Explain how and why the North’s war goals changed from saving the Union to ending slavery', 'Explain what the Emancipation Proclamation did and did not do', 'Explain how Lincoln recast the war in the Gettysburg Address', 'Explain why Lincoln suspended habeas corpus, and how the war expanded federal power'],
  sections: [
    { title: 'War aim #1: save the Union', blocks: [
      'When the war began in 1861, Lincoln’s stated goal was not to end slavery. It was to <b>restore the Union</b>. He had political reasons: he needed to keep the four slaveholding <b>border states</b> (Delaware, Maryland, Kentucky and Missouri) from joining the Confederacy, and he needed Northern Democrats who would fight for the Union but not for abolition.',
      { t: 'quote', h: '“My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that.”', cite: 'Abraham Lincoln, letter to newspaper editor Horace Greeley, August 1862' },
      { t: 'callout', k: 'think', title: 'Read the source carefully', h: 'When Lincoln wrote this, he had <b>already drafted</b> the Emancipation Proclamation and was waiting for a military victory to announce it. The letter prepared Northern readers: if he freed enslaved people, it would be framed as a way to save the Union. This is a great example of why <b>purpose and context</b> matter when you analyze a source.' },
      'The war went badly for the Union at first. After the defeat at Bull Run (1861) and a series of costly battles with no clear winner, tens of thousands were dead on both sides. The Union needed a new strategy.'
    ] },
    { title: 'War aim #2: end slavery', blocks: [
      'Freedom came step by step, and <b>enslaved people pushed it forward themselves</b>. From the first months of the war, thousands escaped to Union lines. Union officers began calling them “contraband of war,” property the enemy could no longer use, and refused to return them.',
      { t: 'timeline', items: [
        ['1861', 'First Confiscation Act: the Union can seize property, including enslaved people, used in the rebellion.'],
        ['Apr 1862', 'Slavery abolished in Washington, D.C. (with payment to owners).'],
        ['Jun 1862', 'Slavery banned in all federal territories, defying Dred Scott.'],
        ['Jul 1862', 'Second Confiscation Act and Militia Act: people escaping from Confederate owners are free, and Black men can serve the Union.'],
        ['Sep 1862', 'After the Union victory at <b>Antietam</b>, Lincoln issues a preliminary proclamation.'],
        ['Jan 1, 1863', '<b>The {{Emancipation Proclamation}}</b> takes effect.', true],
        ['Dec 1865', 'The <b>13th Amendment</b> abolishes slavery everywhere in the U.S.']
      ] },
      { t: 'img', src: 'emancipation.jpg', cap: 'A commemorative print of the Emancipation Proclamation. Lincoln issued it as a <b>war measure</b> under his power as commander in chief.', credit: 'Public domain.' },
      { t: 'h', h: 'What the Emancipation Proclamation did and didn’t do' },
      { t: 'table', head: ['It did…', 'It did not…'], rows: [
        ['Declare enslaved people in areas <b>still in rebellion</b> “forever free”', 'Free anyone in the loyal border states'],
        ['Turn every Union advance into a march of liberation', 'Free people in Confederate areas the Union already controlled (such as parts of Louisiana and Tennessee)'],
        ['Allow Black men to enlist in the Union army and navy', 'Abolish slavery as an institution. That took the 13th Amendment.'],
        ['Change the purpose of the war to include ending slavery', 'Grant citizenship or equal rights']
      ] },
      { t: 'flip', title: 'Why did Lincoln do it?', items: [
        ['Military', 'Enslaved labor powered the Confederate economy and army supply. Freeing those workers weakened the South, and they could become Union soldiers.'],
        ['Diplomatic', 'The Confederacy hoped Britain and France would help, because they needed Southern cotton. Both had abolished slavery. Once the war was about freedom, they couldn’t support a slaveholding nation.'],
        ['Moral and political', 'Lincoln personally hated slavery, and Radical Republicans and abolitionists like Frederick Douglass pressed him hard.']
      ] },
      'About <b>180,000 Black men</b> served in the Union army, around 10% of its forces, and roughly half of them had escaped slavery in the South. They faced unequal pay (until 1864) and Confederate threats to enslave or execute captured Black soldiers, but they fought in more than 40 major battles.',
      { t: 'check', q: 'Which statement about the Emancipation Proclamation is accurate?', o: ['It freed all enslaved people in the nation at once', 'It applied only to areas still in rebellion', 'It was passed by Congress as an amendment', 'It ended the war by forcing a surrender'], a: 1, x: 'The Proclamation was an executive war order. It applied only to Confederate territory in rebellion, not to the border states. The 13th Amendment ended slavery nationwide.' }
    ] },
    { title: 'Gettysburg: the war gets a new meaning', blocks: [
      { t: 'img', src: 'gettysburg.jpg', cap: 'The Battle of Gettysburg, Pennsylvania (July 1–3, 1863), the largest battle of the war: roughly 93,000 Union troops against 71,000 Confederates, with over 50,000 casualties in three days. Robert E. Lee’s invasion of the North failed. A day later, Vicksburg fell to Grant, giving the Union the Mississippi River. Together they were the war’s turning point.', credit: 'Thure de Thulstrup / L. Prang & Co., 1887. Public domain.' },
      'Four months later, on November 19, 1863, Lincoln spoke at the dedication of a cemetery for the Union dead. His speech was only about 270 words long.',
      { t: 'quote', h: '“Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal… It is rather for us to be here dedicated to the great task remaining before us… that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.”', cite: 'Abraham Lincoln, Gettysburg Address, November 19, 1863 (excerpt)' },
      { t: 'terms', items: [
        ['Four score and seven', '4 × 20 + 7 = 87 years before 1863, which takes you to <b>1776</b>. Lincoln dates the nation from the <b>Declaration</b>, with its promise that “all men are created equal,” not from the Constitution, which protected slavery.'],
        ['“A new birth of freedom”', 'The war is now about remaking the nation: ending slavery and fulfilling the Declaration’s promise.'],
        ['“Of the people, by the people, for the people”', 'The war is a test of whether <b>democracy itself</b> can survive.']
      ] },
      { t: 'callout', k: 'key', title: 'Compare the two Lincolns', h: 'In 1861 he said: “I have no purpose… to interfere with the institution of slavery in the States where it exists.” In 1863, at Gettysburg, he cast the war as a struggle for equality and democracy. That shift, from <b>Union</b> to <b>Union and freedom</b>, is one of the most tested changes in the course.' }
    ] },
    { title: 'Wartime power: habeas corpus and a bigger government', blocks: [
      '<b>{{Habeas corpus}}</b> (Latin for “you shall have the body”) is the right of an arrested person to be brought before a judge, who decides whether the imprisonment is legal. It protects people from being jailed indefinitely without charges. The Constitution says it can be suspended only “when in Cases of Rebellion or Invasion the public Safety may require it.”',
      'In April 1861, pro-Confederate mobs in <b>Maryland</b> attacked Union troops and destroyed railroad bridges. Maryland surrounds Washington, D.C. on three sides; if it fell, the capital would be cut off. Lincoln <b>suspended habeas corpus</b> along the rail lines so the army could arrest and hold suspected saboteurs without trial. Chief Justice Taney ruled in <i>Ex parte Merryman</i> that only Congress could do that. Lincoln ignored the ruling, arguing that the Constitution means nothing if the country falls apart. Later he extended the suspension nationwide against people who resisted the draft, and Congress authorized it in 1863.',
      { t: 'callout', k: 'think', h: 'Lincoln asked: “Are all the laws, but one, to go unexecuted, and the government itself go to pieces, lest that one be violated?” Was he right to put national survival above a constitutional right? The debate over <b>civil liberties in wartime</b> comes back in every major war in U.S. history.' },
      { t: 'h', h: 'How the war expanded the federal government' },
      'With Southern Democrats gone from Congress, Republicans passed their entire economic program, and the federal government grew enormously:',
      { t: 'terms', items: [
        ['First national draft (1863)', 'The Confederacy drafted first, in 1862. In the North, the draft let wealthy men pay $300 to avoid service, which sparked the deadly <b>New York City draft riots</b> (July 1863).'],
        ['First federal income tax (1861)', 'Plus new excise taxes to pay for the war'],
        ['Greenbacks and national banks', 'A national paper currency and a national banking system (1862–63)'],
        ['Homestead Act (1862)', '160 acres of western land free to settlers who farmed it for 5 years'],
        ['Pacific Railway Act (1862)', 'Funded the transcontinental railroad, finished in 1869'],
        ['Morrill Land-Grant Act (1862)', 'Federal land to fund state colleges, many of today’s state universities']
      ] },
      'Democracy also survived the war. In <b>1864</b>, in the middle of a civil war, the Union held a presidential election. Lincoln beat Democrat George McClellan, helped by Sherman’s capture of Atlanta, and soldiers were allowed to vote. That was proof of the “government of the people” Lincoln had described.',
      'The war ended in April 1865 with Lee’s surrender at Appomattox. About <b>750,000</b> people had died, roughly as many Americans as in all the nation’s other wars combined. The Southern economy was destroyed. Five days after the surrender, on April 14, 1865, Lincoln was assassinated. Rebuilding the nation would fall to someone else.',
      { t: 'sort', prompt: 'Did each development increase federal power or limit it?', buckets: ['Increased federal power', 'Limited federal power'], items: [
        ['Suspension of habeas corpus', 0], ['National draft', 0], ['Income tax', 0], ['Dred Scott ruling (1857)', 1], ['Homestead Act', 0], ['Nullification theory', 1], ['National banking system', 0]
      ] }
    ] }
  ]
},

/* ───────────────────────── L14 ───────────────────────── */
{
  id: 'l14', n: 14, short: 'Reconstruction plans', title: 'Reconstruction: President vs. Congress', era: 'Reconstruction & the Gilded Age', eraYears: '1865–1900', years: '1863–1870', ap: ['5.10'], sg: '17', min: 26,
  sub: 'The war was over, and four million people were free. But on whose terms would the South rejoin the nation? A lenient president and a radical Congress fought over the answer.',
  objectives: ['Compare Presidential and Congressional Reconstruction', 'Explain why the Congressional plan was called “radical”', 'Explain how the 13th, 14th and 15th Amendments reshaped the Constitution', 'Describe the Black Codes and the Freedmen’s Bureau'],
  sections: [
    { title: 'What needed reconstructing?', blocks: [
      '<b>{{Reconstruction}}</b> (1865–1877) is the era after the Civil War when the nation tried to rebuild the South and decide what freedom would mean. The problems were enormous:',
      { t: 'flip', items: [
        ['Readmission', 'On what terms should the 11 Confederate states rejoin the Union? Who should run their governments?'],
        ['Punishment', 'Should Confederate leaders be punished, pardoned or barred from office?'],
        ['Freedom', 'Four million freedpeople needed land, work, education, legal protection and the vote. What did they need to make freedom real?'],
        ['Power', 'Who controls Reconstruction: the President or Congress?']
      ] },
      { t: 'timeline', items: [
        ['Jan 1865', 'Congress passes the <b>13th Amendment</b> abolishing slavery (ratified December 1865).'],
        ['Mar 1865', 'Congress creates the <b>{{Freedmen’s Bureau}}</b>.'],
        ['Apr 9, 1865', 'The Confederacy surrenders at Appomattox.'],
        ['Apr 14, 1865', 'Lincoln is shot. Vice President <b>Andrew Johnson</b> becomes president.']
      ] },
      { t: 'quote', h: '“Neither slavery nor involuntary servitude, <b>except as a punishment for crime whereof the party shall have been duly convicted</b>, shall exist within the United States, or any place subject to their jurisdiction.”', cite: '13th Amendment, Section 1 (1865). Note the loophole in the middle. It matters in Lessons 15 and 16.' }
    ] },
    { title: 'Presidential Reconstruction (1865–1867)', blocks: [
      'Even during the war, Lincoln proposed a forgiving plan. Under his <b>Ten Percent Plan</b> (1863), once 10% of a state’s 1860 voters swore loyalty to the Union and accepted emancipation, the state could form a new government. Lincoln wanted to bring the South back quickly, “with malice toward none.” Radical Republicans thought this was far too lenient.',
      { t: 'img', src: 'lincoln.jpg', portrait: true, cap: 'Lincoln was killed before Reconstruction really began. His successor, <b>Andrew Johnson</b>, was a Democrat from Tennessee and the only Southern senator who stayed loyal to the Union. He hated the Southern planter elite, but he also believed in white supremacy and states’ rights. Historians rank him among the worst presidents.', credit: 'Abraham Lincoln, 1863. Alexander Gardner. Public domain.' },
      'Johnson’s plan, carried out while Congress was out of session in 1865, was even more lenient than Lincoln’s:',
      { t: 'terms', items: [
        ['Mass pardons', 'Most former Confederates got amnesty by taking an oath. Wealthy planters had to apply personally, and Johnson pardoned thousands of them.'],
        ['Minimal demands', 'States only had to abolish slavery (ratify the 13th Amendment), declare secession illegal and cancel Confederate debts.'],
        ['Land returned', 'Johnson ordered abandoned land returned to former owners. That reversed General Sherman’s Field Order No. 15, which had given some freedpeople 40-acre plots.'],
        ['No Black voting', 'Johnson left voting rights entirely to the (white) states.']
      ] },
      { t: 'h', h: 'The South’s response: the Black Codes' },
      'Southern states quickly elected former Confederate leaders, including the Confederacy’s vice president, Alexander Stephens, sent to Washington as a senator. Then, in 1865–66, they passed <b>{{Black Codes}}</b>: laws designed to recreate slavery in all but name.',
      { t: 'table', head: ['Black Code provision (example: Mississippi, 1865)', 'Effect'], rows: [
        ['Freedpeople must sign yearly labor contracts; those who quit can be arrested', 'Forced them back to plantation work'],
        ['<b>Vagrancy laws</b>: unemployed Black people could be fined, and if they couldn’t pay, hired out to whoever paid the fine', 'Created forced labor through the courts, using the 13th Amendment loophole'],
        ['Black people barred from renting or leasing land outside towns', 'Prevented independent farming'],
        ['Black children could be “apprenticed” to white employers without parental consent', 'Took children away from families'],
        ['Black people barred from owning guns and from testifying against whites', 'No ability to defend themselves or seek justice']
      ] },
      { t: 'callout', k: 'key', h: 'Northerners were outraged. They had won the war, and within a year the South had elected Confederate leaders and passed laws that looked like slavery. The Black Codes and Johnson’s leniency handed power to the Radical Republicans in Congress.' }
    ] },
    { title: 'Congressional (Radical) Reconstruction (1867–1877)', blocks: [
      'When Congress met in December 1865, Republicans refused to seat the newly elected Southern representatives. <b>{{Radical Republicans}}</b>, led by Thaddeus Stevens in the House and Charles Sumner in the Senate, wanted to use federal power to protect freedpeople and transform the South.',
      { t: 'terms', items: [
        ['Conservative', 'Preserve traditional social relations and power structures'],
        ['Moderate', 'Favor compromise between the groups'],
        ['Radical', 'Fundamentally alter social structures'],
        ['Why “radical”?', 'The plan used the army and federal law to <b>remake Southern society</b>: equal citizenship and votes for Black men, just a few years after they were enslaved. That was a revolutionary change.']
      ] },
      { t: 'h', h: 'Step by step' },
      { t: 'timeline', items: [
        ['1866', '<b>Freedmen’s Bureau</b> extended and <b>Civil Rights Act of 1866</b> passed, both over Johnson’s vetoes. It was the first major law ever passed over a presidential veto.'],
        ['1866', 'Congress passes the <b>14th Amendment</b>. Republicans win a landslide in the midterm elections, which gives them veto-proof majorities.'],
        ['1867', '<b>{{Reconstruction Acts}}</b>: the South (except Tennessee, already readmitted) is divided into <b>5 military districts</b> under army control. To rejoin, states must write new constitutions guaranteeing <b>Black men’s right to vote</b> and must ratify the 14th Amendment.'],
        ['1868', 'The House <b>impeaches Johnson</b> for violating the Tenure of Office Act by firing his Secretary of War. The Senate acquits him by <b>one vote</b>. 14th Amendment ratified.'],
        ['1870', '<b>15th Amendment</b> ratified.']
      ] },
      { t: 'diagram', name: 'reconPeriods' }
    ] },
    { title: 'The Reconstruction Amendments', blocks: [
      'These three amendments are the most important changes to the Constitution since the Bill of Rights. Some historians call them a “second founding,” because for the first time the Constitution protected rights <b>against the states</b>.',
      { t: 'table', head: ['Amendment', 'What it does', 'Why it matters'], rows: [
        ['<b>13th</b> (1865)', 'Abolishes slavery, except as punishment for a crime', 'Ends slavery forever, but the loophole enables convict leasing'],
        ['<b>14th</b> (1868)', 'Everyone born or naturalized in the U.S. is a <b>citizen</b>. No state may deny any person <b>due process</b> or the <b>equal protection of the laws</b>. Section 3 bars officials who joined an insurrection after swearing to support the Constitution from holding office.', 'Overturns Dred Scott. It becomes the basis of <b>Brown v. Board</b> (Lesson 20) and most modern civil rights law.'],
        ['<b>15th</b> (1870)', 'The right to vote can’t be denied “on account of race, color, or previous condition of servitude”', 'Black men vote. But it doesn’t ban poll taxes or literacy tests, which the South later exploits (Lesson 16), and it says nothing about women.']
      ] },
      { t: 'callout', k: 'mistake', h: 'The 15th Amendment didn’t mention sex. Women’s rights leaders like Elizabeth Cady Stanton and Susan B. Anthony felt betrayed, which split the women’s movement for years. Women waited until the <b>19th Amendment</b> in 1920 (Lesson 18).' },
      { t: 'h', h: 'Compare the plans' },
      { t: 'table', head: ['', 'Presidential (Lincoln/Johnson)', 'Congressional (Radical)'], rows: [
        ['Attitude toward the South', 'Lenient, quick readmission', 'Strict; the South must prove loyalty'],
        ['Ex-Confederates', 'Pardoned; many back in power', 'Many barred from office (14th Amendment §3)'],
        ['Freedpeople', 'Little protection; Black Codes allowed', 'Citizenship, equal protection, the vote, the Freedmen’s Bureau'],
        ['Enforcement', 'States left alone', 'The U.S. Army occupies the South'],
        ['Who benefited most', 'White Southern planters', 'Freedpeople and the Republican Party'],
        ['Key laws', 'Pardons; 13th Amendment', 'Civil Rights Act of 1866, Reconstruction Acts, 14th & 15th Amendments']
      ] },
      { t: 'sort', prompt: 'Presidential or Congressional Reconstruction?', buckets: ['Presidential', 'Congressional'], items: [
        ['Ten Percent Plan', 0], ['Five military districts', 1], ['Black Codes go unchallenged', 0], ['Black men must be allowed to vote in new state constitutions', 1], ['Mass pardons for Confederates', 0], ['Civil Rights Act of 1866', 1], ['Land returned to former planters', 0]
      ] },
      { t: 'check', q: 'The 14th Amendment most directly overturned which earlier decision or law?', o: ['The Missouri Compromise', 'The Dred Scott decision', 'The Emancipation Proclamation', 'The Compromise of 1877'], a: 1, x: 'Dred Scott said Black Americans could never be citizens. The 14th Amendment’s first sentence makes everyone born in the U.S. a citizen.' }
    ] }
  ]
},

/* ───────────────────────── L15 ───────────────────────── */
{
  id: 'l15', n: 15, short: 'Reconstruction results', title: 'The Successes & Failures of Reconstruction', era: 'Reconstruction & the Gilded Age', eraYears: '1865–1900', years: '1865–1877', ap: ['5.11'], sg: '18', min: 26,
  sub: 'For a few years, the South had something the U.S. had never seen: an interracial democracy. Then violence, Northern fatigue and a backroom deal ended it.',
  objectives: ['Describe the achievements of interracial democracy during Reconstruction', 'Explain the role of political violence in Reconstruction’s failure', 'Explain sharecropping, peonage and convict leasing', 'Explain the Compromise of 1877 and what “the North won the war but the South won the peace” means'],
  sections: [
    { title: 'Interracial democracy', blocks: [
      'Under Congressional Reconstruction, Black men voted in huge numbers, and Southern politics changed almost overnight. Historians estimate about <b>2,000 Black men held public office</b>, from local sheriffs and school boards to state legislatures. Sixteen served in Congress.',
      { t: 'img', src: 'revels.jpg', portrait: true, cap: '<b>Hiram Revels</b> of Mississippi became the first Black U.S. senator in 1870. He took the Senate seat Jefferson Davis, president of the Confederacy, had once held. Blanche K. Bruce, also from Mississippi, later served a full Senate term.', credit: 'Mathew Brady studio. Public domain.' },
      'Southern Republican governments were built by a coalition of <b>freedpeople</b>, white Southern Republicans (whom opponents called “scalawags”), and Northerners who moved South (whom opponents called “carpetbaggers”). Those insults came from white Democrats trying to discredit them.',
      { t: 'h', h: 'What these governments achieved' },
      { t: 'terms', items: [
        ['{{Universal public education}}', 'The South’s first statewide public school systems, open to Black and white children (usually in separate schools)'],
        ['New state constitutions', 'Expanded voting rights, ended property requirements and abolished imprisonment for debt'],
        ['Public services', 'Hospitals, orphanages, roads and railroads'],
        ['Black institutions', 'Independent Black churches; colleges like Howard, Fisk and Morehouse, many founded with Freedmen’s Bureau help; families separated by slavery reunited']
      ] },
      { t: 'callout', k: 'key', h: 'Reconstruction’s greatest success was showing that interracial democracy could work. Its greatest failure was that it wasn’t allowed to last. In 1875, eight Black Americans served in Congress, all from the South. By 1901 there were none.' }
    ] },
    { title: 'The economic trap: land and labor', blocks: [
      'Freedpeople wanted one thing above all: <b>land</b>. Owning land meant independence. In January 1865, General Sherman set aside coastal land for freed families in 40-acre plots, the origin of the phrase “<b>forty acres and a mule</b>.” But President Johnson returned the land to its former owners. There was no large-scale land redistribution.',
      'So how would freedpeople make a living, and how would planters get workers? The answer was <b>{{sharecropping}}</b>.',
      { t: 'chain', title: 'How sharecropping trapped people', items: [
        ['The deal', 'A landowner provides land, a cabin and tools. The family farms it.'],
        ['The split', 'At harvest, the family owes the owner a share of the crop, often half.'],
        ['Credit', 'Families buy food and seed on credit from a store, often the landowner’s, at high interest. This is the crop-lien system.'],
        ['The debt cycle', 'After paying the share and the debt, they often owe more than they earned.'],
        ['Trapped', 'By law, they can’t leave until the debt is paid.']
      ] },
      'When debt kept people bound to work, that was <b>{{peonage}}</b>, or debt slavery. Congress banned peonage in 1867, but it continued in practice for decades.',
      'Worse was <b>{{convict leasing}}</b>. Remember the 13th Amendment’s loophole: slavery is banned “except as a punishment for crime.” Southern states arrested Black men under vague laws like vagrancy, then <b>leased</b> them to plantations, mines and railroads as unpaid labor. Conditions were often deadlier than slavery, because companies had no financial reason to keep workers alive. Historians call it “slavery by another name.”'
    ] },
    { title: 'Terror at the ballot box', blocks: [
      'White Southern Democrats who opposed Reconstruction used terror to take back power. The <b>{{Ku Klux Klan}}</b> was founded in 1865 in Pulaski, Tennessee by six Confederate veterans. It spread quickly, attacking Black voters, officeholders, teachers and white Republicans.',
      { t: 'timeline', items: [
        ['1868', '<b>Opelousas, Louisiana</b>: white mobs kill as many as 250 people, mostly Black, to stop them from voting.'],
        ['1870–71', 'Congress passes the <b>Enforcement Acts</b> (including the Ku Klux Klan Act). President Grant uses federal troops and prosecutors to break the first Klan, especially in South Carolina.'],
        ['1873', '<b>Colfax Massacre</b>, Louisiana: white paramilitaries kill around 150 Black men defending a courthouse. In <i>U.S. v. Cruikshank</i> (1876), the Supreme Court overturns the convictions, ruling the federal government can’t prosecute private individuals under the 14th Amendment.'],
        ['1875', 'The <b>Mississippi Plan</b>: armed “rifle clubs” openly intimidate Black voters, and Democrats retake the state.']
      ] },
      { t: 'callout', k: 'key', title: 'The role of violence', h: 'Violence was not a side effect of Reconstruction’s failure. It was the <b>main weapon</b>. When the federal government enforced the law (1870–72), the violence dropped. When the North stopped enforcing it, white Democrats used terror to “redeem” state after state. By 1877 every Southern state was controlled by Democrats committed to white supremacy.' }
    ] },
    { title: 'Why the North gave up', blocks: [
      { t: 'flip', items: [
        ['Fatigue', 'After 15 years of war and occupation, many Northerners wanted to move on and focus on business and the West.'],
        ['The Panic of 1873', 'A severe depression turned voters’ attention to jobs and money. Democrats won the House in 1874.'],
        ['Scandal', 'Corruption in the Grant administration (Lesson 17) made “Reconstruction governments” an easy target.'],
        ['Racism', 'Most white Northerners didn’t believe in racial equality either. Their commitment to Black rights was shallow.'],
        ['The courts', 'The Slaughterhouse Cases (1873) and Cruikshank (1876) narrowed the 14th Amendment and weakened federal enforcement.']
      ] },
      { t: 'h', h: 'The Compromise of 1877' },
      'The 1876 election was a disaster. Democrat Samuel Tilden won the popular vote and led in the Electoral College <b>184 to 165</b>. He needed 185. Twenty electoral votes were disputed: Florida, South Carolina and Louisiana sent two different sets of results, and one Oregon elector was challenged.',
      { t: 'img', src: 'ec1876.png', cap: 'The disputed 1876 election. A 15-member commission, with 8 Republicans and 7 Democrats, voted along party lines to give all 20 disputed votes to Republican Rutherford B. Hayes, who won 185–184.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      'Democrats threatened to block the result. Behind closed doors, a deal emerged: Democrats would accept Hayes as president, and in exchange Hayes would <b>withdraw the last federal troops</b> from Southern statehouses, appoint a Southerner to his cabinet and support Southern railroad funding. This is the <b>{{Compromise of 1877}}</b> (a Forever Date), sometimes called the “Corrupt Bargain of 1877.” <b>Reconstruction was over.</b>',
      { t: 'quote', h: '“A truce — not a compromise, but a chance for high-toned gentlemen to retire gracefully from their very civil declarations of war.”', cite: 'Harper’s Weekly, February 17, 1877 (from your class warm-up)' },
      { t: 'callout', k: 'key', title: '“The North won the war, but the South won the peace”', h: 'The Union won on the battlefield: the Confederacy collapsed and slavery ended. But white Southern Democrats achieved much of what they wanted anyway: control of their states, Black labor forced back onto plantations, and Black political power destroyed. The Reconstruction Amendments stayed in the Constitution, but they went largely unenforced in the South until the Civil Rights Movement (Lessons 20–21).' },
      { t: 'order', prompt: 'Put Reconstruction in order.', items: ['13th Amendment ratified', 'Black Codes passed', 'Civil Rights Act of 1866', 'Reconstruction Acts / military districts', 'Johnson impeached', '15th Amendment ratified', 'Hiram Revels enters the Senate', 'Panic of 1873', 'Compromise of 1877'], x: 'Revels was seated in February 1870, shortly before the 15th Amendment was ratified in March 1870, so either order is close. The rest follows cleanly.' },
      { t: 'check', q: 'Which of the following best explains why Reconstruction ended in 1877?', o: ['Black Southerners voted to end federal protection', 'The Court struck down the Reconstruction Amendments', 'A deal over the 1876 election withdrew federal troops', 'Southern states had reached full racial equality'], a: 2, x: 'The Compromise of 1877 gave Hayes the presidency in exchange for pulling federal troops out of Southern statehouses. The amendments were never struck down, only weakened and ignored.' }
    ] }
  ]
},

/* ───────────────────────── L16 ───────────────────────── */
{
  id: 'l16', n: 16, short: 'Jim Crow South', title: 'The Jim Crow South', era: 'Reconstruction & the Gilded Age', eraYears: '1865–1900', years: '1877–1910', ap: ['6.4'], sg: '19', min: 22,
  sub: 'After Reconstruction, Southern states built a system of laws, customs and violence that pushed Black Americans into second-class citizenship for nearly a century.',
  objectives: ['Explain what “Jim Crow” means', 'Explain how Southern states got around the 15th Amendment', 'Explain the legal precedent set by Plessy v. Ferguson', 'Describe the economic, legal and political pillars of Jim Crow, and the violence beneath them'],
  sections: [
    { title: 'What was Jim Crow?', blocks: [
      '“Jim Crow” was the name of a racist minstrel-show character from the 1830s, played by a white performer in blackface. By the late 1800s, it became the name for the whole system of <b>racial segregation and white supremacy</b> in the South, which lasted from about 1877 to the mid-1960s.',
      'After 1877, white “Redeemer” Democrats controlled every Southern state. In the 1890s they went further: they wrote <b>new state constitutions</b>, starting with Mississippi in 1890, designed to strip Black citizens of the vote and lock in segregation.',
      { t: 'diagram', name: 'jimcrow', cap: 'The pillars of Jim Crow society, as your class slides organize them.' },
      { t: 'callout', k: 'key', h: 'Jim Crow wasn’t just a set of laws. It was a way of life. It controlled where Black Southerners could sit, eat, work, learn, vote and even where they could be buried. It was held together by three forces at once: law, economic pressure and violence.' }
    ] },
    { title: 'The political pillar: getting around the 15th Amendment', blocks: [
      'The 15th Amendment said the vote couldn’t be denied “on account of race.” So Southern states wrote laws that <b>never mentioned race</b> but were designed and enforced to disenfranchise Black voters:',
      { t: 'flip', items: [
        ['{{Poll tax}}', 'A fee to vote, often cumulative (unpaid years added up). It hit poor Black and poor white citizens. It wasn’t banned in federal elections until the <b>24th Amendment (1964)</b>.'],
        ['{{Literacy test}}', 'Voters had to read and “interpret” a passage, often of the state constitution, to a white registrar’s satisfaction. Registrars passed white applicants and failed Black ones, including college graduates.'],
        ['Grandfather clause', 'You were exempt from the test or tax if you, your father or your grandfather could vote before 1867, before Black men could vote. That protected poor and illiterate whites. It was struck down in 1915.'],
        ['White primary', 'The Democratic Party, the only party that mattered in the South, declared itself a private club and barred Black voters from its primaries.']
      ] },
      { t: 'reveal', title: 'Try it: questions modeled on a real 1960s Louisiana literacy test', items: [
        ['“Draw a line around the number or letter of this sentence.”', 'Is it the number of the question? The letter? Which one? The question is deliberately ambiguous. The registrar decides what counts as “correct.” On the real test, applicants had 10 minutes for 30 questions, and <b>one wrong answer meant failure</b>.'],
        ['“Write every other word in this first line and print every third word in the same line, but capitalize the fifth word that you write.”', 'Do “every other” and “every third” start with the first word or the second? Does “the fifth word you write” count both lists? There’s no fair answer, which was the point.'],
        ['So was it a test of literacy?', 'No. It was a test of whether the registrar wanted you to vote. White applicants were often passed without taking it at all. In Louisiana, Black voter registration fell from about 130,000 in 1896 to about 1,300 by 1904.']
      ] },
      { t: 'check', q: 'Poll taxes and literacy tests were designed to get around the 15th Amendment by', o: ['openly barring Black citizens from voting by law', 'using rules that never named race to exclude voters', 'requiring federal approval of every new voter', 'limiting the vote to Confederate army veterans'], a: 1, x: 'The 15th Amendment banned denying the vote “on account of race,” so these laws were written in race-neutral language and then enforced in a discriminatory way.' }
    ] },
    { title: 'The legal pillar: Plessy v. Ferguson (1896)', blocks: [
      'In 1890, Louisiana passed the Separate Car Act, requiring separate railroad cars for white and Black passengers. A group of New Orleans Creoles of color organized a test case to challenge it. In 1892, <b>Homer Plessy</b>, who was seven-eighths white but legally Black under Louisiana’s <b>one-drop rule</b>, sat in a whites-only car and was arrested by prior arrangement.',
      'Plessy argued that segregation violated the 14th Amendment’s <b>equal protection</b> clause. In <b>1896</b> (a Forever Date), the Supreme Court ruled 7–1 against him.',
      { t: 'callout', k: 'key', title: 'Plessy v. Ferguson: “separate but equal”', h: 'The Court held that state-required segregation was constitutional <b>as long as the separate facilities were equal</b>. That is the doctrine of <b>{{separate but equal}}</b>. In reality, facilities for Black Americans were almost never equal. Plessy gave a legal green light to segregating schools, trains, parks, hospitals and nearly everything else, until <b>Brown v. Board of Education</b> overturned it for schools in 1954 (Lesson 20).' },
      { t: 'quote', h: '“Our Constitution is color-blind, and neither knows nor tolerates classes among citizens… The arbitrary separation of citizens on the basis of race… is a badge of servitude wholly inconsistent with the civil freedom and the equality before the law established by the Constitution.”', cite: 'Justice John Marshall Harlan, the lone dissenter in Plessy v. Ferguson (1896)' },
      'Plessy built on earlier rulings. In the <b>Civil Rights Cases</b> (1883), the Court struck down the Civil Rights Act of 1875, ruling that the 14th Amendment didn’t stop <b>private</b> businesses from discriminating. Step by step, the Court emptied the Reconstruction Amendments of their power.'
    ] },
    { title: 'The economic pillar and the violence beneath it', blocks: [
      'The economic pillars were the ones you saw in Lesson 15: <b>sharecropping</b>, <b>peonage</b> and <b>convict leasing</b>. They kept most Black Southerners poor, in debt and tied to the land. Alabama didn’t formally end convict leasing until 1928.',
      'Underneath everything was terror. Between 1877 and 1950, white mobs lynched more than 4,000 Black people in the South: they tortured and killed them publicly, without any trial. Lynchings were often public spectacles attended by hundreds or thousands, photographed and sold as postcards. Local officials rarely prosecuted anyone. The point was to terrorize whole communities into obedience.',
      'Black Americans resisted in many ways. Journalist <b>Ida B. Wells</b> investigated lynchings in the 1890s and showed that the common excuse for them was usually false. <b>Booker T. Washington</b> urged Black Southerners to build economic strength first and accept segregation for now (the Atlanta Compromise, 1895). <b>W.E.B. Du Bois</b> rejected that and demanded full civil and political rights immediately. He helped found the <b>NAACP</b> in 1909, the organization that would eventually win <i>Brown v. Board</i>. Millions also voted with their feet in the <b>Great Migration</b> to Northern cities, beginning around 1910.',
      { t: 'sort', prompt: 'Which pillar of Jim Crow does each belong to?', buckets: ['Economic', 'Legal', 'Political'], items: [
        ['Sharecropping', 0], ['Plessy v. Ferguson', 1], ['Poll tax', 2], ['Convict leasing', 0], ['One-drop rule', 1], ['Literacy test', 2], ['Peonage', 0], ['Segregated railroad cars', 1], ['Grandfather clause', 2]
      ] },
      { t: 'callout', k: 'connect', h: 'Every pillar becomes a target of the Civil Rights Movement: <b>Brown v. Board</b> (1954) knocks out Plessy, the <b>Civil Rights Act of 1964</b> bans segregation in public places, and the <b>24th Amendment</b> and <b>Voting Rights Act of 1965</b> take down the political pillar. Keep this diagram in your head through Lessons 20–21.' }
    ] }
  ]
},

/* ───────────────────────── L17 ───────────────────────── */
{
  id: 'l17', n: 17, short: 'Gilded Age politics', title: 'Politics in the Gilded Age', era: 'Reconstruction & the Gilded Age', eraYears: '1865–1900', years: '1870–1900', ap: ['6.12', '6.13'], sg: '21', min: 22,
  sub: 'Gold on the outside, rot underneath. Close elections, party loyalty and machines that traded favors for votes defined politics in the late 1800s.',
  objectives: ['Describe the hallmarks of the Gilded Age', 'Compare Democrats and Republicans in the Gilded Age', 'Explain what political machines were and why they worked', 'Describe major scandals and early efforts at reform'],
  sections: [
    { title: 'Why “gilded”?', blocks: [
      '<b>Gilded</b> means covered in a thin layer of gold. Mark Twain and Charles Dudley Warner used the term in their 1873 novel <i>The Gilded Age</i>, and it stuck. The era looked dazzling on the outside: railroads, steel, skyscrapers, enormous fortunes. Underneath were poverty, dangerous factories, corruption and inequality.',
      'Between about 1870 and 1900, the U.S. became the world’s leading industrial power. Men like Andrew Carnegie (steel), John D. Rockefeller (oil) and Cornelius Vanderbilt (railroads) built some of the largest fortunes in history, while millions of immigrants and workers lived in crowded city tenements.',
      { t: 'img', src: 'bandits-roost.jpg', cap: '“Bandit’s Roost” on Mulberry Street, New York City, photographed by Jacob Riis around 1888. Riis’s photos of tenement life exposed the hidden side of the Gilded Age (Lesson 18).', credit: 'Jacob Riis, c. 1888. Public domain.' },
      { t: 'callout', k: 'key', h: 'The government mostly followed <b>{{laissez-faire}}</b> (French for “let it be”): the idea that the government should stay out of the economy. That meant few regulations on business, low taxes and little help for workers or the poor. Remember this, because both the Progressives (Lesson 18) and the New Deal (Lesson 19) are reactions against it.' }
    ] },
    { title: 'Parties that looked alike', blocks: [
      'Gilded Age politics had a strange combination: the two parties were <b>very similar</b> on most issues, yet voters were <b>intensely loyal</b> and turnout was extremely high, often around 80%.',
      { t: 'table', head: ['', 'Republicans', 'Democrats'], rows: [
        ['Base', 'The North and Midwest, businessmen, Protestant farmers, Union veterans, Black voters (where they could vote)', 'The “Solid South” (white), Northern city immigrants (especially Irish Catholics), urban political machines'],
        ['Tariff', '<b>High</b> protective tariffs to protect industry', '<b>Lower</b> tariffs'],
        ['Appeal', '“Waving the bloody shirt”: reminding voters that Democrats had led the rebellion', 'States’ rights, limited federal government, opposition to Reconstruction'],
        ['Shared beliefs', 'Laissez-faire, support for business, little interest in regulating big companies, both used patronage', 'Same']
      ] },
      'Elections were extremely close. From 1876 to 1892, <b>no president won a majority of the popular vote</b>, and twice (1876 and 1888) the winner lost the popular vote. Congress was often divided, with one party in the House and the other in the Senate. The result was gridlock, and a few big national laws.',
      { t: 'callout', k: 'think', title: 'Close elections led to political favors', h: 'If an election can be swung by a few thousand votes, every vote is valuable. Both parties rewarded loyal workers with government jobs, a practice called <b>{{patronage}}</b>. They also bought votes, paraded voters to the polls and ran partisan newspapers. Party loyalty was something like loyalty to a sports team: it came from family, region, religion and Civil War memory more than from policy.' },
      { t: 'diagram', name: 'parties', cur: 3 }
    ] },
    { title: 'Political machines', blocks: [
      'In fast-growing cities, <b>{{political machines}}</b> controlled local government. A machine was a party organization run by a <b>{{party boss}}</b>, with neighborhood “ward bosses” and precinct captains below him.',
      { t: 'chain', title: 'How a machine worked', items: [
        ['Help newcomers', 'Immigrants arrive with nothing. The machine finds them jobs and housing, gives food and coal in winter, and helps with legal trouble.'],
        ['Collect loyalty', 'In return, people vote for the machine’s candidates, sometimes several times.'],
        ['Control the city', 'The machine wins city government and hands out city jobs and contracts.'],
        ['Profit', 'Contractors pay kickbacks and bosses get rich: graft.']
      ] },
      { t: 'img', src: 'boss-tweed.jpg', portrait: true, cap: '<b>William “Boss” Tweed</b> ran New York’s Democratic machine, <b>Tammany Hall</b>. His “Tweed Ring” stole tens of millions of dollars, perhaps far more, through padded contracts. A courthouse that should have cost a few hundred thousand cost over $12 million. Cartoonist <b>Thomas Nast</b> attacked him relentlessly. Tweed supposedly said his voters couldn’t read, “but they can’t help seeing them damned pictures.” He was convicted in 1873 and died in jail.', credit: 'Thomas Nast, Harper’s Weekly, 1871. Public domain.' },
      { t: 'callout', k: 'think', title: 'Why did people support machines?', h: 'Because in an age with no welfare, no unemployment insurance and no Social Security, the machine was often the <b>only</b> help a poor immigrant family could get. Machines were corrupt, but they also provided real services. A good AP answer recognizes both sides.' }
    ] },
    { title: 'Scandals and reform', blocks: [
      'Corruption reached the federal government too, especially during Ulysses S. Grant’s presidency (1869–1877). Grant himself was honest, but many people around him were not.',
      { t: 'terms', items: [
        ['{{Crédit Mobilier}} (revealed 1872)', 'Insiders at the Union Pacific Railroad created a construction company, Crédit Mobilier, and overcharged the railroad (and the federal government, which funded it) by millions. To avoid investigation, they gave or sold cheap shares to congressmen, including Vice President Schuyler Colfax.'],
        ['{{Whiskey Ring}} (1875)', 'Distillers and Treasury officials conspired to steal millions in federal whiskey taxes. Grant’s own private secretary, Orville Babcock, was implicated.'],
        ['The “Bosses of the Senate”', 'Senators were still chosen by state legislatures, which big corporations could pressure or bribe. Critics called the Senate a “millionaires’ club.” This led to the 17th Amendment (Lesson 18).']
      ] },
      { t: 'img', src: 'bosses-senate.jpg', cap: '“The Bosses of the Senate” by Joseph Keppler (1889). Huge money-bags representing the trusts (steel, copper, oil, sugar) loom over the senators. The sign reads “This is a Senate of the Monopolists, by the Monopolists and for the Monopolists!”, a twist on Lincoln’s Gettysburg Address. The “People’s Entrance” is closed.', credit: 'Joseph Keppler, Puck, 1889. Public domain.' },
      { t: 'h', h: 'Reform begins' },
      'In 1881, President James Garfield was shot by Charles Guiteau, a mentally unstable man angry that he hadn’t been given a government job. The assassination shocked the country into reforming patronage. The <b>Pendleton Civil Service Act (1883)</b> required that some federal jobs be filled by <b>competitive exams</b> based on merit, not party loyalty.',
      'Farmers, suffering from falling crop prices, debt and railroad rates, organized too. The <b>Populist (People’s) Party</b>’s Omaha Platform (1892) demanded a graduated income tax, direct election of senators, government ownership of railroads and “free silver” to inflate the money supply. Most Populist ideas looked radical then. Many later became law under the Progressives.',
      { t: 'h', h: '1896: the end of the stalemate' },
      'After the <b>Panic of 1893</b> caused a severe depression, the 1896 election became a showdown. Democrats and Populists both nominated <b>William Jennings Bryan</b>, who attacked the gold standard in his famous “Cross of Gold” speech. Republican <b>William McKinley</b>, backed by business money, won decisively, drawing urban workers who feared that free silver would raise prices. The close elections were over. Republicans dominated national politics until 1932: the <b>Fourth Party System</b>.',
      { t: 'img', src: 'ec1896.png', cap: 'The election of 1896. McKinley (red) swept the industrial Northeast and Midwest; Bryan (blue) won the South and the farm and mining West.', credit: 'Map: Wikimedia Commons contributors, CC BY-SA.' },
      { t: 'sort', prompt: 'Corruption or reform?', buckets: ['Corruption', 'Reform'], items: [
        ['Crédit Mobilier', 0], ['Pendleton Civil Service Act', 1], ['Tweed Ring', 0], ['Thomas Nast’s cartoons', 1], ['Whiskey Ring', 0], ['Populist Omaha Platform', 1], ['Spoils system', 0]
      ] }
    ] }
  ]
},

/* ───────────────────────── L18 ───────────────────────── */
{
  id: 'l18', n: 18, short: 'Progressive Era', title: 'The Progressive Era', era: 'Reform & a Bigger Government', eraYears: '1890–1945', years: '1890–1920', ap: ['7.4'], sg: '22', min: 26,
  sub: 'Journalists exposed the rot of the Gilded Age, and reformers set out to fix it. They used government, including three constitutional amendments, to give power back to the people.',
  objectives: ['Explain who the Progressives were and what they believed', 'Describe the role of muckrakers', 'Describe the 16th, 17th and 19th Amendments', 'Explain the goals of the Sherman and Clayton Antitrust Acts', 'Compare the three Progressive presidents'],
  sections: [
    { title: 'Who were the Progressives?', blocks: [
      '<b>{{Progressives}}</b> were reformers, mostly urban, educated and middle class, who worked from about 1890 to 1920 to solve the problems created by industrialization, rapid city growth and political corruption. Many were women, journalists, ministers, social workers and professionals.',
      'Their core belief was simple: <b>reform is progress</b>. Society can be improved, but it won’t happen on its own. Unlike laissez-faire thinkers, Progressives believed the <b>government should take an active role</b> in protecting citizens from big business, unsafe conditions and corrupt politicians.',
      { t: 'table', head: ['Goal', 'Examples'], rows: [
        ['Fix politics', 'End machine corruption; give voters more direct power'],
        ['Regulate business', 'Break up or control trusts and monopolies; protect consumers'],
        ['Protect workers', 'End child labor; limit work hours; improve factory safety'],
        ['Improve society', 'Better housing, public health, education; settlement houses like Jane Addams’s Hull House (1889)'],
        ['Moral reform', 'Prohibition of alcohol (18th Amendment, 1919)']
      ] }
    ] },
    { title: 'The muckrakers', blocks: [
      '<b>{{Muckrakers}}</b> were investigative journalists who exposed corruption and social problems to the public. Theodore Roosevelt gave them the name in 1906, comparing them to a character in a book who could only look down and rake the muck. He meant it as criticism, but the journalists wore it proudly.',
      { t: 'img', src: 'tarbell.jpg', portrait: true, cap: '<b>Ida Tarbell</b> spent years researching John D. Rockefeller’s company. Her <i>History of the Standard Oil Company</i> (1904) exposed its ruthless tactics for crushing competitors. It helped lead to the Supreme Court breaking up Standard Oil in 1911.', credit: 'Public domain.' },
      { t: 'flip', items: [
        ['Upton Sinclair', '<i>The Jungle</i> (1906) described the filthy, dangerous Chicago meatpacking plants. The public was horrified, mostly about the meat. Within months Congress passed the <b>Meat Inspection Act</b> and the <b>Pure Food and Drug Act</b> (1906).'],
        ['Lincoln Steffens', '<i>The Shame of the Cities</i> (1904) exposed political machines and corruption in city governments.'],
        ['Jacob Riis', '<i>How the Other Half Lives</i> (1890) used photographs to show tenement poverty in New York and pushed housing reform.'],
        ['Ida Tarbell', 'Exposed Standard Oil’s monopoly practices']
      ] },
      { t: 'callout', k: 'key', h: 'Muckrakers are a perfect example of <b>causation</b>: journalism produced public outrage, outrage produced political pressure, and pressure produced laws. When an AP question asks how Progressive reforms happened, start here.' }
    ] },
    { title: 'Political reform: give government back to the people', blocks: [
      'Progressives believed that if ordinary voters had more direct power, corrupt bosses and corporations would have less. Wisconsin governor <b>Robert La Follette</b> made his state a “laboratory of democracy.”',
      { t: 'terms', items: [
        ['Secret ballot', 'Government-printed ballots marked in private, so bosses couldn’t see how you voted'],
        ['Direct primary', 'Voters, not party bosses, choose party candidates'],
        ['Initiative', 'Citizens can propose a law by petition'],
        ['Referendum', 'Citizens vote directly on a proposed law'],
        ['Recall', 'Citizens can vote to remove an official before the term ends']
      ] },
      { t: 'h', h: 'The Progressive Amendments' },
      { t: 'table', head: ['Amendment', 'What it did', 'Why'], rows: [
        ['<b>16th</b> (1913)', 'Allowed a federal <b>income tax</b>', 'A fairer way to raise revenue than tariffs, which hit the poor harder. Wealthier people pay more.'],
        ['<b>17th</b> (1913)', '<b>Direct election of senators</b> by the people', 'Ended state legislatures choosing senators, which corporations and bosses could buy (“Bosses of the Senate”)'],
        ['<b>18th</b> (1919)', 'Prohibition of alcohol', 'Moral reform; seen as a cause of poverty and family violence. Repealed in 1933.'],
        ['<b>19th</b> (1920)', '<b>Women’s suffrage</b>: the vote can’t be denied “on account of sex”', 'Decades of activism, plus women’s contributions in World War I']
      ] },
      { t: 'h', h: 'Winning the vote for women' },
      'The women’s suffrage movement began at the Seneca Falls Convention in 1848. After the 15th Amendment left women out (Lesson 14), Susan B. Anthony and Elizabeth Cady Stanton kept fighting. In 1890, two rival groups merged into the <b>National American Woman Suffrage Association (NAWSA)</b>, later led by Carrie Chapman Catt. NAWSA used a careful state-by-state strategy, and Western states like Wyoming, Colorado, Utah and Idaho granted women the vote first.',
      'A more militant wing led by <b>Alice Paul</b>, the National Woman’s Party, picketed the White House during World War I. Many were arrested, and some were force-fed during hunger strikes. Combined pressure, plus women’s war work, led Congress to pass the 19th Amendment in 1919. It was ratified in <b>1920</b>.',
      { t: 'callout', k: 'connect', h: 'Notice the pattern from Lesson 9: voting rights often expand <b>state by state first</b>, then nationally. White manhood suffrage spread from Western states in the 1820s; women’s suffrage spread from Western states in the 1890s–1910s.' }
    ] },
    { title: 'Taming the trusts', blocks: [
      'A <b>trust</b> was a group of companies combined to control an entire industry, creating a monopoly that could fix prices and crush competitors. Standard Oil once controlled about 90% of U.S. oil refining.',
      { t: 'table', head: ['', '{{Sherman Antitrust Act}} (1890)', '{{Clayton Antitrust Act}} (1914)'], rows: [
        ['Goal', 'Ban any “combination… in restraint of trade” and monopolies', 'Strengthen Sherman by spelling out specific illegal practices'],
        ['Weakness or strength', 'Vague wording. Courts often refused to apply it to big companies, and it was used against <b>labor unions</b> instead.', 'Listed banned practices (like price discrimination and interlocking boards) and <b>exempted unions</b>. Samuel Gompers called it labor’s “Magna Carta.”'],
        ['Era', 'Gilded Age (passed but weakly enforced)', 'Progressive Era (Wilson)']
      ] },
      { t: 'callout', k: 'key', h: 'The goal of both antitrust acts: <b>restore competition</b> by preventing monopolies that hurt consumers and small businesses. Progressives didn’t want to end capitalism; they wanted to make it fair.' }
    ] },
    { title: 'Three Progressive presidents', blocks: [
      { t: 'img', src: 'troosevelt.jpg', portrait: true, cap: '<b>Theodore Roosevelt</b> (Republican, 1901–1909) became president when McKinley was assassinated in 1901, then won his own term in <b>1904</b>. Your study guide marks this as the start of the Progressive Era. His “<b>Square Deal</b>” promised fairness for business, labor and consumers. He was the “trust buster” who sued to break up the Northern Securities railroad monopoly. He also mediated the 1902 coal strike, signed the 1906 food and drug laws, and protected millions of acres of public land.', credit: 'Pach Brothers, 1904. Public domain.' },
      { t: 'table', head: ['', 'Theodore Roosevelt', 'William Howard Taft', 'Woodrow Wilson'], rows: [
        ['Party / years', 'Republican, 1901–1909', 'Republican, 1909–1913', 'Democrat, 1913–1921'],
        ['Program', 'Square Deal; later “New Nationalism”', 'Continued TR’s policies more quietly', '“New Freedom”'],
        ['Trusts', 'Regulate the bad trusts and break some up', 'Filed even <b>more</b> antitrust suits than TR (including against Standard Oil)', 'Clayton Act; Federal Trade Commission (1914)'],
        ['Big achievements', 'Meat Inspection and Pure Food and Drug Acts; conservation', '16th Amendment proposed; more trust-busting', 'Lower tariff + income tax; Federal Reserve (1913); Clayton Act'],
        ['Limits', 'Cautious on race', 'Split with TR’s progressives over conservation and tariffs', 'Re-segregated the federal workforce']
      ] },
      'The three men collided in the <b>1912 election</b>. Angry at Taft, Roosevelt formed the Progressive (“Bull Moose”) Party. Republicans split between Taft and Roosevelt, so Democrat Wilson won easily. Socialist Eugene Debs won about 6% of the vote, the most ever for a Socialist. Nearly 75% of voters chose a candidate calling himself a reformer.',
      { t: 'callout', k: 'mistake', title: 'The limits of progressivism', h: 'Progressive reform was mostly for <b>white</b> Americans. It happened during the worst years of Jim Crow, and Wilson segregated federal offices. Some progressives also supported immigration restriction and eugenics. A complex AP answer acknowledges both the achievements and the blind spots.' },
      { t: 'sort', prompt: 'What kind of reform was each?', buckets: ['Political (power to voters)', 'Economic (regulate business)', 'Social (improve lives)'], items: [
        ['17th Amendment', 0], ['Clayton Antitrust Act', 1], ['Hull House', 2], ['Initiative and referendum', 0], ['Meat Inspection Act', 1], ['19th Amendment', 0], ['Child labor laws', 2], ['Federal Trade Commission', 1]
      ] },
      { t: 'check', q: 'The 17th Amendment was a response to which Gilded Age problem?', o: ['High protective tariffs that hurt Western farmers', 'Corporate influence over legislatures that chose senators', 'The absence of a federal income tax on the wealthy', 'The exclusion of women from voting in federal elections'], a: 1, x: 'Before 1913, state legislatures elected senators, and corporations and machines could influence those legislatures. Direct election gave voters that power instead.' }
    ] }
  ]
}

);
