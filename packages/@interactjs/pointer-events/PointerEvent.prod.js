import*as t from"../utils/pointerUtils.prod.js";import{BaseEvent as i}from"../core/BaseEvent.prod.js";export default class e extends i{constructor(i,e,s,p,r,o){if(super(r),this.type=void 0,this.originalEvent=void 0,this.pointerId=void 0,this.pointerType=void 0,this.double=void 0,this.pageX=void 0,this.pageY=void 0,this.clientX=void 0,this.clientY=void 0,this.dt=void 0,this.eventable=void 0,t.pointerExtend(this,s),s!==e&&t.pointerExtend(this,e),this.timeStamp=o,this.originalEvent=s,this.type=i,this.pointerId=t.getPointerId(e),this.pointerType=t.getPointerType(e),this.target=p,this.currentTarget=null,"tap"===i){const t=r.getPointerIndex(e);this.dt=this.timeStamp-r.pointers[t].downTime;const i=this.timeStamp-r.tapTime;this.double=!!(r.prevTap&&"doubletap"!==r.prevTap.type&&r.prevTap.target===this.target&&i<500)}else"doubletap"===i&&(this.dt=e.timeStamp-r.tapTime)}_subtractOrigin({x:t,y:i}){return this.pageX-=t,this.pageY-=i,this.clientX-=t,this.clientY-=i,this}_addOrigin({x:t,y:i}){return this.pageX+=t,this.pageY+=i,this.clientX+=t,this.clientY+=i,this}preventDefault(){this.originalEvent.preventDefault()}}export{e as PointerEvent};
//# sourceMappingURL=PointerEvent.prod.js.map