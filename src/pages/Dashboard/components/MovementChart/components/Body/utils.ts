//https://date-fns.org/v2.28.0/docs/getDay
export function dayToString(day: 0 | 1 | 2 | 3 | 4 | 5 | 6) {
  switch (day) {
    case 0: return 'S'; //Sunday
    case 1: return 'M';
    case 2: return 'T';
    case 3: return 'W';
    case 4: return 'T';
    case 5: return 'F';
    case 6: return 'S';
  }
}