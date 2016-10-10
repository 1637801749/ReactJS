// 通过闭包定义一个模块
(function (React, ReactDOM, window) {
// 定义所有的子组件
var Header = React.createClass({
	// 定义状态
	getInitialState: function() {
	    return {
	    	// 定义每一个导航标签的类的名称，如果选中则其名称是choose
	        cls: {
	        	def: '',
	        	start: '',
	        	css: '',
	        	component: '',
	        	javascript: ''
	        }
	    };
	},
	// 定义点击导航事件
	changeNav: function (e) {
		// 根据事件对象获取data-id
		var id = e.target.getAttribute('data-id');
		// console.log(id)
		// 将所有的state中cls属性设置成空字符串，并且将id设置成choose
		var cls = this.state.cls;
		for (var i in cls) {
			if (i === id) {
				cls[i] = 'choose'
			} else {
				cls[i] = '';
			}
		}
		// 调用父组件的方法通知父组件导航的点击事件，通过属性获取父组件的方法
		this.props.changeNav(id)

		// cls改变了，还没有通知组件，因此要改变状态通知组件
		this.setState({cls: cls})
	},
	render: function () {
		return (
			<header className="header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a data-id="def" onClick={this.changeNav} className="navbar-brand">Bootstrap</a>
					</div>
					<ul className="nav nav-pills navbar-nav">
						<li className={this.state.cls.start}>
							<a data-id="start" onClick={this.changeNav}>起步</a>
						</li>
						<li className={this.state.cls.css}>
							<a data-id="css" onClick={this.changeNav}>全局CSS样式</a>
						</li>
						<li className={this.state.cls.component}>
							<a data-id="component" onClick={this.changeNav}>组件</a>
						</li>
						<li className={this.state.cls.javascript}>
							<a data-id="javascript" onClick={this.changeNav}>javascript插件</a>
						</li>
						<li>
							<a>定制</a>
						</li>
					</ul>
					<ul className="nav nav-pills navbar-nav pull-right">
						<li>
							<a href="">高新工作</a>
						</li>
						<li>
							<a href="">优站精选</a>
						</li>
						<li>
							<a href="">官方博客</a>
						</li>
					</ul>
				</div>
			</header>			
		)
	}
})

// 定义Defaults
var Defaults = React.createClass({
	createList: function (data) {
		// 输出列表
		return data.map(function (value, index) {
			// 如果数据中有p属性和h3属性，我们要渲染h3和p元素
			if (value.p && value.h3) {
				return (
					<div className="col-lg-4" key={index}>
						<img src={value.img} alt=""/>
						<h3>{value.h3}</h3>
						<p>{value.p}</p>
					</div>
				)
			// 如果只有图片，我们只需要渲染这张图片
			} else {
				return (
					<div className="col-lg-4" key={index}>
						<img src={value.img} alt=""/>
					</div>
				)
			}
		})
	},
	getInitialState: function() {
	    return {
			// 第一个模块的列表数据
			firstList: [
				{
					img: 'img/sass-less.png',
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
				},
				{
					img: 'img/devices.png',
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
				},
				{
					img: 'img/components.png',
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
				}
			],
			secondList: [
				{
					img: 'img/01.png'
				},
				{
					img: 'img/02.jpg'
				},
				{
					img: 'img/03.png'
				}
			]
		};
	},
	render: function () {
		return (
			<section style={{display: this.props.show}}>
				<div className="banner">
					<div className="banner-b-logo">B</div>
					<h2>Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</h2>
					<span className="btn btn-lg btn-outline">下载 Bootstrap</span>
					<p className="app-version">当前版本： v3.3.0 | 文档更新于：2014-10-31</p>
				</div>
				<div className="first-list">
					<div className="container">
						<h2>为所有开发者、所有应用场景而设计。</h2>
						<p className="intro">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
						<div className="row">
							{this.createList(this.state.firstList)}
						</div>
						<p className="description">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
						<span className="btn btn-lg">查看 GitHub 项目主页</span>
					</div>
				</div>
				<div className="second-list">
					<div className="container">
						<h2>基于 Bootstrap 构建的网站</h2>
						<p className="intro">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
						<div className="row">
							{this.createList(this.state.secondList)}
						</div>
						<p className="description">我们在“优站精选”里展示了许多精美的 Bootstrap 网站。</p>
						<span className="btn btn-lg">逛一逛“优站精选”</span>
					</div>
				</div>
			</section>
		)
	}
})

// 定义banner组件
var Banner = React.createClass({
	render: function () {
		return (
			<div className="banner app-banner">
				<div className="container">
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
})

// 定义article组件
var Article = React.createClass({
	getArticleData: function () {
		// 用状态中article数据渲染页面
		return this.props.article.map(function (obj, index) {
			/**
			 * obj.title 	表示标题
			 * obj.content 	表示内容
			 * obj.id 		表示模块的id
			 */
			return (
				<div key={index} id={obj.id}>
					<h2>{obj.title}</h2>
					<p>{obj.content}</p>
				</div>
			)
		})
	},
	render: function () {
		return (
			<article className="col-lg-9">
				{this.getArticleData()}
			</article>
		)
	}
})
// 定义aside组件
var Aside = React.createClass({
	// 定义渲染侧边栏的方法
	getAsideData: function () {
		var that = this;
		// 根据aside数据进行渲染页面
		return this.state.aside.map(function (obj, index) {
			// 渲染aside模块
			return (
				<li key={index} className={obj.cls} >
					<a href={'#' + obj.id} onClick={that.choseLi} data-id={obj.id}>{obj.title}</a>
				</li>
			)
		})
	},
	// 定义默认状态
	getInitialState: function() {
	    return {
	        aside: this.props.aside
	    };
	},
	choseLi: function (e) {
		// 将state.aside所有成员的cls属性设置成‘’并且将点击的这个元素的类名称设置成choose
		// 获取id
		var id = e.target.getAttribute('data-id');
		var aside = this.state.aside;
		for (var i in aside) {
			// 如果点击的元素的id是这个成员的cls属性，我们要将cls属性设置成choose
			if (aside[i].id === id)  {
				aside[i].cls = 'choose';
			} else {
				aside[i].cls = '';
			}
		}
		// 更新状态通知组件
		this.setState({
			aside: aside
		})
	},
	// 我们希望属性发生变化时候，要将状态改变，我们要将变化的属性转化成状态
	componentWillReceiveProps: function(nextProps) {
	    // 我们要将新属性中的aside数据添加给state
	   // console.log(nextProps)
	   this.setState({
	   		aside: nextProps.aside
	   })
	},
	render: function () {
		return (
			<aside className="aside col-lg-3">
				<ul className="nav">
					{this.getAsideData()}
				</ul>
			</aside>
		)
	}
})

// 定义article与aside的父组件
var Content = React.createClass({
	render: function () {
		return (
			<div className="content container">
				<div className="row">
					<Article article={this.props.article} />
					{/*content的属性变化了，此时aside接受的属性数据，此时属性变化了，aside进入了存在期（aside进入存在的原因是他的属性值改变了）*/}
					<Aside aside={this.props.aside} />
				</div>
			</div>
		)
	}
})

// 提炼共有方法作为混合
var Util = {
	// 创建获取数据的方法
	getData: function(url, fn) {
		// 定义xhr对象
		var xhr = new XMLHttpRequest();
		// 定义事件
		xhr.onreadystatechange = function () {
			// 监听readystate是4
			if (xhr.readyState === 4) {
				// 判断status是200
				if (xhr.status === 200) {
					// 请求成功查看数据
					// console.log(xhr)
					var res = JSON.parse(xhr.responseText)
					fn && fn(res);
				}
			}
		}
		// 打开请求
		xhr.open('GET', url, true);
		// 发送数据
		xhr.send(null);
	},
	/**
	 * 适配侧边栏数据
	 * @data 	article数据
	 */
	asideAdaptor: function (data) {
		var result = [];
		for (var i = 0; i < data.length; i++) {
			// 将每个data放入reuslt中
			result.push(data[i]);
			// 添加cls属性用来维护样式的类
			result[i].cls = '';
		}
		// 将reuslt返回
		return result;
	}
}

var Page = React.createClass({
	// 设置混合
	mixins: [Util],
	// 设置默认属性
	getDefaultProps: function() {
	    return {
	        title: '',
	        intro: '',
	        url: ''
	    };
	},
	// 设置默认状态
	getInitialState: function() {
		return {
			article: [],
			aside: []
		};
	},
	render: function () {
		return (
			<section style={{display: this.props.show}}>
				<Banner title={this.props.title} intro={this.props.intro} />
				<Content aside={this.state.aside} article={this.state.article} />
			</section>
		)
	},
	// 组件构建完成请求数据
	componentDidMount: function() {
		var that = this;
	    this.getData(this.props.url, function (res) {
	    	that.setState({
	    		article: res,
	    		aside: that.asideAdaptor(res)
	    	})
	    })
	},
})

// 创建父组件 APP
var App = React.createClass({
	// 定义状态存储组件与导航的映射关系
	getInitialState: function() {
	    return {
	        maps: {
	        	// ture显示该模块。false隐藏该模块
	        	def: 'block',
	        	start: 'none',
	        	css: 'none',
	        	component: 'none',
	        	javascript: 'none'
	        }
	    };
	},
	// 在父组件中定义该方法
	changeNav: function (msg) {
		// 遍历状态，将其他的都隐藏，将msg对应的模块显示
		var maps = this.state.maps
		for (var i in maps) {
			// 如果是对应的导航模块
			if (i === msg) {
				// 将该模块显示就是将其值设置成true
				maps[i] = 'block';
			} else {
				// 将该模块隐藏，就是将其值设置成false
				maps[i] = 'none';
			}
		}
		// 通知组件进行更新，要改变状态
		this.setState(maps)
		// console.log(msg)
	},
	render: function () {
		// 缓存maps变量
		var maps = this.state.maps;
		return (
			<div>
				{/*头部*/}
				<Header changeNav={this.changeNav} />
				{/*每一个页面作为一个子组件*/}
				<Defaults show={maps.def} />
				<Page show={maps.start} title='起步' intro='简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。' url="data/start.json" />
				<Page show={maps.css} title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" url="data/css.json" />
				<Page show={maps.component} title='组件' intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能" url="data/component.json" />
				<Page show={maps.javascript} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="data/js.json" />
			</div>
		)
	}
})

// 渲染到页面中
ReactDOM.render(<App />, document.getElementById('app'))
})(React, ReactDOM, window)

