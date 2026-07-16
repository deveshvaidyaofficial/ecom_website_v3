
import './mainmenu.css';
const data = {
  men: {
    columns: [
      {
        heading: "FEATURED",
        links: [
          {name : "New Arrivals"},
          {name : "Sportswear"},
          {name : "Summer Collection"},
          {name : "About Adidas", path: "/about-adidas"}
        ]
      },
      {
        heading: "FOOTWEAR",
        links: [
          "Running",
          "Walking",
          "Sneakers",
          "Slides",
          "Sandals",
          "Gym & Training",
          "Originals",
          "Football",
          "Slippers - Flip Flops",
          "Cricket",
          "Basketball",
          "Tennis",
          "Skateboarding",
          "Swim",
          "Hiking & Outdoor"
        ]
      },
      {
        heading: "CLOTHING",
        links: [
          "T-Shirts",
          "Shorts",
          "Joggers",
          "Hoodies"
        ]
      },
      {
        heading: "ACCESSORIES",
        links: [
          "Underwear",
          "Socks",
          "Caps & Headwear",
          "All Bags",
          "Gym & Training Bags",
          "Backpacks",
          "Gloves",
          "Balls"
        ]
      },
      {
        heading: "SPORTS",
        links: [
          "Football",
          "Cricket",
          "Basketball",
          "Tennis"
        ]
      }
    ]
  },

  women: {
    columns: [
      {
        heading: "FEATURED",
        links: [
          "New Arrivals",
          "Training",
          "Originals",
          "Essentials"
        ]
      },
      {
        heading: "FOOTWEAR",
        links: [
          "Running",
          "Walking",
          "Sneakers",
          "Slides",
          "Sandals",
          "Gym & Training",
          "Originals",
          "Football",
          "Slippers - Flip Flops",
          "Cricket",
          "Basketball",
          "Tennis",
          "Skateboarding",
          "Swim",
          "Hiking & Outdoor"
        ]
      },
      {
        heading: "CLOTHING",
        links: [
          "T-Shirts",
          "Shorts",
          "Joggers",
          "Hoodies"
        ]
      },
      {
        heading: "ACCESSORIES",
        links: [
          "Underwear",
          "Socks",
          "Caps & Headwear",
          "All Bags",
          "Gym & Training Bags",
          "Backpacks",
          "Gloves",
          "Balls"
        ]
      },
      {
        heading: "SPORTS",
        links: [
          "Football",
          "Cricket",
          "Basketball",
          "Tennis"
        ]
      }
    ]
  },

  kids: {
    columns: [
      {
        heading: "FEATURED",
        links: [
          "Boys",
          "Girls",
          "School",
          "Baby"
        ]
      },
      {
        heading: "FOOTWEAR",
        links: [
          "Running",
          "Walking",
          "Sneakers",
          "Slides",
          "Sandals",
          "Gym & Training",
          "Originals",
          "Football",
          "Slippers - Flip Flops",
          "Cricket",
          "Basketball",
          "Tennis",
          "Skateboarding",
          "Swim",
          "Hiking & Outdoor"
        ]
      },
      {
        heading: "CLOTHING",
        links: [
          "T-Shirts",
          "Shorts",
          "Joggers",
          "Hoodies"
        ]
      },
      {
        heading: "ACCESSORIES",
        links: [
          "Underwear",
          "Socks",
          "Caps & Headwear",
          "All Bags",
          "Gym & Training Bags",
          "Backpacks",
          "Gloves",
          "Balls"
        ]
      },
      {
        heading: "SPORTS",
        links: [
          "Football",
          "Cricket",
          "Basketball",
          "Tennis"
        ]
      }
    ]
  },

  sports: {
    columns: [
      {
        heading: "SPORTS",
        links: [
          "Running",
          "Football",
          "Cricket",
          "Training",
          "Basketball",
          "Tennis",
          "Badminton",
          "Swimming",
          "Hiking & Outdoor",
          "Golf",
          "Cycling",
          "Yoga"
        ]
      },
      {
        heading: "SHOP BY PRODUCT",
        links: [
          "Shoes",
          "Clothing",
          "Accessories",
          "Sports Bras",
          "Tracksuits",
          "Jerseys",
          "Shorts",
          "Socks"
        ]
      },
      {
        heading: "RUNNING",
        links: [
          "Ultraboost",
          "Adizero",
          "Supernova",
          "Duramo",
          "Adistar",
          "Adidas Runners"
        ]
      },
      {
        heading: "TEAM SPORTS",
        links: [
          "Football Boots",
          "Cricket Shoes",
          "Basketball Shoes",
          "Training Shoes",
          "Balls",
          "Goalkeeper Gloves"
        ]
      },
      {
        heading: "FEATURED",
        links: [
          "New Sportswear",
          "Best Sellers",
          "Latest Collections",
          "Performance Gear"
        ]
      }
    ]
  },

  lifestyle: {
    columns: [
      {
        heading: "WHAT'S NEW?",
        links: [
          "adiClub",
          "Terrex",
          "T-Toe Collection",
          "Matching Sets",
          "Hyperboost"
        ]
      },
      {
        heading: "ORIGINALS",
        links: [
          "Shoes",
          "Clothing",
          "Accessories",
          "Firebird",
          "Spezial",
          "Samba",
          "Gazelle",
          "SL72",
          "Superstar",
          "Campus",
          "Forum"
        ]
      },
      {
        heading: "SPORTSWEAR",
        links: [
          "Shoes",
          "Clothing",
          "Accessories",
          "Z.N.E",
          "House of Tiro",
          "Advantage",
          "Ultraboost DNA",
          "Adilette"
        ]
      },
      {
        heading: "RUNNING",
        links: [
          "Shoes",
          "Clothing",
          "Accessories",
          "Everyday Running",
          "Racing",
          "Ultraboost",
          "Supernova",
          "Adizero",
          "Duramo",
          "Adidas Runners"
        ]
      },
      {
        heading: "COLLABORATIONS",
        links: [
          "SPZL",
          "Stella McCartney",
          "Y-3",
          "Liverpool FC 25/26 Kits",
          "Motorsport"
        ]
      }
    ]
  },

  outlet: {
    columns: [
      {
        heading: "SHOP BY CATEGORY",
        links: [
          "Men",
          "Women",
          "Kids",
          "Shoes",
          "Clothing",
          "Accessories"
        ]
      },
      {
        heading: "MEN",
        links: [
          "Running",
          "Originals",
          "Training",
          "Football",
          "Slides",
          "Sneakers",
          "Jackets"
        ]
      },
      {
        heading: "WOMEN",
        links: [
          "Running",
          "Sportswear",
          "Originals",
          "Training",
          "Tights",
          "Hoodies",
          "Sneakers"
        ]
      },
      {
        heading: "KIDS",
        links: [
          "Boys",
          "Girls",
          "School Shoes",
          "Sports Shoes",
          "T-Shirts",
          "Tracksuits"
        ]
      }
    ]
  },

    offers: {
    columns: [  
    {
        heading: "OFFERS",
        links: [
          "30% Off",
          "40% Off",
          "50% Off",
          "Clearance",
          "Last Chance",
          "Best Deals"
        ]
      }
    ]
  },
}
export default function MegaMenu({type}){const menu=data[type]; if(!menu)return null; return <div className='mega-menu'><div className='mega-content'>{menu.columns.map(c=><div className='column' key={c.heading}><h2>{c.heading}</h2>{c.links.map(l=><p key={l}>{l}</p>)}</div>)}</div></div>}
