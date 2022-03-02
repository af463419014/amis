amis.define('docs/zh-CN/components/form/input-image.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputImage 图片",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputImage",
    "icon": null,
    "order": 27,
    "html": "<div class=\"markdown-body\"><p>图片格式输入，需要实现接收器，提交时将以 url 的方式提交，如果需要以表单方式提交请使用 <a href=\"input-file#手动上传\">InputFile</a>。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"image\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>默认情况下，选中文件后，就会自动调用 <code>receiver</code> 配置里的接口进行上传，比如 node 版本的示例如下：</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">const</span> express <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'express'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> multer <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'multer'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> upload <span class=\"token operator\">=</span> <span class=\"token function\">multer</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token literal-property property\">dest</span><span class=\"token operator\">:</span> <span class=\"token string\">'uploads/'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> app <span class=\"token operator\">=</span> <span class=\"token function\">express</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\napp<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>express<span class=\"token punctuation\">.</span><span class=\"token function\">static</span><span class=\"token punctuation\">(</span><span class=\"token string\">'public'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 默认情况下是 file 字段名作为文件参数，也可以通过 fileField 配置来改成别的名字</span>\napp<span class=\"token punctuation\">.</span><span class=\"token function\">post</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/uploader'</span><span class=\"token punctuation\">,</span> upload<span class=\"token punctuation\">.</span><span class=\"token function\">single</span><span class=\"token punctuation\">(</span><span class=\"token string\">'file'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">,</span> next</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  res<span class=\"token punctuation\">.</span><span class=\"token function\">json</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token literal-property property\">status</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token literal-property property\">data</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token literal-property property\">value</span><span class=\"token operator\">:</span> <span class=\"token string\">'/'</span> <span class=\"token operator\">+</span> req<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>path\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 配合上面的返回值，将 uploads 目录可读，这样返回的文件才能正常显示</span>\napp<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'uploads'</span><span class=\"token punctuation\">,</span> express<span class=\"token punctuation\">.</span><span class=\"token function\">static</span><span class=\"token punctuation\">(</span><span class=\"token string\">'uploads'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\napp<span class=\"token punctuation\">.</span><span class=\"token function\">listen</span><span class=\"token punctuation\">(</span><span class=\"token number\">8080</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>这个接口需要返回图片地址，比如下面的格式</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https:/xxx.yy/zz.png\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>点击表单提交的时候，实际提交的就是这个返回的图片地址，比如上面的例子是 <code>image</code>，则会提交</p>\n<pre><code>{\n  &quot;image&quot;: &quot;https:/xxx.yy/zz.png&quot;\n}\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B\" href=\"#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制文件类型</h2><p>可以配置<code>accept</code>来限制可选择的文件类型，格式是文件后缀名<code>.xxx</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"限制只能上传jpg图片\",\n            \"accept\": \".jpg\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>想要限制多个类型，则用逗号分隔，例如：<code>.jpg,.png</code></p>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F\" href=\"#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制文件大小</h2><p>配置 <code>limit</code>，更多属性请参考后面的属性说明。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"限制只能上传宽度大于 1000 的图片\",\n            \"accept\": \".jpg\",\n            \"limit\": {\n              \"minWidth\": 1000\n            },\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E8%A3%81%E5%89%AA\" href=\"#%E6%94%AF%E6%8C%81%E8%A3%81%E5%89%AA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持裁剪</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"上传后裁剪\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n            \"crop\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>设置裁剪比例等配置，具体细节可以参考<a href=\"https://github.com/fengyuanchen/cropperjs#options\">这里</a>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"上传后裁剪\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n            \"crop\": {\n              \"aspectRatio\": 1.7777\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>默认情况下裁剪结果是 <code>png</code> 格式，如果要支持其它格式，请设置 <code>cropFormat</code>，比如下面设置为 <code>jpeg</code> 格式，同时设置质量为 <code>0.9</code></p>\n<blockquote>\n<p>1.4.0 及以上版本</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-image\",\n            \"name\": \"image\",\n            \"label\": \"上传后裁剪\",\n            \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n            \"crop\": true,\n            \"cropFormat\": \"image/jpeg\",\n            \"cropQuality\": 0.9\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果浏览器支持，还能设置为 <code>image/webp</code></p>\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85\" href=\"#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自动填充</h2><p>上传成功后，可以通过配置 <code>autoFill</code> 将上传接口返回的值填充到某个表单项中：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-image\",\n      \"name\": \"image\",\n      \"label\": \"image\",\n      \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n      \"autoFill\": {\n        \"myUrl\": \"${url}\"\n      }\n    },\n    {\n      \"type\": \"text\",\n      \"name\": \"myUrl\",\n      \"label\": \"url\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中，image 组件上传后，接口返回格式例如如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"xxxxxxx\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"filename\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"xxxx.jpg\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"url\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"http://xxxx.xxx.xxx\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>然后 image 上配置：</p>\n<pre><code class=\"language-json\"><span class=\"token property\">\"autoFill\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"myUrl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"${url}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>这样上传成功后，会把接口中的 <code>url</code> 变量，赋值给 <code>myUrl</code> 变量，这个里支持表达式，比如在前面加上域名</p>\n<pre><code class=\"language-json\"><span class=\"token property\">\"autoFill\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"myUrl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https://cdn.com/${filename}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p><strong>多选模式</strong></p>\n<p>当表单项为多选模式时，不能再直接取选项中的值了，而是通过 <code>items</code> 变量来取，通过它可以获取当前选中的选项集合。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-image\",\n      \"name\": \"image\",\n      \"label\": \"image\",\n      \"multiple\": true,\n      \"receiver\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/upload/file\",\n      \"autoFill\": {\n        \"myUrl\": \"${items|pick:url}\",\n        \"lastUrl\": \"${items|last|pick:url}\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>receiver</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>上传文件接口</td>\n</tr>\n<tr>\n<td>accept</td>\n<td><code>string</code></td>\n<td><code>.jpeg,.jpg,.png,.gif</code></td>\n<td>支持的图片类型格式，请配置此属性为图片后缀，例如<code>.jpg,.png</code></td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td><code>number</code></td>\n<td></td>\n<td>默认没有限制，当设置后，文件大小大于此值将不允许上传。单位为<code>B</code></td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>默认没有限制，当设置后，一次只允许上传指定数量文件。</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否多选。</td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>autoUpload</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>否选择完就自动开始上传</td>\n</tr>\n<tr>\n<td>hideUploadButton</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>隐藏上传按钮</td>\n</tr>\n<tr>\n<td>fileField</td>\n<td><code>string</code></td>\n<td><code>file</code></td>\n<td>如果你不想自己存储，则可以忽略此属性。</td>\n</tr>\n<tr>\n<td>crop</td>\n<td><code>boolean</code>或<code>{&quot;aspectRatio&quot;:&quot;&quot;}</code></td>\n<td></td>\n<td>用来设置是否支持裁剪。</td>\n</tr>\n<tr>\n<td>crop.aspectRatio</td>\n<td><code>number</code></td>\n<td></td>\n<td>裁剪比例。浮点型，默认 <code>1</code> 即 <code>1:1</code>，如果要设置 <code>16:9</code> 请设置 <code>1.7777777777777777</code> 即 <code>16 / 9</code>。。</td>\n</tr>\n<tr>\n<td>crop.rotatable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>裁剪时是否可旋转</td>\n</tr>\n<tr>\n<td>crop.scalable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>裁剪时是否可缩放</td>\n</tr>\n<tr>\n<td>crop.viewMode</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>裁剪时的查看模式，0 是无限制</td>\n</tr>\n<tr>\n<td>cropFormat</td>\n<td><code>string</code></td>\n<td><code>image/png</code></td>\n<td>裁剪文件格式</td>\n</tr>\n<tr>\n<td>cropQuality</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>裁剪文件格式的质量，用于 jpeg/webp，取值在 0 和 1 之间</td>\n</tr>\n<tr>\n<td>limit</td>\n<td>Limit</td>\n<td></td>\n<td>限制图片大小，超出不让上传。</td>\n</tr>\n<tr>\n<td>frameImage</td>\n<td><code>string</code></td>\n<td></td>\n<td>默认占位图地址</td>\n</tr>\n<tr>\n<td>fixedSize</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否开启固定尺寸,若开启，需同时设置 fixedSizeClassName</td>\n</tr>\n<tr>\n<td>fixedSizeClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>开启固定尺寸时，根据此值控制展示尺寸。例如<code>h-30</code>,即图片框高为 h-30,AMIS 将自动缩放比率设置默认图所占位置的宽度，最终上传图片根据此尺寸对应缩放。</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"limit-%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#limit-%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Limit 属性表</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>width</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片宽度。</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片高度。</td>\n</tr>\n<tr>\n<td>minWidth</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片最小宽度。</td>\n</tr>\n<tr>\n<td>minHeight</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片最小高度。</td>\n</tr>\n<tr>\n<td>maxWidth</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片最大宽度。</td>\n</tr>\n<tr>\n<td>maxHeight</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片最大高度。</td>\n</tr>\n<tr>\n<td>aspectRatio</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制图片宽高比，格式为浮点型数字，默认 <code>1</code> 即 <code>1:1</code>，如果要设置 <code>16:9</code> 请设置 <code>1.7777777777777777</code> 即 <code>16 / 9</code>。 如果不想限制比率，请设置空字符串。</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "限制文件类型",
          "fragment": "%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",
          "level": 2
        },
        {
          "label": "限制文件大小",
          "fragment": "%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F",
          "fullPath": "#%E9%99%90%E5%88%B6%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F",
          "level": 2
        },
        {
          "label": "支持裁剪",
          "fragment": "%E6%94%AF%E6%8C%81%E8%A3%81%E5%89%AA",
          "fullPath": "#%E6%94%AF%E6%8C%81%E8%A3%81%E5%89%AA",
          "level": 2
        },
        {
          "label": "自动填充",
          "fragment": "%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85",
          "fullPath": "#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "Limit 属性表",
              "fragment": "limit-%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "fullPath": "#limit-%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
