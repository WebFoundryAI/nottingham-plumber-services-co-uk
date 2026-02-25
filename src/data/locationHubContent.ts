/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  nottingham: {
    landmarks: [
      "Nottingham Castle",
      "Old Market Square",
      "Nottingham Trent University",
      "University of Nottingham",
      "Broadmarsh Centre",
      "Victoria Centre",
      "Nottingham Playhouse",
      "Royal Concert Hall",
      "Lace Market",
      "Hockley Village",
      "Sneinton Market",
      "Wollaton Hall and Deer Park",
      "Nottingham Arboretum",
      "Nottingham Cathedral",
      "The Trip to Jerusalem",
      "Nottingham Ice Centre",
      "Nottingham Contemporary",
    ],
    drainageProfile: `Nottingham's drainage landscape is shaped by centuries of urban development layered over a sandstone bedrock riddled with historic cave systems. The city centre sits above the famous Nottingham Caves network, which has a direct bearing on ground stability and drainage behaviour. Many older properties in areas such as the Lace Market, Hockley, and St Ann's are connected to Victorian combined sewers that were engineered for a far smaller population. These ageing clay pipes, some well over 150 years old, are prone to root intrusion from the mature street trees that line residential roads across Mapperley and West Bridgford.

The River Trent and its tributaries create distinct flooding risk zones across the city, particularly in low-lying areas such as Meadows and Sneinton. Properties here can experience back-flow from overloaded combined sewers during heavy rainfall events, which are becoming more frequent. The topography of Nottingham also presents surface-water challenges: the city drops significantly from the sandstone ridge on which the Castle stands down to the Trent floodplain, meaning surface water accelerates rapidly through residential drainage systems in hillside neighbourhoods like Forest Fields and Hyson Green.

Commercial activity in the city centre — particularly the dense concentration of food and drink venues in the Lace Market and Hockley — generates substantial fats, oils, and grease that accumulate in shared drainage infrastructure. Multi-occupancy conversions of Victorian warehouse buildings, a hallmark of the Lace Market area, require specialist attention to drainage routes that were never designed for residential use. Basement flats in converted terraces across the Arboretum and Mapperley Park are especially vulnerable to surcharging during storm events.

Nottingham Plumber Services engineers have deep knowledge of the city's unique drainage character. We navigate the complexities of sandstone ground conditions, address root intrusion in the city's mature residential streets, clear grease and fat accumulation in commercial drains, and work safely around the shallow cave systems that underpin much of central Nottingham. Whether your property is a Victorian terrace in Sherwood, a modern apartment near the Trent, or a commercial premises in the city centre, our team brings Nottingham-specific expertise to every job.`,
    localFAQs: [
      {
        question: "Can the Nottingham cave system affect my drainage?",
        answer: "Yes, in parts of central Nottingham the shallow sandstone caves can influence drainage behaviour. Ground movement near cave systems can cause pipe joints to shift, leading to leaks and root intrusion. Properties in the Lace Market, Broadmarsh area, and older parts of the city centre may be affected. Nottingham Plumber Services can carry out a CCTV drain survey to identify any structural movement or joint displacement caused by the underlying geology."
      },
      {
        question: "Why does my drain back up when it rains heavily in Nottingham?",
        answer: "Many Nottingham properties, especially in Meadows, Sneinton, and other low-lying areas near the Trent, are served by Victorian combined sewers that carry both foul and surface water. During heavy rainfall these sewers can surcharge, forcing water back up through gullies and toilet pans. Nottingham Plumber Services can install non-return valves and assess your drainage layout to reduce the risk of flooding from surcharging sewers."
      },
      {
        question: "How often should I have my drains cleaned if I run a restaurant in Nottingham city centre?",
        answer: "Nottingham's city centre has a high concentration of food and drink businesses, particularly in Hockley and the Lace Market. We recommend commercial grease trap emptying and drain jetting at least every three months, and monthly inspections for high-volume kitchens. Blocking fats in shared drainage can lead to enforcement action from Severn Trent Water, so a preventative maintenance schedule with Nottingham Plumber Services is strongly advised."
      },
      {
        question: "Are older Nottingham terraces more likely to have drain problems?",
        answer: "Victorian and Edwardian terraces across Sherwood, Forest Fields, Hyson Green, and Mapperley typically use original clay pipe drainage that is now 100-150 years old. These pipes are prone to joint displacement, tree root intrusion, and gradual collapse. Nottingham Plumber Services regularly carries out CCTV surveys in these areas and can provide no-dig lining solutions to extend the life of older pipework without the cost and disruption of full excavation."
      }
    ],
    caseStudy: `In late autumn, Nottingham Plumber Services received an urgent call from a Victorian terrace owner in the Mapperley Park area of Nottingham whose ground-floor toilet was backing up and the kitchen sink was draining very slowly. The property, built around 1895, had its original clay drainage intact. A CCTV survey revealed two separate issues: a substantial mass of tree roots had forced their way through an offset joint approximately 8 metres from the house, and a partial collapse in the 100 mm vitrified clay lateral had created a ledge where solids were accumulating. The combined effect was a drain running at less than 30% capacity.

Our team used a high-pressure jetter to clear the root mass and debris before passing a patch-lining unit into the damaged section of pipe. The no-dig patch repair sealed the collapsed section without requiring excavation through the property's ornate Victorian pathway tiles. The root intrusion zone was treated with a root-cutting head and sealed with a short-form lining sleeve. The entire repair was completed within a single working day, restoring full flow and protecting the pipe from future root ingress without disturbing the garden landscaping. The homeowner was provided with a post-repair CCTV report and a recommended maintenance schedule to prevent recurrence.`,
  },

  mansfield: {
    landmarks: [
      "Mansfield Market Place",
      "Mansfield Museum and Art Gallery",
      "Mansfield Town FC - One Call Stadium",
      "Pleasley Pit Country Park",
      "Sherwood Forest (nearby)",
      "Mansfield Bus Station",
      "St Peter and St Paul Parish Church",
      "Four Seasons Shopping Centre",
      "Titchfield Park",
      "Berry Hill Park",
      "Carr Bank Park",
      "Mansfield Palace Theatre",
      "Maun Valley Trail",
    ],
    drainageProfile: `Mansfield sits in the heart of the former Nottinghamshire coalfield, and its drainage infrastructure bears the legacy of rapid industrial expansion during the nineteenth and early twentieth centuries. Many residential streets in the town centre and surrounding areas such as Woodhouse and Berry Hill were built to house mining families, with drainage systems laid quickly to serve dense terraced housing. These original clay and brick egg-shaped sewers are now well past their design life and are a frequent source of blockages, collapses, and root intrusion.

The town's topography is defined by the River Maun, which runs through the town centre and has shaped the drainage catchment. Low-lying streets near the Maun and its tributaries are susceptible to surface-water flooding during intense rainfall, with older combined sewers frequently surcharging. The sandstone and marl geology common around Mansfield can also contribute to differential ground settlement, placing stress on older pipe joints and accelerating structural deterioration.

Mining subsidence is a distinctive feature of Mansfield's ground conditions. Properties in areas historically above mine workings can experience ongoing ground movement that displaces drainage pipes over time, creating bellying, offsets, and joint gaps that lead to persistent blockages and root intrusion. Nottingham Plumber Services engineers are experienced in identifying subsidence-related drainage defects and providing appropriate repair solutions that accommodate continued ground movement.

The town's growing retail and food service sector around the Four Seasons Centre and Market Place generates significant fats, oils, and grease in the commercial drainage network. Nottingham Plumber Services provides routine commercial drain maintenance to prevent the accumulation that leads to costly emergency callouts.`,
    localFAQs: [
      {
        question: "Can mining subsidence damage my drains in Mansfield?",
        answer: "Yes. Parts of Mansfield overlie historic mine workings, and ongoing ground movement can cause drainage pipes to settle unevenly, creating bends, offsets, and joint gaps. These defects accumulate debris and allow root intrusion. Nottingham Plumber Services carries out CCTV surveys that can identify subsidence-related pipe movement, and we offer flexible lining solutions designed to accommodate areas where minor ground movement is still occurring."
      },
      {
        question: "Why does my garden flood during heavy rain in Mansfield?",
        answer: "Many Mansfield properties on low-lying ground near the River Maun experience surface-water flooding when Victorian combined sewers surcharge during storms. Blocked gullies, undersized soakaways, and poorly maintained surface-water connections compound the problem. Nottingham Plumber Services can jet-clean your gullies, inspect your soakaway, and advise on surface-water management improvements to reduce flood risk."
      },
      {
        question: "How do I know if my old Mansfield terrace has clay pipes?",
        answer: "Victorian and Edwardian terraces in Mansfield were almost universally drained using vitrified clay pipes. If your home was built before 1960 and has not had drainage upgrades, clay pipes are very likely. A CCTV drain survey from Nottingham Plumber Services will confirm the pipe material, identify any defects, and give you a full picture of your drainage condition before problems escalate."
      }
    ],
    caseStudy: `Nottingham Plumber Services attended a mid-terrace house in Woodhouse, Mansfield, following a report of persistent slow drainage from both the bathroom and the kitchen. The property, dating from around 1910, had been in the same family for decades and the drains had never been formally surveyed. On arrival, our engineers noted a slight subsidence crack in the rear yard pathway - a common sign of ground movement in this part of Mansfield. A CCTV survey confirmed a 60 mm vertical displacement (offset joint) in the 100 mm clay drain at a depth of 900 mm, caused by differential settlement. Roots had colonised the gap and partially filled the pipe bore.

Our team excavated a small access pit over the defective joint, cut out the affected section, and installed a new PVC coupling with a flexible seal designed to accommodate minor ongoing movement. The root mass was cleared with a high-pressure jetter before the connection was reinstated. The dig was backfilled and the yard pathway relaid within the same visit. A post-repair survey confirmed full flow restoration, and the homeowner received a written drainage condition report with photographs. Total job duration was six hours from arrival to completion.`,
  },

  derby: {
    landmarks: [
      "Derby Cathedral",
      "Derby Museum and Art Gallery",
      "Quad Arts Centre",
      "Derby Market Hall",
      "Pride Park Stadium",
      "Derwent Valley Mills (UNESCO World Heritage Site)",
      "Markeaton Park",
      "Darley Park",
      "Silk Mill - Museum of Making",
      "Derby Assembly Rooms",
      "Cathedral Quarter",
      "Eagle Market",
      "Intu Derby Shopping Centre",
      "Derby Velodrome",
    ],
    drainageProfile: `Derby's drainage infrastructure is intimately linked to its industrial heritage as the birthplace of the factory system. The city's original drainage network was laid during the rapid expansion of the nineteenth century to serve the Midland Railway works, silk mills, and the dense terraced housing that surrounded them. Many of these original clay and brick drains remain in service today, particularly in older residential quarters such as Normanton, Arboretum, and Litchurch. At Nottingham Plumber Services, we regularly encounter clay pipes in these areas that are approaching or exceeding 150 years of service life.

The River Derwent is central to Derby's drainage character. The city's position on the Derwent floodplain means that surface-water drainage management is critical, especially for properties in Darley Abbey, Chester Green, and the Derwent Valley corridor. During significant rainfall events, the interaction between rising river levels and surcharging combined sewers can cause flooding in low-lying streets. The UNESCO World Heritage Derwent Valley Mills area introduces additional complexity, as heritage constraints can limit drainage intervention options in sensitive locations.

Derby's geology transitions from Triassic mudstones and sandstones in the west to alluvial deposits in the east near the Derwent. This variation in ground conditions means drainage pipes can experience differential settlement across relatively short distances, leading to bellying and joint displacement. The former railway and industrial heartland around Pride Park has seen substantial redevelopment, often requiring new drainage to connect with Victorian infrastructure in ways that need careful engineering.

Commercial and retail drains in the Cathedral Quarter and Eagle Market area carry significant fats, oils, and grease loadings. Nottingham Plumber Services provides planned preventative maintenance contracts for Derby city centre businesses to ensure compliance with Severn Trent Water's trade effluent requirements and to prevent costly emergency blockages.`,
    localFAQs: [
      {
        question: "Is Derby at risk of drain flooding near the River Derwent?",
        answer: "Properties in low-lying areas of Derby - particularly Darley Abbey, Chester Green, and parts of the city centre - can be affected by surcharging sewers during periods of high river levels combined with heavy rainfall. Nottingham Plumber Services can install anti-flood devices such as non-return valves to protect your property, and carry out drainage surveys to identify vulnerabilities in your system before the next storm event."
      },
      {
        question: "My Derby Victorian terrace has slow drains - what's the likely cause?",
        answer: "Victorian terraces in Normanton, Arboretum, and Litchurch typically have original clay drainage that may now be affected by root intrusion, joint displacement, or partial collapse. Slow drainage is often the first sign of a structural defect building up over time. A CCTV survey from Nottingham Plumber Services will quickly identify the cause and allow us to recommend the most cost-effective fix, from jetting to no-dig lining."
      },
      {
        question: "Can Nottingham Plumber Services work on heritage-listed properties in Derby?",
        answer: "Yes. We have experience working on listed buildings and within conservation areas, including the Derwent Valley Mills World Heritage Site. We use no-dig and minimal-dig techniques wherever possible to protect historic fabric, and our engineers are familiar with the additional consents that may be required for drainage work in sensitive historic locations around Derby."
      }
    ],
    caseStudy: `Nottingham Plumber Services was contacted by the facilities manager of a converted mill apartment complex in the Derwent Valley area of Derby. Residents in ground-floor units had reported foul odours and intermittent gurgling from bath wastes, while drainage from the communal laundry room was visibly slow. Given the age of the building and its location within the World Heritage Site, any intervention needed to minimise disruption to the historic structure. Our engineers conducted a full CCTV survey of the communal drainage runs and identified a near-complete root blockage in a 150 mm clay lateral running beneath the original mill courtyard, along with two sections of bellied pipe where decades of ground settlement had created low spots accumulating solid deposits.

Rather than excavating through the historic courtyard surface, our team deployed a high-pressure jetter with a root-cutting head to clear the blockage before inserting a CIPP (cured-in-place pipe) lining through the affected sections. The lining process was completed overnight to minimise disruption to residents, and the courtyard surface was left entirely undisturbed. A post-lining CCTV survey confirmed smooth bore restoration throughout. The facilities manager was provided with a full drainage condition report and a recommended three-yearly maintenance schedule for the communal system.`,
  },

  "newark-on-trent": {
    landmarks: [
      "Newark Castle",
      "Newark Market Place",
      "St Mary Magdalene Church",
      "Newark Town Hall",
      "Newark Air Museum",
      "National Civil War Centre",
      "Newark Showground",
      "Beaumond Cross",
      "The Ossington",
      "Newark Northgate Station",
      "River Trent Riverside",
      "Sconce and Devon Park",
      "Newark Sports and Fitness Centre",
      "Balderton Lake",
    ],
    drainageProfile: `Newark-on-Trent occupies a historically significant crossing point on the River Trent, and this riverside location fundamentally shapes its drainage challenges. The town's medieval street pattern survives to a remarkable degree in the area around the Market Place and Castle, meaning that drainage infrastructure has had to be threaded through a complex urban fabric over centuries. Victorian-era improvements in the nineteenth century laid much of the current sewerage network, but beneath the historic core many older culverts and drainage channels persist, requiring specialist knowledge to service and repair.

The town's position on the Trent floodplain creates genuine flood risk for low-lying properties, particularly those on the riverside and in areas such as Winthorpe and Coddington. The interaction between the Trent's level and the capacity of the town's drainage network during prolonged wet weather is a recurring concern. Nottingham Plumber Services engineers understand the specific flood risk areas of Newark and can provide appropriate protection measures, including non-return valves and sump pump installations, for vulnerable properties.

The agricultural hinterland around Newark influences drainage in a different way: rural drainage channels and field drains connect to the town's surface-water network, and blockages in these connections can cause waterlogging in gardens and around the edges of the town. Properties on the expanding residential developments to the south and east of Newark sometimes experience surface-water drainage issues as new impermeable surfaces increase runoff rates beyond what the existing infrastructure was designed to handle.

Newark's thriving food and antiques trade generates a variety of drainage demands. The concentration of restaurants around the Market Place and the busy showground events calendar create episodic heavy loading on commercial drains. Nottingham Plumber Services provides reactive and planned maintenance services for Newark's commercial sector, ensuring compliance and preventing the disruption of blocked drains during busy trading periods.`,
    localFAQs: [
      {
        question: "Is my Newark riverside property at risk of drain flooding?",
        answer: "Properties close to the River Trent in Newark can be at risk when river levels rise and reduce the drainage network's ability to discharge. Nottingham Plumber Services can survey your drainage system, identify any vulnerabilities, and install non-return valves or pump solutions to protect your property during flood events. Early intervention is always more cost-effective than emergency flood response."
      },
      {
        question: "Can Nottingham Plumber Services work around Newark's historic buildings?",
        answer: "Yes. Newark's town centre includes numerous listed buildings and a conservation area where traditional drainage methods may be required. We use CCTV surveys to precisely locate problems before committing to any ground-breaking work, and we routinely employ no-dig lining and repair techniques to minimise disruption to historic structures and their settings."
      },
      {
        question: "Why do drains on Newark's newer housing estates sometimes back up?",
        answer: "Newer residential developments on the edges of Newark can experience surface-water drainage problems as increased impermeable surfacing overwhelms drainage systems designed to older standards. Gully blockages, undersized connections, and poorly maintained soakaways are common culprits. Nottingham Plumber Services can jet-clean your drainage, inspect connections, and recommend remediation to improve flow rates."
      }
    ],
    caseStudy: `A commercial property owner on the Market Place in Newark-on-Trent contacted Nottingham Plumber Services after repeated drain blockages in the kitchen of his restaurant, which had twice caused him to close for service during peak hours. The property occupies a Grade II listed building, and access to the drainage was complicated by a vaulted cellar space beneath the ground floor. Our engineers used a camera survey to trace the kitchen drain run beneath the cellar, identifying a near-complete grease blockage approximately 12 metres from the kitchen, at a point where the drain passed through the original eighteenth-century wall footings.

Using a combination of high-pressure jetting with a specialist grease-cutting head and a biological enzyme treatment, the team cleared the blockage over two visits without any need to break through the historic stonework. We also fitted a compact grease trap beneath the kitchen sink to intercept fats and oils before they entered the drain. The client was enrolled on a quarterly maintenance jetting programme to prevent recurrence. No further emergency callouts have been required in the twelve months since the installation, and the client reported a significant improvement in drain flow throughout the restaurant.`,
  },

  loughborough: {
    landmarks: [
      "Loughborough University",
      "Loughborough Market",
      "Carillon War Memorial and Tower",
      "Loughborough Town Hall",
      "Great Central Railway (Loughborough Central Station)",
      "Loughborough Bus Station",
      "Queen's Park",
      "Loughborough College",
      "Charnwood Museum",
      "The Rushes Shopping Centre",
      "Loughborough Parish Church",
      "Limehurst Recreation Ground",
      "Nanpantan Reservoir",
    ],
    drainageProfile: `Loughborough sits at a transitional point between the clay vales of the East Midlands and the granite uplands of Charnwood Forest to the west. This geology has a direct bearing on drainage: properties on the western edge of the town towards Shepshed and Nanpantan are underlain by harder igneous rock, while the town centre and eastern residential areas sit on Mercia Mudstone, a clay-rich formation that can shrink and swell with moisture changes. Subsidence and heave associated with clay soils are a recurring source of drainage pipe displacement in Loughborough's older housing stock.

The town grew rapidly during the Victorian era on the back of knitwear, lace, and engineering industries, and its drainage network reflects this legacy. Original clay pipe drains in neighbourhoods such as Storer Road, Frederick Street, and the streets surrounding the town centre are now well past their intended design life. Loughborough University's large campus introduces a different drainage dynamic: high volumes of student accommodation and research facilities require industrial-scale drainage management, and the university's connections to the public sewer network demand regular attention.

The River Soar flows to the east of the town and its tributaries cross the town's drainage catchment. During periods of prolonged rainfall, surface-water drainage in the lower parts of Loughborough - including areas near the Meadow Lane Industrial Estate - can be overwhelmed. The combination of clay soils with low permeability and a flat topography in the eastern areas of the town means surface water takes longer to drain, increasing the risk of garden and driveway ponding.

Loughborough's mix of student accommodation, family housing, and industrial estates creates varied drainage demands. Nottingham Plumber Services provides services across this range, from reactive unblocking and CCTV surveys in student houses to planned maintenance contracts for commercial and industrial clients.`,
    localFAQs: [
      {
        question: "Why are drains a common issue in Loughborough student houses?",
        answer: "High-occupancy student properties in Loughborough experience heavier drain loading than typical family homes. Kitchen sinks accumulate food waste and cooking oils, while bathroom drains fill with hair and soap scum at an accelerated rate. Nottingham Plumber Services offers affordable drain unblocking and annual maintenance packages specifically for student landlords in Loughborough to minimise void periods and tenant complaints."
      },
      {
        question: "Can clay soil movement damage drains in Loughborough?",
        answer: "Yes. The Mercia Mudstone clay that underlies much of Loughborough can shrink during dry spells and swell when wet, placing cyclic stress on drainage pipes. This can cause joint displacement, cracking, and bellying over time. If you notice recurring slow drainage or your CCTV survey reveals deformed or displaced pipes, Nottingham Plumber Services can provide no-dig lining solutions that restore the pipe bore without expensive excavation."
      },
      {
        question: "What drainage issues should I check before buying a house in Loughborough?",
        answer: "Before purchasing a Loughborough property - particularly a Victorian or Edwardian terrace - we recommend a pre-purchase CCTV drain survey. Common findings in this area include clay pipe root intrusion, joint displacement from clay soil movement, and collapsed sections in older properties. Nottingham Plumber Services offers pre-purchase surveys that can save buyers from unexpected repair costs after completion."
      }
    ],
    caseStudy: `Nottingham Plumber Services was called to a mid-terrace student rental property near Loughborough University following a complete blockage of the main soil stack. The landlord had received a complaint from his tenants that no drainage was working in the property at all - toilets would not flush and water was backing up into the ground-floor bath. Our engineers arrived within three hours of the initial call. A rodding exercise confirmed a solid blockage at the base of the soil stack where it connected to the underground drain run.

The CCTV camera revealed the cause: a combination of wet wipes, accumulated soap scum, and a large root mass from a nearby silver birch tree had formed a near-impenetrable blockage at a fractured joint approximately 1.5 metres below ground. Using a combination of high-pressure jetting and a mechanical root cutter, our team cleared the blockage and restored full flow within two hours. We then inserted a short-form lining sleeve over the fractured joint to seal the root entry point. We also fitted hair-trap inserts to the shower wastes and issued the landlord with a drain care guidance leaflet for tenants. The property was fully functional by early afternoon, with tenants experiencing no overnight disruption.`,
  },

  arnold: {
    landmarks: [
      "Arnold Market",
      "Arnold Town Centre",
      "Bonington Theatre",
      "Arnold Leisure Centre",
      "Gedling Country Park",
      "Arnold Lodge",
      "Arnot Hill Park",
      "St Mary's Church Arnold",
      "Killisick Local Nature Reserve",
      "Bestwood Country Park (nearby)",
      "Front Street",
      "Arnold Library",
    ],
    drainageProfile: `Arnold is a large suburban town to the north-east of Nottingham, forming part of the continuous urban area that stretches from the city centre through Mapperley and Carlton. The town developed rapidly during the late Victorian and Edwardian eras to house workers employed in Nottingham's lace and hosiery industries, and the drainage infrastructure of this period forms the backbone of the current network. Clay pipes of 100-150 mm diameter serve the majority of the town's residential streets, and many of these pipes are now approaching the end of their serviceable life.

The rising ground towards Gedling and the Country Park to the north-east of Arnold creates interesting drainage dynamics. Surface water from the higher ground discharges through the residential drainage network, and during heavy rainfall events, the increased flow can overwhelm older combined sewers in the lower streets of Arnold town centre. Properties in streets running down towards the valley floor near the River Leen and its tributaries are particularly susceptible to surface-water ingress during storms.

Arnold's mature urban tree canopy is both an asset and a drainage challenge. The avenue trees that line many of the town's older residential streets are a persistent source of root intrusion into aging clay pipework. Nottingham Plumber Services drain surveys in Arnold regularly reveal root masses at pipe joints in streets such as Thackeray's Lane, Hallam's Lane, and the roads surrounding Arnot Hill Park. Early CCTV inspection is strongly recommended for any Arnold property with mature trees growing close to drain runs.

The commercial drainage serving Arnold's Front Street shopping area and the town's growing food and drink sector requires periodic attention to manage grease accumulation. Nottingham Plumber Services provides both residential and commercial drain services across Arnold and the wider Gedling Borough area.`,
    localFAQs: [
      {
        question: "Are tree roots a common drain problem in Arnold?",
        answer: "Yes - Arnold's mature street trees are one of the most common causes of drain blockages in the area. Roots from lime, sycamore, and poplar trees frequently enter clay pipe joints, forming large masses that restrict flow and eventually cause complete blockages. Nottingham Plumber Services can remove root masses using high-pressure jetting and root-cutting equipment, and seal the affected joint with a CCTV-guided lining sleeve to prevent re-entry."
      },
      {
        question: "How quickly can Nottingham Plumber Services respond to a blocked drain in Arnold?",
        answer: "We aim to attend blocked drain emergencies in Arnold within 1-2 hours of your call. Arnold is within our priority service area as a suburb of Nottingham, and we carry a fully equipped vehicle with jetting and CCTV equipment at all times. Same-day appointments are available for non-emergency issues, and we offer out-of-hours callouts for genuine emergencies."
      },
      {
        question: "Should I have a drain survey before buying a house in Arnold?",
        answer: "We strongly recommend a pre-purchase drain survey for older properties in Arnold, particularly Victorian and Edwardian terraces. The combination of ageing clay pipes and mature tree roots creates conditions where hidden defects are common. A Nottingham Plumber Services CCTV survey typically costs far less than the drain repairs that can arise from buying a property with undisclosed drainage problems."
      }
    ],
    caseStudy: `Nottingham Plumber Services was contacted by a homeowner in Arnot Hill Road, Arnold, who had noticed an unpleasant smell in their rear garden and slow drainage from the kitchen for several weeks. On arrival, our engineers detected a soft spot in the garden lawn consistent with a collapsed pipe beneath. A CCTV survey confirmed a 300 mm section of 100 mm clay drain had completely collapsed, with surrounding soil beginning to migrate into the pipe bore. Root intrusion through an adjacent joint had accelerated the collapse by eroding the pipe wall over several years.

Given the shallow depth (approximately 600 mm) and the collapsed section, our team carried out a targeted open-cut repair. The collapsed section was excavated, removed, and replaced with a matching diameter PVC pipe using flexible couplings to accommodate any future ground movement. The adjacent root-intrusion joint was addressed with a CCTV-guided lining sleeve to prevent further root entry. The garden was reinstated and the excavation backfilled with compacted granular material to prevent future settlement. Total works were completed in half a day, and the homeowner was left with a full photographic report of the repair and post-reinstatement camera survey.`,
  },

  ilkeston: {
    landmarks: [
      "Ilkeston Market Place",
      "Ilkeston Town Hall",
      "Ilkeston Carnival Ground",
      "Pewit Golf Course",
      "Gallows Inn",
      "Erewash Museum",
      "Ilkeston FC - New Manor Ground",
      "West Hallam Village",
      "Bennerley Viaduct",
      "Cotmanhay Local Nature Reserve",
      "Ilkeston Train Station",
      "Victoria Park Ilkeston",
    ],
    drainageProfile: `Ilkeston is Derbyshire's largest town, and its drainage infrastructure reflects a town shaped by coal mining and framework knitting rather than planned urban growth. The town spreads across a ridge of high ground between the Erewash Valley to the west and the Nottingham conurbation to the east, and the ridge topography creates fast surface-water runoff that challenges the drainage network during heavy rainfall.

The legacy of coal mining is felt directly in Ilkeston's drainage. Mine subsidence has affected properties across much of the town, particularly in areas such as Cotmanhay, Stanton and Gallows Inn. Ground movement associated with historical mine workings causes progressive pipe joint displacement, creating the bellied and offset drains that Nottingham Plumber Services drain surveys regularly identify in this area. In some cases, subsidence has been severe enough to cause pipe collapse, requiring emergency excavation and repair.

Ilkeston's older housing stock, which includes large areas of Victorian terracing built for mining families, uses clay drainage that is now well over a century old. These pipes are at the end of their design life and are vulnerable to collapse, root intrusion, and grease accumulation. The town's commercial centre around the Market Place and the Gallows Inn area generates drainage demands from the food service sector. Ilkeston's lower-lying western areas near the Erewash are susceptible to surface-water flooding when the canal and river system is under pressure.

Nottingham Plumber Services engineers are familiar with the specific challenges of Ilkeston's mining legacy and ageing infrastructure, and we have the specialist equipment - including flexible drain liners and subsidence-tolerant repair couplings - to provide lasting solutions in this demanding environment.`,
    localFAQs: [
      {
        question: "Can old mine workings affect my drains in Ilkeston?",
        answer: "Mining subsidence in Ilkeston has caused ground movement that displaces drain pipes over time. If your property is above or near former mine workings, you may experience recurring slow drains, gurgling pipes, or foul smells even after clearing blockages. Nottingham Plumber Services CCTV surveys can identify subsidence-related pipe defects, and we can provide flexible repair solutions that accommodate areas where minor ongoing settlement is expected."
      },
      {
        question: "My Ilkeston home has original clay drains - how do I know if they need replacing?",
        answer: "Clay drains over 80 years old should be surveyed regularly. Warning signs include slow drainage that returns after clearing, foul smells in the garden, wet patches on lawns, and recurring blockages. A Nottingham Plumber Services CCTV survey will show the condition of your pipes in detail, and we can advise whether jetting, lining, or partial replacement offers the best value for your specific situation."
      },
      {
        question: "Is the area near the Erewash prone to drain flooding?",
        answer: "Yes - lower-lying streets in western Ilkeston near the Erewash Canal and River Erewash can experience surface-water flooding when the waterway and drainage network are both under pressure. Nottingham Plumber Services can install non-return valves and sump pump systems to protect vulnerable properties, and can clear and inspect your gullies and surface-water connections to minimise flood risk."
      }
    ],
    caseStudy: `Nottingham Plumber Services attended a semi-detached property in Cotmanhay, Ilkeston, after the homeowner reported that her downstairs toilet had been slow to clear for several months and had recently started to overflow during heavy use. The property, a 1930s semi, sits in an area known for residual mine subsidence. Our CCTV survey revealed a classic subsidence-induced drain defect: the 100 mm clay drain from the soil stack had developed a pronounced belly approximately 5 metres from the house, creating a permanent low spot where solids accumulated. Further along the run, a displaced joint had allowed a small root mass to establish.

Our engineers excavated over the bellied section, carefully shored the excavation due to the loose nature of the ground, and replaced the affected clay section with a PVC pipe on a concrete bed to prevent further settlement. The root-intruded joint was sealed with a CCTV-guided lining patch without requiring further excavation. The excavation was backfilled with lean-mix concrete to the pipe zone and compacted hardcore above to stabilise the ground. A post-repair survey confirmed consistent gradient throughout the drain run. The homeowner was also provided with a Coal Authority historical mining enquiry reference to support any future insurance claim related to subsidence.`,
  },

  "long-eaton": {
    landmarks: [
      "Long Eaton Market Place",
      "Long Eaton Town Hall",
      "Trent Lock and River Trent",
      "Erewash Canal - Long Eaton Section",
      "West Park, Long Eaton",
      "Long Eaton Leisure Centre",
      "St Laurence Church, Long Eaton",
      "Long Eaton Railway Station",
      "Toton Sidings (nearby)",
      "Sawley Marina",
      "Redhill Marina",
      "Attenborough Nature Reserve (nearby)",
    ],
    drainageProfile: `Long Eaton occupies a low-lying position in the Erewash Valley, where the River Erewash joins the River Trent just to the south of the town. This waterside location is the defining factor in Long Eaton's drainage character: much of the town sits on alluvial flood plain deposits, with the water table close to the surface in many areas. Drainage in Long Eaton must contend not only with the town's own surface water and foul drainage but also with the proximity of two rivers and the Erewash Canal, which together create a complex hydrological environment.

The town grew substantially during the Victorian era, primarily around the lace-making industry, and its older residential streets are served by the clay drainage of that period. Streets in the town centre and around the West Park area have original drainage now approaching or exceeding 150 years of service. The flat topography of the Trent-Erewash confluence means that drain gradients are shallow, increasing the risk of sediment accumulation and blockage. Nottingham Plumber Services engineers routinely encounter partly silted drains in Long Eaton where slow gradients have allowed grit and silt to build up over decades.

Flood risk is a material consideration for Long Eaton properties, particularly those closest to the Trent and Erewash. The Attenborough Nature Reserve to the south provides some natural flood storage, but during periods of prolonged rainfall, properties in the lower parts of Long Eaton - including areas near Trent Lock - can be affected by high groundwater and surcharging sewers. Nottingham Plumber Services can advise on flood protection measures appropriate to Long Eaton's specific flood risk zones.

The town's commercial and light industrial areas along the Tamworth Road and near the railway station generate drainage demands for grease and trade effluent management. Our commercial drain maintenance services are available throughout Long Eaton, ensuring that businesses remain compliant and operational.`,
    localFAQs: [
      {
        question: "Is Long Eaton a flood risk area?",
        answer: "Parts of Long Eaton, particularly areas close to the River Trent, Erewash Canal, and Attenborough Nature Reserve, are within identified flood risk zones. Even properties not in the highest risk zone can be affected by surface-water flooding and high groundwater during prolonged wet spells. Nottingham Plumber Services can carry out a drainage survey to identify vulnerabilities and recommend appropriate flood protection measures for your property."
      },
      {
        question: "Why do my drains in Long Eaton drain so slowly even when not blocked?",
        answer: "Long Eaton's flat topography means that many drain runs have very shallow gradients, which allows silt, grit, and debris to settle out of the flow rather than being carried away. Over time this creates a build-up that slows drainage without causing a complete blockage. Periodic high-pressure jetting from Nottingham Plumber Services can clear accumulated sediment and restore full flow rates."
      },
      {
        question: "How do I protect my Long Eaton home from drain flooding?",
        answer: "Nottingham Plumber Services recommends a combination of measures for flood-vulnerable properties: non-return valves on all drain connections, a sump pump with automatic activation, and regular gully and drain cleaning to ensure maximum flow capacity. We can carry out a site-specific flood risk drainage assessment and install the appropriate protective measures for your property's position within Long Eaton's flood risk area."
      }
    ],
    caseStudy: `Nottingham Plumber Services received a call from a homeowner on a residential street near Trent Lock in Long Eaton following heavy overnight rainfall. The ground-floor toilet had backed up and foul water was seeping from a gully at the side of the property. Our emergency team arrived within 90 minutes and quickly identified that the back garden inspection chamber was full to the rim - clear evidence of sewer surcharging during the storm. Rodding and jetting through the inspection chamber cleared a partial grease and silt blockage in the property lateral, which had been compounding the effect of the surcharging main sewer.

Following the emergency clearance, we carried out a CCTV survey of the full drain run at a later date and found a heavily silted 100 mm clay main drain running at around 40% capacity due to sediment accumulation and a partially collapsed end section where the lateral joined the main sewer. The silt was cleared by high-pressure jetting, and the collapsed section was relined using a CIPP liner without excavation. We also installed a non-return valve on the lateral to prevent future sewer surcharge from affecting the property, and provided the homeowner with a surface-water drainage improvement plan to reduce the impact of future storm events.`,
  },

  hucknall: {
    landmarks: [
      "Hucknall Market",
      "Byron's Rest (Lord Byron Memorial)",
      "St Mary Magdalene Church (Byron's burial place)",
      "Titchfield Park",
      "Hucknall Leisure Centre",
      "Hucknall Town FC - Watnall Road Ground",
      "Hucknall Tram Stop (Nottingham Express Transit)",
      "Rolls-Royce Aerospace Site (Hucknall Aerodrome)",
      "Hucknall Library",
      "Broomhill Park",
      "Linby Trail",
      "Annesley Hall (nearby)",
    ],
    drainageProfile: `Hucknall is a former mining town on the northern edge of the Nottingham conurbation, served by the Nottingham Express Transit tram line that connects it directly to the city centre. Like many towns in the former Nottinghamshire coalfield, Hucknall's drainage infrastructure bears the dual legacy of rapid Victorian expansion and subsequent mining subsidence. The town's older residential streets - particularly in the areas around the town centre and the former colliery sites - are served by clay drainage that now requires regular maintenance and periodic renewal.

Mining subsidence is a persistent issue in Hucknall. The former Hucknall Colliery, which closed in 1986, underlies parts of the town, and subsidence-related ground movement continues to affect drainage pipes in susceptible areas. Nottingham Plumber Services engineers frequently identify offset pipe joints and bellied drain sections in parts of Hucknall where historical mine workings are closest to the surface. Pre-purchase CCTV surveys are strongly recommended for properties in affected areas.

The town's topography descends from the higher ground of the former colliery spoil to the east down to the Leen Valley to the south and west. The River Leen and its tributaries flow through this valley, and lower-lying streets near the Leen corridor can experience surface-water flooding during significant rainfall. The Hucknall area's Mercia Mudstone geology, a clay-rich formation, also contributes to poor natural drainage in gardens, leading to waterlogging and ponding that can indicate issues with soakaways and surface-water connections.

The commercial centre around Hucknall Market and the busy high street generates grease and food waste in drainage from catering businesses. Rolls-Royce's aerospace facility at the former Hucknall Aerodrome site introduces industrial drainage requirements. Nottingham Plumber Services serves the full range of Hucknall's drainage needs, from residential emergency callouts to commercial planned maintenance.`,
    localFAQs: [
      {
        question: "Does coal mining subsidence affect drains in Hucknall?",
        answer: "Yes - parts of Hucknall are above the former Hucknall Colliery workings, and residual subsidence can cause ongoing pipe joint displacement. If you're experiencing recurring slow drains or blockages in an older Hucknall property, a CCTV survey from Nottingham Plumber Services will identify whether subsidence-related pipe movement is involved, and we can recommend repair solutions appropriate to areas with continued ground movement risk."
      },
      {
        question: "Why is my garden waterlogged in Hucknall even after dry weather?",
        answer: "The Mercia Mudstone clay that underlies much of Hucknall has low natural permeability, which means rainwater drains slowly through the soil. If your soakaway is old or undersized, or if surface-water connections are blocked, waterlogging can persist long after rainfall. Nottingham Plumber Services can inspect and clean your gullies and surface-water drains, assess your soakaway condition, and advise on improvements to reduce waterlogging."
      },
      {
        question: "How far is Hucknall from Nottingham Plumber Services' main base?",
        answer: "Hucknall is within our immediate service area - we typically reach Hucknall addresses within 60-90 minutes for emergency callouts. Our engineers are based in and around the Nottingham conurbation, and Hucknall's position on the Nottingham Express Transit route means we are very familiar with the town's streets and drainage infrastructure. We offer same-day appointments for non-emergency drain cleaning and surveys."
      }
    ],
    caseStudy: `A landlord managing a portfolio of terraced properties in the centre of Hucknall contacted Nottingham Plumber Services after two of his properties reported simultaneous drain problems: one had a completely blocked soil stack, and the other had foul water surfacing in the rear yard. Both properties were in the same terrace row, dating from around 1905. Our engineers surveyed both properties and the shared inspection chamber at the rear of the terrace. The camera revealed that the shared drain serving both properties had a 60% cross-sectional blockage of compacted rags and wet wipes approximately 6 metres downstream of the inspection chamber, combined with a root mass entering through an offset joint.

High-pressure jetting and a root-cutting head cleared the blockage and root mass in under an hour. The offset joint was sealed using a CCTV-guided lining sleeve inserted from the inspection chamber without any excavation. We also inspected the remaining drain runs serving the four properties in the terrace, identifying two further offset joints with early-stage root intrusion. These were lined preventatively at the landlord's request, avoiding the risk of future blockages in those sections. The landlord was provided with a full condition report for all four properties and enrolled on an annual drain maintenance contract covering jetting and camera inspection, which he found cost-effective given the historic age of the drainage across his portfolio.`,
  },
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
