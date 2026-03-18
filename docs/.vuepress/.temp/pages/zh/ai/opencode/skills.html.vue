<template><div><h1 id="opencode-技能系统" tabindex="-1"><a class="header-anchor" href="#opencode-技能系统"><span>OpenCode 技能系统</span></a></h1>
<p>OpenCode 的技能系统允许 AI 使用各种工具来帮助你完成编程任务。</p>
<h2 id="内置技能" tabindex="-1"><a class="header-anchor" href="#内置技能"><span>内置技能</span></a></h2>
<h3 id="_1-代码解释" tabindex="-1"><a class="header-anchor" href="#_1-代码解释"><span>1. 代码解释</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：explain</span></span>
<span class="line"><span>功能：解释代码的功能和逻辑</span></span>
<span class="line"><span>用法：opencode explain [file] [lines]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-代码生成" tabindex="-1"><a class="header-anchor" href="#_2-代码生成"><span>2. 代码生成</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：generate</span></span>
<span class="line"><span>功能：根据描述生成代码</span></span>
<span class="line"><span>用法：opencode generate [描述]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-代码重构" tabindex="-1"><a class="header-anchor" href="#_3-代码重构"><span>3. 代码重构</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：refactor</span></span>
<span class="line"><span>功能：重构和优化代码</span></span>
<span class="line"><span>用法：opencode refactor [file]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-bug-修复" tabindex="-1"><a class="header-anchor" href="#_4-bug-修复"><span>4. Bug 修复</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：fix</span></span>
<span class="line"><span>功能：自动修复代码中的错误</span></span>
<span class="line"><span>用法：opencode fix [file]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-测试生成" tabindex="-1"><a class="header-anchor" href="#_5-测试生成"><span>5. 测试生成</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：test</span></span>
<span class="line"><span>功能：生成单元测试</span></span>
<span class="line"><span>用法：opencode test [file]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-文档生成" tabindex="-1"><a class="header-anchor" href="#_6-文档生成"><span>6. 文档生成</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>技能：docs</span></span>
<span class="line"><span>功能：生成代码文档</span></span>
<span class="line"><span>用法：opencode docs [file]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技能列表" tabindex="-1"><a class="header-anchor" href="#技能列表"><span>技能列表</span></a></h2>
<table>
<thead>
<tr>
<th>技能名称</th>
<th>命令</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>explain</td>
<td><code v-pre>opencode explain</code></td>
<td>解释代码</td>
</tr>
<tr>
<td>generate</td>
<td><code v-pre>opencode generate</code></td>
<td>生成代码</td>
</tr>
<tr>
<td>refactor</td>
<td><code v-pre>opencode refactor</code></td>
<td>重构代码</td>
</tr>
<tr>
<td>fix</td>
<td><code v-pre>opencode fix</code></td>
<td>修复 Bug</td>
</tr>
<tr>
<td>test</td>
<td><code v-pre>opencode test</code></td>
<td>生成测试</td>
</tr>
<tr>
<td>docs</td>
<td><code v-pre>opencode docs</code></td>
<td>生成文档</td>
</tr>
<tr>
<td>review</td>
<td><code v-pre>opencode review</code></td>
<td>代码审查</td>
</tr>
<tr>
<td>debug</td>
<td><code v-pre>opencode debug</code></td>
<td>调试代码</td>
</tr>
<tr>
<td>optimize</td>
<td><code v-pre>opencode optimize</code></td>
<td>性能优化</td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2>
<h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解释整个文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/utils.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解释特定行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/utils.js:10-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解释函数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> function</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sortArray</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bug-修复" tabindex="-1"><a class="header-anchor" href="#bug-修复"><span>Bug 修复</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修复当前错误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修复指定文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/auth.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修复特定问题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "空指针异常"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码生成" tabindex="-1"><a class="header-anchor" href="#代码生成"><span>代码生成</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成 React 组件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "用户列表组件"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成 API 接口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "用户 CRUD API"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成算法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "快速排序算法"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义技能" tabindex="-1"><a class="header-anchor" href="#自定义技能"><span>自定义技能</span></a></h2>
<p>你可以通过配置文件添加自定义技能：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ~/.opencode/config.yaml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">skills</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">deploy</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">部署应用到服务器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">npm run deploy</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">lint</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">运行代码检查</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">npm run lint</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技能开发" tabindex="-1"><a class="header-anchor" href="#技能开发"><span>技能开发</span></a></h2>
<h3 id="创建自定义技能" tabindex="-1"><a class="header-anchor" href="#创建自定义技能"><span>创建自定义技能</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// skills/my-skill.js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'my-skill'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  description</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '我的自定义技能'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  execute</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 实现技能逻辑</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">result</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'success'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技能最佳实践" tabindex="-1"><a class="header-anchor" href="#技能最佳实践"><span>技能最佳实践</span></a></h3>
<ol>
<li><strong>单一职责</strong> - 每个技能只做一件事</li>
<li><strong>错误处理</strong> - 妥善处理异常情况</li>
<li><strong>日志记录</strong> - 记录关键操作</li>
<li><strong>测试覆盖</strong> - 为技能编写测试</li>
</ol>
</div></template>


