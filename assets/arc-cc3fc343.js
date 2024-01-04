import{w as ln,c as B}from"./path-53f90ab3.js";import{ap as an,aq as H,ar as q,as as rn,at as y,an as tn,au as L,av as _,aw as un,ax as o,ay as sn,az as on,aA as fn}from"./mermaid.core-853f24e5.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function xn(l,h,E,z,v,A,C,a){var I=E-l,i=z-h,n=C-v,m=a-A,r=m*I-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*I,h+r*i]}function W(l,h,E,z,v,A,C){var a=l-E,I=h-z,i=(C?A:-A)/L(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=z+m,F=(r+f)/2,t=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,O=(g<0?-1:1)*L(fn(0,T*T*R-w*w)),S=(w*g-p*O)/R,j=(-w*p-g*O)/R,P=(w*g+p*O)/R,x=(-w*p+g*O)/R,d=S-F,e=j-t,u=P-F,G=x-t;return d*d+e*e>u*u+G*G&&(S=P,j=x),{cx:S,cy:j,x01:-n,y01:-m,x11:S*(v/T-1),y11:j*(v/T-1)}}function vn(){var l=cn,h=yn,E=B(0),z=null,v=gn,A=mn,C=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,F=un(c-f),t=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(F>tn-y)a.moveTo(s*H(f),s*q(f)),a.arc(0,0,s,f,c,!t),r>y&&(a.moveTo(r*H(c),r*q(c)),a.arc(0,0,r,c,f,t));else{var p=f,g=c,R=f,T=c,w=F,O=F,S=C.apply(this,arguments)/2,j=S>y&&(z?+z.apply(this,arguments):L(r*r+s*s)),P=_(un(s-r)/2,+E.apply(this,arguments)),x=P,d=P,e,u;if(j>y){var G=sn(j/r*q(S)),M=sn(j/s*q(S));(w-=G*2)>y?(G*=t?1:-1,R+=G,T-=G):(w=0,R=T=(f+c)/2),(O-=M*2)>y?(M*=t?1:-1,p+=M,g-=M):(O=0,p=g=(f+c)/2)}var J=s*H(p),K=s*q(p),N=r*H(T),Q=r*q(T);if(P>y){var U=s*H(g),V=s*q(g),X=r*H(R),Y=r*q(R),D;if(F<an)if(D=xn(J,K,X,Y,U,V,N,Q)){var Z=J-D[0],$=K-D[1],k=U-D[0],b=V-D[1],nn=1/q(on((Z*k+$*b)/(L(Z*Z+$*$)*L(k*k+b*b)))/2),en=L(D[0]*D[0]+D[1]*D[1]);x=_(P,(r-en)/(nn-1)),d=_(P,(s-en)/(nn+1))}else x=d=0}O>y?d>y?(e=W(X,Y,J,K,s,d,t),u=W(U,V,N,Q,s,d,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),!t),a.arc(u.cx,u.cy,d,o(u.y11,u.x11),o(u.y01,u.x01),!t))):(a.moveTo(J,K),a.arc(0,0,s,p,g,!t)):a.moveTo(J,K),!(r>y)||!(w>y)?a.lineTo(N,Q):x>y?(e=W(N,Q,U,V,r,-x,t),u=W(J,K,X,Y,r,-x,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,r,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),t),a.arc(u.cx,u.cy,x,o(u.y11,u.x11),o(u.y01,u.x01),!t))):a.arc(0,0,r,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[H(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:B(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:B(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:B(+n),i):E},i.padRadius=function(n){return arguments.length?(z=n==null?null:typeof n=="function"?n:B(+n),i):z},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:B(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:B(+n),i):A},i.padAngle=function(n){return arguments.length?(C=typeof n=="function"?n:B(+n),i):C},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
