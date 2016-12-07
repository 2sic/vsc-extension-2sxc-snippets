'use strict';

/**
 * Convert 2sxc snippets into VSCode format.
 * # Requires jQuery.
 **/

{
    let url = 'https://raw.githubusercontent.com/2sic/2sxc-ui/master/dist/sxc-develop/snippets.json.js';
	
    $.get(url)
        .then(res => JSON.parse(res).snippets)
        .then(parsed => parsed.reduce((all, s) => {
            if (!s.name) return all;
            let name = s.name.replace(/ /g, '-');
            all[name] = {
                prefix: name,
                body: s.content,
                description: s.help
            };
            return all;
        }, {}))
        .then(formatted => document.write(JSON.stringify(formatted)));
}