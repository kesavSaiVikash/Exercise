var express = require("express")
var router = express.Router()
var moment = require('moment')
require('moment-timezone')

router.get("/", function(req, res, next) {
    var curtime = moment.tz("Asia/Kolkata").format("dddd, MMMM Do YYYY, h:mm:ss A, Zz")
    res.json({status:200, time:curtime })
})

// Another way, actually thats my first approach 
// router.get("/", function(req, res, next) {
//     let d = new Date()
//     let timezone = d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
//     let gmttime = timezone.split('/')
//     let week = []
//     let _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     let dt = new Date(d.setDate(gmttime[1]))
//     let _day = _days[dt.getDay()]
//     let _month = _months[gmttime[0]-1]
//     let _date = gmttime[1]
//     if(_date < 10 ){
//         _date = '0' +_date
//     }
//     let _year = gmttime[2]
//     let fulldate = _day + ', '+_month + ' ' + _date + 'th ' + _year
//     week.push(fulldate)
//     res.json({status:200, time:week + ", +05:30 GMT"})
// })

module.exports = router
