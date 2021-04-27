function sides(literals, ...expressions) {
    const [a, p] = expressions;
  const value = Math.sqrt((p ** 2 - (16 * a)));

  return [((p - value) / 4), ((p + value) / 4)];
  
  
}