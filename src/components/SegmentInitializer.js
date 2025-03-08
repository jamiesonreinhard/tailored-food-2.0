import { useEffect } from 'react';
import { initSegment } from '@/lib/segment';

const SegmentInitializer = () => {
  useEffect(() => {
    initSegment();
  }, []);

  return null;
};

export default SegmentInitializer; 