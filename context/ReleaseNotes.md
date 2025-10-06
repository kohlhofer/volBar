# Release Notes

## Version 4.0 - Help & Documentation (Current)
**Added comprehensive help system**
- Added Help menu with in-app documentation
- Created setup guides, troubleshooting, and Apple Music help
- Improved user experience with native help windows
- Cleaned up Window menu for single-window app

## Version 3.0 - Launch at Login
**Added startup automation**
- Launch at Login checkbox in settings
- Menu bar toggle for Launch at Login
- Uses modern Service Management framework
- Separate MIDI configuration labels for clarity
- Visual dividers between UI sections

**Fixed Issues:**
- ~~Combined MIDI Channel/CC labels causing confusion~~ - Split into separate labels
- ~~Missing startup automation~~ - Full Launch at Login implementation

## Version 2.0 - Apple Music Integration  
**Added independent Apple Music volume control**
- Optional Apple Music volume control via AppleScript
- Separate MIDI Learn for Apple Music
- Permission management and caching
- Asynchronous operations to prevent UI blocking
- Menu bar controls for both system and Apple Music

**Fixed Issues:**
- ~~App freezing when checking Apple Music permissions~~ - Asynchronous permission checking
- ~~Menu bar sliders jumping during MIDI input~~ - Anti-feedback system

## Version 1.0 - Core MIDI Volume Control
**Initial release with core functionality**
- System volume control via MIDI
- MIDI Learn functionality
- Hot-plug device detection  
- Menu bar interface with live volume sliders
- Real-time Core Audio integration
- Sandbox security with proper entitlements

**Fixed Issues:**
- ~~Sandbox build failures~~ - Proper Core Audio entitlements

## Technical Notes
- **Frameworks:** Core MIDI, Core Audio, Service Management, ScriptingBridge
- **Architecture:** Modular design with separate managers for MIDI, Volume, and Login Items
- **Security:** Full sandbox compatibility with minimal required permissions