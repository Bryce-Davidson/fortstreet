import { Product } from "@/components/ProductRowCard";

// Modern cycling product data with realistic specifications and metadata
export const latestProducts: Product[] = [
  {
    id: "specialized-tarmac-sl8",
    brand: "Specialized",
    name: "Tarmac SL8 Expert",
    description:
      "The fastest Tarmac ever, with revolutionary aerodynamics and lightweight carbon construction. Perfect for racing and fast group rides.",
    price: 8500.0,
    category: "road-bikes",
    availability: "in-stock",
    tags: ["carbon", "aero", "race", "disc-brake", "electronic"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Specialized+Tarmac+SL8",
    ],
  },
  {
    id: "trek-madone-slr-9",
    brand: "Trek",
    name: "Madone SLR 9 eTap",
    description:
      "Trek's flagship aero road bike with integrated storage, adjustable compliance, and SRAM Force eTap AXS wireless shifting.",
    price: 12999.0,
    category: "road-bikes",
    availability: "in-stock",
    tags: [
      "carbon",
      "aero",
      "race",
      "disc-brake",
      "wireless",
      "integrated-storage",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Trek+Madone+SLR",
    ],
  },
  {
    id: "cannondale-supersix-evo-4",
    brand: "Cannondale",
    name: "SuperSix EVO Hi-MOD Lab71",
    description:
      "Lightweight climbing machine with Hi-MOD carbon fiber and race-proven geometry. Built for pure speed and handling.",
    price: 11500.0,
    category: "road-bikes",
    availability: "in-stock",
    tags: ["carbon", "lightweight", "climbing", "disc-brake", "hi-mod"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Cannondale+SuperSix",
    ],
  },
  {
    id: "shimano-dura-ace-di2-12s",
    brand: "Shimano",
    name: "Dura-Ace Di2 12-Speed Groupset",
    description:
      "The pinnacle of road cycling technology with wireless shifting, advanced battery management, and precise 12-speed performance.",
    price: 4200.0,
    category: "parts",
    availability: "in-stock",
    tags: ["electronic", "wireless", "12-speed", "dura-ace", "groupset"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Shimano+Dura-Ace",
    ],
  },
  {
    id: "rapha-pro-team-jersey",
    brand: "Rapha",
    name: "Pro Team Training Jersey",
    description:
      "Race-fit jersey with advanced moisture management and aerodynamic fabric. Designed for serious training and racing.",
    price: 180.0,
    category: "apparel",
    availability: "in-stock",
    tags: ["jersey", "pro-fit", "moisture-wicking", "aero"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Rapha+Pro+Team",
    ],
  },
  {
    id: "wahoo-kickr-v6",
    brand: "Wahoo",
    name: "KICKR Smart Trainer V6",
    description:
      "The most realistic indoor training experience with improved flywheel design, reduced noise, and enhanced connectivity.",
    price: 1399.0,
    category: "accessories",
    availability: "in-stock",
    tags: ["smart-trainer", "indoor", "zwift-compatible", "direct-drive"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Wahoo+KICKR+V6",
    ],
  },
];

export const roadBikesProducts: Product[] = [
  {
    id: "pinarello-dogma-f",
    brand: "Pinarello",
    name: "Dogma F Disk",
    description:
      "The bike of champions, featuring asymmetric frame design, TorayCa T1100 1K carbon fiber, and proven race geometry.",
    price: 15999.0,
    category: "road-bikes",
    availability: "in-stock",
    tags: ["carbon", "race", "asymmetric", "torayca", "disc-brake"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Pinarello+Dogma+F",
    ],
  },
  {
    id: "cervelo-s5-disc",
    brand: "Cervélo",
    name: "S5 Disc Ultegra Di2",
    description:
      "Pure aerodynamic performance with integrated cockpit design and optimized tube shapes for maximum speed.",
    price: 9500.0,
    category: "road-bikes",
    availability: "in-stock",
    tags: ["carbon", "aero", "integrated-cockpit", "disc-brake", "electronic"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Cervelo+S5+Disc",
    ],
  },
];

