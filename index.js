const _ = require("lodash");

const d = {"39-credit":"0","38-debit":0,"40-credit":"0","19-debit":0,"36-credit":"0","10-debit":0,"41-debit":"0","41-credit":"0","12-debit":"0","12-credit":"0","13-debit":"0","13-credit":"0","25-debit":"0","25-credit":"0","7-debit":0,"7-credit":0,"22-debit":0,"22-credit":0,"11-debit":0,"11-credit":0,"6-debit":0,"6-credit":0,"4-debit":"0","4-credit":"0","3-debit":"0","3-credit":"0","5-debit":"0","5-credit":"0","39-debit":"10","38-credit":"10","40-debit":"10","19-credit":"10","36-debit":"10","10-credit":"10"}

const newD = _.keys(d).map(key => {
  const [idKey, valueKey] = key.split("-");
  return {
    key: key,
    value: d[key]
  }
})

const sortedList = _.sortBy(newD, (o) => o.key)
const chunkList = _.chunk(sortedList, 2);
const parseList = chunkList.map(item => {
  const newObj = {};
  item.map(childItem => {
    const [idKey, valueKey] = childItem.key.split("-")
    newObj.id = Number(idKey);
    if (valueKey === "debit") {
      newObj.debit = Number(childItem.value);
    } else {
      newObj.credit = Number(childItem.value);
    }
  })
    console.log(newObj)
})

const s = [1,2,3,4]

console.log(_.keys(s))

const za = {
        "0": {
            "count": 8,
            "date": "Des",
            "year": 2019,
            "month": 12,
            "deviation": "+ 8",
            "growth": "bertambah"
        },
        "available_years": [
            {
                "year": 2019
            },
            {
                "year": 2020
            }
        ]
    }

const newPengaduan = za;
delete newPengaduan["available_years"]

console.log(_.toArray(newPengaduan))