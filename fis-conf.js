// 解析less
fis.match('**.less', {
	// 插件
	parser: 'less',
	// 更改后缀名
	rExt: '.css'
})

// 解析jsx
fis.match('**.jsx', {
	// 插件
	parser: 'babel2',
	// 更改后缀名
	rExt: '.js'
})