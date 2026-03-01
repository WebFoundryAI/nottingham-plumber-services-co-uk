import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No. ${BRAND.brandName} never charges a call-out fee. We quote a fixed price before any work begins, so you know exactly what to expect with no hidden extras. This applies to every job from Beeston to Arnold.`,
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: `Our engineers are based across Nottinghamshire, so we typically reach properties in Nottingham city centre, West Bridgford, Sherwood, and surrounding areas within 60 to 90 minutes. During peak traffic times or severe weather, we keep you updated with an accurate arrival estimate.`,
  },
  {
    question: "Are you available for emergencies?",
    answer: `Yes, our emergency team operates around the clock, 365 days a year, including bank holidays. Whether you have a sewage backup at midnight in Mapperley or a burst pipe on Christmas morning in Gedling, call ${BRAND.phoneFormatted} and we will dispatch the nearest available engineer.`,
  },
  {
    question: "How much does drain unblocking cost?",
    answer: "Pricing depends on the nature of the blockage, how accessible the drains are, and whether structural repairs are needed. We always provide a clear, written quote before starting any work. Most straightforward blockages in Nottingham homes are resolved at a fixed rate with no hourly charges.",
  },
  {
    question: "What is included in your service visit?",
    answer: "Every visit includes a full diagnosis of the issue, inspection of accessible manholes and pipework, clearance of the blockage where possible using professional jetting equipment, and practical aftercare advice tailored to your property's drainage layout. If further work is needed, we explain your options honestly.",
  },
  {
    question: "Do you work with landlords and commercial properties?",
    answer: "Absolutely. We work with private landlords, letting agents, property management companies, and businesses across Nottingham and the East Midlands. This includes restaurants in the city centre, offices in the Lace Market, retail units, student housing in Lenton, and large residential portfolios.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "Yes. Every job we complete comes with a written guarantee covering both materials and workmanship. If an issue recurs within the guarantee period, we return and resolve it at no additional cost.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "The majority of domestic blockages in Nottingham are cleared within one to two hours of our engineer arriving. For deeper or more complex obstructions, such as root ingress in clay pipes common beneath older properties in Sherwood and Arnold, we will give you an honest timeframe after the initial inspection.",
    },
    {
      question: "What causes drains to become blocked?",
      answer: "In Nottingham homes, the most frequent causes are accumulated cooking fat, hair, food waste, wet wipes, and tree root ingress through clay pipe joints. The city's clay-heavy soil also contributes to pipe displacement over time. We use CCTV inspection to pinpoint the exact cause before carrying out any clearance work.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "No. We select the appropriate clearance method based on the pipe material and its condition. For older clay pipes found across much of Nottingham's housing stock, we use controlled jetting pressures that clear the blockage without risking damage to fragile joints.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "Our HD cameras reveal the full internal condition of your drainage system, including blockages, cracks, root penetration, joint displacement, collapsed sections, and signs of corrosion. You receive a written report and the footage itself, which is particularly useful for insurance claims or property transactions in Nottingham.",
    },
    {
      question: "Do I need a drain survey before buying a house?",
      answer: "We strongly recommend it, especially for older Nottingham properties. Victorian terraces in areas like Sneinton and the Arboretum, and inter-war semis in West Bridgford and Carlton, often have original clay drainage that may have deteriorated unseen. A survey gives you either peace of mind or the evidence to renegotiate the purchase price.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A standard residential survey in Nottingham takes between one and two hours, depending on the size and layout of the drainage system. You will receive the full report and video footage, typically within twenty-four hours of the visit.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure drain jetting safe for old pipes?",
      answer: "Yes, provided it is carried out by experienced engineers. We routinely jet Victorian clay pipes across Nottingham, adjusting the water pressure to suit the pipe material and age. For pipes in questionable condition, we run a brief CCTV check first to ensure jetting is appropriate.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For most Nottingham households, an annual jetting session keeps drains flowing freely and prevents the gradual buildup that leads to emergency blockages. Properties with mature trees, older clay pipework, or commercial kitchens benefit from more frequent maintenance, typically every three to six months.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to an emergency?",
      answer: `Our engineers are positioned across Nottinghamshire, allowing us to reach most addresses within 60 to 90 minutes. We prioritise sewage backups and flooding situations. Call ${BRAND.phoneFormatted} any time, day or night, for immediate dispatch.`,
    },
    {
      question: "Do you charge extra for out-of-hours emergencies?",
      answer: "We maintain competitive fixed pricing regardless of the time of day. There is no premium for evenings, weekends, or bank holiday call-outs. We provide a clear written quote before any work begins so there are no surprises.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  // Map location name to slug for content lookup
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  // Fallback to generic location FAQs if location-specific content not found
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to an emergency callout in Nottingham?",
    answer: 'Our engineers are based across the East Midlands, so we typically reach <a href="/locations/nottingham/" class="text-primary hover:underline">Nottingham</a> addresses within 60 to 90 minutes for <a href="/services/emergency-drain-services/" class="text-primary hover:underline">emergency drainage callouts</a>. The team operates twenty-four hours a day, every day of the year, so whether it is a Sunday evening or a bank holiday morning, professional help is on its way.'
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "There is no call-out fee with any of our services. We attend, assess the situation, and provide a clear fixed-price quote before touching any tools. If for any reason you decide not to proceed, you owe us nothing."
  },
  {
    question: "What locations around Nottingham do you serve?",
    answer: 'We cover the whole of <a href="/locations/nottingham/" class="text-primary hover:underline">Nottingham</a> and a wide area of Nottinghamshire and the East Midlands, roughly a 25-mile radius from the city centre. This includes <a href="/locations/mansfield/" class="text-primary hover:underline">Mansfield</a>, <a href="/locations/derby/" class="text-primary hover:underline">Derby</a>, <a href="/locations/newark-on-trent/" class="text-primary hover:underline">Newark-on-Trent</a>, Beeston, West Bridgford, Arnold, Mapperley, Gedling, Hucknall, Long Eaton, and Ilkeston. See <a href="/locations/" class="text-primary hover:underline">all locations we cover</a>.'
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major debit and credit cards including contactless, and bank transfers. Payment is collected once the job is finished and you are satisfied with the result."
  },
  {
    question: "Do you handle commercial and multi-property drainage?",
    answer: 'Yes. We work with businesses, landlords, and property managers across Nottingham and the wider region. From restaurant kitchens in the city centre to student housing in Lenton and retail units in Victoria Centre, we provide <a href="/services/blocked-drains/" class="text-primary hover:underline">blockage clearance</a>, <a href="/services/drain-repairs/" class="text-primary hover:underline">repairs</a>, and ongoing maintenance including <a href="/services/drain-jetting/commercial-jetting/" class="text-primary hover:underline">scheduled commercial jetting</a>.'
  },
  {
    question: "What exactly is a CCTV drain survey?",
    answer: 'A <a href="/services/cctv-drain-surveys/" class="text-primary hover:underline">CCTV drain survey</a> sends a small waterproof camera through your pipes to record their internal condition in high definition. It is the most reliable way to diagnose recurring blockages, detect cracks or root intrusion, and evaluate drainage before purchasing a property. Our <a href="/services/cctv-drain-surveys/pre-purchase-survey/" class="text-primary hover:underline">pre-purchase drain surveys</a> are especially popular with Nottingham home buyers dealing with older clay pipework.'
  },
  {
    question: "What can I do to keep my drains clear?",
    answer: 'The simplest steps are to keep cooking fats out of the sink, fit a mesh strainer to catch food debris and hair, and never flush wet wipes or sanitary products. For properties with older clay drains, common across Nottingham, an annual <a href="/services/drain-jetting/" class="text-primary hover:underline">professional jetting service</a> removes buildup before it becomes a problem. Our <a href="/blog/prevent-blocked-drains-kitchen/" class="text-primary hover:underline">guide to preventing kitchen drain blockages</a> goes into more detail.'
  },
  {
    question: "Are your engineers qualified and insured?",
    answer: 'Every engineer on our team is fully trained in modern drainage techniques and holds relevant industry qualifications. We carry comprehensive public liability insurance, so your property is protected throughout the job. You can find out more <a href="/about/" class="text-primary hover:underline">about our team and standards</a>.'
  }
];

/** Alias used by the homepage */
export const HOMEPAGE_FAQS = PAGE_FAQS;
