import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './Types';

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref
  }
}