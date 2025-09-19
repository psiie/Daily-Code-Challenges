// https://www.codewars.com/kata/514a024011ea4fb54200004b/

function domainName(url){
  //your code here
	
	// prefix input with http:// if it does not have it. 
  // Leveraging regex negative-lookahead  
  const validURL = url.replace(/^(?!https?:\/\/)/, 'http://');
  let base = new URL(validURL)
    .host;
  
	// replace multipart TLD into a singlepart tld (eg: .co.jp)
  // NOTE: May not support 3-part TLD
  base = base.replace(/\.\w{2,3}\.\w{2,3}/g, '.tld')
	
	// slice out domain. Works backwards due to us not 
  // knowing how many nested subdomains exist.
  // We do, however, know only 1 tld exists now.
	return base
    .split('.')
		.slice(-2, -1)[0];
}
