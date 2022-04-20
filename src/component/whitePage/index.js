import React from "react";
import { RadioGroup, Radio } from "@mantine/core";
import Modalis from "../modal_is";

import "./whitePage.css";
export default function index() {
  let arrey = [
    //   {requ:"Coffee"},
    //   {requ:"Tea"},
    //   {requ:"Milk"},
    //   {requ:"Soap"},
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  // function ooo(){

  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  list = list.sort(() => Math.random() - 0.5);
  // return list
  // }
  const info = [
    {
      children: [
        {
          question: "What is 2*5?",
          choices: ["A) -156 ", "B)-88 ", "C)76", "D)4"],
          correctAnswer: 8,
        },
      ],
      requ: "Ifodani soddalashtiring va uning a=2, b=-3 bo’lgandagi son qiymatini toping: 8 (3a – 2b)-4(a-7b)",
    },
    {
      children: [
        {
          question: "What is 2*5?",
          choices: ["A)-28,8  ", "B)44  ", "C)43,2  ", "D)28,8"],
          correctAnswer: "-28,8",
        },
      ],
      requ: "b=3, a=-2, c=1,2  bo’lsa,   ifodaning son qiymatini toping",
    },
    {
      children: [
        {
          question: "What is 2*5?",
          // choices: [
          //   { ansvers: "A" },{ ansvers: "B" },{ ansvers: "C" },{ ansvers: "D" },
          // ], 
          choices: ["A)-28,8  ", "B)44  ", "C)43,2  ", "D)28,8"],

          correctAnswer: 4,
        },
      ],
      requ: `To’g’ri to’rtburchakning yuzi    asosi 16 ga teng. Balandligini toping.`,
    },
  ];

  // [
  //   {
  //     requ: ".b=3, a=-2, c=1,2  bo’lsa,   ifodaning son qiymatini toping",
  //   },
  //   {
  //     requ: ". To’g’ri to’rtburchakning yuzi    asosi 16 ga teng. Balandligini toping.",
  //   },
  //   {
  //     requ: "Ifodani soddalashtiring va uning a=2, b=-3 bo’lgandagi son qiymatini toping: 8 (3a – 2b)-4(a-7b)",
  //   },
  //   {
  //     requ: "Olim d so’mdan  17 ta daftar , c so’mdan12 ta   ruchka, k so’mdan esa 5 ta  qalam sotib oldi.Jami xaridni  hisoblash uchun ifoda tuzing.",
  //   },
  // ];

  return (
    <div className="container_is">
      <div className="title_is">
        <h1>{arrey.length}-variant</h1>
      </div>
      {list}
      <div className="requ_is">
        <RadioGroup
          label="Select your favorite framework/library"
          description="This is anonymous"
          required
        >
          <Radio value="react" label="React" />
          <Radio value="svelte" label="Svelte" />
          <Radio value="ng" label="Angular" />
          <Radio value="vue" label="Vue" />
        </RadioGroup>
        <ol>
          {/* {arrey.map((item,index)=>{
              return(
                <li>Coffee{item.requ}</li>  
              )
          })} */}
          {console.log("")}
          {info
            .sort(() => Math.random() - 0.5)
            .map((item, index) => {
              return (
                <div key={index}>
                  <li>{item?.requ}</li>
                  {item?.children?.map((item, index) => {
                    return (
                      <ul key={index}>
                        <ol>{item.choices}</ol>
                        {item.choices.ansvers}

                        {/* {item?.children?.map((item, index) => {
                          return
                        }} */}
                      </ul>
                    );
                  })}
                </div>
              );
            })}
        </ol>
        <Modalis />
        <button onClick={() => window.location.reload()}>rrrr</button>
      </div>
    </div>
  );
}
