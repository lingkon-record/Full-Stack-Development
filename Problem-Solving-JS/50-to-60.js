
for (let i = 50; i <= 60; i++) {
  console.log(i);
}

// avoid  61 65 66
for (let i = 60; i <= 70; i++) {
  if (i !== 61 && i !== 65 && i !== 66) {
    console.log(i);
  }
}
