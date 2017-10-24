
const blc = require('broken-link-checker');

module.exports = async function ({ request, response }) {

    let requestUrl = request.url;
    //eg  url: 'http://localhost:3000/?url=http://seanloh.com/2016/12/26/web-scrapping-and-crawling-approach-how/',
    const sleep = require('then-sleep');
    requestUrl = requestUrl.split("?url=")[1];
    if (!requestUrl) {
        response.status = 200;
        response.body = { 'status': 'failed' };
        return;
    }
    const urlwithoutHttp = requestUrl.replace('//', '@@');
    const indexSplit = urlwithoutHttp.indexOf("/");
    const baseUrl = requestUrl.substring(0, indexSplit);
    const serviceUrl = requestUrl.substring(indexSplit, requestUrl.length);

    console.log('baseUrl', baseUrl); console.log('serviceUrl', serviceUrl);

    const htmlChecker = new blc.HtmlChecker({}, {
        html: function (tree, robots) { },
        junk: function (result) { },
        link: function (result) {
            console.log('isBroken', result.broken)

            response.status = 200;
            response.body = { status: 'success', isBroken: result.broken };

        },
        complete: function () { }
    });
    htmlChecker.scan(`<a href="${serviceUrl}"></a>`, `${baseUrl}`);
   await sleep(1500);

};