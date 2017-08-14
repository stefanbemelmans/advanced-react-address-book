import React from "react";
import {Component} from "react";

export default function CourseDetail(props){
  return(
    <div>
      <p>{props.course.course}</p>
      <p>{props.course.location}</p>
      <p>{props.course.startDate}</p>
    </div>
  )
}