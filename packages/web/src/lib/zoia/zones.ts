import type { Zone, LegendItem } from '@/lib/shared-types'

export const zones: Zone[] = [
  // PANEL SECTIONS
  { id: 'grid', label: 'Button Grid',
    tip: 'The 8x5 backlit matrix for creating modules, selecting pages, and patching connections.',
    rect: ['32.5%', '18.4%', '55.4%', '46.0%'], group: 'grid' },

  { id: 'screen', label: 'OLED Screen',
    tip: 'Shows patch names, module parameters, menus, and current values.',
    rect: ['9.8%', '30.4%', '17.5%', '15.4%'], group: 'screen' },

  { id: 'enc', label: 'Encoder',
    tip: 'Main rotary control for scrolling through modules, pages, parameters, and values.',
    rect: ['12.9%', '10.9%', '11.7%', '17.6%'], group: 'enc' },

  { id: 'util', label: 'Utilities',
    tip: 'Top-row shortcut buttons for editing, saving, viewing, and randomizing ZOIA pages.',
    rect: ['32.5%', '13.0%', '55.4%', '12.1%'], group: 'util' },

  { id: 'foot', label: 'Footswitches',
    tip: 'Performance switches for select, scroll, and bypass actions.',
    rect: ['11.8%', '72.5%', '75.7%', '14.4%'], group: 'foot' },

  { id: 'io', label: 'I/O',
    tip: 'Top-edge audio, MIDI, control, and power connections.',
    rect: ['15.1%', '3.5%', '67.4%', '5.4%'], group: 'io' },

  // ENCODER
  { id: 'enc-knob', label: 'Encoder Knob',
    tip: 'Turn to change the highlighted value or browse lists.',
    rect: ['12.9%', '10.9%', '11.7%', '17.6%'], group: 'knob' },

  // SCREEN
  { id: 'screen-oled', label: 'OLED',
    tip: 'Read the current patch, module, parameter, and percentage value.',
    rect: ['9.8%', '30.4%', '17.5%', '15.4%'], group: 'button' },

  // TOP UTILITIES
  { id: 'util-shift', label: 'Shift',
    tip: 'Access alternate grid functions and shortcuts.',
    rect: ['32.5%', '13.0%', '4.7%', '12.1%'], group: 'button' },
  { id: 'util-copy', label: 'Copy',
    tip: 'Copy the selected module, page, or parameter context.',
    rect: ['39.8%', '13.0%', '4.7%', '12.1%'], group: 'button' },
  { id: 'util-edit', label: 'Edit',
    tip: 'Enter editing actions for the selected grid item.',
    rect: ['46.9%', '13.0%', '4.7%', '12.1%'], group: 'button' },
  { id: 'util-delete', label: 'Delete',
    tip: 'Remove the selected module or connection.',
    rect: ['54.2%', '13.0%', '4.7%', '12.1%'], group: 'button' },
  { id: 'util-favorite', label: 'Favorite',
    tip: 'Mark or recall favorite modules and patch elements.',
    rect: ['61.4%', '13.0%', '4.8%', '12.1%'], group: 'button' },
  { id: 'util-view', label: 'View',
    tip: 'Toggle display views for pages, patches, and module details.',
    rect: ['68.6%', '13.0%', '4.8%', '12.1%'], group: 'button' },
  { id: 'util-save', label: 'Save',
    tip: 'Save the current patch or edited settings.',
    rect: ['75.9%', '13.0%', '4.8%', '12.1%'], group: 'button' },
  { id: 'util-random', label: 'Random',
    tip: 'Randomize a supported value or patching context.',
    rect: ['83.1%', '13.0%', '4.8%', '12.1%'], group: 'button' },

  // FOOTSWITCHES
  { id: 'foot-select', label: 'Select',
    tip: 'Confirm the highlighted item or trigger the assigned select action.',
    rect: ['11.9%', '72.5%', '7.0%', '10.7%'], group: 'button' },
  { id: 'foot-scroll', label: 'Scroll',
    tip: 'Step through pages, patches, or assigned performance targets.',
    rect: ['46.1%', '72.5%', '7.1%', '10.7%'], group: 'button' },
  { id: 'foot-bypass', label: 'Bypass',
    tip: 'Bypass or engage the current ZOIA patch.',
    rect: ['80.4%', '72.5%', '7.1%', '10.7%'], group: 'button' },

  // TOP I/O
  { id: 'io-1', label: 'I/O 1',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['15.1%', '3.5%', '6.0%', '5.4%'], group: 'jack' },
  { id: 'io-2', label: 'I/O 2',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['48.4%', '3.5%', '6.0%', '5.4%'], group: 'jack' },
  { id: 'io-3', label: 'I/O 3',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['59.3%', '3.5%', '4.7%', '5.4%'], group: 'jack' },
  { id: 'io-4', label: 'I/O 4',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['68.0%', '3.5%', '6.0%', '5.4%'], group: 'jack' },
  { id: 'io-5', label: 'I/O 5',
    tip: 'Top-edge connection point for ZOIA power, control, MIDI, or audio routing.',
    rect: ['77.4%', '3.5%', '5.1%', '5.4%'], group: 'jack' },
]

export const legendItems: LegendItem[] = [
  { id: 'grid', label: 'Button Grid', color: '#d4880a' },
  { id: 'screen', label: 'Screen', color: '#0af' },
  { id: 'enc', label: 'Encoder', color: '#1a6b4a' },
  { id: 'util', label: 'Utilities', color: '#444444' },
  { id: 'foot', label: 'Footswitches', color: '#ff4d4d' },
  { id: 'io', label: 'I/O', color: '#2a5a8a' },
]
