<template><div><h1 id="opencode-入门" tabindex="-1"><a class="header-anchor" href="#opencode-入门"><span>OpenCode 入门</span></a></h1>
<p>OpenCode 是一个开源的 AI 编程助手，帮助你在终端、IDE 或桌面应用中编写代码。</p>
<h2 id="什么是-opencode" tabindex="-1"><a class="header-anchor" href="#什么是-opencode"><span>什么是 OpenCode？</span></a></h2>
<p>OpenCode 是一个开源的 AI 编程代理（Agent），能够帮助你：</p>
<ul>
<li><strong>智能代码补全</strong> - 自动补全代码片段</li>
<li><strong>代码解释</strong> - 解释代码的功能和逻辑</li>
<li><strong>Bug 修复</strong> - 自动发现和修复代码中的问题</li>
<li><strong>重构建议</strong> - 提供代码优化建议</li>
<li><strong>学习辅助</strong> - 解答编程问题</li>
</ul>
<h2 id="主要特点" tabindex="-1"><a class="header-anchor" href="#主要特点"><span>主要特点</span></a></h2>
<ul>
<li><strong>LSP 支持</strong> - 自动加载正确的 LSP（语言服务器协议）</li>
<li><strong>多会话</strong> - 可以在同一个项目上并行启动多个代理</li>
<li><strong>分享链接</strong> - 分享任何会话的链接以便参考或调试</li>
<li><strong>广泛兼容</strong> - 支持 75+ LLM 提供商，包括本地模型</li>
<li><strong>多平台</strong> - 支持终端、桌面应用和 IDE 插件</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># macOS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> opencode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Linux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://opencode.ai/install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Windows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenCode</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动 OpenCode</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定模型</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --model</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> claude</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 读取文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> src/main.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行任务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">opencode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "帮我重构这个函数"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型选择" tabindex="-1"><a class="header-anchor" href="#模型选择"><span>模型选择</span></a></h2>
<p>OpenCode 支持多种模型：</p>
<ul>
<li><strong>免费模型</strong> - 内置免费模型</li>
<li><strong>Claude</strong> - Anthropic 的 Claude</li>
<li><strong>GPT</strong> - OpenAI 的 ChatGPT</li>
<li><strong>Gemini</strong> - Google 的 Gemini</li>
<li><strong>本地模型</strong> - 通过 Ollama 等运行本地模型</li>
</ul>
<h2 id="官方资源" tabindex="-1"><a class="header-anchor" href="#官方资源"><span>官方资源</span></a></h2>
<ul>
<li>官网：<a href="https://opencode.ai" target="_blank" rel="noopener noreferrer">https://opencode.ai</a></li>
<li>GitHub：<a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener noreferrer">https://github.com/anomalyco/opencode</a></li>
<li>文档：<a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">https://opencode.ai/docs</a></li>
</ul>
</div></template>


