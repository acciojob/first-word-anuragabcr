function firstWord(s) {
  // your code here
	s = s.trim().split(" ")
	return s.length > 0 ? s[0] : ""

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
