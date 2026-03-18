<template><div><h1 id="opencode-快速开始" tabindex="-1"><a class="header-anchor" href="#opencode-快速开始"><span>OpenCode 快速开始</span></a></h1>
<h2 id="首次启动" tabindex="-1"><a class="header-anchor" href="#首次启动"><span>首次启动</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动 OpenCode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>首次启动会引导你完成基本配置：</p>
<ol>
<li>选择默认模型</li>
<li>配置 API 密钥</li>
<li>选择编辑器</li>
</ol>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2>
<h3 id="对话模式" tabindex="-1"><a class="header-anchor" href="#对话模式"><span>对话模式</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动交互式对话</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定模型启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --model</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> claude</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定模型和参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --model</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gpt-4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --temperature</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单次命令" tabindex="-1"><a class="header-anchor" href="#单次命令"><span>单次命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行单个任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "帮我写一个 Hello World 程序"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 读取文件内容</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/main.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解释代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/utils.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重构代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> refactor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/app.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心命令" tabindex="-1"><a class="header-anchor" href="#核心命令"><span>核心命令</span></a></h2>
<h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 列出文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 读取文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 搜索内容</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "function"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/newfeature.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> edit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/file</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码操作" tabindex="-1"><a class="header-anchor" href="#代码操作"><span>代码操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "创建一个用户登录的 React 组件"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解释代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> explain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修复 Bug</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "修复这个函数的空指针问题"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重构</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> refactor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "将这个类改为函数式组件"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 添加测试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "为这个函数添加单元测试"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-操作" tabindex="-1"><a class="header-anchor" href="#git-操作"><span>Git 操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看差异</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 提交更改</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "feat: 添加用户认证功能"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> feature/new-feature</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作流程示例" tabindex="-1"><a class="header-anchor" href="#工作流程示例"><span>工作流程示例</span></a></h2>
<h3 id="_1-开始新任务" tabindex="-1"><a class="header-anchor" href="#_1-开始新任务"><span>1. 开始新任务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动新会话</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 告诉 AI 你的需求</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> 我想创建一个天气预报应用</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ai-会帮你" tabindex="-1"><a class="header-anchor" href="#_2-ai-会帮你"><span>2. AI 会帮你</span></a></h3>
<ol>
<li>分析需求</li>
<li>创建项目结构</li>
<li>编写代码</li>
<li>添加测试</li>
</ol>
<h3 id="_3-审查和提交" tabindex="-1"><a class="header-anchor" href="#_3-审查和提交"><span>3. 审查和提交</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看更改</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果满意，提交</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "feat: 添加天气预报功能"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技巧和最佳实践" tabindex="-1"><a class="header-anchor" href="#技巧和最佳实践"><span>技巧和最佳实践</span></a></h2>
<h3 id="清晰描述需求" tabindex="-1"><a class="header-anchor" href="#清晰描述需求"><span>清晰描述需求</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ✓ 好</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "创建一个用户登录表单，包含邮箱和密码字段，需要表单验证"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ✗ 差</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "登录"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分步骤进行" tabindex="-1"><a class="header-anchor" href="#分步骤进行"><span>分步骤进行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 分步骤</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "先创建项目结构"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等待完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "现在添加登录功能"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用上下文" tabindex="-1"><a class="header-anchor" href="#使用上下文"><span>使用上下文</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 引用具体文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "优化 src/utils.js 中的排序算法"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 引用具体行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "修复 src/api/user.js 第 25 行的错误"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2>
<p>在交互模式下：</p>
<ul>
<li><code v-pre>Ctrl+C</code> - 取消当前操作</li>
<li><code v-pre>Ctrl+D</code> - 退出</li>
<li><code v-pre>Ctrl+L</code> - 清屏</li>
<li><code v-pre>Tab</code> - 自动补全</li>
</ul>
</div></template>


