import React from 'react';

export default ({ duration }: { duration: number }) => {
  const _duration = duration < 10 ?
    `0${duration}` :
    duration.toString();

  return (
    <p>
      {`${_duration} day(s)`}
    </p>
  );
}