module.exports = () => {
  let phoneLink = document.createElement('a');
  phoneLink.setAttribute('hr' + 'ef', 'te' + 'l:' + '+' + '4930' + '55102' + '455');
  let phoneText = document.createTextNode('+' + '49 (' + '0)30' + ' 55 10 2' + '4 55');
  phoneLink.appendChild(phoneText);
  document.getElementById('phone').appendChild(phoneLink);

  let emailLink = document.createElement('a');
  emailLink.setAttribute('hr' + 'ef', 'mai' + 'lto:' + 'kontakt' + '@' + 'stephanhuettner.' + 'de');
  let emailText = document.createTextNode('kontakt' + '@' + 'stephanhuettner.' + 'de');
  emailLink.appendChild(emailText);
  document.getElementById('mail').appendChild(emailLink);
};