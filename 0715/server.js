const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const db = require('./models')
const cors = require('cors')


db.sequelize.sync()
.then(()=>{ 
  console.log('접속성공')
})
.catch(e=>{ 
  console.log(`DB접속 실패: ${error}`)
})

app.use(cors()); 

app.use(bodyParser.urlencoded(
  {extends:false, }
)
) 

app.use(bodyParser.json())


app.get('/',async(req,res)=>{ 
   let result = await db.Comment.findAll({})
   result.forEach(v=>{ 
     v.dataValues.date=checkDate(v.createdAt); 
   })
   res.json(result); 

})

app.post('/',async (req,res)=>{ 
 
  const {userid,content} = req.body;
  await db.Comment.create({
    userid, content
  })
 
  
  let result = await db.Comment.findAll({})
  result.forEach(v=>{ 
    v.dataValues.date=checkDate(v.createdAt); 
  })
  res.json(result); 
})


app.put('/',async(req,res)=>{ 
  const id = req.body.index; 
  const content = req.body.content; 

  let result = await db.Comment.update({
    content
  },{
    where:{id}
  })

  res.json(); 

})

app.delete('/',async(req,res)=>{ 
  const id = req.body.index; 
  let result = await db.Comment.destroy({
    where:{id}
  })
  res.json(); 
})

app.listen(3001, () => { 
  console.log('hello port 3000')
})




function checkDate(target){ 
  let now = new Date(); 
  let written = new Date(target); 
 let dif = now- written; 
 let sec = 1000; 
 let min = 60*1000; 
 let hour = 60*60*1000; 
 let day = 24*60*60*1000; 
 let week = 7*day;
 let month = written.getMonth()-now.getMonth();
 let year = written.getFullYear()-now.getFullYear();

 if(year>0){ 
  return `${year}년전`
 }else if(dif/sec<1){ 
  return `방금전`
}else if(dif/sec<60){ 
     return `${dif/sec>>0}초전`
  } else if(dif/min<60){ 
     return `${dif/min>>0}분전`
 }else if(dif/hour<24){ 
  return `${Math.floor(dif/hour)}시간전`
}else if(dif/day<31){ 
  return `${dif/day>>0}일전`
}else{ 
  return `${month}달전`
} 
}