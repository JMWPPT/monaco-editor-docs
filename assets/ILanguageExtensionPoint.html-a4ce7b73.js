import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as t,a as s,b as n,d as l,w as r,e}from"./app-39581384.js";const D={},d=s("h1",{id:"ilanguageextensionpoint",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ilanguageextensionpoint","aria-hidden":"true"},"#"),n(" ILanguageExtensionPoint")],-1),y=s("code",null,"interface",-1),u={href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ILanguageExtensionPoint.html",target:"_blank",rel:"noopener noreferrer"},h=e('<h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性 Properties</h2><h3 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> aliases?</h3><ul><li>类型: <code>string</code>[] <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>字符串数组，可选。该语言的别名。 </code></li></ul><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> configuration?</h3>',4),C=s("code",null,"可选",-1),m=s("li",null,[n("默认值: "),s("code",null,"-")],-1),E=s("li",null,[n("可选项: "),s("code",null,"-")],-1),v=s("li",null,[n("描述: "),s("code",null,"对象，可选。该语言的配置信息。")],-1),g=e(`<h3 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions" aria-hidden="true">#</a> extensions?</h3><ul><li>类型: <code>string</code>[] <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: \`\`</li></ul><h3 id="filenamepatterns" tabindex="-1"><a class="header-anchor" href="#filenamepatterns" aria-hidden="true">#</a> filenamePatterns?</h3><ul><li>类型: <code>string</code>[] <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>字符串数组，可选。文件名模式数组。 </code></li></ul><h3 id="filenames" tabindex="-1"><a class="header-anchor" href="#filenames" aria-hidden="true">#</a> filenames?</h3><ul><li>类型: <code>string</code>[] <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: \`\`</li></ul><h3 id="firstline" tabindex="-1"><a class="header-anchor" href="#firstline" aria-hidden="true">#</a> firstLine?</h3><ul><li>类型: <code>string</code> <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>字符串数组，可选。该语言的第一行文本。 </code></li></ul><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>类型: <code>string</code> <code>必选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>字符串，必需。语言 ID。 </code></li></ul><h3 id="mimetypes" tabindex="-1"><a class="header-anchor" href="#mimetypes" aria-hidden="true">#</a> mimetypes?</h3><ul><li>类型: <code>string</code>[] <code>可选</code></li><li>默认值: <code>-</code></li><li>可选项: <code>-</code></li><li>描述: <code>字符串数组，可选。该语言的 MIME 类型。 </code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ILanguageExtensionPoint</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;monaco-editor&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">myLanguage</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">ILanguageExtensionPoint</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;mySpecialLanguage&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">extensions:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;.msl&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">aliases:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;My Special Language&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;mySL&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">mimetypes:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;text/x-my-special-language&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">filenamePatterns:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;*.mySL&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;*.msl&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">firstLine:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;// My Special Language&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">configuration:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">comments:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lineComment:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;//&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">blockComment:</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">&#39;/*&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;*/&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">brackets:</span><span style="color:#D4D4D4;"> [[</span><span style="color:#CE9178;">&#39;{&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;}&#39;</span><span style="color:#D4D4D4;">], [</span><span style="color:#CE9178;">&#39;[&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;]&#39;</span><span style="color:#D4D4D4;">], [</span><span style="color:#CE9178;">&#39;(&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;)&#39;</span><span style="color:#D4D4D4;">]],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">autoClosingPairs:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      { </span><span style="color:#9CDCFE;">open:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;{&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">close:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;}&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">      { </span><span style="color:#9CDCFE;">open:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;[&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">close:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;]&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">      { </span><span style="color:#9CDCFE;">open:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;(&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">close:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;)&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function b(f,_){const o=a("ExternalLinkIcon"),c=a("RouterLink");return i(),t("div",null,[d,s("p",null,[y,n(),s("a",u,[n("官网地址"),l(o)])]),h,s("ul",null,[s("li",null,[n("类型: "),l(c,{to:"/global/classes/Url.html"},{default:r(()=>[n("Url")]),_:1}),n(),C]),m,E,v]),g])}const L=p(D,[["render",b],["__file","ILanguageExtensionPoint.html.vue"]]);export{L as default};
