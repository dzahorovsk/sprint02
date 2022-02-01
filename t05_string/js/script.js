function count() {
    let concstr = 'So she bought a bit of butter, better than her bitter butter, and she baked it in herbatter,' +
    ' and the batter was not bitter.So \'twas better Betty Botter bought a bit of better butter.'
    let str1 = 'Betty Botter had some butter, "but" she said, "this butter\'s bitter.' +
    ' If I bake this bitter butter, it would make my batter bitter.' +
    ' But a bit of better butter – that would make my batter better."'
    let str2 = 'She sells seashells by the seashore'
    let str3 = 'might you might a mightned might into an un-mightned might like a mightner mightmight ' +
    'a mightned might into an un-mightned might?'
    concstr = '\nConcatenation in a phrase:\n' + str1 + concstr
    let replstr3 = str3.replace (/might/gi, 'can')
    str1 = 'Just a string: \n' + str1 + '\nLength: ' + str1.length + '\nCharacter number 2 is: ' + str1[2] + concstr + '\nTo uppercase: ' + str2.toUpperCase() + '\nReplace all occurrences:\n' + replstr3
    return str1
}
alert(count());