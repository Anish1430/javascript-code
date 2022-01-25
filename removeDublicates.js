const DuplicateRemove = str => {
    let lastChar = str[0];
    let final = str[0];
    for (const char of str.slice(1)) {
      if (lastChar !== char) 
      final =final + char;
      lastChar = char;
    }
    return final;
  };
  console.log(DuplicateRemove('gggeeekkkssttteeerrr'));