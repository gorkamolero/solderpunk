import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'grid', label: 'Button Grid',
    tip: 'The 8x5 backlit matrix for creating modules, selecting pages, and patching connections.',
    rect: ['34.2%', '18.9%', '52.9%', '48.5%'], group: 'grid' },

  { id: 'screen', label: 'OLED Screen',
    tip: 'Shows patch names, module parameters, menus, and current values.',
    rect: ['13.6%', '32.0%', '16.7%', '14.4%'], group: 'screen' },

  { id: 'enc', label: 'Encoder',
    tip: 'Main rotary control for scrolling through modules, pages, parameters, and values.',
    rect: ['15.9%', '9.0%', '12.6%', '19.5%'], group: 'enc' },

  { id: 'util', label: 'Utilities',
    tip: 'Top-row shortcut buttons for editing, saving, viewing, and randomizing ZOIA pages.',
    rect: ['34.2%', '14.1%', '52.8%', '12.7%'], group: 'util' },

  { id: 'foot', label: 'Footswitches',
    tip: 'Performance switches for select, scroll, and bypass actions.',
    rect: ['14.5%', '72.6%', '71.6%', '16.4%'], group: 'foot' },

  { id: 'io', label: 'I/O',
    tip: 'Top-edge audio, MIDI, control, and power connections.',
    rect: ['16.9%', '3.7%', '66.9%', '5.4%'], group: 'io' },

  // ENCODER
  { id: 'enc-knob', label: 'Encoder Knob',
    tip: 'Turn to change the highlighted value or browse lists.',
    rect: ['15.9%', '10.2%', '12.6%', '18.1%'], group: 'knob' },

  // SCREEN
  { id: 'screen-oled', label: 'OLED',
    tip: 'Read the current patch, module, parameter, and percentage value.',
    rect: ['13.6%', '32.0%', '16.7%', '14.4%'], group: 'button' },

  // TOP UTILITIES
  { id: 'util-shift', label: 'Shift',
    tip: 'Access alternate grid functions and shortcuts.',
    rect: ['34.3%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-copy', label: 'Copy',
    tip: 'Copy the selected module, page, or parameter context.',
    rect: ['41.1%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-edit', label: 'Edit',
    tip: 'Enter editing actions for the selected grid item.',
    rect: ['48.0%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-delete', label: 'Delete',
    tip: 'Remove the selected module or connection.',
    rect: ['54.7%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-favorite', label: 'Favorite',
    tip: 'Mark or recall favorite modules and patch elements.',
    rect: ['61.5%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-view', label: 'View',
    tip: 'Toggle display views for pages, patches, and module details.',
    rect: ['68.2%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-save', label: 'Save',
    tip: 'Save the current patch or edited settings.',
    rect: ['75.1%', '14.1%', '5.1%', '12.7%'], group: 'button' },
  { id: 'util-random', label: 'Random',
    tip: 'Randomize a supported value or patching context.',
    rect: ['81.9%', '14.1%', '5.1%', '12.7%'], group: 'button' },

  // FOOTSWITCHES
  { id: 'foot-select', label: 'Select',
    tip: 'Confirm the highlighted item or trigger the assigned select action.',
    rect: ['14.7%', '72.6%', '8.2%', '11.2%'], group: 'button' },
  { id: 'foot-scroll', label: 'Scroll',
    tip: 'Step through pages, patches, or assigned performance targets.',
    rect: ['46.9%', '72.6%', '7.8%', '11.2%'], group: 'button' },
  { id: 'foot-bypass', label: 'Bypass',
    tip: 'Bypass or engage the current ZOIA patch.',
    rect: ['78.4%', '72.6%', '8.0%', '11.2%'], group: 'button' },

  // TOP I/O
  { id: 'io-1', label: 'I/O 1',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['16.9%', '3.7%', '6.7%', '5.4%'], group: 'jack' },
  { id: 'io-2', label: 'I/O 2',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['49.7%', '3.9%', '6.5%', '5.2%'], group: 'jack' },
  { id: 'io-3', label: 'I/O 3',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['60.1%', '3.9%', '6.2%', '5.2%'], group: 'jack' },
  { id: 'io-4', label: 'I/O 4',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['69.2%', '3.9%', '5.8%', '5.2%'], group: 'jack' },
  { id: 'io-5', label: 'I/O 5',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['78.1%', '3.9%', '5.7%', '5.2%'], group: 'jack' },
]

export const legendItems: LegendItem[] = [
  { id: 'grid', label: 'Button Grid', color: '#d4880a' },
  { id: 'screen', label: 'Screen', color: '#0af' },
  { id: 'enc', label: 'Encoder', color: '#1a6b4a' },
  { id: 'util', label: 'Utilities', color: '#444444' },
  { id: 'foot', label: 'Footswitches', color: '#ff4d4d' },
  { id: 'io', label: 'I/O', color: '#2a5a8a' },
]
