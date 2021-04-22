const $ = {}
$.send = function({
	url,
	method,
	params = {},
	data = {}
}) {
	return new Promise((resolve, reject) => {
		//拼接params
		let queryString = "";
		Object.keys(params).forEach(key => {
			queryString += `${key}=${params[key]}&`;
		});
		if (queryString) {
			queryString = queryString.substring(0, queryString.length - 1);
			url += "?" + queryString;
		}

		const request = new XMLHttpRequest();
		request.open(method, url, true);
		if (method === "GET") {
			request.send();
		} else if (method === "POST") {
			request.setRequestHeader(
				"Content-Type",
				"application/json;charset=utf-8"
			);
			request.send(JSON.stringify(data));
		}
		request.onreadystatechange = function() {
			if (request.readyState !== 4) {
				return;
			}
			const {
				status,
				statusText
			} = request;
			if (status >= 200 && status < 300) {
				const response = {
					data: JSON.parse(request.response),
					status,
					statusText
				};
				resolve(response);
			} else {
				reject(new Error("request error status is " + status));
			}
		};
	});
}
$.get = function(url, params = {}) {
	return $.send({
		url: url,
		method: "GET",
		params: params
	})
}
$.post = function(url, data = {}) {
	return $.send({
		url: url,
		method: "POST",
		data: data
	})
}
