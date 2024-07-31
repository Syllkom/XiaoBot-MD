const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function wallpaper(title, page = '1') {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`);
			const $ = cheerio.load(data);
			const resultados = [];
			$('div.grid-item').each(function (a, b) {
				resultados.push({
					title: $(b).find('div.info > p').attr('title'),
					type: $(b).find('div.info > a:nth-child(2)').text(),
					source: 'https://www.besthdwallpaper.com' + $(b).find('a').attr('href'),
					image: [
						$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), 
						$(b).find('picture > source:nth-child(1)').attr('srcset'), 
						$(b).find('picture > source:nth-child(2)').attr('srcset')
					]
				});
			});
			resolve(resultados)
		} catch (e) {
			reject(e)
		}
	});
}

module.exports = { wallpaper }