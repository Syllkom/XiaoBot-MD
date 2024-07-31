const fetch = require('node-fetch');
const cheerio = require('cheerio');
const bingUrl = 'https://www.bing.com';

class BingApi {
  constructor(cookie) {
    this.cookie = cookie;
    this.headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Alt-Used': 'www.bing.com',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      Cookie: `_U=${cookie};`,
      'X-Forwarded-For': `20.${this.getRandomNum()}.${this.getRandomNum()}.${this.getRandomNum()}`,
    };
  }

  async createImages(prompt, isSlowMode) {
    try {
      const payload = `q=${encodeURIComponent(prompt)}`;
      let credits = await this.getCredits();
      if (!credits) {
        credits = 0;
      }
      let response = await this.sendRequest(credits > 0 ? isSlowMode : true, payload);

      if (response.status === 200) {
        const responseHtml = await response.text();
        const $ = cheerio.load(responseHtml);
        const errorAmount = $('.gil_err_img.rms_img').length;
        if (!isSlowMode && credits > 0 && $('#gilen_son').hasClass('show_n')) {
          throw 'Dalle-3 is currently unavailable due to high demand';
        } else if (
          $('#gilen_son').hasClass('show_n') ||
          (errorAmount === 2 && credits > 0 && isSlowMode)
        ) {
          throw 'Slow mode is currently unavailable due to high demand';
        } else if (errorAmount === 2) {
          throw 'Invalid cookie';
        } else if (errorAmount === 4) {
          throw 'Prompt has been blocked';
        } else {
          throw 'Unknown error';
        }
      }

      const eventId = response.headers.get('x-eventid');
      return await this.retrieveImages(eventId);
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  async getCredits() {
    const response = await fetch(`${bingUrl}/create`, {
      headers: this.headers,
      method: 'GET',
      mode: 'cors',
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    return $('#token_bal').text();
  }

  getRandomNum() {
    return Math.floor(Math.random() * 254) + 1;
  }

  async sendRequest(isSlowMode, payload) {
    try {
      const response = await fetch(
        `${bingUrl}/images/create?${payload}&rt=${isSlowMode ? '3' : '4'}`,
        {
          headers: this.headers,
          method: 'POST',
          mode: 'cors',
          redirect: 'manual',
        }
      );

      return response;
    } catch (error) {
      console.log('Error in sendRequest:', error);
    }
  }

  async retrieveImages(eventId) {
    try {
      while (true) {
        const images = await fetch(`${bingUrl}/images/create/async/results/1-${eventId}`, {
          headers: this.headers,
          method: 'GET',
          mode: 'cors',
        });

        const html = await images.text();

        if (html.includes(`"errorMessage":"Pending"`)) {
          throw 'Error occurred';
        }

        let results = [];

        if (html === '') {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }

        const $ = cheerio.load(html);
        for (let i = 0; i < $('.mimg').length; i++) {
          const badLink = $('.mimg')[i].attribs.src;
          const goodLink = badLink.slice(0, badLink.indexOf('?')); // Delete the parameters

          results.push(goodLink);
        }

        return results;
      }
    } catch (error) {
      console.log(`Error in retrieveImages: ${error}`);
    }
  }
}

const apikeybing = '1KqqbDzPWQR8g3lsLv_QIoSpIrgAmFyafTHyBQxi5PLpvXz53JEgvg6FRcNDdjDVpx9RrCCHLoQW_rqVCwilJlqDaQio91bX8RkcW4_MkpdypskZ28Aa9KtV_NC4trrVSSj1mL1OCSkg0T3sYSrGvfaJ_Ap5g-dJ_Ej8Yjz8q4IcRwwlu4BaEgOb6KTtUt5EWXaLz2EJvhV2Yr9rs5_pu3Q';

//const apikeybing = apikyst[Math.floor(apikyst.length * Math.random())];

module.exports = { BingApi, apikeybing };
