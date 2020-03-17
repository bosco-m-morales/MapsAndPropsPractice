import React, { useState, useEffect } from "react";
import { Card } from "./Card";

let list = [
	{
		imageUrl:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg",
		title: "Mr. Potter",
        phone: "305-604-3769",
        contactme:""
	},
	{
		imageUrl:
			"https://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg",
        title: "Mr. & Mr. Cash",
        phone:"305-619-2607",
        contactme:""
	},
	{
		imageUrl:
			"https://savannahcatbreed.com/wp-content/uploads/2018/04/MilesF3John-1200x1095.jpg",
        title: "Ms. Diva",
        phone:"305-619-1015",
        contactme:""
	}
];


export function App() {
    return(
        {list.map(item,index) => {
            return(
                <Card
                    key:{index}
                    imageUrl: {}



            )
        }}
    )

}
	