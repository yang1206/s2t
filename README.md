# chinese-s2t   ![version-v0.0.5](https://img.shields.io/badge/version-v0.0.5-yellow.svg)   ![license-MIT](https://img.shields.io/badge/license-MIT-green.svg)

[![NPM](https://nodei.co/npm/s2t-chinese.png)](https://npmjs.org/package/s2t-chinese)



# About

简单的字符串替换的简繁体转换模块,支持TypeScript,支持自定义字词替换

# Install

> shell (node.js)

```shell
npm i s2t-chinese
```
# Usage

```js
import chinese from 's2t-chinese'
chinese.s2t('简体转繁体')
chinese.t2s('繁体转简体')
```


#### 转换成繁体


```js
import chinese from 's2t-chinese'

const s2tResult = chinese.s2t('那一天，人类终于回想起了，曾经一度被他们所支配的恐怖，还有被囚禁于鸟笼中的那份屈辱。')

console.log(s2tResult)

// 那一天，人類終於回想起了，曾經一度被他們所支配的恐怖，還有被囚禁於鳥籠中的那份屈辱。
```

#### 转换成简体

```js
import chinese from 's2t-chinese'

const s2tResult = chinese.t2s('我們被教導記住思想，而不是人，因為人可能失敗，他可能會被捕，他會被殺死，被遺忘，但400年後，思想仍可改變世界，我親眼目睹了，思想的威力，我見過人們以它為名殺戮，或是為了它獻出生命，但你不能親吻思想，也不能觸摸它，或擁抱它，思想不會流血，不會感到痛苦，它們沒有愛！')

console.log(s2tResult)

// 我们被教导记住思想，而不是人，因为人可能失败，他可能会被捕，他会被杀死，被遗忘，但400年后，思想仍可改变世界，我亲眼目睹了，思想的威力，我见过人们以它为名杀戮，或是为了它献出生命，但你不能亲吻思想，也不能触摸它，或拥抱它，思想不会流血，不会感到痛苦，它们没有爱！

```

#### 自定义字符

```js
import chinese from 's2t-chinese'

const s2tResult = chinese.t2s('士官長與他的第二代超級戰士藍隊重逢，一同執行日常的任務，去調查失蹤的 ONI 銀月研究站', [{ src: '超級戰士', des: '斯巴达' }, { src: '秋風之敦', des: '秋之柱' }])

console.log(s2tResult)

// 士官长与他的第二代斯巴达战士蓝队重逢，一同执行日常的任务，去调查失踪的 ONI 银月研究站

```

## Acknowledgement
- [chinese-s2t](https://github.com/foru17/chinese-s2t)
