const accessCenters = [
  [
    {
      PROGRAM_NAME: "Exodus Mental Health",
      SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
      OPERATOR: "Exodus Mental Health",
      NEIGHBORHOOD: "Montecito Heights",
      ADDRESS: "1920 Marengo St LA",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(213) 276-4600",
      HOURS_OF_OPERATION: "N/A",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "Annenberg Access Center",
      SERVICE_PLANNING_AREA: "SPA 5 - West LA",
      OPERATOR: "The People Concern",
      NEIGHBORHOOD: "Santa Monica",
      ADDRESS: "503 Olympic Blvd, Santa Monica, CA 90401",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 450-4050",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "St. Joseph Homeless Service Center",
      SERVICE_PLANNING_AREA: "SPA 5 - West LA",
      OPERATOR: "St. Joseph Center",
      NEIGHBORHOOD: "Venice",
      ADDRESS: "404 Lincoln Blvd, Los Angeles, CA 90291",
      WEBSITE: "https://stjosephctr.org/if-you-need-help/",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Friday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "Safe Place for Youth",
      SERVICE_PLANNING_AREA: "SPA 5 - West LA",
      OPERATOR: "Safe Place for Youth",
      NEIGHBORHOOD: "Venice",
      ADDRESS: "2469 Lincoln Blvd, Los Angeles, CA 90291",
      WEBSITE: "http://www.safeplaceforyouth.org/youth",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 902-2283",
      HOURS_OF_OPERATION: "Tuesday, Wednesday, Thursday: 1:00pm-5:00pm | Monday and Friday by appointment",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Youth",
    },
    {
      PROGRAM_NAME: "VA Greater Los Angeles Healthcare System",
      SERVICE_PLANNING_AREA: "SPA 5 - West LA",
      OPERATOR: "U.S Department of Veteran Affairs ",
      NEIGHBORHOOD: "Sawtelle",
      ADDRESS: "West Los Angeles Medical Center Building 402 11301 Wilshire Blvd, Los Angeles, CA 90073",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 478-3711",
      HOURS_OF_OPERATION: "Open 24 Hours",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Veterans",
    },
    {
      PROGRAM_NAME: "SSG HOPICS",
      SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
      OPERATOR: "SSG HOPICS",
      NEIGHBORHOOD: "South Park",
      ADDRESS: "5711 S Broadway, Los Angeles 90037",
      WEBSITE: "hopics.org",
      EMAIL: "N/A",
      PHONE_NUMBER: "(323) 948-0444",
      HOURS_OF_OPERATION: "Monday-Friday: 8:30am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "Ruth's Place ",
      SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
      OPERATOR: "CRCD",
      NEIGHBORHOOD: "South Park",
      ADDRESS: "4920 S Avalon Blvd, Los Angeles 90011",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(323) 432-2440",
      HOURS_OF_OPERATION: "M-F 8:30am-5pm",
      HOURS_OF_OPERATION: "Monday-Friday: 8:30am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "Harbor Interfaith Services",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "HIS",
      NEIGHBORHOOD: "San Pedro",
      ADDRESS: "599 W. 9th St, San Pedro, CA 90731",
      WEBSITE: "http://www.harborinterfaith.org/",
      EMAIL: "N/A",
      PHONE_NUMBER: "(424) 276-3602",
      HOURS_OF_OPERATION: "Monday-Friday: 8:00am-12:30pm & 1:30pm-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adult and Youth",
    },
    {
      PROGRAM_NAME: "MHA Operation Healthy Homecoming",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "MHA",
      NEIGHBORHOOD: "San Pedro",
      ADDRESS: "N/A",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(424) 570-0241",
      HOURS_OF_OPERATION: "N/A",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Veterans",
    },
    {
      PROGRAM_NAME: "St. Margaret’s Center",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "St. Margaret’s Center",
      NEIGHBORHOOD: "Lennox",
      ADDRESS: "10217 S. Inglewood Ave, Lennox, CA 90304",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 672-2208",
      HOURS_OF_OPERATION: "Monday-Friday: 8:30am-12:00pm & 1:00pm - 5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adult and Youth",
    },
    {
      PROGRAM_NAME: "US Veterans Initiative (Inglewood)",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "U.S. Vets of America",
      NEIGHBORHOOD: "Inglewood",
      ADDRESS: "733 Hindry Ave, Inglewood, CA 90301 ",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 863-5837",
      HOURS_OF_OPERATION: "Monday-Thursday: 8:30am-3:00pm & Friday: 8:30am-12:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Veterans",
    },
    {
      PROGRAM_NAME: "US Veterans Initiative (Long Beach)",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "U.S. Vets of America",
      NEIGHBORHOOD: "Long Beach",
      ADDRESS: "2001 River Ave, Long Beach, CA  90810",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(562) 200-7300",
      HOURS_OF_OPERATION: "Monday-Friday: 8:30am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Veterans",
    },
    {
      PROGRAM_NAME: "The Good Seed",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "The Good Seed",
      NEIGHBORHOOD: "Long Beach",
      ADDRESS: "1230 Pine Ave, Long Beach, CA  90813",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(855) 968-8452",
      HOURS_OF_OPERATION: "Monday-Sunday: 9:30am - 6:30pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "St. Margaret’s Center",
      SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
      OPERATOR: "St. Margaret’s Center",
      NEIGHBORHOOD: "Lennox",
      ADDRESS: "10217 S. Inglewood Ave, Lennox, CA 90304",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(310) 672-2208",
      HOURS_OF_OPERATION: "Monday-Friday: 8:30am-12:00pm & 1:00pm-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "PATH",
      SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
      OPERATOR: "PATH",
      NEIGHBORHOOD: "N/A",
      ADDRESS: "N/A",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(323) 260-8035",
      HOURS_OF_OPERATION: "N/A",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adult",
    },
    {
      PROGRAM_NAME: "Jovenes, Inc.",
      SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
      OPERATOR: "Jovenes, Inc.",
      NEIGHBORHOOD: "Downtown Los Angeles",
      ADDRESS: "1208 Pleasant Ave, Los Angeles, CA 90033",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(323) 260-8035",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Youth",
    },
    {
      PROGRAM_NAME: "Interim Family Matcher",
      SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
      OPERATOR: "The Whole Child",
      NEIGHBORHOOD: "Whittier",
      ADDRESS: "10155 Colima Rd., Whittier, CA 90603",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(323) 260-8035",
      HOURS_OF_OPERATION: "Monday-Thursday: 8:00am-7:00pm & Friday: 8:30:am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Family",
    },
    {
      PROGRAM_NAME: "Valley Oasis",
      SERVICE_PLANNING_AREA: "SPA 1 - Antelope Valley",
      OPERATOR: "Valley Oasis",
      NEIGHBORHOOD: "Palmdale",
      ADDRESS: "3030 E Palmdale Blvd, Palmdale, CA 93550",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(661) 945-6736",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth, Family, Adult",
    },
    {
      PROGRAM_NAME: "Mental Health America",
      SERVICE_PLANNING_AREA: "SPA 1 - Antelope Valley",
      OPERATOR: "Mental Health America",
      NEIGHBORHOOD: "Lancaster",
      ADDRESS: "506 W Jackman St, Lancaster, CA 93534",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(661) 726-2850",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth, Family, Adult",
    },
    {
      PROGRAM_NAME: "Union Station Homeless Services",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Union Station Homeless Services",
      NEIGHBORHOOD: "Pasadena",
      ADDRESS: "412 S. Raymond Ave Pasadena, CA 91104",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 240-4500",
      HOURS_OF_OPERATION: "Monday-Friday: 7:00am-1:30pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adults , Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "Arcadia Mental Health",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Arcadia Mental Health",
      NEIGHBORHOOD: "Arcadia",
      ADDRESS: "330 E. Love Oak Ave. Arcadia, CA 91006",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 821-5858",
      HOURS_OF_OPERATION: "Wednesday: 8:00am-5:30pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "Volunteers of America- El Monte",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Volunteers of America- El Monte",
      NEIGHBORHOOD: "El Monte",
      ADDRESS: "4501 Santa Anita Ave El Monte, CA 91737",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 442-4357",
      HOURS_OF_OPERATION: "M-F 9:00 am -5:00 pm",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "Foothill Unity Center",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Foothill Unity Center",
      NEIGHBORHOOD: "Monrovia",
      ADDRESS: "415 W. Chestnut Ave Monrovia, CA 91016",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 358-3486",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "No",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "Friends in Deed",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Friends in Deed",
      NEIGHBORHOOD: "Pasadena",
      ADDRESS: "444 E. Washington Blvd. Pasadena, CA 91104",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 797-2402",
      HOURS_OF_OPERATION: "Monday-Wednesday: 9:00am-5:00pm & Thursday: 9:00am-2:00pm",
      WALK_IN: "No",
      ELIGIBILITY_REQUIREMENTS: "Adults - Females Only",
    },
    {
      PROGRAM_NAME: "Volunteers of America- Pomona",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Volunteers of America- Pomona",
      NEIGHBORHOOD: "Pomona",
      ADDRESS: "2040 N. Garey Ave. Pomona, CA 91767",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(909) 593-4796",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Adults",
    },
    {
      PROGRAM_NAME: "HOPE Center",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Pacific Clinics HOPE Center",
      NEIGHBORHOOD: "Irindale",
      ADDRESS: "13001 Ramona Blvd Suite I. Irwindale, CA 91706",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 337-3828",
      HOURS_OF_OPERATION: "Monday, Tuesday, Thursday: 2:00pm-4:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "David and Margaret ",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "David and Margaret ",
      NEIGHBORHOOD: "La Verne",
      ADDRESS: "1350 3rd St. La Verne, CA 91750",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(909) 267-5961",
      HOURS_OF_OPERATION: "Monday: 9:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "Hathaway-Sycamore",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Hathaway-Sycamore",
      NEIGHBORHOOD: "Pasadena",
      ADDRESS: "851 N. Oakland Ave. Pasadena, CA 91104",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 685-2197 x 7856",
      HOURS_OF_OPERATION: "Monday-Friday: 9:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "Hillsides Youth Moving On",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "Hillsides YMO",
      NEIGHBORHOOD: "Pasadena",
      ADDRESS: "456 E. Orange Grove Blvd. Pasadena, CA 91104",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(626) 765-6010",
      HOURS_OF_OPERATION: "Monday, Friday: 9:00am-5:00pm & Tuesday, Thursday: 11:30am-8:00pm & Wednesday: 11:30am-5:30pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "DCFS- Pomona",
      SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
      OPERATOR: "DCFS- Pomona",
      NEIGHBORHOOD: "Pomona",
      ADDRESS: "801 Corporate Center Drive. Pomona, CA 91768",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "(909) 802-1300",
      HOURS_OF_OPERATION: "Thursday 9:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "SSG HOPICS- SINGLE ADULTS ",
      SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
      OPERATOR: "SSG HOPICS",
      NEIGHBORHOOD: "South Park",
      ADDRESS: "5715 S Broadway Los Angeles",
      WEBSITE: "ssghopics.org",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "SSG HOPICS - FSC",
      SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
      OPERATOR: "SSG HOPICS",
      NEIGHBORHOOD: "South Park",
      ADDRESS: "5849 S Crocker St Los Angeles ",
      WEBSITE: "ssghopics.org",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "SSG HOPICS- Access Center",
      SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
      OPERATOR: "SSG HOPICS",
      NEIGHBORHOOD: "Lynwood",
      ADDRESS: "11301 Bullis Rd Lynwood Ca 90262",
      WEBSITE: "ssghopics.org",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "N/A",
      ELIGIBILITY_REQUIREMENTS: "N/A",
    },
    {
      PROGRAM_NAME: "People Concern",
      SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
      OPERATOR: "People Concern",
      NEIGHBORHOOD: "Downtown Los Angeles",
      ADDRESS: "527 Crocker Street, Los Angeles",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth, Family, Adult",
    },
    {
      PROGRAM_NAME: "LALGBT Center",
      SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
      OPERATOR: "LALGBT Center",
      NEIGHBORHOOD: "Hollywood",
      ADDRESS: "1220 N Highland Ave Los Angeles",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "Jovenes, Inc.",
      SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
      OPERATOR: "Jovenes, Inc.",
      NEIGHBORHOOD: "Downtown Los Angeles",
      ADDRESS: "1208 Pleasant Ave, Los Angeles, CA 90033",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth",
    },
    {
      PROGRAM_NAME: "PATH",
      SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
      OPERATOR: "PATH",
      NEIGHBORHOOD: "Rampart Village",
      ADDRESS: "340 N Madison Ave, Los Angeles",
      WEBSITE: "N/A",
      EMAIL: "N/A",
      PHONE_NUMBER: "N/A",
      HOURS_OF_OPERATION: "Monday-Sunday: 8:00am-5:00pm",
      WALK_IN: "Yes",
      ELIGIBILITY_REQUIREMENTS: "Transitioning Age Youth, Family, Adult",
    }
  ]
]