// Comprehensive product collection for collections page
export const allProducts: Product[] = [
  ...latestProducts,
  ...roadBikesProducts,

  // Mountain Bikes
  {
    id: "santa-cruz-hightower-3-cc",
    brand: "Santa Cruz",
    name: "Hightower 3 CC XX1 AXS",
    description:
      "29er trail bike with VPP suspension, carbon CC frame, and SRAM XX1 Eagle AXS wireless drivetrain. 145mm rear travel.",
    price: 9899.0,
    category: "mountain-bikes",
    availability: "in-stock",
    tags: [
      "carbon",
      "29er",
      "trail",
      "vpp-suspension",
      "wireless",
      "145mm-travel",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Santa+Cruz+Hightower",
    ],
  },
  {
    id: "yeti-sb150-turq-t3",
    brand: "Yeti",
    name: "SB150 Turq T3",
    description:
      "Enduro racing machine with Switch Infinity suspension, Turq carbon frame, and aggressive geometry. 150mm travel front and rear.",
    price: 11999.0,
    category: "mountain-bikes",
    availability: "in-stock",
    tags: [
      "carbon",
      "enduro",
      "switch-infinity",
      "150mm-travel",
      "aggressive-geometry",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Yeti+SB150",
    ],
  },
  {
    id: "trek-slash-9-9",
    brand: "Trek",
    name: "Slash 9.9 XTR",
    description:
      "Downhill-inspired enduro bike with RE:aktiv suspension, OCLV Mountain Carbon, and Shimano XTR 12-speed.",
    price: 8799.0,
    category: "mountain-bikes",
    availability: "in-stock",
    tags: ["carbon", "enduro", "reaktiv-suspension", "oclv-carbon", "12-speed"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Trek+Slash",
    ],
  },
  {
    id: "pivot-switchblade-pro-xt",
    brand: "Pivot",
    name: "Switchblade Pro XT/XTR",
    description:
      "Versatile trail bike with dw-link suspension, carbon frame, and mixed Shimano XT/XTR components. 135mm rear travel.",
    price: 7999.0,
    category: "mountain-bikes",
    availability: "out-of-stock",
    tags: ["carbon", "trail", "dw-link", "135mm-travel", "shimano-xt"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Pivot+Switchblade",
    ],
  },

  // Gravel Bikes
  {
    id: "specialized-crux-expert",
    brand: "Specialized",
    name: "Crux Expert",
    description:
      "Lightweight cyclocross and gravel racing bike with FACT 10r carbon frame and aggressive race geometry.",
    price: 4200.0,
    category: "gravel-bikes",
    availability: "in-stock",
    tags: ["carbon", "cyclocross", "gravel", "race-geometry", "fact-carbon"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Specialized+Crux",
    ],
  },
  {
    id: "canyon-grail-cf-slx-8",
    brand: "Canyon",
    name: "Grail CF SLX 8 Di2",
    description:
      "Revolutionary gravel bike with double-decker Hover Bar, carbon frame, and Shimano GRX Di2 electronic shifting.",
    price: 5499.0,
    category: "gravel-bikes",
    availability: "in-stock",
    tags: ["carbon", "gravel", "hover-bar", "electronic", "grx-di2"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Canyon+Grail",
    ],
  },
  {
    id: "salsa-warbird-carbon-105",
    brand: "Salsa",
    name: "Warbird Carbon 105",
    description:
      "Adventure-ready gravel bike with clearance for 700x45c tires, carbon frame, and Shimano 105 mechanical shifting.",
    price: 3299.0,
    category: "gravel-bikes",
    availability: "in-stock",
    tags: ["carbon", "gravel", "adventure", "wide-clearance", "mechanical"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Salsa+Warbird",
    ],
  },

  // Wheels & Tyres
  {
    id: "zipp-303-firecrest-tubeless",
    brand: "Zipp",
    name: "303 Firecrest Tubeless Disc",
    description:
      "Versatile carbon wheelset optimized for 25-32mm tires with hookless rim design and improved aerodynamics.",
    price: 1900.0,
    category: "wheels-tyres",
    availability: "in-stock",
    tags: ["carbon", "tubeless", "hookless", "disc-brake", "aero"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Zipp+303+Firecrest",
    ],
  },
  {
    id: "enve-ses-4-2-ar-disc",
    brand: "ENVE",
    name: "SES 4.2 AR Disc",
    description:
      "All-road carbon wheelset with wide internal rim profile, optimized for gravel and road use with excellent crosswind stability.",
    price: 2800.0,
    category: "wheels-tyres",
    availability: "in-stock",
    tags: [
      "carbon",
      "all-road",
      "wide-profile",
      "crosswind-stable",
      "tubeless",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=ENVE+SES+4.2",
    ],
  },
  {
    id: "continental-gp5000-str-28mm",
    brand: "Continental",
    name: "Grand Prix 5000 S TR 28mm",
    description:
      "Premium tubeless road tire with BlackChili compound, Vectran puncture protection, and optimized rolling resistance.",
    price: 89.0,
    category: "wheels-tyres",
    availability: "in-stock",
    tags: [
      "tubeless",
      "road",
      "blackchili",
      "vectran",
      "low-rolling-resistance",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Continental+GP5000",
    ],
  },
  {
    id: "schwalbe-pro-one-tle-30mm",
    brand: "Schwalbe",
    name: "Pro One TLE 30mm",
    description:
      "Tubeless Easy road tire with MicroSkin casing and OneStar compound for superior grip and puncture protection.",
    price: 75.0,
    category: "wheels-tyres",
    availability: "in-stock",
    tags: [
      "tubeless",
      "road",
      "microskin",
      "onestar-compound",
      "puncture-protection",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Schwalbe+Pro+One",
    ],
  },

  // Parts & Components
  {
    id: "sram-red-etap-axs-12s",
    brand: "SRAM",
    name: "RED eTap AXS 12-Speed Groupset",
    description:
      "Wireless electronic shifting with 12-speed cassette, advanced battery management, and customizable shift logic.",
    price: 3800.0,
    category: "parts",
    availability: "in-stock",
    tags: ["electronic", "wireless", "12-speed", "red-etap", "customizable"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=SRAM+RED+eTap",
    ],
  },
  {
    id: "campagnolo-super-record-eps-12s",
    brand: "Campagnolo",
    name: "Super Record EPS 12-Speed",
    description:
      "Italian precision engineering with electronic shifting, carbon fiber components, and legendary Campagnolo performance.",
    price: 4500.0,
    category: "parts",
    availability: "in-stock",
    tags: ["electronic", "carbon-fiber", "12-speed", "italian", "super-record"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Campagnolo+Super+Record",
    ],
  },
  {
    id: "chris-king-r45d-ceramic",
    brand: "Chris King",
    name: "R45D Ceramic Disc Hub Set",
    description:
      "Precision-machined hubs with ceramic bearings, lifetime warranty, and available in multiple anodized colors.",
    price: 890.0,
    category: "parts",
    availability: "in-stock",
    tags: [
      "ceramic-bearings",
      "precision-machined",
      "lifetime-warranty",
      "anodized",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Chris+King+R45D",
    ],
  },

  // Accessories
  {
    id: "garmin-edge-1040-solar",
    brand: "Garmin",
    name: "Edge 1040 Solar",
    description:
      "Premium GPS cycling computer with solar charging, advanced performance metrics, and up to 100 hours battery life.",
    price: 749.0,
    category: "accessories",
    availability: "in-stock",
    tags: ["gps", "solar-charging", "performance-metrics", "long-battery"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Garmin+Edge+1040",
    ],
  },
  {
    id: "hammerhead-karoo-3",
    brand: "Hammerhead",
    name: "Karoo 3",
    description:
      "Smart cycling computer with color touchscreen, turn-by-turn navigation, and seamless integration with training platforms.",
    price: 449.0,
    category: "accessories",
    availability: "in-stock",
    tags: ["gps", "touchscreen", "navigation", "training-integration"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Hammerhead+Karoo+3",
    ],
  },
  {
    id: "lezyne-mega-xl-gps",
    brand: "Lezyne",
    name: "Mega XL GPS",
    description:
      "Feature-packed GPS computer with 48-hour battery life, smartphone connectivity, and comprehensive training features.",
    price: 249.0,
    category: "accessories",
    availability: "in-stock",
    tags: [
      "gps",
      "long-battery",
      "smartphone-connectivity",
      "training-features",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Lezyne+Mega+XL",
    ],
  },

  // Apparel
  {
    id: "castelli-perfetto-ros-vest",
    brand: "Castelli",
    name: "Perfetto RoS Vest",
    description:
      "Wind and water-resistant vest with GORE-TEX INFINIUM WINDSTOPPER fabric for variable weather conditions.",
    price: 189.0,
    category: "apparel",
    availability: "in-stock",
    tags: ["vest", "gore-tex", "windstopper", "weather-resistant"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Castelli+Perfetto+RoS",
    ],
  },
  {
    id: "assos-mille-gt-c2-bib",
    brand: "Assos",
    name: "Mille GT C2 Bib Shorts",
    description:
      "Comfort-focused bib shorts with Type.439 textile, goldenGate technology, and MILLE GT C2 chamois.",
    price: 295.0,
    category: "apparel",
    availability: "in-stock",
    tags: ["bib-shorts", "comfort", "goldengate", "mille-gt-chamois"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Assos+Mille+GT",
    ],
  },
  {
    id: "poc-ventral-air-mips",
    brand: "POC",
    name: "Ventral Air MIPS",
    description:
      "Lightweight aero helmet with MIPS protection, optimized ventilation, and aerodynamic design for road racing.",
    price: 280.0,
    category: "apparel",
    availability: "out-of-stock",
    tags: ["helmet", "mips", "aero", "lightweight", "ventilation"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=POC+Ventral+Air",
    ],
  },
  {
    id: "giro-synthe-mips-ii",
    brand: "Giro",
    name: "Synthe MIPS II",
    description:
      "Premium road helmet with MIPS technology, Roc Loc 5+ fit system, and excellent ventilation for long rides.",
    price: 250.0,
    category: "apparel",
    availability: "in-stock",
    tags: ["helmet", "mips", "roc-loc", "ventilation", "road"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Giro+Synthe+MIPS",
    ],
  },

  // Nutrition
  {
    id: "maurten-gel-100-caffeinated",
    brand: "Maurten",
    name: "Gel 100 CAF 100 - Box of 12",
    description:
      "Hydrogel energy gel with 100mg caffeine, 25g carbohydrates, and proven race-day performance.",
    price: 48.0,
    category: "nutrition",
    availability: "in-stock",
    tags: [
      "energy-gel",
      "caffeine",
      "hydrogel",
      "race-nutrition",
      "carbohydrates",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Maurten+Gel+100",
    ],
  },
  {
    id: "skratch-labs-sport-drink-mix",
    brand: "Skratch Labs",
    name: "Sport Hydration Drink Mix",
    description:
      "Natural sports drink with real fruit flavoring, optimal sodium content, and no artificial ingredients.",
    price: 24.0,
    category: "nutrition",
    availability: "in-stock",
    tags: [
      "hydration",
      "natural",
      "electrolytes",
      "real-fruit",
      "no-artificial",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Skratch+Labs+Drink",
    ],
  },
  {
    id: "sis-beta-fuel-gel-orange",
    brand: "Science in Sport",
    name: "Beta Fuel Gel Orange",
    description:
      "Dual-source energy gel with 40g carbohydrates, isotonic formula, and easy-to-digest composition.",
    price: 3.5,
    category: "nutrition",
    availability: "in-stock",
    tags: ["energy-gel", "dual-source", "isotonic", "easy-digest", "40g-carbs"],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=SiS+Beta+Fuel",
    ],
  },
  {
    id: "precision-hydration-ph1500",
    brand: "Precision Hydration",
    name: "PH 1500 Electrolyte Drink",
    description:
      "High-strength electrolyte drink with 1500mg sodium per liter, designed for heavy sweaters and long rides.",
    price: 32.0,
    category: "nutrition",
    availability: "in-stock",
    tags: [
      "electrolytes",
      "high-sodium",
      "heavy-sweaters",
      "long-rides",
      "1500mg",
    ],
    images: [
      "https://via.placeholder.com/400x400/f3f4f6/374151?text=Precision+Hydration",
    ],
  },
];
