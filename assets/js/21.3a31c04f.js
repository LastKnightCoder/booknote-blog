(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{750:function(t,e,i){"use strict";i.r(e);var s={props:{src:{type:String,required:!0},center:{type:Boolean,default:!0},zoom:{default:"50%"},rounded:{default:0}},data:()=>({imageStyle:{maxWidth:"100%",margin:"0 auto",objectFit:"contain"}}),mounted(){this.center||(this.$refs.img.style.marginLeft=0),this.$refs.img.style.zoom=this.zoom,this.$refs.img.style.borderRadius=this.rounded+"px"}},r=i(1),n=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{ref:"img",style:this.imageStyle,attrs:{src:this.src},on:{click:this.clickImage}})])}),[],!1,null,null,null);e.default=n.exports}}]);