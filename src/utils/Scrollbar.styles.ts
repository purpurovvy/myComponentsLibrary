export const ScrollbarStyles = {
  scrollbarWidth: 'thin',
  scrollbarColor: 'currentColor #f2f2f2',
  '&::-webkit-scrollbar': { width: '4px' },
  '&::-webkit-scrollbar-track': {
    boxSizing: 'border-box',
    backgroundColor: 'bookerPalette.divider',
    borderLeft: '1px solid transparent',
    borderRight: '1px solid transparent',
    backgroundClip: 'padding-box',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'primary.main', borderRadius: '5px',
  },
};
