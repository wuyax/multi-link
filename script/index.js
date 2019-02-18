window.onload = function () {
  let inputUrl = '',
  openInBrowser = document.querySelector('.open-in-browser'),
  input = document.querySelector('#input'),
  shareBtn = document.querySelector('#share')

  shareBtn.addEventListener('click', function(ev) {
    console.log(input.value)
  })
  input.addEventListener('change', function(ev) {
    inputUrl = input.value
  })

  let info = new Browser();
  if (info.device === 'Mobile') {
    if (info.browser === 'Wechat') {
      openInBrowser.innerHTML = '在safari中打开'
    }
    if (info.browser === 'Safari') {
      window.location.href = 'sinaweibo://detail/?dispMeIfNeed=1&mblogid=GqOZwpVr5'
    }

  } else {
    window.location.href = 'url'
  }

  function parseWeiboUrl(url) {
    // 匹配微博url
    let reg = /^(https\:\/\/weibo\.com)\/[0-9]+\/\w+\//
    if(url && url.test(reg)){
      
    } else {
      console.log('不是一个完整的微博URL')
    }
  }
}