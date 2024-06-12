const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
// 'your-profile-path'에 Chrome 사용자 프로필 경로를 입력합니다.
options.addArguments('user-data-dir=/Users/bini/Library/Application Support/Google/Chrome/Default');

async function manipulateWebPage(inputValue, callback) {
  let driver;
  try{

    driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
  }
  catch(err){
    console.log(err);
  }

    try {
        // 웹 페이지로 이동
        await driver.get('https://chat.openai.com/g/g-jetq545UN-takimoto-hihumi');

        // 특정 input 태그에 값 입력
        await driver.findElement(By.id('prompt-textarea')).sendKeys(inputValue);

        // 특정 버튼 클릭
        const secondSiblingElement = await driver.executeScript("return document.getElementById('specific-id').nextElementSibling.nextElementSibling;");
        await secondSiblingElement.click();


          // 특정 값이 될 때까지 기다리는 함수
          await driver.wait(async function() {
            const secondSiblingElement = await driver.executeScript("return document.getElementById('specific-id').nextElementSibling.nextElementSibling.firstChild.firstChild;");
            const ariaLabelValue = await secondSiblingElement.getAttribute('aria-label');
            return ariaLabelValue === 'Stop generating';
        }, 10000); // 최대 10초 대기

        // class가 'turn'인 element의 innerText 획득
        // 클래스 이름으로 요소들을 찾고 마지막 요소의 innerText 가져오기
        const lastElementText = await driver.executeScript(`
            const elements = document.getElementsByClassName('${className}');
            return elements[elements.length - 1].innerText;
        `);

        // 콜백 함수 실행
        callback(lastElementText);

    } catch (err) {
        console.error(err);
    } 
    finally {
        // await driver.quit();
    }
}

// 함수 사용 예시
manipulateWebPage('안녕 히후미', (text) => {
  console.log(text);
});
