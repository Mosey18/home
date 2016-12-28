/**
 * Created by Administrator on 2016/11/6.
 */
var utils={
  makeArray:function(arg){
    var ary=[];
    try{
      ary=[].slice.call(arg);
    }catch(e){

    }
  }
}