const expresss = require('express');
const app = expresss();
const cors = require('cors'); 

app.use(cors()); 

app.get('/',(req,res)=>{ 
  res.send('Long Time No See Node.Js')
})

app.get('/api', (req,res)=>{ 
  res.json([ 
    {userid:'king',content:'kill', date:'2021-07-15'},
    {userid:'king',content:'kill', date:'2021-07-15'},
    {userid:'king',content:'kill', date:'2021-07-15'},
    {userid:'king',content:'kill', date:'2021-07-15'},
    {userid:'king',content:'kill', date:'2021-07-15'},
  ])
})


app.listen(3000, () => { 
  console.log('long time no see Node')
})