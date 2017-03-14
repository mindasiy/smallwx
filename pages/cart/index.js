var isX=0;
var isNow=0;
var timer=null;
var index=null;
var targetArr=null;
Page({
  data:{
    left:[],
    tran:'',
    list: [  
      {   
        icon: "../../images/demo1.png",  
        name: "标题书名" ,
        author:"十里桃花",
        des:"十里桃花十里桃十里桃花十里十里桃花十里十里桃花十里花"
      },  
      {  
        icon: "../../images/demo1.png",  
        name: "标题书名" ,
        author:"十里桃花",
        des:"十里桃花十里桃十里桃花十里十里桃花十里十里桃花十里花"  
      },  
      {  
        icon: "../../images/demo1.png",  
        name: "标题书名" ,
        author:"十里桃花",
        des:"十里桃花十里桃十里桃花十里十里桃花十里十里桃花十里花"  
      }, 
    ]  
  },
  onLoad:function(e){
     
  },
  checkboxChange:function(e){
      console.log(e);
  },
  tapName:function(e){
    clearTimeout(timer);
    index=e.currentTarget.id;
    targetArr=this.data.left;
    this.setData({
        tran:''
      });
    isX=e.changedTouches[0].pageX;
  },
  move:function(e){
    isNow=e.changedTouches[0].pageX-isX;
    if(isNow>0){
      return
    }else if(isNow<-100){
      targetArr[index]='-200rpx';
      this.setData({
        left:targetArr
      });
      return
    };
    targetArr[index]=parseInt(isNow)*2+'rpx';

    this.setData({
      left:targetArr
    });
  },
  end:function(e){

    this.setData({
        tran:'all .3s'
      });
    if(isNow>-50){
      targetArr[index]='0';
     
      this.setData({
        left:targetArr
      });
    }else{
      targetArr[index]='-200rpx';
      this.setData({
        left:targetArr
      });
    };
    var that=this;
    timer=setTimeout(function(){
      that.setData({
        tran:''
      });
    },300)
  }
});
