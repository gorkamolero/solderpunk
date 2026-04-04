==========================================================================================
Tetra OS Main v.1.5, Voice v.1.2 ReadMe File                                    Sep-4-2014
==========================================================================================

Please read this carefully before attempting to update your Tetra. It could prevent you 
from experiencing a lot of aggravation and grief.

Most OS updates fix only minor bugs that the vast majority of users never encounter. If 
you are experiencing problems with your Tetra, please contact 
support@davesmithinstruments.com for help in diagnosing the cause. The OS will not "go 
bad" or become corrupt unless there is a hardware problem, so re-installing the OS will 
not help and is not recommended. A failed OS reload could leave you with a useless 
instrument in need of even more servicing.

If the installed OS version in your Tetra is already the current version, there is no need 
to reinstall it. There is nothing to be gained from installing it again.

In this document:

 I. CHECKING YOUR TETRA'S INSTALLED OS VERSIONS
II. UPDATING THE TETRA'S OS

__________________________________________________________________________________________
I. CHECKING YOUR TETRA'S INSTALLED OS VERSIONS

The Tetra has two types of processors, Main (AKA "PIC") and Voice, and each has its own 
operating system.

The installed versions are displayed on power up. This is the only accurate method of 
determining the installed versions. The paper labels on the chips are not to be relied 
upon and the editor software may not display the correct version.

The current Main operating system is version 1.1; Voice is version 1.1.

__________________________________________________________________________________________
II. UPDATING TETRA'S OS

Tetra's operating systems are updated via MIDI. You will need a DAW, MIDI utility, or 
other application capable of opening and transmitting MIDI System Exclusive (SysEx) 
messages. SysEx Librarian (Mac OS) and MIDI-OX (Windows) are shareware MIDI utilities that 
can be downloaded from:

http://www.snoize.com/SysExLibrarian/

http://www.midiox.com/

For more details about these MIDI utilities, including specific settings and 
troubleshooting information, see "Using SysEx Librarian.txt" or "Using MIDI-OX.txt" 
included with this document.

You will also need a MIDI interface to connect your computer to Tetra.

************************************* IMPORTANT NOTE *************************************

Though the Tetra is equipped with USB, the operating systems can only be updated via 
the 5-pin MIDI jack.

To load the OS:

1. Connect your computer's MIDI out to Tetra's MIDI in.

2. Open the OS file in a MIDI utility, DAW, or other application capable of opening and 
transmitting SysEx files.

3. Transmit the file to the Tetra.

   While the OS file is being transmitted, the display reads either "Main OS Load" or 
   "Voice OS Load" and counts down for the duration of the transfer. When the countdown 
   concludes, the display changes to "Writing Now!" as the file is written to memory. As 
   the OS is being written, the front panel LEDs will flash in sequence. Do not turn off 
   Tetra while the OS is writing! When the write is complete, normal operation will 
   resume.

If you're updating both operating systems, repeat the procedure above with the other OS 
file.

__________________________________________________________________________________________
II. CHANGES AND NEW FEATURES
Several new features have been added to Tetra since its initial release. Some or all of 
the features listed below may be new to you or changed, depending upon the OS version you 
are updating from.

GLOBAL PARAMETERS
   Clock: V1 Master (new value)
   Mode Lock: Off, Prog, Combo (new parameter)
   Balance: -14 to 14 (greater resolution)

SEQUENCER PARAMETERS
   Slew

MISCELLANEOUS PARAMETERS
   Arpeggiator Mode

COMBO OPERATION
   Carefully read "Combos" on page 33 of version 1.3 of the manual to familiarize yourself 
   with improvements to combo operation.


For a complete description of the additions and changes, please download the latest 
version of the Tetra Operation Manual from the DSI site.
