const pinyin = require('./pinyin/index')

function fullPinyin (words)
{
  var result = pinyin(words,{style:pinyin.STYLE_NORMAL}).join('');
  return result;
}

function firstLetterPinyin (words)
{
  var result = pinyin(words,{style:pinyin.STYLE_FIRST_LETTER}).join('');
  return result;
}

module.exports = {fullPinyin, firstLetterPinyin}

// console.log(fullPinyin('是的监管力度'))