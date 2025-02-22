
function checkAnagrams(str1,str2)
{
    let str1Sorted = str1.split('').sort().join('');
    let str2Sorted = str2.split('').sort().join('');

    if(str1Sorted === str2Sorted){
        console.log("The strings are anagrams");
    }
    else {
        console.log("The strings are not anagrams");
    }
}

let str1 = "listen";
let str2 = "silent";
checkAnagrams(str1,str2);