import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-of-blocked-drain",
    title: "7 Warning Signs You Have a Blocked Drain in Nottingham",
    metaTitle: "7 Warning Signs of a Blocked Drain in Nottingham | When to Call a Professional",
    metaDescription: "Learn the early warning signs of a blocked drain in Nottingham. From slow drainage to bad smells, know when to call a professional before it becomes an emergency.",
    excerpt: "Catching a blocked drain early can save you hundreds of pounds in emergency repairs. Here are the key warning signs every Nottingham homeowner should know.",
    content: `Nottingham homeowners face a particular set of drainage challenges thanks to the city's geography and infrastructure. Built on a mixture of Sherwood sandstone and Mercia mudstone, properties across areas like Sherwood, Mapperley, and Arnold sit on clay-heavy soil that shifts with seasonal moisture changes, placing constant stress on underground pipework. Recognising the early signs of a blockage can prevent a minor inconvenience from turning into a costly emergency.

## 1. Slow Draining Water

If your kitchen sink in Beeston is taking longer than usual to empty, or water pools around your feet in the shower at your West Bridgford home, pay attention. Slow drainage is the earliest indicator that debris, grease, or sediment is narrowing the inside of your pipes. In Nottingham's older terraced houses, particularly those in the Lace Market and Sneinton areas, narrower Victorian-era pipework makes this problem even more common.

## 2. Gurgling Sounds from Plugholes and Toilets

Gurgling noises after flushing or running a tap suggest trapped air within the drainage system. This happens when a partial blockage forces water to squeeze past an obstruction, creating air pockets. Properties near the River Trent in areas like Wilford and Trent Bridge can be particularly susceptible due to higher groundwater levels affecting drainage flow.

## 3. Foul Odours Rising from Drains

A persistent bad smell coming from your drains usually means organic matter has become lodged in the pipework and is decomposing. Nottingham's older sewer network, parts of which date back to the Victorian era, can be especially prone to this. Fat, food waste, and soap residue accumulate over time, and in the warm months the smell becomes far more noticeable.

## 4. Toilet Water Rising Higher Than Normal

When you flush and the water level climbs before slowly receding, there is likely a restriction somewhere downstream. If multiple toilets in your property are affected, the blockage is probably in the shared soil stack or the underground drain leading to the public sewer. We see this frequently in semi-detached properties around Gedling and Carlton.

## 5. Water Backing Up Through Other Fixtures

This is a serious warning sign. If running the kitchen tap causes water to appear in a downstairs shower tray, or flushing the toilet makes the bath gurgle, the obstruction is in a shared section of pipe. In Nottingham, where many residential streets share lateral drains, this can sometimes affect neighbouring properties as well.

## 6. Several Drains Blocking at the Same Time

When more than one fixture is affected simultaneously, the problem almost certainly sits in the main drainage run rather than individual branch pipes. Tree root ingress is a frequent cause in leafy suburbs like Mapperley Park and The Park Estate, where mature oaks, sycamores, and limes send roots seeking out moisture through pipe joints.

## 7. Damp Patches on Walls or Floors

Unexplained dampness near ground-floor walls or in cellars can indicate a leaking drain under pressure from a blockage. Given Nottingham's clay soil, which retains water rather than allowing it to drain away, even a small leak can cause significant dampness. Left unchecked, this leads to structural damage and mould growth, especially in the city's older brick-built properties.

## What Nottingham Homeowners Should Do Next

If you spot any of these symptoms, acting quickly is the most cost-effective response. A plunger may resolve a minor slow drain, but persistent or recurring issues warrant professional investigation. Our team at ${BRAND.brandName} uses [CCTV drain surveys](/services/cctv-drain-surveys/) to pinpoint the exact location and cause of a blockage, followed by [high-pressure jetting](/services/drain-jetting/) to restore full flow without damaging your pipes.

For complete blockages or sewage issues, our [emergency drain service](/services/emergency-drain-services/) operates around the clock across [Nottingham](/locations/nottingham/) and surrounding areas including Arnold, Beeston, West Bridgford, and Gedling. We carry all specialist equipment on board so the vast majority of problems are resolved in a single visit.

Call us on ${BRAND.phoneFormatted} for a no-obligation assessment, or [contact us online](/contact/) to arrange a convenient appointment.`,
    author: "Nottingham Plumber Services",
    publishDate: "2026-01-15",
    category: "Drain Maintenance",
    tags: ["blocked drains", "drain problems", "home maintenance", "plumbing tips", "Nottingham"],
    readingTime: 6,
    featured: true
  },
  {
    slug: "prevent-blocked-drains-kitchen",
    title: "Preventing Kitchen Drain Blockages in Nottingham Homes",
    metaTitle: "Prevent Kitchen Drain Blockages | Nottingham Plumber Tips",
    metaDescription: "Stop kitchen drain blockages before they start. Practical tips on preventing grease buildup, food waste disposal, and maintaining clear drains in your Nottingham home.",
    excerpt: "Kitchen drains are the most commonly blocked drains in Nottingham homes. Learn how to prevent costly blockages with these practical daily habits.",
    content: `Kitchen sink blockages account for the largest share of call-outs we handle across Nottingham and the East Midlands. From student houses in Lenton to family homes in West Bridgford, the cause is almost always the same: fats, oils, and grease combining with food particles to form a stubborn plug inside the pipework. The good news is that most kitchen blockages are entirely preventable with a few straightforward changes to daily routine.

## Why Nottingham Kitchens Are Particularly Vulnerable

Many properties across Nottingham were built during the Victorian and Edwardian periods, and their original clay drainage pipes are narrower than modern plastic alternatives. In areas like Sherwood, Carrington, and Basford, we frequently find 75mm clay pipes still in service beneath kitchen extensions and outbuildings. These narrow pipes clog far more readily than the 110mm plastic pipes fitted in newer builds around Gamston and Edwalton.

Nottingham's clay-rich soil also plays a role. Unlike sandy ground that drains freely, the Mercia mudstone beneath much of the city retains moisture. This means that any grease or debris that settles in underground pipes sits in a cooler, wetter environment where solidification happens quickly.

## Daily Habits That Make a Real Difference

### Keep Grease Out of the Drain Entirely

Fats, oils, and grease (known as FOG in the industry) are responsible for the majority of sewer blockages nationally, and Nottingham is no exception. Severn Trent Water has highlighted the Nottingham sewer network as a priority area for fatberg prevention. At a household level, the fix is simple:

- Allow cooking fat to cool in the pan, then scrape it into a container or the bin
- Wipe greasy pans with kitchen roll before washing
- Never rinse oil-based salad dressings or sauces down the plughole
- Collect used cooking oil in a jar and take it to your nearest Nottingham City Council recycling centre

### Fit a Mesh Strainer Over the Plughole

A stainless steel or silicone strainer costs under two pounds and catches rice, vegetable peelings, tea leaves, and other small food particles that would otherwise enter your pipes. Empty it into your food caddy after each washing-up session. Nottingham City Council provides food waste collection in most areas, making disposal straightforward.

### Scrape Plates Thoroughly Before They Reach the Sink

Even small quantities of food waste accumulate rapidly inside pipes. Scraping plates into the food waste bin before washing up removes the material that would otherwise stick to existing grease deposits and accelerate a blockage.

### Flush the Sink with Hot Water After Each Use

Running hot water for twenty to thirty seconds after washing up helps push residual grease through the trap and into the larger underground pipe, where it is less likely to cause problems. This simple step is particularly effective in properties with long horizontal pipe runs, common in Nottingham's Victorian terrace layouts where kitchens were often added to the rear of the building.

## Weekly and Monthly Maintenance

### Boiling Water Flush

Once a week, pour a full kettle of freshly boiled water slowly down the kitchen sink. The sustained heat softens and loosens grease deposits clinging to the inside of the trap and the first section of waste pipe. This is especially useful during winter, when lower ground temperatures around Nottingham cause fats to solidify faster.

### Baking Soda and Vinegar Treatment

For a deeper monthly clean that avoids harsh chemicals:

1. Tip half a cup of bicarbonate of soda into the plughole
2. Follow with half a cup of white vinegar
3. Leave the fizzing mixture to work for fifteen minutes
4. Rinse through with a full kettle of boiling water

This natural reaction breaks down organic deposits without corroding older clay or cast iron pipes, which are still common beneath properties in the Meadows, St Ann's, and Hyson Green.

## What to Avoid

- **Caustic chemical drain cleaners**: Repeated use weakens older pipe joints and can cause clay pipes to crack
- **Coffee grounds**: They absorb water and compact into a dense plug that is difficult to shift
- **Flour, pasta, and rice**: Starchy foods swell in water and form a paste that coats pipe walls
- **Wet wipes**: Even those labelled flushable should go in the bin, not down the drain

## When Prevention is Not Enough

If your kitchen drain continues to run slowly despite careful maintenance, the issue may lie further downstream. Tree root ingress, a collapsed pipe section, or a misaligned joint can all create a point where debris collects regardless of what you do at the surface. A professional [CCTV drain survey](/services/cctv-drain-surveys/) is the most effective way to identify the root cause without guesswork.

For stubborn grease blockages, professional [drain jetting](/services/drain-jetting/) scours the full circumference of the pipe at pressures up to 4,000 PSI, removing buildup that no amount of hot water or household products can shift. If you have a [blocked sink](/services/blocked-drains/blocked-sink/) that refuses to clear, our engineers typically resolve the problem within the hour.

Contact ${BRAND.brandName} on ${BRAND.phoneFormatted} for practical advice or to book a visit, or [get in touch online](/contact/).`,
    author: "Nottingham Plumber Services",
    publishDate: "2026-01-10",
    category: "Drain Maintenance",
    tags: ["kitchen drains", "prevention tips", "drain maintenance", "grease blockages", "Nottingham"],
    readingTime: 7
  },
  {
    slug: "cctv-drain-survey-home-buyers",
    title: "Why Nottingham Home Buyers Should Always Get a CCTV Drain Survey",
    metaTitle: "CCTV Drain Survey Before Buying a Nottingham Property | Essential Guide",
    metaDescription: "Buying a house in Nottingham? Discover why a pre-purchase CCTV drain survey could save you thousands and give you negotiating power on older properties.",
    excerpt: "A CCTV drain survey before buying a Nottingham property can reveal hidden problems that cost thousands to fix. Here's what every buyer should know.",
    content: `Nottingham's property market includes everything from Victorian terraces in Sherwood and Mapperley to 1930s semis in West Bridgford and modern estates in Gamston. Whatever the age or style of property you are considering, the drainage system beneath it deserves the same scrutiny as the roof, the boiler, and the electrics. A CCTV drain survey is the only reliable way to assess underground pipework before you commit to a purchase.

## What Happens During a CCTV Drain Survey

A drainage engineer inserts a high-definition, waterproof camera into the drainage system via a manhole or access point. The camera travels through the pipes on a flexible cable, transmitting live footage to a monitor. The engineer records everything, noting the position, depth, and condition of each pipe section. At the end you receive a detailed written report alongside the video footage itself.

## Why Nottingham Properties Need Extra Attention

### Victorian and Edwardian Infrastructure

Large parts of Nottingham's housing stock were built between 1850 and 1910. Properties in the Arboretum, Forest Fields, Sneinton, and Radford often retain their original salt-glazed clay drainage pipes. These pipes have served well for over a century, but they are brittle and their joints can separate under ground movement, allowing roots and soil to enter the system. A CCTV survey reveals the current state of these aging pipes so you can budget for repairs or renegotiate the asking price.

### Clay Soil and Ground Movement

Much of Nottingham sits on Mercia mudstone covered by a layer of clay-rich soil. Clay expands when wet and contracts when dry, creating seasonal ground movement that places stress on rigid pipe joints. Properties in areas like Gedling, Carlton, and Bestwood are particularly affected. A survey can detect displaced joints and early-stage cracking before they become full collapses.

### Mature Trees and Root Ingress

Nottingham is one of the greenest cities in England, with an extensive urban tree canopy. While the mature oaks and limes that line streets in Mapperley Park, The Park, and Wollaton are attractive, their root systems are drawn to the moisture inside drainage pipes. Roots enter through the smallest crack or joint gap and can grow to fill the entire pipe bore. This is one of the most common and most expensive problems we discover during pre-purchase surveys.

### River Trent Flood Plain Considerations

Properties in Wilford, the Meadows, Trent Bridge, and parts of West Bridgford sit on or near the River Trent flood plain. Higher water tables in these areas mean that even minor pipe damage can allow groundwater infiltration, leading to constantly running drains and increased load on the sewer system. A survey identifies these issues clearly.

## Common Problems We Find in Nottingham

During pre-purchase surveys across Nottingham, the most frequent discoveries include:

- **Root ingress through clay pipe joints** - especially in properties with established gardens
- **Cracked or fractured pipes** - often caused by ground movement on clay soil
- **Collapsed sections** - particularly in pitch fibre pipes installed during the 1950s-1970s
- **Shared drains with unclear responsibility** - common in Victorian terraces where multiple properties connect to a single run
- **Incorrectly connected surface water and foul drainage** - found in properties that have had extensions or conversions

## What Repairs Typically Cost

Understanding repair costs puts the price of a survey into perspective:

- Drain unblocking: £80-£200
- Localised pipe repair with no-dig relining: £1,500-£3,000
- Excavation and pipe replacement per metre: £150-£300
- Full front-to-back drainage replacement: £5,000-£15,000+
- Root removal and pipe repair: £500-£2,500

A pre-purchase CCTV survey in Nottingham typically costs between £175 and £350, depending on the size and complexity of the drainage system. That represents excellent value when measured against the potential cost of undiscovered defects.

## How Survey Findings Strengthen Your Position

If the survey reveals defects, you can take one of several practical steps:

1. **Negotiate a price reduction** based on the estimated repair cost, supported by the survey report
2. **Ask the seller to carry out repairs** as a condition of the sale, with evidence of completion
3. **Withdraw from the purchase** if the problems are too severe or the seller will not negotiate
4. **Proceed with full awareness**, having budgeted accurately for the work needed after completion

Conveyancing solicitors in Nottingham are increasingly requesting drainage reports as standard, particularly on older properties, and mortgage lenders may require one if other survey findings suggest possible drainage issues.

## Choosing a Survey Provider in Nottingham

Look for a drainage company that offers:

- Full HD camera footage supplied on USB or via digital download
- A structured written report with diagrams showing pipe layout and defect locations
- Clear, jargon-free explanations of each finding
- Honest recommendations without pressure to book unnecessary repairs
- Transparent, fixed pricing with no hidden extras

At ${BRAND.brandName}, we carry out [pre-purchase drain surveys](/services/cctv-drain-surveys/pre-purchase-survey/) across [Nottingham](/locations/nottingham/) and the wider Nottinghamshire area every week. Our engineers take the time to walk you through the footage and explain exactly what the findings mean for your purchase.

Should repairs be needed, we provide [drain repair services](/services/drain-repairs/) including [no-dig pipe relining](/services/drain-repairs/pipe-relining/) and [excavation and replacement](/services/drain-repairs/drain-excavation/), so the work can begin as soon as you are ready.

Book your [CCTV drain survey](/services/cctv-drain-surveys/) by calling ${BRAND.phoneFormatted} or [contact us online](/contact/) to arrange a convenient time.`,
    author: "Nottingham Plumber Services",
    publishDate: "2026-01-05",
    category: "CCTV Surveys",
    tags: ["CCTV survey", "home buying", "property survey", "drain inspection", "Nottingham"],
    readingTime: 8,
    featured: true
  },
  {
    slug: "emergency-drain-problems-what-to-do",
    title: "Drain Emergency in Nottingham: What to Do Before Help Arrives",
    metaTitle: "Drain Emergency in Nottingham | Immediate Steps to Protect Your Property",
    metaDescription: "Experiencing a drain emergency in Nottingham? Learn what to do immediately to minimise damage while waiting for a professional engineer to arrive.",
    excerpt: "When drains fail in your Nottingham property, every minute counts. Here is how to protect your home while waiting for emergency drainage help.",
    content: `A drain emergency can happen at any hour and in any weather. Across Nottingham, the most common triggers are sudden blockages during heavy rainfall, frozen pipes cracking during cold snaps, and sewage backing up through ground-floor fixtures in older properties. Knowing what to do in those critical first minutes can mean the difference between a contained incident and serious water damage to your home.

## When Does a Drainage Issue Become an Emergency?

Not every slow drain requires an emergency call-out, but the following situations demand immediate professional attention:

- Raw sewage backing up into your property through toilets, baths, or floor drains
- Water flooding into ground-floor rooms or cellars from overflowing drains
- Multiple fixtures blocking simultaneously, suggesting a main drain failure
- A strong and persistent sewage odour inside your home that will not clear with ventilation
- Visible sewage pooling in your garden, driveway, or the pavement outside

Nottingham properties close to the River Trent, including those in Wilford, the Meadows, and parts of West Bridgford, face additional risk during periods of heavy rainfall when the water table rises and sewers come under increased pressure.

## Step-by-Step Actions to Take Immediately

### 1. Stop All Water Use in the Property

The moment you realise the drainage system is failing, stop adding water to it:

- Do not flush any toilet
- Turn off taps and showers
- Pause the washing machine and dishwasher mid-cycle if necessary
- Switch off any appliance connected to the drainage system

Every litre of additional water worsens the backup and increases the area of contamination.

### 2. Contain the Affected Area

If sewage or floodwater is entering your property:

- Move furniture, rugs, and electrical equipment away from the affected rooms
- Place towels, old sheets, or sandbags across doorways to prevent spread into adjacent rooms
- If water is entering from outside, check whether you can redirect it away from doorways using boards or barriers
- Open windows in affected rooms to allow fresh air circulation, as sewage gases contain hydrogen sulphide, which is harmful in enclosed spaces

### 3. Shut Off the Water Supply If Necessary

If a burst pipe is contributing to the problem and water continues to flow uncontrollably, locate your internal stopcock. In most Nottingham properties, this is found under the kitchen sink, in the downstairs cloakroom, or near the front door. Turn it clockwise to shut off the mains supply.

### 4. Keep Everyone Away from Contaminated Water

Sewage carries bacteria, viruses, and parasites that pose genuine health risks. This is especially important in households with young children, elderly residents, or anyone with a weakened immune system:

- Keep children and pets out of any room with standing sewage water
- If you must enter, wear wellies and rubber gloves at a minimum
- Do not touch your face, and wash hands and forearms thoroughly with antibacterial soap afterwards
- Avoid eating, drinking, or smoking anywhere near the contaminated area

### 5. Record Evidence for Insurance

Once immediate safety steps are in hand, start documenting the damage:

- Photograph and video every affected room, including close-ups of damaged items
- Note the exact time the problem started and when you first noticed it
- Keep a list of damaged possessions with approximate values
- Save any receipts related to emergency purchases such as cleaning materials or temporary accommodation

Most buildings and contents insurance policies cover sudden drainage failures, but prompt documentation strengthens your claim significantly. Many insurers serving Nottingham properties are familiar with drainage claims given the age of the local housing stock.

## Common Mistakes to Avoid

### Do Not Pour Chemical Drain Cleaner into a Backed-Up System

Caustic chemicals are designed for slow-moving partial blockages, not complete failures. Pouring them into a system that is already backing up means the chemicals sit in the pipe alongside raw sewage, creating a toxic hazard for anyone who subsequently opens a manhole cover, including the engineer who comes to help you.

### Do Not Attempt to Lift Manhole Covers Without Proper Tools

Cast iron manhole covers are heavy and can cause serious injury if dropped. Victorian-era covers found across older parts of Nottingham, particularly in Sneinton, Hyson Green, and Basford, may also be rusted in place and require specialist lifting keys. Leave this to the professionals.

### Do Not Assume the Problem Will Resolve Itself

A complete blockage or sewage backup never clears on its own. Waiting only extends the period of contamination and increases both the cleanup cost and the likelihood of structural damage from prolonged moisture exposure.

## Preparing for the Engineer's Arrival

While you wait for ${BRAND.brandName} to arrive, a few practical steps help us resolve the issue faster:

- Clear a path to external manhole covers and inspection chambers, moving bins, garden furniture, or vehicles if necessary
- Note which fixtures are affected and in what order the problem appeared
- Check with immediate neighbours to see if they are experiencing similar issues; shared sewer blockages are common in Nottingham's terraced streets and require a different approach
- Keep your mobile phone charged so our engineer can contact you if needed on arrival

## What Happens When We Arrive

Our emergency engineers carry a full complement of equipment on every call-out:

- [CCTV drain cameras](/services/cctv-drain-surveys/) to locate and identify the blockage without excavation
- [High-pressure jetting rigs](/services/drain-jetting/) capable of clearing the most stubborn obstructions
- Hand tools, drain rods, and root-cutting attachments for mechanical clearance
- Protective equipment and biohazard cleaning supplies

We aim to reach any address within Nottingham and the surrounding Nottinghamshire area within sixty to ninety minutes of your call. Our [emergency drain services](/services/emergency-drain-services/) team operates twenty-four hours a day, every day of the year, including bank holidays.

Whether you are dealing with a [flooding emergency](/services/emergency-drain-services/flooding-emergency/) in Beeston or a [sewage backup](/services/emergency-drain-services/sewage-emergency/) in Arnold, call us immediately on ${BRAND.phoneFormatted} or [request urgent help online](/contact/).`,
    author: "Nottingham Plumber Services",
    publishDate: "2025-12-28",
    category: "Emergency Services",
    tags: ["emergency drains", "flooding", "sewage backup", "drain emergency", "Nottingham"],
    readingTime: 8
  },
  {
    slug: "drain-jetting-vs-drain-rods",
    title: "Drain Jetting vs Drain Rods: A Nottingham Plumber's Honest Comparison",
    metaTitle: "Drain Jetting vs Drain Rods | Nottingham Expert Comparison",
    metaDescription: "Should you use drain rods or high-pressure jetting to clear a blockage in Nottingham? Our local drainage engineers explain when each method works best.",
    excerpt: "Not all drain clearing methods deliver the same result. Our Nottingham engineers explain when jetting outperforms rods and why the right choice depends on your pipes.",
    content: `Blocked drains across Nottingham are caused by everything from cooking grease in Beeston kitchens to tree roots in Mapperley Park gardens. The method used to clear them matters just as much as the speed of response. Two approaches dominate the industry: traditional drain rods, which have been in use for well over a century, and high-pressure water jetting, which has become the professional standard over the past two decades. Each has a role, but understanding the strengths and limitations of both helps you make an informed decision.

## How Drain Rods Work

Drain rods are metre-long fibreglass or polypropylene rods that screw together end to end. A plunger head, corkscrew, or scraper attachment is fitted to the leading rod, and the assembly is fed into the drain via a manhole or inspection chamber. The operator pushes and rotates the rods by hand to break apart or dislodge the blockage.

### Where Rods Are Still Useful

- **Accessible, shallow blockages** within the first few metres of a manhole
- **Temporary relief** when professional jetting equipment is not immediately available
- **Straightforward obstructions** caused by loose debris, toilet paper buildup, or a single foreign object
- **Situations with no power or water supply**, such as vacant properties being prepared for sale

### Where Rods Fall Short

- **Reach is limited** to roughly twelve to fifteen metres before the rods become difficult to control
- **Rods push material deeper** rather than removing it from the pipe, which can worsen the blockage
- **No cleaning effect** on the pipe walls; grease, scale, and biofilm remain in place after rodding
- **Risk of pipe damage**: in Nottingham's older clay drainage systems, aggressive rodding can displace joints or crack brittle pipe sections
- **Cannot handle root ingress**: tree roots that have entered pipes in suburbs like Wollaton or Mapperley Park need to be cut, not pushed

## How High-Pressure Water Jetting Works

Professional jetting equipment pumps water at pressures of up to 4,000 PSI through a flexible hose fitted with a precision nozzle. The nozzle has forward-facing jets that cut through blockages and rear-facing jets that propel the hose forward and flush debris back towards the access point. Different nozzle types are selected depending on the pipe diameter, the nature of the blockage, and the condition of the pipework.

### Why Jetting is the Preferred Professional Method

- **Removes the blockage entirely** rather than simply punching a hole through it
- **Scours pipe walls clean**, eliminating the grease, limescale, and biofilm that cause recurring blockages
- **Reaches well over one hundred metres** into the drainage system, covering even the longest residential pipe runs
- **Handles tree roots**: specialist root-cutting nozzles shred root masses that have entered pipes in Nottingham's leafier neighbourhoods
- **Fast**: the majority of domestic blockages are cleared within fifteen to thirty minutes
- **Preventative value**: regular jetting keeps pipes at full bore, reducing the likelihood of future call-outs

### Situations Where Jetting Requires Caution

- **Severely damaged pipes**: jetting a pipe that has already collapsed can worsen the damage, so a CCTV inspection is advisable first
- **Very old pitch fibre pipes**: some properties built or extended in the 1960s and 1970s around Nottingham used pitch fibre pipes that can delaminate under high pressure if they are already in poor condition
- **Restricted water supply**: jetting requires a continuous flow of water, typically from an on-board tank or a nearby mains connection

## Choosing the Right Method for Nottingham Properties

The best approach depends on the property, the drainage layout, and the nature of the blockage. Here is a practical guide based on what we see most often across the city and county.

### Victorian and Edwardian Terraces (Sherwood, Sneinton, Radford, Forest Fields)

These properties typically have narrow salt-glazed clay pipes with cemented joints. Rodding risks dislodging fragile joints, so we prefer jetting at a controlled lower pressure, usually around 2,500 PSI, combined with a CCTV check beforehand to assess pipe condition.

### 1930s Semi-Detached (West Bridgford, Carlton, Gedling, Arnold)

Drainage systems of this era are generally more robust, with wider pipe diameters and deeper runs. Standard jetting at full pressure is usually appropriate and delivers excellent results. Root ingress from mature garden trees is common and responds well to a root-cutting nozzle.

### Post-War Estates and Newer Builds (Gamston, Edwalton, Bingham)

Modern plastic pipework handles jetting at full pressure without any risk. These pipes rarely suffer structural blockages, so the issue is almost always accumulated debris or grease that jetting clears in minutes.

### Properties Near the River Trent (Wilford, Trent Bridge, Meadows)

Higher water tables mean drains are often running at or near capacity. Jetting is essential here to remove any restriction and restore full flow. Rodding alone cannot provide the thorough clearance these systems need.

## A Realistic Cost Comparison

A set of drain rods from a DIY store costs between £20 and £50. However, the total cost of a DIY attempt often exceeds the price of professional jetting when you factor in:

- The time spent on what is physically demanding and unpleasant work
- The likelihood that rodding provides only temporary relief, requiring a second attempt or a professional call-out within weeks
- The risk of damaging clay pipes, which can turn a £150 jetting job into a £3,000 excavation
- The loss of a warranty or guarantee that comes with professional work

Professional jetting for a standard residential blockage in Nottingham typically costs between £100 and £250, depending on access and complexity. For that price you receive a full clearance, a visual check of the pipe condition, and practical advice on preventing recurrence.

## Our Approach at ${BRAND.brandName}

When you contact us about a blocked drain anywhere in Nottingham or the surrounding area, our process is straightforward:

1. We discuss the symptoms over the phone to establish urgency and likely cause
2. An engineer arrives with jetting equipment, CCTV camera, and hand tools
3. We inspect accessible manholes and access points to assess the system layout
4. If appropriate, we run a quick CCTV check to confirm pipe condition before jetting
5. The blockage is cleared using high-pressure water with the correct nozzle for the situation
6. We verify the pipe is flowing freely and provide honest advice on any further work needed

For persistent issues, a full [CCTV drain survey](/services/cctv-drain-surveys/) can identify whether [structural repairs](/services/drain-repairs/) are needed to prevent the problem recurring.

Call ${BRAND.brandName} on ${BRAND.phoneFormatted} for reliable [drain clearing across Nottingham](/locations/nottingham/drain-jetting/) and Nottinghamshire, or [request a quote online](/contact/). We also serve [Mansfield](/locations/mansfield/), [Derby](/locations/derby/), and [Newark-on-Trent](/locations/newark-on-trent/).`,
    author: "Nottingham Plumber Services",
    publishDate: "2025-12-20",
    category: "Drain Services",
    tags: ["drain jetting", "drain rods", "blocked drains", "drain clearing", "Nottingham"],
    readingTime: 9
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "blocked-drains": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "drain-unblocking": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "cctv-drain-surveys": ["cctv-drain-survey-home-buyers", "signs-of-blocked-drain"],
  "drain-jetting": ["drain-jetting-vs-drain-rods", "prevent-blocked-drains-kitchen"],
  "emergency-drain-services": ["emergency-drain-problems-what-to-do", "signs-of-blocked-drain"],
  "drain-repairs": ["cctv-drain-survey-home-buyers", "drain-jetting-vs-drain-rods"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
