/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  nottingham: {
    neighborhoods: ["Lace Market", "Hockley", "West Bridgford", "Beeston", "Wollaton", "Mapperley", "Sherwood", "Radford", "Clifton", "Arnold"],
    landmarks: ["Nottingham Castle", "the Old Market Square", "Nottingham Trent University", "the Victoria Centre", "Wollaton Hall"],
    drainageInfo: "Nottingham's Victorian-era drainage infrastructure underpins a dense mix of terraced housing, city-centre apartments, and commercial premises. The sandstone geology and River Trent floodplain create ground conditions that accelerate pipe movement and joint displacement. Older residential areas such as Sherwood and Radford commonly experience root intrusion and clay pipe deterioration.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, modern city-centre apartments, commercial premises, and student accommodation"
  },
  mansfield: {
    neighborhoods: ["Mansfield Woodhouse", "Forest Town", "Pleasley", "Rainworth", "Kirkby-in-Ashfield", "Sutton-in-Ashfield", "Berry Hill", "Clipstone", "Ravenshead", "Skegby"],
    landmarks: ["Mansfield Market Place", "Mansfield Museum", "King's Mill Reservoir", "White Water retail park", "Sherwood Forest"],
    drainageInfo: "Mansfield's coal-mining heritage has left a legacy of ground subsidence that puts considerable stress on underground drainage. Many properties in the town and surrounding villages were built during the mining era and feature ageing clay pipe systems susceptible to cracking and joint displacement. The undulating terrain around Forest Town and Rainworth also creates surface water runoff challenges.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "miners' terraces, interwar semis, modern housing estates, and rural colliery village properties"
  },
  derby: {
    neighborhoods: ["Allestree", "Mickleover", "Chaddesden", "Spondon", "Littleover", "Normanton", "Darley Abbey", "Mackworth", "Chellaston", "Oakwood"],
    landmarks: ["Derby Cathedral", "Pickford's House Museum", "the Derbion shopping centre", "Derby Arboretum", "Rolls-Royce Heritage Trust"],
    drainageInfo: "Derby's industrial past and River Derwent setting shape its drainage landscape. Properties close to the floodplain in Darley Abbey and Spondon are at elevated risk of surface water ingress, while the city's Victorian terraces in Normanton and Chaddesden have original clay drainage that is now approaching the end of its design life. Post-war estates across the suburbs also show increasing levels of pipe joint failure.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, 1960s estates, and modern new-build developments"
  },
  "newark-on-trent": {
    neighborhoods: ["Balderton", "Farndon", "Collingham", "Winthorpe", "Coddington", "Barnby-in-the-Willows", "Fernwood", "Hawton", "Claypole", "Weston"],
    landmarks: ["Newark Castle", "the National Civil War Centre", "Newark Market Place", "Sconce and Devon Park", "Newark Showground"],
    drainageInfo: "Newark-on-Trent sits in the flat Trent Valley where high groundwater levels and periodic river flooding place extra demands on drainage systems. Many older properties in the historic town centre have shallow Victorian drainage that is vulnerable to root intrusion and silt accumulation. The surrounding agricultural villages rely on private drainage systems that require regular maintenance.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "Georgian and Victorian town-centre properties, rural farmhouses and cottages, modern Fernwood estate homes, and commercial premises"
  },
  loughborough: {
    neighborhoods: ["Shelthorpe", "Loughborough University campus", "Woodthorpe", "Quorn", "Mountsorrel", "Barrow upon Soar", "Nanpantan", "Thorpe Acre", "Dishley", "Loughborough Moors"],
    landmarks: ["Loughborough University", "the Carillon Tower and War Memorial", "Great Central Railway", "Charnwood Museum", "Queens Park"],
    drainageInfo: "Loughborough straddles the boundary between Leicestershire's rolling Charnwood Forest and the flat Soar Valley floodplain, creating contrasting drainage challenges. Properties on higher ground near the university suffer from surface water runoff and hillside silt, while homes near the River Soar in Barrow upon Soar and Mountsorrel face seasonal waterlogging. A high student population places additional strain on the drainage infrastructure of the town's many shared houses.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian terraces, large student houses, Edwardian semis, and modern riverside developments"
  },
  arnold: {
    neighborhoods: ["Daybrook", "Redhill", "Calverton", "Woodthorpe", "Mapperley Plains", "Bestwood Village", "Killisick", "Burton Road", "Gedling", "Carlton"],
    landmarks: ["Arnold Market", "Arnot Hill Park", "Gedling Country Park", "Bestwood Country Park", "Mapperley Plains"],
    drainageInfo: "Arnold forms part of the densely populated northern suburbs of Nottingham, with Victorian and interwar housing predominating. The sandstone ridge running through Mapperley Plains creates differential ground movement that stresses pipe joints in older properties. Many homes in Daybrook and Redhill share drainage infrastructure dating from the early twentieth century, and tree root intrusion from mature street trees is a persistent challenge.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian and Edwardian terraces, 1930s semis, post-war council housing, and modern infill developments"
  },
  ilkeston: {
    neighborhoods: ["Cotmanhay", "West Hallam", "Kirk Hallam", "Heanor", "Loscoe", "Cossall", "Trowell", "Stanton by Dale", "Shipley", "Little Hallam"],
    landmarks: ["Ilkeston Market Place", "the Erewash Museum", "Bennerley Viaduct", "Shipley Country Park", "Ilkeston Charter Fair"],
    drainageInfo: "Ilkeston occupies a prominent hilltop position in the Erewash Valley and benefits from natural drainage gradients, though surface water runoff onto lower properties in Cotmanhay and Kirk Hallam can be significant. The town's coal-mining and lace-manufacturing heritage has left patches of ground instability that cause ongoing pipe displacement. Victorian terraces across Ilkeston town centre have clay drainage that now requires regular inspection and maintenance.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian brick terraces, miners' cottages, interwar semis, and modern valley-floor estates"
  },
  "long-eaton": {
    neighborhoods: ["Sawley", "Breaston", "Draycott", "Sandiacre", "Toton", "Chilwell", "Stapleford", "Risley", "Aston-on-Trent", "Shardlow"],
    landmarks: ["Long Eaton Market", "Trent Lock", "Attenborough Nature Reserve", "the Erewash Canal", "Long Eaton Town Hall"],
    drainageInfo: "Long Eaton sits at the confluence of the Rivers Trent and Erewash in a low-lying floodplain that regularly experiences high groundwater levels. Properties close to Trent Lock and the canal system are particularly vulnerable to surface water flooding, and drainage systems here must work against high water table pressures. The town's Victorian lace-trade terraces have ageing clay drainage, while newer estates in Toton and Sawley use plastic systems that can suffer from poor installation gradients.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian lace-trade terraces, 1960s and 1970s semis, modern new-build estates, and waterside properties"
  },
  hucknall: {
    neighborhoods: ["Linby", "Papplewick", "Newstead", "Annesley", "Butlers Hill", "Broomhill", "Watnall", "Kirkby-in-Ashfield", "Bestwood", "Top Valley"],
    landmarks: ["Byron's Tomb at St Mary Magdalene Church", "Hucknall Market", "Annesley Hall ruins", "Papplewick Pumping Station", "Newstead Abbey"],
    drainageInfo: "Hucknall lies on the southern fringe of the Nottinghamshire coalfield, and historic mining activity has caused ground subsidence across much of the town that remains a significant cause of cracked and displaced drainage pipes. Properties near Newstead and Annesley sit above former pit workings where ground movement can be unpredictable. The town's terraced housing, much of it built for colliery workers in the late Victorian period, has drainage nearing the end of its serviceable life.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian colliery terraces, interwar council housing, 1970s estates, and modern private developments"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  nottingham: {
    "blocked-drains": {
      intro: "Nottingham's diverse property portfolio means blocked drains can strike anywhere, from the Victorian terraces of Sherwood to the modern apartments of the Lace Market. Our experienced engineers understand the unique drainage challenges facing Nottingham properties and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup near the city's restaurant quarter", "Tree root intrusion from mature street trees in Wollaton and Mapperley", "Debris accumulation in Victorian clay pipes", "Wet wipe blockages in student accommodation areas", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Nottingham's tree-lined suburbs in Sherwood and Mapperley should consider annual drain inspections to catch root intrusion before it causes a full blockage."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Nottingham, you need a fast response from engineers who know the local area. Whether you're in Radford, Hockley, or West Bridgford, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Nottingham's busy restaurants and takeaways around Hockley and the Lace Market benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Nottingham property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for older Nottingham properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Nottingham's older suburbs? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair after completion."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Nottingham's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Nottingham's clay-rich soils contribute to scale buildup in older pipes. Regular jetting every 12-18 months keeps systems flowing freely and reduces emergency call-out risk."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Nottingham emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Clifton student houses to city-centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Nottingham location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Nottingham's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage from sandstone geology"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Nottingham's sandstone geology can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches near walls as early warning signs."
    }
  },
  mansfield: {
    "blocked-drains": {
      intro: "Mansfield's mining heritage has shaped its drainage landscape as much as its streets. Ground subsidence from former colliery workings creates stress on underground pipes, making blocked drains more common in properties across the town. Our Mansfield engineers understand these local conditions and respond quickly to clear blockages in any property type.",
      commonProblems: ["Pipe displacement caused by ground subsidence", "Root intrusion from mature garden trees", "Fat accumulation in domestic drains", "Stone and mortar debris in older systems", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Mansfield blockage with awareness of the town's subsidence risk, considering pipe alignment before selecting the most effective clearing method. Our engineers carry equipment suited to shifted clay pipes as well as modern plastic systems.",
      localTip: "Mansfield properties showing slow drainage should be inspected promptly — subsidence can cause gradual pipe misalignment that worsens without attention."
    },
    "drain-unblocking": {
      intro: "When Mansfield drains need unblocking, our local teams respond across the town from Mansfield Woodhouse to Kirkby-in-Ashfield. We handle residential and commercial drain unblocking with professional efficiency and minimal disruption, regardless of property age.",
      commonProblems: ["Kitchen sink blockages from cooking waste", "Toilet and bathroom clogs", "External drain obstructions from garden debris", "Interceptor trap blockages in older properties", "Commercial drainage issues"],
      process: "Our Mansfield engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Mansfield's mining-era properties often have deep inspection chambers. Ensure access covers are in good condition and clearly accessible for faster service."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Mansfield property's drainage is essential given the town's subsidence risk. Our CCTV surveys reveal the condition and alignment of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable for properties built over or adjacent to former mine workings.",
      commonProblems: ["Subsidence-related pipe misalignment", "Unknown drainage routes in older properties", "Pipe condition assessment for property purchases", "Root ingress detection", "Planning investigation before extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency and local risk factors.",
      localTip: "Mansfield properties built on former colliery sites may have unexpected underground features. Surveys help identify complex drainage arrangements before problems develop."
    },
    "drain-jetting": {
      intro: "Mansfield's combination of hard water and older pipe materials makes regular drain jetting a valuable maintenance investment. Our high-pressure cleaning service removes deposits that accumulate over time, maintaining optimal flow in domestic and commercial drainage systems throughout the town.",
      commonProblems: ["Scale buildup from hard water", "Grease accumulation in domestic drains", "Silt and debris deposits", "Root fragment removal after cutting treatment", "General preventative maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing before completing the service.",
      localTip: "Mansfield businesses, particularly food preparation premises, should consider scheduled jetting as part of their maintenance regime to prevent emergency call-outs."
    },
    "emergency-drain-services": {
      intro: "Mansfield drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded property in Forest Town or sewage backup in Mansfield Woodhouse, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage caused by subsidence", "Foul odour emergencies indicating pipe failure"],
      process: "Emergency calls are dispatched immediately to our nearest Mansfield engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Mansfield's older properties should have emergency drain contacts readily available. Knowing your stopcock and manhole locations helps our engineers begin work faster."
    },
    "drain-repairs": {
      intro: "Mansfield's property stock spans decades of building traditions, and our drain repair expertise matches this diversity. From subsidence-affected miners' terraces to modern estates in Rainworth, we provide repair solutions suited to each property and its ground conditions.",
      commonProblems: ["Cracked pipes from ground subsidence", "Clay pipe deterioration in older properties", "Joint failures from ground movement", "Root damage requiring intervention", "Collapsed sections in subsided ground"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with guarantees, using flexible materials where ongoing ground movement is a factor.",
      localTip: "Mansfield properties above former mine workings may require specialist ground investigation before excavation drainage repairs — we can advise on the appropriate approach."
    }
  },
  derby: {
    "blocked-drains": {
      intro: "Derby's industrial heritage and River Derwent floodplain setting create a varied drainage landscape across the city. From the Victorian terraces of Normanton to the modern developments in Mickleover and Chellaston, our Derby blocked drain specialists bring the local knowledge needed to clear any obstruction effectively.",
      commonProblems: ["Silt accumulation in low-lying floodplain properties", "Root intrusion from mature garden trees", "Fat and grease buildup in domestic kitchens", "Debris in Victorian clay drainage systems", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Derby blockage considering the property's location relative to the Derwent floodplain and its drainage system age. Our engineers carry equipment suited to both Victorian clay pipes and modern plastic systems found throughout the city.",
      localTip: "Derby properties near the Derwent in Darley Abbey and Spondon should ensure their drainage is inspected annually — high water table conditions accelerate pipe deterioration."
    },
    "drain-unblocking": {
      intro: "When Derby drains back up, our local teams respond quickly from Allestree to Chellaston. We handle the full range of residential and commercial drainage issues that Derby's varied housing stock experiences, from simple kitchen blockages to complex shared drainage problems.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap", "External gulley obstructions from garden debris", "Toilet blockages from inappropriate flushing", "Commercial drainage issues in the city centre"],
      process: "Our Derby engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Derby's city-centre restaurants and takeaways benefit from grease trap maintenance to prevent drain blockages and comply with environmental regulations."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property in Darley Abbey or investigating drainage issues at a Chaddesden family home, our CCTV surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Derby property.",
      commonProblems: ["Unknown pipe routes in older properties", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and compiled into a comprehensive report with findings and recommendations.",
      localTip: "Buying a Derby property near the Derwent floodplain? A CCTV survey revealing pipe condition and ground movement effects is a smart investment before exchange."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Derby, equally effective on Victorian clay pipes in Normanton and modern systems in Chellaston. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from hard water", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works methodically through your system, ensuring debris is flushed towards the sewer rather than further into your pipes.",
      localTip: "Derby's floodplain properties accumulate silt in drainage more rapidly than higher-elevation areas — scheduling jetting every 12 months helps prevent flow restrictions."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Derby receive our immediate attention, with engineers positioned to respond rapidly to properties from Allestree to Chellaston. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Derby engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Derby properties near the River Derwent should have emergency drainage contacts readily available, particularly during autumn when leaf fall can rapidly block surface water drains."
    },
    "drain-repairs": {
      intro: "Derby's diverse building stock requires drainage repair expertise spanning multiple decades of construction. Our repair teams handle everything from relining Victorian clay pipes in Normanton to replacing damaged sections in new-build estates in Mickleover, always using materials and methods suited to the specific property.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Joint displacement from ground movement near the floodplain", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Derby's alluvial soils near the Derwent can make excavation repairs challenging — ask about no-dig relining solutions that avoid the complications of waterlogged ground."
    }
  },
  "newark-on-trent": {
    "blocked-drains": {
      intro: "Newark-on-Trent's historic town centre and surrounding Trent Valley villages present distinctive drainage challenges. High groundwater levels, ageing Victorian infrastructure, and the demands of agricultural properties combine to make blocked drains a common issue. Our Newark engineers have the local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Silt accumulation from high water table conditions", "Root intrusion in period town-centre properties", "Fat and grease buildup in domestic drains", "Private drainage failures in rural villages", "Historic drainage infrastructure deterioration"],
      process: "We assess Newark blockages with awareness of the Trent Valley's water table and terrain, selecting clearing methods suited to the varied property stock from Georgian town houses to modern Fernwood estate homes.",
      localTip: "Newark properties close to the River Trent should have drainage inspected before the autumn flood season — high river levels can back up into private drainage systems."
    },
    "drain-unblocking": {
      intro: "When Newark drains need unblocking, our teams cover the town and surrounding villages from Balderton to Collingham. We handle all drainage scenarios, from simple domestic blockages in the town centre to complex private systems in rural Trent Valley properties.",
      commonProblems: ["Kitchen waste accumulation in domestic drains", "Bathroom drain blockages", "External gulley obstructions from fallen leaves", "Private drainage failures in village properties", "Washing machine and utility drain problems"],
      process: "Our Newark engineers arrive with comprehensive unblocking tools suited to both town-centre Victorian drainage and rural private systems. We identify and clear the obstruction completely, testing flow restoration before completing the job.",
      localTip: "Newark's rural village properties in Farndon and Coddington often rely on private drainage. Regular servicing prevents problems from developing unnoticed."
    },
    "cctv-drain-surveys": {
      intro: "Newark's historic property stock and rural hinterland make drainage condition surveys an essential tool for buyers and homeowners. Our CCTV surveys reveal pipe conditions invisible from the surface, whether you're purchasing a Georgian townhouse on Kirkgate or a farmhouse in the surrounding Trent Valley villages.",
      commonProblems: ["Pre-purchase condition assessment for historic properties", "Private drainage inspection in rural locations", "Root ingress investigation in mature gardens", "Flood damage assessment after Trent flooding", "Mapping drainage routes before extensions"],
      process: "We survey Newark properties systematically, documenting condition and mapping drainage routes. For rural properties, we assess the full private drainage system including any soakaways or treatment plants, providing a comprehensive report.",
      localTip: "Buying a Newark town-centre property? Its Victorian drainage may have been modified or extended over a century of ownership — a CCTV survey maps the exact layout before you commit."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Newark's varied drainage systems, from Georgian town-centre properties to modern Fernwood estate homes. Our specialist equipment clears the silt, scale, and debris that the Trent Valley's high water table conditions deposit in local drainage.",
      commonProblems: ["Silt deposits from high water table conditions", "Scale accumulation from hard water supply", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate condition assessment"],
      process: "We match jetting equipment to Newark's pipe types and conditions. Heritage town-centre drainage receives careful, lower-pressure treatment, while modern Fernwood estate systems can handle more thorough cleaning approaches.",
      localTip: "Newark properties in flood-risk zones near the Trent should schedule annual jetting to remove silt before autumn high-water seasons."
    },
    "emergency-drain-services": {
      intro: "Newark drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding in Balderton or sewage backup in the historic town centre. Our engineers are available around the clock, equipped to handle the water-related emergencies that Trent Valley properties face.",
      commonProblems: ["River-level rises backing up into private drainage", "Sewage backing up into ground-floor rooms", "Manhole overflows in the town centre", "Private drainage failures in rural properties", "Storm damage to drainage systems"],
      process: "Emergency calls from Newark receive immediate dispatch. We provide realistic arrival times and arrive prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Newark properties in EA flood-risk zones should fit non-return valves on main drainage connections to prevent Trent-level rises forcing sewage back into properties."
    },
    "drain-repairs": {
      intro: "Newark's drainage spans from original Georgian stone channels to modern plastic estate systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in the town centre or replacing collapsed sections in Balderton, we select repair methods suited to each property's age and ground conditions.",
      commonProblems: ["Cracked pipes from ground movement in the floodplain", "Joint displacement from high water table pressure", "Root damage requiring pipe replacement", "Deterioration of aged town-centre drainage", "Flood damage to drainage infrastructure"],
      process: "We investigate thoroughly before recommending Newark drainage repairs. Our approach accounts for the Trent Valley's water table and flood risk, using durable materials that provide long-lasting results in these conditions.",
      localTip: "Newark's high water table can make traditional excavation repairs challenging — ask about no-dig relining options that avoid groundwater complications entirely."
    }
  },
  loughborough: {
    "blocked-drains": {
      intro: "Loughborough's mix of student housing, Victorian terraces, and modern riverside developments creates diverse drainage challenges across the town. Heavy use of shared houses near the university and the town's varied property stock mean blocked drains are a regular occurrence. Our Loughborough specialists respond quickly and effectively.",
      commonProblems: ["Fat and grease buildup in student and HMO properties", "Tree root intrusion from Charnwood Forest vegetation", "Silt accumulation from Soar Valley floodplain properties", "Debris in Victorian clay drainage systems", "Shared drainage blockages in student houses"],
      process: "We approach Loughborough blockages understanding the town's dual character — Victorian terraced housing and university-area HMOs require different techniques from modern riverside developments near the Soar.",
      localTip: "Loughborough's student properties on Ashby Road and Forest Road experience high turnover of occupants who may not practise good drain care — landlords benefit from annual drainage inspections."
    },
    "drain-unblocking": {
      intro: "From emergency callouts in student areas near the university to routine unblocking in Quorn and Mountsorrel's residential streets, our Loughborough drain unblocking service covers every situation. We understand the varied property stock across the area and bring the right equipment.",
      commonProblems: ["Hair and soap accumulation in shared bathroom drains", "Food waste blockages in student kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing in HMOs", "Fat buildup in commercial premises near the town centre"],
      process: "Our Loughborough-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Loughborough's older terraced properties near Queens Park often have deep external manholes. Regular clearing prevents serious blockages from developing unnoticed."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a Victorian terrace near Loughborough town centre or investigating drainage problems at a Shelthorpe family home, our CCTV surveys provide the answers you need. This is particularly valuable for HMO landlords checking drainage condition before or after tenancies.",
      commonProblems: ["HMO and student property drainage condition assessment", "Root ingress from Charnwood Forest vegetation", "Pipe condition surveys for property purchases", "Investigation of recurring blockage causes", "Planning surveys before extensions or loft conversions"],
      process: "We survey Loughborough properties systematically, recording pipe condition and identifying defects. Reports include annotated footage and prioritised recommendations, meeting requirements for property transactions and landlord compliance.",
      localTip: "Loughborough HMO landlords can use CCTV drain surveys as evidence for deposit disputes where tenant misuse has caused drainage damage."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is essential maintenance for Loughborough's drainage systems, which contend with heavy use in student properties, Soar Valley silt, and hard water deposits. Our specialist equipment handles everything from clearing grease in HMO kitchens to descaling Victorian pipes in the town centre.",
      commonProblems: ["Heavy grease accumulation in student and HMO kitchens", "Silt deposits from Soar Valley properties", "Scale buildup from hard water supply", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We select jetting equipment suited to Loughborough's conditions — higher capacity for HMO properties with heavy use, careful pressure settings for older Victorian drainage. Flow is verified before completing the service.",
      localTip: "Loughborough landlords should include drain jetting in their annual property maintenance schedule, particularly for student houses where drainage receives heavy use."
    },
    "emergency-drain-services": {
      intro: "Loughborough drainage emergencies receive rapid response from our local teams. Whether it's an overflowing drain in a student house during term time or sewage backup in a Barrow upon Soar family home, our engineers are available around the clock to resolve the situation.",
      commonProblems: ["Sewage backing up in student and HMO properties", "Surface water flooding near the River Soar", "Manhole overflows affecting neighbouring properties", "Drain collapses in older terraced housing", "Foul water backing up through ground-floor fittings"],
      process: "Emergency calls trigger immediate dispatch. Our engineers arrive prepared for Loughborough's varied property situations with pumping equipment and temporary drainage solutions to protect your property while permanent repairs are arranged.",
      localTip: "Loughborough properties near the River Soar in Barrow and Mountsorrel should keep sandbags available — the Soar can rise quickly after sustained rainfall upstream."
    },
    "drain-repairs": {
      intro: "Loughborough's drainage faces stresses from heavy student property use, Charnwood Forest root intrusion, and Soar Valley ground conditions. Our repair specialists work across the area, from relining cracked pipes in Victorian town-centre terraces to replacing damaged sections in modern Shelthorpe estates.",
      commonProblems: ["Cracked Victorian pipes from heavy use and age", "Ground movement damage on Soar Valley floodplain", "Root damage from Charnwood vegetation", "Damage from tenant misuse in HMO properties", "Deterioration of original terraced-housing drainage"],
      process: "We assess Loughborough drainage repairs with local conditions in mind. Materials and methods are chosen to provide durable results, with flexible solutions preferred where ground movement near the Soar is a factor.",
      localTip: "Loughborough HMO landlords should use CCTV surveys to establish drainage condition at the start of each tenancy, creating a baseline for any future repair responsibility disputes."
    }
  },
  arnold: {
    "blocked-drains": {
      intro: "Arnold's position on the sandstone ridge north of Nottingham creates distinctive drainage challenges for its Victorian and interwar housing. Root intrusion from mature street trees and differential ground movement on the sandstone geology are the most common causes of blocked drains across Daybrook, Redhill, and the surrounding suburbs.",
      commonProblems: ["Tree root intrusion from mature street trees on the sandstone ridge", "Aged clay pipe deterioration in Victorian and Edwardian housing", "Fat and grease buildup in family home kitchens", "Leaf debris in external drains during autumn months", "Shared drainage blockages in terraced housing"],
      process: "We approach Arnold blockages with awareness of the sandstone geology and its effect on drainage alignment. Our clearing methods are effective yet measured, preserving the integrity of older drainage systems that are often still performing well.",
      localTip: "Arnold's beautiful mature trees along Burton Road and Gedling Road are a root intrusion risk. Consider annual CCTV checks if you have large trees within 5 metres of your drainage runs."
    },
    "drain-unblocking": {
      intro: "Arnold residents deserve drain unblocking services that respond promptly and work efficiently. Our local teams cover all of the Arnold area from Daybrook to Calverton, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs from hair and soap", "Kitchen sink blockages from cooking waste", "External gulley obstructions from leaves and garden debris", "Downpipe connection blockages", "Cellar drainage issues in older properties"],
      process: "Our Arnold engineers understand the area's predominantly Victorian and interwar drainage. We use appropriate techniques for each situation, whether that's careful rodding of older clay pipes or jetting for more robust modern sections.",
      localTip: "Arnold's Victorian properties often have drainage running beneath rear extensions added over the years. Know your drainage routes before undertaking any garden or building works."
    },
    "cctv-drain-surveys": {
      intro: "Arnold's active property market makes thorough drainage assessment valuable for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage beneath the area's Victorian and interwar homes.",
      commonProblems: ["Pre-purchase condition assessment in older properties", "Root ingress investigation in mature gardens", "Drainage route mapping for extension projects", "Period feature documentation in Victorian properties", "Insurance requirements following drainage problems"],
      process: "We survey Arnold properties with an eye for the sandstone geology's effect on pipe alignment. Our reports are comprehensive and professional, highlighting any movement-related issues alongside standard defect findings.",
      localTip: "Arnold home sellers can benefit from a proactive drainage survey, addressing any issues before they become negotiating points during the sale process."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Arnold's period drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage that serves the area's many older homes.",
      commonProblems: ["Scale from Arnold's hard water supply", "Grease accumulation in domestic drains over time", "Root mass removal after cutting treatment", "Silt and debris clearing", "Pre-survey preparation to achieve accurate inspection footage"],
      process: "Arnold's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage to original clay systems.",
      localTip: "Arnold's hard water contributes to scale buildup in older pipes. Periodic jetting maintains optimal flow and can extend the serviceable life of Victorian drainage."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Arnold receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian terrace or flooding in a modern conversion, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into older properties", "Garden flooding from overwhelmed surface drainage", "Manhole overflows in terraced streets", "Drain collapse affecting foundations", "Persistent foul odours indicating pipe damage"],
      process: "Emergency response to Arnold properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying drainage problem.",
      localTip: "Arnold's older properties should ensure drainage inspection covers are easily accessible and not buried under patios or decking — this allows faster emergency response."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Arnold's character properties requires knowledge of sandstone geology and sympathetic approaches to period drainage. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that suit the local ground conditions.",
      commonProblems: ["Aged clay pipe cracking from ground movement", "Root damage at pipe joints", "Differential settlement on sandstone geology", "Historical modification issues in extended properties", "Cellar drainage problems in older terraces"],
      process: "We investigate Arnold drainage issues thoroughly, recommending repairs that account for the sandstone geology and property age. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Arnold's sandstone geology causes seasonal ground movement — flexible pipe relining solutions accommodate this better than rigid pipe replacement in many situations."
    }
  },
  ilkeston: {
    "blocked-drains": {
      intro: "Ilkeston's hilltop position in the Erewash Valley gives natural drainage advantages but brings surface water challenges on lower-lying streets. Combined with a mining and lace-manufacturing heritage that has left ground instability across parts of the town, blocked drains here require engineers with genuine local knowledge.",
      commonProblems: ["Surface water runoff issues on hillside properties", "Ground instability causing pipe displacement", "Root intrusion in Victorian town-centre drainage", "Fat and grease buildup in domestic drains", "Shared drainage conflicts in terraced housing"],
      process: "We approach Ilkeston blockages considering the town's topography — hillside properties may need different methods than those in the lower Erewash Valley. Our engineers carry equipment suited to every situation the local terrain presents.",
      localTip: "Ilkeston's lower-lying properties in Cotmanhay should ensure surface water gullies are clear before autumn storms — hillside runoff can overwhelm blocked drains rapidly."
    },
    "drain-unblocking": {
      intro: "When Ilkeston drains need unblocking, our teams cover the town and surrounding Erewash Valley communities from Cotmanhay to West Hallam. We handle all unblocking scenarios from simple kitchen sink blockages to complex shared drainage problems in the area's Victorian terraces.",
      commonProblems: ["Kitchen waste accumulation in domestic drains", "Bathroom drain blockages from hair and soap", "External drain obstructions from garden and leaf debris", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Ilkeston engineers arrive with comprehensive unblocking tools suited to the area's predominantly Victorian property stock. We identify the obstruction and clear it completely, testing flow before finishing the job.",
      localTip: "Ilkeston's terraced streets in the town centre often share rear drainage — if your neighbours are also experiencing slow drains, the blockage is likely in a shared section."
    },
    "cctv-drain-surveys": {
      intro: "Ilkeston's mining and industrial heritage means some properties sit above ground with a complex subsurface history. Our CCTV surveys reveal pipe condition and alignment, providing crucial information for property buyers and homeowners investigating persistent problems in this unique Erewash Valley town.",
      commonProblems: ["Ground instability effects on pipe alignment", "Pre-purchase condition assessment in older properties", "Root ingress from mature vegetation", "Investigation of recurring blockage causes", "Planning surveys before extensions"],
      process: "We survey Ilkeston properties methodically, paying particular attention to pipe alignment issues that ground instability might cause. Reports highlight any areas of concern with clear recommendations for action.",
      localTip: "Buying an Ilkeston property? Commission a CCTV drain survey to check for pipe displacement caused by the town's industrial heritage ground conditions."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Ilkeston's drainage systems, from the Victorian terraces of the town centre to modern valley-floor developments. Our specialist equipment clears the silt, scale, and debris that accumulate in the varied drainage serving this Erewash Valley town.",
      commonProblems: ["Scale accumulation from hard water supply", "Grease buildup in residential drains", "Silt deposits in lower valley properties", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We match jetting equipment to Ilkeston's pipe types and conditions. Victorian terraces receive careful pressure settings suited to older clay pipes, while modern systems can handle more thorough cleaning approaches.",
      localTip: "Ilkeston's hilltop location means higher-elevation properties drain well naturally, but lower areas in Cotmanhay can accumulate deposits faster — factor this into maintenance schedules."
    },
    "emergency-drain-services": {
      intro: "Ilkeston drainage emergencies receive rapid response from our local teams. Whether you're dealing with flooding from a hillside surface water surge in Cotmanhay or sewage backup in a town-centre terrace, our engineers are available around the clock.",
      commonProblems: ["Surface water flooding from hillside runoff", "Sewage backing up into ground-floor fittings", "Manhole overflows on terraced streets", "Drain collapses in ground-unstable areas", "Foul odour emergencies indicating pipe failure"],
      process: "Emergency calls from Ilkeston trigger immediate dispatch. Our engineers understand the local terrain and arrive prepared for the situations that Erewash Valley properties face, with pumping equipment for surface water emergencies.",
      localTip: "Ilkeston's lower properties near Cotmanhay should maintain clear gullies year-round — hillside runoff in storm conditions can rapidly overwhelm any blockage."
    },
    "drain-repairs": {
      intro: "Ilkeston's drainage faces stresses from hillside topography, industrial heritage ground conditions, and ageing Victorian infrastructure. Our repair specialists work across the town and surrounding communities, selecting repair methods suited to each property's specific challenges.",
      commonProblems: ["Cracked pipes from ground movement and instability", "Joint displacement in Victorian clay systems", "Root damage requiring intervention", "Surface water drainage repairs on sloping ground", "Collapse in ground-unstable areas"],
      process: "We investigate Ilkeston drainage repairs thoroughly before recommending solutions. Materials and methods are chosen to accommodate the town's varied ground conditions, with flexible solutions preferred where ongoing instability is a factor.",
      localTip: "Ilkeston properties above former mine workings or industrial sites should use flexible repair materials that accommodate any future ground movement."
    }
  },
  "long-eaton": {
    "blocked-drains": {
      intro: "Long Eaton's low-lying position at the Trent and Erewash confluence creates some of the most demanding drainage conditions in the region. High groundwater levels, floodplain ground conditions, and an ageing Victorian lace-trade housing stock combine to make drainage maintenance a priority for local homeowners.",
      commonProblems: ["Silt accumulation from high water table and floodplain conditions", "Root intrusion from canal-side and riverside vegetation", "Fat and grease buildup in domestic kitchen drains", "Debris in Victorian lace-trade terrace drainage", "Surface water flooding in low-lying streets"],
      process: "We approach Long Eaton blockages with awareness of the floodplain geology and high water table, selecting clearing methods suited to both the property type and ground conditions. Our engineers carry equipment for all scenarios this challenging environment presents.",
      localTip: "Long Eaton properties near Trent Lock and the Erewash Canal should have drainage inspected each autumn before flood season — high water levels can back up into private drainage systems."
    },
    "drain-unblocking": {
      intro: "When Long Eaton drains need unblocking, our teams cover the town and surrounding Trent Valley communities from Sawley to Shardlow. We handle all drainage scenarios, from domestic blockages in Victorian terraces to complex shared systems in newer Toton and Sandiacre estates.",
      commonProblems: ["Kitchen waste accumulation in domestic drains", "Bathroom drain blockages from hair and soap", "External gulley obstructions from riverside and garden debris", "Interceptor trap blockages in older properties", "Surface water drainage issues on flat floodplain ground"],
      process: "Our Long Eaton engineers carry comprehensive unblocking equipment suited to both Victorian clay drainage and modern plastic systems. We locate and clear the obstruction completely, testing flow before completing the job.",
      localTip: "Long Eaton's flat terrain means any pipe gradient issues are amplified — even partial blockages can cause significant slow drainage in properties near Trent Lock."
    },
    "cctv-drain-surveys": {
      intro: "Long Eaton's floodplain location and Victorian lace-trade housing stock make drainage condition surveys particularly important. Our CCTV surveys reveal pipe conditions invisible from the surface, whether you're buying a Victorian terrace in the town centre or a modern new-build in Toton.",
      commonProblems: ["Pre-purchase condition assessment in older properties", "Floodplain ground movement effects on pipe alignment", "Root ingress from waterside vegetation", "Investigation of surface water drainage capacity", "Mapping drainage routes before extensions"],
      process: "We survey Long Eaton properties methodically, with particular attention to pipe gradients given the town's flat floodplain terrain. Reports highlight any areas where inadequate fall may be contributing to persistent drainage problems.",
      localTip: "Planning an extension on a Long Eaton floodplain property? Commission a CCTV survey first — high water table conditions mean drainage diversions need very careful planning."
    },
    "drain-jetting": {
      intro: "Regular jetting is particularly important for Long Eaton properties, where flat floodplain terrain and high groundwater levels mean drainage systems accumulate deposits more rapidly. Our high-pressure cleaning removes the silt and scale that build up in low-gradient pipes throughout the town.",
      commonProblems: ["Silt deposits from low-gradient floodplain drainage", "Scale buildup from hard water supply", "Fat and grease accumulation in residential drains", "Root fragments after cutting treatment", "Canal and riverside debris in external drains"],
      process: "We pay special attention to pipe gradients when jetting Long Eaton properties. Flat floodplain terrain requires thorough cleaning at key points where flow naturally slows, ensuring the entire system drains efficiently.",
      localTip: "Long Eaton's lowest-lying properties near Trent Lock should schedule jetting more frequently than average — floodplain drainage accumulates deposits faster than higher-elevation systems."
    },
    "emergency-drain-services": {
      intro: "Long Eaton drainage emergencies receive rapid response from our local teams, day and night. The area's floodplain location means we're experienced with water-related emergencies and arrive prepared with pumping equipment and containment measures for the situations this environment creates.",
      commonProblems: ["Trent flooding backing up into private drainage", "Surface water flooding during sustained rainfall", "Sewage backing up through ground-floor fittings", "Canal-adjacent drainage failures", "Rising water table overwhelming drainage capacity"],
      process: "Emergency calls from Long Eaton receive priority dispatch. Our engineers understand the area's flood risk profile and arrive equipped to manage water ingress while resolving the underlying drainage failure.",
      localTip: "Long Eaton properties in EA flood-risk zones near the Trent and Erewash should fit non-return valves on drainage connections to prevent river-level rises forcing sewage back into properties."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Long Eaton requires understanding the specific challenges of floodplain conditions — flat terrain, high water tables, and a mix of Victorian and modern property stock. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from floodplain ground settlement", "Root damage from waterside vegetation", "Joint displacement from high water table pressure", "Low-gradient pipes requiring careful re-laying", "Waterlogged ground complicating excavation repairs"],
      process: "We assess Long Eaton drainage repairs with the local water table and flat terrain in mind. Where excavation is needed, we manage groundwater appropriately, and all repairs account for the area's specific gradient requirements.",
      localTip: "Long Eaton's high water table near the Trent can make traditional excavation repairs very challenging — ask about no-dig relining options that avoid groundwater complications entirely."
    }
  },
  hucknall: {
    "blocked-drains": {
      intro: "Hucknall's colliery heritage has left a lasting mark on its drainage infrastructure. Ground subsidence from former mine workings affects properties across much of the town, causing pipe displacement and joint failure that leads to blockages. Our Hucknall engineers understand these local ground conditions and respond effectively.",
      commonProblems: ["Pipe displacement from mining subsidence", "Aged Victorian clay pipe deterioration in colliery-era terraces", "Root intrusion from mature gardens in Newstead and Annesley areas", "Fat and grease buildup in domestic drains", "Shared drainage blockages in terraced housing"],
      process: "We approach Hucknall blockages with awareness of the town's subsidence risk, assessing pipe condition and alignment before selecting clearing methods. Our engineers carry equipment suited to both displaced clay pipes and modern plastic systems.",
      localTip: "Hucknall properties showing slow drainage should be investigated promptly — mining subsidence can cause gradual pipe misalignment that accelerates without attention."
    },
    "drain-unblocking": {
      intro: "When Hucknall drains need unblocking, our teams cover the town and surrounding communities from Newstead to Watnall. We handle all drainage scenarios from simple domestic blockages in colliery terraces to more complex problems in the town's modern private developments.",
      commonProblems: ["Kitchen waste accumulation in domestic drains", "Bathroom drain blockages from hair and soap", "External gulley obstructions from garden debris", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Hucknall engineers carry comprehensive unblocking equipment suited to the area's predominantly Victorian and interwar property stock. We locate and clear the obstruction completely, testing flow before finishing the job.",
      localTip: "Hucknall's colliery terraces often have shared rear drainage runs — coordinating maintenance with neighbours helps manage shared infrastructure and prevents recurring blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Hucknall property's drainage is essential given the town's mining subsidence risk. Our CCTV surveys reveal pipe condition and alignment beneath your property, providing crucial information for buyers and homeowners in an area where ground movement can cause progressive drainage deterioration.",
      commonProblems: ["Mining subsidence effects on pipe alignment", "Pre-purchase condition assessment in older properties", "Root ingress from mature gardens", "Investigation of recurring blockage causes", "Planning surveys before extensions"],
      process: "We survey Hucknall properties methodically, with particular attention to pipe alignment and joint condition given the subsidence risk. Reports highlight displacement and deformation alongside standard defect findings, with recommendations tailored to local ground conditions.",
      localTip: "Buying a Hucknall property? A CCTV drain survey showing pipe alignment and condition is a particularly smart investment given the town's mining heritage and subsidence risk."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Hucknall's drainage systems in optimal condition despite the challenges of mining subsidence ground conditions. Our careful approach removes accumulated deposits from Victorian clay pipes while accounting for any alignment changes caused by local ground movement.",
      commonProblems: ["Scale buildup from hard water supply", "Grease accumulation in domestic drains", "Silt deposits in displaced pipe sections", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We adjust jetting pressure and nozzle selection for Hucknall's conditions, taking care around any pipe sections showing signs of displacement or deformation. Thorough cleaning is achieved without risk of further damage to already-stressed drainage.",
      localTip: "Hucknall's mining-legacy ground conditions mean pipes can accumulate silt in displaced sections more rapidly — factor this into your maintenance schedule and inspect annually."
    },
    "emergency-drain-services": {
      intro: "Hucknall drainage emergencies receive immediate attention from our local teams. Whether you're facing a flooded property from a collapsed drain in a subsidence-affected area or sewage backup in a colliery-era terrace, our engineers are available around the clock.",
      commonProblems: ["Sewage backing up into older properties", "Flooding from collapsed drains in subsidence-affected areas", "Manhole overflows in terraced streets", "Drain collapses caused by progressive ground movement", "Foul odour emergencies indicating pipe failure"],
      process: "Emergency calls from Hucknall trigger immediate dispatch. Our engineers are aware of the town's subsidence risk and arrive prepared with appropriate equipment, prioritising containment and resident safety before undertaking permanent repairs.",
      localTip: "Hucknall properties showing signs of structural movement should have drainage inspected promptly — subsidence that affects foundations often affects drainage pipes at the same time."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Hucknall requires specialist knowledge of mining subsidence and Victorian colliery housing. Our repair teams work across the town and surrounding communities, selecting materials and methods that accommodate the ongoing ground movement that characterises this part of the Nottinghamshire coalfield.",
      commonProblems: ["Cracked pipes from mining subsidence", "Joint displacement from progressive ground movement", "Root damage requiring intervention", "Collapsed sections in severely subsided ground", "Deterioration of original Victorian colliery-era drainage"],
      process: "We investigate Hucknall drainage repairs thoroughly, recommending solutions that account for ongoing ground movement risk. Flexible repair materials and no-dig relining techniques are often preferred, as they accommodate future movement better than rigid pipe replacement.",
      localTip: "Hucknall properties above former mine workings should use flexible relining materials for any drainage repairs — rigid solutions may be compromised by future subsidence events."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with United Utilities infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and United Utilities"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Nottinghamshire"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Nottinghamshire and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across our service area. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Nottinghamshire and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
