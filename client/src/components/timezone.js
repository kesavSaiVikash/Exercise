import React from "react"
import {useState, useEffect} from 'react'
import HttpService from '../services/gettime'
import moment from 'moment'
import 'moment-timezone'

export const TimeZone = () => {
  
  const [state, setState] = useState({ apiResponse: "", curtime: "" })

  useEffect(() => {
    HttpService.gettime()
    .then(res => res.json())
    .then(res => {
        var tz = moment.tz(moment.tz.guess()).zoneAbbr()
        let cur = moment().format("dddd, MMMM Do YYYY, h:mm:ss A, Zz")
        setState({ apiResponse: res.time, curtime: `${cur}${tz}` }) 
    })
    .catch(error=>error);
  }, [])

  return (  
    <div style={{fontWeight: "bold", fontSize: 22}}>
      <p style={{color: "red", textDecoration: "underline"}}>🚀  Server Time Zone 🚀 </p>
      <p>👉 {state.apiResponse}</p>
      <p style={{color: "red", textDecoration: "underline"}}>🚀  Browser Time Zone 🚀 </p>
      <p>👉 {state.curtime}</p>
    </div>
  )
}
 
export default TimeZone