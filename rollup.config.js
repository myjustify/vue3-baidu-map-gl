const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const pkg = require('./packages')
const fs = require('fs')
const path = require('path')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript')

const deps = Object.keys(pkg.dependencies || {})

const readDirectory = (dir) => {
	//递归目录结构
	const list = fs.readdirSync(dir)
	const ret = []

	list.forEach((filename) => {
		const dist = path.resolve(dir, filename)
		const stat = fs.statSync(dist)
		if (stat.isFile()) {
			if (filename === 'index.vue' || filename.endsWith('.ts')) {
				ret.push(dist)
			}
		} else {
			ret.push(...readDirectory(dist))
		}
	})
	return ret
}

const componentsBuildPlugins = [resolve(), vue({ isWebComponent: true, compileTemplate: true }), typescript()]
const componentsBuild = readDirectory(path.resolve(__dirname, './packages/components')).map((component) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return /^vue/.test(id) || /hooks/.test(id) || /utils/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
		},
		// 入口
		input: component,
		// 出口
		output: [
			{
				// 必须，输出文件 (如果要输出多个，可以是一个数组)
				exports: 'named', // 输出多个文件
				file: component.replace('packages', 'lib').replace('.vue', '.js').replace('.ts', '.js'), // 必须，输出文件
				format: 'es'
			}
		],
		// 插件
		plugins: componentsBuildPlugins
	}
})
const hooksBuild = readDirectory(path.resolve(__dirname, './packages/hooks')).map((hooks) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return (
				id.startsWith('./') || /^vue/.test(id) || /hooks/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
			)
		},
		// 入口
		input: hooks,
		// 出口
		output: [
			{
				// 必须，输出文件 (如果要输出多个，可以是一个数组)
				exports: 'named', // 输出多个文件
				file: hooks.replace('packages', 'lib').replace('.ts', '.js'), // 必须，输出文件
				format: 'es'
			}
		],
		// 插件
		plugins: [resolve(), typescript()]
	}
})
const utilsBuild = readDirectory(path.resolve(__dirname, './packages/utils')).map((utils) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return /^vue/.test(id) || /hooks/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
		},
		// 入口
		input: utils,
		// 出口
		output: [
			{
				// 必须，输出文件 (如果要输出多个，可以是一个数组)
				exports: 'named', // 输出多个文件
				file: utils.replace('packages', 'lib').replace('.ts', '.js'), // 必须，输出文件
				format: 'es'
			}
		],
		// 插件
		plugins: [resolve(), typescript()]
	}
})

const buildIndex = [
	{
		external: () => true,
		// 入口
		input: './packages/index.ts',
		// 出口
		output: {
			// 必须，输出文件 (如果要输出多个，可以是一个数组)
			exports: 'named', // 输出多个文件
			file: './lib/index.js', // 必须，输出文件
			format: 'es'
		},
		// 插件
		plugins: [resolve(), typescript()]
	}
]
module.exports = [...componentsBuild, ...hooksBuild, ...utilsBuild, ...buildIndex]
