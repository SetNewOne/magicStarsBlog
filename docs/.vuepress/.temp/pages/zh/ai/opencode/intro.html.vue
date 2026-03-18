<template><div><h1 id="opencode-介绍" tabindex="-1"><a class="header-anchor" href="#opencode-介绍"><span>OpenCode 介绍</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>OpenCode 是一个开源的 AI 编程助手，由 Anomaly 公司开发维护。截至目前：</p>
<ul>
<li><strong>GitHub 星标</strong>: 120K+</li>
<li><strong>贡献者</strong>: 800+</li>
<li><strong>提交数</strong>: 10,000+</li>
<li><strong>月活开发者</strong>: 500万+</li>
</ul>
<h2 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能"><span>核心功能</span></a></h2>
<h3 id="_1-智能编程辅助" tabindex="-1"><a class="header-anchor" href="#_1-智能编程辅助"><span>1. 智能编程辅助</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 直接对话式编程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "帮我写一个排序算法"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "解释这段代码的含义"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "优化这个函数的性能"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-文件操作" tabindex="-1"><a class="header-anchor" href="#_2-文件操作"><span>2. 文件操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 读取文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> edit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建新文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/newfile</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-多会话支持" tabindex="-1"><a class="header-anchor" href="#_3-多会话支持"><span>3. 多会话支持</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动多个并行会话</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> frontend</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 前端任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> backend</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   # 后端任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docs</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # 文档任务</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-git-集成" tabindex="-1"><a class="header-anchor" href="#_4-git-集成"><span>4. Git 集成</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 自动提交</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "feat: 添加用户登录功能"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> feature/new-feature</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的语言" tabindex="-1"><a class="header-anchor" href="#支持的语言"><span>支持的语言</span></a></h2>
<p>OpenCode 支持几乎所有主流编程语言：</p>
<ul>
<li><strong>前端</strong>: JavaScript, TypeScript, HTML, CSS, Vue, React</li>
<li><strong>后端</strong>: Python, Java, Go, Rust, Node.js</li>
<li><strong>移动端</strong>: Swift, Kotlin, Flutter, React Native</li>
<li><strong>其他</strong>: C, C++, Ruby, PHP 等</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<h3 id="代码开发" tabindex="-1"><a class="header-anchor" href="#代码开发"><span>代码开发</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 从零开始开发功能</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "实现用户注册功能，包含表单验证"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码审查" tabindex="-1"><a class="header-anchor" href="#代码审查"><span>代码审查</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 代码审查</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "审查这个 PR 的代码"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bug-修复" tabindex="-1"><a class="header-anchor" href="#bug-修复"><span>Bug 修复</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修复 Bug</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "修复登录页面的 CSRF 漏洞"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="学习新技术" tabindex="-1"><a class="header-anchor" href="#学习新技术"><span>学习新技术</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 学习新框架</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "教我如何使用 FastAPI 框架"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技术架构" tabindex="-1"><a class="header-anchor" href="#技术架构"><span>技术架构</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   用户界面       │</span></span>
<span class="line"><span>│  (CLI/IDE/桌面)  │</span></span>
<span class="line"><span>└────────┬────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>┌────────▼────────┐</span></span>
<span class="line"><span>│   核心引擎       │</span></span>
<span class="line"><span>│  (Agent Logic)  │</span></span>
<span class="line"><span>└────────┬────────┘</span></span>
<span class="line"><span>         │</span></span>
<span class="line"><span>┌────────▼────────┐</span></span>
<span class="line"><span>│   模型层        │</span></span>
<span class="line"><span>│  (LLM Provider) │</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐私保护" tabindex="-1"><a class="header-anchor" href="#隐私保护"><span>隐私保护</span></a></h2>
<p>OpenCode 非常注重用户隐私：</p>
<ul>
<li><strong>本地处理</strong> - 代码不会离开你的机器</li>
<li><strong>不存储数据</strong> - 不存储任何代码或上下文数据</li>
<li><strong>企业级安全</strong> - 提供企业版本地部署方案</li>
</ul>
<h2 id="为什么选择-opencode" tabindex="-1"><a class="header-anchor" href="#为什么选择-opencode"><span>为什么选择 OpenCode？</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>OpenCode</th>
<th>其他工具</th>
</tr>
</thead>
<tbody>
<tr>
<td>开源</td>
<td>✓</td>
<td>✗</td>
</tr>
<tr>
<td>本地运行</td>
<td>✓</td>
<td>✗</td>
</tr>
<tr>
<td>多模型支持</td>
<td>✓</td>
<td>✗</td>
</tr>
<tr>
<td>免费使用</td>
<td>✓</td>
<td>限制</td>
</tr>
<tr>
<td>跨平台</td>
<td>✓</td>
<td>✓</td>
</tr>
</tbody>
</table>
</div></template>


