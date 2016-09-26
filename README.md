# UUU

Use this package for exporting and importing UUUr syntax and UI themes created with UUU-Syntax and UUU-UI. This is SUPER easy to do.


## Video - UUU





## Video - UUU-Syntax





## Video - UUU-UI

- Adjust bg
- adjust bg value

- adjust text color and value







## Collections





### Teams

#### STL Cardinals - UI




# UUU-syntax theme

This is a syntax for UUU.

UUU can easily change the color, font-style and font-weight of nearly every piece of syntax. So, make a syntax UUUr way.




## Usage
- Install [UUU-Syntax] and activate it
- Click on the gear icon to access settings for UUU-Syntax
- Style away!


**PROtip for theming**
- Use "dev mode" to see updates as you make them. Open your terminal navigate to your current working directory and enter `atom --dev .` Using the [Terminal Plus](https://atom.io/packages/terminal-plus) package it the fastest solution for me, but use whatever you like.
- Open files for all the languages that you want to style. You don't need to style every language. This is UUUr syntax!
- Just start at the top of the settings and work your way down. Make one change, and then check it out.
- If you have a bunch of colors that you want to use, just screenshot the swatches and use the color picker to select the colors. You do not need to write done your colors at all.
- Match the background of the editor with the background of the gutter.
- Match the background for the selected line with the "Button background" color in the UUU UI.



**Issues**
If your style doesn't show, or it if looks like all the styles reverted to the default, then just "reload" the window. You can do this in one of three ways:

- Goto View > Developer > Reload Window
- Or, press `ctrl + alt + cmd + L`
- Or open the command palette `shift+cmd+P`, type `reload` and press enter


* You will find that this is SUPER EASY and FAST todo. At some point you will want to export, import and save your cool, clever and quickly made syntaxes. Look below for extra add-ons.






## Extras! UUU- UI
If you want to edit UUUr UI also, then install [UUU-UI]() and enjoy the same freedom to edit UUUr UI also.

## Extras! Import and Export Syntax and UI
If you want to export and import your Syntaxes and UIs, then install [UUU]().

![A screenshot of your theme](https://f.cloud.github.com/assets/69169/2289498/4c3cb0ec-a009-11e3-8dbd-077ee11741e5.gif)

## Extras! File icons
I got these from [File Icons](https://atom.io/packages/file-icons).

## Extras! Terminal Plus
If you like your Terminal in your Atom editor check out [Terminal Plua](https://atom.io/packages/terminal-plus).

## Extras! Monoid Font
If you want more from a monospaced font, check out [Monoid](https://larsenwork.com/monoid/).


## Notes:
UUU-Syntax, lets you modify just about everything that it can. However, if you are an OCD type like me, then you might find that some styles modify some things that they should/shouldn't. Control at that level really becomes language specific. When a language/Grammar is mapped in Atom, it follows the same conventions used in TextMate. Read this:  [12 Language Grammars](http://manual.macromates.com/en/language_grammars.html#naming_conventions). The take away, is that there are many ways to mark up a Grammar, and these decisions are made differently between languages. Thus, there is an inconsistency in the use of available classes in Atom to style. Furthermore, not every Grammar marks up all of its pieces. Sometimes a grammar might lump a bunch of pieces into one identifier.

But so what! You want to style the syntax for the languages that you use! You don't need to style EVERY FUNKING LANGUAGE that exists right?! So go styles what you use!

Overall, I can live with what UUU-Syntax covers. If there is a special case that you need, then let me know. I can't promise that I can make an update, but I will look at the ticket and respond.









## Themes



### Blob

![blob](blob.png)

```json
{
  "theme": {
    "ui": "@text-color: rgba(72, 104, 113, 1);\n@text-value: 0;\n@heading-color: rgba(245, 245, 245, 1);\n@heading-value: 0;\n@background-color: rgba(0, 43, 53, 1);\n@background-value: 0;\n@background-navvalue: -2;\n@button-color: rgba(252, 62, 45, 1);\n@button-value: 0;\n@button-textcolor: background;\n@border-value: -5;\n@border-radius: 2;\n@findAndReplace-borderHighLightColor: rgba(255, 255, 255, 1);\n@findAndReplace-borderHighLightColorCurrent: rgba(0, 255, 102, 1);\n@git-infoColor: rgba(0, 170, 255, 1);\n@git-successColor: rgba(0, 255, 102, 1);\n@git-warningColor: rgba(255, 213, 0, 1);\n@git-errorColor: rgba(255, 0, 0, 1);\n@settingsPage-background: triangle;\n@settingsPage-nav: horizontal;\n@settingsPage-border: false;",
    "syntax": "@editor-backgroundcolor: rgba(255, 251, 0, 1);\n@editor-color: rgba(90, 110, 117, 1);\n@gutter-backgroundcolor: rgba(1, 43, 53, 1);\n@gutter-color: rgba(90, 110, 117, 1);\n@gutter-value: 30;\n@gutter-punk: hellyeah;\n@selectedline-backgroundcolor: rgba(0, 29, 36, 1);\n@selectedline-backgroundguttercolor: rgba(255, 60, 32, 1);\n@cursor-style: pacman;\n@cursor-color: rgba(255, 213, 0, 1);\n@cursor-shadow: rgba(51, 51, 51, 1);\n@indentguide-linecolor: rgba(0, 84, 147, 1);\n@indentguide-value: 0;\n@folded-codecolor: rgba(255, 0, 255, 1);\n@bracketmatcher-backgroundcolor: rgba(255, 0, 255, 1);\n@comment-color: rgba(0, 84, 147, 1);\n@comment-fontstyle: normal;\n@comment-value: 0;\n@selector-color: rgba(0, 233, 108, 1);\n@selector-fontstyle: normal;\n@pseudo-color: rgba(255, 194, 0, 1);\n@pseudo-fontstyle: normal;\n@pseudo-weight: normal;\n@selector-weight: normal;\n@propertyname-color: rgba(53, 143, 57, 1);\n@propertyname-fontstyle: normal;\n@propertyname-weight: normal;\n@propertyvalue-color: rgba(255, 126, 121, 1);\n@propertyvalue-fontstyle: normal;\n@propertyvalue-weight: normal;\n@unit-color: rgba(255, 251, 0, 1);\n@unit-fontstyle: normal;\n@unit-weight: normal;\n@number-color: rgba(0, 253, 255, 1);\n@number-fontstyle: normal;\n@number-weight: normal;\n@punctuation-color: rgba(255, 47, 146, 1);\n@punctuation-weight: normal;\n@doctype-color: rgba(0, 249, 0, 1);\n@doctype-fontstyle: normal;\n@doctype-weight: bold;\n@tag-color: rgba(87, 100, 186, 1);\n@tag-fontstyle: normal;\n@tag-weight: normal;\n@attributename-color: rgba(255, 47, 146, 1);\n@attributename-fontstyle: normal;\n@attributename-weight: normal;\n@quotationmark-color: rgba(0, 250, 93, 1);\n@quotationmark-weight: bold;\n@string-color: rgba(146, 144, 0, 1);\n@string-fontstyle: italic;\n@string-weight: normal;\n@storage-color: rgba(255, 146, 0, 1);\n@storage-fontstyle: normal;\n@storage-weight: normal;\n@storagemodifier-color: rgba(0, 145, 147, 1);\n@storagemodifier-fontstyle: normal;\n@storagemodifier-weight: normal;\n@operator-color: rgba(255, 251, 0, 1);\n@operator-weight: normal;\n@functionname-color: rgba(71, 177, 74, 1);\n@functionname-fontstyle: normal;\n@functionname-weight: normal;\n@consolelog-color: rgba(255, 38, 0, 1);\n@consolelog-fontstyle: normal;\n@consolelog-weight: normal;\n@class-color: rgba(161, 136, 125, 1);\n@class-fontstyle: normal;\n@class-weight: normal;\n@instance-color: rgba(230, 239, 151, 1);\n@instance-fontstyle: normal;\n@instance-weight: normal;\n@regex-color: rgba(255, 255, 255, 1);\n@regex-fontstyle: normal;\n@regex-weight: normal;\n@control-color: rgba(148, 55, 255, 1);\n@control-fontstyle: normal;\n@control-weight: normal;\n@constant-color: rgba(255, 38, 0, 1);\n@constant-weight: normal;\n@boolean-color: rgba(4, 51, 255, 1);\n@boolean-fontstyle: italic;\n@boolean-weight: normal;\n@module-color: rgba(255, 138, 216, 1);\n@module-fontstyle: normal;\n@module-weight: normal;\n@namespace-color: rgba(239, 251, 34, 1);\n@namespace-fontstyle: normal;\n@namespace-weight: normal;\n@type-color: rgba(0, 249, 0, 1);\n@type-fontstyle: normal;\n@type-weight: bold;\n@identifier-color: rgba(148, 82, 0, 1);\n@identifier-fontstyle: normal;\n@identifier-weight: bold;\n@gitgutter-lineaddedcolor: rgba(0, 255, 102, 1);\n@gitgutter-linemodifiedcolor: rgba(255, 213, 0, 1);\n@gitgutter-lineremovedcolor: rgba(255, 0, 0, 1);"
  }
}
```
