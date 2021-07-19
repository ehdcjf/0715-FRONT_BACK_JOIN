const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes) =>{ 
  const Comment = sequelize.define('Comment',{
    userid:{
      type:DataTypes.STRING(30), 
      allowNull:false,
    }, 
    content:{
      type:DataTypes.TEXT,
      allowNull:false,  
    },  
  },{
    charsest:'utf8mb4', 
    collate:'utf8mb4_general_ci'

  });//테이블명 // 각 필드  // 테이블에 대한 속성값. 

  return Comment; 
}