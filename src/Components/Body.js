import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
   

const Body = () => {
    //state variable - Super powerful variable. and how we create it.
    const [ListofRestsurants, setListOfRestaurants] = useState(resList);

    //this is normal JS variable and this is how we create it
        // let resList =[
    
        // {
        //   "type": "restaurant",
        //   "data": {
        //     "type": "F",
        //     "id": "42639",
        //     "name": "Prince Ki Rasoi",
        //     "uuid": "17f62974-68e9-4943-9b77-e4ec218d231c",
        //     "city": "2",
        //     "area": "Sector 43",
        //     "totalRatingsString": "500+ ratings",
        //     "cloudinaryImageId": "dbmzwtjiygui5nbk3ggu",
        //     "cuisines": [
        //       "North Indian",
        //       "Chinese",
             
        //     ],
        //     "tags": [
              
        //     ],
        //     "costForTwo": 30000,
        //     "costForTwoString": "₹300 FOR TWO",
        //     "deliveryTime": 32,
        //     "minDeliveryTime": 30,
        //     "maxDeliveryTime": 40,
        //     "slaString": "30-40 MINS",
        //     "lastMileTravel": 3.5999999046325684,
        //     "slugs": {
        //       "restaurant": "prince-ki-rasoi-sector-43-sohna-road",
        //       "city": "gurgaon"
        //     },
        //     "cityState": "2",
        //     "address": "Plot No.192,Sector 43,Near Paras Hospital,Haryana Colony",
        //     "locality": "Haryana Colony",
        //     "parentId": 13952,
        //     "unserviceable": false,
        //     "veg": false,
        //     "select": false,
        //     "favorite": false,
        //     "tradeCampaignHeaders": [
              
        //     ],
        //     "aggregatedDiscountInfo": {
        //       "header": "50% off",
        //       "shortDescriptionList": [
        //         {
        //           "meta": "50% off on all orders",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         },
        //         {
        //           "meta": "FREE DELIVERY",
        //           "discountType": "FREE_DELIVERY",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "descriptionList": [
        //         {
        //           "meta": "50% off on all orders",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         },
        //         {
        //           "meta": "FREE DELIVERY",
        //           "discountType": "FREE_DELIVERY",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "subHeader": "",
        //       "headerType": 0,
        //       "superFreedel": ""
        //     },
        //     "aggregatedDiscountInfoV2": {
        //       "header": "50% OFF",
        //       "shortDescriptionList": [
        //         {
        //           "meta": "Free Delivery",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "descriptionList": [
        //         {
        //           "meta": "50% off on all orders",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         },
        //         {
        //           "meta": "FREE DELIVERY",
        //           "discountType": "FREE_DELIVERY",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "subHeader": "",
        //       "headerType": 0,
        //       "superFreedel": ""
        //     },
        //     "ribbon": [
        //       {
        //         "type": "PROMOTED"
        //       }
        //     ],
        //     "chain": [
              
        //     ],
        //     "feeDetails": {
        //       "fees": [
                
        //       ],
        //       "totalFees": 0,
        //       "message": "",
        //       "title": "",
        //       "amount": "",
        //       "icon": ""
        //     },
        //     "availability": {
        //       "opened": true,
        //       "nextOpenMessage": "",
        //       "nextCloseMessage": ""
        //     },
        //     "longDistanceEnabled": 0,
        //     "rainMode": "NONE",
        //     "thirdPartyAddress": false,
        //     "thirdPartyVendor": "",
        //     "adTrackingID": "cid=5673586~p=1~eid=00000185-8dcd-62d0-13d5-dd8f0035016d",
        //     "badges": {
        //       "imageBased": [
                
        //       ],
        //       "textBased": [
                
        //       ],
        //       "textExtendedBadges": [
                
        //       ]
        //     },
        //     "lastMileTravelString": "3.5 kms",
        //     "hasSurge": false,
        //     "sla": {
        //       "restaurantId": "42639",
        //       "deliveryTime": 32,
        //       "minDeliveryTime": 30,
        //       "maxDeliveryTime": 40,
        //       "lastMileTravel": 3.5999999046325684,
        //       "lastMileDistance": 0,
        //       "serviceability": "SERVICEABLE",
        //       "rainMode": "NONE",
        //       "longDistance": "NOT_LONG_DISTANCE",
        //       "preferentialService": false,
        //       "iconType": "EMPTY"
        //     },
        //     "promoted": true,
        //     "avgRating": "3.8",
        //     "totalRatings": 500,
        //     "new": false
        //   },
        //   "subtype": "basic"
        // },
        // {
        //   "type": "restaurant",
        //   "data": {
        //     "type": "F",
        //     "id": "11670",
        //     "name": "Pizza Hut",
        //     "uuid": "3b437b1b-1069-4705-9644-3769d030e8f2",
        //     "city": "2",
        //     "area": "Sector 39",
        //     "totalRatingsString": "1000+ ratings",
        //     "cloudinaryImageId": "du85rw4tipurzzvf6fzv",
        //     "cuisines": [
        //       "Pizzas"
        //     ],
        //     "tags": [
              
        //     ],
        //     "costForTwo": 35000,
        //     "costForTwoString": "₹350 FOR TWO",
        //     "deliveryTime": 37,
        //     "minDeliveryTime": 37,
        //     "maxDeliveryTime": 37,
        //     "slaString": "37 MINS",
        //     "lastMileTravel": 1.7999999523162842,
        //     "slugs": {
        //       "restaurant": "pizza-hut-sector-39-huda-city",
        //       "city": "gurgaon"
        //     },
        //     "cityState": "2",
        //     "address": "Ground Floor, Tower C, Unitech Cyber Park, Sec 39, Gurgaon",
        //     "locality": "Unitech Cyber Park",
        //     "parentId": 721,
        //     "unserviceable": false,
        //     "veg": false,
        //     "select": false,
        //     "favorite": false,
        //     "tradeCampaignHeaders": [
              
        //     ],
        //     "aggregatedDiscountInfo": {
        //       "header": "50% off",
        //       "shortDescriptionList": [
        //         {
        //           "meta": "50% off | Use WELCOME50",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "descriptionList": [
        //         {
        //           "meta": "50% off up to ₹100 | Use code WELCOME50",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "subHeader": "",
        //       "headerType": 0,
        //       "superFreedel": ""
        //     },
        //     "aggregatedDiscountInfoV2": {
        //       "header": "50% OFF",
        //       "shortDescriptionList": [
        //         {
        //           "meta": "Use WELCOME50",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "descriptionList": [
        //         {
        //           "meta": "50% off up to ₹100 | Use code WELCOME50",
        //           "discountType": "Percentage",
        //           "operationType": "RESTAURANT"
        //         }
        //       ],
        //       "subHeader": "",
        //       "headerType": 0,
        //       "superFreedel": ""
        //     },
        //     "chain": [
              
        //     ],
        //     "feeDetails": {
        //       "fees": [
                
        //       ],
        //       "totalFees": 0,
        //       "message": "",
        //       "title": "",
        //       "amount": "",
        //       "icon": ""
        //     },
        //     "availability": {
        //       "opened": true,
        //       "nextOpenMessage": "",
        //       "nextCloseMessage": ""
        //     },
        //     "longDistanceEnabled": 0,
        //     "rainMode": "NONE",
        //     "thirdPartyAddress": false,
        //     "thirdPartyVendor": "",
        //     "adTrackingID": "",
        //     "badges": {
        //       "imageBased": [
                
        //       ],
        //       "textBased": [
                
        //       ],
        //       "textExtendedBadges": [
                
        //       ]
        //     },
        //     "lastMileTravelString": "1.7 kms",
        //     "hasSurge": false,
        //     "sla": {
        //       "restaurantId": "11670",
        //       "deliveryTime": 37,
        //       "minDeliveryTime": 37,
        //       "maxDeliveryTime": 37,
        //       "lastMileTravel": 1.7999999523162842,
        //       "lastMileDistance": 0,
        //       "serviceability": "SERVICEABLE",
        //       "rainMode": "NONE",
        //       "longDistance": "NOT_LONG_DISTANCE",
        //       "preferentialService": false,
        //       "iconType": "EMPTY"
        //     },
        //     "promoted": false,
        //     "avgRating": "3.7",
        //     "totalRatings": 1000,
        //     "new": false
        //   },
        //   "subtype": "basic"
        // },
        // {
        //     "type": "restaurant",
        //     "data": {
        //       "type": "F",
        //       "id": "8138",
        //       "name": "Chaayos Chai",
        //       "uuid": "58fa8476-9253-4ed4-9040-630e27dcc64d",
        //       "city": "2",
        //       "area": "Sector 28",
        //       "totalRatingsString": "500+ ratings",
        //       "cloudinaryImageId": "cg6veryqyyag02whplps",
        //       "cuisines": [
        //         "Bakery",
        //         "Beverages",
               
        //       ],
        //       "tags": [
                
        //       ],
        //       "costForTwo": 25000,
        //       "costForTwoString": "₹250 FOR TWO",
        //       "deliveryTime": 31,
        //       "minDeliveryTime": 30,
        //       "maxDeliveryTime": 40,
        //       "slaString": "30-40 MINS",
        //       "lastMileTravel": 3.5,
        //       "slugs": {
        //         "restaurant": "chaayos-dlf-phase-4-dlf-phase-4",
        //         "city": "gurgaon"
        //       },
        //       "cityState": "2",
        //       "address": "Ground floor Near Bike stand Galleria",
        //       "locality": "Galleria Market",
        //       "parentId": 281782,
        //       "unserviceable": false,
        //       "veg": false,
        //       "select": false,
        //       "favorite": false,
        //       "tradeCampaignHeaders": [
                
        //       ],
        //       "aggregatedDiscountInfo": {
        //         "header": "50% off",
        //         "shortDescriptionList": [
        //           {
        //             "meta": "50% off | Use WELCOME50",
        //             "discountType": "Percentage",
        //             "operationType": "RESTAURANT"
        //           }
        //         ],
        //         "descriptionList": [
        //           {
        //             "meta": "50% off up to ₹100 | Use code WELCOME50",
        //             "discountType": "Percentage",
        //             "operationType": "RESTAURANT"
        //           }
        //         ],
        //         "subHeader": "",
        //         "headerType": 0,
        //         "superFreedel": ""
        //       },
        //       "aggregatedDiscountInfoV2": {
        //         "header": "50% OFF",
        //         "shortDescriptionList": [
        //           {
        //             "meta": "Use WELCOME50",
        //             "discountType": "Percentage",
        //             "operationType": "RESTAURANT"
        //           }
        //         ],
        //         "descriptionList": [
        //           {
        //             "meta": "50% off up to ₹100 | Use code WELCOME50",
        //             "discountType": "Percentage",
        //             "operationType": "RESTAURANT"
        //           }
        //         ],
        //         "subHeader": "",
        //         "headerType": 0,
        //         "superFreedel": ""
        //       },
        //       "ribbon": [
        //         {
        //           "type": "PROMOTED"
        //         }
        //       ],
        //       "chain": [
                
        //       ],
        //       "feeDetails": {
        //         "fees": [
                  
        //         ],
        //         "totalFees": 0,
        //         "message": "",
        //         "title": "",
        //         "amount": "",
        //         "icon": ""
        //       },
        //       "availability": {
        //         "opened": true,
        //         "nextOpenMessage": "",
        //         "nextCloseMessage": ""
        //       },
        //       "longDistanceEnabled": 0,
        //       "rainMode": "NONE",
        //       "thirdPartyAddress": false,
        //       "thirdPartyVendor": "",
        //       "adTrackingID": "cid=5698882~p=4~eid=00000185-8dcd-62d0-13d5-dd9000350433",
        //       "badges": {
        //         "imageBased": [
                  
        //         ],
        //         "textBased": [
                  
        //         ],
        //         "textExtendedBadges": [
                  
        //         ]
        //       },
        //       "lastMileTravelString": "3.5 kms",
        //       "hasSurge": false,
        //       "sla": {
        //         "restaurantId": "8138",
        //         "deliveryTime": 31,
        //         "minDeliveryTime": 30,
        //         "maxDeliveryTime": 40,
        //         "lastMileTravel": 3.5,
        //         "lastMileDistance": 0,
        //         "serviceability": "SERVICEABLE",
        //         "rainMode": "NONE",
        //         "longDistance": "NOT_LONG_DISTANCE",
        //         "preferentialService": false,
        //         "iconType": "EMPTY"
        //       },
        //       "promoted": true,
        //       "avgRating": "4.3",
        //       "totalRatings": 500,
        //       "new": false
        //     },
        //     "subtype": "basic"
        // },
        
        //    ];
    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() =>{
                      const filteredList = ListofRestsurants.filter(
                            (res)=>res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }} 
                >
                    Top Rated Restaurent
                    </button>
            </div>
            <div className="res-container">
                {ListofRestsurants.map((restaurant) =>(
                    <RestaurentCard key={restaurant.data.id} resData={restaurant} />
                ))}                               
            </div>
        </div>        
    );
};
export default Body;