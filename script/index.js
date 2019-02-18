window.onload = function() {
  let openInBrowser = document.querySelector('.open-in-browser')
  let info = new Browser();
  if(info.device === 'Mobile'){
    if(info.browser === 'Wechat'){
      openInBrowser.html = '在safari中打开'
    }
    if(info.browser === 'Safari'){
      window.location.href = 'sinaweibo://detail/?dispMeIfNeed=1&mblogid=GqOZwpVr5'      
    }
    
  } else {

  }
}