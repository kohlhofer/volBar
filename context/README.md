# MIDI Volume Control

Control your Mac's system volume and Apple Music volume using any MIDI controller. Perfect for musicians, producers, and anyone who wants tactile control over their audio levels.

## Features

- **System Volume Control** - Instant MIDI control of Mac system volume
- **Apple Music Control** - Optional independent Apple Music volume control  
- **MIDI Learn** - Automatic controller mapping for easy setup
- **Menu Bar Integration** - Live volume sliders and quick access
- **Launch at Login** - Optional automatic startup
- **Hot-plug Support** - Automatic MIDI device detection
- **Sandbox Security** - App Store ready with minimal permissions

## Help & Documentation

The app includes comprehensive built-in help accessible from the Help menu:

- **MIDI Volume Control Help** - Overview and quick start guide
- **MIDI Setup Guide** - Step-by-step controller configuration  
- **Apple Music Setup** - Permission setup and troubleshooting
- **Troubleshooting** - Common issues and solutions
- **Release Notes** - Version history and feature updates

Access these from the app's **Help** menu or press **⌘?** for quick help.

## Requirements

- macOS 10.15 (Catalina) or later
- MIDI controller or interface
- Apple Music app (for optional Apple Music control)

## Installation

### Building from Source
1. Clone or download this repository
2. Open `MidiVolumeControl.xcodeproj` in Xcode
3. Build and run the project (⌘+R)

## Quick Start

1. **Connect your MIDI device** to your Mac
2. **Launch the app** - it appears in your menu bar
3. **Open Settings** - Click menu bar icon → "Settings"
4. **Use MIDI Learn** - Click "MIDI Learn" and move a controller
5. **Test** - Move your controller to change volume

For detailed setup instructions, Apple Music configuration, and troubleshooting, use the built-in **Help menu** in the app.

## Technical Details

**Architecture:** Modular design with separate managers for MIDI, Volume, and Login Items  
**Frameworks:** Core MIDI, Core Audio, Service Management, ScriptingBridge, Cocoa  
**Security:** Fully sandboxed with minimal required permissions  
**Performance:** Real-time MIDI processing with instant system volume response

### File Structure
```
MidiVolumeControl/
├── AppDelegate.swift          # Menu bar interface
├── ViewController.swift       # Settings window  
├── MIDIManager.swift         # MIDI device handling
├── VolumeManager.swift       # Volume control
├── LoginItemManager.swift   # Startup management
├── HelpWindowController.swift # Help system
└── Help/                     # Documentation files
```

## Privacy & Permissions

**Required:** MIDI device access  
**Optional:** Apple Music automation (only when enabled)

For complete version history and detailed technical information, see the **Release Notes** in the app's Help menu.