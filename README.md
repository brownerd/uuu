# URAWSM HELPER

Enable Importing, Exporting and Saving of URAWSM syntax and ui themes easily.

Just watch this [video]()


## Installation/Dependencies
- Install [URAWSM-HELPER]() and activate it
- Install [URAWSM-UI]() and activate it
- Install [URAWSM-SYNTAX]() and activate it


## Usage
This package does several thing:
1. Imports and Exports UI and SYNTAX
1. Syncs font-sizes between UI and SYNTAX
1. Enables you to switch between preset themes
1. Enables you to save and switch between your own themes
1. Makes it easy to Reload the window

### Switching between URAWSM's preset themes
There are 10 preset themes. Here is how you access them:

1. **Theme 1 - Melowdrama**     Press `Ctrl+Opt+Cmd+1`
1. **Theme 2 - Amir**           Press `Ctrl+Opt+Cmd2`
1. **Theme 3 - Schmaterial**    Press `Ctrl+Opt+Cmd+3`
1. **Theme 4 - DarkEarth**      Press `Ctrl+Opt+Cmd+4`
1. **Theme 5 - Brownerd**       Press `Ctrl+Opt+Cmd+5`
1. **Theme 6 - SuperNES**       Press `Ctrl+Opt+Cmd+6`
1. **Theme 7 - TMNT-Donetello** Press `Ctrl+Opt+Cmd+7`
1. **Theme 8 - MiamiVice**      Press `Ctrl+Opt+Cmd+8`
1. **Theme 9 - Typographical**  Press `Ctrl+Opt+Cmd+9`
1. **Theme 10 - BuckNaked**     Press `Ctrl+Opt+Cmd+0`

You can also use the Menu. Goto Packages > urawsm

All of these themes are easily hackable using URAWSM. Use any of these as a starting point.


### Saving your own custom UI+SYNTAX themes
As you make changes to ANY theme, it's state will be saved behind the scenes, but once you switch away to another theme, the previous one will be lost. So here is how you can save your own themes so they wont get lost when you switch to another theme.

1. Work on your UI and SYNTAX them for as long as you want
1. Press `Crtl+Opt+1` to save your custom theme.

Notice that you can also use the Menu as well Packages > urawsm > Save Theme.

You have 5 slots to save to. You will find it so easy to make themes that you will likely find another way to store all your themes.


### Using saved  UI+SYNTAX themes
Once you have a custom theme saved to one of the available slots, you can then switch to another theme without losing your work. When you are ready to switch back to your custom theme you can use a hotkey or use the Menu above Packages > urawsm > Use Theme.

Example: If you save your custom theme to Slot 1, then you can access by hotkey by pressing `Ctrl+1`

*If you switch to an empty slot, you will get an alert inside the Atom window. Telling you to save a theme to the slot first.*


### Exporting
There are 3 ways you can do this so pay attention:
1. You can Import and Export your Syntax theme
1. You can Import and Export your UI theme
1. You can Import and Export both at the same time

**Export both Syntax and UI**
1. Press `Ctrl+Opt+Cmd+o` - This will reveal a "syntax+ui theme object"
*You can also goto Packages > urawsm > Export theme*

**Export Syntax**
1. Press `Ctrl+Opt+Cmd+e` - This will reveal a "syntax theme string"

**Export UI**
1. Press `Ctrl+Opt+e` - This will reveal a "ui theme string"


### Importing
**Import Syntax and UI**
1. Paste a "syntax+ui theme object" into any window, then select the "syntax+ui theme 2. object" text.
2. Press `Ctrl+Opt+o` - This will import the "syntax+ui theme object" and reset to the new theme.
*You can also goto Packages > urawsm > Import theme*

**Import Syntax**
1. Paste a "syntax theme string" into any window, then select the "syntax theme string" text.
2. Press `Ctrl+Opt+Cmd+i` - This will import the "syntax theme string" and reset to the new theme.

**Import UI**
1. Paste a "ui theme string" into any window, then select the "ui theme string" text.
2. Press `Ctrl+Opt+i` - This will import the "ui theme string" and reset to the new theme.


## Extra Helpful features
**Font Check**
It is common for the font-size of the UI to be different from the font-size of the SYNTAX.

Press `Ctrl+Opt+Cmd+c` to see what they are. I prefer to have them in sync, but other's might want. If you want to sync the UI and SYNTAX, then follow the steps below.

**Font Sync**
To sync the UI and SYNTAX font-sizes to be the same:

Press `Ctrl+Opt+Cmd+f`

**Reload**
Reloading the window can be a bit of a pain. Here is a hotkey to make it easy:

Press `Ctrl+Opt+Cmd+r`


## Issues
If your style doesn't show, or it if looks like all the styles reverted to the default, then just "reload" the window. You can do this in one of three ways:

- Goto View > Developer > Reload Window
- Or open the command palette `shift+cmd+P`, type `reload` and press enter


![A screenshot of your theme](https://f.cloud.github.com/assets/69169/2289498/4c3cb0ec-a009-11e3-8dbd-077ee11741e5.gif)

## Extras!

**File icons**
I got these from [File Icons](https://atom.io/packages/file-icons).

**PlatformIO IDE Terminal**
If you like your Terminal in your Atom editor check out [Platformio IDE Termina](https://atom.io/packages/platformio-ide-terminal).

**Monoid Font**
If you want more from a monospaced font, check out [Monoid](https://larsenwork.com/monoid/).


## Goals
This evolved as an effort to make the process of hacking a theme easier. I think this makes that possible. I hope this opens insights into making theme creation, editing and sharing easier for everyone. 


## Issues/Requests
If there is a special case that you need, then let me know. I can't promise that I can make an update, but I will look at the ticket and respond.
