import type { Theme } from '@mui/material/styles';

import { ImageStyles, ObjectFit } from '@/types/image-styles';

const styles = {
  Image: (objectFit: ObjectFit, objectPosition: string): ImageStyles => ({
    objectFit: objectFit,
    objectPosition: objectPosition,
  }),
};

export default styles;
