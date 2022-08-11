function divide(dividend: number, divisor: number): number {
  // Bit shifting with negatives doesn't produce the result we want, so we
  // will normalize to always divide positive numbers.  At the end,
  // we will use basic math rules to flip the sign if we have to.
  const positive = (dividend <= 0 && divisor <= 0) || (dividend >= 0 && divisor >= 0);
  divisor = divisor < 0 ? 0 - divisor : divisor;
  dividend = dividend < 0 ? 0 - dividend : dividend;

  // This algorithm is recursive so we need to break out of it when the dividend is less
  // than the divisor.  That will always produce a result of 0.
  if (dividend < divisor) {
    return 0;
  }

  // Also an edge case here.  If the two are equal, the result is 1 or -1 always because ... math.
  if (dividend === divisor) {
    return positive ? 1 : -1;
  }

  // When you multiply any number x * y, it's the same as doing (x + x + x + x ... + x) y times.
  // An easy solution here is to just keep adding the divisor over and over again until we pass the result we want,
  // but that is nasty slow and has O(n) where n is the dividend.  So instead, we are going to bitwise shift the
  // divisor and continue multiplying it by 2.  We continue to do this until the next bit shift breaks past our
  // dividend.  When that happens, you know for sure you can multiply divisor * quotient and your number will be
  // less than dividend.  After that, you just need to add in the remainder and you're good to go.  It is possible
  // to have a big remainder.  That is why we're checking for 0 as well, because once we hit 1073741824 (2147483648 / 2), then
  // next double will cross it over to -2147483648, so we have to handle that as well.
  const _divisor = divisor;
  let quotient = 1;

  for (let next = divisor << 1; next > 0 && next <= dividend; next = divisor << 1) {
    divisor <<= 1;
    quotient <<= 1;
  }

  // We have to add in the remaining division.  If we overflowed, then this number can still be pretty big.
  quotient = quotient + divide(dividend - divisor, _divisor);

  // Finally, we know we did positive division.  So if we're expecting a negative number, then we can
  // go ahead and flip the sign by subtracting from 0.
  quotient = positive ? quotient : 0 - quotient;

  // Finally, leet code magic because requirements...
  quotient = Math.min(2147483647, quotient);
  quotient = Math.max(-2147483648, quotient);

  return quotient;
}
