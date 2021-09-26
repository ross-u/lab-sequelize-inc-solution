const companies = [
  { company_name: "Microsoft", homepage_url : "http://www.microsoft.com", twitter_username : "Microsoft", category : "software", number_of_employees : 181000, founded_year : 1974 },
  { company_name: "Apple", homepage_url : "http://www.apple.com", twitter_username : "Apple", category : "hardware", number_of_employees : 147000, founded_year : 1976 },
  { company_name: "Google", homepage_url : "http://google.com", twitter_username : "Google", category : "software", number_of_employees : 135000, founded_year : 1998 },
  { company_name: "Facebook", homepage_url : "http://facebook.com", twitter_username : "Facebook", category : "social", number_of_employees : 58604, founded_year : 2004 },
  { company_name: "Twitter", homepage_url : "http://twitter.com", twitter_username : "Twitter", category : "social", number_of_employees : 5500, founded_year : 2006 },
];

const addresses = [
  {
    company_name: "Facebook",
    street: "1 Hacker Way",
    city: "Menlo Park",
    state: "California",
    country: "USA",
    image: "https://i.imgur.com/azxVWEL.png",
  },
  {
    company_name: "Twitter",
    street: "1355 Market Street Suite 900",
    city: "San Francisco",
    state: "California",
    country: "USA",
    image: "https://i.imgur.com/EMpPj9X.jpg",
  },
  { company_name: "Google",
    street: "1600 Amphitheatre Parkway",
    city: "Mountain View",
    state: "California",    
    country: "USA",
    image: "blob:https://imgur.com/4aabf24e-3ce7-4d4f-aa93-0aebe021d6c4",
  },
  { company_name: "Apple",
    street: "1 Apple Park Way",
    city: "Cupertino",
    state: "California",    
    country: "USA",
    image: "https://i.imgur.com/z5RFDxq.jpg",
  },
  { company_name: "Microsoft",
    street: "One Microsoft Way",
    city: "Redmond",
    state: "California",    
    country: "Washington",
    image: "https://i.imgur.com/VSZU6NK.jpg",
  }
];

const employees = [
  {
    first_name: "Ana",
    last_name: "Phillips",
    date_of_birth: "Thu Mar 19 1970 05:40:43 GMT+0100 (Central European Standard Time)",
    email: "anaphillips@mail.com",
    salary: 3372.19,
    department: "hr",
    "rank": "employee"
  },
  {
    first_name: "Perri",
    last_name: "Franks",
    date_of_birth: "Sat Jul 12 1980 13:34:23 GMT+0200 (Central European Summer Time)",
    email: "perrifranks@mail.com",
    salary: 5275.12,
    department: "hr",
    "rank": "executive"
  },
  {
    first_name: "Benjamin",
    last_name: "Kelley",
    date_of_birth: "Sun Sep 26 1982 14:04:59 GMT+0100 (Central European Standard Time)",
    email: "benkelley@mail.com",
    salary: 5695.07,
    department: "other",
    "rank": "employee"
  },
  {
    first_name: "Alberta",
    last_name: "Franklin",
    date_of_birth: "Sun Dec 31 1978 14:33:06 GMT+0100 (Central European Standard Time)",
    email: "albertafranklin@mail.com",
    salary: 5774.05,
    department: "it",
    "rank": "employee"
  },
  {
    first_name: "Elise",
    last_name: "Perry",
    date_of_birth: "Fri May 09 1975 04:01:10 GMT+0200 (Central European Summer Time)",
    email: "eliseperry@mail.com",
    salary: 6410.4,
    department: "marketing",
    "rank": "contractor"
  },
  {
    first_name: "Doris",
    last_name: "Munoz",
    date_of_birth: "Sun Jun 29 1980 08:07:14 GMT+0200 (Central European Summer Time)",
    email: "dorismunoz@mail.com",
    salary: 6965.82,
    department: "it",
    "rank": "employee"
  },
  {
    first_name: "Ryan",
    last_name: "Eaton",
    date_of_birth: "Wed Apr 29 1981 21:23:30 GMT+0200 (Central European Summer Time)",
    email: "ryaneaton@mail.com",
    salary: 8565.76,
    department: "it",
    "rank": "supervisor"
  },
  {
    first_name: "Brian",
    last_name: "Baxter",
    date_of_birth: "Sat Aug 07 1999 06:36:14 GMT+0200 (Central European Summer Time)",
    email: "castillobaxter@mail.com",
    salary: 5748.89,
    department: "it",
    "rank": "employee"
  },
  {
    first_name: "Amber",
    last_name: "Charles",
    date_of_birth: "Fri May 08 1981 05:23:56 GMT+0200 (Central European Summer Time)",
    email: "ambercharles@mail.com",
    salary: 3358.36,
    department: "it",
    "rank": "employee"
  },
  {
    first_name: "Tom",
    last_name: "Hodges",
    date_of_birth: "Sun May 03 1987 13:29:41 GMT+0200 (Central European Summer Time)",
    email: "tomh@mail.com",
    salary: 7345.2,
    department: "other",
    "rank": "contractor"
  },
  {
    first_name: "Sherry",
    last_name: "Barr",
    date_of_birth: "Sat Jul 25 1970 22:37:10 GMT+0100 (Central European Standard Time)",
    email: "sherrybarr@mail.com",
    salary: 8330.47,
    department: "other",
    "rank": "supervisor"
  },
  {
    first_name: "Buchanan",
    last_name: "Raymond",
    date_of_birth: "Sat Jan 21 1995 22:11:07 GMT+0100 (Central European Standard Time)",
    email: "buchananraymond@mail.com",
    salary: 5277.13,
    department: "other",
    "rank": "supervisor"
  },
  {
    first_name: "Herman",
    last_name: "Miller",
    date_of_birth: "Wed May 18 1994 18:21:57 GMT+0200 (Central European Summer Time)",
    email: "francomiller@mail.com",
    salary: 2521.87,
    department: "other",
    "rank": "employee"
  },
  {
    first_name: "Stephanie",
    last_name: "Parrish",
    date_of_birth: "Sun Oct 02 1983 22:07:25 GMT+0100 (Central European Standard Time)",
    email: "stephanieparrish@mail.com",
    salary: 8936.74,
    department: "it",
    "rank": "contractor"
  },
  {
    first_name: "Adeline",
    last_name: "Edwards",
    date_of_birth: "Mon Apr 09 1984 04:14:24 GMT+0200 (Central European Summer Time)",
    email: "adelineedwards@mail.com",
    salary: 7962.68,
    department: "it",
    "rank": "supervisor"
  },
]



module.exports = { companies, addresses, employees };

