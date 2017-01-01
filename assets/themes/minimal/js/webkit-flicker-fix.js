//
// Copyright (c) 2014-2017 Yao Wei Tjong
//

// Avoid theme flicker on Webkit-based browsers
var bg = Cookies.get('theme') === 'dark' ? '#131313' : 'white';
document.write('<style>body { background-color: ' + bg + '; }</style>');
