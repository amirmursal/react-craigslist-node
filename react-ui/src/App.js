import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "Alabama",
      city: "auburn",
      category: "hea",
      states: [
        {
          name: "Alabama",
          cities: [
            {
              name: "auburn",
              city: "auburn",
            },
            {
              name: "birmingham",
              city: "birmingham",
            },
            {
              name: "dothan",
              city: "dothan",
            },
            {
              name: "florence / muscle shoals",
              city: "shoals",
            },
            {
              name: "gadsden-anniston",
              city: "gadsden",
            },
            {
              name: "huntsville / decatur",
              city: "huntsville",
            },
            {
              name: "mobile",
              city: "mobile",
            },
            {
              name: "montgomery",
              city: "montgomery",
            },
            {
              name: "tuscaloosa",
              city: "tuscaloosa",
            },
          ],
        },
        {
          name: "Alaska",
          cities: [
            {
              name: "anchorage / mat-su",
              city: "anchorage",
            },
            {
              name: "fairbanks",
              city: "fairbanks",
            },
            {
              name: "kenai peninsula",
              city: "kenai",
            },
            {
              name: "southeast alaska",
              city: "juneau",
            },
          ],
        },
        {
          name: "Arizona",
          cities: [
            {
              name: "flagstaff / sedona",
              city: "flagstaff",
            },
            {
              name: "mohave county",
              city: "mohave",
            },
            {
              name: "phoenix",
              city: "phoenix",
            },
            {
              name: "prescott",
              city: "prescott",
            },
            {
              name: "show low",
              city: "showlow",
            },
            {
              name: "sierra vista",
              city: "sierravista",
            },
            {
              name: "tucson",
              city: "tucson",
            },
            {
              name: "yuma",
              city: "yuma",
            },
          ],
        },
        {
          name: "Arkansas",
          cities: [
            {
              name: "fayetteville",
              city: "fayar",
            },
            {
              name: "fort smith",
              city: "fortsmith",
            },
            {
              name: "jonesboro",
              city: "jonesboro",
            },
            {
              name: "little rock",
              city: "littlerock",
            },
            {
              name: "texarkana",
              city: "texarkana",
            },
          ],
        },
        {
          name: "California",
          cities: [
            {
              name: "bakersfield",
              city: "bakersfield",
            },
            {
              name: "chico",
              city: "chico",
            },
            {
              name: "fresno / madera",
              city: "fresno",
            },
            {
              name: "gold country",
              city: "goldcountry",
            },
            {
              name: "hanford-corcoran",
              city: "hanford",
            },
            {
              name: "humboldt county",
              city: "humboldt",
            },
            {
              name: "imperial county",
              city: "imperial",
            },
            {
              name: "inland empire",
              city: "inlandempire",
            },
            {
              name: "los angeles",
              city: "losangeles",
            },
            {
              name: "mendocino county",
              city: "mendocino",
            },
            {
              name: "merced",
              city: "merced",
            },
            {
              name: "modesto",
              city: "modesto",
            },
            {
              name: "monterey bay",
              city: "monterey",
            },
            {
              name: "orange county",
              city: "orangecounty",
            },
            {
              name: "palm springs",
              city: "palmsprings",
            },
            {
              name: "redding",
              city: "redding",
            },
            {
              name: "sacramento",
              city: "sacramento",
            },
            {
              name: "san diego",
              city: "sandiego",
            },
            {
              name: "san francisco bay area",
              city: "sfbay",
            },
            {
              name: "san luis obispo",
              city: "slo",
            },
            {
              name: "santa barbara",
              city: "santabarbara",
            },
            {
              name: "santa maria",
              city: "santamaria",
            },
            {
              name: "siskiyou county",
              city: "siskiyou",
            },
            {
              name: "stockton",
              city: "stockton",
            },
            {
              name: "susanville",
              city: "susanville",
            },
            {
              name: "ventura county",
              city: "ventura",
            },
            {
              name: "visalia-tulare",
              city: "visalia",
            },
            {
              name: "yuba-sutter",
              city: "yubasutter",
            },
          ],
        },
        {
          name: "Colorado",
          cities: [
            {
              name: "boulder",
              city: "boulder",
            },
            {
              name: "colorado springs",
              city: "cosprings",
            },
            {
              name: "denver",
              city: "denver",
            },
            {
              name: "eastern CO",
              city: "eastco",
            },
            {
              name: "fort collins / north CO",
              city: "fortcollins",
            },
            {
              name: "high rockies",
              city: "rockies",
            },
            {
              name: "pueblo",
              city: "pueblo",
            },
            {
              name: "western slope",
              city: "westslope",
            },
          ],
        },
        {
          name: "Connecticut",
          cities: [
            {
              name: "eastern CT",
              city: "newlondon",
            },
            {
              name: "hartford",
              city: "hartford",
            },
            {
              name: "new haven",
              city: "newhaven",
            },
            {
              name: "northwest CT",
              city: "nwct",
            },
          ],
        },
        {
          name: "Delaware",
          cities: [
            {
              name: "delaware",
              city: "delaware",
            },
          ],
        },
        {
          name: "District of Columbia",
          cities: [
            {
              name: "washington",
              city: "washington",
            },
          ],
        },
        {
          name: "Florida",
          cities: [
            {
              name: "broward county",
              city: "miami",
            },
            {
              name: "daytona beach",
              city: "daytona",
            },
            {
              name: "florida keys",
              city: "keys",
            },
            {
              name: "fort lauderdale",
              city: "miami",
            },
            {
              name: "ft myers / SW florida",
              city: "fortmyers",
            },
            {
              name: "gainesville",
              city: "gainesville",
            },
            {
              name: "heartland florida",
              city: "cfl",
            },
            {
              name: "jacksonville",
              city: "jacksonville",
            },
            {
              name: "lakeland",
              city: "lakeland",
            },
            {
              name: "miami / dade",
              city: "miami",
            },
            {
              name: "north central FL",
              city: "lakecity",
            },
            {
              name: "ocala",
              city: "ocala",
            },
            {
              name: "okaloosa / walton",
              city: "okaloosa",
            },
            {
              name: "orlando",
              city: "orlando",
            },
            {
              name: "panama city",
              city: "panamacity",
            },
            {
              name: "pensacola",
              city: "pensacola",
            },
            {
              name: "sarasota-bradenton",
              city: "sarasota",
            },
            {
              name: "space coast",
              city: "spacecoast",
            },
            {
              name: "st augustine",
              city: "staugustine",
            },
            {
              name: "tallahassee",
              city: "tallahassee",
            },
            {
              name: "tampa bay area",
              city: "tampa",
            },
            {
              name: "treasure coast",
              city: "treasure",
            },
            {
              name: "palm beach county",
              city: "miami",
            },
          ],
        },
        {
          name: "Georgia",
          cities: [
            {
              name: "albany",
              city: "albanyga",
            },
            {
              name: "athens",
              city: "athensga",
            },
            {
              name: "atlanta",
              city: "atlanta",
            },
            {
              name: "augusta",
              city: "augusta",
            },
            {
              name: "brunswick",
              city: "brunswick",
            },
            {
              name: "columbus",
              city: "columbusga",
            },
            {
              name: "macon / warner robins",
              city: "macon",
            },
            {
              name: "northwest GA",
              city: "nwga",
            },
            {
              name: "savannah / hinesville",
              city: "savannah",
            },
            {
              name: "statesboro",
              city: "statesboro",
            },
            {
              name: "valdosta",
              city: "valdosta",
            },
          ],
        },
        {
          name: "Hawaii",
          cities: [
            {
              name: "hawaii",
              city: "honolulu",
            },
          ],
        },
        {
          name: "Idaho",
          cities: [
            {
              name: "boise",
              city: "boise",
            },
            {
              name: "east idaho",
              city: "eastidaho",
            },
            {
              name: "lewiston / clarkston",
              city: "lewiston",
            },
            {
              name: "twin falls",
              city: "twinfalls",
            },
          ],
        },
        {
          name: "Illinois",
          cities: [
            {
              name: "bloomington-normal",
              city: "bn",
            },
            {
              name: "champaign urbana",
              city: "chambana",
            },
            {
              name: "chicago",
              city: "chicago",
            },
            {
              name: "decatur",
              city: "decatur",
            },
            {
              name: "la salle co",
              city: "lasalle",
            },
            {
              name: "mattoon-charleston",
              city: "mattoon",
            },
            {
              name: "peoria",
              city: "peoria",
            },
            {
              name: "rockford",
              city: "rockford",
            },
            {
              name: "southern illinois",
              city: "carbondale",
            },
            {
              name: "springfield",
              city: "springfieldil",
            },
            {
              name: "western IL",
              city: "quincy",
            },
          ],
        },
        {
          name: "Indiana",
          cities: [
            {
              name: "bloomington",
              city: "bloomington",
            },
            {
              name: "evansville",
              city: "evansville",
            },
            {
              name: "fort wayne",
              city: "fortwayne",
            },
            {
              name: "indianapolis",
              city: "indianapolis",
            },
            {
              name: "kokomo",
              city: "kokomo",
            },
            {
              name: "lafayette / west lafayette",
              city: "tippecanoe",
            },
            {
              name: "muncie / anderson",
              city: "muncie",
            },
            {
              name: "richmond",
              city: "richmondin",
            },
            {
              name: "south bend / michiana",
              city: "southbend",
            },
            {
              name: "terre haute",
              city: "terrehaute",
            },
          ],
        },
        {
          name: "Iowa",
          cities: [
            {
              name: "ames",
              city: "ames",
            },
            {
              name: "cedar rapids",
              city: "cedarrapids",
            },
            {
              name: "des moines",
              city: "desmoines",
            },
            {
              name: "dubuque",
              city: "dubuque",
            },
            {
              name: "fort dodge",
              city: "fortdodge",
            },
            {
              name: "iowa city",
              city: "iowacity",
            },
            {
              name: "mason city",
              city: "masoncity",
            },
            {
              name: "quad cities",
              city: "quadcities",
            },
            {
              name: "sioux city",
              city: "siouxcity",
            },
            {
              name: "southeast IA",
              city: "ottumwa",
            },
            {
              name: "waterloo / cedar falls",
              city: "waterloo",
            },
          ],
        },
        {
          name: "Kansas",
          cities: [
            {
              name: "lawrence",
              city: "lawrence",
            },
            {
              name: "manhattan",
              city: "ksu",
            },
            {
              name: "northwest KS",
              city: "nwks",
            },
            {
              name: "salina",
              city: "salina",
            },
            {
              name: "southeast KS",
              city: "seks",
            },
            {
              name: "southwest KS",
              city: "swks",
            },
            {
              name: "topeka",
              city: "topeka",
            },
            {
              name: "wichita",
              city: "wichita",
            },
          ],
        },
        {
          name: "Kentucky",
          cities: [
            {
              name: "bowling green",
              city: "bgky",
            },
            {
              name: "eastern kentucky",
              city: "eastky",
            },
            {
              name: "lexington",
              city: "lexington",
            },
            {
              name: "louisville",
              city: "louisville",
            },
            {
              name: "owensboro",
              city: "owensboro",
            },
            {
              name: "western KY",
              city: "westky",
            },
          ],
        },
        {
          name: "Louisiana",
          cities: [
            {
              name: "baton rouge",
              city: "batonrouge",
            },
            {
              name: "central louisiana",
              city: "cenla",
            },
            {
              name: "houma",
              city: "houma",
            },
            {
              name: "lafayette",
              city: "lafayette",
            },
            {
              name: "lake charles",
              city: "lakecharles",
            },
            {
              name: "monroe",
              city: "monroe",
            },
            {
              name: "new orleans",
              city: "neworleans",
            },
            {
              name: "shreveport",
              city: "shreveport",
            },
          ],
        },
        {
          name: "Maine",
          cities: [
            {
              name: "maine",
              city: "maine",
            },
          ],
        },
        {
          name: "Maryland",
          cities: [
            {
              name: "annapolis",
              city: "annapolis",
            },
            {
              name: "baltimore",
              city: "baltimore",
            },
            {
              name: "eastern shore",
              city: "easternshore",
            },
            {
              name: "frederick",
              city: "frederick",
            },
            {
              name: "southern maryland",
              city: "smd",
            },
            {
              name: "western maryland",
              city: "westmd",
            },
          ],
        },
        {
          name: "Massachusetts",
          cities: [
            {
              name: "boston",
              city: "boston",
            },
            {
              name: "cape cod / islands",
              city: "capecod",
            },
            {
              name: "south coast",
              city: "southcoast",
            },
            {
              name: "western massachusetts",
              city: "westernmass",
            },
            {
              name: "worcester / central MA",
              city: "worcester",
            },
          ],
        },
        {
          name: "Michigan",
          cities: [
            {
              name: "ann arbor",
              city: "annarbor",
            },
            {
              name: "battle creek",
              city: "battlecreek",
            },
            {
              name: "central michigan",
              city: "centralmich",
            },
            {
              name: "detroit metro",
              city: "detroit",
            },
            {
              name: "flint",
              city: "flint",
            },
            {
              name: "grand rapids",
              city: "grandrapids",
            },
            {
              name: "holland",
              city: "holland",
            },
            {
              name: "jackson",
              city: "jxn",
            },
            {
              name: "kalamazoo",
              city: "kalamazoo",
            },
            {
              name: "lansing",
              city: "lansing",
            },
            {
              name: "monroe",
              city: "monroemi",
            },
            {
              name: "muskegon",
              city: "muskegon",
            },
            {
              name: "northern michigan",
              city: "nmi",
            },
            {
              name: "port huron",
              city: "porthuron",
            },
            {
              name: "saginaw-midland-baycity",
              city: "saginaw",
            },
            {
              name: "southwest michigan",
              city: "swmi",
            },
            {
              name: "the thumb",
              city: "thumb",
            },
            {
              name: "upper peninsula",
              city: "up",
            },
          ],
        },
        {
          name: "Minnesota",
          cities: [
            {
              name: "bemidji",
              city: "bemidji",
            },
            {
              name: "brainerd",
              city: "brainerd",
            },
            {
              name: "duluth / superior",
              city: "duluth",
            },
            {
              name: "mankato",
              city: "mankato",
            },
            {
              name: "minneapolis / st paul",
              city: "minneapolis",
            },
            {
              name: "rochester",
              city: "rmn",
            },
            {
              name: "southwest MN",
              city: "marshall",
            },
            {
              name: "st cloud",
              city: "stcloud",
            },
          ],
        },
        {
          name: "Mississippi",
          cities: [
            {
              name: "gulfport / biloxi",
              city: "gulfport",
            },
            {
              name: "hattiesburg",
              city: "hattiesburg",
            },
            {
              name: "jackson",
              city: "jackson",
            },
            {
              name: "meridian",
              city: "meridian",
            },
            {
              name: "north mississippi",
              city: "northmiss",
            },
            {
              name: "southwest MS",
              city: "natchez",
            },
          ],
        },
        {
          name: "Missouri",
          cities: [
            {
              name: "columbia / jeff city",
              city: "columbiamo",
            },
            {
              name: "joplin",
              city: "joplin",
            },
            {
              name: "kansas city",
              city: "kansascity",
            },
            {
              name: "kirksville",
              city: "kirksville",
            },
            {
              name: "lake of the ozarks",
              city: "loz",
            },
            {
              name: "southeast missouri",
              city: "semo",
            },
            {
              name: "springfield",
              city: "springfield",
            },
            {
              name: "st joseph",
              city: "stjoseph",
            },
            {
              name: "st louis",
              city: "stlouis",
            },
          ],
        },
        {
          name: "Montana",
          cities: [
            {
              name: "billings",
              city: "billings",
            },
            {
              name: "bozeman",
              city: "bozeman",
            },
            {
              name: "butte",
              city: "butte",
            },
            {
              name: "great falls",
              city: "greatfalls",
            },
            {
              name: "helena",
              city: "helena",
            },
            {
              name: "kalispell",
              city: "kalispell",
            },
            {
              name: "missoula",
              city: "missoula",
            },
            {
              name: "eastern montana",
              city: "montana",
            },
          ],
        },
        {
          name: "Nebraska",
          cities: [
            {
              name: "grand island",
              city: "grandisland",
            },
            {
              name: "lincoln",
              city: "lincoln",
            },
            {
              name: "north platte",
              city: "northplatte",
            },
            {
              name: "omaha / council bluffs",
              city: "omaha",
            },
            {
              name: "scottsbluff / panhandle",
              city: "scottsbluff",
            },
          ],
        },
        {
          name: "Nevada",
          cities: [
            {
              name: "elko",
              city: "elko",
            },
            {
              name: "las vegas",
              city: "lasvegas",
            },
            {
              name: "reno / tahoe",
              city: "reno",
            },
          ],
        },
        {
          name: "New Hampshire",
          cities: [
            {
              name: "new hampshire",
              city: "nh",
            },
          ],
        },
        {
          name: "New Jersey",
          cities: [
            {
              name: "central NJ",
              city: "cnj",
            },
            {
              name: "jersey shore",
              city: "jerseyshore",
            },
            {
              name: "north jersey",
              city: "newjersey",
            },
            {
              name: "south jersey",
              city: "southjersey",
            },
          ],
        },
        {
          name: "New Mexico",
          cities: [
            {
              name: "albuquerque",
              city: "albuquerque",
            },
            {
              name: "clovis / portales",
              city: "clovis",
            },
            {
              name: "farmington",
              city: "farmington",
            },
            {
              name: "las cruces",
              city: "lascruces",
            },
            {
              name: "roswell / carlsbad",
              city: "roswell",
            },
            {
              name: "santa fe / taos",
              city: "santafe",
            },
          ],
        },
        {
          name: "New York",
          cities: [
            {
              name: "albany",
              city: "albany",
            },
            {
              name: "binghamton",
              city: "binghamton",
            },
            {
              name: "buffalo",
              city: "buffalo",
            },
            {
              name: "catskills",
              city: "catskills",
            },
            {
              name: "chautauqua",
              city: "chautauqua",
            },
            {
              name: "elmira-corning",
              city: "elmira",
            },
            {
              name: "finger lakes",
              city: "fingerlakes",
            },
            {
              name: "glens falls",
              city: "glensfalls",
            },
            {
              name: "hudson valley",
              city: "hudsonvalley",
            },
            {
              name: "ithaca",
              city: "ithaca",
            },
            {
              name: "long island",
              city: "longisland",
            },
            {
              name: "oneonta",
              city: "oneonta",
            },
            {
              name: "plattsburgh-adirondacks",
              city: "plattsburgh",
            },
            {
              name: "potsdam-canton-massena",
              city: "potsdam",
            },
            {
              name: "rochester",
              city: "rochester",
            },
            {
              name: "syracuse",
              city: "syracuse",
            },
            {
              name: "twin tiers NY/PA",
              city: "twintiers",
            },
            {
              name: "utica-rome-oneida",
              city: "utica",
            },
            {
              name: "watertown",
              city: "watertown",
            },
          ],
        },
        {
          name: "North Carolina",
          cities: [
            {
              name: "asheville",
              city: "asheville",
            },
            {
              name: "boone",
              city: "boone",
            },
            {
              name: "charlotte",
              city: "charlotte",
            },
            {
              name: "eastern NC",
              city: "eastnc",
            },
            {
              name: "fayetteville",
              city: "fayetteville",
            },
            {
              name: "greensboro",
              city: "greensboro",
            },
            {
              name: "hickory / lenoir",
              city: "hickory",
            },
            {
              name: "jacksonville",
              city: "onslow",
            },
            {
              name: "outer banks",
              city: "outerbanks",
            },
            {
              name: "raleigh / durham / CH",
              city: "raleigh",
            },
            {
              name: "wilmington",
              city: "wilmington",
            },
            {
              name: "winston-salem",
              city: "winstonsalem",
            },
          ],
        },
        {
          name: "North Dakota",
          cities: [
            {
              name: "bismarck",
              city: "bismarck",
            },
            {
              name: "fargo / moorhead",
              city: "fargo",
            },
            {
              name: "grand forks",
              city: "grandforks",
            },
            {
              name: "north dakota",
              city: "nd",
            },
          ],
        },
        {
          name: "Ohio",
          cities: [
            {
              name: "akron / canton",
              city: "akroncanton",
            },
            {
              name: "ashtabula",
              city: "ashtabula",
            },
            {
              name: "athens",
              city: "athens",
            },
            {
              name: "chillicothe",
              city: "chillicothe",
            },
            {
              name: "cincinnati",
              city: "cincinnati",
            },
            {
              name: "cleveland",
              city: "cleveland",
            },
            {
              name: "columbus",
              city: "columbus",
            },
            {
              name: "dayton / springfield",
              city: "dayton",
            },
            {
              name: "lima / findlay",
              city: "limaohio",
            },
            {
              name: "mansfield",
              city: "mansfield",
            },
            {
              name: "sandusky",
              city: "sandusky",
            },
            {
              name: "toledo",
              city: "toledo",
            },
            {
              name: "tuscarawas co",
              city: "tuscarawas",
            },
            {
              name: "youngstown",
              city: "youngstown",
            },
            {
              name: "zanesville / cambridge",
              city: "zanesville",
            },
          ],
        },
        {
          name: "Oklahoma",
          cities: [
            {
              name: "lawton",
              city: "lawton",
            },
            {
              name: "northwest OK",
              city: "enid",
            },
            {
              name: "oklahoma city",
              city: "oklahomacity",
            },
            {
              name: "stillwater",
              city: "stillwater",
            },
            {
              name: "tulsa",
              city: "tulsa",
            },
          ],
        },
        {
          name: "Oregon",
          cities: [
            {
              name: "bend",
              city: "bend",
            },
            {
              name: "corvallis/albany",
              city: "corvallis",
            },
            {
              name: "east oregon",
              city: "eastoregon",
            },
            {
              name: "eugene",
              city: "eugene",
            },
            {
              name: "klamath falls",
              city: "klamath",
            },
            {
              name: "medford-ashland",
              city: "medford",
            },
            {
              name: "oregon coast",
              city: "oregoncoast",
            },
            {
              name: "portland",
              city: "portland",
            },
            {
              name: "roseburg",
              city: "roseburg",
            },
            {
              name: "salem",
              city: "salem",
            },
          ],
        },
        {
          name: "Pennsylvania",
          cities: [
            {
              name: "altoona-johnstown",
              city: "altoona",
            },
            {
              name: "cumberland valley",
              city: "chambersburg",
            },
            {
              name: "erie",
              city: "erie",
            },
            {
              name: "harrisburg",
              city: "harrisburg",
            },
            {
              name: "lancaster",
              city: "lancaster",
            },
            {
              name: "lehigh valley",
              city: "allentown",
            },
            {
              name: "meadville",
              city: "meadville",
            },
            {
              name: "philadelphia",
              city: "philadelphia",
            },
            {
              name: "pittsburgh",
              city: "pittsburgh",
            },
            {
              name: "poconos",
              city: "poconos",
            },
            {
              name: "reading",
              city: "reading",
            },
            {
              name: "scranton / wilkes-barre",
              city: "scranton",
            },
            {
              name: "state college",
              city: "pennstate",
            },
            {
              name: "williamsport",
              city: "williamsport",
            },
            {
              name: "york",
              city: "york",
            },
          ],
        },
        {
          name: "Rhode Island",
          cities: [
            {
              name: "rhode island",
              city: "providence",
            },
          ],
        },
        {
          name: "South Carolina",
          cities: [
            {
              name: "charleston",
              city: "charleston",
            },
            {
              name: "columbia",
              city: "columbia",
            },
            {
              name: "florence",
              city: "florencesc",
            },
            {
              name: "greenville / upstate",
              city: "greenville",
            },
            {
              name: "hilton head",
              city: "hiltonhead",
            },
            {
              name: "myrtle beach",
              city: "myrtlebeach",
            },
          ],
        },
        {
          name: "South Dakota",
          cities: [
            {
              name: "northeast SD",
              city: "nesd",
            },
            {
              name: "pierre / central SD",
              city: "csd",
            },
            {
              name: "rapid city / west SD",
              city: "rapidcity",
            },
            {
              name: "sioux falls / SE SD",
              city: "siouxfalls",
            },
            {
              name: "south dakota",
              city: "sd",
            },
          ],
        },
        {
          name: "Tennessee",
          cities: [
            {
              name: "chattanooga",
              city: "chattanooga",
            },
            {
              name: "clarksville",
              city: "clarksville",
            },
            {
              name: "jackson",
              city: "jacksontn",
            },
            {
              name: "knoxville",
              city: "knoxville",
            },
            {
              name: "memphis",
              city: "memphis",
            },
            {
              name: "nashville",
              city: "nashville",
            },
            {
              name: "tri-cities",
              city: "tricities",
            },
          ],
        },
        {
          name: "Texas",
          cities: [
            {
              name: "abilene",
              city: "abilene",
            },
            {
              name: "amarillo",
              city: "amarillo",
            },
            {
              name: "austin",
              city: "austin",
            },
            {
              name: "beaumont / port arthur",
              city: "beaumont",
            },
            {
              name: "brownsville",
              city: "brownsville",
            },
            {
              name: "college station",
              city: "collegestation",
            },
            {
              name: "corpus christi",
              city: "corpuschristi",
            },
            {
              name: "dallas / fort worth",
              city: "dallas",
            },
            {
              name: "deep east texas",
              city: "nacogdoches",
            },
            {
              name: "del rio / eagle pass",
              city: "delrio",
            },
            {
              name: "el paso",
              city: "elpaso",
            },
            {
              name: "galveston",
              city: "galveston",
            },
            {
              name: "houston",
              city: "houston",
            },
            {
              name: "killeen / temple / ft hood",
              city: "killeen",
            },
            {
              name: "laredo",
              city: "laredo",
            },
            {
              name: "lubbock",
              city: "lubbock",
            },
            {
              name: "mcallen / edinburg",
              city: "mcallen",
            },
            {
              name: "odessa / midland",
              city: "odessa",
            },
            {
              name: "san angelo",
              city: "sanangelo",
            },
            {
              name: "san antonio",
              city: "san antonio",
            },
            {
              name: "san marcos",
              city: "sanmarcos",
            },
            {
              name: "southwest TX",
              city: "bigbend",
            },
            {
              name: "texoma",
              city: "texoma",
            },
            {
              name: "tyler / east TX",
              city: "easttexas",
            },
            {
              name: "victoria",
              city: "victoriatx",
            },
            {
              name: "waco",
              city: "waco",
            },
            {
              name: "wichita falls",
              city: "wichitafalls",
            },
          ],
        },
        {
          name: "Utah",
          cities: [
            {
              name: "logan",
              city: "logan",
            },
            {
              name: "ogden-clearfield",
              city: "ogden",
            },
            {
              name: "provo / orem",
              city: "provo",
            },
            {
              name: "salt lake city",
              city: "saltlakecity",
            },
            {
              name: "st george",
              city: "stgeorge",
            },
          ],
        },
        {
          name: "Vermont",
          cities: [
            {
              name: "vermont",
              city: "burlington",
            },
          ],
        },
        {
          name: "Virginia",
          cities: [
            {
              name: "charlottesville",
              city: "charlottesville",
            },
            {
              name: "danville",
              city: "danville",
            },
            {
              name: "fredericksburg",
              city: "fredericksburg",
            },
            {
              name: "hampton roads",
              city: "norfolk",
            },
            {
              name: "harrisonburg",
              city: "harrisonburg",
            },
            {
              name: "lynchburg",
              city: "lynchburg",
            },
            {
              name: "new river valley",
              city: "blacksburg",
            },
            {
              name: "richmond",
              city: "richmond",
            },
            {
              name: "roanoke",
              city: "roanoke",
            },
            {
              name: "southwest VA",
              city: "swva",
            },
            {
              name: "winchester",
              city: "winchester",
            },
          ],
        },
        {
          name: "Washington",
          cities: [
            {
              name: "bellingham",
              city: "bellingham",
            },
            {
              name: "kennewick-pasco-richland",
              city: "kpr",
            },
            {
              name: "moses lake",
              city: "moseslake",
            },
            {
              name: "olympic peninsula",
              city: "olympic",
            },
            {
              name: "pullman / moscow",
              city: "pullman",
            },
            {
              name: "seattle-tacoma",
              city: "seattle",
            },
            {
              name: "skagit / island / SJI",
              city: "skagit",
            },
            {
              name: "spokane / coeur d'alene",
              city: "spokane",
            },
            {
              name: "wenatchee",
              city: "wenatchee",
            },
            {
              name: "yakima",
              city: "yakima",
            },
          ],
        },
        {
          name: "West Virginia",
          cities: [
            {
              name: "charleston",
              city: "charlestonwv",
            },
            {
              name: "eastern panhandle",
              city: "martinsburg",
            },
            {
              name: "huntington-ashland",
              city: "huntington",
            },
            {
              name: "morgantown",
              city: "morgantown",
            },
            {
              name: "northern panhandle",
              city: "wheeling",
            },
            {
              name: "parkersburg-marietta",
              city: "parkersburg",
            },
            {
              name: "southern WV",
              city: "swv",
            },
            {
              name: "west virginia (old)",
              city: "wv",
            },
          ],
        },
        {
          name: "Wisconsin",
          cities: [
            {
              name: "appleton-oshkosh-FDL",
              city: "appleton",
            },
            {
              name: "eau claire",
              city: "eauclaire",
            },
            {
              name: "green bay",
              city: "greenbay",
            },
            {
              name: "janesville",
              city: "janesville",
            },
            {
              name: "kenosha-racine",
              city: "racine",
            },
            {
              name: "la crosse",
              city: "lacrosse",
            },
            {
              name: "madison",
              city: "madison",
            },
            {
              name: "milwaukee",
              city: "milwaukee",
            },
            {
              name: "northern WI",
              city: "northernwi",
            },
            {
              name: "sheboygan",
              city: "sheboygan",
            },
            {
              name: "wausau",
              city: "wausau",
            },
          ],
        },
        {
          name: "Wyoming",
          cities: [
            {
              name: "wyoming",
              city: "wyoming",
            },
          ],
        },
        {
          name: "Territories",
          cities: [
            {
              name: "guam-micronesia",
              city: "micronesia",
            },
            {
              name: "puerto rico",
              city: "puertorico",
            },
            {
              name: "U.S. virgin islands",
              city: "virgin",
            },
          ],
        },
      ],
      categories: [
        {
          name: "Medical + Health",
          category: "hea",
        },
        {
          name: "Business + Management",
          category: "bus",
        },
        {
          name: "Customer Service",
          category: "csr",
        },
        {
          name: "Legal + Paralegal",
          category: "lgl",
        },
        {
          name: "Salon + Spa + Fitness",
          category: "spa",
        },
        {
          name: "Technical Support",
          category: "tch",
        },
        {
          name: "Web + Info Design",
          category: "web",
        },

        {
          name: "Writing + Editing",
          category: "wri",
        },
      ],
      data: [],
      search: "",
      loading: false,
      message: null,
      searchNearby: false,
      startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    };
  }

  // common input change handler for input and select
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  toggleSearchNearBy = () => {
    this.setState({
      searchNearby: !this.state.searchNearby,
    });
  };

  handleStateChange = (event) => {
    const autoSelectedCity = this.state.states.find(
      (state) => state.name === event.target.value
    );
    this.setState({
      state: event.target.value,
      city: autoSelectedCity.cities[0].city,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  getCitiesAsPerStateSelected = () => {
    const view = this.state.states.filter(
      ({ name }) => name === this.state.state
    )[0];
    return (
      <select
        value={this.state.city}
        className="form-control  mr-sm-2"
        name="city"
        onChange={(event) => this.handleChange(event)}
      >
        {view.cities.map((city, index) => (
          <option value={city.city} key={index}>
            {city.name}
          </option>
        ))}
      </select>
    );
  };

  getCraigslistData = () => {
    const { city, search, category, searchNearby, startDate } = this.state;
    this.setState({
      loading: true,
    });
    axios
      .get("/getData/", {
        params: {
          city: city,
          search: search,
          category: category,
          searchNearby: searchNearby,
        },
      })
      .then((response) => {
        const message = response.data.length === 0 ? "No Result Found" : null;
        const endDate = new Date();
        const result = response.data.filter((a) => {
          const date = new Date(a.date);
          return date >= startDate && date <= endDate;
        });

        this.setState({
          data: result,
          loading: false,
          message: message,
        });
      });
  };

  tableToExcel = (table, name) => {
    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var j = 0;
    var tab = document.getElementById(table);
    if (tab == null) {
      return false;
    }
    if (tab.rows.length === 0) {
      return false;
    }

    for (j = 0; j < tab.rows.length; j++) {
      tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      // If Internet Explorer
      var txtArea1;
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      txtArea1.document.execCommand("SaveAs", true, name + ".xlsx");
    } //other browser not tested on IE 11
    else
      try {
        var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
        window.URL = window.URL || window.webkitURL;
        var link = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        if (document.getElementById("caption") != null) {
          a.download = document.getElementById("caption").innerText;
        } else {
          a.download = name;
        }

        a.href = link;

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
      } catch (e) {}
    this.setState({
      data: [],
    });
    return false;
  };

  render() {
    const {
      state,
      city,
      states,
      data,
      categories,
      category,
      search,
      loading,
      message,
      startDate,
    } = this.state;

    return (
      <div className="container">
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label className="mr-sm-2">State</label>
            <select
              className="form-control mr-sm-2"
              value={state}
              name="state"
              onChange={(event) => this.handleStateChange(event)}
            >
              {states.map(({ name }, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="mr-sm-2">City</label>
            {this.getCitiesAsPerStateSelected()}
          </div>
          <div className="form-group">
            <label className="mr-sm-2">Category</label>
            <select
              className="form-control mr-sm-2"
              value={category}
              name="category"
              onChange={(event) => this.handleChange(event)}
            >
              {categories.map(({ name, category }, index) => (
                <option value={category} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              className="form-control mr-sm-2"
              name="search"
              type="text"
              placeholder="Search..."
              autoComplete="off"
              onChange={(event) => this.handleChange(event)}
            />
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label className="mr-sm-2">Search Near by</label>
            <input
              className="form-control mr-sm-2"
              name="searchNearby"
              type="checkbox"
              onChange={this.toggleSearchNearBy}
            />
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label className="mr-sm-2">Start Date</label>
            <div>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <button
              className="btn btn-primary mr-sm-2"
              onClick={() => this.getCraigslistData()}
              disabled={!search}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}{" "}
              Get Data
            </button>
            {data.length > 0 && (
              <button
                className="btn btn-success mr-sm-2"
                onClick={() => this.tableToExcel("table-to-xls", city)}
              >
                Export to Excel
              </button>
            )}
          </div>
        </div>
        <br />
        <div className="row">
          {data.length > 0 ? (
            <table className="table" id="table-to-xls">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>State</th>
                  <th>Job Links</th>
                </tr>
              </thead>
              <tbody>
                {data.map((element, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <th>{state}</th>
                    <td>
                      <a href={element.url} target="_blank">
                        {element.url}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span>{message}</span>
          )}
        </div>
      </div>
    );
  }
}
