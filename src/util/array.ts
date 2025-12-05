export const mergeRanges = (ranges: [number, number][]) => {
  if (ranges.length === 0) return [];
  
  const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);
  const result: [number, number][] = [sortedRanges[0]!];
  
  for (let i = 1; i < sortedRanges.length; i++) {
    const [currentStart, currentEnd] = sortedRanges[i]!;
    const last = result[result.length - 1];
    
    if (currentStart <= last![1]) {
      // Ranges overlap or touch, merge them
      last![1] = Math.max(last![1], currentEnd);
    } else {
      // Ranges don't overlap, add to result
      result.push([currentStart, currentEnd]);
    }
  }

  return result
}
